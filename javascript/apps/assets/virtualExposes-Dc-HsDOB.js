const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./init-CnT-J9-w.js","./preload-helper-UZRgTS1n.js","./page_mf_2_insights__mf_v__runtimeInit__mf_v__-joFqPJ2D.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./preload-helper-UZRgTS1n.js";
const exposesMap = {
  "./init": async () => {
    const importModule = await __vitePreload(() => import("./init-CnT-J9-w.js"), true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url);
    const exportModule = {};
    Object.assign(exportModule, importModule);
    Object.defineProperty(exportModule, "__esModule", {
      value: true,
      enumerable: false
    });
    return exportModule;
  }
};
export {
  exposesMap as default
};
//# sourceMappingURL=virtualExposes-Dc-HsDOB.js.map
