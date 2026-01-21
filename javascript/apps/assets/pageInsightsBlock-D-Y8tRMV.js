const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./i18n-CL8pXU33.js","./preload-helper-UZRgTS1n.js","./page_mf_2_insights__loadShare__react__loadShare__-BOGI0a0r.js","./_commonjsHelpers-CUmg6egw.js","./page_mf_2_insights__mf_v__runtimeInit__mf_v__-joFqPJ2D.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./preload-helper-UZRgTS1n.js";
import { p as page_mf_2_insights__loadShare__react__loadShare__ } from "./page_mf_2_insights__loadShare__react__loadShare__-BOGI0a0r.js";
import { p as page_mf_2_insights__mf_v__runtimeInit__mf_v__ } from "./page_mf_2_insights__mf_v__runtimeInit__mf_v__-joFqPJ2D.js";
var jsxRuntime = { exports: {} };
var reactJsxRuntime_development = {};
{
  (function() {
    var React = page_mf_2_insights__loadShare__react__loadShare__;
    var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for("react.element");
    var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
    var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
    var REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode");
    var REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler");
    var REACT_PROVIDER_TYPE = /* @__PURE__ */ Symbol.for("react.provider");
    var REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context");
    var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
    var REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense");
    var REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list");
    var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
    var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
    var REACT_OFFSCREEN_TYPE = /* @__PURE__ */ Symbol.for("react.offscreen");
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator";
    function getIteratorFn(maybeIterable) {
      if (maybeIterable === null || typeof maybeIterable !== "object") {
        return null;
      }
      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
      if (typeof maybeIterator === "function") {
        return maybeIterator;
      }
      return null;
    }
    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function error(format) {
      {
        {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          printWarning("error", format, args);
        }
      }
    }
    function printWarning(level, format, args) {
      {
        var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame2.getStackAddendum();
        if (stack !== "") {
          format += "%s";
          args = args.concat([stack]);
        }
        var argsWithFormat = args.map(function(item) {
          return String(item);
        });
        argsWithFormat.unshift("Warning: " + format);
        Function.prototype.apply.call(console[level], console, argsWithFormat);
      }
    }
    var enableScopeAPI = false;
    var enableCacheElement = false;
    var enableTransitionTracing = false;
    var enableLegacyHidden = false;
    var enableDebugTracing = false;
    var REACT_MODULE_REFERENCE;
    {
      REACT_MODULE_REFERENCE = /* @__PURE__ */ Symbol.for("react.module.reference");
    }
    function isValidElementType(type) {
      if (typeof type === "string" || typeof type === "function") {
        return true;
      }
      if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
        return true;
      }
      if (typeof type === "object" && type !== null) {
        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
          return true;
        }
      }
      return false;
    }
    function getWrappedName(outerType, innerType, wrapperName) {
      var displayName = outerType.displayName;
      if (displayName) {
        return displayName;
      }
      var functionName = innerType.displayName || innerType.name || "";
      return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
    }
    function getContextName(type) {
      return type.displayName || "Context";
    }
    function getComponentNameFromType(type) {
      if (type == null) {
        return null;
      }
      {
        if (typeof type.tag === "number") {
          error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
        }
      }
      if (typeof type === "function") {
        return type.displayName || type.name || null;
      }
      if (typeof type === "string") {
        return type;
      }
      switch (type) {
        case REACT_FRAGMENT_TYPE:
          return "Fragment";
        case REACT_PORTAL_TYPE:
          return "Portal";
        case REACT_PROFILER_TYPE:
          return "Profiler";
        case REACT_STRICT_MODE_TYPE:
          return "StrictMode";
        case REACT_SUSPENSE_TYPE:
          return "Suspense";
        case REACT_SUSPENSE_LIST_TYPE:
          return "SuspenseList";
      }
      if (typeof type === "object") {
        switch (type.$$typeof) {
          case REACT_CONTEXT_TYPE:
            var context = type;
            return getContextName(context) + ".Consumer";
          case REACT_PROVIDER_TYPE:
            var provider = type;
            return getContextName(provider._context) + ".Provider";
          case REACT_FORWARD_REF_TYPE:
            return getWrappedName(type, type.render, "ForwardRef");
          case REACT_MEMO_TYPE:
            var outerName = type.displayName || null;
            if (outerName !== null) {
              return outerName;
            }
            return getComponentNameFromType(type.type) || "Memo";
          case REACT_LAZY_TYPE: {
            var lazyComponent = type;
            var payload = lazyComponent._payload;
            var init = lazyComponent._init;
            try {
              return getComponentNameFromType(init(payload));
            } catch (x) {
              return null;
            }
          }
        }
      }
      return null;
    }
    var assign = Object.assign;
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;
    function disabledLog() {
    }
    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
      {
        if (disabledDepth === 0) {
          prevLog = console.log;
          prevInfo = console.info;
          prevWarn = console.warn;
          prevError = console.error;
          prevGroup = console.group;
          prevGroupCollapsed = console.groupCollapsed;
          prevGroupEnd = console.groupEnd;
          var props = {
            configurable: true,
            enumerable: true,
            value: disabledLog,
            writable: true
          };
          Object.defineProperties(console, {
            info: props,
            log: props,
            warn: props,
            error: props,
            group: props,
            groupCollapsed: props,
            groupEnd: props
          });
        }
        disabledDepth++;
      }
    }
    function reenableLogs() {
      {
        disabledDepth--;
        if (disabledDepth === 0) {
          var props = {
            configurable: true,
            enumerable: true,
            writable: true
          };
          Object.defineProperties(console, {
            log: assign({}, props, {
              value: prevLog
            }),
            info: assign({}, props, {
              value: prevInfo
            }),
            warn: assign({}, props, {
              value: prevWarn
            }),
            error: assign({}, props, {
              value: prevError
            }),
            group: assign({}, props, {
              value: prevGroup
            }),
            groupCollapsed: assign({}, props, {
              value: prevGroupCollapsed
            }),
            groupEnd: assign({}, props, {
              value: prevGroupEnd
            })
          });
        }
        if (disabledDepth < 0) {
          error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
    }
    var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
      {
        if (prefix === void 0) {
          try {
            throw Error();
          } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
          }
        }
        return "\n" + prefix + name;
      }
    }
    var reentry = false;
    var componentFrameCache;
    {
      var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
      componentFrameCache = new PossiblyWeakMap();
    }
    function describeNativeComponentFrame(fn, construct) {
      if (!fn || reentry) {
        return "";
      }
      {
        var frame = componentFrameCache.get(fn);
        if (frame !== void 0) {
          return frame;
        }
      }
      var control;
      reentry = true;
      var previousPrepareStackTrace = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var previousDispatcher;
      {
        previousDispatcher = ReactCurrentDispatcher.current;
        ReactCurrentDispatcher.current = null;
        disableLogs();
      }
      try {
        if (construct) {
          var Fake = function() {
            throw Error();
          };
          Object.defineProperty(Fake.prototype, "props", {
            set: function() {
              throw Error();
            }
          });
          if (typeof Reflect === "object" && Reflect.construct) {
            try {
              Reflect.construct(Fake, []);
            } catch (x) {
              control = x;
            }
            Reflect.construct(fn, [], Fake);
          } else {
            try {
              Fake.call();
            } catch (x) {
              control = x;
            }
            fn.call(Fake.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (x) {
            control = x;
          }
          fn();
        }
      } catch (sample) {
        if (sample && control && typeof sample.stack === "string") {
          var sampleLines = sample.stack.split("\n");
          var controlLines = control.stack.split("\n");
          var s = sampleLines.length - 1;
          var c = controlLines.length - 1;
          while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
            c--;
          }
          for (; s >= 1 && c >= 0; s--, c--) {
            if (sampleLines[s] !== controlLines[c]) {
              if (s !== 1 || c !== 1) {
                do {
                  s--;
                  c--;
                  if (c < 0 || sampleLines[s] !== controlLines[c]) {
                    var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                    if (fn.displayName && _frame.includes("<anonymous>")) {
                      _frame = _frame.replace("<anonymous>", fn.displayName);
                    }
                    {
                      if (typeof fn === "function") {
                        componentFrameCache.set(fn, _frame);
                      }
                    }
                    return _frame;
                  }
                } while (s >= 1 && c >= 0);
              }
              break;
            }
          }
        }
      } finally {
        reentry = false;
        {
          ReactCurrentDispatcher.current = previousDispatcher;
          reenableLogs();
        }
        Error.prepareStackTrace = previousPrepareStackTrace;
      }
      var name = fn ? fn.displayName || fn.name : "";
      var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
      {
        if (typeof fn === "function") {
          componentFrameCache.set(fn, syntheticFrame);
        }
      }
      return syntheticFrame;
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
      {
        return describeNativeComponentFrame(fn, false);
      }
    }
    function shouldConstruct(Component) {
      var prototype = Component.prototype;
      return !!(prototype && prototype.isReactComponent);
    }
    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
      if (type == null) {
        return "";
      }
      if (typeof type === "function") {
        {
          return describeNativeComponentFrame(type, shouldConstruct(type));
        }
      }
      if (typeof type === "string") {
        return describeBuiltInComponentFrame(type);
      }
      switch (type) {
        case REACT_SUSPENSE_TYPE:
          return describeBuiltInComponentFrame("Suspense");
        case REACT_SUSPENSE_LIST_TYPE:
          return describeBuiltInComponentFrame("SuspenseList");
      }
      if (typeof type === "object") {
        switch (type.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            return describeFunctionComponentFrame(type.render);
          case REACT_MEMO_TYPE:
            return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
          case REACT_LAZY_TYPE: {
            var lazyComponent = type;
            var payload = lazyComponent._payload;
            var init = lazyComponent._init;
            try {
              return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
            } catch (x) {
            }
          }
        }
      }
      return "";
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement(element) {
      {
        if (element) {
          var owner = element._owner;
          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame.setExtraStackFrame(stack);
        } else {
          ReactDebugCurrentFrame.setExtraStackFrame(null);
        }
      }
    }
    function checkPropTypes(typeSpecs, values, location, componentName, element) {
      {
        var has = Function.call.bind(hasOwnProperty);
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                err.name = "Invariant Violation";
                throw err;
              }
              error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ex) {
              error$1 = ex;
            }
            if (error$1 && !(error$1 instanceof Error)) {
              setCurrentlyValidatingElement(element);
              error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
              setCurrentlyValidatingElement(null);
            }
            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
              loggedTypeFailures[error$1.message] = true;
              setCurrentlyValidatingElement(element);
              error("Failed %s type: %s", location, error$1.message);
              setCurrentlyValidatingElement(null);
            }
          }
        }
      }
    }
    var isArrayImpl = Array.isArray;
    function isArray(a) {
      return isArrayImpl(a);
    }
    function typeName(value) {
      {
        var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        return type;
      }
    }
    function willCoercionThrow(value) {
      {
        try {
          testStringCoercion(value);
          return false;
        } catch (e) {
          return true;
        }
      }
    }
    function testStringCoercion(value) {
      return "" + value;
    }
    function checkKeyStringCoercion(value) {
      {
        if (willCoercionThrow(value)) {
          error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
          return testStringCoercion(value);
        }
      }
    }
    var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
    var RESERVED_PROPS = {
      key: true,
      ref: true,
      __self: true,
      __source: true
    };
    var specialPropKeyWarningShown;
    var specialPropRefWarningShown;
    function hasValidRef(config) {
      {
        if (hasOwnProperty.call(config, "ref")) {
          var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.ref !== void 0;
    }
    function hasValidKey(config) {
      {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) {
            return false;
          }
        }
      }
      return config.key !== void 0;
    }
    function warnIfStringRefCannotBeAutoConverted(config, self) {
      {
        if (typeof config.ref === "string" && ReactCurrentOwner.current && self) ;
      }
    }
    function defineKeyPropWarningGetter(props, displayName) {
      {
        var warnAboutAccessingKey = function() {
          if (!specialPropKeyWarningShown) {
            specialPropKeyWarningShown = true;
            error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
          }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
    }
    function defineRefPropWarningGetter(props, displayName) {
      {
        var warnAboutAccessingRef = function() {
          if (!specialPropRefWarningShown) {
            specialPropRefWarningShown = true;
            error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
          }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, "ref", {
          get: warnAboutAccessingRef,
          configurable: true
        });
      }
    }
    var ReactElement = function(type, key, ref, self, source, owner, props) {
      var element = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: REACT_ELEMENT_TYPE,
        // Built-in properties that belong on the element
        type,
        key,
        ref,
        props,
        // Record the component responsible for creating this element.
        _owner: owner
      };
      {
        element._store = {};
        Object.defineProperty(element._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: false
        });
        Object.defineProperty(element, "_self", {
          configurable: false,
          enumerable: false,
          writable: false,
          value: self
        });
        Object.defineProperty(element, "_source", {
          configurable: false,
          enumerable: false,
          writable: false,
          value: source
        });
        if (Object.freeze) {
          Object.freeze(element.props);
          Object.freeze(element);
        }
      }
      return element;
    };
    function jsxDEV(type, config, maybeKey, source, self) {
      {
        var propName;
        var props = {};
        var key = null;
        var ref = null;
        if (maybeKey !== void 0) {
          {
            checkKeyStringCoercion(maybeKey);
          }
          key = "" + maybeKey;
        }
        if (hasValidKey(config)) {
          {
            checkKeyStringCoercion(config.key);
          }
          key = "" + config.key;
        }
        if (hasValidRef(config)) {
          ref = config.ref;
          warnIfStringRefCannotBeAutoConverted(config, self);
        }
        for (propName in config) {
          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
            props[propName] = config[propName];
          }
        }
        if (type && type.defaultProps) {
          var defaultProps = type.defaultProps;
          for (propName in defaultProps) {
            if (props[propName] === void 0) {
              props[propName] = defaultProps[propName];
            }
          }
        }
        if (key || ref) {
          var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
          if (key) {
            defineKeyPropWarningGetter(props, displayName);
          }
          if (ref) {
            defineRefPropWarningGetter(props, displayName);
          }
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
      }
    }
    var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement$1(element) {
      {
        if (element) {
          var owner = element._owner;
          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
          ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else {
          ReactDebugCurrentFrame$1.setExtraStackFrame(null);
        }
      }
    }
    var propTypesMisspellWarningShown;
    {
      propTypesMisspellWarningShown = false;
    }
    function isValidElement(object) {
      {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }
    }
    function getDeclarationErrorAddendum() {
      {
        if (ReactCurrentOwner$1.current) {
          var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
          if (name) {
            return "\n\nCheck the render method of `" + name + "`.";
          }
        }
        return "";
      }
    }
    function getSourceInfoErrorAddendum(source) {
      {
        return "";
      }
    }
    var ownerHasKeyUseWarning = {};
    function getCurrentComponentErrorInfo(parentType) {
      {
        var info = getDeclarationErrorAddendum();
        if (!info) {
          var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
          if (parentName) {
            info = "\n\nCheck the top-level render call using <" + parentName + ">.";
          }
        }
        return info;
      }
    }
    function validateExplicitKey(element, parentType) {
      {
        if (!element._store || element._store.validated || element.key != null) {
          return;
        }
        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
          return;
        }
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
        var childOwner = "";
        if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
          childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
        }
        setCurrentlyValidatingElement$1(element);
        error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
      }
    }
    function validateChildKeys(node, parentType) {
      {
        if (typeof node !== "object") {
          return;
        }
        if (isArray(node)) {
          for (var i = 0; i < node.length; i++) {
            var child = node[i];
            if (isValidElement(child)) {
              validateExplicitKey(child, parentType);
            }
          }
        } else if (isValidElement(node)) {
          if (node._store) {
            node._store.validated = true;
          }
        } else if (node) {
          var iteratorFn = getIteratorFn(node);
          if (typeof iteratorFn === "function") {
            if (iteratorFn !== node.entries) {
              var iterator = iteratorFn.call(node);
              var step;
              while (!(step = iterator.next()).done) {
                if (isValidElement(step.value)) {
                  validateExplicitKey(step.value, parentType);
                }
              }
            }
          }
        }
      }
    }
    function validatePropTypes(element) {
      {
        var type = element.type;
        if (type === null || type === void 0 || typeof type === "string") {
          return;
        }
        var propTypes;
        if (typeof type === "function") {
          propTypes = type.propTypes;
        } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) {
          propTypes = type.propTypes;
        } else {
          return;
        }
        if (propTypes) {
          var name = getComponentNameFromType(type);
          checkPropTypes(propTypes, element.props, "prop", name, element);
        } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
          propTypesMisspellWarningShown = true;
          var _name = getComponentNameFromType(type);
          error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
        }
        if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
          error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
    }
    function validateFragmentProps(fragment) {
      {
        var keys = Object.keys(fragment.props);
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          if (key !== "children" && key !== "key") {
            setCurrentlyValidatingElement$1(fragment);
            error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
            setCurrentlyValidatingElement$1(null);
            break;
          }
        }
        if (fragment.ref !== null) {
          setCurrentlyValidatingElement$1(fragment);
          error("Invalid attribute `ref` supplied to `React.Fragment`.");
          setCurrentlyValidatingElement$1(null);
        }
      }
    }
    var didWarnAboutKeySpread = {};
    function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
      {
        var validType = isValidElementType(type);
        if (!validType) {
          var info = "";
          if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
            info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
          }
          var sourceInfo = getSourceInfoErrorAddendum();
          if (sourceInfo) {
            info += sourceInfo;
          } else {
            info += getDeclarationErrorAddendum();
          }
          var typeString;
          if (type === null) {
            typeString = "null";
          } else if (isArray(type)) {
            typeString = "array";
          } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
            typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
            info = " Did you accidentally export a JSX literal instead of a component?";
          } else {
            typeString = typeof type;
          }
          error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
        }
        var element = jsxDEV(type, props, key, source, self);
        if (element == null) {
          return element;
        }
        if (validType) {
          var children = props.children;
          if (children !== void 0) {
            if (isStaticChildren) {
              if (isArray(children)) {
                for (var i = 0; i < children.length; i++) {
                  validateChildKeys(children[i], type);
                }
                if (Object.freeze) {
                  Object.freeze(children);
                }
              } else {
                error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              }
            } else {
              validateChildKeys(children, type);
            }
          }
        }
        {
          if (hasOwnProperty.call(props, "key")) {
            var componentName = getComponentNameFromType(type);
            var keys = Object.keys(props).filter(function(k) {
              return k !== "key";
            });
            var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            if (!didWarnAboutKeySpread[componentName + beforeExample]) {
              var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
              error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
              didWarnAboutKeySpread[componentName + beforeExample] = true;
            }
          }
        }
        if (type === REACT_FRAGMENT_TYPE) {
          validateFragmentProps(element);
        } else {
          validatePropTypes(element);
        }
        return element;
      }
    }
    function jsxWithValidationStatic(type, props, key) {
      {
        return jsxWithValidation(type, props, key, true);
      }
    }
    function jsxWithValidationDynamic(type, props, key) {
      {
        return jsxWithValidation(type, props, key, false);
      }
    }
    var jsx = jsxWithValidationDynamic;
    var jsxs = jsxWithValidationStatic;
    reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
    reactJsxRuntime_development.jsx = jsx;
    reactJsxRuntime_development.jsxs = jsxs;
  })();
}
{
  jsxRuntime.exports = reactJsxRuntime_development;
}
var jsxRuntimeExports = jsxRuntime.exports;
const { initPromise: initPromise$1 } = page_mf_2_insights__mf_v__runtimeInit__mf_v__;
const res$1 = initPromise$1.then((runtime) => runtime.loadShare("react-redux", {
  customShareInfo: { shareConfig: {
    singleton: true,
    strictVersion: false,
    requiredVersion: "^9.2.0"
  } }
}));
const exportModule$1 = await res$1.then((factory) => factory());
var page_mf_2_insights__loadShare__react_mf_2_redux__loadShare__ = exportModule$1;
const warn = (i18n, code, msg, rest) => {
  const args = [msg, {
    code,
    ...rest || {}
  }];
  if (i18n?.services?.logger?.forward) {
    return i18n.services.logger.forward(args, "warn", "react-i18next::", true);
  }
  if (isString(args[0])) args[0] = `react-i18next:: ${args[0]}`;
  if (i18n?.services?.logger?.warn) {
    i18n.services.logger.warn(...args);
  } else if (console?.warn) {
    console.warn(...args);
  }
};
const alreadyWarned = {};
const warnOnce = (i18n, code, msg, rest) => {
  if (isString(msg) && alreadyWarned[msg]) return;
  if (isString(msg)) alreadyWarned[msg] = /* @__PURE__ */ new Date();
  warn(i18n, code, msg, rest);
};
const loadedClb = (i18n, cb) => () => {
  if (i18n.isInitialized) {
    cb();
  } else {
    const initialized = () => {
      setTimeout(() => {
        i18n.off("initialized", initialized);
      }, 0);
      cb();
    };
    i18n.on("initialized", initialized);
  }
};
const loadNamespaces = (i18n, ns, cb) => {
  i18n.loadNamespaces(ns, loadedClb(i18n, cb));
};
const loadLanguages = (i18n, lng, ns, cb) => {
  if (isString(ns)) ns = [ns];
  if (i18n.options.preload && i18n.options.preload.indexOf(lng) > -1) return loadNamespaces(i18n, ns, cb);
  ns.forEach((n) => {
    if (i18n.options.ns.indexOf(n) < 0) i18n.options.ns.push(n);
  });
  i18n.loadLanguages(lng, loadedClb(i18n, cb));
};
const hasLoadedNamespace = (ns, i18n, options = {}) => {
  if (!i18n.languages || !i18n.languages.length) {
    warnOnce(i18n, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
      languages: i18n.languages
    });
    return true;
  }
  return i18n.hasLoadedNamespace(ns, {
    lng: options.lng,
    precheck: (i18nInstance2, loadNotPending) => {
      if (options.bindI18n && options.bindI18n.indexOf("languageChanging") > -1 && i18nInstance2.services.backendConnector.backend && i18nInstance2.isLanguageChangingTo && !loadNotPending(i18nInstance2.isLanguageChangingTo, ns)) return false;
    }
  });
};
const isString = (obj) => typeof obj === "string";
const isObject = (obj) => typeof obj === "object" && obj !== null;
const matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
const htmlEntities = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
};
const unescapeHtmlEntity = (m) => htmlEntities[m];
const unescape = (text) => text.replace(matchHtmlEntity, unescapeHtmlEntity);
let defaultOptions = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: true,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: true,
  unescape,
  transDefaultProps: void 0
};
const setDefaults = (options = {}) => {
  defaultOptions = {
    ...defaultOptions,
    ...options
  };
};
const getDefaults = () => defaultOptions;
let i18nInstance$1;
const setI18n = (instance) => {
  i18nInstance$1 = instance;
};
const getI18n$1 = () => i18nInstance$1;
const I18nContext = page_mf_2_insights__loadShare__react__loadShare__.createContext();
class ReportNamespaces {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(namespaces) {
    namespaces.forEach((ns) => {
      if (!this.usedNamespaces[ns]) this.usedNamespaces[ns] = true;
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
var shim = { exports: {} };
var useSyncExternalStoreShim_development = {};
(function() {
  function is(x, y) {
    return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
  }
  function useSyncExternalStore$2(subscribe, getSnapshot) {
    didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = true, console.error(
      "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
    ));
    var value = getSnapshot();
    if (!didWarnUncachedGetSnapshot) {
      var cachedValue = getSnapshot();
      objectIs(value, cachedValue) || (console.error(
        "The result of getSnapshot should be cached to avoid an infinite loop"
      ), didWarnUncachedGetSnapshot = true);
    }
    cachedValue = useState({
      inst: { value, getSnapshot }
    });
    var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
    useLayoutEffect(
      function() {
        inst.value = value;
        inst.getSnapshot = getSnapshot;
        checkIfSnapshotChanged(inst) && forceUpdate({ inst });
      },
      [subscribe, value, getSnapshot]
    );
    useEffect(
      function() {
        checkIfSnapshotChanged(inst) && forceUpdate({ inst });
        return subscribe(function() {
          checkIfSnapshotChanged(inst) && forceUpdate({ inst });
        });
      },
      [subscribe]
    );
    useDebugValue(value);
    return value;
  }
  function checkIfSnapshotChanged(inst) {
    var latestGetSnapshot = inst.getSnapshot;
    inst = inst.value;
    try {
      var nextValue = latestGetSnapshot();
      return !objectIs(inst, nextValue);
    } catch (error) {
      return true;
    }
  }
  function useSyncExternalStore$1(subscribe, getSnapshot) {
    return getSnapshot();
  }
  "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
  var React = page_mf_2_insights__loadShare__react__loadShare__, objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = false, didWarnUncachedGetSnapshot = false, shim2 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
  useSyncExternalStoreShim_development.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim2;
  "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
})();
{
  shim.exports = useSyncExternalStoreShim_development;
}
var shimExports = shim.exports;
const notReadyT = (k, optsOrDefaultValue) => {
  if (isString(optsOrDefaultValue)) return optsOrDefaultValue;
  if (isObject(optsOrDefaultValue) && isString(optsOrDefaultValue.defaultValue)) return optsOrDefaultValue.defaultValue;
  return Array.isArray(k) ? k[k.length - 1] : k;
};
const notReadySnapshot = {
  t: notReadyT,
  ready: false
};
const dummySubscribe = () => () => {
};
const useTranslation = (ns, props = {}) => {
  const {
    i18n: i18nFromProps
  } = props;
  const {
    i18n: i18nFromContext,
    defaultNS: defaultNSFromContext
  } = page_mf_2_insights__loadShare__react__loadShare__.useContext(I18nContext) || {};
  const i18n = i18nFromProps || i18nFromContext || getI18n$1();
  if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new ReportNamespaces();
  if (!i18n) {
    warnOnce(i18n, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
  }
  const i18nOptions = page_mf_2_insights__loadShare__react__loadShare__.useMemo(() => ({
    ...getDefaults(),
    ...i18n?.options?.react,
    ...props
  }), [i18n, props]);
  const {
    useSuspense,
    keyPrefix
  } = i18nOptions;
  const nsOrContext = ns;
  const unstableNamespaces = isString(nsOrContext) ? [nsOrContext] : nsOrContext;
  const namespaces = page_mf_2_insights__loadShare__react__loadShare__.useMemo(() => unstableNamespaces, unstableNamespaces);
  i18n?.reportNamespaces?.addUsedNamespaces?.(namespaces);
  const revisionRef = page_mf_2_insights__loadShare__react__loadShare__.useRef(0);
  const subscribe = page_mf_2_insights__loadShare__react__loadShare__.useCallback((callback) => {
    if (!i18n) return dummySubscribe;
    const {
      bindI18n,
      bindI18nStore
    } = i18nOptions;
    const wrappedCallback = () => {
      revisionRef.current += 1;
      callback();
    };
    if (bindI18n) i18n.on(bindI18n, wrappedCallback);
    if (bindI18nStore) i18n.store.on(bindI18nStore, wrappedCallback);
    return () => {
      if (bindI18n) bindI18n.split(" ").forEach((e) => i18n.off(e, wrappedCallback));
      if (bindI18nStore) bindI18nStore.split(" ").forEach((e) => i18n.store.off(e, wrappedCallback));
    };
  }, [i18n, i18nOptions]);
  const snapshotRef = page_mf_2_insights__loadShare__react__loadShare__.useRef();
  const getSnapshot = page_mf_2_insights__loadShare__react__loadShare__.useCallback(() => {
    if (!i18n) {
      return notReadySnapshot;
    }
    const calculatedReady = !!(i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every((n) => hasLoadedNamespace(n, i18n, i18nOptions));
    const currentLng = props.lng || i18n.language;
    const currentRevision = revisionRef.current;
    const lastSnapshot = snapshotRef.current;
    if (lastSnapshot && lastSnapshot.ready === calculatedReady && lastSnapshot.lng === currentLng && lastSnapshot.keyPrefix === keyPrefix && lastSnapshot.revision === currentRevision) {
      return lastSnapshot;
    }
    const calculatedT = i18n.getFixedT(currentLng, i18nOptions.nsMode === "fallback" ? namespaces : namespaces[0], keyPrefix);
    const newSnapshot = {
      t: calculatedT,
      ready: calculatedReady,
      lng: currentLng,
      keyPrefix,
      revision: currentRevision
    };
    snapshotRef.current = newSnapshot;
    return newSnapshot;
  }, [i18n, namespaces, keyPrefix, i18nOptions, props.lng]);
  const [loadCount, setLoadCount] = page_mf_2_insights__loadShare__react__loadShare__.useState(0);
  const {
    t,
    ready
  } = shimExports.useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  page_mf_2_insights__loadShare__react__loadShare__.useEffect(() => {
    if (i18n && !ready && !useSuspense) {
      const onLoaded = () => setLoadCount((c) => c + 1);
      if (props.lng) {
        loadLanguages(i18n, props.lng, namespaces, onLoaded);
      } else {
        loadNamespaces(i18n, namespaces, onLoaded);
      }
    }
  }, [i18n, props.lng, namespaces, ready, useSuspense, loadCount]);
  const finalI18n = i18n || {};
  const wrapperRef = page_mf_2_insights__loadShare__react__loadShare__.useRef(null);
  const wrapperLangRef = page_mf_2_insights__loadShare__react__loadShare__.useRef();
  const createI18nWrapper = (original) => {
    const descriptors = Object.getOwnPropertyDescriptors(original);
    if (descriptors.__original) delete descriptors.__original;
    const wrapper = Object.create(Object.getPrototypeOf(original), descriptors);
    if (!Object.prototype.hasOwnProperty.call(wrapper, "__original")) {
      try {
        Object.defineProperty(wrapper, "__original", {
          value: original,
          writable: false,
          enumerable: false,
          configurable: false
        });
      } catch (_) {
      }
    }
    return wrapper;
  };
  const ret = page_mf_2_insights__loadShare__react__loadShare__.useMemo(() => {
    const original = finalI18n;
    const lang = original?.language;
    let i18nWrapper = original;
    if (original) {
      if (wrapperRef.current && wrapperRef.current.__original === original) {
        if (wrapperLangRef.current !== lang) {
          i18nWrapper = createI18nWrapper(original);
          wrapperRef.current = i18nWrapper;
          wrapperLangRef.current = lang;
        } else {
          i18nWrapper = wrapperRef.current;
        }
      } else {
        i18nWrapper = createI18nWrapper(original);
        wrapperRef.current = i18nWrapper;
        wrapperLangRef.current = lang;
      }
    }
    const arr = [t, i18nWrapper, ready];
    arr.t = t;
    arr.i18n = i18nWrapper;
    arr.ready = ready;
    return arr;
  }, [t, finalI18n, ready, finalI18n.resolvedLanguage, finalI18n.language, finalI18n.languages]);
  if (i18n && useSuspense && !ready) {
    throw new Promise((resolve) => {
      const onLoaded = () => resolve();
      if (props.lng) {
        loadLanguages(i18n, props.lng, namespaces, onLoaded);
      } else {
        loadNamespaces(i18n, namespaces, onLoaded);
      }
    });
  }
  return ret;
};
const D = ({
  size: o = "default",
  className: t = "",
  color: n,
  ...C
}) => {
  const s = Object.assign(
    {},
    {
      size: o,
      className: t,
      ...C
    }
  ), c = n ? " moonstone-icon_" + n : "";
  return s.className = t + " moonstone-icon moonstone-icon_" + o + c, /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      ...s,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 9.2H8V19H5V9.2ZM10.6 5H13.4V19H10.6V5ZM16.2 13H19V19H16.2V13Z" })
    }
  );
}, V5 = ({
  size: o = "default",
  className: t = "",
  color: n,
  ...C
}) => {
  const s = Object.assign(
    {},
    {
      size: o,
      className: t,
      ...C
    }
  ), c = n ? " moonstone-icon_" + n : "";
  return s.className = t + " moonstone-icon moonstone-icon_" + o + c, /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "currentColor",
      ...s,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 6V9L16 5L12 1V4C7.58 4 4 7.58 4 12C4 13.57 4.46 15.03 5.24 16.26L6.7 14.8C6.25 13.97 6 13.01 6 12C6 8.69 8.69 6 12 6ZM18.76 7.74L17.3 9.2C17.74 10.04 18 10.99 18 12C18 15.31 15.31 18 12 18V15L8 19L12 23V20C16.42 20 20 16.42 20 12C20 10.43 19.54 8.97 18.76 7.74Z" })
    }
  );
};
const { initPromise } = page_mf_2_insights__mf_v__runtimeInit__mf_v__;
const res = initPromise.then((runtime) => runtime.loadShare("chart.js", {
  customShareInfo: { shareConfig: {
    singleton: true,
    strictVersion: false,
    requiredVersion: "^4.5.1"
  } }
}));
const exportModule = await res.then((factory) => factory());
var page_mf_2_insights__loadShare__chart_mf_3_js__loadShare__ = exportModule;
const insightsCache = /* @__PURE__ */ new Map();
const inflightRequests = /* @__PURE__ */ new Map();
const DEFAULT_TIMEOUT_MS = 8e3;
const getDefaultBaseUrl = () => {
  if (typeof window === "undefined") {
    return "";
  }
  return window.contextJsParameters?.config?.pageInsights?.unomiBaseUrl || window.location?.origin || "";
};
const getDefaultSiteKey = () => {
  if (typeof window === "undefined") {
    return "";
  }
  return window.contextJsParameters?.siteKey || window.contextJsParameters?.site?.key || "";
};
const getCacheKey = ({ pagePath, pageUuid, timeRangeKey }) => {
  if (pagePath) {
    return `pagePath:${pagePath}:range:${timeRangeKey || "lastMonth"}`;
  }
  if (pageUuid) {
    return `pageUuid:${pageUuid}:range:${timeRangeKey || "lastMonth"}`;
  }
  return "";
};
const resolveDateExpr = (timeRangeKey) => {
  switch (timeRangeKey) {
    case "last6Months":
      return "now-180d";
    case "last3Months":
      return "now-90d";
    case "lastMonth":
      return "now-30d";
    case "lastWeek":
      return "now-7d";
    case "today":
      return "now-1d";
    default:
      return "now-30d";
  }
};
const buildQueryRequest = ({
  baseUrl,
  siteKey,
  pagePath,
  timeRangeKey,
  endpointPath,
  includeTimeRange,
  optimizedQuery,
  bodyOverride
}) => {
  if (!baseUrl) {
    throw new Error("Unomi base URL is not configured");
  }
  const sanitizedBaseUrl = baseUrl.replace(/\/$/, "");
  if (!siteKey) {
    throw new Error("Missing siteKey for Unomi proxy");
  }
  const proxyBase = `${sanitizedBaseUrl}/modules/jexperience/proxy/${siteKey}`;
  const url = new URL(`${proxyBase}${endpointPath}`);
  {
    url.searchParams.set("optimizedQuery", "true");
  }
  return {
    url,
    options: {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      // TODO: If your proxy does not handle auth, add Basic Auth headers here.
      body: JSON.stringify(
        bodyOverride || {
          condition: {
            type: "booleanCondition",
            parameterValues: {
              operator: "and",
              subConditions: [
                {
                  type: "eventTypeCondition",
                  parameterValues: {
                    eventTypeId: "view"
                  }
                },
                ...includeTimeRange ? [
                  {
                    type: "eventPropertyCondition",
                    parameterValues: {
                      propertyName: "timeStamp",
                      comparisonOperator: "greaterThanOrEqualTo",
                      propertyValueDateExpr: resolveDateExpr(timeRangeKey)
                    }
                  }
                ] : [],
                ...pagePath ? [
                  {
                    type: "eventPropertyCondition",
                    parameterValues: {
                      propertyName: "target.properties.pageInfo.pagePath",
                      comparisonOperator: "equals",
                      propertyValue: pagePath
                    }
                  }
                ] : []
              ]
            }
          },
          ...endpointPath === "/cxs/query/event/timeStamp" ? {
            aggregate: {
              type: "date",
              parameters: {
                interval: "1d",
                format: "yyyy-MM-dd"
              }
            }
          } : endpointPath === "/cxs/query/event/sessionId" || endpointPath === "/cxs/query/event/profileId" ? {
            aggregate: {
              type: "string"
            }
          } : {}
        }
      )
    }
  };
};
const withAbortTimeout = (signal, timeoutMs) => {
  const controller = new AbortController();
  const onAbort = () => {
    controller.abort();
  };
  if (signal) {
    if (signal.aborted) {
      controller.abort();
    } else {
      signal.addEventListener("abort", onAbort, { once: true });
    }
  }
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  const cleanup = () => {
    clearTimeout(timeoutId);
    if (signal) {
      signal.removeEventListener("abort", onAbort);
    }
  };
  return { signal: controller.signal, cleanup };
};
const getCachedInsights = ({ pagePath, pageUuid, timeRangeKey }) => {
  const cacheKey = getCacheKey({ pagePath, pageUuid, timeRangeKey });
  return cacheKey ? insightsCache.get(cacheKey) : void 0;
};
const getPageInsights = async ({
  pagePath,
  pageUuid,
  baseUrl = getDefaultBaseUrl(),
  siteKey = getDefaultSiteKey(),
  timeRangeKey,
  timeoutMs = DEFAULT_TIMEOUT_MS,
  signal
}) => {
  const cacheKey = getCacheKey({ pagePath, pageUuid, timeRangeKey });
  if (!cacheKey) {
    throw new Error("Missing pagePath/pageUuid for insights lookup");
  }
  if (insightsCache.has(cacheKey)) {
    return insightsCache.get(cacheKey);
  }
  if (inflightRequests.has(cacheKey)) {
    return inflightRequests.get(cacheKey);
  }
  const requestPromise = (async () => {
    const timeStampRequest = buildQueryRequest({
      baseUrl,
      siteKey,
      pagePath,
      timeRangeKey,
      endpointPath: "/cxs/query/event/timeStamp",
      includeTimeRange: true,
      optimizedQuery: true
    });
    const allTimeRequest = buildQueryRequest({
      baseUrl,
      siteKey,
      pagePath,
      timeRangeKey,
      endpointPath: "/cxs/query/event/count",
      includeTimeRange: false,
      optimizedQuery: true,
      bodyOverride: {
        type: "booleanCondition",
        parameterValues: {
          operator: "and",
          subConditions: [
            {
              type: "eventPropertyCondition",
              parameterValues: {
                propertyName: "target.properties.pageInfo.pagePath",
                comparisonOperator: "equals",
                propertyValue: pagePath
              }
            }
          ]
        }
      }
    });
    const directEntryRequest = buildQueryRequest({
      baseUrl,
      siteKey,
      pagePath,
      timeRangeKey,
      endpointPath: "/cxs/query/event/target.properties.pageInfo.sameDomainReferrer",
      includeTimeRange: true,
      optimizedQuery: true
    });
    const sessionRequest = buildQueryRequest({
      baseUrl,
      siteKey,
      pagePath,
      timeRangeKey,
      endpointPath: "/cxs/query/event/sessionId",
      includeTimeRange: true,
      optimizedQuery: true
    });
    const visitorRequest = buildQueryRequest({
      baseUrl,
      siteKey,
      pagePath,
      timeRangeKey,
      endpointPath: "/cxs/query/event/profileId",
      includeTimeRange: true,
      optimizedQuery: true
    });
    const { signal: combinedSignal, cleanup } = withAbortTimeout(signal, timeoutMs);
    try {
      const [
        timeStampResponse,
        allTimeResponse,
        directEntryResponse,
        sessionResponse,
        visitorResponse
      ] = await Promise.all([
        fetch(timeStampRequest.url.toString(), {
          ...timeStampRequest.options,
          signal: combinedSignal
        }),
        fetch(allTimeRequest.url.toString(), {
          ...allTimeRequest.options,
          signal: combinedSignal
        }),
        fetch(directEntryRequest.url.toString(), {
          ...directEntryRequest.options,
          signal: combinedSignal
        }),
        fetch(sessionRequest.url.toString(), {
          ...sessionRequest.options,
          signal: combinedSignal
        }),
        fetch(visitorRequest.url.toString(), {
          ...visitorRequest.options,
          signal: combinedSignal
        })
      ]);
      if (!timeStampResponse.ok) {
        throw new Error(`Unomi request failed (${timeStampResponse.status})`);
      }
      if (!allTimeResponse.ok) {
        throw new Error(`Unomi request failed (${allTimeResponse.status})`);
      }
      if (!directEntryResponse.ok) {
        throw new Error(`Unomi request failed (${directEntryResponse.status})`);
      }
      if (!sessionResponse.ok) {
        throw new Error(`Unomi request failed (${sessionResponse.status})`);
      }
      if (!visitorResponse.ok) {
        throw new Error(`Unomi request failed (${visitorResponse.status})`);
      }
      const timeStampData = await timeStampResponse.json();
      const allTimeData = await allTimeResponse.json();
      const directEntryData = await directEntryResponse.json();
      const sessionData = await sessionResponse.json();
      const visitorData = await visitorResponse.json();
      const allVisits = typeof allTimeData === "number" ? allTimeData : typeof allTimeData?.count === "number" ? allTimeData.count : typeof allTimeData?._all === "number" ? allTimeData._all : 0;
      const visitsInRange = typeof timeStampData?._filtered === "number" ? timeStampData._filtered : 0;
      const directEntries = typeof directEntryData?.false === "number" ? directEntryData.false : 0;
      const uniqueSessions = Object.keys(sessionData || {}).filter(
        (key) => !key.startsWith("_")
      ).length;
      const uniqueVisitors = Object.keys(visitorData || {}).filter(
        (key) => !key.startsWith("_")
      ).length;
      const timeSeriesMap = /* @__PURE__ */ new Map();
      Object.entries(timeStampData || {}).forEach(([key, value]) => {
        if (key.startsWith("_")) {
          return;
        }
        if (typeof value !== "number") {
          return;
        }
        const dateKey = key.slice(0, 10);
        timeSeriesMap.set(dateKey, (timeSeriesMap.get(dateKey) || 0) + value);
      });
      const timeSeries = Array.from(timeSeriesMap.entries()).sort(([a], [b]) => a.localeCompare(b)).map(([date, count]) => ({ date, count }));
      const normalized = {
        summary: {
          allVisits,
          visitsInRange,
          directEntries,
          uniqueSessions,
          uniqueVisitors
        },
        timeSeries,
        raw: {
          timeStampData,
          allTimeData,
          directEntryData,
          sessionData,
          visitorData
        }
      };
      if (timeStampData && Object.keys(timeStampData).length > 0) {
        insightsCache.set(cacheKey, normalized);
      }
      return normalized;
    } finally {
      cleanup();
      inflightRequests.delete(cacheKey);
    }
  })();
  inflightRequests.set(cacheKey, requestPromise);
  return requestPromise;
};
const clearInsightsCache = ({ pagePath, pageUuid, timeRangeKey } = {}) => {
  if (!pagePath && !pageUuid) {
    insightsCache.clear();
    return;
  }
  const cacheKey = getCacheKey({ pagePath, pageUuid, timeRangeKey });
  if (cacheKey) {
    insightsCache.delete(cacheKey);
  }
};
const container = "_container_1a6nn_1";
const headerRow = "_headerRow_1a6nn_13";
const headerSpacer = "_headerSpacer_1a6nn_19";
const rangeSelect = "_rangeSelect_1a6nn_23";
const actionButton = "_actionButton_1a6nn_41";
const buttonIcon = "_buttonIcon_1a6nn_64";
const refreshButton = "_refreshButton_1a6nn_70";
const dashboardButton = "_dashboardButton_1a6nn_85";
const title = "_title_1a6nn_103";
const chevron = "_chevron_1a6nn_123";
const chevronExpanded = "_chevronExpanded_1a6nn_133";
const body = "_body_1a6nn_137";
const stateText = "_stateText_1a6nn_143";
const cardGrid = "_cardGrid_1a6nn_153";
const card = "_card_1a6nn_153";
const cardLabel = "_cardLabel_1a6nn_184";
const cardValue = "_cardValue_1a6nn_191";
const chart = "_chart_1a6nn_197";
const chartCanvas = "_chartCanvas_1a6nn_208";
const sectionTitle = "_sectionTitle_1a6nn_228";
const retry = "_retry_1a6nn_255";
const styles = {
  container,
  headerRow,
  headerSpacer,
  rangeSelect,
  actionButton,
  buttonIcon,
  refreshButton,
  dashboardButton,
  title,
  chevron,
  chevronExpanded,
  body,
  stateText,
  cardGrid,
  card,
  cardLabel,
  cardValue,
  chart,
  chartCanvas,
  sectionTitle,
  retry
};
const NAMESPACE = "page-insights";
page_mf_2_insights__loadShare__chart_mf_3_js__loadShare__.Chart.register(
  page_mf_2_insights__loadShare__chart_mf_3_js__loadShare__.BarController,
  page_mf_2_insights__loadShare__chart_mf_3_js__loadShare__.BarElement,
  page_mf_2_insights__loadShare__chart_mf_3_js__loadShare__.LineController,
  page_mf_2_insights__loadShare__chart_mf_3_js__loadShare__.LineElement,
  page_mf_2_insights__loadShare__chart_mf_3_js__loadShare__.PointElement,
  page_mf_2_insights__loadShare__chart_mf_3_js__loadShare__.CategoryScale,
  page_mf_2_insights__loadShare__chart_mf_3_js__loadShare__.LinearScale,
  page_mf_2_insights__loadShare__chart_mf_3_js__loadShare__.Tooltip
);
let i18nInstance = null;
const getI18n = async () => {
  if (!i18nInstance) {
    i18nInstance = (await __vitePreload(async () => {
      const { default: __vite_default__ } = await import("./i18n-CL8pXU33.js");
      return { default: __vite_default__ };
    }, true ? __vite__mapDeps([0,1,2,3,4]) : void 0, import.meta.url)).default;
  }
  return i18nInstance;
};
const extractSummary = (insights) => {
  if (!insights || typeof insights !== "object") {
    return null;
  }
  const summary = insights.summary || insights.metrics || insights;
  return {
    allVisits: summary.allVisits ?? null,
    visitsInRange: summary.visitsInRange ?? null,
    directEntries: summary.directEntries ?? null,
    uniqueSessions: summary.uniqueSessions ?? null,
    uniqueVisitors: summary.uniqueVisitors ?? null,
    lastActivity: summary.lastActivity || summary.lastSeen || summary.lastEvent || null,
    topInterests: summary.topInterests || summary.interests || summary.topTags || null
  };
};
const formatValue = (value) => {
  if (Array.isArray(value)) {
    return value.length ? value.join(", ") : "-";
  }
  if (value === null || value === void 0 || value === "") {
    return "-";
  }
  return String(value);
};
const getRangeLabel = (timeRangeKey, t) => {
  const rangeMap = {
    last6Months: t("rangeLast6Months"),
    last3Months: t("rangeLast3Months"),
    lastMonth: t("rangeLastMonth"),
    lastWeek: t("rangeLastWeek"),
    today: t("rangeToday")
  };
  return rangeMap[timeRangeKey] || t("rangeLastMonth");
};
const PageInsightsBlock = () => {
  const [i18n, setI18n2] = page_mf_2_insights__loadShare__react__loadShare__.useState(null);
  const { t } = useTranslation(NAMESPACE, { i18n: i18n || void 0 });
  const [timeRangeKey, setTimeRangeKey] = page_mf_2_insights__loadShare__react__loadShare__.useState("lastMonth");
  const [expanded, setExpanded] = page_mf_2_insights__loadShare__react__loadShare__.useState(false);
  const { path, language } = page_mf_2_insights__loadShare__react_mf_2_redux__loadShare__.useSelector(
    (state) => ({
      path: state.jcontent?.path,
      language: state.language
    }),
    page_mf_2_insights__loadShare__react_mf_2_redux__loadShare__.shallowEqual
  );
  const pagePath = path || "";
  const pageUuid = "";
  const siteKey = page_mf_2_insights__loadShare__react__loadShare__.useMemo(() => {
    if (!path) {
      return "";
    }
    const parts = path.split("/").filter(Boolean);
    if (parts[0] === "sites" && parts[1]) {
      return parts[1];
    }
    return "";
  }, [path]);
  const pageKey = pagePath || pageUuid;
  page_mf_2_insights__loadShare__react__loadShare__.useEffect(() => {
    getI18n().then(setI18n2);
  }, []);
  const dashboardUrl = page_mf_2_insights__loadShare__react__loadShare__.useMemo(() => {
    if (!siteKey || !pagePath || typeof window === "undefined") {
      return "";
    }
    const host = window.location.host || "";
    const serverName = host.split(".")[0] || "";
    const risonValue = (v) => {
      const s = String(v ?? "");
      const isSafe = /^[A-Za-z0-9_\-./~]+$/.test(s);
      if (isSafe) {
        return s;
      }
      return `'${s.replace(/'/g, "''")}'`;
    };
    const scopeV = risonValue(siteKey);
    const pagePathV = risonValue(pagePath);
    return `${window.location.origin}/modules/kibana-proxy/s/${serverName}-kibana-dashboard/app/kibana#/dashboard/4ddd804d-573f-426f-a482-40cd4ee3ea70?embed=true&show-time-filter=true&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'0951f5f6-4741-407e-97a8-9eb7324abc20',key:scope.keyword,negate:!f,params:(query:${scopeV}),type:phrase),query:(match_phrase:(scope.keyword:${scopeV}))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:'0951f5f6-4741-407e-97a8-9eb7324abc20',key:target.properties.pageInfo.pagePath.keyword,negate:!f,params:(query:${pagePathV}),type:phrase),query:(match_phrase:(target.properties.pageInfo.pagePath.keyword:${pagePathV})))),query:(language:kuery,query:''))`;
  }, [siteKey, pagePath]);
  const [status, setStatus] = page_mf_2_insights__loadShare__react__loadShare__.useState("idle");
  const [data, setData] = page_mf_2_insights__loadShare__react__loadShare__.useState(null);
  const [error, setError] = page_mf_2_insights__loadShare__react__loadShare__.useState(null);
  const [refreshIndex, setRefreshIndex] = page_mf_2_insights__loadShare__react__loadShare__.useState(0);
  const chartRef = page_mf_2_insights__loadShare__react__loadShare__.useRef(null);
  const chartInstanceRef = page_mf_2_insights__loadShare__react__loadShare__.useRef(null);
  const accentLightLine = page_mf_2_insights__loadShare__react__loadShare__.useMemo(() => {
    if (typeof window === "undefined") {
      return "rgba(0, 0, 0, 0.15)";
    }
    const value = getComputedStyle(document.documentElement).getPropertyValue("--color-accent_light_plain60").trim();
    return value || "rgba(0, 0, 0, 0.15)";
  }, []);
  const accentLightTooltip = page_mf_2_insights__loadShare__react__loadShare__.useMemo(() => {
    if (typeof window === "undefined") {
      return "rgba(0, 0, 0, 0.15)";
    }
    const value = getComputedStyle(document.documentElement).getPropertyValue("--color-accent_light_plain20").trim();
    return value || "rgba(0, 0, 0, 0.15)";
  }, []);
  const accentDark = page_mf_2_insights__loadShare__react__loadShare__.useMemo(() => {
    if (typeof window === "undefined") {
      return "rgba(0, 0, 0, 0.9)";
    }
    const value = getComputedStyle(document.documentElement).getPropertyValue("--color-accent_dark_contrast").trim();
    return value || "rgba(0, 0, 0, 0.9)";
  }, []);
  page_mf_2_insights__loadShare__react__loadShare__.useEffect(() => {
    setStatus("idle");
    setData(null);
    setError(null);
  }, [pageKey]);
  page_mf_2_insights__loadShare__react__loadShare__.useEffect(() => {
    if (!expanded || !pageKey) {
      return;
    }
    const cached = getCachedInsights({ pagePath, pageUuid, timeRangeKey });
    if (cached) {
      setData(cached);
      setStatus("success");
      return;
    }
    let isActive = true;
    const controller = new AbortController();
    setStatus("loading");
    setError(null);
    getPageInsights({
      pagePath,
      pageUuid,
      siteKey,
      timeRangeKey,
      signal: controller.signal
    }).then((insights) => {
      if (!isActive) {
        return;
      }
      setData(insights ?? null);
      setStatus("success");
    }).catch((err) => {
      if (!isActive || err?.name === "AbortError") {
        return;
      }
      setError(err);
      setStatus("error");
    });
    return () => {
      isActive = false;
      controller.abort();
    };
  }, [expanded, pageKey, pagePath, pageUuid, refreshIndex, timeRangeKey]);
  const summary = page_mf_2_insights__loadShare__react__loadShare__.useMemo(() => extractSummary(data), [data]);
  const timeSeries = page_mf_2_insights__loadShare__react__loadShare__.useMemo(
    () => Array.isArray(data?.timeSeries) ? data.timeSeries : [],
    [data]
  );
  const maxSeriesCount = page_mf_2_insights__loadShare__react__loadShare__.useMemo(() => {
    if (!timeSeries.length) {
      return 0;
    }
    return Math.max(...timeSeries.map((entry) => entry.count || 0));
  }, [timeSeries]);
  const hasData = data && Object.keys(data).length > 0;
  page_mf_2_insights__loadShare__react__loadShare__.useEffect(() => {
    if (!expanded || !chartRef.current) {
      return;
    }
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
      chartInstanceRef.current = null;
    }
    if (!timeSeries.length) {
      return;
    }
    const ctx = chartRef.current.getContext("2d");
    if (!ctx) {
      return;
    }
    chartInstanceRef.current = new page_mf_2_insights__loadShare__chart_mf_3_js__loadShare__.Chart(ctx, {
      type: "bar",
      data: {
        labels: timeSeries.map((entry) => entry.date),
        datasets: [
          {
            label: t("viewsOverTime"),
            data: timeSeries.map((entry) => entry.count),
            backgroundColor: "rgba(74, 74, 74, 0.8)",
            borderRadius: 4,
            maxBarThickness: 18,
            order: 2
          },
          {
            label: t("viewsOverTime"),
            type: "line",
            data: timeSeries.map((entry) => entry.count),
            borderColor: accentLightLine,
            backgroundColor: accentLightLine,
            borderWidth: 2,
            pointRadius: 2,
            pointHoverRadius: 3,
            tension: 0.3,
            order: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            backgroundColor: accentLightTooltip,
            titleColor: accentDark,
            bodyColor: accentDark
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: {
              maxRotation: 0,
              autoSkip: true,
              maxTicksLimit: 6
            }
          },
          y: {
            grid: { color: "rgba(0, 0, 0, 0.08)" },
            ticks: {
              precision: 0,
              stepSize: Math.max(1, Math.ceil(maxSeriesCount / 4))
            }
          }
        }
      }
    });
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [expanded, timeSeries, t, maxSeriesCount]);
  const handleRetry = () => {
    clearInsightsCache({ pagePath, pageUuid, timeRangeKey });
    setStatus("loading");
    setError(null);
    setData(null);
    setRefreshIndex((prev) => prev + 1);
    setExpanded(true);
  };
  if (!language || !pageKey || false) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.container, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: styles.headerRow,
        role: "button",
        tabIndex: 0,
        "aria-expanded": expanded,
        "aria-label": expanded ? t("toggleHide") : t("toggleShow"),
        onClick: () => setExpanded((prev) => !prev),
        onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setExpanded((prev) => !prev);
          }
        },
        style: { cursor: "pointer" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `${styles.chevron} ${expanded ? styles.chevronExpanded : ""}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.title, children: t("title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.headerSpacer }),
          expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                className: styles.rangeSelect,
                value: timeRangeKey,
                "aria-label": t("rangeLabel"),
                onChange: (e) => {
                  const nextValue = e.target.value;
                  setTimeRangeKey(nextValue);
                  clearInsightsCache({ pagePath, pageUuid, timeRangeKey });
                  setRefreshIndex((prev) => prev + 1);
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "last6Months", children: t("rangeLast6Months") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "last3Months", children: t("rangeLast3Months") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "lastMonth", children: t("rangeLastMonth") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "lastWeek", children: t("rangeLastWeek") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "today", children: t("rangeToday") })
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: `${styles.actionButton} ${styles.refreshButton}`,
                onClick: (e) => {
                  e.stopPropagation();
                  clearInsightsCache({ pagePath, pageUuid, timeRangeKey });
                  setRefreshIndex((prev) => prev + 1);
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.buttonIcon, "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx(V5, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("refresh") })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: `${styles.actionButton} ${styles.dashboardButton}`,
                onClick: (e) => {
                  e.stopPropagation();
                  if (dashboardUrl) {
                    window.open(dashboardUrl, "_blank", "noopener,noreferrer");
                  }
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: styles.buttonIcon, "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx(D, {}) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("pageDashboard") })
                ]
              }
            ) })
          ] })
        ]
      }
    ),
    expanded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.body, children: [
      !pageKey && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.stateText, children: t("empty") }),
      pageKey && status === "loading" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.stateText, children: t("loading") }),
      pageKey && status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.stateText, children: t("error") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: styles.retry, onClick: handleRetry, children: t("retry") })
      ] }),
      pageKey && status === "success" && !hasData && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.stateText, children: t("empty") }),
      pageKey && status === "success" && hasData && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.cardGrid, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.card, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.cardLabel, children: t("allVisits") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.cardValue, children: formatValue(summary?.allVisits) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.card, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.cardLabel, children: [
              t("uniqueSessions"),
              " (",
              getRangeLabel(timeRangeKey, t),
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.cardValue, children: formatValue(summary?.uniqueSessions) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.card, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.cardLabel, children: [
              t("uniqueVisitors"),
              " (",
              getRangeLabel(timeRangeKey, t),
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.cardValue, children: formatValue(summary?.uniqueVisitors) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.card, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.cardLabel, children: [
              t("visits"),
              " (",
              getRangeLabel(timeRangeKey, t),
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.cardValue, children: formatValue(summary?.visitsInRange) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.card, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: styles.cardLabel, children: [
              t("directEntries"),
              " (",
              getRangeLabel(timeRangeKey, t),
              ")"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.cardValue, children: formatValue(summary?.directEntries) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.sectionTitle, children: t("viewsOverTime") }),
        timeSeries.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.chart, children: /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: chartRef, className: styles.chartCanvas }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: styles.stateText, children: t("empty") })
      ] })
    ] })
  ] });
};
const pageInsightsBlock = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PageInsightsBlock
}, Symbol.toStringTag, { value: "Module" }));
export {
  setI18n as a,
  pageInsightsBlock as p,
  setDefaults as s
};
//# sourceMappingURL=pageInsightsBlock-D-Y8tRMV.js.map
