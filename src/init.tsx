import { registry } from "@jahia/ui-extender";

export default function () {
  registry.add("callback", "pageInsights", {
    targets: ["jahiaApp-init:60"],
    callback: async () => {
      const jahia = (
        window as Window & {
          jahia?: {
            i18n?: {
              loadNamespaces: (namespaces: string | string[]) => Promise<void> | void;
            };
          };
        }
      ).jahia;
      jahia?.i18n?.loadNamespaces("page-insights");

      // Use dynamic import to delay loading the component
      const { default: PageInsightsBlock } = await import("./pageInsightsBlock");

      registry.add("pageHeader", "pageInsights", {
        Component: PageInsightsBlock,
        targets: ["jnt:page"],
        requireModuleInstalledOnSite: "jexperience, page-insights",
      });
      console.log("%c pageInsights is activated", "color: #3c8cba");
    },
  });
}
