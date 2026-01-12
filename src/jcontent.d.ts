declare module "@jahia/jcontent" {
  export const useContentEditorContext: () => {
    nodeData?: {
      path?: string;
      uuid?: string;
      hasWritePermission?: boolean;
    };
    siteInfo?: {
      languages: string[];
      siteKey?: string;
    };
    siteKey?: string;
    lang?: string;
  };
}
