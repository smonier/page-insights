import { useEffect, useMemo, useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
// import { Button, Dropdown } from "@jahia/moonstone";
import { Bar, Reload } from "@jahia/moonstone/dist/icons";
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { clearInsightsCache, getCachedInsights, getPageInsights } from "./unomiInsightsService.js";
import styles from "./pageInsightsBlock.module.css";
import i18n from "./i18n";
import { useNodeInfo } from "@jahia/data-helper";

const NAMESPACE = "page-insights";

Chart.register(
  BarController,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
);

type JContentState = {
  language?: string;
  jcontent?: {
    path?: string;
  };
};

/** @param {Record<string, any> | null | undefined} insights */
type InsightsSummary = {
  allVisits: number | string | null;
  visitsInRange: number | string | null;
  directEntries?: number | string | null;
  uniqueSessions?: number | string | null;
  uniqueVisitors?: number | string | null;
  lastActivity: string | null;
  topInterests: string[] | string | null;
};

const extractSummary = (insights: Record<string, unknown> | null): InsightsSummary | null => {
  if (!insights || typeof insights !== "object") {
    return null;
  }

  const summary =
    (insights as Record<string, any>).summary ||
    (insights as Record<string, any>).metrics ||
    insights;

  return {
    allVisits: summary.allVisits ?? null,
    visitsInRange: summary.visitsInRange ?? null,
    directEntries: summary.directEntries ?? null,
    uniqueSessions: summary.uniqueSessions ?? null,
    uniqueVisitors: summary.uniqueVisitors ?? null,
    lastActivity: summary.lastActivity || summary.lastSeen || summary.lastEvent || null,
    topInterests: summary.topInterests || summary.interests || summary.topTags || null,
  };
};

const formatValue = (value: unknown) => {
  if (Array.isArray(value)) {
    return value.length ? value.join(", ") : "-";
  }

  if (value === null || value === undefined || value === "") {
    return "-";
  }

  return String(value);
};

const getRangeLabel = (timeRangeKey: string, t: (key: string) => string) => {
  const rangeMap: Record<string, string> = {
    last6Months: t("rangeLast6Months"),
    last3Months: t("rangeLast3Months"),
    lastMonth: t("rangeLastMonth"),
    lastWeek: t("rangeLastWeek"),
    today: t("rangeToday"),
  };
  return rangeMap[timeRangeKey] || t("rangeLastMonth");
};

const PageInsightsBlock = () => {
  const { t } = useTranslation(NAMESPACE, { i18n });
  const [timeRangeKey, setTimeRangeKey] = useState("lastMonth");
  const { path, language } = useSelector(
    (state: JContentState) => ({
      path: state.jcontent?.path,
      language: state.language,
    }),
    shallowEqual,
  );
  const nodeInfo = useNodeInfo(
    {
      path: path || undefined,
      language,
    },
    { getSiteInstalledModules: true },
  );
  const pagePath = nodeInfo?.node?.path || "";
  const pageUuid = nodeInfo?.node?.uuid || "";
  const siteKey = useMemo(() => {
    const sitePath = nodeInfo?.node?.site?.path;
    if (!sitePath) {
      return "";
    }
    const parts = sitePath.split("/").filter(Boolean);
    return parts[1] || "";
  }, [nodeInfo]);
  const pageKey = pagePath || pageUuid;
  const installedModules = useMemo(() => {
    const modules = nodeInfo?.node?.site?.installedModulesWithAllDependencies;
    return Array.isArray(modules) ? modules : [];
  }, [nodeInfo]);
  const isJexperienceEnabled = useMemo(() => {
    if (installedModules.length) {
      return installedModules.includes("jexperience") && installedModules.includes("page-insights");
    }

    return true;
  }, [installedModules]);
  const isDashboardEnabled = useMemo(() => {
    if (installedModules.length) {
      return installedModules.includes("jexperience-dashboards");
    }

    return false;
  }, [installedModules]);
  const dashboardUrl = useMemo(() => {
    if (!siteKey || !pagePath || typeof window === "undefined") {
      return "";
    }

    const host = window.location.host || "";
    const serverName = host.split(".")[0] || "";
    const scope = encodeURIComponent(siteKey);
    const pagePathParam = encodeURIComponent(pagePath);

    return `${window.location.origin}/modules/kibana-proxy/s/${serverName}-kibana-dashboard/app/dashboards#/view/4a272170-ba5f-11eb-8d2f-1d6f2e41a267?embed=true&show-time-filter=true&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:a6ca12a0-453b-11eb-b316-7d4f6c44727d,key:scope.keyword,negate:!f,params:(query:'${scope}'),type:phrase),query:(match_phrase:(scope.keyword:'${scope}'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:a6ca12a0-453b-11eb-b316-7d4f6c44727d,key:target.properties.pageInfo.pagePath.keyword,negate:!f,params:(query:${pagePathParam}),type:phrase),query:(match_phrase:(target.properties.pageInfo.pagePath.keyword:${pagePathParam})))),query:(language:kuery,query:''))`;
  }, [siteKey, pagePath]);
  const [expanded, setExpanded] = useState(false);
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState<Record<string, unknown> | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [refreshIndex, setRefreshIndex] = useState(0);
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  const accentLightLine = useMemo(() => {
    if (typeof window === "undefined") {
      return "rgba(0, 0, 0, 0.15)";
    }
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-accent_light_plain60")
      .trim();
    return value || "rgba(0, 0, 0, 0.15)";
  }, []);
  const accentLightTooltip = useMemo(() => {
    if (typeof window === "undefined") {
      return "rgba(0, 0, 0, 0.15)";
    }
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-accent_light_plain20")
      .trim();
    return value || "rgba(0, 0, 0, 0.15)";
  }, []);
  const accentDark = useMemo(() => {
    if (typeof window === "undefined") {
      return "rgba(0, 0, 0, 0.9)";
    }
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue("--color-accent_dark_contrast")
      .trim();
    return value || "rgba(0, 0, 0, 0.9)";
  }, []);

  useEffect(() => {
    setStatus("idle");
    setData(null);
    setError(null);
  }, [pageKey]);

  useEffect(() => {
    if (!expanded || !pageKey) {
      return;
    }

    const cached = getCachedInsights({ pagePath, pageUuid, timeRangeKey });
    if (cached) {
      setData(cached);
      setStatus("success");
      return;
    }

    let isActive = true;
    const controller = new AbortController();

    setStatus("loading");
    setError(null);

    getPageInsights({
      pagePath,
      pageUuid,
      siteKey,
      timeRangeKey,
      signal: controller.signal,
    })
      .then((insights) => {
        if (!isActive) {
          return;
        }
        setData((insights ?? null) as Record<string, unknown> | null);
        setStatus("success");
      })
      .catch((err) => {
        if (!isActive || err?.name === "AbortError") {
          return;
        }
        setError(err);
        setStatus("error");
      });

    return () => {
      isActive = false;
      controller.abort();
    };
  }, [expanded, pageKey, pagePath, pageUuid, refreshIndex, timeRangeKey]);

  const summary = useMemo(() => extractSummary(data), [data]);
  const timeSeries = useMemo(
    () =>
      Array.isArray(data?.timeSeries)
        ? data.timeSeries
        : ([] as Array<{ date: string; count: number }>),
    [data],
  );
  const maxSeriesCount = useMemo(() => {
    if (!timeSeries.length) {
      return 0;
    }
    return Math.max(...timeSeries.map((entry) => entry.count || 0));
  }, [timeSeries]);
  const hasData = data && Object.keys(data).length > 0;

  useEffect(() => {
    if (!expanded || !chartRef.current) {
      return;
    }

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
      chartInstanceRef.current = null;
    }

    if (!timeSeries.length) {
      return;
    }

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) {
      return;
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: timeSeries.map((entry) => entry.date),
        datasets: [
          {
            label: t("viewsOverTime"),
            data: timeSeries.map((entry) => entry.count),
            backgroundColor: "rgba(74, 74, 74, 0.8)",
            borderRadius: 4,
            maxBarThickness: 18,
            order: 2,
          },
          {
            label: t("viewsOverTime"),
            type: "line",
            data: timeSeries.map((entry) => entry.count),
            borderColor: accentLightLine,
            backgroundColor: accentLightLine,
            borderWidth: 2,
            pointRadius: 2,
            pointHoverRadius: 3,
            tension: 0.3,
            order: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            backgroundColor: accentLightTooltip,
            titleColor: accentDark,
            bodyColor: accentDark,
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              maxRotation: 0,
              autoSkip: true,
              maxTicksLimit: 6,
            },
          },
          y: {
            grid: { color: "rgba(0, 0, 0, 0.08)" },
            ticks: {
              precision: 0,
              stepSize: Math.max(1, Math.ceil(maxSeriesCount / 4)),
            },
          },
        },
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [expanded, timeSeries, t, maxSeriesCount]);

  const handleRetry = () => {
    clearInsightsCache({ pagePath, pageUuid, timeRangeKey });
    setStatus("loading");
    setError(null);
    setData(null);
    setRefreshIndex((prev) => prev + 1);
    setExpanded(true);
  };

  if (nodeInfo?.loading || !pageKey || !isJexperienceEnabled) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.headerRow}
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        aria-label={expanded ? t("toggleHide") : t("toggleShow")}
        onClick={() => setExpanded((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setExpanded((prev) => !prev);
          }
        }}
        style={{ cursor: "pointer" }}
      >
        <span className={`${styles.chevron} ${expanded ? styles.chevronExpanded : ""}`} />
        <div className={styles.title}>{t("title")}</div>
        <div className={styles.headerSpacer} />
        {expanded && (
          <>
            {/* Moonstone Dropdown temporarily replaced with a native select. */}
            <div onClick={(e) => e.stopPropagation()}>
              <select
                className={styles.rangeSelect}
                value={timeRangeKey}
                aria-label={t("rangeLabel")}
                onChange={(e) => {
                  const nextValue = e.target.value;
                  setTimeRangeKey(nextValue);
                  clearInsightsCache({ pagePath, pageUuid, timeRangeKey });
                  setRefreshIndex((prev) => prev + 1);
                }}
              >
                <option value="last6Months">{t("rangeLast6Months")}</option>
                <option value="last3Months">{t("rangeLast3Months")}</option>
                <option value="lastMonth">{t("rangeLastMonth")}</option>
                <option value="lastWeek">{t("rangeLastWeek")}</option>
                <option value="today">{t("rangeToday")}</option>
              </select>
            </div>
            {/* Moonstone Button temporarily replaced with a native button. */}
            <button
              type="button"
              className={`${styles.actionButton} ${styles.refreshButton}`}
              onClick={(e) => {
                e.stopPropagation();
                clearInsightsCache({ pagePath, pageUuid, timeRangeKey });
                setRefreshIndex((prev) => prev + 1);
              }}
            >
              <span className={styles.buttonIcon} aria-hidden="true">
                <Reload />
              </span>
              <span>{t("refresh")}</span>
            </button>
            {isDashboardEnabled && (
              <>
                {/* Moonstone Button temporarily replaced with a native button. */}
                <button
                  type="button"
                  className={`${styles.actionButton} ${styles.dashboardButton}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (dashboardUrl) {
                      window.open(dashboardUrl, "_blank", "noopener,noreferrer");
                    }
                  }}
                >
                  <span className={styles.buttonIcon} aria-hidden="true">
                    <Bar />
                  </span>
                  <span>{t("pageDashboard")}</span>
                </button>
              </>
            )}
          </>
        )}
      </div>
      {expanded && (
        <div className={styles.body}>
          {!pageKey && <div className={styles.stateText}>{t("empty")}</div>}
          {pageKey && status === "loading" && (
            <div className={styles.stateText}>{t("loading")}</div>
          )}
          {pageKey && status === "error" && (
            <div>
              <div className={styles.stateText}>{t("error")}</div>
              <button type="button" className={styles.retry} onClick={handleRetry}>
                {t("retry")}
              </button>
            </div>
          )}
          {pageKey && status === "success" && !hasData && (
            <div className={styles.stateText}>{t("empty")}</div>
          )}
          {pageKey && status === "success" && hasData && (
            <div>
              <div className={styles.cardGrid}>
                <div className={styles.card}>
                  <div className={styles.cardLabel}>{t("allVisits")}</div>
                  <div className={styles.cardValue}>{formatValue(summary?.allVisits)}</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardLabel}>
                    {t("uniqueSessions")} ({getRangeLabel(timeRangeKey, t)})
                  </div>
                  <div className={styles.cardValue}>{formatValue(summary?.uniqueSessions)}</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardLabel}>
                    {t("uniqueVisitors")} ({getRangeLabel(timeRangeKey, t)})
                  </div>
                  <div className={styles.cardValue}>{formatValue(summary?.uniqueVisitors)}</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardLabel}>
                    {t("visits")} ({getRangeLabel(timeRangeKey, t)})
                  </div>
                  <div className={styles.cardValue}>{formatValue(summary?.visitsInRange)}</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardLabel}>
                    {t("directEntries")} ({getRangeLabel(timeRangeKey, t)})
                  </div>
                  <div className={styles.cardValue}>{formatValue(summary?.directEntries)}</div>
                </div>
              </div>
              <div className={styles.sectionTitle}>{t("viewsOverTime")}</div>
              {timeSeries.length > 0 ? (
                <div className={styles.chart}>
                  <canvas ref={chartRef} className={styles.chartCanvas} />
                </div>
              ) : (
                <div className={styles.stateText}>{t("empty")}</div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PageInsightsBlock;
