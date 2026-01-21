import { a, p as page_mf_2_insights__loadShare__react__loadShare__ } from "./page_mf_2_insights__loadShare__react__loadShare__-BOGI0a0r.js";
import { g as getDefaultExportFromCjs } from "./_commonjsHelpers-CUmg6egw.js";
import { p as page_mf_2_insights__mf_v__runtimeInit__mf_v__ } from "./page_mf_2_insights__mf_v__runtimeInit__mf_v__-joFqPJ2D.js";
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _arrayLikeToArray(r, a2) {
  (null == a2 || a2 > r.length) && (a2 = r.length);
  for (var e = 0, n = Array(a2); e < a2; e++) n[e] = r[e];
  return n;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _unsupportedIterableToArray(r, a2) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a2);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a2) : void 0;
  }
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a2 = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a2.push(e.value), a2.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a2;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _classCallCheck(a2, n) {
  if (!(a2 instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function composeServices() {
  var acc = {};
  for (var _len = arguments.length, services = new Array(_len), _key = 0; _key < _len; _key++) {
    services[_key] = arguments[_key];
  }
  for (var _i = 0, _services = services; _i < _services.length; _i++) {
    var service = _services[_i];
    if (!service) {
      continue;
    }
    var _loop = function _loop2() {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
      var previous = acc[key];
      if (typeof previous === "function" && typeof value === "function") {
        acc[key] = function() {
          for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            params[_key2] = arguments[_key2];
          }
          return value.apply(this, [].concat(params, [previous]));
        };
      } else if (Array.isArray(previous) && Array.isArray(value)) {
        acc[key] = [].concat(_toConsumableArray(previous), _toConsumableArray(value));
      } else {
        acc[key] = value;
      }
    };
    for (var _i2 = 0, _Object$entries = Object.entries(service); _i2 < _Object$entries.length; _i2++) {
      _loop();
    }
  }
  return acc;
}
var _excluded$3 = ["target"];
function ownKeys$7(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$7(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$7(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var Registry = /* @__PURE__ */ (function() {
  function Registry2() {
    _classCallCheck(this, Registry2);
    this.registry = {};
  }
  _createClass(Registry2, [{
    key: "addOrReplace",
    value: function addOrReplace(type, key) {
      var _service$targets$map, _service$targets;
      var registryKey = type + "-" + key;
      for (var _len = arguments.length, services = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        services[_key - 2] = arguments[_key];
      }
      var service = composeServices.apply(void 0, services);
      var targets = (_service$targets$map = (_service$targets = service.targets) === null || _service$targets === void 0 ? void 0 : _service$targets.map(function(t) {
        if (typeof t === "string") {
          var _t$split = t.split(":"), _t$split2 = _slicedToArray(_t$split, 2), id = _t$split2[0], _t$split2$ = _t$split2[1], priority = _t$split2$ === void 0 ? "0" : _t$split2$;
          return {
            id,
            priority: Number(priority)
          };
        }
        return t;
      })) !== null && _service$targets$map !== void 0 ? _service$targets$map : [];
      var storedService = _objectSpread$7(_objectSpread$7({}, service), {}, {
        targets,
        type,
        key
      });
      this.registry[registryKey] = storedService;
      return storedService;
    }
  }, {
    key: "add",
    value: function add2(type, key) {
      var registryKey = type + "-" + key;
      if (this.registry[registryKey]) {
        throw new Error("Entry already exist for key " + key);
      }
      for (var _len2 = arguments.length, services = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        services[_key2 - 2] = arguments[_key2];
      }
      return this.addOrReplace.apply(this, [type, key].concat(services));
    }
  }, {
    key: "get",
    value: function get(type, key) {
      return this.registry[type + "-" + key];
    }
  }, {
    key: "remove",
    value: function remove2(type, key) {
      var _this = this;
      if (key) {
        var registryKey = type + "-" + key;
        if (this.registry[registryKey]) {
          delete this.registry[type + "-" + key];
        }
      } else {
        var entries = this.find({
          type
        });
        if (entries) {
          entries.forEach(function(entry) {
            return _this.remove(type, entry.key);
          });
        }
      }
    }
  }, {
    key: "find",
    value: function find(filters) {
      var result = Object.values(this.registry);
      var target = filters.target, otherFilters = _objectWithoutProperties(filters, _excluded$3);
      if (target) {
        result = result.filter(function(item) {
          var _item$targets;
          return (_item$targets = item.targets) === null || _item$targets === void 0 ? void 0 : _item$targets.map(function(t) {
            return t.id;
          }).includes(target);
        }).sort(function(a2, b) {
          var foundA = a2.targets && a2.targets.find(function(t) {
            return t.id === filters.target;
          });
          var foundB = b.targets && b.targets.find(function(t) {
            return t.id === filters.target;
          });
          var priorityA = foundA && Number(foundA.priority);
          var priorityB = foundB && Number(foundB.priority);
          if ((priorityA === void 0 || isNaN(priorityA)) && (priorityB === void 0 || isNaN(priorityB))) {
            return 0;
          }
          if (priorityA === void 0 || isNaN(priorityA)) {
            return -1;
          }
          if (priorityB === void 0 || isNaN(priorityB)) {
            return 1;
          }
          return priorityA - priorityB;
        });
      }
      return result.filter(function(item) {
        return (
          // Try to find one key that doesn't match
          !Object.keys(otherFilters).find(function(key) {
            return item[key] !== otherFilters[key];
          })
        );
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      this.registry = {};
    }
  }]);
  return Registry2;
})();
var registry = new Registry();
var propTypes = { exports: {} };
var reactIs = { exports: {} };
var reactIs_development = {};
{
  (function() {
    var hasSymbol = typeof Symbol === "function" && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.element") : 60103;
    var REACT_PORTAL_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.portal") : 60106;
    var REACT_FRAGMENT_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108;
    var REACT_PROFILER_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114;
    var REACT_PROVIDER_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.provider") : 60109;
    var REACT_CONTEXT_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.context") : 60110;
    var REACT_ASYNC_MODE_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112;
    var REACT_SUSPENSE_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120;
    var REACT_MEMO_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.memo") : 60115;
    var REACT_LAZY_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116;
    var REACT_BLOCK_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.block") : 60121;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117;
    var REACT_RESPONDER_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.responder") : 60118;
    var REACT_SCOPE_TYPE = hasSymbol ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
    function isValidElementType(type) {
      return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }
    function typeOf(object) {
      if (typeof object === "object" && object !== null) {
        var $$typeof = object.$$typeof;
        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;
            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;
              default:
                var $$typeofType = type && type.$$typeof;
                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;
                  default:
                    return $$typeof;
                }
            }
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }
      return void 0;
    }
    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false;
    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true;
          console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
      return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }
    reactIs_development.AsyncMode = AsyncMode;
    reactIs_development.ConcurrentMode = ConcurrentMode;
    reactIs_development.ContextConsumer = ContextConsumer;
    reactIs_development.ContextProvider = ContextProvider;
    reactIs_development.Element = Element;
    reactIs_development.ForwardRef = ForwardRef;
    reactIs_development.Fragment = Fragment;
    reactIs_development.Lazy = Lazy;
    reactIs_development.Memo = Memo;
    reactIs_development.Portal = Portal;
    reactIs_development.Profiler = Profiler;
    reactIs_development.StrictMode = StrictMode;
    reactIs_development.Suspense = Suspense;
    reactIs_development.isAsyncMode = isAsyncMode;
    reactIs_development.isConcurrentMode = isConcurrentMode;
    reactIs_development.isContextConsumer = isContextConsumer;
    reactIs_development.isContextProvider = isContextProvider;
    reactIs_development.isElement = isElement;
    reactIs_development.isForwardRef = isForwardRef;
    reactIs_development.isFragment = isFragment;
    reactIs_development.isLazy = isLazy;
    reactIs_development.isMemo = isMemo;
    reactIs_development.isPortal = isPortal;
    reactIs_development.isProfiler = isProfiler;
    reactIs_development.isStrictMode = isStrictMode;
    reactIs_development.isSuspense = isSuspense;
    reactIs_development.isValidElementType = isValidElementType;
    reactIs_development.typeOf = typeOf;
  })();
}
{
  reactIs.exports = reactIs_development;
}
var reactIsExports = reactIs.exports;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
      return test2[n];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
var ReactPropTypesSecret$2 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$2;
var has$2 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {
};
{
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = has$2;
  printWarning$1 = function(text) {
    var message = "Warning: " + text;
    if (typeof console !== "undefined") {
      console.error(message);
    }
    try {
      throw new Error(message);
    } catch (x) {
    }
  };
}
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        try {
          if (typeof typeSpecs[typeSpecName] !== "function") {
            var err = Error(
              (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
            );
            err.name = "Invariant Violation";
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : "";
          printWarning$1(
            "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
          );
        }
      }
    }
  }
}
checkPropTypes$1.resetWarningCache = function() {
  {
    loggedTypeFailures = {};
  }
};
var checkPropTypes_1 = checkPropTypes$1;
var ReactIs$1 = reactIsExports;
var assign = objectAssign;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
var has = has$2;
var checkPropTypes = checkPropTypes_1;
var printWarning = function() {
};
{
  printWarning = function(text) {
    var message = "Warning: " + text;
    if (typeof console !== "undefined") {
      console.error(message);
    }
    try {
      throw new Error(message);
    } catch (x) {
    }
  };
}
function emptyFunctionThatReturnsNull() {
  return null;
}
var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = "@@iterator";
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === "function") {
      return iteratorFn;
    }
  }
  var ANONYMOUS = "<<anonymous>>";
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker("array"),
    bigint: createPrimitiveTypeChecker("bigint"),
    bool: createPrimitiveTypeChecker("boolean"),
    func: createPrimitiveTypeChecker("function"),
    number: createPrimitiveTypeChecker("number"),
    object: createPrimitiveTypeChecker("object"),
    string: createPrimitiveTypeChecker("string"),
    symbol: createPrimitiveTypeChecker("symbol"),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  function is(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === "object" ? data : {};
    this.stack = "";
  }
  PropTypeError.prototype = Error.prototype;
  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;
      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          var err = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
          );
          err.name = "Invariant Violation";
          throw err;
        } else if (typeof console !== "undefined") {
          var cacheKey = componentName + ":" + propName;
          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning(
              "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
          }
          return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }
  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        var preciseType = getPreciseType(propValue);
        return new PropTypeError(
          "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
          { expectedType }
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }
  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== "function") {
        return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs$1.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      {
        if (arguments.length > 1) {
          printWarning(
            "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
          );
        } else {
          printWarning("Invalid argument supplied to oneOf, expected an array.");
        }
      }
      return emptyFunctionThatReturnsNull;
    }
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }
      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === "symbol") {
          return String(value);
        }
        return value;
      });
      return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
    }
    return createChainableTypeChecker(validate);
  }
  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== "function") {
        return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== "object") {
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      printWarning("Invalid argument supplied to oneOfType, expected an instance of array.");
      return emptyFunctionThatReturnsNull;
    }
    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== "function") {
        printWarning(
          "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
        );
        return emptyFunctionThatReturnsNull;
      }
    }
    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
        var checker2 = arrayOfTypeCheckers[i2];
        var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, "expectedType")) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
      return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
    }
    return createChainableTypeChecker(validate);
  }
  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
    );
  }
  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== "object") {
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== "function") {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== "object") {
        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
      }
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== "function") {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function isNode(propValue) {
    switch (typeof propValue) {
      case "number":
      case "string":
      case "undefined":
        return true;
      case "boolean":
        return !propValue;
      case "object":
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }
        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }
        return true;
      default:
        return false;
    }
  }
  function isSymbol(propType, propValue) {
    if (propType === "symbol") {
      return true;
    }
    if (!propValue) {
      return false;
    }
    if (propValue["@@toStringTag"] === "Symbol") {
      return true;
    }
    if (typeof Symbol === "function" && propValue instanceof Symbol) {
      return true;
    }
    return false;
  }
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return "array";
    }
    if (propValue instanceof RegExp) {
      return "object";
    }
    if (isSymbol(propType, propValue)) {
      return "symbol";
    }
    return propType;
  }
  function getPreciseType(propValue) {
    if (typeof propValue === "undefined" || propValue === null) {
      return "" + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === "object") {
      if (propValue instanceof Date) {
        return "date";
      } else if (propValue instanceof RegExp) {
        return "regexp";
      }
    }
    return propType;
  }
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case "array":
      case "object":
        return "an " + type;
      case "boolean":
      case "date":
      case "regexp":
        return "a " + type;
      default:
        return type;
    }
  }
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }
  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  var ReactIs = reactIsExports;
  var throwOnDirectAccess = true;
  propTypes.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
}
var propTypesExports = propTypes.exports;
const _pt = /* @__PURE__ */ getDefaultExportFromCjs(propTypesExports);
var IframeRenderer = function IframeRenderer2(props) {
  var _window;
  var IframeRendererComp = (_window = window) === null || _window === void 0 || (_window = _window.jahia) === null || _window === void 0 || (_window = _window.ui) === null || _window === void 0 ? void 0 : _window.IframeRenderer;
  if (IframeRendererComp) {
    return /* @__PURE__ */ a.createElement(IframeRendererComp, props);
  }
  return /* @__PURE__ */ a.createElement("span", null, "Jahia UI not loaded");
};
IframeRenderer.propTypes = {
  url: _pt.string.isRequired
};
var getIframeRenderer = function getIframeRenderer2(url) {
  return /* @__PURE__ */ a.createElement(IframeRenderer, {
    url
  });
};
function ownKeys$6(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$6(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$6(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var filterTree = function filterTree2(tree, predicate) {
  return tree.filter(predicate).map(function(item) {
    return _objectSpread$6(_objectSpread$6({}, item), {}, {
      children: item.children && filterTree2(item.children, predicate)
    });
  });
};
var mapTree = function mapTree2(tree, mapFunction) {
  return tree.map(function(item) {
    return _objectSpread$6(_objectSpread$6({}, mapFunction(item)), {}, {
      children: item.children && mapTree2(item.children, mapFunction)
    });
  });
};
var Tree = /* @__PURE__ */ (function() {
  function Tree2(data) {
    _classCallCheck(this, Tree2);
    this.data = data;
  }
  _createClass(Tree2, [{
    key: "filter",
    value: function filter(predicate) {
      return new Tree2(filterTree(this.data, predicate));
    }
  }, {
    key: "map",
    value: function map(mapFunction) {
      return new Tree2(mapTree(this.data, mapFunction));
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.data;
    }
  }]);
  return Tree2;
})();
function ownKeys$5(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$5(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$5(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var useAdminRouteTreeStructure = function useAdminRouteTreeStructure2(target, selected) {
  var result = page_mf_2_insights__loadShare__react__loadShare__.useMemo(function() {
    var getAllRoutes = function getAllRoutes2(baseTarget) {
      var parent2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      return registry.find({
        type: "adminRoute",
        target: baseTarget + parent2
      }).flatMap(function(route) {
        return [route].concat(_toConsumableArray(getAllRoutes2(baseTarget, "-" + route.key)));
      }).map(function(route) {
        return _objectSpread$5(_objectSpread$5({}, route), {}, {
          render: route.render || typeof route.iframeUrl === "string" && function() {
            return getIframeRenderer(route.iframeUrl);
          }
        });
      });
    };
    var routes2 = getAllRoutes(target);
    var createTree = function createTree2(baseTarget) {
      var parent2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      return registry.find({
        type: "adminRoute",
        target: baseTarget + parent2
      }).filter(function(route) {
        return !route.omitFromTree;
      }).map(function(route) {
        return _objectSpread$5(_objectSpread$5({}, route), {}, {
          children: createTree2(baseTarget, "-" + route.key)
        });
      });
    };
    var tree2 = new Tree(createTree(target));
    var allPermissions2 = routes2.filter(function(route) {
      return route.requiredPermission;
    }).map(function(route) {
      return route.requiredPermission;
    }).filter(function(item, pos, self) {
      return self.indexOf(item) === pos;
    });
    return {
      routes: routes2,
      tree: tree2,
      allPermissions: allPermissions2
    };
  }, [target]);
  var tree = result.tree, routes = result.routes, allPermissions = result.allPermissions;
  var defaultOpenedItems = [];
  if (selected) {
    var selectedItem = registry.get("adminRoute", selected);
    while (selectedItem) {
      var _selectedItem$targets;
      var parentTarget = (_selectedItem$targets = selectedItem.targets) === null || _selectedItem$targets === void 0 ? void 0 : _selectedItem$targets.find(function(t) {
        return t.id.startsWith(target + "-");
      });
      if (parentTarget) {
        var parent = parentTarget.id.substr(target.length + 1);
        defaultOpenedItems.push(parent);
        selectedItem = registry.get("adminRoute", parent);
      } else {
        selectedItem = null;
      }
    }
  }
  return {
    tree,
    defaultOpenedItems,
    routes,
    allPermissions
  };
};
var ComponentRendererContext = /* @__PURE__ */ page_mf_2_insights__loadShare__react__loadShare__.createContext({});
var ComponentRendererConsumer = ComponentRendererContext.Consumer;
function ownKeys$4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$4(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var ComponentRenderer = function ComponentRenderer2() {
  var _useState = page_mf_2_insights__loadShare__react__loadShare__.useState({
    components: {},
    componentsProps: {}
  }), _useState2 = _slicedToArray(_useState, 2), state = _useState2[0], setState = _useState2[1];
  var value = page_mf_2_insights__loadShare__react__loadShare__.useContext(ComponentRendererContext);
  page_mf_2_insights__loadShare__react__loadShare__.useEffect(function() {
    value.render = function(key, component, props) {
      return setState(function(previous) {
        return {
          components: _objectSpread$4(_objectSpread$4({}, previous.components), {}, _defineProperty({}, key, component)),
          componentsProps: _objectSpread$4(_objectSpread$4({}, previous.componentsProps), {}, _defineProperty({}, key, _objectSpread$4({}, props)))
        };
      });
    };
    value.setProperties = function(key, props) {
      return setState(function(previous) {
        if (previous.components[key]) {
          var newState = {
            components: _objectSpread$4({}, previous.components),
            componentsProps: _objectSpread$4({}, previous.componentsProps)
          };
          newState.componentsProps[key] = _objectSpread$4(_objectSpread$4({}, previous.componentsProps[key]), props);
          return newState;
        }
        return previous;
      });
    };
    value.destroy = function(key) {
      return setState(function(previous) {
        var newState = {
          components: _objectSpread$4({}, previous.components),
          componentsProps: _objectSpread$4({}, previous.componentsProps)
        };
        delete newState.components[key];
        delete newState.componentsProps[key];
        return newState;
      });
    };
  }, [value]);
  var components = Object.keys(state.components).map(function(key) {
    var component = state.components[key];
    return /* @__PURE__ */ a.createElement(component, _objectSpread$4({
      key
    }, state.componentsProps[key]));
  });
  return /* @__PURE__ */ a.createElement(a.Fragment, null, components);
};
var ComponentRendererProvider = function ComponentRendererProvider2(_ref) {
  var children = _ref.children;
  var value = page_mf_2_insights__loadShare__react__loadShare__.useRef({});
  return /* @__PURE__ */ a.createElement(ComponentRendererContext.Provider, {
    value: value.current
  }, /* @__PURE__ */ a.createElement(ComponentRenderer, null), children);
};
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
var _excluded$2 = ["render", "componentToRender"];
function ownKeys$3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$3(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var ComponentRendererActionComponent = function ComponentRendererActionComponent2(_ref) {
  var Render = _ref.render, componentToRender = _ref.componentToRender, otherProps = _objectWithoutProperties(_ref, _excluded$2);
  var componentRenderer = page_mf_2_insights__loadShare__react__loadShare__.useContext(ComponentRendererContext);
  var componentContext = {
    id: "actionComponent-" + otherProps.id
  };
  page_mf_2_insights__loadShare__react__loadShare__.useEffect(function() {
    componentContext.id = "actionComponent-" + otherProps.id;
    componentContext.render = function(component, properties) {
      var _componentRenderer$re;
      (_componentRenderer$re = componentRenderer.render) === null || _componentRenderer$re === void 0 ? void 0 : _componentRenderer$re.call(componentRenderer, componentContext.id, component, _objectSpread$3(_objectSpread$3({}, otherProps), {}, {
        onExited: componentContext.handleDestroy
      }, properties));
    };
    componentContext.handleDestroy = function() {
      var _componentRenderer$de;
      (_componentRenderer$de = componentRenderer.destroy) === null || _componentRenderer$de === void 0 ? void 0 : _componentRenderer$de.call(componentRenderer, componentContext.id);
    };
    componentContext.setProperties = function(properties) {
      var _componentRenderer$se;
      (_componentRenderer$se = componentRenderer.setProperties) === null || _componentRenderer$se === void 0 ? void 0 : _componentRenderer$se.call(componentRenderer, componentContext.id, properties);
    };
  });
  if (!otherProps.onClick) {
    return /* @__PURE__ */ a.createElement(
      Render,
      _extends({
        onClick: function onClick() {
          return componentContext.render(componentToRender);
        }
      }, otherProps)
    );
  }
  return /* @__PURE__ */ a.createElement(Render, otherProps);
};
ComponentRendererActionComponent.propTypes = {
  render: _pt.elementType.isRequired,
  componentToRender: _pt.elementType.isRequired,
  id: _pt.string.isRequired,
  onClick: _pt.func.isRequired
};
var componentRendererAction = {
  component: ComponentRendererActionComponent
};
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, _getPrototypeOf(t);
}
var _excluded$1 = ["context"], _excluded2 = ["context", "actionKey", "render", "loading"];
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _createSuper$1(t) {
  var r = _isNativeReflectConstruct$1();
  return function() {
    var e, o = _getPrototypeOf(t);
    if (r) {
      var s = _getPrototypeOf(this).constructor;
      e = Reflect.construct(o, arguments, s);
    } else e = o.apply(this, arguments);
    return _possibleConstructorReturn(this, e);
  };
}
function _isNativeReflectConstruct$1() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct$1 = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
var count = 0;
var getRenderWrapper = function getRenderWrapper2(Render) {
  var RenderWrapper = function RenderWrapper2(_ref) {
    var context = _ref.context, otherProps = _objectWithoutProperties(_ref, _excluded$1);
    return /* @__PURE__ */ a.createElement(Render, _extends({}, context, otherProps));
  };
  return RenderWrapper;
};
var DisplayAction = /* @__PURE__ */ (function(_React$PureComponent) {
  _inherits(DisplayAction2, _React$PureComponent);
  var _super = _createSuper$1(DisplayAction2);
  function DisplayAction2(props) {
    var _this;
    _classCallCheck(this, DisplayAction2);
    _this = _super.call(this, props);
    _this.id = props.actionKey + "-" + count++;
    _this.RenderWrapper = getRenderWrapper(props.render);
    return _this;
  }
  _createClass(DisplayAction2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, context = _this$props.context, actionKey = _this$props.actionKey, render2 = _this$props.render, loading = _this$props.loading, otherProps = _objectWithoutProperties(_this$props, _excluded2);
      var action = registry.get("action", actionKey);
      if (!action) {
        return null;
      }
      if (context) {
        console.warn("Warn : context in DisplayAction is deprecated", actionKey, context);
      }
      var Component = typeof action.component === "function" ? action.component : render2;
      var mergedProps = _objectSpread$2(_objectSpread$2({}, context), otherProps);
      var componentProps = _objectSpread$2(_objectSpread$2(_objectSpread$2({}, action), mergedProps), {}, {
        originalContext: mergedProps,
        id: this.id,
        actionKey
      });
      if (componentProps.init) {
        componentProps.init(componentProps, this.props);
      }
      var info = {};
      info["data-registry-key"] = action.type + ":" + action.key;
      if (otherProps.target && action.targets) {
        var foundTarget = action.targets.find(function(t) {
          return t.id === otherProps.target;
        });
        if (foundTarget) {
          info["data-registry-target"] = foundTarget.id + ":" + foundTarget.priority;
        }
      }
      return /* @__PURE__ */ a.createElement(Component, _extends({
        key: this.id
      }, componentProps, {
        buttonProps: _objectSpread$2(_objectSpread$2({}, componentProps.buttonProps), info),
        context: componentProps,
        render: this.RenderWrapper,
        loading
      }));
    }
  }]);
  return DisplayAction2;
})(a.PureComponent);
_defineProperty(DisplayAction, "propTypes", {
  /**
       * The key of the action to display
       */
  actionKey: _pt.string.isRequired,
  /**
       * The action context
       */
  context: _pt.object,
  /**
       * The render component
       */
  render: _pt.elementType.isRequired,
  /**
       * The render component
       */
  loading: _pt.elementType,
  onClick: _pt.func
});
var _excluded = ["target", "filter"];
var DisplayActions = function DisplayActions2(_ref) {
  var target = _ref.target, filter = _ref.filter, others = _objectWithoutProperties(_ref, _excluded);
  var actionsToDisplay = [];
  var targets = [];
  if (Array.isArray(target)) {
    targets = target;
  } else {
    targets.push(target);
  }
  targets.forEach(function(t) {
    var actions = registry.find({
      type: "action",
      target: t
    }).filter(filter ? filter : function() {
      return true;
    }).map(function(action) {
      return /* @__PURE__ */ a.createElement(DisplayAction, _extends({}, others, {
        key: action.key,
        target: t,
        actionKey: action.key
      }));
    });
    actionsToDisplay.push.apply(actionsToDisplay, _toConsumableArray(actions));
  });
  return /* @__PURE__ */ a.createElement(a.Fragment, null, actionsToDisplay);
};
DisplayActions.propTypes = {
  /**
       * The target from which the items will be selected
       */
  target: _pt.string.isRequired,
  /**
       * The action context
       */
  context: _pt.object,
  /**
       * The render component
       */
  render: _pt.elementType.isRequired,
  /**
       * The render component
       */
  loading: _pt.elementType,
  /**
       * Additional filter function
       */
  filter: _pt.func
};
const { initPromise } = page_mf_2_insights__mf_v__runtimeInit__mf_v__;
const res = initPromise.then((runtime) => runtime.loadShare("react-dom", {
  customShareInfo: { shareConfig: {
    singleton: true,
    strictVersion: false,
    requiredVersion: "^18.3.1"
  } }
}));
const exportModule = await res.then((factory) => factory());
var page_mf_2_insights__loadShare__react_mf_2_dom__loadShare__ = exportModule;
const ReactDOM = /* @__PURE__ */ getDefaultExportFromCjs(page_mf_2_insights__loadShare__react_mf_2_dom__loadShare__);
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
var ItemLoading = function ItemLoading2(props) {
  var _props$context$props = _objectSpread$1(_objectSpread$1({}, props.context), props), id = _props$context$props.id, parentMenuContext = _props$context$props.parentMenuContext, MenuItemRenderer = _props$context$props.menuItemRenderer;
  page_mf_2_insights__loadShare__react__loadShare__.useEffect(function() {
    parentMenuContext.dispatch({
      type: "loading",
      item: id
    });
  });
  return /* @__PURE__ */ a.createElement(MenuItemRenderer, _extends({}, props, {
    onClick: function onClick() {
    }
  }));
};
ItemLoading.propTypes = {
  id: _pt.string.isRequired,
  /* Legacy bag of props*/
  context: _pt.object,
  parentMenuContext: _pt.shape({
    id: _pt.string.isRequired,
    dispatch: _pt.func.isRequired,
    display: _pt.func.isRequired
  }).isRequired,
  menuItemRenderer: _pt.elementType.isRequired
};
var ItemRender = function ItemRender2(props) {
  var _props$context$props2 = _objectSpread$1(_objectSpread$1({}, props.context), props), id = _props$context$props2.id, _onClick = _props$context$props2.onClick, menuContext = _props$context$props2.menuContext, menuState = _props$context$props2.menuState, rootMenuContext = _props$context$props2.rootMenuContext, parentMenuContext = _props$context$props2.parentMenuContext, MenuItemRenderer = _props$context$props2.menuItemRenderer, isVisible = _props$context$props2.isVisible;
  page_mf_2_insights__loadShare__react__loadShare__.useEffect(function() {
    parentMenuContext.dispatch({
      type: "loaded",
      item: id,
      isVisible: isVisible !== false
    });
  });
  if (isVisible === false) {
    return null;
  }
  return /* @__PURE__ */ a.createElement(MenuItemRenderer, _extends({}, props, {
    onClick: function onClick(event) {
      if (_onClick) {
        _onClick(props, event);
        event.stopPropagation();
        rootMenuContext.dispatch({
          type: "close"
        });
      }
    },
    onMouseEnter: function onMouseEnter(event) {
      if (menuContext) {
        if (menuState && !menuState.isOpen) {
          var c = event.currentTarget.getBoundingClientRect();
          menuContext.display(null, {
            anchorEl: {
              getBoundingClientRect: function getBoundingClientRect() {
                return c;
              }
            },
            anchorElOrigin: {
              vertical: "top",
              horizontal: "right"
            }
          });
        }
      } else {
        parentMenuContext.dispatch({
          type: "setSubMenuContext",
          value: null
        });
      }
    },
    onMouseLeave: function onMouseLeave() {
      if (menuContext) {
        setTimeout(function() {
          menuContext.dispatch({
            type: "leaveItem"
          });
        }, 100);
      }
    }
  }));
};
ItemRender.propTypes = {
  context: _pt.object,
  id: _pt.string.isRequired,
  menuItemRenderer: _pt.elementType.isRequired,
  rootMenuContext: _pt.shape({
    id: _pt.string.isRequired,
    dispatch: _pt.func.isRequired,
    display: _pt.func.isRequired
  }).isRequired,
  parentMenuContext: _pt.shape({
    id: _pt.string.isRequired,
    dispatch: _pt.func.isRequired,
    display: _pt.func.isRequired
  }).isRequired,
  menuContext: _pt.shape({
    id: _pt.string.isRequired,
    dispatch: _pt.func.isRequired,
    display: _pt.func.isRequired
  }).isRequired,
  menuState: _pt.shape({
    id: _pt.string.isRequired,
    currentCtx: _pt.oneOfType([_pt.object, _pt.shape({
      originalContext: _pt.object
    })]).isRequired,
    anchor: _pt.shape({
      anchorEl: _pt.any,
      anchorPosition: _pt.shape({
        top: _pt.number.isRequired,
        left: _pt.number.isRequired
      }),
      anchorElOrigin: _pt.shape({
        horizontal: _pt.oneOf(["left", "center", "right"]).isRequired,
        vertical: _pt.oneOf(["top", "center", "bottom"]).isRequired
      }),
      transformElOrigin: _pt.shape({
        horizontal: _pt.oneOf(["left", "right"]).isRequired,
        vertical: _pt.oneOf(["top", "bottom"]).isRequired
      })
    }).isRequired,
    isRendered: _pt.bool.isRequired,
    isOpen: _pt.bool.isRequired,
    isInMenu: _pt.bool.isRequired,
    isSubMenu: _pt.bool.isRequired,
    subMenuContext: _pt.oneOfType([_pt.shape({
      id: _pt.string.isRequired,
      dispatch: _pt.func.isRequired,
      display: _pt.func.isRequired
    }), _pt.oneOf([null])]),
    loadingItems: _pt.arrayOf(_pt.string).isRequired,
    loadedItems: _pt.arrayOf(_pt.string).isRequired
  }),
  onClick: _pt.func,
  isVisible: _pt.bool
};
var Menu = function Menu2(props) {
  var menuTarget = props.menuTarget, menuFilter = props.menuFilter, isMenuPreload = props.isMenuPreload, MenuRenderer = props.menuRenderer, menuItemRenderer = props.menuItemRenderer, rootMenuContext = props.rootMenuContext, originalContext = props.originalContext, id = props.id, actionKey = props.actionKey, menuContext = props.menuContext, menuState = props.menuState, menuItemProps = props.menuItemProps;
  return /* @__PURE__ */ a.createElement(MenuRenderer, {
    id,
    context: _objectSpread$1({
      key: props.id
    }, props),
    menuKey: actionKey,
    isSubMenu: menuState.isSubMenu,
    anchor: menuState.anchor,
    isLoading: menuState.loadingItems.length > 0,
    isOpen: menuState.isOpen,
    onMouseEnter: function onMouseEnter() {
      menuContext.dispatch({
        type: "enterMenu"
      });
    },
    onMouseLeave: function onMouseLeave() {
      menuContext.dispatch({
        type: "leaveMenu"
      });
    },
    onClose: function onClose(e) {
      e.preventDefault();
      e.stopPropagation();
      menuContext.dispatch({
        type: "close"
      });
    },
    onExited: function onExited() {
      if (!isMenuPreload) {
        menuContext.dispatch({
          type: "destroy"
        });
      }
    }
  }, /* @__PURE__ */ a.createElement(DisplayActions, _extends({}, originalContext, {
    id,
    target: menuTarget,
    filter: menuFilter,
    buttonProps: menuItemProps,
    menuRenderer: MenuRenderer,
    menuItemRenderer,
    parentMenuContext: menuContext,
    rootMenuContext,
    loading: ItemLoading,
    render: ItemRender
  })));
};
Menu.propTypes = {
  id: _pt.string.isRequired,
  actionKey: _pt.string.isRequired,
  menuRenderer: _pt.elementType.isRequired,
  menuItemRenderer: _pt.elementType.isRequired,
  menuItemProps: _pt.object,
  isMenuPreload: _pt.bool,
  menuTarget: _pt.string.isRequired,
  menuFilter: _pt.func,
  isMenuUseEventPosition: _pt.bool,
  buttonIcon: _pt.element,
  originalContext: _pt.object,
  rootMenuContext: _pt.shape({
    id: _pt.string.isRequired,
    dispatch: _pt.func.isRequired,
    display: _pt.func.isRequired
  }).isRequired,
  parentMenuContext: _pt.shape({
    id: _pt.string.isRequired,
    dispatch: _pt.func.isRequired,
    display: _pt.func.isRequired
  }).isRequired,
  menuContext: _pt.shape({
    id: _pt.string.isRequired,
    dispatch: _pt.func.isRequired,
    display: _pt.func.isRequired
  }).isRequired,
  menuState: _pt.shape({
    id: _pt.string.isRequired,
    currentCtx: _pt.oneOfType([_pt.object, _pt.shape({
      originalContext: _pt.object
    })]).isRequired,
    anchor: _pt.shape({
      anchorEl: _pt.any,
      anchorPosition: _pt.shape({
        top: _pt.number.isRequired,
        left: _pt.number.isRequired
      }),
      anchorElOrigin: _pt.shape({
        horizontal: _pt.oneOf(["left", "center", "right"]).isRequired,
        vertical: _pt.oneOf(["top", "center", "bottom"]).isRequired
      }),
      transformElOrigin: _pt.shape({
        horizontal: _pt.oneOf(["left", "right"]).isRequired,
        vertical: _pt.oneOf(["top", "bottom"]).isRequired
      })
    }).isRequired,
    isRendered: _pt.bool.isRequired,
    isOpen: _pt.bool.isRequired,
    isInMenu: _pt.bool.isRequired,
    isSubMenu: _pt.bool.isRequired,
    subMenuContext: _pt.oneOfType([_pt.shape({
      id: _pt.string.isRequired,
      dispatch: _pt.func.isRequired,
      display: _pt.func.isRequired
    }), _pt.oneOf([null])]),
    loadingItems: _pt.arrayOf(_pt.string).isRequired,
    loadedItems: _pt.arrayOf(_pt.string).isRequired
  }).isRequired
};
function add(items, item) {
  return items.indexOf(item) === -1 ? [].concat(_toConsumableArray(items), [item]) : items;
}
function remove(items, item) {
  return items.filter(function(f) {
    return f !== item;
  });
}
var reducer = function reducer2(state, action) {
  switch (action.type) {
    case "render":
      return _objectSpread$1(_objectSpread$1({}, state), {}, {
        currentCtx: action.currentCtx ? action.currentCtx : {},
        isRendered: true
      });
    case "destroy":
      return _objectSpread$1(_objectSpread$1({}, state), {}, {
        isRendered: false
      });
    case "open":
      return _objectSpread$1(_objectSpread$1({}, state), {}, {
        isOpen: true,
        anchor: action.anchor
      });
    case "close":
      return _objectSpread$1(_objectSpread$1({}, state), {}, {
        isOpen: false
      });
    case "leaveItem":
      return _objectSpread$1(_objectSpread$1({}, state), {}, {
        isOpen: state.isInMenu
      });
    case "enterMenu":
      return _objectSpread$1(_objectSpread$1({}, state), {}, {
        isInMenu: true
      });
    case "leaveMenu":
      return _objectSpread$1(_objectSpread$1({}, state), {}, {
        isInMenu: false
      });
    case "setSubMenuContext": {
      if (state.subMenuContext === action.value) {
        return state;
      }
      if (state.subMenuContext && state.subMenuContext !== action.value) {
        setTimeout(function() {
          var _state$subMenuContext;
          (_state$subMenuContext = state.subMenuContext) === null || _state$subMenuContext === void 0 ? void 0 : _state$subMenuContext.dispatch({
            type: "close"
          });
        }, 0);
      }
      return _objectSpread$1(_objectSpread$1({}, state), {}, {
        subMenuContext: action.value
      });
    }
    case "loading":
      return state.loadingItems.includes(action.item) || state.loadedItems.includes(action.item) ? state : _objectSpread$1(_objectSpread$1({}, state), {}, {
        loadingItems: add(state.loadingItems, action.item),
        loadedItems: remove(state.loadedItems, action.item)
      });
    case "loaded":
      return !state.loadingItems.includes(action.item) && action.isVisible !== false === state.loadedItems.includes(action.item) ? state : _objectSpread$1(_objectSpread$1({}, state), {}, {
        loadingItems: remove(state.loadingItems, action.item),
        loadedItems: action.isVisible === false ? remove(state.loadedItems, action.item) : add(state.loadedItems, action.item)
      });
    default:
      return state;
  }
};
var MenuActionComponent = function MenuActionComponent2(props) {
  var rootMenuContext = props.rootMenuContext, parentMenuContext = props.parentMenuContext, isMenuPreload = props.isMenuPreload, Render = props.render, Loading = props.loading, visibilityPredicate = props.visibilityPredicate;
  var id = "actionComponent-" + props.id;
  var elRef = page_mf_2_insights__loadShare__react__loadShare__.useRef(document.getElementById("menuHolder"));
  if (!elRef.current) {
    elRef.current = document.createElement("div");
    elRef.current.setAttribute("id", "menuHolder");
    document.body.appendChild(elRef.current);
  }
  var _useReducer = page_mf_2_insights__loadShare__react__loadShare__.useReducer(reducer, {
    id,
    isRendered: false,
    isOpen: false,
    isSubMenu: Boolean(parentMenuContext),
    isInMenu: false,
    loadingItems: [],
    loadedItems: [],
    subMenuContext: null,
    currentCtx: {},
    anchor: {
      anchorPosition: {
        top: -1e3,
        left: -1e3
      }
    }
  }), _useReducer2 = _slicedToArray(_useReducer, 2), menuState = _useReducer2[0], dispatch = _useReducer2[1];
  var menuContext = page_mf_2_insights__loadShare__react__loadShare__.useMemo(function() {
    return {
      id,
      dispatch,
      display: function display(currentCtx, anchor) {
        dispatch({
          type: "render",
          currentCtx
        });
        if (parentMenuContext) {
          parentMenuContext.dispatch({
            type: "setSubMenuContext",
            value: menuContext
          });
        }
        setTimeout(function() {
          dispatch({
            type: "open",
            anchor
          });
        }, 0);
      }
    };
  }, [id, parentMenuContext]);
  page_mf_2_insights__loadShare__react__loadShare__.useEffect(function() {
    if (!menuState.isOpen && menuState.subMenuContext) {
      menuState.subMenuContext.dispatch({
        type: "close"
      });
      dispatch({
        type: "setSubMenuContext",
        value: null
      });
    }
  }, [id, menuState, menuContext]);
  var isVisible = !isMenuPreload || menuState.loadedItems.length > 0;
  if (visibilityPredicate) {
    isVisible = visibilityPredicate(menuState);
  }
  return /* @__PURE__ */ a.createElement(a.Fragment, null, menuState.isOpen && menuState.loadingItems.length > 0 && Loading ? /* @__PURE__ */ a.createElement(Loading, props) : /* @__PURE__ */ a.createElement(Render, _extends({}, props, {
    menuContext,
    menuState,
    isVisible,
    onClick: function onClick(eventProps, event) {
      if (!parentMenuContext) {
        if (event.currentTarget && !eventProps.isMenuUseEventPosition) {
          var boundingClientRect = event.currentTarget.getBoundingClientRect();
          var targetMock = _objectSpread$1(_objectSpread$1({}, event.currentTarget), {}, {
            getBoundingClientRect: function getBoundingClientRect() {
              return boundingClientRect;
            }
          });
          menuContext.display(eventProps, {
            anchorEl: targetMock,
            anchorElOrigin: {
              vertical: "bottom",
              horizontal: "left"
            }
          });
        } else {
          menuContext.display(eventProps, {
            anchorPosition: {
              left: event.clientX,
              top: event.clientY
            }
          });
        }
      }
    }
  })), (menuState.isRendered || isMenuPreload) && /* @__PURE__ */ ReactDOM.createPortal(/* @__PURE__ */ a.createElement(Menu, _extends({}, props, menuState.currentCtx.originalContext, {
    originalContext: _objectSpread$1(_objectSpread$1({}, props.originalContext), menuState.currentCtx.originalContext),
    menuContext,
    menuState,
    rootMenuContext: rootMenuContext ? rootMenuContext : menuContext
  })), elRef.current));
};
MenuActionComponent.propTypes = {
  /**
       * Action unique id
       */
  id: _pt.string.isRequired,
  /**
       * Renderer used to render the menu
       */
  menuRenderer: _pt.elementType.isRequired,
  actionKey: _pt.string.isRequired,
  /**
       * Renderer used to render an item in the menu
       */
  menuItemRenderer: _pt.elementType.isRequired,
  /**
       * Should the actions of the menu be preloaded
       */
  isMenuPreload: _pt.bool,
  /**
       * Target defining which actions to display in the menu
       */
  menuTarget: _pt.string.isRequired,
  /**
       * Filter actions to display in the menu
       */
  menuFilter: _pt.func,
  /**
       * Should the menu be displayed at the event position, or under the current element
       */
  isMenuUseEventPosition: _pt.bool,
  /**
       * Props passed to the main DisplayAction
       */
  originalContext: _pt.object,
  /**
       * Root menu context, if sub menu (internal)
       */
  rootMenuContext: _pt.shape({
    id: _pt.string.isRequired,
    dispatch: _pt.func.isRequired,
    display: _pt.func.isRequired
  }).isRequired,
  /**
       * Parent menu context, if sub menu (internal)
       */
  parentMenuContext: _pt.shape({
    id: _pt.string.isRequired,
    dispatch: _pt.func.isRequired,
    display: _pt.func.isRequired
  }).isRequired,
  /**
       * Render for the action button
       */
  render: _pt.elementType.isRequired,
  /**
       * Render for the action button
       */
  /* eslint-disable @typescript-eslint/no-explicit-any */
  loading: _pt.elementType.isRequired,
  /**
       * Helps determine if action is visible
       */
  visibilityPredicate: _pt.func
};
var menuAction = {
  component: MenuActionComponent
};
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _createSuper(t) {
  var r = _isNativeReflectConstruct();
  return function() {
    var e, o = _getPrototypeOf(t);
    if (r) {
      var s = _getPrototypeOf(this).constructor;
      e = Reflect.construct(o, arguments, s);
    } else e = o.apply(this, arguments);
    return _possibleConstructorReturn(this, e);
  };
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
var ContextualMenu = /* @__PURE__ */ (function(_React$Component) {
  _inherits(ContextualMenu2, _React$Component);
  var _super = _createSuper(ContextualMenu2);
  function ContextualMenu2(props) {
    var _this;
    _classCallCheck(this, ContextualMenu2);
    _this = _super.call(this, props);
    _this.onClickRef = /* @__PURE__ */ a.createRef();
    return _this;
  }
  _createClass(ContextualMenu2, [{
    key: "open",
    value: function open(e, newProps) {
      var _this$onClickRef$curr, _this$onClickRef;
      (_this$onClickRef$curr = (_this$onClickRef = this.onClickRef).current) === null || _this$onClickRef$curr === void 0 ? void 0 : _this$onClickRef$curr.call(_this$onClickRef, _objectSpread(_objectSpread(_objectSpread({}, this.props), {}, {
        isMenuUseEventPosition: true
      }, newProps), {}, {
        originalContext: _objectSpread(_objectSpread({}, this.props), newProps)
      }), e);
      e.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var setOpenRef = this.props.setOpenRef;
      if (setOpenRef) {
        setOpenRef.current = this.open.bind(this);
      }
      return /* @__PURE__ */ a.createElement(DisplayAction, _extends({}, this.props, {
        render: function render2(props) {
          var onClick = props.onClick;
          _this2.onClickRef.current = onClick;
          return null;
        }
      }));
    }
  }]);
  return ContextualMenu2;
})(a.Component);
_defineProperty(ContextualMenu, "propTypes", {
  actionKey: _pt.string.isRequired
});
export {
  ComponentRenderer,
  ComponentRendererActionComponent,
  ComponentRendererConsumer,
  ComponentRendererContext,
  ComponentRendererProvider,
  ContextualMenu,
  DisplayAction,
  DisplayActions,
  IframeRenderer,
  MenuActionComponent,
  componentRendererAction,
  composeServices,
  getIframeRenderer,
  menuAction,
  registry,
  useAdminRouteTreeStructure
};
//# sourceMappingURL=index-BIpNQ4vD.js.map
