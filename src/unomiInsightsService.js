/** @type {Map<string, any>} */
const insightsCache = new Map();
/** @type {Map<string, Promise<any>>} */
const inflightRequests = new Map();

const DEFAULT_TIMEOUT_MS = 8000;

const getDefaultBaseUrl = () => {
  if (typeof window === "undefined") {
    return "";
  }

  return (
    window.contextJsParameters?.config?.pageInsights?.unomiBaseUrl || window.location?.origin || ""
  );
};

const getDefaultSiteKey = () => {
  if (typeof window === "undefined") {
    return "";
  }

  return window.contextJsParameters?.siteKey || window.contextJsParameters?.site?.key || "";
};

/**
 * @param {{ pagePath?: string; pageUuid?: string; timeRangeKey?: string }} params
 */
const getCacheKey = ({ pagePath, pageUuid, timeRangeKey }) => {
  if (pagePath) {
    return `pagePath:${pagePath}:range:${timeRangeKey || "lastMonth"}`;
  }

  if (pageUuid) {
    return `pageUuid:${pageUuid}:range:${timeRangeKey || "lastMonth"}`;
  }

  return "";
};

/**
 * @param {string | undefined} timeRangeKey
 */
const resolveDateExpr = (timeRangeKey) => {
  switch (timeRangeKey) {
    case "last6Months":
      return "now-180d";
    case "last3Months":
      return "now-90d";
    case "lastMonth":
      return "now-30d";
    case "lastWeek":
      return "now-7d";
    case "today":
      return "now-1d";
    default:
      return "now-30d";
  }
};

/**
 * @param {{
 *   baseUrl: string;
 *   siteKey: string;
 *   pagePath?: string;
 *   timeRangeKey?: string;
 *   endpointPath: string;
 *   includeTimeRange: boolean;
 *   optimizedQuery?: boolean;
 *   bodyOverride?: Record<string, unknown>;
 * }} params
 */
const buildQueryRequest = ({
  baseUrl,
  siteKey,
  pagePath,
  timeRangeKey,
  endpointPath,
  includeTimeRange,
  optimizedQuery,
  bodyOverride,
}) => {
  if (!baseUrl) {
    throw new Error("Unomi base URL is not configured");
  }

  const sanitizedBaseUrl = baseUrl.replace(/\/$/, "");

  if (!siteKey) {
    throw new Error("Missing siteKey for Unomi proxy");
  }

  const proxyBase = `${sanitizedBaseUrl}/modules/jexperience/proxy/${siteKey}`;

  const url = new URL(`${proxyBase}${endpointPath}`);
  if (optimizedQuery) {
    url.searchParams.set("optimizedQuery", "true");
  }

  return {
    url,
    options: {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      // TODO: If your proxy does not handle auth, add Basic Auth headers here.
      body: JSON.stringify(
        bodyOverride || {
          condition: {
            type: "booleanCondition",
            parameterValues: {
              operator: "and",
              subConditions: [
                {
                  type: "eventTypeCondition",
                  parameterValues: {
                    eventTypeId: "view",
                  },
                },
                ...(includeTimeRange
                  ? [
                      {
                        type: "eventPropertyCondition",
                        parameterValues: {
                          propertyName: "timeStamp",
                          comparisonOperator: "greaterThanOrEqualTo",
                          propertyValueDateExpr: resolveDateExpr(timeRangeKey),
                        },
                      },
                    ]
                  : []),
                ...(pagePath
                  ? [
                      {
                        type: "eventPropertyCondition",
                        parameterValues: {
                          propertyName: "target.properties.pageInfo.pagePath",
                          comparisonOperator: "equals",
                          propertyValue: pagePath,
                        },
                      },
                    ]
                  : []),
              ],
            },
          },
          ...(endpointPath === "/cxs/query/event/timeStamp"
            ? {
                aggregate: {
                  type: "date",
                  parameters: {
                    interval: "1d",
                    format: "yyyy-MM-dd",
                  },
                },
              }
            : endpointPath === "/cxs/query/event/sessionId" ||
                endpointPath === "/cxs/query/event/profileId"
              ? {
                  aggregate: {
                    type: "string",
                  },
                }
              : {}),
        },
      ),
    },
  };
};

/**
 * @param {AbortSignal | undefined} signal
 * @param {number} timeoutMs
 */
const withAbortTimeout = (signal, timeoutMs) => {
  const controller = new AbortController();

  const onAbort = () => {
    controller.abort();
  };

  if (signal) {
    if (signal.aborted) {
      controller.abort();
    } else {
      signal.addEventListener("abort", onAbort, { once: true });
    }
  }

  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  const cleanup = () => {
    clearTimeout(timeoutId);
    if (signal) {
      signal.removeEventListener("abort", onAbort);
    }
  };

  return { signal: controller.signal, cleanup };
};

/**
 * @param {{ pagePath?: string; pageUuid?: string; timeRangeKey?: string }} params
 */
export const getCachedInsights = ({ pagePath, pageUuid, timeRangeKey }) => {
  const cacheKey = getCacheKey({ pagePath, pageUuid, timeRangeKey });
  return cacheKey ? insightsCache.get(cacheKey) : undefined;
};

/**
 * @param {{
 *   pagePath?: string;
 *   pageUuid?: string;
 *   baseUrl?: string;
 *   siteKey?: string;
 *   timeRangeKey?: string;
 *   timeoutMs?: number;
 *   signal?: AbortSignal;
 * }} params
 */
export const getPageInsights = async ({
  pagePath,
  pageUuid,
  baseUrl = getDefaultBaseUrl(),
  siteKey = getDefaultSiteKey(),
  timeRangeKey,
  timeoutMs = DEFAULT_TIMEOUT_MS,
  signal,
}) => {
  const cacheKey = getCacheKey({ pagePath, pageUuid, timeRangeKey });

  if (!cacheKey) {
    throw new Error("Missing pagePath/pageUuid for insights lookup");
  }

  if (insightsCache.has(cacheKey)) {
    return insightsCache.get(cacheKey);
  }

  if (inflightRequests.has(cacheKey)) {
    return inflightRequests.get(cacheKey);
  }

  const requestPromise = (async () => {
    const timeStampRequest = buildQueryRequest({
      baseUrl,
      siteKey,
      pagePath,
      timeRangeKey,
      endpointPath: "/cxs/query/event/timeStamp",
      includeTimeRange: true,
      optimizedQuery: true,
    });
    const allTimeRequest = buildQueryRequest({
      baseUrl,
      siteKey,
      pagePath,
      timeRangeKey,
      endpointPath: "/cxs/query/event/count",
      includeTimeRange: false,
      optimizedQuery: true,
      bodyOverride: {
        type: "booleanCondition",
        parameterValues: {
          operator: "and",
          subConditions: [
            {
              type: "eventPropertyCondition",
              parameterValues: {
                propertyName: "target.properties.pageInfo.pagePath",
                comparisonOperator: "equals",
                propertyValue: pagePath,
              },
            },
          ],
        },
      },
    });
    const directEntryRequest = buildQueryRequest({
      baseUrl,
      siteKey,
      pagePath,
      timeRangeKey,
      endpointPath: "/cxs/query/event/target.properties.pageInfo.sameDomainReferrer",
      includeTimeRange: true,
      optimizedQuery: true,
    });
    const sessionRequest = buildQueryRequest({
      baseUrl,
      siteKey,
      pagePath,
      timeRangeKey,
      endpointPath: "/cxs/query/event/sessionId",
      includeTimeRange: true,
      optimizedQuery: true,
    });
    const visitorRequest = buildQueryRequest({
      baseUrl,
      siteKey,
      pagePath,
      timeRangeKey,
      endpointPath: "/cxs/query/event/profileId",
      includeTimeRange: true,
      optimizedQuery: true,
    });

    const { signal: combinedSignal, cleanup } = withAbortTimeout(signal, timeoutMs);

    try {
      const [
        timeStampResponse,
        allTimeResponse,
        directEntryResponse,
        sessionResponse,
        visitorResponse,
      ] = await Promise.all([
        fetch(timeStampRequest.url.toString(), {
          ...timeStampRequest.options,
          signal: combinedSignal,
        }),
        fetch(allTimeRequest.url.toString(), {
          ...allTimeRequest.options,
          signal: combinedSignal,
        }),
        fetch(directEntryRequest.url.toString(), {
          ...directEntryRequest.options,
          signal: combinedSignal,
        }),
        fetch(sessionRequest.url.toString(), {
          ...sessionRequest.options,
          signal: combinedSignal,
        }),
        fetch(visitorRequest.url.toString(), {
          ...visitorRequest.options,
          signal: combinedSignal,
        }),
      ]);

      if (!timeStampResponse.ok) {
        throw new Error(`Unomi request failed (${timeStampResponse.status})`);
      }
      if (!allTimeResponse.ok) {
        throw new Error(`Unomi request failed (${allTimeResponse.status})`);
      }
      if (!directEntryResponse.ok) {
        throw new Error(`Unomi request failed (${directEntryResponse.status})`);
      }
      if (!sessionResponse.ok) {
        throw new Error(`Unomi request failed (${sessionResponse.status})`);
      }
      if (!visitorResponse.ok) {
        throw new Error(`Unomi request failed (${visitorResponse.status})`);
      }

      const timeStampData = await timeStampResponse.json();
      const allTimeData = await allTimeResponse.json();
      const directEntryData = await directEntryResponse.json();
      const sessionData = await sessionResponse.json();
      const visitorData = await visitorResponse.json();

      const allVisits =
        typeof allTimeData === "number"
          ? allTimeData
          : typeof allTimeData?.count === "number"
            ? allTimeData.count
            : typeof allTimeData?._all === "number"
              ? allTimeData._all
              : 0;
      const visitsInRange =
        typeof timeStampData?._filtered === "number" ? timeStampData._filtered : 0;
      const directEntries = typeof directEntryData?.false === "number" ? directEntryData.false : 0;

      const uniqueSessions = Object.keys(sessionData || {}).filter(
        (key) => !key.startsWith("_"),
      ).length;
      const uniqueVisitors = Object.keys(visitorData || {}).filter(
        (key) => !key.startsWith("_"),
      ).length;

      const timeSeriesMap = new Map();
      Object.entries(timeStampData || {}).forEach(([key, value]) => {
        if (key.startsWith("_")) {
          return;
        }
        if (typeof value !== "number") {
          return;
        }
        const dateKey = key.slice(0, 10);
        timeSeriesMap.set(dateKey, (timeSeriesMap.get(dateKey) || 0) + value);
      });

      const timeSeries = Array.from(timeSeriesMap.entries())
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([date, count]) => ({ date, count }));

      const normalized = {
        summary: {
          allVisits,
          visitsInRange,
          directEntries,
          uniqueSessions,
          uniqueVisitors,
        },
        timeSeries,
        raw: {
          timeStampData,
          allTimeData,
          directEntryData,
          sessionData,
          visitorData,
        },
      };

      if (timeStampData && Object.keys(timeStampData).length > 0) {
        insightsCache.set(cacheKey, normalized);
      }

      return normalized;
    } finally {
      cleanup();
      inflightRequests.delete(cacheKey);
    }
  })();

  inflightRequests.set(cacheKey, requestPromise);

  return requestPromise;
};

/**
 * @param {{ pagePath?: string; pageUuid?: string; timeRangeKey?: string }=} params
 */
export const clearInsightsCache = ({ pagePath, pageUuid, timeRangeKey } = {}) => {
  if (!pagePath && !pageUuid) {
    insightsCache.clear();
    return;
  }

  const cacheKey = getCacheKey({ pagePath, pageUuid, timeRangeKey });
  if (cacheKey) {
    insightsCache.delete(cacheKey);
  }
};
