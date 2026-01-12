/// <reference types="vite/client" />

declare global {
  interface Window {
    contextJsParameters?: {
      config?: {
        pageInsights?: {
          unomiBaseUrl?: string;
        };
      };
      siteKey?: string;
      site?: {
        key?: string;
      };
      pagePath?: string;
      pageUuid?: string;
      path?: string;
      uuid?: string;
      nodePath?: string;
      nodeUuid?: string;
      pathInfo?: string;
      lang?: string;
      language?: string;
    };
    jahia?: {
      i18n?: {
        loadNamespaces: (namespaces: string | string[]) => Promise<void> | void;
      };
    };
  }
}

export {};
