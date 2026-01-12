import { registry } from "@jahia/ui-extender";
import PageInsightsBlock from "./pageInsightsBlock";

export default function () {
  registry.add("callback", "pageInsights", {
    targets: ["jahiaApp-init:999"],
    callback: async () => {
      const jahia = (
        window as Window & {
          jahia?: {
            i18n?: {
              loadNamespaces: (
                namespaces: string | string[]
              ) => Promise<void> | void;
            };
          };
        }
      ).jahia;
      jahia?.i18n?.loadNamespaces("page-insights");

      registry.add("pageHeader", "pageInsights", {
        Component: PageInsightsBlock,
        targets: [{ id: "jnt:page", priority: 0 }],
        requireModuleInstalledOnSite: 'jexperience, page-insights',
      });
      console.log("%c pageInsights is activated", "color: #3c8cba");
    },
  });
}
