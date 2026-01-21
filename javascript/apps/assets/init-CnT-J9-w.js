const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./pageInsightsBlock-D-Y8tRMV.js","./preload-helper-UZRgTS1n.js","./page_mf_2_insights__loadShare__react__loadShare__-BOGI0a0r.js","./_commonjsHelpers-CUmg6egw.js","./page_mf_2_insights__mf_v__runtimeInit__mf_v__-joFqPJ2D.js","./pageInsightsBlock--k75exYi.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./preload-helper-UZRgTS1n.js";
import { p as page_mf_2_insights__mf_v__runtimeInit__mf_v__ } from "./page_mf_2_insights__mf_v__runtimeInit__mf_v__-joFqPJ2D.js";
const { initPromise } = page_mf_2_insights__mf_v__runtimeInit__mf_v__;
const res = initPromise.then((runtime) => runtime.loadShare("@jahia/ui-extender", {
  customShareInfo: { shareConfig: {
    singleton: true,
    strictVersion: false,
    requiredVersion: "^1.2.0"
  } }
}));
const exportModule = await res.then((factory) => factory());
var page_mf_2_insights__loadShare___mf_0_jahia_mf_1_ui_mf_2_extender__loadShare__ = exportModule;
function init() {
  page_mf_2_insights__loadShare___mf_0_jahia_mf_1_ui_mf_2_extender__loadShare__.registry.add("callback", "pageInsights", {
    targets: ["jahiaApp-init:60"],
    callback: async () => {
      const jahia = window.jahia;
      jahia?.i18n?.loadNamespaces("page-insights");
      const { default: PageInsightsBlock } = await __vitePreload(async () => {
        const { default: PageInsightsBlock2 } = await import("./pageInsightsBlock-D-Y8tRMV.js").then((n) => n.p);
        return { default: PageInsightsBlock2 };
      }, true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0, import.meta.url);
      page_mf_2_insights__loadShare___mf_0_jahia_mf_1_ui_mf_2_extender__loadShare__.registry.add("pageHeader", "pageInsights", {
        Component: PageInsightsBlock,
        targets: ["jnt:page"],
        requireModuleInstalledOnSite: "jexperience, page-insights"
      });
      console.log("%c pageInsights is activated", "color: #3c8cba");
    }
  });
}
export {
  init as default
};
//# sourceMappingURL=init-CnT-J9-w.js.map
