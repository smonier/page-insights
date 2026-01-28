
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    import {loadShare} from "@module-federation/runtime";
    const importMap = {
      
        "@jahia/ui-extender": async () => {
          let pkg = await import("__mf__virtual/_mf_0_smonier_mf_1_page_mf_2_insights__prebuild___mf_0_jahia_mf_1_ui_mf_2_extender__prebuild__.js");
            return pkg;
        }
      ,
        "chart.js": async () => {
          let pkg = await import("__mf__virtual/_mf_0_smonier_mf_1_page_mf_2_insights__prebuild__chart_mf_3_js__prebuild__.js");
            return pkg;
        }
      ,
        "react": async () => {
          let pkg = await import("__mf__virtual/_mf_0_smonier_mf_1_page_mf_2_insights__prebuild__react__prebuild__.js");
            return pkg;
        }
      ,
        "react-dom": async () => {
          let pkg = await import("__mf__virtual/_mf_0_smonier_mf_1_page_mf_2_insights__prebuild__react_mf_2_dom__prebuild__.js");
            return pkg;
        }
      ,
        "react-redux": async () => {
          let pkg = await import("__mf__virtual/_mf_0_smonier_mf_1_page_mf_2_insights__prebuild__react_mf_2_redux__prebuild__.js");
            return pkg;
        }
      
    }
      const usedShared = {
      
          "@jahia/ui-extender": {
            name: "@jahia/ui-extender",
            version: "1.2.0",
            scope: ["default"],
            loaded: false,
            from: "@smonier/page-insights",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"@jahia/ui-extender"}' must be provided by host`);
              }
              usedShared["@jahia/ui-extender"].loaded = true
              const {"@jahia/ui-extender": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^1.2.0",
              
            }
          }
        ,
          "chart.js": {
            name: "chart.js",
            version: "4.5.1",
            scope: ["default"],
            loaded: false,
            from: "@smonier/page-insights",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"chart.js"}' must be provided by host`);
              }
              usedShared["chart.js"].loaded = true
              const {"chart.js": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^4.5.1",
              
            }
          }
        ,
          "react": {
            name: "react",
            version: "18.3.1",
            scope: ["default"],
            loaded: false,
            from: "@smonier/page-insights",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"react"}' must be provided by host`);
              }
              usedShared["react"].loaded = true
              const {"react": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^18.3.1",
              
            }
          }
        ,
          "react-dom": {
            name: "react-dom",
            version: "18.3.1",
            scope: ["default"],
            loaded: false,
            from: "@smonier/page-insights",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"react-dom"}' must be provided by host`);
              }
              usedShared["react-dom"].loaded = true
              const {"react-dom": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^18.3.1",
              
            }
          }
        ,
          "react-redux": {
            name: "react-redux",
            version: "9.2.0",
            scope: ["default"],
            loaded: false,
            from: "@smonier/page-insights",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"react-redux"}' must be provided by host`);
              }
              usedShared["react-redux"].loaded = true
              const {"react-redux": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^9.2.0",
              
            }
          }
        
    }
      const usedRemotes = [
      ]
      export {
        usedShared,
        usedRemotes
      }
      