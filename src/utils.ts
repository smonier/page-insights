/**
 * Utility functions for page insights
 */

/**
 * Converts a value to Rison format for URL encoding
 * Returns unquoted if safe characters only, otherwise single-quoted with escaped quotes
 * @param v - Value to convert
 * @returns Rison-formatted string
 */
export const risonValue = (v: unknown): string => {
  const s = String(v ?? "");
  const isSafe = /^[A-Za-z0-9_\-./~]+$/.test(s);
  if (isSafe) {
    return s;
  }
  return `'${s.replace(/'/g, "''")}'`;
};

/**
 * Extracts the path portion from a dashboard URL (everything after the server name)
 * @param dashboardURL - Full dashboard URL
 * @returns Path and hash portion of the URL
 */
export const extractDashboardPath = (dashboardURL: string): string => {
  console.log("[Utils] Extracting dashboard path from:", dashboardURL);
  const urlObj = new URL(dashboardURL);
  const path = urlObj.pathname + urlObj.hash;
  console.log("[Utils] Extracted path:", path);
  return path;
};

/**
 * Extracts the index value from Kibana searchSourceJSON
 * @param searchSourceJSON - JSON string containing filter configuration
 * @returns Index value or empty string if not found
 */
export const extractIndexFromSearchSource = (searchSourceJSON: string): string => {
  try {
    console.log("[Utils] Parsing searchSourceJSON, length:", searchSourceJSON.length);
    const searchSource = JSON.parse(searchSourceJSON);
    const firstFilter = searchSource.filter?.[0];
    const index = firstFilter?.meta?.index || "";
    console.log("[Utils] Extracted index:", index);
    return index;
  } catch (error) {
    console.error("[Utils] Failed to parse searchSourceJSON:", error);
    return "";
  }
};

/**
 * Builds a Kibana dashboard URL with dynamic filters
 * @param config - Configuration object
 * @returns Complete dashboard URL
 */
export const buildDashboardUrl = (config: {
  origin: string;
  dashboardPath: string;
  indexValue: string;
  siteKey: string;
  pagePath: string;
}): string => {
  console.log("[Utils] Building dashboard URL with config:", config);
  const { origin, dashboardPath, indexValue, siteKey, pagePath } = config;

  const scopeV = risonValue(siteKey);
  const pagePathV = risonValue(pagePath);

  const url =
    `${origin}` +
    `/modules/kibana-proxy` +
    dashboardPath +
    `?embed=true&show-time-filter=true` +
    `&_a=(filters:!(` +
    `('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'${indexValue}',key:scope.keyword,negate:!f,params:(query:${scopeV}),type:phrase),query:(match_phrase:(scope.keyword:${scopeV}))),` +
    `('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'${indexValue}',key:target.properties.pageInfo.pagePath.keyword,negate:!f,params:(query:${pagePathV}),type:phrase),query:(match_phrase:(target.properties.pageInfo.pagePath.keyword:${pagePathV})))` +
    `),query:(language:kuery,query:''))`;

  console.log("[Utils] Built URL:", url);
  return url;
};
