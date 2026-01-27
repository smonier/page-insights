/**
 * GraphQL queries for fetching dashboard configuration
 */

export type DashboardConfig = {
  dashboardURL: string;
  searchSourceJSON: string;
};

/**
 * Fetches dashboard configuration from JCR
 * @returns Dashboard configuration or null if not found
 */
export const fetchDashboardConfig = async (): Promise<DashboardConfig | null> => {
  try {
    console.log("[Dashboard Config] Starting fetch...");
    const query = `
      query GetDashboardConfig {
        jcr {
          nodeByPath(path: "/sites/systemsite/contents/kibana/page-dashboard") {
            dashboardURL: property(name: "kibana:dashboardURL") {
              value
            }
            searchSourceJSON: property(name: "kibana:searchSourceJSON") {
              value
            }
          }
        }
      }
    `;

    const response = await fetch(window.location.origin + "/modules/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      credentials: "include",
    });

    console.log("[Dashboard Config] Response status:", response.status);

    if (!response.ok) {
      throw new Error(`GraphQL request failed: ${response.status}`);
    }

    const result = await response.json();
    console.log("[Dashboard Config] GraphQL result:", result);

    const node = result?.data?.jcr?.nodeByPath;

    if (!node) {
      console.warn("[Dashboard Config] No node found in response");
      return null;
    }

    const config = {
      dashboardURL: node.dashboardURL?.value || "",
      searchSourceJSON: node.searchSourceJSON?.value || "",
    };

    console.log("[Dashboard Config] Fetched config:", {
      dashboardURL: config.dashboardURL,
      searchSourceJSONLength: config.searchSourceJSON.length,
    });

    return config;
  } catch (error) {
    console.error("[Dashboard Config] Failed to fetch:", error);
    return null;
  }
};
