declare module "@jahia/data-helper" {
  export const useNodeInfo: (
    params: {
      path?: string;
      language?: string;
    },
    options?: {
      getSiteInstalledModules?: boolean;
    }
  ) => {
    node?: {
      path?: string;
      uuid?: string;
      site?: {
        path?: string;
        installedModulesWithAllDependencies?: string[];
      };
    };
    loading?: boolean;
    error?: Error;
  };
}
