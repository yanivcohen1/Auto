(function(exports){var COMPILED = !0, goog = goog || {};
goog.global = this;
goog.isDef = function(a) {
  return void 0 !== a;
};
goog.exportPath_ = function(a, b, c) {
  a = a.split(".");
  c = c || goog.global;
  a[0] in c || !c.execScript || c.execScript("var " + a[0]);
  for (var d;a.length && (d = a.shift());) {
    !a.length && goog.isDef(b) ? c[d] = b : c = c[d] ? c[d] : c[d] = {};
  }
};
goog.define = function(a, b) {
  var c = b;
  COMPILED || (goog.global.CLOSURE_UNCOMPILED_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES, a) ? c = goog.global.CLOSURE_UNCOMPILED_DEFINES[a] : goog.global.CLOSURE_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, a) && (c = goog.global.CLOSURE_DEFINES[a]));
  goog.exportPath_(a, c);
};
goog.DEBUG = !0;
goog.LOCALE = "en";
goog.TRUSTED_SITE = !0;
goog.STRICT_MODE_COMPATIBLE = !1;
goog.provide = function(a) {
  if (!COMPILED && goog.isProvided_(a)) {
    throw Error('Namespace "' + a + '" already declared.');
  }
  goog.constructNamespace_(a);
};
goog.constructNamespace_ = function(a, b) {
  if (!COMPILED) {
    delete goog.implicitNamespaces_[a];
    for (var c = a;(c = c.substring(0, c.lastIndexOf("."))) && !goog.getObjectByName(c);) {
      goog.implicitNamespaces_[c] = !0;
    }
  }
  goog.exportPath_(a, b);
};
goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module = function(a) {
  if (!goog.isString(a) || !a || -1 == a.search(goog.VALID_MODULE_RE_)) {
    throw Error("Invalid module identifier");
  }
  if (!goog.isInModuleLoader_()) {
    throw Error("Module " + a + " has been loaded incorrectly.");
  }
  if (goog.moduleLoaderState_.moduleName) {
    throw Error("goog.module may only be called once per module.");
  }
  goog.moduleLoaderState_.moduleName = a;
  if (!COMPILED) {
    if (goog.isProvided_(a)) {
      throw Error('Namespace "' + a + '" already declared.');
    }
    delete goog.implicitNamespaces_[a];
  }
};
goog.module.get = function(a) {
  return goog.module.getInternal_(a);
};
goog.module.getInternal_ = function(a) {
  if (!COMPILED) {
    return goog.isProvided_(a) ? a in goog.loadedModules_ ? goog.loadedModules_[a] : goog.getObjectByName(a) : null;
  }
};
goog.moduleLoaderState_ = null;
goog.isInModuleLoader_ = function() {
  return null != goog.moduleLoaderState_;
};
goog.module.declareTestMethods = function() {
  if (!goog.isInModuleLoader_()) {
    throw Error("goog.module.declareTestMethods must be called from within a goog.module");
  }
  goog.moduleLoaderState_.declareTestMethods = !0;
};
goog.module.declareLegacyNamespace = function() {
  if (!COMPILED && !goog.isInModuleLoader_()) {
    throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
  }
  if (!COMPILED && !goog.moduleLoaderState_.moduleName) {
    throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
  }
  goog.moduleLoaderState_.declareLegacyNamespace = !0;
};
goog.setTestOnly = function(a) {
  if (COMPILED && !goog.DEBUG) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
  }
};
goog.forwardDeclare = function(a) {
};
COMPILED || (goog.isProvided_ = function(a) {
  return a in goog.loadedModules_ || !goog.implicitNamespaces_[a] && goog.isDefAndNotNull(goog.getObjectByName(a));
}, goog.implicitNamespaces_ = {"goog.module":!0});
goog.getObjectByName = function(a, b) {
  for (var c = a.split("."), d = b || goog.global, e;e = c.shift();) {
    if (goog.isDefAndNotNull(d[e])) {
      d = d[e];
    } else {
      return null;
    }
  }
  return d;
};
goog.globalize = function(a, b) {
  var c = b || goog.global, d;
  for (d in a) {
    c[d] = a[d];
  }
};
goog.addDependency = function(a, b, c, d) {
  if (goog.DEPENDENCIES_ENABLED) {
    var e;
    a = a.replace(/\\/g, "/");
    for (var f = goog.dependencies_, g = 0;e = b[g];g++) {
      f.nameToPath[e] = a, f.pathIsModule[a] = !!d;
    }
    for (d = 0;b = c[d];d++) {
      a in f.requires || (f.requires[a] = {}), f.requires[a][b] = !0;
    }
  }
};
goog.ENABLE_DEBUG_LOADER = !0;
goog.logToConsole_ = function(a) {
  goog.global.console && goog.global.console.error(a);
};
goog.require = function(a) {
  if (!COMPILED) {
    goog.ENABLE_DEBUG_LOADER && goog.IS_OLD_IE_ && goog.maybeProcessDeferredDep_(a);
    if (goog.isProvided_(a)) {
      return goog.isInModuleLoader_() ? goog.module.getInternal_(a) : null;
    }
    if (goog.ENABLE_DEBUG_LOADER) {
      var b = goog.getPathFromDeps_(a);
      if (b) {
        return goog.included_[b] = !0, goog.writeScripts_(), null;
      }
    }
    a = "goog.require could not find: " + a;
    goog.logToConsole_(a);
    throw Error(a);
  }
};
goog.basePath = "";
goog.nullFunction = function() {
};
goog.identityFunction = function(a, b) {
  return a;
};
goog.abstractMethod = function() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(a) {
  a.getInstance = function() {
    if (a.instance_) {
      return a.instance_;
    }
    goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a);
    return a.instance_ = new a;
  };
};
goog.instantiatedSingletons_ = [];
goog.LOAD_MODULE_USING_EVAL = !0;
goog.SEAL_MODULE_EXPORTS = goog.DEBUG;
goog.loadedModules_ = {};
goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
goog.DEPENDENCIES_ENABLED && (goog.included_ = {}, goog.dependencies_ = {pathIsModule:{}, nameToPath:{}, requires:{}, visited:{}, written:{}, deferred:{}}, goog.inHtmlDocument_ = function() {
  var a = goog.global.document;
  return "undefined" != typeof a && "write" in a;
}, goog.findBasePath_ = function() {
  if (goog.global.CLOSURE_BASE_PATH) {
    goog.basePath = goog.global.CLOSURE_BASE_PATH;
  } else {
    if (goog.inHtmlDocument_()) {
      for (var a = goog.global.document.getElementsByTagName("script"), b = a.length - 1;0 <= b;--b) {
        var c = a[b].src, d = c.lastIndexOf("?"), d = -1 == d ? c.length : d;
        if ("base.js" == c.substr(d - 7, 7)) {
          goog.basePath = c.substr(0, d - 7);
          break;
        }
      }
    }
  }
}, goog.importScript_ = function(a, b) {
  (goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_)(a, b) && (goog.dependencies_.written[a] = !0);
}, goog.IS_OLD_IE_ = goog.global.document && goog.global.document.all && !goog.global.atob, goog.importModule_ = function(a) {
  goog.importScript_("", 'goog.retrieveAndExecModule_("' + a + '");') && (goog.dependencies_.written[a] = !0);
}, goog.queuedModules_ = [], goog.wrapModule_ = function(a, b) {
  return goog.LOAD_MODULE_USING_EVAL && goog.isDef(goog.global.JSON) ? "goog.loadModule(" + goog.global.JSON.stringify(b + "\n//# sourceURL=" + a + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + b + "\n;return exports});\n//# sourceURL=" + a + "\n";
}, goog.loadQueuedModules_ = function() {
  var a = goog.queuedModules_.length;
  if (0 < a) {
    var b = goog.queuedModules_;
    goog.queuedModules_ = [];
    for (var c = 0;c < a;c++) {
      goog.maybeProcessDeferredPath_(b[c]);
    }
  }
}, goog.maybeProcessDeferredDep_ = function(a) {
  goog.isDeferredModule_(a) && goog.allDepsAreAvailable_(a) && (a = goog.getPathFromDeps_(a), goog.maybeProcessDeferredPath_(goog.basePath + a));
}, goog.isDeferredModule_ = function(a) {
  return(a = goog.getPathFromDeps_(a)) && goog.dependencies_.pathIsModule[a] ? goog.basePath + a in goog.dependencies_.deferred : !1;
}, goog.allDepsAreAvailable_ = function(a) {
  if ((a = goog.getPathFromDeps_(a)) && a in goog.dependencies_.requires) {
    for (var b in goog.dependencies_.requires[a]) {
      if (!goog.isProvided_(b) && !goog.isDeferredModule_(b)) {
        return!1;
      }
    }
  }
  return!0;
}, goog.maybeProcessDeferredPath_ = function(a) {
  if (a in goog.dependencies_.deferred) {
    var b = goog.dependencies_.deferred[a];
    delete goog.dependencies_.deferred[a];
    goog.globalEval(b);
  }
}, goog.loadModule = function(a) {
  var b = goog.moduleLoaderState_;
  try {
    goog.moduleLoaderState_ = {moduleName:void 0, declareTestMethods:!1};
    var c;
    if (goog.isFunction(a)) {
      c = a.call(goog.global, {});
    } else {
      if (goog.isString(a)) {
        c = goog.loadModuleFromSource_.call(goog.global, a);
      } else {
        throw Error("Invalid module definition");
      }
    }
    var d = goog.moduleLoaderState_.moduleName;
    if (!goog.isString(d) || !d) {
      throw Error('Invalid module name "' + d + '"');
    }
    goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(d, c) : goog.SEAL_MODULE_EXPORTS && Object.seal && Object.seal(c);
    goog.loadedModules_[d] = c;
    if (goog.moduleLoaderState_.declareTestMethods) {
      for (var e in c) {
        if (0 === e.indexOf("test", 0) || "tearDown" == e || "setUp" == e || "setUpPage" == e || "tearDownPage" == e) {
          goog.global[e] = c[e];
        }
      }
    }
  } finally {
    goog.moduleLoaderState_ = b;
  }
}, goog.loadModuleFromSource_ = function(a) {
  eval(a);
  return{};
}, goog.writeScriptTag_ = function(a, b) {
  if (goog.inHtmlDocument_()) {
    var c = goog.global.document;
    if ("complete" == c.readyState) {
      if (/\bdeps.js$/.test(a)) {
        return!1;
      }
      throw Error('Cannot write "' + a + '" after document load');
    }
    var d = goog.IS_OLD_IE_;
    void 0 === b ? d ? (d = " onreadystatechange='goog.onScriptLoad_(this, " + ++goog.lastNonModuleScriptIndex_ + ")' ", c.write('<script type="text/javascript" src="' + a + '"' + d + ">\x3c/script>")) : c.write('<script type="text/javascript" src="' + a + '">\x3c/script>') : c.write('<script type="text/javascript">' + b + "\x3c/script>");
    return!0;
  }
  return!1;
}, goog.lastNonModuleScriptIndex_ = 0, goog.onScriptLoad_ = function(a, b) {
  "complete" == a.readyState && goog.lastNonModuleScriptIndex_ == b && goog.loadQueuedModules_();
  return!0;
}, goog.writeScripts_ = function() {
  function a(e) {
    if (!(e in d.written)) {
      if (!(e in d.visited) && (d.visited[e] = !0, e in d.requires)) {
        for (var f in d.requires[e]) {
          if (!goog.isProvided_(f)) {
            if (f in d.nameToPath) {
              a(d.nameToPath[f]);
            } else {
              throw Error("Undefined nameToPath for " + f);
            }
          }
        }
      }
      e in c || (c[e] = !0, b.push(e));
    }
  }
  var b = [], c = {}, d = goog.dependencies_, e;
  for (e in goog.included_) {
    d.written[e] || a(e);
  }
  for (var f = 0;f < b.length;f++) {
    e = b[f], goog.dependencies_.written[e] = !0;
  }
  var g = goog.moduleLoaderState_;
  goog.moduleLoaderState_ = null;
  for (f = 0;f < b.length;f++) {
    if (e = b[f]) {
      d.pathIsModule[e] ? goog.importModule_(goog.basePath + e) : goog.importScript_(goog.basePath + e);
    } else {
      throw goog.moduleLoaderState_ = g, Error("Undefined script input");
    }
  }
  goog.moduleLoaderState_ = g;
}, goog.getPathFromDeps_ = function(a) {
  return a in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[a] : null;
}, goog.findBasePath_(), goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js"));
goog.normalizePath_ = function(a) {
  a = a.split("/");
  for (var b = 0;b < a.length;) {
    "." == a[b] ? a.splice(b, 1) : b && ".." == a[b] && a[b - 1] && ".." != a[b - 1] ? a.splice(--b, 2) : b++;
  }
  return a.join("/");
};
goog.retrieveAndExecModule_ = function(a) {
  if (!COMPILED) {
    var b = a;
    a = goog.normalizePath_(a);
    var c = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_, d = null, e = new goog.global.XMLHttpRequest;
    e.onload = function() {
      d = this.responseText;
    };
    e.open("get", a, !1);
    e.send();
    d = e.responseText;
    if (null != d) {
      e = goog.wrapModule_(a, d), goog.IS_OLD_IE_ ? (goog.dependencies_.deferred[b] = e, goog.queuedModules_.push(b)) : c(a, e);
    } else {
      throw Error("load of " + a + "failed");
    }
  }
};
goog.typeOf = function(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
};
goog.isNull = function(a) {
  return null === a;
};
goog.isDefAndNotNull = function(a) {
  return null != a;
};
goog.isArray = function(a) {
  return "array" == goog.typeOf(a);
};
goog.isArrayLike = function(a) {
  var b = goog.typeOf(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
};
goog.isDateLike = function(a) {
  return goog.isObject(a) && "function" == typeof a.getFullYear;
};
goog.isString = function(a) {
  return "string" == typeof a;
};
goog.isBoolean = function(a) {
  return "boolean" == typeof a;
};
goog.isNumber = function(a) {
  return "number" == typeof a;
};
goog.isFunction = function(a) {
  return "function" == goog.typeOf(a);
};
goog.isObject = function(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
};
goog.getUid = function(a) {
  return a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_);
};
goog.hasUid = function(a) {
  return!!a[goog.UID_PROPERTY_];
};
goog.removeUid = function(a) {
  "removeAttribute" in a && a.removeAttribute(goog.UID_PROPERTY_);
  try {
    delete a[goog.UID_PROPERTY_];
  } catch (b) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + (1E9 * Math.random() >>> 0);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function(a) {
  var b = goog.typeOf(a);
  if ("object" == b || "array" == b) {
    if (a.clone) {
      return a.clone();
    }
    var b = "array" == b ? [] : {}, c;
    for (c in a) {
      b[c] = goog.cloneObject(a[c]);
    }
    return b;
  }
  return a;
};
goog.bindNative_ = function(a, b, c) {
  return a.call.apply(a.bind, arguments);
};
goog.bindJs_ = function(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
};
goog.bind = function(a, b, c) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;
  return goog.bind.apply(null, arguments);
};
goog.partial = function(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
};
goog.mixin = function(a, b) {
  for (var c in b) {
    a[c] = b[c];
  }
};
goog.now = goog.TRUSTED_SITE && Date.now || function() {
  return+new Date;
};
goog.globalEval = function(a) {
  if (goog.global.execScript) {
    goog.global.execScript(a, "JavaScript");
  } else {
    if (goog.global.eval) {
      if (null == goog.evalWorksForGlobals_ && (goog.global.eval("var _et_ = 1;"), "undefined" != typeof goog.global._et_ ? (delete goog.global._et_, goog.evalWorksForGlobals_ = !0) : goog.evalWorksForGlobals_ = !1), goog.evalWorksForGlobals_) {
        goog.global.eval(a);
      } else {
        var b = goog.global.document, c = b.createElement("script");
        c.type = "text/javascript";
        c.defer = !1;
        c.appendChild(b.createTextNode(a));
        b.body.appendChild(c);
        b.body.removeChild(c);
      }
    } else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.evalWorksForGlobals_ = null;
goog.getCssName = function(a, b) {
  var c = function(a) {
    return goog.cssNameMapping_[a] || a;
  }, d = function(a) {
    a = a.split("-");
    for (var b = [], d = 0;d < a.length;d++) {
      b.push(c(a[d]));
    }
    return b.join("-");
  }, d = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? c : d : function(a) {
    return a;
  };
  return b ? a + "-" + d(b) : d(a);
};
goog.setCssNameMapping = function(a, b) {
  goog.cssNameMapping_ = a;
  goog.cssNameMappingStyle_ = b;
};
!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
goog.getMsg = function(a, b) {
  b && (a = a.replace(/\{\$([^}]+)}/g, function(a, d) {
    return d in b ? b[d] : a;
  }));
  return a;
};
goog.getMsgWithFallback = function(a, b) {
  return a;
};
goog.exportSymbol = function(a, b, c) {
  goog.exportPath_(a, b, c);
};
goog.exportProperty = function(a, b, c) {
  a[b] = c;
};
goog.inherits = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.superClass_ = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.base = function(a, c, f) {
    var g = Array.prototype.slice.call(arguments, 2);
    return b.prototype[c].apply(a, g);
  };
};
goog.base = function(a, b, c) {
  var d = arguments.callee.caller;
  if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !d) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (d.superClass_) {
    return d.superClass_.constructor.apply(a, Array.prototype.slice.call(arguments, 1));
  }
  for (var e = Array.prototype.slice.call(arguments, 2), f = !1, g = a.constructor;g;g = g.superClass_ && g.superClass_.constructor) {
    if (g.prototype[b] === d) {
      f = !0;
    } else {
      if (f) {
        return g.prototype[b].apply(a, e);
      }
    }
  }
  if (a[b] === d) {
    return a.constructor.prototype[b].apply(a, e);
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
goog.scope = function(a) {
  a.call(goog.global);
};
COMPILED || (goog.global.COMPILED = COMPILED);
goog.defineClass = function(a, b) {
  var c = b.constructor, d = b.statics;
  c && c != Object.prototype.constructor || (c = function() {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  c = goog.defineClass.createSealingConstructor_(c, a);
  a && goog.inherits(c, a);
  delete b.constructor;
  delete b.statics;
  goog.defineClass.applyProperties_(c.prototype, b);
  null != d && (d instanceof Function ? d(c) : goog.defineClass.applyProperties_(c, d));
  return c;
};
goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
goog.defineClass.createSealingConstructor_ = function(a, b) {
  if (goog.defineClass.SEAL_CLASS_INSTANCES && Object.seal instanceof Function) {
    if (b && b.prototype && b.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]) {
      return a;
    }
    var c = function() {
      var b = a.apply(this, arguments) || this;
      b[goog.UID_PROPERTY_] = b[goog.UID_PROPERTY_];
      this.constructor === c && Object.seal(b);
      return b;
    };
    return c;
  }
  return a;
};
goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.defineClass.applyProperties_ = function(a, b) {
  for (var c in b) {
    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
  }
  for (var d = 0;d < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length;d++) {
    c = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d], Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
  }
};
goog.tagUnsealableClass = function(a) {
  !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0);
};
goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";
goog.debug = {};
goog.debug.Error = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, goog.debug.Error);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
};
goog.inherits(goog.debug.Error, Error);
goog.debug.Error.prototype.name = "CustomError";
goog.dom = {};
goog.dom.NodeType = {ELEMENT:1, ATTRIBUTE:2, TEXT:3, CDATA_SECTION:4, ENTITY_REFERENCE:5, ENTITY:6, PROCESSING_INSTRUCTION:7, COMMENT:8, DOCUMENT:9, DOCUMENT_TYPE:10, DOCUMENT_FRAGMENT:11, NOTATION:12};
goog.string = {};
goog.string.DETECT_DOUBLE_ESCAPING = !1;
goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1;
goog.string.Unicode = {NBSP:"\u00a0"};
goog.string.startsWith = function(a, b) {
  return 0 == a.lastIndexOf(b, 0);
};
goog.string.endsWith = function(a, b) {
  var c = a.length - b.length;
  return 0 <= c && a.indexOf(b, c) == c;
};
goog.string.caseInsensitiveStartsWith = function(a, b) {
  return 0 == goog.string.caseInsensitiveCompare(b, a.substr(0, b.length));
};
goog.string.caseInsensitiveEndsWith = function(a, b) {
  return 0 == goog.string.caseInsensitiveCompare(b, a.substr(a.length - b.length, b.length));
};
goog.string.caseInsensitiveEquals = function(a, b) {
  return a.toLowerCase() == b.toLowerCase();
};
goog.string.subs = function(a, b) {
  for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1);e.length && 1 < c.length;) {
    d += c.shift() + e.shift();
  }
  return d + c.join("%s");
};
goog.string.collapseWhitespace = function(a) {
  return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
goog.string.isEmptyOrWhitespace = function(a) {
  return/^[\s\xa0]*$/.test(a);
};
goog.string.isEmptyString = function(a) {
  return 0 == a.length;
};
goog.string.isEmpty = goog.string.isEmptyOrWhitespace;
goog.string.isEmptyOrWhitespaceSafe = function(a) {
  return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(a));
};
goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe;
goog.string.isBreakingWhitespace = function(a) {
  return!/[^\t\n\r ]/.test(a);
};
goog.string.isAlpha = function(a) {
  return!/[^a-zA-Z]/.test(a);
};
goog.string.isNumeric = function(a) {
  return!/[^0-9]/.test(a);
};
goog.string.isAlphaNumeric = function(a) {
  return!/[^a-zA-Z0-9]/.test(a);
};
goog.string.isSpace = function(a) {
  return " " == a;
};
goog.string.isUnicodeChar = function(a) {
  return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a;
};
goog.string.stripNewlines = function(a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ");
};
goog.string.canonicalizeNewlines = function(a) {
  return a.replace(/(\r\n|\r|\n)/g, "\n");
};
goog.string.normalizeWhitespace = function(a) {
  return a.replace(/\xa0|\s/g, " ");
};
goog.string.normalizeSpaces = function(a) {
  return a.replace(/\xa0|[ \t]+/g, " ");
};
goog.string.collapseBreakingSpaces = function(a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
goog.string.trim = goog.TRUSTED_SITE && String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
goog.string.trimLeft = function(a) {
  return a.replace(/^[\s\xa0]+/, "");
};
goog.string.trimRight = function(a) {
  return a.replace(/[\s\xa0]+$/, "");
};
goog.string.caseInsensitiveCompare = function(a, b) {
  var c = String(a).toLowerCase(), d = String(b).toLowerCase();
  return c < d ? -1 : c == d ? 0 : 1;
};
goog.string.numerateCompareRegExp_ = /(\.\d+)|(\d+)|(\D+)/g;
goog.string.numerateCompare = function(a, b) {
  if (a == b) {
    return 0;
  }
  if (!a) {
    return-1;
  }
  if (!b) {
    return 1;
  }
  for (var c = a.toLowerCase().match(goog.string.numerateCompareRegExp_), d = b.toLowerCase().match(goog.string.numerateCompareRegExp_), e = Math.min(c.length, d.length), f = 0;f < e;f++) {
    var g = c[f], h = d[f];
    if (g != h) {
      return c = parseInt(g, 10), !isNaN(c) && (d = parseInt(h, 10), !isNaN(d) && c - d) ? c - d : g < h ? -1 : 1;
    }
  }
  return c.length != d.length ? c.length - d.length : a < b ? -1 : 1;
};
goog.string.urlEncode = function(a) {
  return encodeURIComponent(String(a));
};
goog.string.urlDecode = function(a) {
  return decodeURIComponent(a.replace(/\+/g, " "));
};
goog.string.newLineToBr = function(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>");
};
goog.string.htmlEscape = function(a, b) {
  if (b) {
    a = a.replace(goog.string.AMP_RE_, "&amp;").replace(goog.string.LT_RE_, "&lt;").replace(goog.string.GT_RE_, "&gt;").replace(goog.string.QUOT_RE_, "&quot;").replace(goog.string.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.NULL_RE_, "&#0;"), goog.string.DETECT_DOUBLE_ESCAPING && (a = a.replace(goog.string.E_RE_, "&#101;"));
  } else {
    if (!goog.string.ALL_RE_.test(a)) {
      return a;
    }
    -1 != a.indexOf("&") && (a = a.replace(goog.string.AMP_RE_, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(goog.string.LT_RE_, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(goog.string.GT_RE_, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(goog.string.QUOT_RE_, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(goog.string.SINGLE_QUOTE_RE_, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(goog.string.NULL_RE_, "&#0;"));
    goog.string.DETECT_DOUBLE_ESCAPING && -1 != a.indexOf("e") && (a = a.replace(goog.string.E_RE_, "&#101;"));
  }
  return a;
};
goog.string.AMP_RE_ = /&/g;
goog.string.LT_RE_ = /</g;
goog.string.GT_RE_ = />/g;
goog.string.QUOT_RE_ = /"/g;
goog.string.SINGLE_QUOTE_RE_ = /'/g;
goog.string.NULL_RE_ = /\x00/g;
goog.string.E_RE_ = /e/g;
goog.string.ALL_RE_ = goog.string.DETECT_DOUBLE_ESCAPING ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
goog.string.unescapeEntities = function(a) {
  return goog.string.contains(a, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(a) : goog.string.unescapePureXmlEntities_(a) : a;
};
goog.string.unescapeEntitiesWithDocument = function(a, b) {
  return goog.string.contains(a, "&") ? goog.string.unescapeEntitiesUsingDom_(a, b) : a;
};
goog.string.unescapeEntitiesUsingDom_ = function(a, b) {
  var c = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'}, d;
  d = b ? b.createElement("div") : goog.global.document.createElement("div");
  return a.replace(goog.string.HTML_ENTITY_PATTERN_, function(a, b) {
    var g = c[a];
    if (g) {
      return g;
    }
    if ("#" == b.charAt(0)) {
      var h = Number("0" + b.substr(1));
      isNaN(h) || (g = String.fromCharCode(h));
    }
    g || (d.innerHTML = a + " ", g = d.firstChild.nodeValue.slice(0, -1));
    return c[a] = g;
  });
};
goog.string.unescapePureXmlEntities_ = function(a) {
  return a.replace(/&([^;]+);/g, function(a, c) {
    switch(c) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return'"';
      default:
        if ("#" == c.charAt(0)) {
          var d = Number("0" + c.substr(1));
          if (!isNaN(d)) {
            return String.fromCharCode(d);
          }
        }
        return a;
    }
  });
};
goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
goog.string.whitespaceEscape = function(a, b) {
  return goog.string.newLineToBr(a.replace(/  /g, " &#160;"), b);
};
goog.string.preserveSpaces = function(a) {
  return a.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
};
goog.string.stripQuotes = function(a, b) {
  for (var c = b.length, d = 0;d < c;d++) {
    var e = 1 == c ? b : b.charAt(d);
    if (a.charAt(0) == e && a.charAt(a.length - 1) == e) {
      return a.substring(1, a.length - 1);
    }
  }
  return a;
};
goog.string.truncate = function(a, b, c) {
  c && (a = goog.string.unescapeEntities(a));
  a.length > b && (a = a.substring(0, b - 3) + "...");
  c && (a = goog.string.htmlEscape(a));
  return a;
};
goog.string.truncateMiddle = function(a, b, c, d) {
  c && (a = goog.string.unescapeEntities(a));
  if (d && a.length > b) {
    d > b && (d = b);
    var e = a.length - d;
    a = a.substring(0, b - d) + "..." + a.substring(e);
  } else {
    a.length > b && (d = Math.floor(b / 2), e = a.length - d, a = a.substring(0, d + b % 2) + "..." + a.substring(e));
  }
  c && (a = goog.string.htmlEscape(a));
  return a;
};
goog.string.specialEscapeChars_ = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
goog.string.jsEscapeCache_ = {"'":"\\'"};
goog.string.quote = function(a) {
  a = String(a);
  if (a.quote) {
    return a.quote();
  }
  for (var b = ['"'], c = 0;c < a.length;c++) {
    var d = a.charAt(c), e = d.charCodeAt(0);
    b[c + 1] = goog.string.specialEscapeChars_[d] || (31 < e && 127 > e ? d : goog.string.escapeChar(d));
  }
  b.push('"');
  return b.join("");
};
goog.string.escapeString = function(a) {
  for (var b = [], c = 0;c < a.length;c++) {
    b[c] = goog.string.escapeChar(a.charAt(c));
  }
  return b.join("");
};
goog.string.escapeChar = function(a) {
  if (a in goog.string.jsEscapeCache_) {
    return goog.string.jsEscapeCache_[a];
  }
  if (a in goog.string.specialEscapeChars_) {
    return goog.string.jsEscapeCache_[a] = goog.string.specialEscapeChars_[a];
  }
  var b = a, c = a.charCodeAt(0);
  if (31 < c && 127 > c) {
    b = a;
  } else {
    if (256 > c) {
      if (b = "\\x", 16 > c || 256 < c) {
        b += "0";
      }
    } else {
      b = "\\u", 4096 > c && (b += "0");
    }
    b += c.toString(16).toUpperCase();
  }
  return goog.string.jsEscapeCache_[a] = b;
};
goog.string.contains = function(a, b) {
  return-1 != a.indexOf(b);
};
goog.string.caseInsensitiveContains = function(a, b) {
  return goog.string.contains(a.toLowerCase(), b.toLowerCase());
};
goog.string.countOf = function(a, b) {
  return a && b ? a.split(b).length - 1 : 0;
};
goog.string.removeAt = function(a, b, c) {
  var d = a;
  0 <= b && b < a.length && 0 < c && (d = a.substr(0, b) + a.substr(b + c, a.length - b - c));
  return d;
};
goog.string.remove = function(a, b) {
  var c = new RegExp(goog.string.regExpEscape(b), "");
  return a.replace(c, "");
};
goog.string.removeAll = function(a, b) {
  var c = new RegExp(goog.string.regExpEscape(b), "g");
  return a.replace(c, "");
};
goog.string.regExpEscape = function(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
goog.string.repeat = function(a, b) {
  return Array(b + 1).join(a);
};
goog.string.padNumber = function(a, b, c) {
  a = goog.isDef(c) ? a.toFixed(c) : String(a);
  c = a.indexOf(".");
  -1 == c && (c = a.length);
  return goog.string.repeat("0", Math.max(0, b - c)) + a;
};
goog.string.makeSafe = function(a) {
  return null == a ? "" : String(a);
};
goog.string.buildString = function(a) {
  return Array.prototype.join.call(arguments, "");
};
goog.string.getRandomString = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36);
};
goog.string.compareVersions = function(a, b) {
  for (var c = 0, d = goog.string.trim(String(a)).split("."), e = goog.string.trim(String(b)).split("."), f = Math.max(d.length, e.length), g = 0;0 == c && g < f;g++) {
    var h = d[g] || "", k = e[g] || "", l = RegExp("(\\d*)(\\D*)", "g"), m = RegExp("(\\d*)(\\D*)", "g");
    do {
      var n = l.exec(h) || ["", "", ""], p = m.exec(k) || ["", "", ""];
      if (0 == n[0].length && 0 == p[0].length) {
        break;
      }
      var c = 0 == n[1].length ? 0 : parseInt(n[1], 10), q = 0 == p[1].length ? 0 : parseInt(p[1], 10), c = goog.string.compareElements_(c, q) || goog.string.compareElements_(0 == n[2].length, 0 == p[2].length) || goog.string.compareElements_(n[2], p[2]);
    } while (0 == c);
  }
  return c;
};
goog.string.compareElements_ = function(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
};
goog.string.HASHCODE_MAX_ = 4294967296;
goog.string.hashCode = function(a) {
  for (var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= goog.string.HASHCODE_MAX_;
  }
  return b;
};
goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
goog.string.createUniqueString = function() {
  return "goog_" + goog.string.uniqueStringCounter_++;
};
goog.string.toNumber = function(a) {
  var b = Number(a);
  return 0 == b && goog.string.isEmptyOrWhitespace(a) ? NaN : b;
};
goog.string.isLowerCamelCase = function(a) {
  return/^[a-z]+([A-Z][a-z]*)*$/.test(a);
};
goog.string.isUpperCamelCase = function(a) {
  return/^([A-Z][a-z]*)+$/.test(a);
};
goog.string.toCamelCase = function(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
};
goog.string.toSelectorCase = function(a) {
  return String(a).replace(/([A-Z])/g, "-$1").toLowerCase();
};
goog.string.toTitleCase = function(a, b) {
  var c = goog.isString(b) ? goog.string.regExpEscape(b) : "\\s";
  return a.replace(new RegExp("(^" + (c ? "|[" + c + "]+" : "") + ")([a-z])", "g"), function(a, b, c) {
    return b + c.toUpperCase();
  });
};
goog.string.capitalize = function(a) {
  return String(a.charAt(0)).toUpperCase() + String(a.substr(1)).toLowerCase();
};
goog.string.parseInt = function(a) {
  isFinite(a) && (a = String(a));
  return goog.isString(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
};
goog.string.splitLimit = function(a, b, c) {
  a = a.split(b);
  for (var d = [];0 < c && a.length;) {
    d.push(a.shift()), c--;
  }
  a.length && d.push(a.join(b));
  return d;
};
goog.string.editDistance = function(a, b) {
  var c = [], d = [];
  if (a == b) {
    return 0;
  }
  if (!a.length || !b.length) {
    return Math.max(a.length, b.length);
  }
  for (var e = 0;e < b.length + 1;e++) {
    c[e] = e;
  }
  for (e = 0;e < a.length;e++) {
    d[0] = e + 1;
    for (var f = 0;f < b.length;f++) {
      d[f + 1] = Math.min(d[f] + 1, c[f + 1] + 1, c[f] + (a[e] != b[f]));
    }
    for (f = 0;f < c.length;f++) {
      c[f] = d[f];
    }
  }
  return d[b.length];
};
goog.asserts = {};
goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
goog.asserts.AssertionError = function(a, b) {
  b.unshift(a);
  goog.debug.Error.call(this, goog.string.subs.apply(null, b));
  b.shift();
  this.messagePattern = a;
};
goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
goog.asserts.AssertionError.prototype.name = "AssertionError";
goog.asserts.DEFAULT_ERROR_HANDLER = function(a) {
  throw a;
};
goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;
goog.asserts.doAssertFailure_ = function(a, b, c, d) {
  var e = "Assertion failed";
  if (c) {
    var e = e + (": " + c), f = d
  } else {
    a && (e += ": " + a, f = b);
  }
  a = new goog.asserts.AssertionError("" + e, f || []);
  goog.asserts.errorHandler_(a);
};
goog.asserts.setErrorHandler = function(a) {
  goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = a);
};
goog.asserts.assert = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !a && goog.asserts.doAssertFailure_("", null, b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.fail = function(a, b) {
  goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)));
};
goog.asserts.assertNumber = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isNumber(a) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertString = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isString(a) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertFunction = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isFunction(a) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertObject = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isObject(a) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertArray = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isArray(a) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertBoolean = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(a) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertElement = function(a, b, c) {
  !goog.asserts.ENABLE_ASSERTS || goog.isObject(a) && a.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertInstanceof = function(a, b, c, d) {
  !goog.asserts.ENABLE_ASSERTS || a instanceof b || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_(b), goog.asserts.getType_(a)], c, Array.prototype.slice.call(arguments, 3));
  return a;
};
goog.asserts.assertObjectPrototypeIsIntact = function() {
  for (var a in Object.prototype) {
    goog.asserts.fail(a + " should not be enumerable in Object.prototype.");
  }
};
goog.asserts.getType_ = function(a) {
  return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a;
};
goog.array = {};
goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE;
goog.array.ASSUME_NATIVE_FUNCTIONS = !1;
goog.array.peek = function(a) {
  return a[a.length - 1];
};
goog.array.last = goog.array.peek;
goog.array.ARRAY_PROTOTYPE_ = Array.prototype;
goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.indexOf) ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (goog.isString(a)) {
    return goog.isString(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
};
goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.lastIndexOf) ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.lastIndexOf.call(a, b, null == c ? a.length - 1 : c);
} : function(a, b, c) {
  c = null == c ? a.length - 1 : c;
  0 > c && (c = Math.max(0, a.length + c));
  if (goog.isString(a)) {
    return goog.isString(b) && 1 == b.length ? a.lastIndexOf(b, c) : -1;
  }
  for (;0 <= c;c--) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
};
goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.forEach) ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  goog.array.ARRAY_PROTOTYPE_.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
};
goog.array.forEachRight = function(a, b, c) {
  for (var d = a.length, e = goog.isString(a) ? a.split("") : a, d = d - 1;0 <= d;--d) {
    d in e && b.call(c, e[d], d, a);
  }
};
goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.filter) ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.filter.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = [], f = 0, g = goog.isString(a) ? a.split("") : a, h = 0;h < d;h++) {
    if (h in g) {
      var k = g[h];
      b.call(c, k, h, a) && (e[f++] = k);
    }
  }
  return e;
};
goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.map) ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.map.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = Array(d), f = goog.isString(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in f && (e[g] = b.call(c, f[g], g, a));
  }
  return e;
};
goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.reduce) ? function(a, b, c, d) {
  goog.asserts.assert(null != a.length);
  d && (b = goog.bind(b, d));
  return goog.array.ARRAY_PROTOTYPE_.reduce.call(a, b, c);
} : function(a, b, c, d) {
  var e = c;
  goog.array.forEach(a, function(c, g) {
    e = b.call(d, e, c, g, a);
  });
  return e;
};
goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.reduceRight) ? function(a, b, c, d) {
  goog.asserts.assert(null != a.length);
  d && (b = goog.bind(b, d));
  return goog.array.ARRAY_PROTOTYPE_.reduceRight.call(a, b, c);
} : function(a, b, c, d) {
  var e = c;
  goog.array.forEachRight(a, function(c, g) {
    e = b.call(d, e, c, g, a);
  });
  return e;
};
goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.some) ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.some.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0;f < d;f++) {
    if (f in e && b.call(c, e[f], f, a)) {
      return!0;
    }
  }
  return!1;
};
goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || goog.array.ARRAY_PROTOTYPE_.every) ? function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.every.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0;f < d;f++) {
    if (f in e && !b.call(c, e[f], f, a)) {
      return!1;
    }
  }
  return!0;
};
goog.array.count = function(a, b, c) {
  var d = 0;
  goog.array.forEach(a, function(a, f, g) {
    b.call(c, a, f, g) && ++d;
  }, c);
  return d;
};
goog.array.find = function(a, b, c) {
  b = goog.array.findIndex(a, b, c);
  return 0 > b ? null : goog.isString(a) ? a.charAt(b) : a[b];
};
goog.array.findIndex = function(a, b, c) {
  for (var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0;f < d;f++) {
    if (f in e && b.call(c, e[f], f, a)) {
      return f;
    }
  }
  return-1;
};
goog.array.findRight = function(a, b, c) {
  b = goog.array.findIndexRight(a, b, c);
  return 0 > b ? null : goog.isString(a) ? a.charAt(b) : a[b];
};
goog.array.findIndexRight = function(a, b, c) {
  for (var d = a.length, e = goog.isString(a) ? a.split("") : a, d = d - 1;0 <= d;d--) {
    if (d in e && b.call(c, e[d], d, a)) {
      return d;
    }
  }
  return-1;
};
goog.array.contains = function(a, b) {
  return 0 <= goog.array.indexOf(a, b);
};
goog.array.isEmpty = function(a) {
  return 0 == a.length;
};
goog.array.clear = function(a) {
  if (!goog.isArray(a)) {
    for (var b = a.length - 1;0 <= b;b--) {
      delete a[b];
    }
  }
  a.length = 0;
};
goog.array.insert = function(a, b) {
  goog.array.contains(a, b) || a.push(b);
};
goog.array.insertAt = function(a, b, c) {
  goog.array.splice(a, c, 0, b);
};
goog.array.insertArrayAt = function(a, b, c) {
  goog.partial(goog.array.splice, a, c, 0).apply(null, b);
};
goog.array.insertBefore = function(a, b, c) {
  var d;
  2 == arguments.length || 0 > (d = goog.array.indexOf(a, c)) ? a.push(b) : goog.array.insertAt(a, b, d);
};
goog.array.remove = function(a, b) {
  var c = goog.array.indexOf(a, b), d;
  (d = 0 <= c) && goog.array.removeAt(a, c);
  return d;
};
goog.array.removeAt = function(a, b) {
  goog.asserts.assert(null != a.length);
  return 1 == goog.array.ARRAY_PROTOTYPE_.splice.call(a, b, 1).length;
};
goog.array.removeIf = function(a, b, c) {
  b = goog.array.findIndex(a, b, c);
  return 0 <= b ? (goog.array.removeAt(a, b), !0) : !1;
};
goog.array.removeAllIf = function(a, b, c) {
  var d = 0;
  goog.array.forEachRight(a, function(e, f) {
    b.call(c, e, f, a) && goog.array.removeAt(a, f) && d++;
  });
  return d;
};
goog.array.concat = function(a) {
  return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_, arguments);
};
goog.array.join = function(a) {
  return goog.array.ARRAY_PROTOTYPE_.concat.apply(goog.array.ARRAY_PROTOTYPE_, arguments);
};
goog.array.toArray = function(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
};
goog.array.clone = goog.array.toArray;
goog.array.extend = function(a, b) {
  for (var c = 1;c < arguments.length;c++) {
    var d = arguments[c];
    if (goog.isArrayLike(d)) {
      var e = a.length || 0, f = d.length || 0;
      a.length = e + f;
      for (var g = 0;g < f;g++) {
        a[e + g] = d[g];
      }
    } else {
      a.push(d);
    }
  }
};
goog.array.splice = function(a, b, c, d) {
  goog.asserts.assert(null != a.length);
  return goog.array.ARRAY_PROTOTYPE_.splice.apply(a, goog.array.slice(arguments, 1));
};
goog.array.slice = function(a, b, c) {
  goog.asserts.assert(null != a.length);
  return 2 >= arguments.length ? goog.array.ARRAY_PROTOTYPE_.slice.call(a, b) : goog.array.ARRAY_PROTOTYPE_.slice.call(a, b, c);
};
goog.array.removeDuplicates = function(a, b, c) {
  b = b || a;
  var d = function(a) {
    return goog.isObject(g) ? "o" + goog.getUid(g) : (typeof g).charAt(0) + g;
  };
  c = c || d;
  for (var d = {}, e = 0, f = 0;f < a.length;) {
    var g = a[f++], h = c(g);
    Object.prototype.hasOwnProperty.call(d, h) || (d[h] = !0, b[e++] = g);
  }
  b.length = e;
};
goog.array.binarySearch = function(a, b, c) {
  return goog.array.binarySearch_(a, c || goog.array.defaultCompare, !1, b);
};
goog.array.binarySelect = function(a, b, c) {
  return goog.array.binarySearch_(a, b, !0, void 0, c);
};
goog.array.binarySearch_ = function(a, b, c, d, e) {
  for (var f = 0, g = a.length, h;f < g;) {
    var k = f + g >> 1, l;
    l = c ? b.call(e, a[k], k, a) : b(d, a[k]);
    0 < l ? f = k + 1 : (g = k, h = !l);
  }
  return h ? f : ~f;
};
goog.array.sort = function(a, b) {
  a.sort(b || goog.array.defaultCompare);
};
goog.array.stableSort = function(a, b) {
  for (var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]};
  }
  var d = b || goog.array.defaultCompare;
  goog.array.sort(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index;
  });
  for (c = 0;c < a.length;c++) {
    a[c] = a[c].value;
  }
};
goog.array.sortByKey = function(a, b, c) {
  var d = c || goog.array.defaultCompare;
  goog.array.sort(a, function(a, c) {
    return d(b(a), b(c));
  });
};
goog.array.sortObjectsByKey = function(a, b, c) {
  goog.array.sortByKey(a, function(a) {
    return a[b];
  }, c);
};
goog.array.isSorted = function(a, b, c) {
  b = b || goog.array.defaultCompare;
  for (var d = 1;d < a.length;d++) {
    var e = b(a[d - 1], a[d]);
    if (0 < e || 0 == e && c) {
      return!1;
    }
  }
  return!0;
};
goog.array.equals = function(a, b, c) {
  if (!goog.isArrayLike(a) || !goog.isArrayLike(b) || a.length != b.length) {
    return!1;
  }
  var d = a.length;
  c = c || goog.array.defaultCompareEquality;
  for (var e = 0;e < d;e++) {
    if (!c(a[e], b[e])) {
      return!1;
    }
  }
  return!0;
};
goog.array.compare3 = function(a, b, c) {
  c = c || goog.array.defaultCompare;
  for (var d = Math.min(a.length, b.length), e = 0;e < d;e++) {
    var f = c(a[e], b[e]);
    if (0 != f) {
      return f;
    }
  }
  return goog.array.defaultCompare(a.length, b.length);
};
goog.array.defaultCompare = function(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
};
goog.array.defaultCompareEquality = function(a, b) {
  return a === b;
};
goog.array.binaryInsert = function(a, b, c) {
  c = goog.array.binarySearch(a, b, c);
  return 0 > c ? (goog.array.insertAt(a, b, -(c + 1)), !0) : !1;
};
goog.array.binaryRemove = function(a, b, c) {
  b = goog.array.binarySearch(a, b, c);
  return 0 <= b ? goog.array.removeAt(a, b) : !1;
};
goog.array.bucket = function(a, b, c) {
  for (var d = {}, e = 0;e < a.length;e++) {
    var f = a[e], g = b.call(c, f, e, a);
    goog.isDef(g) && (d[g] || (d[g] = [])).push(f);
  }
  return d;
};
goog.array.toObject = function(a, b, c) {
  var d = {};
  goog.array.forEach(a, function(e, f) {
    d[b.call(c, e, f, a)] = e;
  });
  return d;
};
goog.array.range = function(a, b, c) {
  var d = [], e = 0, f = a;
  c = c || 1;
  void 0 !== b && (e = a, f = b);
  if (0 > c * (f - e)) {
    return[];
  }
  if (0 < c) {
    for (a = e;a < f;a += c) {
      d.push(a);
    }
  } else {
    for (a = e;a > f;a += c) {
      d.push(a);
    }
  }
  return d;
};
goog.array.repeat = function(a, b) {
  for (var c = [], d = 0;d < b;d++) {
    c[d] = a;
  }
  return c;
};
goog.array.flatten = function(a) {
  for (var b = [], c = 0;c < arguments.length;c++) {
    var d = arguments[c];
    if (goog.isArray(d)) {
      for (var e = 0;e < d.length;e += 8192) {
        for (var f = goog.array.slice(d, e, e + 8192), f = goog.array.flatten.apply(null, f), g = 0;g < f.length;g++) {
          b.push(f[g]);
        }
      }
    } else {
      b.push(d);
    }
  }
  return b;
};
goog.array.rotate = function(a, b) {
  goog.asserts.assert(null != a.length);
  a.length && (b %= a.length, 0 < b ? goog.array.ARRAY_PROTOTYPE_.unshift.apply(a, a.splice(-b, b)) : 0 > b && goog.array.ARRAY_PROTOTYPE_.push.apply(a, a.splice(0, -b)));
  return a;
};
goog.array.moveItem = function(a, b, c) {
  goog.asserts.assert(0 <= b && b < a.length);
  goog.asserts.assert(0 <= c && c < a.length);
  b = goog.array.ARRAY_PROTOTYPE_.splice.call(a, b, 1);
  goog.array.ARRAY_PROTOTYPE_.splice.call(a, c, 0, b[0]);
};
goog.array.zip = function(a) {
  if (!arguments.length) {
    return[];
  }
  for (var b = [], c = 0;;c++) {
    for (var d = [], e = 0;e < arguments.length;e++) {
      var f = arguments[e];
      if (c >= f.length) {
        return b;
      }
      d.push(f[c]);
    }
    b.push(d);
  }
};
goog.array.shuffle = function(a, b) {
  for (var c = b || Math.random, d = a.length - 1;0 < d;d--) {
    var e = Math.floor(c() * (d + 1)), f = a[d];
    a[d] = a[e];
    a[e] = f;
  }
};
var webdriver = {Button:{LEFT:0, MIDDLE:1, RIGHT:2}};
webdriver.Command = function(a) {
  this.name_ = a;
  this.parameters_ = {};
};
webdriver.Command.prototype.getName = function() {
  return this.name_;
};
webdriver.Command.prototype.setParameter = function(a, b) {
  this.parameters_[a] = b;
  return this;
};
webdriver.Command.prototype.setParameters = function(a) {
  this.parameters_ = a;
  return this;
};
webdriver.Command.prototype.getParameter = function(a) {
  return this.parameters_[a];
};
webdriver.Command.prototype.getParameters = function() {
  return this.parameters_;
};
webdriver.CommandName = {GET_SERVER_STATUS:"getStatus", NEW_SESSION:"newSession", GET_SESSIONS:"getSessions", DESCRIBE_SESSION:"getSessionCapabilities", CLOSE:"close", QUIT:"quit", GET_CURRENT_URL:"getCurrentUrl", GET:"get", GO_BACK:"goBack", GO_FORWARD:"goForward", REFRESH:"refresh", ADD_COOKIE:"addCookie", GET_COOKIE:"getCookie", GET_ALL_COOKIES:"getCookies", DELETE_COOKIE:"deleteCookie", DELETE_ALL_COOKIES:"deleteAllCookies", GET_ACTIVE_ELEMENT:"getActiveElement", FIND_ELEMENT:"findElement", FIND_ELEMENTS:"findElements", 
FIND_CHILD_ELEMENT:"findChildElement", FIND_CHILD_ELEMENTS:"findChildElements", CLEAR_ELEMENT:"clearElement", CLICK_ELEMENT:"clickElement", SEND_KEYS_TO_ELEMENT:"sendKeysToElement", SUBMIT_ELEMENT:"submitElement", GET_CURRENT_WINDOW_HANDLE:"getCurrentWindowHandle", GET_WINDOW_HANDLES:"getWindowHandles", GET_WINDOW_POSITION:"getWindowPosition", SET_WINDOW_POSITION:"setWindowPosition", GET_WINDOW_SIZE:"getWindowSize", SET_WINDOW_SIZE:"setWindowSize", MAXIMIZE_WINDOW:"maximizeWindow", SWITCH_TO_WINDOW:"switchToWindow", 
SWITCH_TO_FRAME:"switchToFrame", GET_PAGE_SOURCE:"getPageSource", GET_TITLE:"getTitle", EXECUTE_SCRIPT:"executeScript", EXECUTE_ASYNC_SCRIPT:"executeAsyncScript", GET_ELEMENT_TEXT:"getElementText", GET_ELEMENT_TAG_NAME:"getElementTagName", IS_ELEMENT_SELECTED:"isElementSelected", IS_ELEMENT_ENABLED:"isElementEnabled", IS_ELEMENT_DISPLAYED:"isElementDisplayed", GET_ELEMENT_LOCATION:"getElementLocation", GET_ELEMENT_LOCATION_IN_VIEW:"getElementLocationOnceScrolledIntoView", GET_ELEMENT_SIZE:"getElementSize", 
GET_ELEMENT_ATTRIBUTE:"getElementAttribute", GET_ELEMENT_VALUE_OF_CSS_PROPERTY:"getElementValueOfCssProperty", ELEMENT_EQUALS:"elementEquals", SCREENSHOT:"screenshot", IMPLICITLY_WAIT:"implicitlyWait", SET_SCRIPT_TIMEOUT:"setScriptTimeout", SET_TIMEOUT:"setTimeout", ACCEPT_ALERT:"acceptAlert", DISMISS_ALERT:"dismissAlert", GET_ALERT_TEXT:"getAlertText", SET_ALERT_TEXT:"setAlertValue", EXECUTE_SQL:"executeSQL", GET_LOCATION:"getLocation", SET_LOCATION:"setLocation", GET_APP_CACHE:"getAppCache", GET_APP_CACHE_STATUS:"getStatus", 
CLEAR_APP_CACHE:"clearAppCache", IS_BROWSER_ONLINE:"isBrowserOnline", SET_BROWSER_ONLINE:"setBrowserOnline", GET_LOCAL_STORAGE_ITEM:"getLocalStorageItem", GET_LOCAL_STORAGE_KEYS:"getLocalStorageKeys", SET_LOCAL_STORAGE_ITEM:"setLocalStorageItem", REMOVE_LOCAL_STORAGE_ITEM:"removeLocalStorageItem", CLEAR_LOCAL_STORAGE:"clearLocalStorage", GET_LOCAL_STORAGE_SIZE:"getLocalStorageSize", GET_SESSION_STORAGE_ITEM:"getSessionStorageItem", GET_SESSION_STORAGE_KEYS:"getSessionStorageKey", SET_SESSION_STORAGE_ITEM:"setSessionStorageItem", 
REMOVE_SESSION_STORAGE_ITEM:"removeSessionStorageItem", CLEAR_SESSION_STORAGE:"clearSessionStorage", GET_SESSION_STORAGE_SIZE:"getSessionStorageSize", SET_SCREEN_ORIENTATION:"setScreenOrientation", GET_SCREEN_ORIENTATION:"getScreenOrientation", CLICK:"mouseClick", DOUBLE_CLICK:"mouseDoubleClick", MOUSE_DOWN:"mouseButtonDown", MOUSE_UP:"mouseButtonUp", MOVE_TO:"mouseMoveTo", SEND_KEYS_TO_ACTIVE_ELEMENT:"sendKeysToActiveElement", TOUCH_SINGLE_TAP:"touchSingleTap", TOUCH_DOWN:"touchDown", TOUCH_UP:"touchUp", 
TOUCH_MOVE:"touchMove", TOUCH_SCROLL:"touchScroll", TOUCH_DOUBLE_TAP:"touchDoubleTap", TOUCH_LONG_PRESS:"touchLongPress", TOUCH_FLICK:"touchFlick", GET_AVAILABLE_LOG_TYPES:"getAvailableLogTypes", GET_LOG:"getLog", GET_SESSION_LOGS:"getSessionLogs", UPLOAD_FILE:"uploadFile"};
webdriver.CommandExecutor = function() {
};
webdriver.Key = {NULL:"\ue000", CANCEL:"\ue001", HELP:"\ue002", BACK_SPACE:"\ue003", TAB:"\ue004", CLEAR:"\ue005", RETURN:"\ue006", ENTER:"\ue007", SHIFT:"\ue008", CONTROL:"\ue009", ALT:"\ue00a", PAUSE:"\ue00b", ESCAPE:"\ue00c", SPACE:"\ue00d", PAGE_UP:"\ue00e", PAGE_DOWN:"\ue00f", END:"\ue010", HOME:"\ue011", ARROW_LEFT:"\ue012", LEFT:"\ue012", ARROW_UP:"\ue013", UP:"\ue013", ARROW_RIGHT:"\ue014", RIGHT:"\ue014", ARROW_DOWN:"\ue015", DOWN:"\ue015", INSERT:"\ue016", DELETE:"\ue017", SEMICOLON:"\ue018", 
EQUALS:"\ue019", NUMPAD0:"\ue01a", NUMPAD1:"\ue01b", NUMPAD2:"\ue01c", NUMPAD3:"\ue01d", NUMPAD4:"\ue01e", NUMPAD5:"\ue01f", NUMPAD6:"\ue020", NUMPAD7:"\ue021", NUMPAD8:"\ue022", NUMPAD9:"\ue023", MULTIPLY:"\ue024", ADD:"\ue025", SEPARATOR:"\ue026", SUBTRACT:"\ue027", DECIMAL:"\ue028", DIVIDE:"\ue029", F1:"\ue031", F2:"\ue032", F3:"\ue033", F4:"\ue034", F5:"\ue035", F6:"\ue036", F7:"\ue037", F8:"\ue038", F9:"\ue039", F10:"\ue03a", F11:"\ue03b", F12:"\ue03c", COMMAND:"\ue03d", META:"\ue03d"};
webdriver.ActionSequence = function(a) {
  this.driver_ = a;
  this.actions_ = [];
};
webdriver.ActionSequence.prototype.schedule_ = function(a, b) {
  this.actions_.push({description:a, command:b});
};
webdriver.ActionSequence.prototype.perform = function() {
  var a = goog.array.clone(this.actions_), b = this.driver_;
  return b.controlFlow().execute(function() {
    goog.array.forEach(a, function(a) {
      b.schedule(a.command, a.description);
    });
  }, "ActionSequence.perform");
};
webdriver.ActionSequence.prototype.mouseMove = function(a, b) {
  function c(a) {
    d.setParameter("xoffset", a.x || 0);
    d.setParameter("yoffset", a.y || 0);
  }
  var d = new webdriver.Command(webdriver.CommandName.MOVE_TO);
  goog.isNumber(a.x) ? c(a) : (d.setParameter("element", a.getRawId()), b && c(b));
  this.schedule_("mouseMove", d);
  return this;
};
webdriver.ActionSequence.prototype.scheduleMouseAction_ = function(a, b, c, d) {
  goog.isNumber(c) || (c && this.mouseMove(c), c = goog.isDef(d) ? d : webdriver.Button.LEFT);
  b = (new webdriver.Command(b)).setParameter("button", c);
  this.schedule_(a, b);
  return this;
};
webdriver.ActionSequence.prototype.mouseDown = function(a, b) {
  return this.scheduleMouseAction_("mouseDown", webdriver.CommandName.MOUSE_DOWN, a, b);
};
webdriver.ActionSequence.prototype.mouseUp = function(a, b) {
  return this.scheduleMouseAction_("mouseUp", webdriver.CommandName.MOUSE_UP, a, b);
};
webdriver.ActionSequence.prototype.dragAndDrop = function(a, b) {
  return this.mouseDown(a).mouseMove(b).mouseUp();
};
webdriver.ActionSequence.prototype.click = function(a, b) {
  return this.scheduleMouseAction_("click", webdriver.CommandName.CLICK, a, b);
};
webdriver.ActionSequence.prototype.doubleClick = function(a, b) {
  return this.scheduleMouseAction_("doubleClick", webdriver.CommandName.DOUBLE_CLICK, a, b);
};
webdriver.ActionSequence.prototype.scheduleKeyboardAction_ = function(a, b) {
  var c = (new webdriver.Command(webdriver.CommandName.SEND_KEYS_TO_ACTIVE_ELEMENT)).setParameter("value", b);
  this.schedule_(a, c);
  return this;
};
webdriver.ActionSequence.checkModifierKey_ = function(a) {
  if (a !== webdriver.Key.ALT && a !== webdriver.Key.CONTROL && a !== webdriver.Key.SHIFT && a !== webdriver.Key.COMMAND) {
    throw Error("Not a modifier key");
  }
};
webdriver.ActionSequence.prototype.keyDown = function(a) {
  webdriver.ActionSequence.checkModifierKey_(a);
  return this.scheduleKeyboardAction_("keyDown", [a]);
};
webdriver.ActionSequence.prototype.keyUp = function(a) {
  webdriver.ActionSequence.checkModifierKey_(a);
  return this.scheduleKeyboardAction_("keyUp", [a]);
};
webdriver.ActionSequence.prototype.sendKeys = function(a) {
  var b = goog.array.flatten(goog.array.slice(arguments, 0));
  return this.scheduleKeyboardAction_("sendKeys", b);
};
goog.object = {};
goog.object.forEach = function(a, b, c) {
  for (var d in a) {
    b.call(c, a[d], d, a);
  }
};
goog.object.filter = function(a, b, c) {
  var d = {}, e;
  for (e in a) {
    b.call(c, a[e], e, a) && (d[e] = a[e]);
  }
  return d;
};
goog.object.map = function(a, b, c) {
  var d = {}, e;
  for (e in a) {
    d[e] = b.call(c, a[e], e, a);
  }
  return d;
};
goog.object.some = function(a, b, c) {
  for (var d in a) {
    if (b.call(c, a[d], d, a)) {
      return!0;
    }
  }
  return!1;
};
goog.object.every = function(a, b, c) {
  for (var d in a) {
    if (!b.call(c, a[d], d, a)) {
      return!1;
    }
  }
  return!0;
};
goog.object.getCount = function(a) {
  var b = 0, c;
  for (c in a) {
    b++;
  }
  return b;
};
goog.object.getAnyKey = function(a) {
  for (var b in a) {
    return b;
  }
};
goog.object.getAnyValue = function(a) {
  for (var b in a) {
    return a[b];
  }
};
goog.object.contains = function(a, b) {
  return goog.object.containsValue(a, b);
};
goog.object.getValues = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
};
goog.object.getKeys = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
};
goog.object.getValueByKeys = function(a, b) {
  for (var c = goog.isArrayLike(b), d = c ? b : arguments, c = c ? 0 : 1;c < d.length && (a = a[d[c]], goog.isDef(a));c++) {
  }
  return a;
};
goog.object.containsKey = function(a, b) {
  return b in a;
};
goog.object.containsValue = function(a, b) {
  for (var c in a) {
    if (a[c] == b) {
      return!0;
    }
  }
  return!1;
};
goog.object.findKey = function(a, b, c) {
  for (var d in a) {
    if (b.call(c, a[d], d, a)) {
      return d;
    }
  }
};
goog.object.findValue = function(a, b, c) {
  return(b = goog.object.findKey(a, b, c)) && a[b];
};
goog.object.isEmpty = function(a) {
  for (var b in a) {
    return!1;
  }
  return!0;
};
goog.object.clear = function(a) {
  for (var b in a) {
    delete a[b];
  }
};
goog.object.remove = function(a, b) {
  var c;
  (c = b in a) && delete a[b];
  return c;
};
goog.object.add = function(a, b, c) {
  if (b in a) {
    throw Error('The object already contains the key "' + b + '"');
  }
  goog.object.set(a, b, c);
};
goog.object.get = function(a, b, c) {
  return b in a ? a[b] : c;
};
goog.object.set = function(a, b, c) {
  a[b] = c;
};
goog.object.setIfUndefined = function(a, b, c) {
  return b in a ? a[b] : a[b] = c;
};
goog.object.equals = function(a, b) {
  for (var c in a) {
    if (!(c in b) || a[c] !== b[c]) {
      return!1;
    }
  }
  for (c in b) {
    if (!(c in a)) {
      return!1;
    }
  }
  return!0;
};
goog.object.clone = function(a) {
  var b = {}, c;
  for (c in a) {
    b[c] = a[c];
  }
  return b;
};
goog.object.unsafeClone = function(a) {
  var b = goog.typeOf(a);
  if ("object" == b || "array" == b) {
    if (a.clone) {
      return a.clone();
    }
    var b = "array" == b ? [] : {}, c;
    for (c in a) {
      b[c] = goog.object.unsafeClone(a[c]);
    }
    return b;
  }
  return a;
};
goog.object.transpose = function(a) {
  var b = {}, c;
  for (c in a) {
    b[a[c]] = c;
  }
  return b;
};
goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.object.extend = function(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < goog.object.PROTOTYPE_FIELDS_.length;f++) {
      c = goog.object.PROTOTYPE_FIELDS_[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
};
goog.object.create = function(a) {
  var b = arguments.length;
  if (1 == b && goog.isArray(arguments[0])) {
    return goog.object.create.apply(null, arguments[0]);
  }
  if (b % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var c = {}, d = 0;d < b;d += 2) {
    c[arguments[d]] = arguments[d + 1];
  }
  return c;
};
goog.object.createSet = function(a) {
  var b = arguments.length;
  if (1 == b && goog.isArray(arguments[0])) {
    return goog.object.createSet.apply(null, arguments[0]);
  }
  for (var c = {}, d = 0;d < b;d++) {
    c[arguments[d]] = !0;
  }
  return c;
};
goog.object.createImmutableView = function(a) {
  var b = a;
  Object.isFrozen && !Object.isFrozen(a) && (b = Object.create(a), Object.freeze(b));
  return b;
};
goog.object.isImmutableView = function(a) {
  return!!Object.isFrozen && Object.isFrozen(a);
};
goog.structs = {};
goog.structs.getCount = function(a) {
  return "function" == typeof a.getCount ? a.getCount() : goog.isArrayLike(a) || goog.isString(a) ? a.length : goog.object.getCount(a);
};
goog.structs.getValues = function(a) {
  if ("function" == typeof a.getValues) {
    return a.getValues();
  }
  if (goog.isString(a)) {
    return a.split("");
  }
  if (goog.isArrayLike(a)) {
    for (var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d]);
    }
    return b;
  }
  return goog.object.getValues(a);
};
goog.structs.getKeys = function(a) {
  if ("function" == typeof a.getKeys) {
    return a.getKeys();
  }
  if ("function" != typeof a.getValues) {
    if (goog.isArrayLike(a) || goog.isString(a)) {
      var b = [];
      a = a.length;
      for (var c = 0;c < a;c++) {
        b.push(c);
      }
      return b;
    }
    return goog.object.getKeys(a);
  }
};
goog.structs.contains = function(a, b) {
  return "function" == typeof a.contains ? a.contains(b) : "function" == typeof a.containsValue ? a.containsValue(b) : goog.isArrayLike(a) || goog.isString(a) ? goog.array.contains(a, b) : goog.object.containsValue(a, b);
};
goog.structs.isEmpty = function(a) {
  return "function" == typeof a.isEmpty ? a.isEmpty() : goog.isArrayLike(a) || goog.isString(a) ? goog.array.isEmpty(a) : goog.object.isEmpty(a);
};
goog.structs.clear = function(a) {
  "function" == typeof a.clear ? a.clear() : goog.isArrayLike(a) ? goog.array.clear(a) : goog.object.clear(a);
};
goog.structs.forEach = function(a, b, c) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, c);
  } else {
    if (goog.isArrayLike(a) || goog.isString(a)) {
      goog.array.forEach(a, b, c);
    } else {
      for (var d = goog.structs.getKeys(a), e = goog.structs.getValues(a), f = e.length, g = 0;g < f;g++) {
        b.call(c, e[g], d && d[g], a);
      }
    }
  }
};
goog.structs.filter = function(a, b, c) {
  if ("function" == typeof a.filter) {
    return a.filter(b, c);
  }
  if (goog.isArrayLike(a) || goog.isString(a)) {
    return goog.array.filter(a, b, c);
  }
  var d, e = goog.structs.getKeys(a), f = goog.structs.getValues(a), g = f.length;
  if (e) {
    d = {};
    for (var h = 0;h < g;h++) {
      b.call(c, f[h], e[h], a) && (d[e[h]] = f[h]);
    }
  } else {
    for (d = [], h = 0;h < g;h++) {
      b.call(c, f[h], void 0, a) && d.push(f[h]);
    }
  }
  return d;
};
goog.structs.map = function(a, b, c) {
  if ("function" == typeof a.map) {
    return a.map(b, c);
  }
  if (goog.isArrayLike(a) || goog.isString(a)) {
    return goog.array.map(a, b, c);
  }
  var d, e = goog.structs.getKeys(a), f = goog.structs.getValues(a), g = f.length;
  if (e) {
    d = {};
    for (var h = 0;h < g;h++) {
      d[e[h]] = b.call(c, f[h], e[h], a);
    }
  } else {
    for (d = [], h = 0;h < g;h++) {
      d[h] = b.call(c, f[h], void 0, a);
    }
  }
  return d;
};
goog.structs.some = function(a, b, c) {
  if ("function" == typeof a.some) {
    return a.some(b, c);
  }
  if (goog.isArrayLike(a) || goog.isString(a)) {
    return goog.array.some(a, b, c);
  }
  for (var d = goog.structs.getKeys(a), e = goog.structs.getValues(a), f = e.length, g = 0;g < f;g++) {
    if (b.call(c, e[g], d && d[g], a)) {
      return!0;
    }
  }
  return!1;
};
goog.structs.every = function(a, b, c) {
  if ("function" == typeof a.every) {
    return a.every(b, c);
  }
  if (goog.isArrayLike(a) || goog.isString(a)) {
    return goog.array.every(a, b, c);
  }
  for (var d = goog.structs.getKeys(a), e = goog.structs.getValues(a), f = e.length, g = 0;g < f;g++) {
    if (!b.call(c, e[g], d && d[g], a)) {
      return!1;
    }
  }
  return!0;
};
goog.functions = {};
goog.functions.constant = function(a) {
  return function() {
    return a;
  };
};
goog.functions.FALSE = goog.functions.constant(!1);
goog.functions.TRUE = goog.functions.constant(!0);
goog.functions.NULL = goog.functions.constant(null);
goog.functions.identity = function(a, b) {
  return a;
};
goog.functions.error = function(a) {
  return function() {
    throw Error(a);
  };
};
goog.functions.fail = function(a) {
  return function() {
    throw a;
  };
};
goog.functions.lock = function(a, b) {
  b = b || 0;
  return function() {
    return a.apply(this, Array.prototype.slice.call(arguments, 0, b));
  };
};
goog.functions.nth = function(a) {
  return function() {
    return arguments[a];
  };
};
goog.functions.withReturnValue = function(a, b) {
  return goog.functions.sequence(a, goog.functions.constant(b));
};
goog.functions.equalTo = function(a, b) {
  return function(c) {
    return b ? a == c : a === c;
  };
};
goog.functions.compose = function(a, b) {
  var c = arguments, d = c.length;
  return function() {
    var a;
    d && (a = c[d - 1].apply(this, arguments));
    for (var b = d - 2;0 <= b;b--) {
      a = c[b].call(this, a);
    }
    return a;
  };
};
goog.functions.sequence = function(a) {
  var b = arguments, c = b.length;
  return function() {
    for (var a, e = 0;e < c;e++) {
      a = b[e].apply(this, arguments);
    }
    return a;
  };
};
goog.functions.and = function(a) {
  var b = arguments, c = b.length;
  return function() {
    for (var a = 0;a < c;a++) {
      if (!b[a].apply(this, arguments)) {
        return!1;
      }
    }
    return!0;
  };
};
goog.functions.or = function(a) {
  var b = arguments, c = b.length;
  return function() {
    for (var a = 0;a < c;a++) {
      if (b[a].apply(this, arguments)) {
        return!0;
      }
    }
    return!1;
  };
};
goog.functions.not = function(a) {
  return function() {
    return!a.apply(this, arguments);
  };
};
goog.functions.create = function(a, b) {
  var c = function() {
  };
  c.prototype = a.prototype;
  c = new c;
  a.apply(c, Array.prototype.slice.call(arguments, 1));
  return c;
};
goog.functions.CACHE_RETURN_VALUE = !0;
goog.functions.cacheReturnValue = function(a) {
  var b = !1, c;
  return function() {
    if (!goog.functions.CACHE_RETURN_VALUE) {
      return a();
    }
    b || (c = a(), b = !0);
    return c;
  };
};
goog.math = {};
goog.math.randomInt = function(a) {
  return Math.floor(Math.random() * a);
};
goog.math.uniformRandom = function(a, b) {
  return a + Math.random() * (b - a);
};
goog.math.clamp = function(a, b, c) {
  return Math.min(Math.max(a, b), c);
};
goog.math.modulo = function(a, b) {
  var c = a % b;
  return 0 > c * b ? c + b : c;
};
goog.math.lerp = function(a, b, c) {
  return a + c * (b - a);
};
goog.math.nearlyEquals = function(a, b, c) {
  return Math.abs(a - b) <= (c || 1E-6);
};
goog.math.standardAngle = function(a) {
  return goog.math.modulo(a, 360);
};
goog.math.standardAngleInRadians = function(a) {
  return goog.math.modulo(a, 2 * Math.PI);
};
goog.math.toRadians = function(a) {
  return a * Math.PI / 180;
};
goog.math.toDegrees = function(a) {
  return 180 * a / Math.PI;
};
goog.math.angleDx = function(a, b) {
  return b * Math.cos(goog.math.toRadians(a));
};
goog.math.angleDy = function(a, b) {
  return b * Math.sin(goog.math.toRadians(a));
};
goog.math.angle = function(a, b, c, d) {
  return goog.math.standardAngle(goog.math.toDegrees(Math.atan2(d - b, c - a)));
};
goog.math.angleDifference = function(a, b) {
  var c = goog.math.standardAngle(b) - goog.math.standardAngle(a);
  180 < c ? c -= 360 : -180 >= c && (c = 360 + c);
  return c;
};
goog.math.sign = function(a) {
  return 0 == a ? 0 : 0 > a ? -1 : 1;
};
goog.math.longestCommonSubsequence = function(a, b, c, d) {
  c = c || function(a, b) {
    return a == b;
  };
  d = d || function(b, c) {
    return a[b];
  };
  for (var e = a.length, f = b.length, g = [], h = 0;h < e + 1;h++) {
    g[h] = [], g[h][0] = 0;
  }
  for (var k = 0;k < f + 1;k++) {
    g[0][k] = 0;
  }
  for (h = 1;h <= e;h++) {
    for (k = 1;k <= f;k++) {
      c(a[h - 1], b[k - 1]) ? g[h][k] = g[h - 1][k - 1] + 1 : g[h][k] = Math.max(g[h - 1][k], g[h][k - 1]);
    }
  }
  for (var l = [], h = e, k = f;0 < h && 0 < k;) {
    c(a[h - 1], b[k - 1]) ? (l.unshift(d(h - 1, k - 1)), h--, k--) : g[h - 1][k] > g[h][k - 1] ? h-- : k--;
  }
  return l;
};
goog.math.sum = function(a) {
  return goog.array.reduce(arguments, function(a, c) {
    return a + c;
  }, 0);
};
goog.math.average = function(a) {
  return goog.math.sum.apply(null, arguments) / arguments.length;
};
goog.math.sampleVariance = function(a) {
  var b = arguments.length;
  if (2 > b) {
    return 0;
  }
  var c = goog.math.average.apply(null, arguments);
  return goog.math.sum.apply(null, goog.array.map(arguments, function(a) {
    return Math.pow(a - c, 2);
  })) / (b - 1);
};
goog.math.standardDeviation = function(a) {
  return Math.sqrt(goog.math.sampleVariance.apply(null, arguments));
};
goog.math.isInt = function(a) {
  return isFinite(a) && 0 == a % 1;
};
goog.math.isFiniteNumber = function(a) {
  return isFinite(a) && !isNaN(a);
};
goog.math.log10Floor = function(a) {
  if (0 < a) {
    var b = Math.round(Math.log(a) * Math.LOG10E);
    return b - (parseFloat("1e" + b) > a);
  }
  return 0 == a ? -Infinity : NaN;
};
goog.math.safeFloor = function(a, b) {
  goog.asserts.assert(!goog.isDef(b) || 0 < b);
  return Math.floor(a + (b || 2E-15));
};
goog.math.safeCeil = function(a, b) {
  goog.asserts.assert(!goog.isDef(b) || 0 < b);
  return Math.ceil(a - (b || 2E-15));
};
goog.iter = {};
goog.iter.StopIteration = "StopIteration" in goog.global ? goog.global.StopIteration : Error("StopIteration");
goog.iter.Iterator = function() {
};
goog.iter.Iterator.prototype.next = function() {
  throw goog.iter.StopIteration;
};
goog.iter.Iterator.prototype.__iterator__ = function(a) {
  return this;
};
goog.iter.toIterator = function(a) {
  if (a instanceof goog.iter.Iterator) {
    return a;
  }
  if ("function" == typeof a.__iterator__) {
    return a.__iterator__(!1);
  }
  if (goog.isArrayLike(a)) {
    var b = 0, c = new goog.iter.Iterator;
    c.next = function() {
      for (;;) {
        if (b >= a.length) {
          throw goog.iter.StopIteration;
        }
        if (b in a) {
          return a[b++];
        }
        b++;
      }
    };
    return c;
  }
  throw Error("Not implemented");
};
goog.iter.forEach = function(a, b, c) {
  if (goog.isArrayLike(a)) {
    try {
      goog.array.forEach(a, b, c);
    } catch (d) {
      if (d !== goog.iter.StopIteration) {
        throw d;
      }
    }
  } else {
    a = goog.iter.toIterator(a);
    try {
      for (;;) {
        b.call(c, a.next(), void 0, a);
      }
    } catch (e) {
      if (e !== goog.iter.StopIteration) {
        throw e;
      }
    }
  }
};
goog.iter.filter = function(a, b, c) {
  var d = goog.iter.toIterator(a);
  a = new goog.iter.Iterator;
  a.next = function() {
    for (;;) {
      var a = d.next();
      if (b.call(c, a, void 0, d)) {
        return a;
      }
    }
  };
  return a;
};
goog.iter.filterFalse = function(a, b, c) {
  return goog.iter.filter(a, goog.functions.not(b), c);
};
goog.iter.range = function(a, b, c) {
  var d = 0, e = a, f = c || 1;
  1 < arguments.length && (d = a, e = b);
  if (0 == f) {
    throw Error("Range step argument must not be zero");
  }
  var g = new goog.iter.Iterator;
  g.next = function() {
    if (0 < f && d >= e || 0 > f && d <= e) {
      throw goog.iter.StopIteration;
    }
    var a = d;
    d += f;
    return a;
  };
  return g;
};
goog.iter.join = function(a, b) {
  return goog.iter.toArray(a).join(b);
};
goog.iter.map = function(a, b, c) {
  var d = goog.iter.toIterator(a);
  a = new goog.iter.Iterator;
  a.next = function() {
    var a = d.next();
    return b.call(c, a, void 0, d);
  };
  return a;
};
goog.iter.reduce = function(a, b, c, d) {
  var e = c;
  goog.iter.forEach(a, function(a) {
    e = b.call(d, e, a);
  });
  return e;
};
goog.iter.some = function(a, b, c) {
  a = goog.iter.toIterator(a);
  try {
    for (;;) {
      if (b.call(c, a.next(), void 0, a)) {
        return!0;
      }
    }
  } catch (d) {
    if (d !== goog.iter.StopIteration) {
      throw d;
    }
  }
  return!1;
};
goog.iter.every = function(a, b, c) {
  a = goog.iter.toIterator(a);
  try {
    for (;;) {
      if (!b.call(c, a.next(), void 0, a)) {
        return!1;
      }
    }
  } catch (d) {
    if (d !== goog.iter.StopIteration) {
      throw d;
    }
  }
  return!0;
};
goog.iter.chain = function(a) {
  return goog.iter.chainFromIterable(arguments);
};
goog.iter.chainFromIterable = function(a) {
  var b = goog.iter.toIterator(a);
  a = new goog.iter.Iterator;
  var c = null;
  a.next = function() {
    for (;;) {
      if (null == c) {
        var a = b.next();
        c = goog.iter.toIterator(a);
      }
      try {
        return c.next();
      } catch (e) {
        if (e !== goog.iter.StopIteration) {
          throw e;
        }
        c = null;
      }
    }
  };
  return a;
};
goog.iter.dropWhile = function(a, b, c) {
  var d = goog.iter.toIterator(a);
  a = new goog.iter.Iterator;
  var e = !0;
  a.next = function() {
    for (;;) {
      var a = d.next();
      if (!e || !b.call(c, a, void 0, d)) {
        return e = !1, a;
      }
    }
  };
  return a;
};
goog.iter.takeWhile = function(a, b, c) {
  var d = goog.iter.toIterator(a);
  a = new goog.iter.Iterator;
  a.next = function() {
    var a = d.next();
    if (b.call(c, a, void 0, d)) {
      return a;
    }
    throw goog.iter.StopIteration;
  };
  return a;
};
goog.iter.toArray = function(a) {
  if (goog.isArrayLike(a)) {
    return goog.array.toArray(a);
  }
  a = goog.iter.toIterator(a);
  var b = [];
  goog.iter.forEach(a, function(a) {
    b.push(a);
  });
  return b;
};
goog.iter.equals = function(a, b, c) {
  a = goog.iter.zipLongest({}, a, b);
  var d = c || goog.array.defaultCompareEquality;
  return goog.iter.every(a, function(a) {
    return d(a[0], a[1]);
  });
};
goog.iter.nextOrValue = function(a, b) {
  try {
    return goog.iter.toIterator(a).next();
  } catch (c) {
    if (c != goog.iter.StopIteration) {
      throw c;
    }
    return b;
  }
};
goog.iter.product = function(a) {
  if (goog.array.some(arguments, function(a) {
    return!a.length;
  }) || !arguments.length) {
    return new goog.iter.Iterator;
  }
  var b = new goog.iter.Iterator, c = arguments, d = goog.array.repeat(0, c.length);
  b.next = function() {
    if (d) {
      for (var a = goog.array.map(d, function(a, b) {
        return c[b][a];
      }), b = d.length - 1;0 <= b;b--) {
        goog.asserts.assert(d);
        if (d[b] < c[b].length - 1) {
          d[b]++;
          break;
        }
        if (0 == b) {
          d = null;
          break;
        }
        d[b] = 0;
      }
      return a;
    }
    throw goog.iter.StopIteration;
  };
  return b;
};
goog.iter.cycle = function(a) {
  var b = goog.iter.toIterator(a), c = [], d = 0;
  a = new goog.iter.Iterator;
  var e = !1;
  a.next = function() {
    var a = null;
    if (!e) {
      try {
        return a = b.next(), c.push(a), a;
      } catch (g) {
        if (g != goog.iter.StopIteration || goog.array.isEmpty(c)) {
          throw g;
        }
        e = !0;
      }
    }
    a = c[d];
    d = (d + 1) % c.length;
    return a;
  };
  return a;
};
goog.iter.count = function(a, b) {
  var c = a || 0, d = goog.isDef(b) ? b : 1, e = new goog.iter.Iterator;
  e.next = function() {
    var a = c;
    c += d;
    return a;
  };
  return e;
};
goog.iter.repeat = function(a) {
  var b = new goog.iter.Iterator;
  b.next = goog.functions.constant(a);
  return b;
};
goog.iter.accumulate = function(a) {
  var b = goog.iter.toIterator(a), c = 0;
  a = new goog.iter.Iterator;
  a.next = function() {
    return c += b.next();
  };
  return a;
};
goog.iter.zip = function(a) {
  var b = arguments, c = new goog.iter.Iterator;
  if (0 < b.length) {
    var d = goog.array.map(b, goog.iter.toIterator);
    c.next = function() {
      return goog.array.map(d, function(a) {
        return a.next();
      });
    };
  }
  return c;
};
goog.iter.zipLongest = function(a, b) {
  var c = goog.array.slice(arguments, 1), d = new goog.iter.Iterator;
  if (0 < c.length) {
    var e = goog.array.map(c, goog.iter.toIterator);
    d.next = function() {
      var b = !1, c = goog.array.map(e, function(c) {
        var d;
        try {
          d = c.next(), b = !0;
        } catch (e) {
          if (e !== goog.iter.StopIteration) {
            throw e;
          }
          d = a;
        }
        return d;
      });
      if (!b) {
        throw goog.iter.StopIteration;
      }
      return c;
    };
  }
  return d;
};
goog.iter.compress = function(a, b) {
  var c = goog.iter.toIterator(b);
  return goog.iter.filter(a, function() {
    return!!c.next();
  });
};
goog.iter.GroupByIterator_ = function(a, b) {
  this.iterator = goog.iter.toIterator(a);
  this.keyFunc = b || goog.functions.identity;
};
goog.inherits(goog.iter.GroupByIterator_, goog.iter.Iterator);
goog.iter.GroupByIterator_.prototype.next = function() {
  for (;this.currentKey == this.targetKey;) {
    this.currentValue = this.iterator.next(), this.currentKey = this.keyFunc(this.currentValue);
  }
  this.targetKey = this.currentKey;
  return[this.currentKey, this.groupItems_(this.targetKey)];
};
goog.iter.GroupByIterator_.prototype.groupItems_ = function(a) {
  for (var b = [];this.currentKey == a;) {
    b.push(this.currentValue);
    try {
      this.currentValue = this.iterator.next();
    } catch (c) {
      if (c !== goog.iter.StopIteration) {
        throw c;
      }
      break;
    }
    this.currentKey = this.keyFunc(this.currentValue);
  }
  return b;
};
goog.iter.groupBy = function(a, b) {
  return new goog.iter.GroupByIterator_(a, b);
};
goog.iter.starMap = function(a, b, c) {
  var d = goog.iter.toIterator(a);
  a = new goog.iter.Iterator;
  a.next = function() {
    var a = goog.iter.toArray(d.next());
    return b.apply(c, goog.array.concat(a, void 0, d));
  };
  return a;
};
goog.iter.tee = function(a, b) {
  var c = goog.iter.toIterator(a), d = goog.isNumber(b) ? b : 2, e = goog.array.map(goog.array.range(d), function() {
    return[];
  }), f = function() {
    var a = c.next();
    goog.array.forEach(e, function(b) {
      b.push(a);
    });
  };
  return goog.array.map(e, function(a) {
    var b = new goog.iter.Iterator;
    b.next = function() {
      goog.array.isEmpty(a) && f();
      goog.asserts.assert(!goog.array.isEmpty(a));
      return a.shift();
    };
    return b;
  });
};
goog.iter.enumerate = function(a, b) {
  return goog.iter.zip(goog.iter.count(b), a);
};
goog.iter.limit = function(a, b) {
  goog.asserts.assert(goog.math.isInt(b) && 0 <= b);
  var c = goog.iter.toIterator(a), d = new goog.iter.Iterator, e = b;
  d.next = function() {
    if (0 < e--) {
      return c.next();
    }
    throw goog.iter.StopIteration;
  };
  return d;
};
goog.iter.consume = function(a, b) {
  goog.asserts.assert(goog.math.isInt(b) && 0 <= b);
  for (var c = goog.iter.toIterator(a);0 < b--;) {
    goog.iter.nextOrValue(c, null);
  }
  return c;
};
goog.iter.slice = function(a, b, c) {
  goog.asserts.assert(goog.math.isInt(b) && 0 <= b);
  a = goog.iter.consume(a, b);
  goog.isNumber(c) && (goog.asserts.assert(goog.math.isInt(c) && c >= b), a = goog.iter.limit(a, c - b));
  return a;
};
goog.iter.hasDuplicates_ = function(a) {
  var b = [];
  goog.array.removeDuplicates(a, b);
  return a.length != b.length;
};
goog.iter.permutations = function(a, b) {
  var c = goog.iter.toArray(a), d = goog.isNumber(b) ? b : c.length, c = goog.array.repeat(c, d), c = goog.iter.product.apply(void 0, c);
  return goog.iter.filter(c, function(a) {
    return!goog.iter.hasDuplicates_(a);
  });
};
goog.iter.combinations = function(a, b) {
  function c(a) {
    return d[a];
  }
  var d = goog.iter.toArray(a), e = goog.iter.range(d.length), e = goog.iter.permutations(e, b), f = goog.iter.filter(e, function(a) {
    return goog.array.isSorted(a);
  }), e = new goog.iter.Iterator;
  e.next = function() {
    return goog.array.map(f.next(), c);
  };
  return e;
};
goog.iter.combinationsWithReplacement = function(a, b) {
  function c(a) {
    return d[a];
  }
  var d = goog.iter.toArray(a), e = goog.array.range(d.length), e = goog.array.repeat(e, b), e = goog.iter.product.apply(void 0, e), f = goog.iter.filter(e, function(a) {
    return goog.array.isSorted(a);
  }), e = new goog.iter.Iterator;
  e.next = function() {
    return goog.array.map(f.next(), c);
  };
  return e;
};
goog.structs.Map = function(a, b) {
  this.map_ = {};
  this.keys_ = [];
  this.version_ = this.count_ = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1]);
    }
  } else {
    a && this.addAll(a);
  }
};
goog.structs.Map.prototype.getCount = function() {
  return this.count_;
};
goog.structs.Map.prototype.getValues = function() {
  this.cleanupKeysArray_();
  for (var a = [], b = 0;b < this.keys_.length;b++) {
    a.push(this.map_[this.keys_[b]]);
  }
  return a;
};
goog.structs.Map.prototype.getKeys = function() {
  this.cleanupKeysArray_();
  return this.keys_.concat();
};
goog.structs.Map.prototype.containsKey = function(a) {
  return goog.structs.Map.hasKey_(this.map_, a);
};
goog.structs.Map.prototype.containsValue = function(a) {
  for (var b = 0;b < this.keys_.length;b++) {
    var c = this.keys_[b];
    if (goog.structs.Map.hasKey_(this.map_, c) && this.map_[c] == a) {
      return!0;
    }
  }
  return!1;
};
goog.structs.Map.prototype.equals = function(a, b) {
  if (this === a) {
    return!0;
  }
  if (this.count_ != a.getCount()) {
    return!1;
  }
  var c = b || goog.structs.Map.defaultEquals;
  this.cleanupKeysArray_();
  for (var d, e = 0;d = this.keys_[e];e++) {
    if (!c(this.get(d), a.get(d))) {
      return!1;
    }
  }
  return!0;
};
goog.structs.Map.defaultEquals = function(a, b) {
  return a === b;
};
goog.structs.Map.prototype.isEmpty = function() {
  return 0 == this.count_;
};
goog.structs.Map.prototype.clear = function() {
  this.map_ = {};
  this.version_ = this.count_ = this.keys_.length = 0;
};
goog.structs.Map.prototype.remove = function(a) {
  return goog.structs.Map.hasKey_(this.map_, a) ? (delete this.map_[a], this.count_--, this.version_++, this.keys_.length > 2 * this.count_ && this.cleanupKeysArray_(), !0) : !1;
};
goog.structs.Map.prototype.cleanupKeysArray_ = function() {
  if (this.count_ != this.keys_.length) {
    for (var a = 0, b = 0;a < this.keys_.length;) {
      var c = this.keys_[a];
      goog.structs.Map.hasKey_(this.map_, c) && (this.keys_[b++] = c);
      a++;
    }
    this.keys_.length = b;
  }
  if (this.count_ != this.keys_.length) {
    for (var d = {}, b = a = 0;a < this.keys_.length;) {
      c = this.keys_[a], goog.structs.Map.hasKey_(d, c) || (this.keys_[b++] = c, d[c] = 1), a++;
    }
    this.keys_.length = b;
  }
};
goog.structs.Map.prototype.get = function(a, b) {
  return goog.structs.Map.hasKey_(this.map_, a) ? this.map_[a] : b;
};
goog.structs.Map.prototype.set = function(a, b) {
  goog.structs.Map.hasKey_(this.map_, a) || (this.count_++, this.keys_.push(a), this.version_++);
  this.map_[a] = b;
};
goog.structs.Map.prototype.addAll = function(a) {
  var b;
  a instanceof goog.structs.Map ? (b = a.getKeys(), a = a.getValues()) : (b = goog.object.getKeys(a), a = goog.object.getValues(a));
  for (var c = 0;c < b.length;c++) {
    this.set(b[c], a[c]);
  }
};
goog.structs.Map.prototype.forEach = function(a, b) {
  for (var c = this.getKeys(), d = 0;d < c.length;d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this);
  }
};
goog.structs.Map.prototype.clone = function() {
  return new goog.structs.Map(this);
};
goog.structs.Map.prototype.transpose = function() {
  for (var a = new goog.structs.Map, b = 0;b < this.keys_.length;b++) {
    var c = this.keys_[b];
    a.set(this.map_[c], c);
  }
  return a;
};
goog.structs.Map.prototype.toObject = function() {
  this.cleanupKeysArray_();
  for (var a = {}, b = 0;b < this.keys_.length;b++) {
    var c = this.keys_[b];
    a[c] = this.map_[c];
  }
  return a;
};
goog.structs.Map.prototype.getKeyIterator = function() {
  return this.__iterator__(!0);
};
goog.structs.Map.prototype.getValueIterator = function() {
  return this.__iterator__(!1);
};
goog.structs.Map.prototype.__iterator__ = function(a) {
  this.cleanupKeysArray_();
  var b = 0, c = this.keys_, d = this.map_, e = this.version_, f = this, g = new goog.iter.Iterator;
  g.next = function() {
    for (;;) {
      if (e != f.version_) {
        throw Error("The map has changed since the iterator was created");
      }
      if (b >= c.length) {
        throw goog.iter.StopIteration;
      }
      var g = c[b++];
      return a ? g : d[g];
    }
  };
  return g;
};
goog.structs.Map.hasKey_ = function(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
};
goog.labs = {};
goog.labs.userAgent = {};
goog.labs.userAgent.util = {};
goog.labs.userAgent.util.getNativeUserAgentString_ = function() {
  var a = goog.labs.userAgent.util.getNavigator_();
  return a && (a = a.userAgent) ? a : "";
};
goog.labs.userAgent.util.getNavigator_ = function() {
  return goog.global.navigator;
};
goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_();
goog.labs.userAgent.util.setUserAgent = function(a) {
  goog.labs.userAgent.util.userAgent_ = a || goog.labs.userAgent.util.getNativeUserAgentString_();
};
goog.labs.userAgent.util.getUserAgent = function() {
  return goog.labs.userAgent.util.userAgent_;
};
goog.labs.userAgent.util.matchUserAgent = function(a) {
  var b = goog.labs.userAgent.util.getUserAgent();
  return goog.string.contains(b, a);
};
goog.labs.userAgent.util.matchUserAgentIgnoreCase = function(a) {
  var b = goog.labs.userAgent.util.getUserAgent();
  return goog.string.caseInsensitiveContains(b, a);
};
goog.labs.userAgent.util.extractVersionTuples = function(a) {
  for (var b = RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), c = [], d;d = b.exec(a);) {
    c.push([d[1], d[2], d[3] || void 0]);
  }
  return c;
};
goog.labs.userAgent.browser = {};
goog.labs.userAgent.browser.matchOpera_ = function() {
  return goog.labs.userAgent.util.matchUserAgent("Opera") || goog.labs.userAgent.util.matchUserAgent("OPR");
};
goog.labs.userAgent.browser.matchIE_ = function() {
  return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
};
goog.labs.userAgent.browser.matchFirefox_ = function() {
  return goog.labs.userAgent.util.matchUserAgent("Firefox");
};
goog.labs.userAgent.browser.matchSafari_ = function() {
  return goog.labs.userAgent.util.matchUserAgent("Safari") && !goog.labs.userAgent.util.matchUserAgent("Chrome") && !goog.labs.userAgent.util.matchUserAgent("CriOS") && !goog.labs.userAgent.util.matchUserAgent("Android");
};
goog.labs.userAgent.browser.matchCoast_ = function() {
  return goog.labs.userAgent.util.matchUserAgent("Coast");
};
goog.labs.userAgent.browser.matchIosWebview_ = function() {
  return(goog.labs.userAgent.util.matchUserAgent("iPad") || goog.labs.userAgent.util.matchUserAgent("iPhone")) && !goog.labs.userAgent.browser.matchSafari_() && !goog.labs.userAgent.browser.matchChrome_() && !goog.labs.userAgent.browser.matchCoast_() && goog.labs.userAgent.util.matchUserAgent("AppleWebKit");
};
goog.labs.userAgent.browser.matchChrome_ = function() {
  return goog.labs.userAgent.util.matchUserAgent("Chrome") || goog.labs.userAgent.util.matchUserAgent("CriOS");
};
goog.labs.userAgent.browser.matchAndroidBrowser_ = function() {
  return!goog.labs.userAgent.browser.isChrome() && goog.labs.userAgent.util.matchUserAgent("Android");
};
goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_;
goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_;
goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_;
goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_;
goog.labs.userAgent.browser.isCoast = goog.labs.userAgent.browser.matchCoast_;
goog.labs.userAgent.browser.isIosWebview = goog.labs.userAgent.browser.matchIosWebview_;
goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_;
goog.labs.userAgent.browser.isAndroidBrowser = goog.labs.userAgent.browser.matchAndroidBrowser_;
goog.labs.userAgent.browser.isSilk = function() {
  return goog.labs.userAgent.util.matchUserAgent("Silk");
};
goog.labs.userAgent.browser.getVersion = function() {
  function a(a) {
    a = goog.array.find(a, d);
    return c[a] || "";
  }
  var b = goog.labs.userAgent.util.getUserAgent();
  if (goog.labs.userAgent.browser.isIE()) {
    return goog.labs.userAgent.browser.getIEVersion_(b);
  }
  var b = goog.labs.userAgent.util.extractVersionTuples(b), c = {};
  goog.array.forEach(b, function(a) {
    c[a[0]] = a[1];
  });
  var d = goog.partial(goog.object.containsKey, c);
  return goog.labs.userAgent.browser.isOpera() ? a(["Version", "Opera", "OPR"]) : goog.labs.userAgent.browser.isChrome() ? a(["Chrome", "CriOS"]) : (b = b[2]) && b[1] || "";
};
goog.labs.userAgent.browser.isVersionOrHigher = function(a) {
  return 0 <= goog.string.compareVersions(goog.labs.userAgent.browser.getVersion(), a);
};
goog.labs.userAgent.browser.getIEVersion_ = function(a) {
  var b = /rv: *([\d\.]*)/.exec(a);
  if (b && b[1]) {
    return b[1];
  }
  var b = "", c = /MSIE +([\d\.]+)/.exec(a);
  if (c && c[1]) {
    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1]) {
      if (a && a[1]) {
        switch(a[1]) {
          case "4.0":
            b = "8.0";
            break;
          case "5.0":
            b = "9.0";
            break;
          case "6.0":
            b = "10.0";
            break;
          case "7.0":
            b = "11.0";
        }
      } else {
        b = "7.0";
      }
    } else {
      b = c[1];
    }
  }
  return b;
};
goog.labs.userAgent.engine = {};
goog.labs.userAgent.engine.isPresto = function() {
  return goog.labs.userAgent.util.matchUserAgent("Presto");
};
goog.labs.userAgent.engine.isTrident = function() {
  return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
};
goog.labs.userAgent.engine.isWebKit = function() {
  return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit");
};
goog.labs.userAgent.engine.isGecko = function() {
  return goog.labs.userAgent.util.matchUserAgent("Gecko") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident();
};
goog.labs.userAgent.engine.getVersion = function() {
  var a = goog.labs.userAgent.util.getUserAgent();
  if (a) {
    var a = goog.labs.userAgent.util.extractVersionTuples(a), b = a[1];
    if (b) {
      return "Gecko" == b[0] ? goog.labs.userAgent.engine.getVersionForKey_(a, "Firefox") : b[1];
    }
    var a = a[0], c;
    if (a && (c = a[2]) && (c = /Trident\/([^\s;]+)/.exec(c))) {
      return c[1];
    }
  }
  return "";
};
goog.labs.userAgent.engine.isVersionOrHigher = function(a) {
  return 0 <= goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), a);
};
goog.labs.userAgent.engine.getVersionForKey_ = function(a, b) {
  var c = goog.array.find(a, function(a) {
    return b == a[0];
  });
  return c && c[1] || "";
};
goog.labs.userAgent.platform = {};
goog.labs.userAgent.platform.isAndroid = function() {
  return goog.labs.userAgent.util.matchUserAgent("Android");
};
goog.labs.userAgent.platform.isIpod = function() {
  return goog.labs.userAgent.util.matchUserAgent("iPod");
};
goog.labs.userAgent.platform.isIphone = function() {
  return goog.labs.userAgent.util.matchUserAgent("iPhone") && !goog.labs.userAgent.util.matchUserAgent("iPod") && !goog.labs.userAgent.util.matchUserAgent("iPad");
};
goog.labs.userAgent.platform.isIpad = function() {
  return goog.labs.userAgent.util.matchUserAgent("iPad");
};
goog.labs.userAgent.platform.isIos = function() {
  return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpad() || goog.labs.userAgent.platform.isIpod();
};
goog.labs.userAgent.platform.isMacintosh = function() {
  return goog.labs.userAgent.util.matchUserAgent("Macintosh");
};
goog.labs.userAgent.platform.isLinux = function() {
  return goog.labs.userAgent.util.matchUserAgent("Linux");
};
goog.labs.userAgent.platform.isWindows = function() {
  return goog.labs.userAgent.util.matchUserAgent("Windows");
};
goog.labs.userAgent.platform.isChromeOS = function() {
  return goog.labs.userAgent.util.matchUserAgent("CrOS");
};
goog.labs.userAgent.platform.getVersion = function() {
  var a = goog.labs.userAgent.util.getUserAgent(), b = "";
  goog.labs.userAgent.platform.isWindows() ? (b = /Windows (?:NT|Phone) ([0-9.]+)/, b = (a = b.exec(a)) ? a[1] : "0.0") : goog.labs.userAgent.platform.isIos() ? (b = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, b = (a = b.exec(a)) && a[1].replace(/_/g, ".")) : goog.labs.userAgent.platform.isMacintosh() ? (b = /Mac OS X ([0-9_.]+)/, b = (a = b.exec(a)) ? a[1].replace(/_/g, ".") : "10") : goog.labs.userAgent.platform.isAndroid() ? (b = /Android\s+([^\);]+)(\)|;)/, b = (a = b.exec(a)) && a[1]) : goog.labs.userAgent.platform.isChromeOS() && 
  (b = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, b = (a = b.exec(a)) && a[1]);
  return b || "";
};
goog.labs.userAgent.platform.isVersionOrHigher = function(a) {
  return 0 <= goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), a);
};
goog.userAgent = {};
goog.userAgent.ASSUME_IE = !1;
goog.userAgent.ASSUME_GECKO = !1;
goog.userAgent.ASSUME_WEBKIT = !1;
goog.userAgent.ASSUME_MOBILE_WEBKIT = !1;
goog.userAgent.ASSUME_OPERA = !1;
goog.userAgent.ASSUME_ANY_VERSION = !1;
goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
goog.userAgent.getUserAgentString = function() {
  return goog.labs.userAgent.util.getUserAgent();
};
goog.userAgent.getNavigator = function() {
  return goog.global.navigator || null;
};
goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera();
goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE();
goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko();
goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit();
goog.userAgent.isMobile_ = function() {
  return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile");
};
goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_();
goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
goog.userAgent.determinePlatform_ = function() {
  var a = goog.userAgent.getNavigator();
  return a && a.platform || "";
};
goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
goog.userAgent.ASSUME_MAC = !1;
goog.userAgent.ASSUME_WINDOWS = !1;
goog.userAgent.ASSUME_LINUX = !1;
goog.userAgent.ASSUME_X11 = !1;
goog.userAgent.ASSUME_ANDROID = !1;
goog.userAgent.ASSUME_IPHONE = !1;
goog.userAgent.ASSUME_IPAD = !1;
goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD;
goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.labs.userAgent.platform.isMacintosh();
goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.labs.userAgent.platform.isWindows();
goog.userAgent.isLegacyLinux_ = function() {
  return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS();
};
goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_();
goog.userAgent.isX11_ = function() {
  var a = goog.userAgent.getNavigator();
  return!!a && goog.string.contains(a.appVersion || "", "X11");
};
goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_();
goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.labs.userAgent.platform.isAndroid();
goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.labs.userAgent.platform.isIphone();
goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
goog.userAgent.determineVersion_ = function() {
  var a = "", b;
  if (goog.userAgent.OPERA && goog.global.opera) {
    return a = goog.global.opera.version, goog.isFunction(a) ? a() : a;
  }
  goog.userAgent.GECKO ? b = /rv\:([^\);]+)(\)|;)/ : goog.userAgent.IE ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : goog.userAgent.WEBKIT && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(goog.userAgent.getUserAgentString())) ? a[1] : "");
  return goog.userAgent.IE && (b = goog.userAgent.getDocumentMode_(), b > parseFloat(a)) ? String(b) : a;
};
goog.userAgent.getDocumentMode_ = function() {
  var a = goog.global.document;
  return a ? a.documentMode : void 0;
};
goog.userAgent.VERSION = goog.userAgent.determineVersion_();
goog.userAgent.compare = function(a, b) {
  return goog.string.compareVersions(a, b);
};
goog.userAgent.isVersionOrHigherCache_ = {};
goog.userAgent.isVersionOrHigher = function(a) {
  return goog.userAgent.ASSUME_ANY_VERSION || goog.userAgent.isVersionOrHigherCache_[a] || (goog.userAgent.isVersionOrHigherCache_[a] = 0 <= goog.string.compareVersions(goog.userAgent.VERSION, a));
};
goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher;
goog.userAgent.isDocumentModeOrHigher = function(a) {
  return goog.userAgent.IE && goog.userAgent.DOCUMENT_MODE >= a;
};
goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher;
goog.userAgent.DOCUMENT_MODE = function() {
  var a = goog.global.document;
  return a && goog.userAgent.IE ? goog.userAgent.getDocumentMode_() || ("CSS1Compat" == a.compatMode ? parseInt(goog.userAgent.VERSION, 10) : 5) : void 0;
}();
goog.uri = {};
goog.uri.utils = {};
goog.uri.utils.CharCode_ = {AMPERSAND:38, EQUAL:61, HASH:35, QUESTION:63};
goog.uri.utils.buildFromEncodedParts = function(a, b, c, d, e, f, g) {
  var h = "";
  a && (h += a + ":");
  c && (h += "//", b && (h += b + "@"), h += c, d && (h += ":" + d));
  e && (h += e);
  f && (h += "?" + f);
  g && (h += "#" + g);
  return h;
};
goog.uri.utils.splitRe_ = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;
goog.uri.utils.ComponentIndex = {SCHEME:1, USER_INFO:2, DOMAIN:3, PORT:4, PATH:5, QUERY_DATA:6, FRAGMENT:7};
goog.uri.utils.split = function(a) {
  goog.uri.utils.phishingProtection_();
  return a.match(goog.uri.utils.splitRe_);
};
goog.uri.utils.needsPhishingProtection_ = goog.userAgent.WEBKIT;
goog.uri.utils.phishingProtection_ = function() {
  if (goog.uri.utils.needsPhishingProtection_) {
    goog.uri.utils.needsPhishingProtection_ = !1;
    var a = goog.global.location;
    if (a) {
      var b = a.href;
      if (b && (b = goog.uri.utils.getDomain(b)) && b != a.hostname) {
        throw goog.uri.utils.needsPhishingProtection_ = !0, Error();
      }
    }
  }
};
goog.uri.utils.decodeIfPossible_ = function(a, b) {
  return a ? b ? decodeURI(a) : decodeURIComponent(a) : a;
};
goog.uri.utils.getComponentByIndex_ = function(a, b) {
  return goog.uri.utils.split(b)[a] || null;
};
goog.uri.utils.getScheme = function(a) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.SCHEME, a);
};
goog.uri.utils.getEffectiveScheme = function(a) {
  a = goog.uri.utils.getScheme(a);
  !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1));
  return a ? a.toLowerCase() : "";
};
goog.uri.utils.getUserInfoEncoded = function(a) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.USER_INFO, a);
};
goog.uri.utils.getUserInfo = function(a) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getUserInfoEncoded(a));
};
goog.uri.utils.getDomainEncoded = function(a) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.DOMAIN, a);
};
goog.uri.utils.getDomain = function(a) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getDomainEncoded(a), !0);
};
goog.uri.utils.getPort = function(a) {
  return Number(goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.PORT, a)) || null;
};
goog.uri.utils.getPathEncoded = function(a) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.PATH, a);
};
goog.uri.utils.getPath = function(a) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getPathEncoded(a), !0);
};
goog.uri.utils.getQueryData = function(a) {
  return goog.uri.utils.getComponentByIndex_(goog.uri.utils.ComponentIndex.QUERY_DATA, a);
};
goog.uri.utils.getFragmentEncoded = function(a) {
  var b = a.indexOf("#");
  return 0 > b ? null : a.substr(b + 1);
};
goog.uri.utils.setFragmentEncoded = function(a, b) {
  return goog.uri.utils.removeFragment(a) + (b ? "#" + b : "");
};
goog.uri.utils.getFragment = function(a) {
  return goog.uri.utils.decodeIfPossible_(goog.uri.utils.getFragmentEncoded(a));
};
goog.uri.utils.getHost = function(a) {
  a = goog.uri.utils.split(a);
  return goog.uri.utils.buildFromEncodedParts(a[goog.uri.utils.ComponentIndex.SCHEME], a[goog.uri.utils.ComponentIndex.USER_INFO], a[goog.uri.utils.ComponentIndex.DOMAIN], a[goog.uri.utils.ComponentIndex.PORT]);
};
goog.uri.utils.getPathAndAfter = function(a) {
  a = goog.uri.utils.split(a);
  return goog.uri.utils.buildFromEncodedParts(null, null, null, null, a[goog.uri.utils.ComponentIndex.PATH], a[goog.uri.utils.ComponentIndex.QUERY_DATA], a[goog.uri.utils.ComponentIndex.FRAGMENT]);
};
goog.uri.utils.removeFragment = function(a) {
  var b = a.indexOf("#");
  return 0 > b ? a : a.substr(0, b);
};
goog.uri.utils.haveSameDomain = function(a, b) {
  var c = goog.uri.utils.split(a), d = goog.uri.utils.split(b);
  return c[goog.uri.utils.ComponentIndex.DOMAIN] == d[goog.uri.utils.ComponentIndex.DOMAIN] && c[goog.uri.utils.ComponentIndex.SCHEME] == d[goog.uri.utils.ComponentIndex.SCHEME] && c[goog.uri.utils.ComponentIndex.PORT] == d[goog.uri.utils.ComponentIndex.PORT];
};
goog.uri.utils.assertNoFragmentsOrQueries_ = function(a) {
  if (goog.DEBUG && (0 <= a.indexOf("#") || 0 <= a.indexOf("?"))) {
    throw Error("goog.uri.utils: Fragment or query identifiers are not supported: [" + a + "]");
  }
};
goog.uri.utils.appendQueryData_ = function(a) {
  if (a[1]) {
    var b = a[0], c = b.indexOf("#");
    0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
    c = b.indexOf("?");
    0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = void 0);
  }
  return a.join("");
};
goog.uri.utils.appendKeyValuePairs_ = function(a, b, c) {
  if (goog.isArray(b)) {
    goog.asserts.assertArray(b);
    for (var d = 0;d < b.length;d++) {
      goog.uri.utils.appendKeyValuePairs_(a, String(b[d]), c);
    }
  } else {
    null != b && c.push("&", a, "" === b ? "" : "=", goog.string.urlEncode(b));
  }
};
goog.uri.utils.buildQueryDataBuffer_ = function(a, b, c) {
  goog.asserts.assert(0 == Math.max(b.length - (c || 0), 0) % 2, "goog.uri.utils: Key/value lists must be even in length.");
  for (c = c || 0;c < b.length;c += 2) {
    goog.uri.utils.appendKeyValuePairs_(b[c], b[c + 1], a);
  }
  return a;
};
goog.uri.utils.buildQueryData = function(a, b) {
  var c = goog.uri.utils.buildQueryDataBuffer_([], a, b);
  c[0] = "";
  return c.join("");
};
goog.uri.utils.buildQueryDataBufferFromMap_ = function(a, b) {
  for (var c in b) {
    goog.uri.utils.appendKeyValuePairs_(c, b[c], a);
  }
  return a;
};
goog.uri.utils.buildQueryDataFromMap = function(a) {
  a = goog.uri.utils.buildQueryDataBufferFromMap_([], a);
  a[0] = "";
  return a.join("");
};
goog.uri.utils.appendParams = function(a, b) {
  return goog.uri.utils.appendQueryData_(2 == arguments.length ? goog.uri.utils.buildQueryDataBuffer_([a], arguments[1], 0) : goog.uri.utils.buildQueryDataBuffer_([a], arguments, 1));
};
goog.uri.utils.appendParamsFromMap = function(a, b) {
  return goog.uri.utils.appendQueryData_(goog.uri.utils.buildQueryDataBufferFromMap_([a], b));
};
goog.uri.utils.appendParam = function(a, b, c) {
  a = [a, "&", b];
  goog.isDefAndNotNull(c) && a.push("=", goog.string.urlEncode(c));
  return goog.uri.utils.appendQueryData_(a);
};
goog.uri.utils.findParam_ = function(a, b, c, d) {
  for (var e = c.length;0 <= (b = a.indexOf(c, b)) && b < d;) {
    var f = a.charCodeAt(b - 1);
    if (f == goog.uri.utils.CharCode_.AMPERSAND || f == goog.uri.utils.CharCode_.QUESTION) {
      if (f = a.charCodeAt(b + e), !f || f == goog.uri.utils.CharCode_.EQUAL || f == goog.uri.utils.CharCode_.AMPERSAND || f == goog.uri.utils.CharCode_.HASH) {
        return b;
      }
    }
    b += e + 1;
  }
  return-1;
};
goog.uri.utils.hashOrEndRe_ = /#|$/;
goog.uri.utils.hasParam = function(a, b) {
  return 0 <= goog.uri.utils.findParam_(a, 0, b, a.search(goog.uri.utils.hashOrEndRe_));
};
goog.uri.utils.getParamValue = function(a, b) {
  var c = a.search(goog.uri.utils.hashOrEndRe_), d = goog.uri.utils.findParam_(a, 0, b, c);
  if (0 > d) {
    return null;
  }
  var e = a.indexOf("&", d);
  if (0 > e || e > c) {
    e = c;
  }
  d += b.length + 1;
  return goog.string.urlDecode(a.substr(d, e - d));
};
goog.uri.utils.getParamValues = function(a, b) {
  for (var c = a.search(goog.uri.utils.hashOrEndRe_), d = 0, e, f = [];0 <= (e = goog.uri.utils.findParam_(a, d, b, c));) {
    d = a.indexOf("&", e);
    if (0 > d || d > c) {
      d = c;
    }
    e += b.length + 1;
    f.push(goog.string.urlDecode(a.substr(e, d - e)));
  }
  return f;
};
goog.uri.utils.trailingQueryPunctuationRe_ = /[?&]($|#)/;
goog.uri.utils.removeParam = function(a, b) {
  for (var c = a.search(goog.uri.utils.hashOrEndRe_), d = 0, e, f = [];0 <= (e = goog.uri.utils.findParam_(a, d, b, c));) {
    f.push(a.substring(d, e)), d = Math.min(a.indexOf("&", e) + 1 || c, c);
  }
  f.push(a.substr(d));
  return f.join("").replace(goog.uri.utils.trailingQueryPunctuationRe_, "$1");
};
goog.uri.utils.setParam = function(a, b, c) {
  return goog.uri.utils.appendParam(goog.uri.utils.removeParam(a, b), b, c);
};
goog.uri.utils.appendPath = function(a, b) {
  goog.uri.utils.assertNoFragmentsOrQueries_(a);
  goog.string.endsWith(a, "/") && (a = a.substr(0, a.length - 1));
  goog.string.startsWith(b, "/") && (b = b.substr(1));
  return goog.string.buildString(a, "/", b);
};
goog.uri.utils.setPath = function(a, b) {
  goog.string.startsWith(b, "/") || (b = "/" + b);
  var c = goog.uri.utils.split(a);
  return goog.uri.utils.buildFromEncodedParts(c[goog.uri.utils.ComponentIndex.SCHEME], c[goog.uri.utils.ComponentIndex.USER_INFO], c[goog.uri.utils.ComponentIndex.DOMAIN], c[goog.uri.utils.ComponentIndex.PORT], b, c[goog.uri.utils.ComponentIndex.QUERY_DATA], c[goog.uri.utils.ComponentIndex.FRAGMENT]);
};
goog.uri.utils.StandardQueryParam = {RANDOM:"zx"};
goog.uri.utils.makeUnique = function(a) {
  return goog.uri.utils.setParam(a, goog.uri.utils.StandardQueryParam.RANDOM, goog.string.getRandomString());
};
goog.Uri = function(a, b) {
  var c;
  a instanceof goog.Uri ? (this.ignoreCase_ = goog.isDef(b) ? b : a.getIgnoreCase(), this.setScheme(a.getScheme()), this.setUserInfo(a.getUserInfo()), this.setDomain(a.getDomain()), this.setPort(a.getPort()), this.setPath(a.getPath()), this.setQueryData(a.getQueryData().clone()), this.setFragment(a.getFragment())) : a && (c = goog.uri.utils.split(String(a))) ? (this.ignoreCase_ = !!b, this.setScheme(c[goog.uri.utils.ComponentIndex.SCHEME] || "", !0), this.setUserInfo(c[goog.uri.utils.ComponentIndex.USER_INFO] || 
  "", !0), this.setDomain(c[goog.uri.utils.ComponentIndex.DOMAIN] || "", !0), this.setPort(c[goog.uri.utils.ComponentIndex.PORT]), this.setPath(c[goog.uri.utils.ComponentIndex.PATH] || "", !0), this.setQueryData(c[goog.uri.utils.ComponentIndex.QUERY_DATA] || "", !0), this.setFragment(c[goog.uri.utils.ComponentIndex.FRAGMENT] || "", !0)) : (this.ignoreCase_ = !!b, this.queryData_ = new goog.Uri.QueryData(null, null, this.ignoreCase_));
};
goog.Uri.preserveParameterTypesCompatibilityFlag = !1;
goog.Uri.RANDOM_PARAM = goog.uri.utils.StandardQueryParam.RANDOM;
goog.Uri.prototype.scheme_ = "";
goog.Uri.prototype.userInfo_ = "";
goog.Uri.prototype.domain_ = "";
goog.Uri.prototype.port_ = null;
goog.Uri.prototype.path_ = "";
goog.Uri.prototype.fragment_ = "";
goog.Uri.prototype.isReadOnly_ = !1;
goog.Uri.prototype.ignoreCase_ = !1;
goog.Uri.prototype.toString = function() {
  var a = [], b = this.getScheme();
  b && a.push(goog.Uri.encodeSpecialChars_(b, goog.Uri.reDisallowedInSchemeOrUserInfo_, !0), ":");
  if (b = this.getDomain()) {
    a.push("//");
    var c = this.getUserInfo();
    c && a.push(goog.Uri.encodeSpecialChars_(c, goog.Uri.reDisallowedInSchemeOrUserInfo_, !0), "@");
    a.push(goog.Uri.removeDoubleEncoding_(goog.string.urlEncode(b)));
    b = this.getPort();
    null != b && a.push(":", String(b));
  }
  if (b = this.getPath()) {
    this.hasDomain() && "/" != b.charAt(0) && a.push("/"), a.push(goog.Uri.encodeSpecialChars_(b, "/" == b.charAt(0) ? goog.Uri.reDisallowedInAbsolutePath_ : goog.Uri.reDisallowedInRelativePath_, !0));
  }
  (b = this.getEncodedQuery()) && a.push("?", b);
  (b = this.getFragment()) && a.push("#", goog.Uri.encodeSpecialChars_(b, goog.Uri.reDisallowedInFragment_));
  return a.join("");
};
goog.Uri.prototype.resolve = function(a) {
  var b = this.clone(), c = a.hasScheme();
  c ? b.setScheme(a.getScheme()) : c = a.hasUserInfo();
  c ? b.setUserInfo(a.getUserInfo()) : c = a.hasDomain();
  c ? b.setDomain(a.getDomain()) : c = a.hasPort();
  var d = a.getPath();
  if (c) {
    b.setPort(a.getPort());
  } else {
    if (c = a.hasPath()) {
      if ("/" != d.charAt(0)) {
        if (this.hasDomain() && !this.hasPath()) {
          d = "/" + d;
        } else {
          var e = b.getPath().lastIndexOf("/");
          -1 != e && (d = b.getPath().substr(0, e + 1) + d);
        }
      }
      d = goog.Uri.removeDotSegments(d);
    }
  }
  c ? b.setPath(d) : c = a.hasQuery();
  c ? b.setQueryData(a.getDecodedQuery()) : c = a.hasFragment();
  c && b.setFragment(a.getFragment());
  return b;
};
goog.Uri.prototype.clone = function() {
  return new goog.Uri(this);
};
goog.Uri.prototype.getScheme = function() {
  return this.scheme_;
};
goog.Uri.prototype.setScheme = function(a, b) {
  this.enforceReadOnly();
  if (this.scheme_ = b ? goog.Uri.decodeOrEmpty_(a, !0) : a) {
    this.scheme_ = this.scheme_.replace(/:$/, "");
  }
  return this;
};
goog.Uri.prototype.hasScheme = function() {
  return!!this.scheme_;
};
goog.Uri.prototype.getUserInfo = function() {
  return this.userInfo_;
};
goog.Uri.prototype.setUserInfo = function(a, b) {
  this.enforceReadOnly();
  this.userInfo_ = b ? goog.Uri.decodeOrEmpty_(a) : a;
  return this;
};
goog.Uri.prototype.hasUserInfo = function() {
  return!!this.userInfo_;
};
goog.Uri.prototype.getDomain = function() {
  return this.domain_;
};
goog.Uri.prototype.setDomain = function(a, b) {
  this.enforceReadOnly();
  this.domain_ = b ? goog.Uri.decodeOrEmpty_(a, !0) : a;
  return this;
};
goog.Uri.prototype.hasDomain = function() {
  return!!this.domain_;
};
goog.Uri.prototype.getPort = function() {
  return this.port_;
};
goog.Uri.prototype.setPort = function(a) {
  this.enforceReadOnly();
  if (a) {
    a = Number(a);
    if (isNaN(a) || 0 > a) {
      throw Error("Bad port number " + a);
    }
    this.port_ = a;
  } else {
    this.port_ = null;
  }
  return this;
};
goog.Uri.prototype.hasPort = function() {
  return null != this.port_;
};
goog.Uri.prototype.getPath = function() {
  return this.path_;
};
goog.Uri.prototype.setPath = function(a, b) {
  this.enforceReadOnly();
  this.path_ = b ? goog.Uri.decodeOrEmpty_(a, !0) : a;
  return this;
};
goog.Uri.prototype.hasPath = function() {
  return!!this.path_;
};
goog.Uri.prototype.hasQuery = function() {
  return "" !== this.queryData_.toString();
};
goog.Uri.prototype.setQueryData = function(a, b) {
  this.enforceReadOnly();
  a instanceof goog.Uri.QueryData ? (this.queryData_ = a, this.queryData_.setIgnoreCase(this.ignoreCase_)) : (b || (a = goog.Uri.encodeSpecialChars_(a, goog.Uri.reDisallowedInQuery_)), this.queryData_ = new goog.Uri.QueryData(a, null, this.ignoreCase_));
  return this;
};
goog.Uri.prototype.setQuery = function(a, b) {
  return this.setQueryData(a, b);
};
goog.Uri.prototype.getEncodedQuery = function() {
  return this.queryData_.toString();
};
goog.Uri.prototype.getDecodedQuery = function() {
  return this.queryData_.toDecodedString();
};
goog.Uri.prototype.getQueryData = function() {
  return this.queryData_;
};
goog.Uri.prototype.getQuery = function() {
  return this.getEncodedQuery();
};
goog.Uri.prototype.setParameterValue = function(a, b) {
  this.enforceReadOnly();
  this.queryData_.set(a, b);
  return this;
};
goog.Uri.prototype.setParameterValues = function(a, b) {
  this.enforceReadOnly();
  goog.isArray(b) || (b = [String(b)]);
  this.queryData_.setValues(a, b);
  return this;
};
goog.Uri.prototype.getParameterValues = function(a) {
  return this.queryData_.getValues(a);
};
goog.Uri.prototype.getParameterValue = function(a) {
  return this.queryData_.get(a);
};
goog.Uri.prototype.getFragment = function() {
  return this.fragment_;
};
goog.Uri.prototype.setFragment = function(a, b) {
  this.enforceReadOnly();
  this.fragment_ = b ? goog.Uri.decodeOrEmpty_(a) : a;
  return this;
};
goog.Uri.prototype.hasFragment = function() {
  return!!this.fragment_;
};
goog.Uri.prototype.hasSameDomainAs = function(a) {
  return(!this.hasDomain() && !a.hasDomain() || this.getDomain() == a.getDomain()) && (!this.hasPort() && !a.hasPort() || this.getPort() == a.getPort());
};
goog.Uri.prototype.makeUnique = function() {
  this.enforceReadOnly();
  this.setParameterValue(goog.Uri.RANDOM_PARAM, goog.string.getRandomString());
  return this;
};
goog.Uri.prototype.removeParameter = function(a) {
  this.enforceReadOnly();
  this.queryData_.remove(a);
  return this;
};
goog.Uri.prototype.setReadOnly = function(a) {
  this.isReadOnly_ = a;
  return this;
};
goog.Uri.prototype.isReadOnly = function() {
  return this.isReadOnly_;
};
goog.Uri.prototype.enforceReadOnly = function() {
  if (this.isReadOnly_) {
    throw Error("Tried to modify a read-only Uri");
  }
};
goog.Uri.prototype.setIgnoreCase = function(a) {
  this.ignoreCase_ = a;
  this.queryData_ && this.queryData_.setIgnoreCase(a);
  return this;
};
goog.Uri.prototype.getIgnoreCase = function() {
  return this.ignoreCase_;
};
goog.Uri.parse = function(a, b) {
  return a instanceof goog.Uri ? a.clone() : new goog.Uri(a, b);
};
goog.Uri.create = function(a, b, c, d, e, f, g, h) {
  h = new goog.Uri(null, h);
  a && h.setScheme(a);
  b && h.setUserInfo(b);
  c && h.setDomain(c);
  d && h.setPort(d);
  e && h.setPath(e);
  f && h.setQueryData(f);
  g && h.setFragment(g);
  return h;
};
goog.Uri.resolve = function(a, b) {
  a instanceof goog.Uri || (a = goog.Uri.parse(a));
  b instanceof goog.Uri || (b = goog.Uri.parse(b));
  return a.resolve(b);
};
goog.Uri.removeDotSegments = function(a) {
  if (".." == a || "." == a) {
    return "";
  }
  if (goog.string.contains(a, "./") || goog.string.contains(a, "/.")) {
    var b = goog.string.startsWith(a, "/");
    a = a.split("/");
    for (var c = [], d = 0;d < a.length;) {
      var e = a[d++];
      "." == e ? b && d == a.length && c.push("") : ".." == e ? ((1 < c.length || 1 == c.length && "" != c[0]) && c.pop(), b && d == a.length && c.push("")) : (c.push(e), b = !0);
    }
    return c.join("/");
  }
  return a;
};
goog.Uri.decodeOrEmpty_ = function(a, b) {
  return a ? b ? decodeURI(a) : decodeURIComponent(a) : "";
};
goog.Uri.encodeSpecialChars_ = function(a, b, c) {
  return goog.isString(a) ? (a = encodeURI(a).replace(b, goog.Uri.encodeChar_), c && (a = goog.Uri.removeDoubleEncoding_(a)), a) : null;
};
goog.Uri.encodeChar_ = function(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
};
goog.Uri.removeDoubleEncoding_ = function(a) {
  return a.replace(/%25([0-9a-fA-F]{2})/g, "%$1");
};
goog.Uri.reDisallowedInSchemeOrUserInfo_ = /[#\/\?@]/g;
goog.Uri.reDisallowedInRelativePath_ = /[\#\?:]/g;
goog.Uri.reDisallowedInAbsolutePath_ = /[\#\?]/g;
goog.Uri.reDisallowedInQuery_ = /[\#\?@]/g;
goog.Uri.reDisallowedInFragment_ = /#/g;
goog.Uri.haveSameDomain = function(a, b) {
  var c = goog.uri.utils.split(a), d = goog.uri.utils.split(b);
  return c[goog.uri.utils.ComponentIndex.DOMAIN] == d[goog.uri.utils.ComponentIndex.DOMAIN] && c[goog.uri.utils.ComponentIndex.PORT] == d[goog.uri.utils.ComponentIndex.PORT];
};
goog.Uri.QueryData = function(a, b, c) {
  this.encodedQuery_ = a || null;
  this.ignoreCase_ = !!c;
};
goog.Uri.QueryData.prototype.ensureKeyMapInitialized_ = function() {
  if (!this.keyMap_ && (this.keyMap_ = new goog.structs.Map, this.count_ = 0, this.encodedQuery_)) {
    for (var a = this.encodedQuery_.split("&"), b = 0;b < a.length;b++) {
      var c = a[b].indexOf("="), d = null, e = null;
      0 <= c ? (d = a[b].substring(0, c), e = a[b].substring(c + 1)) : d = a[b];
      d = goog.string.urlDecode(d);
      d = this.getKeyName_(d);
      this.add(d, e ? goog.string.urlDecode(e) : "");
    }
  }
};
goog.Uri.QueryData.createFromMap = function(a, b, c) {
  b = goog.structs.getKeys(a);
  if ("undefined" == typeof b) {
    throw Error("Keys are undefined");
  }
  c = new goog.Uri.QueryData(null, null, c);
  a = goog.structs.getValues(a);
  for (var d = 0;d < b.length;d++) {
    var e = b[d], f = a[d];
    goog.isArray(f) ? c.setValues(e, f) : c.add(e, f);
  }
  return c;
};
goog.Uri.QueryData.createFromKeysValues = function(a, b, c, d) {
  if (a.length != b.length) {
    throw Error("Mismatched lengths for keys/values");
  }
  c = new goog.Uri.QueryData(null, null, d);
  for (d = 0;d < a.length;d++) {
    c.add(a[d], b[d]);
  }
  return c;
};
goog.Uri.QueryData.prototype.keyMap_ = null;
goog.Uri.QueryData.prototype.count_ = null;
goog.Uri.QueryData.prototype.getCount = function() {
  this.ensureKeyMapInitialized_();
  return this.count_;
};
goog.Uri.QueryData.prototype.add = function(a, b) {
  this.ensureKeyMapInitialized_();
  this.invalidateCache_();
  a = this.getKeyName_(a);
  var c = this.keyMap_.get(a);
  c || this.keyMap_.set(a, c = []);
  c.push(b);
  this.count_++;
  return this;
};
goog.Uri.QueryData.prototype.remove = function(a) {
  this.ensureKeyMapInitialized_();
  a = this.getKeyName_(a);
  return this.keyMap_.containsKey(a) ? (this.invalidateCache_(), this.count_ -= this.keyMap_.get(a).length, this.keyMap_.remove(a)) : !1;
};
goog.Uri.QueryData.prototype.clear = function() {
  this.invalidateCache_();
  this.keyMap_ = null;
  this.count_ = 0;
};
goog.Uri.QueryData.prototype.isEmpty = function() {
  this.ensureKeyMapInitialized_();
  return 0 == this.count_;
};
goog.Uri.QueryData.prototype.containsKey = function(a) {
  this.ensureKeyMapInitialized_();
  a = this.getKeyName_(a);
  return this.keyMap_.containsKey(a);
};
goog.Uri.QueryData.prototype.containsValue = function(a) {
  var b = this.getValues();
  return goog.array.contains(b, a);
};
goog.Uri.QueryData.prototype.getKeys = function() {
  this.ensureKeyMapInitialized_();
  for (var a = this.keyMap_.getValues(), b = this.keyMap_.getKeys(), c = [], d = 0;d < b.length;d++) {
    for (var e = a[d], f = 0;f < e.length;f++) {
      c.push(b[d]);
    }
  }
  return c;
};
goog.Uri.QueryData.prototype.getValues = function(a) {
  this.ensureKeyMapInitialized_();
  var b = [];
  if (goog.isString(a)) {
    this.containsKey(a) && (b = goog.array.concat(b, this.keyMap_.get(this.getKeyName_(a))));
  } else {
    a = this.keyMap_.getValues();
    for (var c = 0;c < a.length;c++) {
      b = goog.array.concat(b, a[c]);
    }
  }
  return b;
};
goog.Uri.QueryData.prototype.set = function(a, b) {
  this.ensureKeyMapInitialized_();
  this.invalidateCache_();
  a = this.getKeyName_(a);
  this.containsKey(a) && (this.count_ -= this.keyMap_.get(a).length);
  this.keyMap_.set(a, [b]);
  this.count_++;
  return this;
};
goog.Uri.QueryData.prototype.get = function(a, b) {
  var c = a ? this.getValues(a) : [];
  return goog.Uri.preserveParameterTypesCompatibilityFlag ? 0 < c.length ? c[0] : b : 0 < c.length ? String(c[0]) : b;
};
goog.Uri.QueryData.prototype.setValues = function(a, b) {
  this.remove(a);
  0 < b.length && (this.invalidateCache_(), this.keyMap_.set(this.getKeyName_(a), goog.array.clone(b)), this.count_ += b.length);
};
goog.Uri.QueryData.prototype.toString = function() {
  if (this.encodedQuery_) {
    return this.encodedQuery_;
  }
  if (!this.keyMap_) {
    return "";
  }
  for (var a = [], b = this.keyMap_.getKeys(), c = 0;c < b.length;c++) {
    for (var d = b[c], e = goog.string.urlEncode(d), d = this.getValues(d), f = 0;f < d.length;f++) {
      var g = e;
      "" !== d[f] && (g += "=" + goog.string.urlEncode(d[f]));
      a.push(g);
    }
  }
  return this.encodedQuery_ = a.join("&");
};
goog.Uri.QueryData.prototype.toDecodedString = function() {
  return goog.Uri.decodeOrEmpty_(this.toString());
};
goog.Uri.QueryData.prototype.invalidateCache_ = function() {
  this.encodedQuery_ = null;
};
goog.Uri.QueryData.prototype.filterKeys = function(a) {
  this.ensureKeyMapInitialized_();
  this.keyMap_.forEach(function(b, c) {
    goog.array.contains(a, c) || this.remove(c);
  }, this);
  return this;
};
goog.Uri.QueryData.prototype.clone = function() {
  var a = new goog.Uri.QueryData;
  a.encodedQuery_ = this.encodedQuery_;
  this.keyMap_ && (a.keyMap_ = this.keyMap_.clone(), a.count_ = this.count_);
  return a;
};
goog.Uri.QueryData.prototype.getKeyName_ = function(a) {
  a = String(a);
  this.ignoreCase_ && (a = a.toLowerCase());
  return a;
};
goog.Uri.QueryData.prototype.setIgnoreCase = function(a) {
  a && !this.ignoreCase_ && (this.ensureKeyMapInitialized_(), this.invalidateCache_(), this.keyMap_.forEach(function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.setValues(d, a));
  }, this));
  this.ignoreCase_ = a;
};
goog.Uri.QueryData.prototype.extend = function(a) {
  for (var b = 0;b < arguments.length;b++) {
    goog.structs.forEach(arguments[b], function(a, b) {
      this.add(b, a);
    }, this);
  }
};
webdriver.Serializable = function() {
};
webdriver.logging = {};
webdriver.logging.Level = {ALL:{value:Number.MIN_VALUE, name:"ALL"}, DEBUG:{value:700, name:"DEBUG"}, INFO:{value:800, name:"INFO"}, WARNING:{value:900, name:"WARNING"}, SEVERE:{value:1E3, name:"SEVERE"}, OFF:{value:Number.MAX_VALUE, name:"OFF"}};
webdriver.logging.getLevel = function(a) {
  var b = goog.isString(a) ? function(b) {
    return b.name === a;
  } : function(b) {
    return b.value === a;
  };
  return goog.object.findValue(webdriver.logging.Level, b) || webdriver.logging.Level.ALL;
};
webdriver.logging.Type = {BROWSER:"browser", CLIENT:"client", DRIVER:"driver", PERFORMANCE:"performance", SERVER:"server"};
webdriver.logging.Preferences = function() {
  this.prefs_ = {};
};
webdriver.logging.Preferences.prototype.setLevel = function(a, b) {
  this.prefs_[a] = b;
};
webdriver.logging.Preferences.prototype.toJSON = function() {
  var a = {}, b;
  for (b in this.prefs_) {
    this.prefs_.hasOwnProperty(b) && (a[b] = this.prefs_[b].name);
  }
  return a;
};
webdriver.logging.Entry = function(a, b, c, d) {
  this.level = goog.isString(a) ? webdriver.logging.getLevel(a) : a;
  this.message = b;
  this.timestamp = goog.isNumber(c) ? c : goog.now();
  this.type = d || "";
};
webdriver.logging.Entry.prototype.toJSON = function() {
  return{level:this.level.name, message:this.message, timestamp:this.timestamp, type:this.type};
};
webdriver.logging.Entry.fromClosureLogRecord = function(a, b) {
  var c = a.getLevel(), d = webdriver.logging.Level.SEVERE;
  c.value <= webdriver.logging.Level.DEBUG.value ? d = webdriver.logging.Level.DEBUG : c.value <= webdriver.logging.Level.INFO.value ? d = webdriver.logging.Level.INFO : c.value <= webdriver.logging.Level.WARNING.value && (d = webdriver.logging.Level.WARNING);
  return new webdriver.logging.Entry(d, "[" + a.getLoggerName() + "] " + a.getMessage(), a.getMillis(), b);
};
webdriver.Browser = {ANDROID:"android", CHROME:"chrome", FIREFOX:"firefox", IE:"internet explorer", INTERNET_EXPLORER:"internet explorer", IPAD:"iPad", IPHONE:"iPhone", OPERA:"opera", PHANTOM_JS:"phantomjs", SAFARI:"safari", HTMLUNIT:"htmlunit"};
webdriver.Capability = {ACCEPT_SSL_CERTS:"acceptSslCerts", BROWSER_NAME:"browserName", ELEMENT_SCROLL_BEHAVIOR:"elementScrollBehavior", HANDLES_ALERTS:"handlesAlerts", LOGGING_PREFS:"loggingPrefs", NATIVE_EVENTS:"nativeEvents", PLATFORM:"platform", PROXY:"proxy", ROTATABLE:"rotatable", SECURE_SSL:"secureSsl", SUPPORTS_APPLICATION_CACHE:"applicationCacheEnabled", SUPPORTS_CSS_SELECTORS:"cssSelectorsEnabled", SUPPORTS_JAVASCRIPT:"javascriptEnabled", SUPPORTS_LOCATION_CONTEXT:"locationContextEnabled", 
TAKES_SCREENSHOT:"takesScreenshot", UNEXPECTED_ALERT_BEHAVIOR:"unexpectedAlertBehavior", VERSION:"version"};
webdriver.Capabilities = function(a) {
  webdriver.Serializable.call(this);
  this.caps_ = {};
  a && this.merge(a);
};
goog.inherits(webdriver.Capabilities, webdriver.Serializable);
webdriver.Capabilities.android = function() {
  return(new webdriver.Capabilities).set(webdriver.Capability.BROWSER_NAME, webdriver.Browser.ANDROID).set(webdriver.Capability.PLATFORM, "ANDROID");
};
webdriver.Capabilities.chrome = function() {
  return(new webdriver.Capabilities).set(webdriver.Capability.BROWSER_NAME, webdriver.Browser.CHROME);
};
webdriver.Capabilities.firefox = function() {
  return(new webdriver.Capabilities).set(webdriver.Capability.BROWSER_NAME, webdriver.Browser.FIREFOX);
};
webdriver.Capabilities.ie = function() {
  return(new webdriver.Capabilities).set(webdriver.Capability.BROWSER_NAME, webdriver.Browser.INTERNET_EXPLORER).set(webdriver.Capability.PLATFORM, "WINDOWS");
};
webdriver.Capabilities.ipad = function() {
  return(new webdriver.Capabilities).set(webdriver.Capability.BROWSER_NAME, webdriver.Browser.IPAD).set(webdriver.Capability.PLATFORM, "MAC");
};
webdriver.Capabilities.iphone = function() {
  return(new webdriver.Capabilities).set(webdriver.Capability.BROWSER_NAME, webdriver.Browser.IPHONE).set(webdriver.Capability.PLATFORM, "MAC");
};
webdriver.Capabilities.opera = function() {
  return(new webdriver.Capabilities).set(webdriver.Capability.BROWSER_NAME, webdriver.Browser.OPERA);
};
webdriver.Capabilities.phantomjs = function() {
  return(new webdriver.Capabilities).set(webdriver.Capability.BROWSER_NAME, webdriver.Browser.PHANTOM_JS);
};
webdriver.Capabilities.safari = function() {
  return(new webdriver.Capabilities).set(webdriver.Capability.BROWSER_NAME, webdriver.Browser.SAFARI);
};
webdriver.Capabilities.htmlunit = function() {
  return(new webdriver.Capabilities).set(webdriver.Capability.BROWSER_NAME, webdriver.Browser.HTMLUNIT);
};
webdriver.Capabilities.htmlunitwithjs = function() {
  return(new webdriver.Capabilities).set(webdriver.Capability.BROWSER_NAME, webdriver.Browser.HTMLUNIT).set(webdriver.Capability.SUPPORTS_JAVASCRIPT, !0);
};
webdriver.Capabilities.prototype.toJSON = function() {
  return this.caps_;
};
webdriver.Capabilities.prototype.serialize = function() {
  return this.caps_;
};
webdriver.Capabilities.prototype.merge = function(a) {
  a = a instanceof webdriver.Capabilities ? a.caps_ : a;
  for (var b in a) {
    a.hasOwnProperty(b) && this.set(b, a[b]);
  }
  return this;
};
webdriver.Capabilities.prototype.set = function(a, b) {
  goog.isDefAndNotNull(b) ? this.caps_[a] = b : delete this.caps_[a];
  return this;
};
webdriver.Capabilities.prototype.get = function(a) {
  var b = null;
  this.caps_.hasOwnProperty(a) && (b = this.caps_[a]);
  return goog.isDefAndNotNull(b) ? b : null;
};
webdriver.Capabilities.prototype.has = function(a) {
  return!!this.get(a);
};
webdriver.Capabilities.prototype.setLoggingPrefs = function(a) {
  return this.set(webdriver.Capability.LOGGING_PREFS, a);
};
webdriver.Capabilities.prototype.setProxy = function(a) {
  return this.set(webdriver.Capability.PROXY, a);
};
webdriver.Capabilities.prototype.setEnableNativeEvents = function(a) {
  return this.set(webdriver.Capability.NATIVE_EVENTS, a);
};
webdriver.Capabilities.prototype.setScrollBehavior = function(a) {
  return this.set(webdriver.Capability.ELEMENT_SCROLL_BEHAVIOR, a);
};
webdriver.Capabilities.prototype.setAlertBehavior = function(a) {
  return this.set(webdriver.Capability.UNEXPECTED_ALERT_BEHAVIOR, a);
};
var bot = {ErrorCode:{SUCCESS:0, NO_SUCH_ELEMENT:7, NO_SUCH_FRAME:8, UNKNOWN_COMMAND:9, UNSUPPORTED_OPERATION:9, STALE_ELEMENT_REFERENCE:10, ELEMENT_NOT_VISIBLE:11, INVALID_ELEMENT_STATE:12, UNKNOWN_ERROR:13, ELEMENT_NOT_SELECTABLE:15, JAVASCRIPT_ERROR:17, XPATH_LOOKUP_ERROR:19, TIMEOUT:21, NO_SUCH_WINDOW:23, INVALID_COOKIE_DOMAIN:24, UNABLE_TO_SET_COOKIE:25, MODAL_DIALOG_OPENED:26, UNEXPECTED_ALERT_OPEN:26, NO_SUCH_ALERT:27, NO_MODAL_DIALOG_OPEN:27, SCRIPT_TIMEOUT:28, INVALID_ELEMENT_COORDINATES:29, 
IME_NOT_AVAILABLE:30, IME_ENGINE_ACTIVATION_FAILED:31, INVALID_SELECTOR_ERROR:32, SESSION_NOT_CREATED:33, MOVE_TARGET_OUT_OF_BOUNDS:34, SQL_DATABASE_ERROR:35, INVALID_XPATH_SELECTOR:51, INVALID_XPATH_SELECTOR_RETURN_TYPE:52, METHOD_NOT_ALLOWED:405}, Error:function(a, b) {
  this.code = a;
  this.state = bot.Error.CODE_TO_STATE_[a] || bot.Error.State.UNKNOWN_ERROR;
  this.message = b || "";
  var c = this.state.replace(/((?:^|\s+)[a-z])/g, function(a) {
    return a.toUpperCase().replace(/^[\s\xa0]+/g, "");
  }), d = c.length - 5;
  if (0 > d || c.indexOf("Error", d) != d) {
    c += "Error";
  }
  this.name = c;
  c = Error(this.message);
  c.name = this.name;
  this.stack = c.stack || "";
}};
goog.inherits(bot.Error, Error);
bot.Error.State = {ELEMENT_NOT_SELECTABLE:"element not selectable", ELEMENT_NOT_VISIBLE:"element not visible", IME_ENGINE_ACTIVATION_FAILED:"ime engine activation failed", IME_NOT_AVAILABLE:"ime not available", INVALID_COOKIE_DOMAIN:"invalid cookie domain", INVALID_ELEMENT_COORDINATES:"invalid element coordinates", INVALID_ELEMENT_STATE:"invalid element state", INVALID_SELECTOR:"invalid selector", JAVASCRIPT_ERROR:"javascript error", MOVE_TARGET_OUT_OF_BOUNDS:"move target out of bounds", NO_SUCH_ALERT:"no such alert", 
NO_SUCH_DOM:"no such dom", NO_SUCH_ELEMENT:"no such element", NO_SUCH_FRAME:"no such frame", NO_SUCH_WINDOW:"no such window", SCRIPT_TIMEOUT:"script timeout", SESSION_NOT_CREATED:"session not created", STALE_ELEMENT_REFERENCE:"stale element reference", SUCCESS:"success", TIMEOUT:"timeout", UNABLE_TO_SET_COOKIE:"unable to set cookie", UNEXPECTED_ALERT_OPEN:"unexpected alert open", UNKNOWN_COMMAND:"unknown command", UNKNOWN_ERROR:"unknown error", UNSUPPORTED_OPERATION:"unsupported operation"};
bot.Error.CODE_TO_STATE_ = {};
bot.Error.CODE_TO_STATE_[bot.ErrorCode.ELEMENT_NOT_SELECTABLE] = bot.Error.State.ELEMENT_NOT_SELECTABLE;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.ELEMENT_NOT_VISIBLE] = bot.Error.State.ELEMENT_NOT_VISIBLE;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.IME_ENGINE_ACTIVATION_FAILED] = bot.Error.State.IME_ENGINE_ACTIVATION_FAILED;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.IME_NOT_AVAILABLE] = bot.Error.State.IME_NOT_AVAILABLE;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.INVALID_COOKIE_DOMAIN] = bot.Error.State.INVALID_COOKIE_DOMAIN;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.INVALID_ELEMENT_COORDINATES] = bot.Error.State.INVALID_ELEMENT_COORDINATES;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.INVALID_ELEMENT_STATE] = bot.Error.State.INVALID_ELEMENT_STATE;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.INVALID_SELECTOR_ERROR] = bot.Error.State.INVALID_SELECTOR;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.INVALID_XPATH_SELECTOR] = bot.Error.State.INVALID_SELECTOR;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.INVALID_XPATH_SELECTOR_RETURN_TYPE] = bot.Error.State.INVALID_SELECTOR;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.JAVASCRIPT_ERROR] = bot.Error.State.JAVASCRIPT_ERROR;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.METHOD_NOT_ALLOWED] = bot.Error.State.UNSUPPORTED_OPERATION;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.MOVE_TARGET_OUT_OF_BOUNDS] = bot.Error.State.MOVE_TARGET_OUT_OF_BOUNDS;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.NO_MODAL_DIALOG_OPEN] = bot.Error.State.NO_SUCH_ALERT;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.NO_SUCH_ALERT] = bot.Error.State.NO_SUCH_ALERT;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.NO_SUCH_ELEMENT] = bot.Error.State.NO_SUCH_ELEMENT;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.NO_SUCH_FRAME] = bot.Error.State.NO_SUCH_FRAME;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.NO_SUCH_WINDOW] = bot.Error.State.NO_SUCH_WINDOW;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.SCRIPT_TIMEOUT] = bot.Error.State.SCRIPT_TIMEOUT;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.SESSION_NOT_CREATED] = bot.Error.State.SESSION_NOT_CREATED;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.STALE_ELEMENT_REFERENCE] = bot.Error.State.STALE_ELEMENT_REFERENCE;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.SUCCESS] = bot.Error.State.SUCCESS;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.TIMEOUT] = bot.Error.State.TIMEOUT;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.UNABLE_TO_SET_COOKIE] = bot.Error.State.UNABLE_TO_SET_COOKIE;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.MODAL_DIALOG_OPENED] = bot.Error.State.UNEXPECTED_ALERT_OPEN;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.UNEXPECTED_ALERT_OPEN] = bot.Error.State.UNEXPECTED_ALERT_OPEN;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.UNKNOWN_ERROR] = bot.Error.State.UNKNOWN_ERROR;
bot.Error.CODE_TO_STATE_[bot.ErrorCode.UNSUPPORTED_OPERATION] = bot.Error.State.UNKNOWN_COMMAND;
bot.Error.prototype.isAutomationError = !0;
goog.DEBUG && (bot.Error.prototype.toString = function() {
  return this.name + ": " + this.message;
});
bot.response = {};
bot.response.isResponseObject = function(a) {
  return goog.isObject(a) && goog.isNumber(a.status);
};
bot.response.createResponse = function(a) {
  return bot.response.isResponseObject(a) ? a : {status:bot.ErrorCode.SUCCESS, value:a};
};
bot.response.createErrorResponse = function(a) {
  return bot.response.isResponseObject(a) ? a : {status:a && goog.isNumber(a.code) ? a.code : bot.ErrorCode.UNKNOWN_ERROR, value:{message:(a && a.message || a) + ""}};
};
bot.response.checkResponse = function(a) {
  var b = a.status;
  if (b == bot.ErrorCode.SUCCESS) {
    return a;
  }
  b = b || bot.ErrorCode.UNKNOWN_ERROR;
  a = a.value;
  if (!a || !goog.isObject(a)) {
    throw new bot.Error(b, a + "");
  }
  throw new bot.Error(b, a.message + "");
};
goog.json = {};
goog.json.USE_NATIVE_JSON = !1;
goog.json.isValid = function(a) {
  return/^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""));
};
goog.json.parse = goog.json.USE_NATIVE_JSON ? goog.global.JSON.parse : function(a) {
  a = String(a);
  if (goog.json.isValid(a)) {
    try {
      return eval("(" + a + ")");
    } catch (b) {
    }
  }
  throw Error("Invalid JSON string: " + a);
};
goog.json.unsafeParse = goog.json.USE_NATIVE_JSON ? goog.global.JSON.parse : function(a) {
  return eval("(" + a + ")");
};
goog.json.serialize = goog.json.USE_NATIVE_JSON ? goog.global.JSON.stringify : function(a, b) {
  return(new goog.json.Serializer(b)).serialize(a);
};
goog.json.Serializer = function(a) {
  this.replacer_ = a;
};
goog.json.Serializer.prototype.serialize = function(a) {
  var b = [];
  this.serializeInternal(a, b);
  return b.join("");
};
goog.json.Serializer.prototype.serializeInternal = function(a, b) {
  switch(typeof a) {
    case "string":
      this.serializeString_(a, b);
      break;
    case "number":
      this.serializeNumber_(a, b);
      break;
    case "boolean":
      b.push(a);
      break;
    case "undefined":
      b.push("null");
      break;
    case "object":
      if (null == a) {
        b.push("null");
        break;
      }
      if (goog.isArray(a)) {
        this.serializeArray(a, b);
        break;
      }
      this.serializeObject_(a, b);
      break;
    case "function":
      break;
    default:
      throw Error("Unknown type: " + typeof a);;
  }
};
goog.json.Serializer.charToJsonCharCache_ = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"};
goog.json.Serializer.charsToReplace_ = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
goog.json.Serializer.prototype.serializeString_ = function(a, b) {
  b.push('"', a.replace(goog.json.Serializer.charsToReplace_, function(a) {
    if (a in goog.json.Serializer.charToJsonCharCache_) {
      return goog.json.Serializer.charToJsonCharCache_[a];
    }
    var b = a.charCodeAt(0), e = "\\u";
    16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
    return goog.json.Serializer.charToJsonCharCache_[a] = e + b.toString(16);
  }), '"');
};
goog.json.Serializer.prototype.serializeNumber_ = function(a, b) {
  b.push(isFinite(a) && !isNaN(a) ? a : "null");
};
goog.json.Serializer.prototype.serializeArray = function(a, b) {
  var c = a.length;
  b.push("[");
  for (var d = "", e = 0;e < c;e++) {
    b.push(d), d = a[e], this.serializeInternal(this.replacer_ ? this.replacer_.call(a, String(e), d) : d, b), d = ",";
  }
  b.push("]");
};
goog.json.Serializer.prototype.serializeObject_ = function(a, b) {
  b.push("{");
  var c = "", d;
  for (d in a) {
    if (Object.prototype.hasOwnProperty.call(a, d)) {
      var e = a[d];
      "function" != typeof e && (b.push(c), this.serializeString_(d, b), b.push(":"), this.serializeInternal(this.replacer_ ? this.replacer_.call(a, d, e) : e, b), c = ",");
    }
  }
  b.push("}");
};
goog.userAgent.product = {};
goog.userAgent.product.ASSUME_FIREFOX = !1;
goog.userAgent.product.ASSUME_CAMINO = !1;
goog.userAgent.product.ASSUME_IPHONE = !1;
goog.userAgent.product.ASSUME_IPAD = !1;
goog.userAgent.product.ASSUME_ANDROID = !1;
goog.userAgent.product.ASSUME_CHROME = !1;
goog.userAgent.product.ASSUME_SAFARI = !1;
goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_CAMINO || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI;
goog.userAgent.product.init_ = function() {
  goog.userAgent.product.detectedFirefox_ = !1;
  goog.userAgent.product.detectedCamino_ = !1;
  goog.userAgent.product.detectedIphone_ = !1;
  goog.userAgent.product.detectedIpad_ = !1;
  goog.userAgent.product.detectedAndroid_ = !1;
  goog.userAgent.product.detectedChrome_ = !1;
  goog.userAgent.product.detectedSafari_ = !1;
  var a = goog.userAgent.getUserAgentString();
  a && (-1 != a.indexOf("Firefox") ? goog.userAgent.product.detectedFirefox_ = !0 : -1 != a.indexOf("Camino") ? goog.userAgent.product.detectedCamino_ = !0 : -1 != a.indexOf("iPad") ? goog.userAgent.product.detectedIpad_ = !0 : -1 != a.indexOf("iPhone") || -1 != a.indexOf("iPod") ? goog.userAgent.product.detectedIphone_ = !0 : -1 != a.indexOf("Chrome") ? goog.userAgent.product.detectedChrome_ = !0 : -1 != a.indexOf("Android") ? goog.userAgent.product.detectedAndroid_ = !0 : -1 != a.indexOf("Safari") && 
  (goog.userAgent.product.detectedSafari_ = !0));
};
goog.userAgent.product.PRODUCT_KNOWN_ || goog.userAgent.product.init_();
goog.userAgent.product.OPERA = goog.userAgent.OPERA;
goog.userAgent.product.IE = goog.userAgent.IE;
goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.userAgent.product.detectedFirefox_;
goog.userAgent.product.CAMINO = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CAMINO : goog.userAgent.product.detectedCamino_;
goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.detectedIphone_;
goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.userAgent.product.detectedIpad_;
goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.userAgent.product.detectedAndroid_;
goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.userAgent.product.detectedChrome_;
goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.detectedSafari_;
webdriver.FirefoxDomExecutor = function() {
  if (!webdriver.FirefoxDomExecutor.isAvailable()) {
    throw Error("The current environment does not support the FirefoxDomExecutor");
  }
  this.doc_ = document;
  this.docElement_ = document.documentElement;
  this.docElement_.addEventListener(webdriver.FirefoxDomExecutor.EventType_.RESPONSE, goog.bind(this.onResponse_, this), !1);
};
webdriver.FirefoxDomExecutor.isAvailable = function() {
  return goog.userAgent.product.FIREFOX && "undefined" !== typeof document && document.documentElement && goog.isFunction(document.documentElement.hasAttribute) && document.documentElement.hasAttribute("webdriver");
};
webdriver.FirefoxDomExecutor.Attribute_ = {COMMAND:"command", RESPONSE:"response"};
webdriver.FirefoxDomExecutor.EventType_ = {COMMAND:"webdriverCommand", RESPONSE:"webdriverResponse"};
webdriver.FirefoxDomExecutor.prototype.pendingCommand_ = null;
webdriver.FirefoxDomExecutor.prototype.execute = function(a, b) {
  if (this.pendingCommand_) {
    throw Error("Currently awaiting a command response!");
  }
  this.pendingCommand_ = {name:a.getName(), callback:b};
  var c = a.getParameters();
  c.id && c.id.ELEMENT && a.getName() != webdriver.CommandName.SWITCH_TO_FRAME && (c.id = c.id.ELEMENT);
  c = goog.json.serialize({name:a.getName(), sessionId:c.sessionId, parameters:c});
  this.docElement_.setAttribute(webdriver.FirefoxDomExecutor.Attribute_.COMMAND, c);
  c = this.doc_.createEvent("Event");
  c.initEvent(webdriver.FirefoxDomExecutor.EventType_.COMMAND, !0, !0);
  this.docElement_.dispatchEvent(c);
};
webdriver.FirefoxDomExecutor.prototype.onResponse_ = function() {
  if (this.pendingCommand_) {
    var a = this.pendingCommand_;
    this.pendingCommand_ = null;
    var b = this.docElement_.getAttribute(webdriver.FirefoxDomExecutor.Attribute_.RESPONSE);
    if (b) {
      this.docElement_.removeAttribute(webdriver.FirefoxDomExecutor.Attribute_.COMMAND);
      this.docElement_.removeAttribute(webdriver.FirefoxDomExecutor.Attribute_.RESPONSE);
      try {
        var c = bot.response.checkResponse(goog.json.parse(b));
      } catch (d) {
        a.callback(d);
        return;
      }
      a.name == webdriver.CommandName.NEW_SESSION && goog.isString(c.value) ? (b = (new webdriver.Command(webdriver.CommandName.DESCRIBE_SESSION)).setParameter("sessionId", c.value), this.execute(b, a.callback)) : a.callback(null, c);
    } else {
      a.callback(Error("Empty command response!"));
    }
  }
};
webdriver.Locator = function(a, b) {
  this.using = a;
  this.value = b;
};
webdriver.Locator.factory_ = function(a) {
  return function(b) {
    return new webdriver.Locator(a, b);
  };
};
webdriver.By = {};
goog.exportSymbol("By", webdriver.By);
webdriver.By.className = webdriver.Locator.factory_("class name");
webdriver.By.css = webdriver.Locator.factory_("css selector");
webdriver.By.id = webdriver.Locator.factory_("id");
webdriver.By.linkText = webdriver.Locator.factory_("link text");
webdriver.By.js = function(a, b) {
  var c = goog.array.slice(arguments, 0);
  return function(a) {
    return a.executeScript.apply(a, c);
  };
};
webdriver.By.name = webdriver.Locator.factory_("name");
webdriver.By.partialLinkText = webdriver.Locator.factory_("partial link text");
webdriver.By.tagName = webdriver.Locator.factory_("tag name");
webdriver.By.xpath = webdriver.Locator.factory_("xpath");
webdriver.Locator.Strategy = {className:webdriver.By.className, css:webdriver.By.css, id:webdriver.By.id, js:webdriver.By.js, linkText:webdriver.By.linkText, name:webdriver.By.name, partialLinkText:webdriver.By.partialLinkText, tagName:webdriver.By.tagName, xpath:webdriver.By.xpath};
webdriver.Locator.checkLocator = function(a) {
  if (goog.isFunction(a) || a instanceof webdriver.Locator) {
    return a;
  }
  for (var b in a) {
    if (a.hasOwnProperty(b) && webdriver.Locator.Strategy.hasOwnProperty(b)) {
      return webdriver.Locator.Strategy[b](a[b]);
    }
  }
  throw new TypeError("Invalid locator");
};
webdriver.Locator.prototype.toString = function() {
  return "By." + this.using.replace(/ ([a-z])/g, function(a, b) {
    return b.toUpperCase();
  }) + "(" + goog.string.quote(this.value) + ")";
};
webdriver.Session = function(a, b) {
  this.id_ = a;
  this.caps_ = (new webdriver.Capabilities).merge(b);
};
webdriver.Session.prototype.getId = function() {
  return this.id_;
};
webdriver.Session.prototype.getCapabilities = function() {
  return this.caps_;
};
webdriver.Session.prototype.getCapability = function(a) {
  return this.caps_.get(a);
};
webdriver.Session.prototype.toJSON = function() {
  return this.getId();
};
webdriver.TouchSequence = function(a) {
  this.driver_ = a;
  this.touchActions_ = [];
};
webdriver.TouchSequence.prototype.schedule_ = function(a, b) {
  this.touchActions_.push({description:a, command:b});
};
webdriver.TouchSequence.prototype.perform = function() {
  var a = goog.array.clone(this.touchActions_), b = this.driver_;
  return b.controlFlow().execute(function() {
    goog.array.forEach(a, function(a) {
      b.schedule(a.command, a.description);
    });
  }, "TouchSequence.perform");
};
webdriver.TouchSequence.prototype.tap = function(a) {
  a = (new webdriver.Command(webdriver.CommandName.TOUCH_SINGLE_TAP)).setParameter("element", a.getRawId());
  this.schedule_("tap", a);
  return this;
};
webdriver.TouchSequence.prototype.doubleTap = function(a) {
  a = (new webdriver.Command(webdriver.CommandName.TOUCH_DOUBLE_TAP)).setParameter("element", a.getRawId());
  this.schedule_("doubleTap", a);
  return this;
};
webdriver.TouchSequence.prototype.longPress = function(a) {
  a = (new webdriver.Command(webdriver.CommandName.TOUCH_LONG_PRESS)).setParameter("element", a.getRawId());
  this.schedule_("longPress", a);
  return this;
};
webdriver.TouchSequence.prototype.tapAndHold = function(a) {
  a = (new webdriver.Command(webdriver.CommandName.TOUCH_DOWN)).setParameter("x", a.x).setParameter("y", a.y);
  this.schedule_("tapAndHold", a);
  return this;
};
webdriver.TouchSequence.prototype.move = function(a) {
  a = (new webdriver.Command(webdriver.CommandName.TOUCH_MOVE)).setParameter("x", a.x).setParameter("y", a.y);
  this.schedule_("move", a);
  return this;
};
webdriver.TouchSequence.prototype.release = function(a) {
  a = (new webdriver.Command(webdriver.CommandName.TOUCH_UP)).setParameter("x", a.x).setParameter("y", a.y);
  this.schedule_("release", a);
  return this;
};
webdriver.TouchSequence.prototype.scroll = function(a) {
  a = (new webdriver.Command(webdriver.CommandName.TOUCH_SCROLL)).setParameter("xoffset", a.x).setParameter("yoffset", a.y);
  this.schedule_("scroll", a);
  return this;
};
webdriver.TouchSequence.prototype.scrollFromElement = function(a, b) {
  var c = (new webdriver.Command(webdriver.CommandName.TOUCH_SCROLL)).setParameter("element", a.getRawId()).setParameter("xoffset", b.x).setParameter("yoffset", b.y);
  this.schedule_("scrollFromElement", c);
  return this;
};
webdriver.TouchSequence.prototype.flick = function(a) {
  a = (new webdriver.Command(webdriver.CommandName.TOUCH_FLICK)).setParameter("xspeed", a.xspeed).setParameter("yspeed", a.yspeed);
  this.schedule_("flick", a);
  return this;
};
webdriver.TouchSequence.prototype.flickElement = function(a, b, c) {
  a = (new webdriver.Command(webdriver.CommandName.TOUCH_FLICK)).setParameter("element", a.getRawId()).setParameter("xoffset", b.x).setParameter("yoffset", b.y).setParameter("speed", c);
  this.schedule_("flickElement", a);
  return this;
};
goog.debug.entryPointRegistry = {};
goog.debug.EntryPointMonitor = function() {
};
goog.debug.entryPointRegistry.refList_ = [];
goog.debug.entryPointRegistry.monitors_ = [];
goog.debug.entryPointRegistry.monitorsMayExist_ = !1;
goog.debug.entryPointRegistry.register = function(a) {
  goog.debug.entryPointRegistry.refList_[goog.debug.entryPointRegistry.refList_.length] = a;
  if (goog.debug.entryPointRegistry.monitorsMayExist_) {
    for (var b = goog.debug.entryPointRegistry.monitors_, c = 0;c < b.length;c++) {
      a(goog.bind(b[c].wrap, b[c]));
    }
  }
};
goog.debug.entryPointRegistry.monitorAll = function(a) {
  goog.debug.entryPointRegistry.monitorsMayExist_ = !0;
  for (var b = goog.bind(a.wrap, a), c = 0;c < goog.debug.entryPointRegistry.refList_.length;c++) {
    goog.debug.entryPointRegistry.refList_[c](b);
  }
  goog.debug.entryPointRegistry.monitors_.push(a);
};
goog.debug.entryPointRegistry.unmonitorAllIfPossible = function(a) {
  var b = goog.debug.entryPointRegistry.monitors_;
  goog.asserts.assert(a == b[b.length - 1], "Only the most recent monitor can be unwrapped.");
  a = goog.bind(a.unwrap, a);
  for (var c = 0;c < goog.debug.entryPointRegistry.refList_.length;c++) {
    goog.debug.entryPointRegistry.refList_[c](a);
  }
  b.length--;
};
goog.async = {};
goog.async.throwException = function(a) {
  goog.global.setTimeout(function() {
    throw a;
  }, 0);
};
goog.async.nextTick = function(a, b, c) {
  var d = a;
  b && (d = goog.bind(a, b));
  d = goog.async.nextTick.wrapCallback_(d);
  !goog.isFunction(goog.global.setImmediate) || !c && goog.global.Window && goog.global.Window.prototype.setImmediate == goog.global.setImmediate ? (goog.async.nextTick.setImmediate_ || (goog.async.nextTick.setImmediate_ = goog.async.nextTick.getSetImmediateEmulator_()), goog.async.nextTick.setImmediate_(d)) : goog.global.setImmediate(d);
};
goog.async.nextTick.getSetImmediateEmulator_ = function() {
  var a = goog.global.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
    var a = document.createElement("iframe");
    a.style.display = "none";
    a.src = "";
    document.documentElement.appendChild(a);
    var b = a.contentWindow, a = b.document;
    a.open();
    a.write("");
    a.close();
    var c = "callImmediate" + Math.random(), d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host, a = goog.bind(function(a) {
      if (("*" == d || a.origin == d) && a.data == c) {
        this.port1.onmessage();
      }
    }, this);
    b.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      b.postMessage(c, d);
    }};
  });
  if ("undefined" !== typeof a && !goog.labs.userAgent.browser.isIE()) {
    var b = new a, c = {}, d = c;
    b.port1.onmessage = function() {
      if (goog.isDef(c.next)) {
        c = c.next;
        var a = c.cb;
        c.cb = null;
        a();
      }
    };
    return function(a) {
      d.next = {cb:a};
      d = d.next;
      b.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(a) {
    var b = document.createElement("script");
    b.onreadystatechange = function() {
      b.onreadystatechange = null;
      b.parentNode.removeChild(b);
      b = null;
      a();
      a = null;
    };
    document.documentElement.appendChild(b);
  } : function(a) {
    goog.global.setTimeout(a, 0);
  };
};
goog.async.nextTick.wrapCallback_ = goog.functions.identity;
goog.debug.entryPointRegistry.register(function(a) {
  goog.async.nextTick.wrapCallback_ = a;
});
goog.testing = {};
goog.testing.watchers = {};
goog.testing.watchers.resetWatchers_ = [];
goog.testing.watchers.signalClockReset = function() {
  for (var a = goog.testing.watchers.resetWatchers_, b = 0;b < a.length;b++) {
    goog.testing.watchers.resetWatchers_[b]();
  }
};
goog.testing.watchers.watchClockReset = function(a) {
  goog.testing.watchers.resetWatchers_.push(a);
};
goog.async.run = function(a, b) {
  goog.async.run.schedule_ || goog.async.run.initializeRunner_();
  goog.async.run.workQueueScheduled_ || (goog.async.run.schedule_(), goog.async.run.workQueueScheduled_ = !0);
  goog.async.run.workQueue_.push(new goog.async.run.WorkItem_(a, b));
};
goog.async.run.initializeRunner_ = function() {
  if (goog.global.Promise && goog.global.Promise.resolve) {
    var a = goog.global.Promise.resolve();
    goog.async.run.schedule_ = function() {
      a.then(goog.async.run.processWorkQueue);
    };
  } else {
    goog.async.run.schedule_ = function() {
      goog.async.nextTick(goog.async.run.processWorkQueue);
    };
  }
};
goog.async.run.forceNextTick = function() {
  goog.async.run.schedule_ = function() {
    goog.async.nextTick(goog.async.run.processWorkQueue);
  };
};
goog.async.run.workQueueScheduled_ = !1;
goog.async.run.workQueue_ = [];
goog.DEBUG && (goog.async.run.resetQueue_ = function() {
  goog.async.run.workQueueScheduled_ = !1;
  goog.async.run.workQueue_ = [];
}, goog.testing.watchers.watchClockReset(goog.async.run.resetQueue_));
goog.async.run.processWorkQueue = function() {
  for (;goog.async.run.workQueue_.length;) {
    var a = goog.async.run.workQueue_;
    goog.async.run.workQueue_ = [];
    for (var b = 0;b < a.length;b++) {
      var c = a[b];
      try {
        c.fn.call(c.scope);
      } catch (d) {
        goog.async.throwException(d);
      }
    }
  }
  goog.async.run.workQueueScheduled_ = !1;
};
goog.async.run.WorkItem_ = function(a, b) {
  this.fn = a;
  this.scope = b;
};
webdriver.EventEmitter = function() {
  this.events_ = {};
};
webdriver.EventEmitter.prototype.emit = function(a, b) {
  var c = Array.prototype.slice.call(arguments, 1), d = this.events_[a];
  if (d) {
    for (var e = 0;e < d.length;) {
      var f = d[e];
      f.fn.apply(f.scope, c);
      d[e] === f && (d[e].oneshot ? d.splice(e, 1) : e += 1);
    }
  }
};
webdriver.EventEmitter.prototype.listeners = function(a) {
  var b = this.events_[a];
  b || (b = this.events_[a] = []);
  return b;
};
webdriver.EventEmitter.prototype.addListener_ = function(a, b, c, d) {
  a = this.listeners(a);
  for (var e = a.length, f = 0;f < e;++f) {
    if (a[f].fn == b) {
      return this;
    }
  }
  a.push({fn:b, scope:c, oneshot:!!d});
  return this;
};
webdriver.EventEmitter.prototype.addListener = function(a, b, c) {
  return this.addListener_(a, b, c);
};
webdriver.EventEmitter.prototype.once = function(a, b, c) {
  return this.addListener_(a, b, c, !0);
};
webdriver.EventEmitter.prototype.on = webdriver.EventEmitter.prototype.addListener;
webdriver.EventEmitter.prototype.removeListener = function(a, b) {
  var c = this.events_[a];
  if (c) {
    for (var d = c.length, e = 0;e < d;++e) {
      if (c[e].fn == b) {
        c.splice(e, 1);
        break;
      }
    }
  }
  return this;
};
webdriver.EventEmitter.prototype.removeAllListeners = function(a) {
  goog.isDef(a) ? delete this.events_[a] : this.events_ = {};
  return this;
};
webdriver.stacktrace = {};
webdriver.stacktrace.Snapshot = function(a) {
  this.slice_ = a || 0;
  var b;
  if (webdriver.stacktrace.CAN_CAPTURE_STACK_TRACE_) {
    b = Error(), Error.captureStackTrace(b, webdriver.stacktrace.Snapshot);
  } else {
    this.slice_ += 1;
    try {
      null.x();
    } catch (c) {
      b = c;
    }
  }
  this.stack_ = webdriver.stacktrace.getStack(b);
};
webdriver.stacktrace.CAN_CAPTURE_STACK_TRACE_ = goog.isFunction(Error.captureStackTrace);
webdriver.stacktrace.BROWSER_SUPPORTED = webdriver.stacktrace.CAN_CAPTURE_STACK_TRACE_ || function() {
  try {
    throw Error();
  } catch (a) {
    return!!a.stack;
  }
}();
webdriver.stacktrace.Snapshot.prototype.parsedStack_ = null;
webdriver.stacktrace.Snapshot.prototype.getStacktrace = function() {
  goog.isNull(this.parsedStack_) && (this.parsedStack_ = webdriver.stacktrace.parse_(this.stack_), this.slice_ && (this.parsedStack_ = goog.array.slice(this.parsedStack_, this.slice_)), delete this.slice_, delete this.stack_);
  return this.parsedStack_;
};
webdriver.stacktrace.Frame = function(a, b, c, d) {
  this.context_ = a || "";
  this.name_ = b || "";
  this.alias_ = c || "";
  this.url_ = this.path_ = d || "";
  this.column_ = this.line_ = -1;
  d && (a = /:(\d+)(?::(\d+))?$/.exec(d)) && (this.line_ = Number(a[1]), this.column = Number(a[2] || -1), this.url_ = d.substr(0, a.index));
};
webdriver.stacktrace.ANONYMOUS_FRAME_ = new webdriver.stacktrace.Frame("", "", "", "");
webdriver.stacktrace.Frame.prototype.getName = function() {
  return this.name_;
};
webdriver.stacktrace.Frame.prototype.getUrl = function() {
  return this.url_;
};
webdriver.stacktrace.Frame.prototype.getLine = function() {
  return this.line_;
};
webdriver.stacktrace.Frame.prototype.getColumn = function() {
  return this.column_;
};
webdriver.stacktrace.Frame.prototype.isAnonymous = function() {
  return!this.name_ || "[object Object]" == this.context_;
};
webdriver.stacktrace.Frame.prototype.toString = function() {
  var a = this.context_;
  a && "new " !== a && (a += ".");
  var a = a + this.name_, a = a + (this.alias_ ? " [as " + this.alias_ + "]" : ""), b = this.path_ || "<anonymous>";
  return "    at " + (a ? a + " (" + b + ")" : b);
};
webdriver.stacktrace.MAX_FIREFOX_FRAMESTRING_LENGTH_ = 5E5;
webdriver.stacktrace.IDENTIFIER_PATTERN_ = "[a-zA-Z_$][\\w$]*";
webdriver.stacktrace.CONTEXT_PATTERN_ = "(" + webdriver.stacktrace.IDENTIFIER_PATTERN_ + "(?:\\." + webdriver.stacktrace.IDENTIFIER_PATTERN_ + ")*)\\.";
webdriver.stacktrace.QUALIFIED_NAME_PATTERN_ = "(?:" + webdriver.stacktrace.CONTEXT_PATTERN_ + ")?(" + webdriver.stacktrace.IDENTIFIER_PATTERN_ + ")";
webdriver.stacktrace.V8_ALIAS_PATTERN_ = "(?: \\[as (" + webdriver.stacktrace.IDENTIFIER_PATTERN_ + ")\\])?";
webdriver.stacktrace.V8_FUNCTION_NAME_PATTERN_ = "(?:" + webdriver.stacktrace.IDENTIFIER_PATTERN_ + "|<anonymous>)";
webdriver.stacktrace.V8_CONTEXT_PATTERN_ = "(?:((?:new )?(?:\\[object Object\\]|" + webdriver.stacktrace.IDENTIFIER_PATTERN_ + "(?:\\." + webdriver.stacktrace.IDENTIFIER_PATTERN_ + ")*))\\.|(new ))";
webdriver.stacktrace.V8_FUNCTION_CALL_PATTERN_ = " (?:" + webdriver.stacktrace.V8_CONTEXT_PATTERN_ + ")?(" + webdriver.stacktrace.V8_FUNCTION_NAME_PATTERN_ + ")" + webdriver.stacktrace.V8_ALIAS_PATTERN_;
webdriver.stacktrace.URL_PATTERN_ = "((?:http|https|file)://[^\\s]+|javascript:.*)";
webdriver.stacktrace.V8_LOCATION_PATTERN_ = " (?:\\((.*)\\)|(.*))";
webdriver.stacktrace.V8_STACK_FRAME_REGEXP_ = new RegExp("^\\s+at(?! (?:Anonymous function|Global code|eval code) )(?:" + webdriver.stacktrace.V8_FUNCTION_CALL_PATTERN_ + ")?" + webdriver.stacktrace.V8_LOCATION_PATTERN_ + "$");
webdriver.stacktrace.FIREFOX_FUNCTION_NAME_PATTERN_ = webdriver.stacktrace.IDENTIFIER_PATTERN_ + "[\\w./<$]*";
webdriver.stacktrace.FIREFOX_FUNCTION_CALL_PATTERN_ = "(" + webdriver.stacktrace.FIREFOX_FUNCTION_NAME_PATTERN_ + ")?(?:\\(.*\\))?@";
webdriver.stacktrace.FIREFOX_STACK_FRAME_REGEXP_ = new RegExp("^" + webdriver.stacktrace.FIREFOX_FUNCTION_CALL_PATTERN_ + "(?::0|" + webdriver.stacktrace.URL_PATTERN_ + ")$");
webdriver.stacktrace.CHAKRA_FUNCTION_CALL_PATTERN_ = "(?:(" + webdriver.stacktrace.IDENTIFIER_PATTERN_ + "(?:\\." + webdriver.stacktrace.IDENTIFIER_PATTERN_ + ")*)\\.)?(" + webdriver.stacktrace.IDENTIFIER_PATTERN_ + "(?:\\s+\\w+)*)";
webdriver.stacktrace.CHAKRA_STACK_FRAME_REGEXP_ = new RegExp("^   at " + webdriver.stacktrace.CHAKRA_FUNCTION_CALL_PATTERN_ + "\\s*(?:\\((.*)\\))$");
webdriver.stacktrace.UNKNOWN_CLOSURE_FRAME_ = "> (unknown)";
webdriver.stacktrace.ANONYMOUS_CLOSURE_FRAME_ = "> anonymous";
webdriver.stacktrace.CLOSURE_FUNCTION_CALL_PATTERN_ = webdriver.stacktrace.QUALIFIED_NAME_PATTERN_ + "(?:\\(.*\\))?" + webdriver.stacktrace.V8_ALIAS_PATTERN_;
webdriver.stacktrace.CLOSURE_STACK_FRAME_REGEXP_ = new RegExp("^> (?:" + webdriver.stacktrace.CLOSURE_FUNCTION_CALL_PATTERN_ + "(?: at )?)?(?:(.*:\\d+:\\d+)|" + webdriver.stacktrace.URL_PATTERN_ + ")?$");
webdriver.stacktrace.parseStackFrame_ = function(a) {
  var b = a.match(webdriver.stacktrace.V8_STACK_FRAME_REGEXP_);
  return b ? new webdriver.stacktrace.Frame(b[1] || b[2], b[3], b[4], b[5] || b[6]) : a.length > webdriver.stacktrace.MAX_FIREFOX_FRAMESTRING_LENGTH_ ? webdriver.stacktrace.parseLongFirefoxFrame_(a) : (b = a.match(webdriver.stacktrace.FIREFOX_STACK_FRAME_REGEXP_)) ? new webdriver.stacktrace.Frame("", b[1], "", b[2]) : (b = a.match(webdriver.stacktrace.CHAKRA_STACK_FRAME_REGEXP_)) ? new webdriver.stacktrace.Frame(b[1], b[2], "", b[3]) : a == webdriver.stacktrace.UNKNOWN_CLOSURE_FRAME_ || a == webdriver.stacktrace.ANONYMOUS_CLOSURE_FRAME_ ? 
  webdriver.stacktrace.ANONYMOUS_FRAME_ : (b = a.match(webdriver.stacktrace.CLOSURE_STACK_FRAME_REGEXP_)) ? new webdriver.stacktrace.Frame(b[1], b[2], b[3], b[4] || b[5]) : null;
};
webdriver.stacktrace.parseLongFirefoxFrame_ = function(a) {
  var b = a.indexOf("("), c = a.lastIndexOf("@"), d = a.lastIndexOf(":"), e = "";
  0 <= b && b < c && (e = a.substring(0, b));
  b = "";
  0 <= c && c + 1 < d && (b = a.substring(c + 1));
  return new webdriver.stacktrace.Frame("", e, "", b);
};
webdriver.stacktrace.getStack = function(a) {
  if (!a) {
    return "";
  }
  var b = a.stack || a.stackTrace || "";
  a += "\n";
  goog.string.startsWith(b, a) && (b = b.substring(a.length));
  return b;
};
webdriver.stacktrace.format = function(a) {
  var b = webdriver.stacktrace.getStack(a), b = webdriver.stacktrace.parse_(b), c = function(a) {
    return "    at <anonymous>" === a.toString();
  };
  if (b.length && goog.array.every(b, c)) {
    return a;
  }
  c = "";
  c = a.message ? (a.name ? a.name + ": " : "") + a.message : a.toString();
  a.stack = c + "\n" + b.join("\n");
  return a;
};
webdriver.stacktrace.parse_ = function(a) {
  if (!a) {
    return[];
  }
  a = a.replace(/\s*$/, "").split("\n");
  for (var b = [], c = 0;c < a.length;c++) {
    var d = webdriver.stacktrace.parseStackFrame_(a[c]);
    b.push(d || webdriver.stacktrace.ANONYMOUS_FRAME_);
  }
  return b;
};
webdriver.stacktrace.get = function() {
  return(new webdriver.stacktrace.Snapshot(1)).getStacktrace();
};
/*
 Portions of this code are from the Dojo toolkit, received under the
 BSD License:
 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 Redistributions of source code must retain the above copyright notice,
     this list of conditions and the following disclaimer.
 Redistributions in binary form must reproduce the above copyright notice,
     this list of conditions and the following disclaimer in the documentation
     and/or other materials provided with the distribution.
 Neither the name of the Dojo Foundation nor the names of its contributors
     may be used to endorse or promote products derived from this software
     without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 POSSIBILITY OF SUCH DAMAGE.
*/
webdriver.promise = {};
webdriver.promise.LONG_STACK_TRACES = !1;
webdriver.promise.captureStackTrace = function(a, b, c) {
  b = Error(b);
  b.name = a;
  Error.captureStackTrace ? Error.captureStackTrace(b, c) : (a = webdriver.stacktrace.getStack(b), b.stack = b.toString(), a && (b.stack += "\n" + a));
  return b;
};
webdriver.promise.CancellationError = function(a) {
  goog.debug.Error.call(this, a);
  this.name = "CancellationError";
};
goog.inherits(webdriver.promise.CancellationError, goog.debug.Error);
webdriver.promise.CancellationError.wrap = function(a, b) {
  if (a instanceof webdriver.promise.CancellationError) {
    return a;
  }
  if (b) {
    var c = b;
    a && (c += ": " + a);
    return new webdriver.promise.CancellationError(c);
  }
  a && (c = a + "");
  return new webdriver.promise.CancellationError(c);
};
webdriver.promise.Thenable = function() {
};
webdriver.promise.Thenable.prototype.cancel = function(a) {
};
webdriver.promise.Thenable.prototype.isPending = function() {
};
webdriver.promise.Thenable.prototype.then = function(a, b) {
};
webdriver.promise.Thenable.prototype.thenCatch = function(a) {
};
webdriver.promise.Thenable.prototype.thenFinally = function(a) {
};
webdriver.promise.Thenable.IMPLEMENTED_BY_PROP_ = "$webdriver_Thenable";
webdriver.promise.Thenable.addImplementation = function(a) {
  a.prototype.then = a.prototype.then;
  try {
    Object.defineProperty(a.prototype, webdriver.promise.Thenable.IMPLEMENTED_BY_PROP_, {value:!0, enumerable:!1});
  } catch (b) {
    a.prototype[webdriver.promise.Thenable.IMPLEMENTED_BY_PROP_] = !0;
  }
};
webdriver.promise.Thenable.isImplementation = function(a) {
  if (!a) {
    return!1;
  }
  try {
    return!!a[webdriver.promise.Thenable.IMPLEMENTED_BY_PROP_];
  } catch (b) {
    return!1;
  }
};
webdriver.promise.Promise = function(a, b) {
  goog.getUid(this);
  this.flow_ = b || webdriver.promise.controlFlow();
  this.stack_ = null;
  webdriver.promise.LONG_STACK_TRACES && (this.stack_ = webdriver.promise.captureStackTrace("Promise", "new", webdriver.promise.Promise));
  this.callbacks_ = this.parent_ = null;
  this.state_ = webdriver.promise.Promise.State_.PENDING;
  this.pendingNotifications_ = this.handled_ = !1;
  this.value_ = void 0;
  try {
    var c = this;
    a(function(a) {
      c.resolve_(webdriver.promise.Promise.State_.FULFILLED, a);
    }, function(a) {
      c.resolve_(webdriver.promise.Promise.State_.REJECTED, a);
    });
  } catch (d) {
    this.resolve_(webdriver.promise.Promise.State_.REJECTED, d);
  }
};
webdriver.promise.Thenable.addImplementation(webdriver.promise.Promise);
webdriver.promise.Promise.prototype.toString = function() {
  return "Promise::" + goog.getUid(this) + ' {[[PromiseStatus]]: "' + this.state_ + '"}';
};
webdriver.promise.Promise.State_ = {PENDING:"pending", BLOCKED:"blocked", REJECTED:"rejected", FULFILLED:"fulfilled"};
webdriver.promise.Promise.prototype.resolve_ = function(a, b) {
  if (webdriver.promise.Promise.State_.PENDING === this.state_) {
    if (b === this) {
      throw new TypeError("A promise may not resolve to itself");
    }
    this.parent_ = null;
    this.state_ = webdriver.promise.Promise.State_.BLOCKED;
    if (webdriver.promise.Thenable.isImplementation(b)) {
      b.then(this.unblockAndResolve_.bind(this, webdriver.promise.Promise.State_.FULFILLED), this.unblockAndResolve_.bind(this, webdriver.promise.Promise.State_.REJECTED));
    } else {
      if (goog.isObject(b)) {
        try {
          var c = b.then;
        } catch (d) {
          this.state_ = webdriver.promise.Promise.State_.REJECTED;
          this.value_ = d;
          this.scheduleNotifications_();
          return;
        }
        if ("function" === typeof c) {
          this.invokeThen_(b, c);
          return;
        }
      }
      a === webdriver.promise.Promise.State_.REJECTED && webdriver.promise.isError_(b) && b.stack && this.stack_ && (b.stack += "\nFrom: " + (this.stack_.stack || this.stack_));
      this.state_ = a;
      this.value_ = b;
      this.scheduleNotifications_();
    }
  }
};
webdriver.promise.Promise.prototype.invokeThen_ = function(a, b) {
  var c = !1, d = this, e = function(a) {
    c || (c = !0, d.unblockAndResolve_(webdriver.promise.Promise.State_.FULFILLED, a));
  }, f = function(a) {
    c || (c = !0, d.unblockAndResolve_(webdriver.promise.Promise.State_.REJECTED, a));
  };
  try {
    b.call(a, e, f);
  } catch (g) {
    f(g);
  }
};
webdriver.promise.Promise.prototype.unblockAndResolve_ = function(a, b) {
  this.state_ === webdriver.promise.Promise.State_.BLOCKED && (this.state_ = webdriver.promise.Promise.State_.PENDING, this.resolve_(a, b));
};
webdriver.promise.Promise.prototype.scheduleNotifications_ = function() {
  if (!this.pendingNotifications_) {
    this.pendingNotifications_ = !0;
    this.flow_.suspend_();
    var a;
    this.handled_ || this.state_ !== webdriver.promise.Promise.State_.REJECTED || this.value_ instanceof webdriver.promise.CancellationError || (a = this.flow_.getActiveFrame_(), a.pendingRejection = !0);
    this.callbacks_ && this.callbacks_.length && (a = this.flow_.getSchedulingFrame_(), goog.array.forEach(this.callbacks_, function(b) {
      b.frame_.getParent() || a.addChild(b.frame_);
    }));
    goog.async.run(goog.bind(this.notifyAll_, this, a));
  }
};
webdriver.promise.Promise.prototype.notifyAll_ = function(a) {
  this.flow_.resume_();
  this.pendingNotifications_ = !1;
  this.handled_ || this.state_ !== webdriver.promise.Promise.State_.REJECTED || this.value_ instanceof webdriver.promise.CancellationError || this.flow_.abortFrame_(this.value_, a);
  this.callbacks_ && (a = this.callbacks_, this.callbacks_ = null, goog.array.forEach(a, this.notify_, this));
};
webdriver.promise.Promise.prototype.notify_ = function(a) {
  a.notify(this.state_, this.value_);
};
webdriver.promise.Promise.prototype.cancel = function(a) {
  this.isPending() && (this.parent_ ? this.parent_.cancel(a) : this.resolve_(webdriver.promise.Promise.State_.REJECTED, webdriver.promise.CancellationError.wrap(a)));
};
webdriver.promise.Promise.prototype.isPending = function() {
  return this.state_ === webdriver.promise.Promise.State_.PENDING;
};
webdriver.promise.Promise.prototype.then = function(a, b) {
  return this.addCallback_(a, b, "then", webdriver.promise.Promise.prototype.then);
};
webdriver.promise.Promise.prototype.thenCatch = function(a) {
  return this.addCallback_(null, a, "thenCatch", webdriver.promise.Promise.prototype.thenCatch);
};
webdriver.promise.Promise.prototype.thenFinally = function(a) {
  var b, c = !1;
  return this.then(function() {
    return a();
  }, function(d) {
    b = d;
    c = !0;
    return a();
  }).then(function() {
    if (c) {
      throw b;
    }
  });
};
webdriver.promise.Promise.prototype.addCallback_ = function(a, b, c, d) {
  if (!goog.isFunction(a) && !goog.isFunction(b)) {
    return this;
  }
  this.handled_ = !0;
  a = new webdriver.promise.Callback_(this, a, b, c, d);
  this.callbacks_ || (this.callbacks_ = []);
  this.callbacks_.push(a);
  this.state_ !== webdriver.promise.Promise.State_.PENDING && this.state_ !== webdriver.promise.Promise.State_.BLOCKED && (this.flow_.getSchedulingFrame_().addChild(a.frame_), this.scheduleNotifications_());
  return a.promise;
};
webdriver.promise.Deferred = function(a) {
  var b, c;
  this.promise = new webdriver.promise.Promise(function(a, d) {
    b = a;
    c = d;
  }, a);
  var d = this, e = function(a) {
    if (a === d) {
      throw new TypeError("May not resolve a Deferred with itself");
    }
  };
  this.fulfill = function(a) {
    e(a);
    b(a);
  };
  this.reject = function(a) {
    e(a);
    c(a);
  };
};
webdriver.promise.Thenable.addImplementation(webdriver.promise.Deferred);
webdriver.promise.Deferred.prototype.isPending = function() {
  return this.promise.isPending();
};
webdriver.promise.Deferred.prototype.cancel = function(a) {
  this.promise.cancel(a);
};
webdriver.promise.Deferred.prototype.then = function(a, b) {
  return this.promise.then(a, b);
};
webdriver.promise.Deferred.prototype.thenCatch = function(a) {
  return this.promise.thenCatch(a);
};
webdriver.promise.Deferred.prototype.thenFinally = function(a) {
  return this.promise.thenFinally(a);
};
webdriver.promise.isError_ = function(a) {
  return a instanceof Error || goog.isObject(a) && (goog.isString(a.message) || a.isJsUnitException);
};
webdriver.promise.isPromise = function(a) {
  return!!a && goog.isObject(a) && "function" === typeof a.then;
};
webdriver.promise.delayed = function(a) {
  var b;
  return(new webdriver.promise.Promise(function(c) {
    b = setTimeout(function() {
      b = null;
      c();
    }, a);
  })).thenCatch(function(a) {
    clearTimeout(b);
    b = null;
    throw a;
  });
};
webdriver.promise.defer = function() {
  return new webdriver.promise.Deferred;
};
webdriver.promise.fulfilled = function(a) {
  return a instanceof webdriver.promise.Promise ? a : new webdriver.promise.Promise(function(b) {
    b(a);
  });
};
webdriver.promise.rejected = function(a) {
  return a instanceof webdriver.promise.Promise ? a : new webdriver.promise.Promise(function(b, c) {
    c(a);
  });
};
webdriver.promise.checkedNodeCall = function(a, b) {
  var c = goog.array.slice(arguments, 1);
  return new webdriver.promise.Promise(function(b, e) {
    try {
      c.push(function(a, c) {
        a ? e(a) : b(c);
      }), a.apply(void 0, c);
    } catch (f) {
      e(f);
    }
  });
};
webdriver.promise.when = function(a, b, c) {
  return webdriver.promise.Thenable.isImplementation(a) ? a.then(b, c) : (new webdriver.promise.Promise(function(b, c) {
    webdriver.promise.asap(a, b, c);
  })).then(b, c);
};
webdriver.promise.asap = function(a, b, c) {
  webdriver.promise.isPromise(a) ? a.then(b, c) : a && goog.isObject(a) && goog.isFunction(a.addCallbacks) ? a.addCallbacks(b, c) : b && b(a);
};
webdriver.promise.all = function(a) {
  return new webdriver.promise.Promise(function(b, c) {
    var d = a.length, e = [];
    if (d) {
      for (var f = d, g = function(a, c) {
        e[a] = c;
        f--;
        0 == f && b(e);
      }, h = 0;h < d;++h) {
        webdriver.promise.asap(a[h], goog.partial(g, h), c);
      }
    } else {
      b(e);
    }
  });
};
webdriver.promise.map = function(a, b, c) {
  return webdriver.promise.fulfilled(a).then(function(a) {
    goog.asserts.assertNumber(a.length, "not an array like value");
    return new webdriver.promise.Promise(function(e, f) {
      var g = a.length, h = Array(g);
      (function l(m) {
        for (;m < g && !(m in a);m++) {
        }
        if (m >= g) {
          e(h);
        } else {
          try {
            webdriver.promise.asap(b.call(c, a[m], m, a), function(a) {
              h[m] = a;
              l(m + 1);
            }, f);
          } catch (n) {
            f(n);
          }
        }
      })(0);
    });
  });
};
webdriver.promise.filter = function(a, b, c) {
  return webdriver.promise.fulfilled(a).then(function(a) {
    goog.asserts.assertNumber(a.length, "not an array like value");
    return new webdriver.promise.Promise(function(e, f) {
      var g = a.length, h = [], k = 0;
      (function m(n) {
        for (;n < g && !(n in a);n++) {
        }
        if (n >= g) {
          e(h);
        } else {
          try {
            var p = a[n], q = b.call(c, p, n, a);
            webdriver.promise.asap(q, function(a) {
              a && (h[k++] = p);
              m(n + 1);
            }, f);
          } catch (r) {
            f(r);
          }
        }
      })(0);
    });
  });
};
webdriver.promise.fullyResolved = function(a) {
  return webdriver.promise.isPromise(a) ? webdriver.promise.when(a, webdriver.promise.fullyResolveValue_) : webdriver.promise.fullyResolveValue_(a);
};
webdriver.promise.fullyResolveValue_ = function(a) {
  switch(goog.typeOf(a)) {
    case "array":
      return webdriver.promise.fullyResolveKeys_(a);
    case "object":
      return webdriver.promise.isPromise(a) ? a : goog.isNumber(a.nodeType) && goog.isObject(a.ownerDocument) && goog.isNumber(a.ownerDocument.nodeType) ? webdriver.promise.fulfilled(a) : webdriver.promise.fullyResolveKeys_(a);
    default:
      return webdriver.promise.fulfilled(a);
  }
};
webdriver.promise.fullyResolveKeys_ = function(a) {
  var b = goog.isArray(a), c = b ? a.length : goog.object.getCount(a);
  if (!c) {
    return webdriver.promise.fulfilled(a);
  }
  var d = 0;
  return new webdriver.promise.Promise(function(e, f) {
    (b ? function(a, b) {
      for (var c = a.length, d = 0;d < c;++d) {
        b.call(null, a[d], d, a);
      }
    } : goog.object.forEach)(a, function(b, h) {
      var k = goog.typeOf(b);
      "array" != k && "object" != k ? ++d == c && e(a) : webdriver.promise.fullyResolved(b).then(function(b) {
        a[h] = b;
        ++d == c && e(a);
      }, f);
    });
  });
};
webdriver.promise.ControlFlow = function() {
  webdriver.EventEmitter.call(this);
  goog.getUid(this);
  this.hold_ = this.eventLoopTask_ = this.shutdownTask_ = this.schedulingFrame_ = this.activeFrame_ = null;
  this.yieldCount_ = 0;
};
goog.inherits(webdriver.promise.ControlFlow, webdriver.EventEmitter);
webdriver.promise.ControlFlow.EventType = {IDLE:"idle", RESET:"reset", SCHEDULE_TASK:"scheduleTask", UNCAUGHT_EXCEPTION:"uncaughtException"};
webdriver.promise.ControlFlow.prototype.toString = function() {
  return this.getSchedule();
};
webdriver.promise.ControlFlow.prototype.reset = function() {
  this.schedulingFrame_ = this.activeFrame_ = null;
  this.emit(webdriver.promise.ControlFlow.EventType.RESET);
  this.removeAllListeners();
  this.cancelShutdown_();
  this.cancelEventLoop_();
};
webdriver.promise.ControlFlow.prototype.getHistory = function() {
  return[];
};
webdriver.promise.ControlFlow.prototype.clearHistory = function() {
};
webdriver.promise.ControlFlow.prototype.annotateError = function(a) {
  return a;
};
webdriver.promise.ControlFlow.prototype.getSchedule = function(a) {
  function b(c, f, g) {
    var h = c.toString();
    g && (h = "(pending) " + h);
    c === d && (h = "(active) " + h);
    c instanceof webdriver.promise.Frame_ ? (c.getPendingTask() && (h += "\n" + b(c.getPendingTask(), "| ", !0)), c.children_ && goog.array.forEach(c.children_, function(a) {
      c.getPendingTask() && c.getPendingTask().getFrame() === a || (h += "\n" + b(a, "| "));
    })) : (a && c.promise.stack_ && (h += "\n| " + (c.promise.stack_.stack || c.promise.stack_).replace(/\n/g, "\n| ")), c.getFrame() && (h += "\n" + b(c.getFrame(), "| ")));
    return f + h.replace(/\n/g, "\n" + f);
  }
  var c = "ControlFlow::" + goog.getUid(this), d = this.activeFrame_;
  return d ? c + "\n" + b(d.getRoot(), "| ") : c;
};
webdriver.promise.ControlFlow.prototype.getActiveFrame_ = function() {
  this.cancelShutdown_();
  this.activeFrame_ || (this.activeFrame_ = new webdriver.promise.Frame_(this), this.activeFrame_.once(webdriver.promise.Frame_.ERROR_EVENT, this.abortNow_, this), this.scheduleEventLoopStart_());
  return this.activeFrame_;
};
webdriver.promise.ControlFlow.prototype.getSchedulingFrame_ = function() {
  return this.schedulingFrame_ || this.getActiveFrame_();
};
webdriver.promise.ControlFlow.prototype.execute = function(a, b) {
  webdriver.promise.isGenerator(a) && (a = goog.partial(webdriver.promise.consume, a));
  this.hold_ || (this.hold_ = setInterval(goog.nullFunction, 2147483647));
  var c = b || "<anonymous>", d = new webdriver.promise.Task_(this, a, c);
  d.promise.stack_ = webdriver.promise.captureStackTrace("Task", c, webdriver.promise.ControlFlow.prototype.execute);
  this.getSchedulingFrame_().addChild(d);
  this.emit(webdriver.promise.ControlFlow.EventType.SCHEDULE_TASK, b);
  this.scheduleEventLoopStart_();
  return d.promise;
};
webdriver.promise.ControlFlow.prototype.timeout = function(a, b) {
  return this.execute(function() {
    return webdriver.promise.delayed(a);
  }, b);
};
webdriver.promise.ControlFlow.prototype.wait = function(a, b, c) {
  var d = b || 0;
  if (!goog.isNumber(d) || 0 > d) {
    throw TypeError("timeout must be a number >= 0: " + d);
  }
  if (webdriver.promise.isPromise(a)) {
    return this.execute(function() {
      return d ? new webdriver.promise.Promise(function(b, e) {
        var h = goog.now(), k = setTimeout(function() {
          k = null;
          e(Error((c ? c + "\n" : "") + "Timed out waiting for promise to resolve after " + (goog.now() - h) + "ms"));
        }, d);
        a.then(function(a) {
          k && clearTimeout(k);
          b(a);
        }, function(a) {
          k && clearTimeout(k);
          e(a);
        });
      }) : a;
    }, c || "<anonymous wait: promise resolution>");
  }
  if (!goog.isFunction(a)) {
    throw TypeError("Invalid condition; must be a function or promise: " + goog.typeOf(a));
  }
  webdriver.promise.isGenerator(a) && (a = goog.partial(webdriver.promise.consume, a));
  var e = this;
  return this.execute(function() {
    var b = goog.now();
    return new webdriver.promise.Promise(function(g, h) {
      function k() {
        e.resume_();
        e.execute(a).then(function(a) {
          var m = goog.now() - b;
          a ? g(a) : m >= d ? h(Error((c ? c + "\n" : "") + "Wait timed out after " + m + "ms")) : (e.suspend_(), setTimeout(k, 0));
        }, h);
      }
      e.suspend_();
      k();
    });
  }, c || "<anonymous wait>");
};
webdriver.promise.ControlFlow.prototype.await = function(a) {
  return this.execute(function() {
    return a;
  });
};
webdriver.promise.ControlFlow.prototype.scheduleEventLoopStart_ = function() {
  this.eventLoopTask_ || this.yieldCount_ || !this.activeFrame_ || this.activeFrame_.getPendingTask() || (this.eventLoopTask_ = new webdriver.promise.MicroTask_(this.runEventLoop_, this));
};
webdriver.promise.ControlFlow.prototype.cancelEventLoop_ = function() {
  this.eventLoopTask_ && (this.eventLoopTask_.cancel(), this.eventLoopTask_ = null);
};
webdriver.promise.ControlFlow.prototype.suspend_ = function() {
  this.yieldCount_ += 1;
  this.cancelEventLoop_();
};
webdriver.promise.ControlFlow.prototype.resume_ = function() {
  --this.yieldCount_;
  !this.yieldCount_ && this.activeFrame_ && this.scheduleEventLoopStart_();
};
webdriver.promise.ControlFlow.prototype.runEventLoop_ = function() {
  this.eventLoopTask_ = null;
  if (!this.yieldCount_) {
    if (!this.activeFrame_) {
      this.commenceShutdown_();
    } else {
      if (!this.activeFrame_.getPendingTask()) {
        var a = this.getNextTask_();
        if (a) {
          var b = this.activeFrame_, c = goog.bind(this.scheduleEventLoopStart_, this), d = function(d) {
            b.setPendingTask(null);
            a.setFrame(null);
            a.fulfill(d);
            c();
          }, e = function(d) {
            b.setPendingTask(null);
            a.setFrame(null);
            a.reject(d);
            c();
          };
          b.setPendingTask(a);
          var f = new webdriver.promise.Frame_(this);
          a.setFrame(f);
          this.runInFrame_(f, a.execute, function(a) {
            webdriver.promise.asap(a, d, e);
          }, e, !0);
        }
      }
    }
  }
};
webdriver.promise.ControlFlow.prototype.getNextTask_ = function() {
  var a = this.activeFrame_, b = a.getFirstChild();
  if (!b) {
    return a.pendingCallback || a.isBlocked_ || this.resolveFrame_(a), null;
  }
  if (b instanceof webdriver.promise.Frame_) {
    return this.activeFrame_ = b, this.getNextTask_();
  }
  a.removeChild(b);
  return b.isPending() ? b : this.getNextTask_();
};
webdriver.promise.ControlFlow.prototype.resolveFrame_ = function(a) {
  this.activeFrame_ === a && (this.activeFrame_ = a.getParent());
  a.getParent() && a.getParent().removeChild(a);
  a.emit(webdriver.promise.Frame_.CLOSE_EVENT);
  this.activeFrame_ ? this.scheduleEventLoopStart_() : this.commenceShutdown_();
};
webdriver.promise.ControlFlow.prototype.abortFrame_ = function(a, b) {
  if (this.activeFrame_) {
    var c = this.activeFrame_.getParent();
    c && c.removeChild(this.activeFrame_);
    var d = this.activeFrame_;
    this.activeFrame_ = c;
    d.abort(a);
  } else {
    this.abortNow_(a);
  }
};
webdriver.promise.ControlFlow.prototype.runInFrame_ = function(a, b, c, d, e) {
  function f(a) {
    return(!a.children_ || !a.children_.length) && !a.pendingRejection;
  }
  function g(b) {
    var c = a.getParent();
    c && (c.removeChild(a), goog.async.run(function() {
      f(c) && c !== h.activeFrame_ && c.emit(webdriver.promise.Frame_.CLOSE_EVENT);
    }), h.scheduleEventLoopStart_());
    b && a.cancelRemainingTasks(webdriver.promise.CancellationError.wrap(b, "Tasks cancelled due to uncaught error"));
    h.activeFrame_ = k;
  }
  var h = this, k = this.activeFrame_;
  try {
    this.activeFrame_ === a || a.getParent() || this.activeFrame_.addChild(a);
    e && (this.activeFrame_ = a);
    try {
      this.schedulingFrame_ = a;
      webdriver.promise.pushFlow_(this);
      var l = b();
    } finally {
      webdriver.promise.popFlow_(), this.schedulingFrame_ = null;
    }
    a.isLocked_ = !0;
    if (!f(a) || e && webdriver.promise.isPromise(l)) {
      var m;
      webdriver.promise.isPromise(l) ? (a.isBlocked_ = !0, b = function() {
        a.isBlocked_ = !1;
        m = new webdriver.promise.MicroTask_(function() {
          f(a) && (g(), c(l));
        });
      }, l.then(b, b)) : webdriver.promise.Thenable.isImplementation(l) && l.thenCatch(goog.nullFunction);
      a.once(webdriver.promise.Frame_.CLOSE_EVENT, function() {
        m && m.cancel();
        f(a) && g();
        c(l);
      }).once(webdriver.promise.Frame_.ERROR_EVENT, function(a) {
        m && m.cancel();
        webdriver.promise.Thenable.isImplementation(l) && l.isPending() && l.cancel(a);
        d(a);
      });
    } else {
      g(), c(l);
    }
  } catch (n) {
    g(n), d(n);
  }
};
webdriver.promise.ControlFlow.prototype.commenceShutdown_ = function() {
  this.shutdownTask_ || (this.cancelEventLoop_(), this.shutdownTask_ = new webdriver.promise.MicroTask_(this.shutdown_, this));
};
webdriver.promise.ControlFlow.prototype.cancelHold_ = function() {
  this.hold_ && (clearInterval(this.hold_), this.hold_ = null);
};
webdriver.promise.ControlFlow.prototype.shutdown_ = function() {
  this.cancelHold_();
  this.shutdownTask_ = null;
  this.emit(webdriver.promise.ControlFlow.EventType.IDLE);
};
webdriver.promise.ControlFlow.prototype.cancelShutdown_ = function() {
  this.shutdownTask_ && (this.shutdownTask_.cancel(), this.shutdownTask_ = null);
};
webdriver.promise.ControlFlow.prototype.abortNow_ = function(a) {
  this.activeFrame_ = null;
  this.cancelShutdown_();
  this.cancelEventLoop_();
  this.cancelHold_();
  this.listeners(webdriver.promise.ControlFlow.EventType.UNCAUGHT_EXCEPTION).length ? this.emit(webdriver.promise.ControlFlow.EventType.UNCAUGHT_EXCEPTION, a) : goog.async.throwException(a);
};
webdriver.promise.MicroTask_ = function(a, b) {
  this.cancelled_ = !1;
  goog.async.run(function() {
    this.cancelled_ || a.call(b);
  }, this);
};
webdriver.promise.MicroTask_.prototype.cancel = function() {
  this.cancelled_ = !0;
};
webdriver.promise.Frame_ = function(a) {
  webdriver.EventEmitter.call(this);
  goog.getUid(this);
  this.flow_ = a;
  this.pendingTask_ = this.lastInsertedChild_ = this.children_ = this.parent_ = null;
  this.pendingRejection = this.pendingCallback = this.isBlocked_ = this.isLocked_ = !1;
  this.cancellationError_ = null;
};
goog.inherits(webdriver.promise.Frame_, webdriver.EventEmitter);
webdriver.promise.Frame_.CLOSE_EVENT = "close";
webdriver.promise.Frame_.ERROR_EVENT = "error";
webdriver.promise.Frame_.cancelChild_ = function(a, b) {
  b instanceof webdriver.promise.Frame_ ? b.cancelRemainingTasks(a) : (b.promise.callbacks_ = null, b.cancel(a));
};
webdriver.promise.Frame_.prototype.getParent = function() {
  return this.parent_;
};
webdriver.promise.Frame_.prototype.setParent = function(a) {
  this.parent_ = a;
};
webdriver.promise.Frame_.prototype.getRoot = function() {
  for (var a = this;a.parent_;) {
    a = a.parent_;
  }
  return a;
};
webdriver.promise.Frame_.prototype.abort = function(a) {
  this.cancellationError_ = webdriver.promise.CancellationError.wrap(a, "Task discarded due to a previous task failure");
  this.cancelRemainingTasks(this.cancellationError_);
  this.pendingCallback || this.emit(webdriver.promise.Frame_.ERROR_EVENT, a);
};
webdriver.promise.Frame_.prototype.cancelRemainingTasks = function(a) {
  this.children_ && goog.array.forEach(this.children_, function(b) {
    webdriver.promise.Frame_.cancelChild_(a, b);
  });
};
webdriver.promise.Frame_.prototype.getPendingTask = function() {
  return this.pendingTask_;
};
webdriver.promise.Frame_.prototype.setPendingTask = function(a) {
  this.pendingTask_ = a;
};
webdriver.promise.Frame_.prototype.isEmpty = function() {
  return!this.children_ || !this.children_.length;
};
webdriver.promise.Frame_.prototype.addChild = function(a) {
  if (this.cancellationError_) {
    webdriver.promise.Frame_.cancelChild_(this.cancellationError_, a);
  } else {
    if (this.children_ || (this.children_ = []), a.setParent(this), this.isLocked_ && a instanceof webdriver.promise.Frame_) {
      var b = 0;
      this.lastInsertedChild_ instanceof webdriver.promise.Frame_ && (b = goog.array.indexOf(this.children_, this.lastInsertedChild_), b += this.lastInsertedChild_.pendingCallback ? 1 : -1);
      goog.array.insertAt(this.children_, a, Math.max(b, 0));
      this.lastInsertedChild_ = a;
    } else {
      this.lastInsertedChild_ = a, this.children_.push(a);
    }
  }
};
webdriver.promise.Frame_.prototype.getFirstChild = function() {
  this.isLocked_ = !0;
  return this.children_ && this.children_[0];
};
webdriver.promise.Frame_.prototype.removeChild = function(a) {
  goog.asserts.assert(a.parent_ === this, "not a child of this frame");
  goog.asserts.assert(null !== this.children_, "frame has no children!");
  var b = goog.array.indexOf(this.children_, a);
  a.setParent(null);
  goog.array.removeAt(this.children_, b);
  this.lastInsertedChild_ === a && (this.lastInsertedChild_ = this.children_[b - 1] || null);
  this.children_.length || (this.children_ = null);
};
webdriver.promise.Frame_.prototype.toString = function() {
  return "Frame::" + goog.getUid(this);
};
webdriver.promise.Task_ = function(a, b, c) {
  webdriver.promise.Deferred.call(this, a);
  goog.getUid(this);
  this.execute = b;
  this.description_ = c;
  this.frame_ = this.parent_ = null;
};
goog.inherits(webdriver.promise.Task_, webdriver.promise.Deferred);
webdriver.promise.Task_.prototype.getFrame = function() {
  return this.frame_;
};
webdriver.promise.Task_.prototype.setFrame = function(a) {
  this.frame_ = a;
};
webdriver.promise.Task_.prototype.setParent = function(a) {
  goog.asserts.assert(goog.isNull(this.parent_) || goog.isNull(a), "parent already set");
  this.parent_ = a;
};
webdriver.promise.Task_.prototype.getDescription = function() {
  return this.description_;
};
webdriver.promise.Task_.prototype.toString = function() {
  return "Task::" + goog.getUid(this) + "<" + this.description_ + ">";
};
webdriver.promise.Callback_ = function(a, b, c, d, e) {
  webdriver.promise.Deferred.call(this, a.flow_);
  this.callback_ = b;
  this.errback_ = c;
  this.frame_ = new webdriver.promise.Frame_(a.flow_);
  this.frame_.pendingCallback = !0;
  this.promise.parent_ = a;
  webdriver.promise.LONG_STACK_TRACES && (this.promise.stack_ = webdriver.promise.captureStackTrace("Promise", d, e));
};
goog.inherits(webdriver.promise.Callback_, webdriver.promise.Deferred);
webdriver.promise.Callback_.prototype.notify = function(a, b) {
  var c = this.callback_, d = this.fulfill;
  a === webdriver.promise.Promise.State_.REJECTED && (c = this.errback_, d = this.reject);
  this.frame_.pendingCallback = !1;
  goog.isFunction(c) ? this.frame_.flow_.runInFrame_(this.frame_, goog.bind(c, void 0, b), this.fulfill, this.reject) : (this.frame_.getParent() && this.frame_.getParent().removeChild(this.frame_), d(b));
};
webdriver.promise.defaultFlow_ = new webdriver.promise.ControlFlow;
webdriver.promise.activeFlows_ = [];
webdriver.promise.setDefaultFlow = function(a) {
  if (webdriver.promise.activeFlows_.length) {
    throw Error("You may only change the default flow while it is active");
  }
  webdriver.promise.defaultFlow_ = a;
};
webdriver.promise.controlFlow = function() {
  return goog.array.peek(webdriver.promise.activeFlows_) || webdriver.promise.defaultFlow_;
};
webdriver.promise.pushFlow_ = function(a) {
  webdriver.promise.activeFlows_.push(a);
};
webdriver.promise.popFlow_ = function() {
  webdriver.promise.activeFlows_.pop();
};
webdriver.promise.createFlow = function(a) {
  var b = new webdriver.promise.ControlFlow;
  return b.execute(function() {
    return a(b);
  });
};
webdriver.promise.isGenerator = function(a) {
  return "GeneratorFunction" === a.constructor.name;
};
webdriver.promise.consume = function(a, b, c) {
  function d(a) {
    f(h.next, a);
  }
  function e(a) {
    f(h["throw"], a);
  }
  function f(a, b) {
    if (g.isPending()) {
      try {
        var c = a.call(h, b);
      } catch (f) {
        g.reject(f);
        return;
      }
      c.done ? g.fulfill(c.value) : webdriver.promise.asap(c.value, d, e);
    }
  }
  if (!webdriver.promise.isGenerator(a)) {
    throw new TypeError("Input is not a GeneratorFunction: " + a.constructor.name);
  }
  var g = webdriver.promise.defer(), h = a.apply(b, goog.array.slice(arguments, 2));
  d();
  return g.promise;
};
webdriver.until = {};
webdriver.until.Condition = function(a, b) {
  this.description_ = "Waiting " + a;
  this.fn = b;
};
webdriver.until.Condition.prototype.description = function() {
  return this.description_;
};
webdriver.until.ableToSwitchToFrame = function(a) {
  function b(a, b) {
    return a.switchTo().frame(b).then(function() {
      return!0;
    }, function(a) {
      if (a && a.code !== bot.ErrorCode.NO_SUCH_FRAME) {
        throw a;
      }
    });
  }
  var c;
  c = goog.isNumber(a) || a instanceof webdriver.WebElement ? b : function(c) {
    return c.findElements(a).then(function(a) {
      if (a.length) {
        return b(c, a[0]);
      }
    });
  };
  return new webdriver.until.Condition("to be able to switch to frame", c);
};
webdriver.until.alertIsPresent = function() {
  return new webdriver.until.Condition("for alert to be present", function(a) {
    return a.switchTo().alert().thenCatch(function(a) {
      if (a && a.code !== bot.ErrorCode.NO_SUCH_ALERT) {
        throw a;
      }
    });
  });
};
webdriver.until.titleIs = function(a) {
  return new webdriver.until.Condition("for title to be " + goog.string.quote(a), function(b) {
    return b.getTitle().then(function(b) {
      return b === a;
    });
  });
};
webdriver.until.titleContains = function(a) {
  return new webdriver.until.Condition("for title to contain " + goog.string.quote(a), function(b) {
    return b.getTitle().then(function(b) {
      return-1 !== b.indexOf(a);
    });
  });
};
webdriver.until.titleMatches = function(a) {
  return new webdriver.until.Condition("for title to match " + a, function(b) {
    return b.getTitle().then(function(b) {
      return a.test(b);
    });
  });
};
webdriver.until.elementLocated = function(a) {
  var b = goog.isFunction(a) ? "function()" : a + "";
  return new webdriver.until.Condition("element to be located by " + b, function(b) {
    return b.findElements(a).then(function(a) {
      return a[0];
    });
  });
};
webdriver.until.elementsLocated = function(a) {
  var b = goog.isFunction(a) ? "function()" : a + "";
  return new webdriver.until.Condition("at least one element to be located by " + b, function(b) {
    return b.findElements(a).then(function(a) {
      return 0 < a.length ? a : null;
    });
  });
};
webdriver.until.stalenessOf = function(a) {
  return new webdriver.until.Condition("element to become stale", function() {
    return a.getTagName().then(function() {
      return!1;
    }, function(a) {
      if (a.code === bot.ErrorCode.STALE_ELEMENT_REFERENCE) {
        return!0;
      }
      throw a;
    });
  });
};
webdriver.until.elementIsVisible = function(a) {
  return new webdriver.until.Condition("until element is visible", function() {
    return a.isDisplayed();
  });
};
webdriver.until.elementIsNotVisible = function(a) {
  return new webdriver.until.Condition("until element is not visible", function() {
    return a.isDisplayed().then(function(a) {
      return!a;
    });
  });
};
webdriver.until.elementIsEnabled = function(a) {
  return new webdriver.until.Condition("until element is enabled", function() {
    return a.isEnabled();
  });
};
webdriver.until.elementIsDisabled = function(a) {
  return new webdriver.until.Condition("until element is disabled", function() {
    return a.isEnabled().then(function(a) {
      return!a;
    });
  });
};
webdriver.until.elementIsSelected = function(a) {
  return new webdriver.until.Condition("until element is selected", function() {
    return a.isSelected();
  });
};
webdriver.until.elementIsNotSelected = function(a) {
  return new webdriver.until.Condition("until element is not selected", function() {
    return a.isSelected().then(function(a) {
      return!a;
    });
  });
};
webdriver.until.elementTextIs = function(a, b) {
  return new webdriver.until.Condition("until element text is", function() {
    return a.getText().then(function(a) {
      return a === b;
    });
  });
};
webdriver.until.elementTextContains = function(a, b) {
  return new webdriver.until.Condition("until element text contains", function() {
    return a.getText().then(function(a) {
      return-1 != a.indexOf(b);
    });
  });
};
webdriver.until.elementTextMatches = function(a, b) {
  return new webdriver.until.Condition("until element text matches", function() {
    return a.getText().then(function(a) {
      return b.test(a);
    });
  });
};
webdriver.WebDriver = function(a, b, c) {
  this.session_ = a;
  this.executor_ = b;
  this.flow_ = c || webdriver.promise.controlFlow();
  this.fileDetector_ = null;
};
webdriver.WebDriver.attachToSession = function(a, b, c) {
  return webdriver.WebDriver.acquireSession_(a, (new webdriver.Command(webdriver.CommandName.DESCRIBE_SESSION)).setParameter("sessionId", b), "WebDriver.attachToSession()", c);
};
webdriver.WebDriver.createSession = function(a, b, c) {
  return webdriver.WebDriver.acquireSession_(a, (new webdriver.Command(webdriver.CommandName.NEW_SESSION)).setParameter("desiredCapabilities", b), "WebDriver.createSession()", c);
};
webdriver.WebDriver.acquireSession_ = function(a, b, c, d) {
  d = d || webdriver.promise.controlFlow();
  c = d.execute(function() {
    return webdriver.WebDriver.executeCommand_(a, b).then(function(a) {
      bot.response.checkResponse(a);
      return new webdriver.Session(a.sessionId, a.value);
    });
  }, c);
  return new webdriver.WebDriver(c, a, d);
};
webdriver.WebDriver.toWireValue_ = function(a) {
  function b(a) {
    switch(goog.typeOf(a)) {
      case "array":
        return c(a, !0);
      case "object":
        if (a instanceof webdriver.WebElement) {
          return a.getId();
        }
        if (a instanceof webdriver.Serializable) {
          return webdriver.WebDriver.toWireValue_(a.serialize());
        }
        if (goog.isFunction(a.toJSON)) {
          return webdriver.WebDriver.toWireValue_(a.toJSON());
        }
        if (goog.isNumber(a.nodeType) && goog.isString(a.nodeName)) {
          throw new TypeError("Invalid argument type: " + a.nodeName + "(" + a.nodeType + ")");
        }
        return c(a, !1);
      case "function":
        return "" + a;
      case "undefined":
        return null;
      default:
        return a;
    }
  }
  function c(a, c) {
    var f = c ? a.length : goog.object.getCount(a), g = c ? Array(f) : {};
    if (!f) {
      return webdriver.promise.fulfilled(g);
    }
    var h = 0, k = webdriver.promise.defer();
    (c ? function(a, b) {
      for (var c = a.length, d = 0;d < c;d++) {
        b(a[d], d);
      }
    } : goog.object.forEach)(a, function(a, c) {
      function d(a) {
        g[c] = a;
        ++h === f && k.fulfill(g);
      }
      webdriver.promise.isPromise(a) ? a.then(webdriver.WebDriver.toWireValue_).then(d, k.reject) : webdriver.promise.asap(b(a), d, k.reject);
    });
    return k.promise;
  }
  return webdriver.promise.isPromise(a) ? a.then(webdriver.WebDriver.toWireValue_) : webdriver.promise.fulfilled(b(a));
};
webdriver.WebDriver.fromWireValue_ = function(a, b) {
  goog.isArray(b) ? b = goog.array.map(b, goog.partial(webdriver.WebDriver.fromWireValue_, a)) : b && goog.isObject(b) && !goog.isFunction(b) && (b = webdriver.WebElement.ELEMENT_KEY in b ? new webdriver.WebElement(a, b) : goog.object.map(b, goog.partial(webdriver.WebDriver.fromWireValue_, a)));
  return b;
};
webdriver.WebDriver.executeCommand_ = function(a, b) {
  return webdriver.WebDriver.toWireValue_(b.getParameters()).then(function(c) {
    b.setParameters(c);
    return webdriver.promise.checkedNodeCall(goog.bind(a.execute, a, b));
  });
};
webdriver.WebDriver.prototype.controlFlow = function() {
  return this.flow_;
};
webdriver.WebDriver.prototype.schedule = function(a, b) {
  function c() {
    if (!d.session_) {
      throw Error("This driver instance does not have a valid session ID (did you call WebDriver.quit()?) and may no longer be used.");
    }
  }
  var d = this;
  c();
  a.setParameter("sessionId", this.session_);
  var e = webdriver.WebDriver.toWireValue_(a.getParameters());
  e.thenCatch(goog.nullFunction);
  var f = this.executor_;
  return this.flow_.execute(function() {
    c();
    return e.then(function(b) {
      a.setParameters(b);
      return webdriver.promise.checkedNodeCall(goog.bind(f.execute, f, a));
    });
  }, b).then(function(a) {
    try {
      bot.response.checkResponse(a);
    } catch (b) {
      a = a.value;
      if (b.code === bot.ErrorCode.UNEXPECTED_ALERT_OPEN) {
        throw a = a && a.alert ? a.alert.text : "", new webdriver.UnhandledAlertError(b.message, a, new webdriver.Alert(d, a));
      }
      throw b;
    }
    return webdriver.WebDriver.fromWireValue_(d, a.value);
  });
};
webdriver.WebDriver.prototype.setFileDetector = function(a) {
  this.fileDetector_ = a;
};
webdriver.WebDriver.prototype.getSession = function() {
  return webdriver.promise.when(this.session_);
};
webdriver.WebDriver.prototype.getCapabilities = function() {
  return webdriver.promise.when(this.session_, function(a) {
    return a.getCapabilities();
  });
};
webdriver.WebDriver.prototype.quit = function() {
  return this.schedule(new webdriver.Command(webdriver.CommandName.QUIT), "WebDriver.quit()").thenFinally(goog.bind(function() {
    delete this.session_;
  }, this));
};
webdriver.WebDriver.prototype.actions = function() {
  return new webdriver.ActionSequence(this);
};
webdriver.WebDriver.prototype.touchActions = function() {
  return new webdriver.TouchSequence(this);
};
webdriver.WebDriver.prototype.executeScript = function(a, b) {
  goog.isFunction(a) && (a = "return (" + a + ").apply(null, arguments);");
  var c = 1 < arguments.length ? goog.array.slice(arguments, 1) : [];
  return this.schedule((new webdriver.Command(webdriver.CommandName.EXECUTE_SCRIPT)).setParameter("script", a).setParameter("args", c), "WebDriver.executeScript()");
};
webdriver.WebDriver.prototype.executeAsyncScript = function(a, b) {
  goog.isFunction(a) && (a = "return (" + a + ").apply(null, arguments);");
  return this.schedule((new webdriver.Command(webdriver.CommandName.EXECUTE_ASYNC_SCRIPT)).setParameter("script", a).setParameter("args", goog.array.slice(arguments, 1)), "WebDriver.executeScript()");
};
webdriver.WebDriver.prototype.call = function(a, b, c) {
  var d = goog.array.slice(arguments, 2);
  return this.flow_.execute(function() {
    return webdriver.promise.fullyResolved(d).then(function(c) {
      return webdriver.promise.isGenerator(a) ? (c.unshift(a, b), webdriver.promise.consume.apply(null, c)) : a.apply(b, c);
    });
  }, "WebDriver.call(" + (a.name || "function") + ")");
};
webdriver.WebDriver.prototype.wait = function(a, b, c) {
  if (webdriver.promise.isPromise(a)) {
    return this.flow_.wait(a, b, c);
  }
  var d = a;
  a instanceof webdriver.until.Condition && (c = c || a.description(), d = a.fn);
  var e = this;
  return this.flow_.wait(function() {
    return webdriver.promise.isGenerator(d) ? webdriver.promise.consume(d, null, [e]) : d(e);
  }, b, c);
};
webdriver.WebDriver.prototype.sleep = function(a) {
  return this.flow_.timeout(a, "WebDriver.sleep(" + a + ")");
};
webdriver.WebDriver.prototype.getWindowHandle = function() {
  return this.schedule(new webdriver.Command(webdriver.CommandName.GET_CURRENT_WINDOW_HANDLE), "WebDriver.getWindowHandle()");
};
webdriver.WebDriver.prototype.getAllWindowHandles = function() {
  return this.schedule(new webdriver.Command(webdriver.CommandName.GET_WINDOW_HANDLES), "WebDriver.getAllWindowHandles()");
};
webdriver.WebDriver.prototype.getPageSource = function() {
  return this.schedule(new webdriver.Command(webdriver.CommandName.GET_PAGE_SOURCE), "WebDriver.getAllWindowHandles()");
};
webdriver.WebDriver.prototype.close = function() {
  return this.schedule(new webdriver.Command(webdriver.CommandName.CLOSE), "WebDriver.close()");
};
webdriver.WebDriver.prototype.get = function(a) {
  return this.navigate().to(a);
};
webdriver.WebDriver.prototype.getCurrentUrl = function() {
  return this.schedule(new webdriver.Command(webdriver.CommandName.GET_CURRENT_URL), "WebDriver.getCurrentUrl()");
};
webdriver.WebDriver.prototype.getTitle = function() {
  return this.schedule(new webdriver.Command(webdriver.CommandName.GET_TITLE), "WebDriver.getTitle()");
};
webdriver.WebDriver.prototype.findElement = function(a) {
  if ("nodeType" in a && "ownerDocument" in a) {
    a = this.findDomElement_(a).then(function(a) {
      if (!a) {
        throw new bot.Error(bot.ErrorCode.NO_SUCH_ELEMENT, "Unable to locate element. Is WebDriver focused on its ownerDocument's frame?");
      }
      return a;
    });
  } else {
    if (a = webdriver.Locator.checkLocator(a), goog.isFunction(a)) {
      a = this.findElementInternal_(a, this);
    } else {
      var b = (new webdriver.Command(webdriver.CommandName.FIND_ELEMENT)).setParameter("using", a.using).setParameter("value", a.value);
      a = this.schedule(b, "WebDriver.findElement(" + a + ")");
    }
  }
  return new webdriver.WebElementPromise(this, a);
};
webdriver.WebDriver.prototype.findElementInternal_ = function(a, b) {
  return this.call(goog.partial(a, b)).then(function(a) {
    goog.isArray(a) && (a = a[0]);
    if (!(a instanceof webdriver.WebElement)) {
      throw new TypeError("Custom locator did not return a WebElement");
    }
    return a;
  });
};
webdriver.WebDriver.prototype.findDomElement_ = function(a) {
  var b = a.ownerDocument, c = b.$webdriver$ = b.$webdriver$ || {}, d = Math.floor(Math.random() * goog.now()).toString(36);
  c[d] = a;
  a[d] = d;
  a = this.executeScript(function(a) {
    var b = document.$webdriver$;
    return b ? (b = b[a]) && b[a] === a ? b : null : null;
  }, d);
  a.thenFinally(function() {
    delete c[d];
  });
  return a;
};
webdriver.WebDriver.prototype.isElementPresent = function(a) {
  return "nodeType" in a && "ownerDocument" in a ? this.findDomElement_(a).then(function(a) {
    return!!a;
  }) : this.findElements.apply(this, arguments).then(function(a) {
    return!!a.length;
  });
};
webdriver.WebDriver.prototype.findElements = function(a) {
  a = webdriver.Locator.checkLocator(a);
  if (goog.isFunction(a)) {
    return this.findElementsInternal_(a, this);
  }
  var b = (new webdriver.Command(webdriver.CommandName.FIND_ELEMENTS)).setParameter("using", a.using).setParameter("value", a.value);
  return this.schedule(b, "WebDriver.findElements(" + a + ")");
};
webdriver.WebDriver.prototype.findElementsInternal_ = function(a, b) {
  return this.call(goog.partial(a, b)).then(function(a) {
    return a instanceof webdriver.WebElement ? [a] : goog.isArray(a) ? goog.array.filter(a, function(a) {
      return a instanceof webdriver.WebElement;
    }) : [];
  });
};
webdriver.WebDriver.prototype.takeScreenshot = function() {
  return this.schedule(new webdriver.Command(webdriver.CommandName.SCREENSHOT), "WebDriver.takeScreenshot()");
};
webdriver.WebDriver.prototype.manage = function() {
  return new webdriver.WebDriver.Options(this);
};
webdriver.WebDriver.prototype.navigate = function() {
  return new webdriver.WebDriver.Navigation(this);
};
webdriver.WebDriver.prototype.switchTo = function() {
  return new webdriver.WebDriver.TargetLocator(this);
};
webdriver.WebDriver.Navigation = function(a) {
  this.driver_ = a;
};
webdriver.WebDriver.Navigation.prototype.to = function(a) {
  return this.driver_.schedule((new webdriver.Command(webdriver.CommandName.GET)).setParameter("url", a), "WebDriver.navigate().to(" + a + ")");
};
webdriver.WebDriver.Navigation.prototype.back = function() {
  return this.driver_.schedule(new webdriver.Command(webdriver.CommandName.GO_BACK), "WebDriver.navigate().back()");
};
webdriver.WebDriver.Navigation.prototype.forward = function() {
  return this.driver_.schedule(new webdriver.Command(webdriver.CommandName.GO_FORWARD), "WebDriver.navigate().forward()");
};
webdriver.WebDriver.Navigation.prototype.refresh = function() {
  return this.driver_.schedule(new webdriver.Command(webdriver.CommandName.REFRESH), "WebDriver.navigate().refresh()");
};
webdriver.WebDriver.Options = function(a) {
  this.driver_ = a;
};
webdriver.WebDriver.Options.prototype.addCookie = function(a, b, c, d, e, f) {
  if (/[;=]/.test(a)) {
    throw Error('Invalid cookie name "' + a + '"');
  }
  if (/;/.test(b)) {
    throw Error('Invalid cookie value "' + b + '"');
  }
  var g = a + "=" + b + (d ? ";domain=" + d : "") + (c ? ";path=" + c : "") + (e ? ";secure" : ""), h;
  goog.isDef(f) && (goog.isNumber(f) ? h = new Date(f) : (h = f, f = h.getTime()), g += ";expires=" + h.toUTCString(), h = Math.floor(f / 1E3));
  return this.driver_.schedule((new webdriver.Command(webdriver.CommandName.ADD_COOKIE)).setParameter("cookie", {name:a, value:b, path:c, domain:d, secure:!!e, expiry:h}), "WebDriver.manage().addCookie(" + g + ")");
};
webdriver.WebDriver.Options.prototype.deleteAllCookies = function() {
  return this.driver_.schedule(new webdriver.Command(webdriver.CommandName.DELETE_ALL_COOKIES), "WebDriver.manage().deleteAllCookies()");
};
webdriver.WebDriver.Options.prototype.deleteCookie = function(a) {
  return this.driver_.schedule((new webdriver.Command(webdriver.CommandName.DELETE_COOKIE)).setParameter("name", a), "WebDriver.manage().deleteCookie(" + a + ")");
};
webdriver.WebDriver.Options.prototype.getCookies = function() {
  return this.driver_.schedule(new webdriver.Command(webdriver.CommandName.GET_ALL_COOKIES), "WebDriver.manage().getCookies()");
};
webdriver.WebDriver.Options.prototype.getCookie = function(a) {
  return this.getCookies().then(function(b) {
    return goog.array.find(b, function(b) {
      return b && b.name == a;
    });
  });
};
webdriver.WebDriver.Options.prototype.logs = function() {
  return new webdriver.WebDriver.Logs(this.driver_);
};
webdriver.WebDriver.Options.prototype.timeouts = function() {
  return new webdriver.WebDriver.Timeouts(this.driver_);
};
webdriver.WebDriver.Options.prototype.window = function() {
  return new webdriver.WebDriver.Window(this.driver_);
};
webdriver.WebDriver.Timeouts = function(a) {
  this.driver_ = a;
};
webdriver.WebDriver.Timeouts.prototype.implicitlyWait = function(a) {
  return this.driver_.schedule((new webdriver.Command(webdriver.CommandName.IMPLICITLY_WAIT)).setParameter("ms", 0 > a ? 0 : a), "WebDriver.manage().timeouts().implicitlyWait(" + a + ")");
};
webdriver.WebDriver.Timeouts.prototype.setScriptTimeout = function(a) {
  return this.driver_.schedule((new webdriver.Command(webdriver.CommandName.SET_SCRIPT_TIMEOUT)).setParameter("ms", 0 > a ? 0 : a), "WebDriver.manage().timeouts().setScriptTimeout(" + a + ")");
};
webdriver.WebDriver.Timeouts.prototype.pageLoadTimeout = function(a) {
  return this.driver_.schedule((new webdriver.Command(webdriver.CommandName.SET_TIMEOUT)).setParameter("type", "page load").setParameter("ms", a), "WebDriver.manage().timeouts().pageLoadTimeout(" + a + ")");
};
webdriver.WebDriver.Window = function(a) {
  this.driver_ = a;
};
webdriver.WebDriver.Window.prototype.getPosition = function() {
  return this.driver_.schedule((new webdriver.Command(webdriver.CommandName.GET_WINDOW_POSITION)).setParameter("windowHandle", "current"), "WebDriver.manage().window().getPosition()");
};
webdriver.WebDriver.Window.prototype.setPosition = function(a, b) {
  return this.driver_.schedule((new webdriver.Command(webdriver.CommandName.SET_WINDOW_POSITION)).setParameter("windowHandle", "current").setParameter("x", a).setParameter("y", b), "WebDriver.manage().window().setPosition(" + a + ", " + b + ")");
};
webdriver.WebDriver.Window.prototype.getSize = function() {
  return this.driver_.schedule((new webdriver.Command(webdriver.CommandName.GET_WINDOW_SIZE)).setParameter("windowHandle", "current"), "WebDriver.manage().window().getSize()");
};
webdriver.WebDriver.Window.prototype.setSize = function(a, b) {
  return this.driver_.schedule((new webdriver.Command(webdriver.CommandName.SET_WINDOW_SIZE)).setParameter("windowHandle", "current").setParameter("width", a).setParameter("height", b), "WebDriver.manage().window().setSize(" + a + ", " + b + ")");
};
webdriver.WebDriver.Window.prototype.maximize = function() {
  return this.driver_.schedule((new webdriver.Command(webdriver.CommandName.MAXIMIZE_WINDOW)).setParameter("windowHandle", "current"), "WebDriver.manage().window().maximize()");
};
webdriver.WebDriver.Logs = function(a) {
  this.driver_ = a;
};
webdriver.WebDriver.Logs.prototype.get = function(a) {
  return this.driver_.schedule((new webdriver.Command(webdriver.CommandName.GET_LOG)).setParameter("type", a), "WebDriver.manage().logs().get(" + a + ")").then(function(a) {
    return goog.array.map(a, function(a) {
      return a instanceof webdriver.logging.Entry ? a : new webdriver.logging.Entry(a.level, a.message, a.timestamp, a.type);
    });
  });
};
webdriver.WebDriver.Logs.prototype.getAvailableLogTypes = function() {
  return this.driver_.schedule(new webdriver.Command(webdriver.CommandName.GET_AVAILABLE_LOG_TYPES), "WebDriver.manage().logs().getAvailableLogTypes()");
};
webdriver.WebDriver.TargetLocator = function(a) {
  this.driver_ = a;
};
webdriver.WebDriver.TargetLocator.prototype.activeElement = function() {
  var a = this.driver_.schedule(new webdriver.Command(webdriver.CommandName.GET_ACTIVE_ELEMENT), "WebDriver.switchTo().activeElement()");
  return new webdriver.WebElementPromise(this.driver_, a);
};
webdriver.WebDriver.TargetLocator.prototype.defaultContent = function() {
  return this.driver_.schedule((new webdriver.Command(webdriver.CommandName.SWITCH_TO_FRAME)).setParameter("id", null), "WebDriver.switchTo().defaultContent()");
};
webdriver.WebDriver.TargetLocator.prototype.frame = function(a) {
  return this.driver_.schedule((new webdriver.Command(webdriver.CommandName.SWITCH_TO_FRAME)).setParameter("id", a), "WebDriver.switchTo().frame(" + a + ")");
};
webdriver.WebDriver.TargetLocator.prototype.window = function(a) {
  return this.driver_.schedule((new webdriver.Command(webdriver.CommandName.SWITCH_TO_WINDOW)).setParameter("name", a), "WebDriver.switchTo().window(" + a + ")");
};
webdriver.WebDriver.TargetLocator.prototype.alert = function() {
  var a = this.driver_.schedule(new webdriver.Command(webdriver.CommandName.GET_ALERT_TEXT), "WebDriver.switchTo().alert()"), b = this.driver_;
  return new webdriver.AlertPromise(b, a.then(function(a) {
    return new webdriver.Alert(b, a);
  }));
};
webdriver.Key.chord = function(a) {
  var b = goog.array.reduce(goog.array.slice(arguments, 0), function(a, b) {
    return a + b;
  }, "");
  return b += webdriver.Key.NULL;
};
webdriver.WebElement = function(a, b) {
  webdriver.Serializable.call(this);
  this.driver_ = a;
  this.id_ = b instanceof webdriver.promise.Promise ? b : webdriver.promise.fulfilled(b);
};
goog.inherits(webdriver.WebElement, webdriver.Serializable);
webdriver.WebElement.ELEMENT_KEY = "ELEMENT";
webdriver.WebElement.equals = function(a, b) {
  if (a == b) {
    return webdriver.promise.fulfilled(!0);
  }
  var c = [a.getId(), b.getId()];
  return webdriver.promise.all(c).then(function(b) {
    if (b[0][webdriver.WebElement.ELEMENT_KEY] == b[1][webdriver.WebElement.ELEMENT_KEY]) {
      return!0;
    }
    var c = new webdriver.Command(webdriver.CommandName.ELEMENT_EQUALS);
    c.setParameter("id", b[0]);
    c.setParameter("other", b[1]);
    return a.driver_.schedule(c, "webdriver.WebElement.equals()");
  });
};
webdriver.WebElement.prototype.getDriver = function() {
  return this.driver_;
};
webdriver.WebElement.prototype.getId = function() {
  return this.id_;
};
webdriver.WebElement.prototype.getRawId = function() {
  return this.id_.then(function(a) {
    return a.ELEMENT;
  });
};
webdriver.WebElement.prototype.serialize = function() {
  return this.getId();
};
webdriver.WebElement.prototype.schedule_ = function(a, b) {
  a.setParameter("id", this.getId());
  return this.driver_.schedule(a, b);
};
webdriver.WebElement.prototype.findElement = function(a) {
  a = webdriver.Locator.checkLocator(a);
  if (goog.isFunction(a)) {
    a = this.driver_.findElementInternal_(a, this);
  } else {
    var b = (new webdriver.Command(webdriver.CommandName.FIND_CHILD_ELEMENT)).setParameter("using", a.using).setParameter("value", a.value);
    a = this.schedule_(b, "WebElement.findElement(" + a + ")");
  }
  return new webdriver.WebElementPromise(this.driver_, a);
};
webdriver.WebElement.prototype.isElementPresent = function(a) {
  return this.findElements(a).then(function(a) {
    return!!a.length;
  });
};
webdriver.WebElement.prototype.findElements = function(a) {
  a = webdriver.Locator.checkLocator(a);
  if (goog.isFunction(a)) {
    return this.driver_.findElementsInternal_(a, this);
  }
  var b = (new webdriver.Command(webdriver.CommandName.FIND_CHILD_ELEMENTS)).setParameter("using", a.using).setParameter("value", a.value);
  return this.schedule_(b, "WebElement.findElements(" + a + ")");
};
webdriver.WebElement.prototype.click = function() {
  return this.schedule_(new webdriver.Command(webdriver.CommandName.CLICK_ELEMENT), "WebElement.click()");
};
webdriver.WebElement.prototype.sendKeys = function(a) {
  var b = webdriver.promise.all(goog.array.slice(arguments, 0)).then(function(a) {
    return goog.array.map(a, String);
  });
  if (!this.driver_.fileDetector_) {
    return this.schedule_((new webdriver.Command(webdriver.CommandName.SEND_KEYS_TO_ELEMENT)).setParameter("value", b), "WebElement.sendKeys()");
  }
  b.thenCatch(goog.nullFunction);
  var c = this;
  return this.driver_.flow_.execute(function() {
    return b.then(function(a) {
      return c.driver_.fileDetector_.handleFile(c.driver_, a.join(""));
    }).then(function(a) {
      return c.schedule_((new webdriver.Command(webdriver.CommandName.SEND_KEYS_TO_ELEMENT)).setParameter("value", [a]), "WebElement.sendKeys()");
    });
  }, "WebElement.sendKeys()");
};
webdriver.WebElement.prototype.getTagName = function() {
  return this.schedule_(new webdriver.Command(webdriver.CommandName.GET_ELEMENT_TAG_NAME), "WebElement.getTagName()");
};
webdriver.WebElement.prototype.getCssValue = function(a) {
  return this.schedule_((new webdriver.Command(webdriver.CommandName.GET_ELEMENT_VALUE_OF_CSS_PROPERTY)).setParameter("propertyName", a), "WebElement.getCssValue(" + a + ")");
};
webdriver.WebElement.prototype.getAttribute = function(a) {
  return this.schedule_((new webdriver.Command(webdriver.CommandName.GET_ELEMENT_ATTRIBUTE)).setParameter("name", a), "WebElement.getAttribute(" + a + ")");
};
webdriver.WebElement.prototype.getText = function() {
  return this.schedule_(new webdriver.Command(webdriver.CommandName.GET_ELEMENT_TEXT), "WebElement.getText()");
};
webdriver.WebElement.prototype.getSize = function() {
  return this.schedule_(new webdriver.Command(webdriver.CommandName.GET_ELEMENT_SIZE), "WebElement.getSize()");
};
webdriver.WebElement.prototype.getLocation = function() {
  return this.schedule_(new webdriver.Command(webdriver.CommandName.GET_ELEMENT_LOCATION), "WebElement.getLocation()");
};
webdriver.WebElement.prototype.isEnabled = function() {
  return this.schedule_(new webdriver.Command(webdriver.CommandName.IS_ELEMENT_ENABLED), "WebElement.isEnabled()");
};
webdriver.WebElement.prototype.isSelected = function() {
  return this.schedule_(new webdriver.Command(webdriver.CommandName.IS_ELEMENT_SELECTED), "WebElement.isSelected()");
};
webdriver.WebElement.prototype.submit = function() {
  return this.schedule_(new webdriver.Command(webdriver.CommandName.SUBMIT_ELEMENT), "WebElement.submit()");
};
webdriver.WebElement.prototype.clear = function() {
  return this.schedule_(new webdriver.Command(webdriver.CommandName.CLEAR_ELEMENT), "WebElement.clear()");
};
webdriver.WebElement.prototype.isDisplayed = function() {
  return this.schedule_(new webdriver.Command(webdriver.CommandName.IS_ELEMENT_DISPLAYED), "WebElement.isDisplayed()");
};
webdriver.WebElement.prototype.getOuterHtml = function() {
  return this.driver_.executeScript(function(a) {
    if ("outerHTML" in a) {
      return a.outerHTML;
    }
    var b = a.ownerDocument.createElement("div");
    b.appendChild(a.cloneNode(!0));
    return b.innerHTML;
  }, this);
};
webdriver.WebElement.prototype.getInnerHtml = function() {
  return this.driver_.executeScript("return arguments[0].innerHTML", this);
};
webdriver.WebElementPromise = function(a, b) {
  webdriver.WebElement.call(this, a, {ELEMENT:"unused"});
  this.cancel = goog.bind(b.cancel, b);
  this.isPending = goog.bind(b.isPending, b);
  this.then = goog.bind(b.then, b);
  this.thenCatch = goog.bind(b.thenCatch, b);
  this.thenFinally = goog.bind(b.thenFinally, b);
  this.getId = function() {
    return b.then(function(a) {
      return a.getId();
    });
  };
};
goog.inherits(webdriver.WebElementPromise, webdriver.WebElement);
webdriver.Alert = function(a, b) {
  this.driver_ = a;
  this.text_ = webdriver.promise.when(b);
};
webdriver.Alert.prototype.getText = function() {
  return this.text_;
};
webdriver.Alert.prototype.accept = function() {
  return this.driver_.schedule(new webdriver.Command(webdriver.CommandName.ACCEPT_ALERT), "WebDriver.switchTo().alert().accept()");
};
webdriver.Alert.prototype.dismiss = function() {
  return this.driver_.schedule(new webdriver.Command(webdriver.CommandName.DISMISS_ALERT), "WebDriver.switchTo().alert().dismiss()");
};
webdriver.Alert.prototype.sendKeys = function(a) {
  return this.driver_.schedule((new webdriver.Command(webdriver.CommandName.SET_ALERT_TEXT)).setParameter("text", a), "WebDriver.switchTo().alert().sendKeys(" + a + ")");
};
webdriver.AlertPromise = function(a, b) {
  webdriver.Alert.call(this, a, "unused");
  this.cancel = goog.bind(b.cancel, b);
  this.isPending = goog.bind(b.isPending, b);
  this.then = goog.bind(b.then, b);
  this.thenCatch = goog.bind(b.thenCatch, b);
  this.thenFinally = goog.bind(b.thenFinally, b);
  this.getText = function() {
    return b.then(function(a) {
      return a.getText();
    });
  };
  this.accept = function() {
    return b.then(function(a) {
      return a.accept();
    });
  };
  this.dismiss = function() {
    return b.then(function(a) {
      return a.dismiss();
    });
  };
  this.sendKeys = function(a) {
    return b.then(function(b) {
      return b.sendKeys(a);
    });
  };
};
goog.inherits(webdriver.AlertPromise, webdriver.Alert);
webdriver.UnhandledAlertError = function(a, b, c) {
  bot.Error.call(this, bot.ErrorCode.UNEXPECTED_ALERT_OPEN, a);
  this.text_ = b;
  this.alert_ = c;
};
goog.inherits(webdriver.UnhandledAlertError, bot.Error);
webdriver.UnhandledAlertError.prototype.getAlertText = function() {
  return this.text_;
};
webdriver.UnhandledAlertError.prototype.getAlert = function() {
  return this.alert_;
};
webdriver.FileDetector = function() {
};
webdriver.FileDetector.prototype.handleFile = function(a, b) {
  return webdriver.promise.fulfilled(b);
};
webdriver.http = {};
webdriver.http.Client = function() {
};
webdriver.http.Client.prototype.send = function(a, b) {
};
webdriver.http.Executor = function(a) {
  this.client_ = a;
  this.customCommands_ = {};
};
webdriver.http.Executor.prototype.defineCommand = function(a, b, c) {
  this.customCommands_[a] = {method:b, path:c};
};
webdriver.http.Executor.prototype.execute = function(a, b) {
  var c = this.customCommands_[a.getName()] || webdriver.http.Executor.COMMAND_MAP_[a.getName()];
  if (!c) {
    throw Error("Unrecognized command: " + a.getName());
  }
  var d = a.getParameters(), e = webdriver.http.Executor.buildPath_(c.path, d), c = new webdriver.http.Request(c.method, e, d);
  this.client_.send(c, function(a, c) {
    var d;
    if (!a) {
      try {
        d = webdriver.http.Executor.parseHttpResponse_(c);
      } catch (e) {
        a = e;
      }
    }
    b(a, d);
  });
};
webdriver.http.Executor.buildPath_ = function(a, b) {
  var c = a.match(/\/:(\w+)\b/g);
  if (c) {
    for (var d = 0;d < c.length;++d) {
      var e = c[d].substring(2);
      if (e in b) {
        var f = b[e];
        f && f.ELEMENT && (f = f.ELEMENT);
        a = a.replace(c[d], "/" + f);
        delete b[e];
      } else {
        throw Error("Missing required parameter: " + e);
      }
    }
  }
  return a;
};
webdriver.http.Executor.parseHttpResponse_ = function(a) {
  try {
    return goog.json.parse(a.body);
  } catch (b) {
  }
  var c = {status:bot.ErrorCode.SUCCESS, value:a.body.replace(/\r\n/g, "\n")};
  199 < a.status && 300 > a.status || (c.status = 404 == a.status ? bot.ErrorCode.UNKNOWN_COMMAND : bot.ErrorCode.UNKNOWN_ERROR);
  return c;
};
webdriver.http.Executor.COMMAND_MAP_ = function() {
  function a(a) {
    return c("POST", a);
  }
  function b(a) {
    return c("GET", a);
  }
  function c(a, b) {
    return{method:a, path:b};
  }
  return(new function() {
    var a = {};
    this.put = function(b, c) {
      a[b] = c;
      return this;
    };
    this.build = function() {
      return a;
    };
  }).put(webdriver.CommandName.GET_SERVER_STATUS, b("/status")).put(webdriver.CommandName.NEW_SESSION, a("/session")).put(webdriver.CommandName.GET_SESSIONS, b("/sessions")).put(webdriver.CommandName.DESCRIBE_SESSION, b("/session/:sessionId")).put(webdriver.CommandName.QUIT, c("DELETE", "/session/:sessionId")).put(webdriver.CommandName.CLOSE, c("DELETE", "/session/:sessionId/window")).put(webdriver.CommandName.GET_CURRENT_WINDOW_HANDLE, b("/session/:sessionId/window_handle")).put(webdriver.CommandName.GET_WINDOW_HANDLES, 
  b("/session/:sessionId/window_handles")).put(webdriver.CommandName.GET_CURRENT_URL, b("/session/:sessionId/url")).put(webdriver.CommandName.GET, a("/session/:sessionId/url")).put(webdriver.CommandName.GO_BACK, a("/session/:sessionId/back")).put(webdriver.CommandName.GO_FORWARD, a("/session/:sessionId/forward")).put(webdriver.CommandName.REFRESH, a("/session/:sessionId/refresh")).put(webdriver.CommandName.ADD_COOKIE, a("/session/:sessionId/cookie")).put(webdriver.CommandName.GET_ALL_COOKIES, b("/session/:sessionId/cookie")).put(webdriver.CommandName.DELETE_ALL_COOKIES, 
  c("DELETE", "/session/:sessionId/cookie")).put(webdriver.CommandName.DELETE_COOKIE, c("DELETE", "/session/:sessionId/cookie/:name")).put(webdriver.CommandName.FIND_ELEMENT, a("/session/:sessionId/element")).put(webdriver.CommandName.FIND_ELEMENTS, a("/session/:sessionId/elements")).put(webdriver.CommandName.GET_ACTIVE_ELEMENT, a("/session/:sessionId/element/active")).put(webdriver.CommandName.FIND_CHILD_ELEMENT, a("/session/:sessionId/element/:id/element")).put(webdriver.CommandName.FIND_CHILD_ELEMENTS, 
  a("/session/:sessionId/element/:id/elements")).put(webdriver.CommandName.CLEAR_ELEMENT, a("/session/:sessionId/element/:id/clear")).put(webdriver.CommandName.CLICK_ELEMENT, a("/session/:sessionId/element/:id/click")).put(webdriver.CommandName.SEND_KEYS_TO_ELEMENT, a("/session/:sessionId/element/:id/value")).put(webdriver.CommandName.SUBMIT_ELEMENT, a("/session/:sessionId/element/:id/submit")).put(webdriver.CommandName.GET_ELEMENT_TEXT, b("/session/:sessionId/element/:id/text")).put(webdriver.CommandName.GET_ELEMENT_TAG_NAME, 
  b("/session/:sessionId/element/:id/name")).put(webdriver.CommandName.IS_ELEMENT_SELECTED, b("/session/:sessionId/element/:id/selected")).put(webdriver.CommandName.IS_ELEMENT_ENABLED, b("/session/:sessionId/element/:id/enabled")).put(webdriver.CommandName.IS_ELEMENT_DISPLAYED, b("/session/:sessionId/element/:id/displayed")).put(webdriver.CommandName.GET_ELEMENT_LOCATION, b("/session/:sessionId/element/:id/location")).put(webdriver.CommandName.GET_ELEMENT_SIZE, b("/session/:sessionId/element/:id/size")).put(webdriver.CommandName.GET_ELEMENT_ATTRIBUTE, 
  b("/session/:sessionId/element/:id/attribute/:name")).put(webdriver.CommandName.GET_ELEMENT_VALUE_OF_CSS_PROPERTY, b("/session/:sessionId/element/:id/css/:propertyName")).put(webdriver.CommandName.ELEMENT_EQUALS, b("/session/:sessionId/element/:id/equals/:other")).put(webdriver.CommandName.SWITCH_TO_WINDOW, a("/session/:sessionId/window")).put(webdriver.CommandName.MAXIMIZE_WINDOW, a("/session/:sessionId/window/:windowHandle/maximize")).put(webdriver.CommandName.GET_WINDOW_POSITION, b("/session/:sessionId/window/:windowHandle/position")).put(webdriver.CommandName.SET_WINDOW_POSITION, 
  a("/session/:sessionId/window/:windowHandle/position")).put(webdriver.CommandName.GET_WINDOW_SIZE, b("/session/:sessionId/window/:windowHandle/size")).put(webdriver.CommandName.SET_WINDOW_SIZE, a("/session/:sessionId/window/:windowHandle/size")).put(webdriver.CommandName.SWITCH_TO_FRAME, a("/session/:sessionId/frame")).put(webdriver.CommandName.GET_PAGE_SOURCE, b("/session/:sessionId/source")).put(webdriver.CommandName.GET_TITLE, b("/session/:sessionId/title")).put(webdriver.CommandName.EXECUTE_SCRIPT, 
  a("/session/:sessionId/execute")).put(webdriver.CommandName.EXECUTE_ASYNC_SCRIPT, a("/session/:sessionId/execute_async")).put(webdriver.CommandName.SCREENSHOT, b("/session/:sessionId/screenshot")).put(webdriver.CommandName.SET_TIMEOUT, a("/session/:sessionId/timeouts")).put(webdriver.CommandName.SET_SCRIPT_TIMEOUT, a("/session/:sessionId/timeouts/async_script")).put(webdriver.CommandName.IMPLICITLY_WAIT, a("/session/:sessionId/timeouts/implicit_wait")).put(webdriver.CommandName.MOVE_TO, a("/session/:sessionId/moveto")).put(webdriver.CommandName.CLICK, 
  a("/session/:sessionId/click")).put(webdriver.CommandName.DOUBLE_CLICK, a("/session/:sessionId/doubleclick")).put(webdriver.CommandName.MOUSE_DOWN, a("/session/:sessionId/buttondown")).put(webdriver.CommandName.MOUSE_UP, a("/session/:sessionId/buttonup")).put(webdriver.CommandName.MOVE_TO, a("/session/:sessionId/moveto")).put(webdriver.CommandName.SEND_KEYS_TO_ACTIVE_ELEMENT, a("/session/:sessionId/keys")).put(webdriver.CommandName.TOUCH_SINGLE_TAP, a("/session/:sessionId/touch/click")).put(webdriver.CommandName.TOUCH_DOUBLE_TAP, 
  a("/session/:sessionId/touch/doubleclick")).put(webdriver.CommandName.TOUCH_DOWN, a("/session/:sessionId/touch/down")).put(webdriver.CommandName.TOUCH_UP, a("/session/:sessionId/touch/up")).put(webdriver.CommandName.TOUCH_MOVE, a("/session/:sessionId/touch/move")).put(webdriver.CommandName.TOUCH_SCROLL, a("/session/:sessionId/touch/scroll")).put(webdriver.CommandName.TOUCH_LONG_PRESS, a("/session/:sessionId/touch/longclick")).put(webdriver.CommandName.TOUCH_FLICK, a("/session/:sessionId/touch/flick")).put(webdriver.CommandName.ACCEPT_ALERT, 
  a("/session/:sessionId/accept_alert")).put(webdriver.CommandName.DISMISS_ALERT, a("/session/:sessionId/dismiss_alert")).put(webdriver.CommandName.GET_ALERT_TEXT, b("/session/:sessionId/alert_text")).put(webdriver.CommandName.SET_ALERT_TEXT, a("/session/:sessionId/alert_text")).put(webdriver.CommandName.GET_LOG, a("/session/:sessionId/log")).put(webdriver.CommandName.GET_AVAILABLE_LOG_TYPES, b("/session/:sessionId/log/types")).put(webdriver.CommandName.GET_SESSION_LOGS, a("/logs")).put(webdriver.CommandName.UPLOAD_FILE, 
  a("/session/:sessionId/file")).build();
}();
webdriver.http.headersToString_ = function(a) {
  var b = [], c;
  for (c in a) {
    b.push(c + ": " + a[c]);
  }
  return b.join("\n");
};
webdriver.http.Request = function(a, b, c) {
  this.method = a;
  this.path = b;
  this.data = c || {};
  this.headers = {Accept:"application/json; charset=utf-8"};
};
webdriver.http.Request.prototype.toString = function() {
  return[this.method + " " + this.path + " HTTP/1.1", webdriver.http.headersToString_(this.headers), "", goog.json.serialize(this.data)].join("\n");
};
webdriver.http.Response = function(a, b, c) {
  this.status = a;
  this.body = c;
  this.headers = {};
  for (var d in b) {
    this.headers[d.toLowerCase()] = b[d];
  }
};
webdriver.http.Response.fromXmlHttpRequest = function(a) {
  var b = {};
  if (a.getAllResponseHeaders) {
    var c = a.getAllResponseHeaders();
    c && (c = c.replace(/\r\n/g, "\n").split("\n"), goog.array.forEach(c, function(a) {
      a = a.split(/\s*:\s*/, 2);
      a[0] && (b[a[0]] = a[1] || "");
    }));
  }
  return new webdriver.http.Response(a.status || 200, b, a.responseText.replace(/\0/g, ""));
};
webdriver.http.Response.prototype.toString = function() {
  var a = webdriver.http.headersToString_(this.headers), b = ["HTTP/1.1 " + this.status, a];
  a && b.push("");
  this.body && b.push(this.body);
  return b.join("\n");
};
webdriver.http.CorsClient = function(a) {
  if (!webdriver.http.CorsClient.isAvailable()) {
    throw Error("The current environment does not support cross-origin resource sharing");
  }
  this.url_ = a + webdriver.http.CorsClient.XDRPC_ENDPOINT;
};
webdriver.http.CorsClient.XDRPC_ENDPOINT = "/xdrpc";
webdriver.http.CorsClient.isAvailable = function() {
  return "undefined" !== typeof XDomainRequest || "undefined" !== typeof XMLHttpRequest && goog.isBoolean((new XMLHttpRequest).withCredentials);
};
webdriver.http.CorsClient.prototype.send = function(a, b) {
  try {
    var c = new ("undefined" !== typeof XDomainRequest ? XDomainRequest : XMLHttpRequest);
    c.open("POST", this.url_, !0);
    c.onload = function() {
      b(null, webdriver.http.Response.fromXmlHttpRequest(c));
    };
    var d = this.url_;
    c.onerror = function() {
      b(Error(["Unable to send request: POST ", d, "\nPerhaps the server did not respond to the preflight request with valid access control headers?"].join("")));
    };
    c.onprogress = c.ontimeout = function() {
    };
    c.send(goog.json.serialize({method:a.method, path:a.path, data:a.data}));
  } catch (e) {
    b(e);
  }
};
goog.net = {};
goog.net.XhrLike = function() {
};
goog.net.XhrLike.prototype.open = function(a, b, c, d, e) {
};
goog.net.XhrLike.prototype.send = function(a) {
};
goog.net.XhrLike.prototype.abort = function() {
};
goog.net.XhrLike.prototype.setRequestHeader = function(a, b) {
};
goog.net.XhrLike.prototype.getResponseHeader = function(a) {
};
goog.net.XhrLike.prototype.getAllResponseHeaders = function() {
};
goog.net.XmlHttpFactory = function() {
};
goog.net.XmlHttpFactory.prototype.cachedOptions_ = null;
goog.net.XmlHttpFactory.prototype.getOptions = function() {
  return this.cachedOptions_ || (this.cachedOptions_ = this.internalGetOptions());
};
goog.net.WrapperXmlHttpFactory = function(a, b) {
  goog.net.XmlHttpFactory.call(this);
  this.xhrFactory_ = a;
  this.optionsFactory_ = b;
};
goog.inherits(goog.net.WrapperXmlHttpFactory, goog.net.XmlHttpFactory);
goog.net.WrapperXmlHttpFactory.prototype.createInstance = function() {
  return this.xhrFactory_();
};
goog.net.WrapperXmlHttpFactory.prototype.getOptions = function() {
  return this.optionsFactory_();
};
goog.net.XmlHttp = function() {
  return goog.net.XmlHttp.factory_.createInstance();
};
goog.net.XmlHttp.ASSUME_NATIVE_XHR = !1;
goog.net.XmlHttpDefines = {};
goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR = !1;
goog.net.XmlHttp.getOptions = function() {
  return goog.net.XmlHttp.factory_.getOptions();
};
goog.net.XmlHttp.OptionType = {USE_NULL_FUNCTION:0, LOCAL_REQUEST_ERROR:1};
goog.net.XmlHttp.ReadyState = {UNINITIALIZED:0, LOADING:1, LOADED:2, INTERACTIVE:3, COMPLETE:4};
goog.net.XmlHttp.setFactory = function(a, b) {
  goog.net.XmlHttp.setGlobalFactory(new goog.net.WrapperXmlHttpFactory(goog.asserts.assert(a), goog.asserts.assert(b)));
};
goog.net.XmlHttp.setGlobalFactory = function(a) {
  goog.net.XmlHttp.factory_ = a;
};
goog.net.DefaultXmlHttpFactory = function() {
  goog.net.XmlHttpFactory.call(this);
};
goog.inherits(goog.net.DefaultXmlHttpFactory, goog.net.XmlHttpFactory);
goog.net.DefaultXmlHttpFactory.prototype.createInstance = function() {
  var a = this.getProgId_();
  return a ? new ActiveXObject(a) : new XMLHttpRequest;
};
goog.net.DefaultXmlHttpFactory.prototype.internalGetOptions = function() {
  var a = {};
  this.getProgId_() && (a[goog.net.XmlHttp.OptionType.USE_NULL_FUNCTION] = !0, a[goog.net.XmlHttp.OptionType.LOCAL_REQUEST_ERROR] = !0);
  return a;
};
goog.net.DefaultXmlHttpFactory.prototype.getProgId_ = function() {
  if (goog.net.XmlHttp.ASSUME_NATIVE_XHR || goog.net.XmlHttpDefines.ASSUME_NATIVE_XHR) {
    return "";
  }
  if (!this.ieProgId_ && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b = 0;b < a.length;b++) {
      var c = a[b];
      try {
        return new ActiveXObject(c), this.ieProgId_ = c;
      } catch (d) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return this.ieProgId_;
};
goog.net.XmlHttp.setGlobalFactory(new goog.net.DefaultXmlHttpFactory);
webdriver.http.XhrClient = function(a) {
  this.url_ = a;
};
webdriver.http.XhrClient.prototype.send = function(a, b) {
  try {
    var c = goog.net.XmlHttp(), d = this.url_ + a.path;
    c.open(a.method, d, !0);
    c.onload = function() {
      b(null, webdriver.http.Response.fromXmlHttpRequest(c));
    };
    c.onerror = function() {
      b(Error(["Unable to send request: ", a.method, " ", d, "\nOriginal request:\n", a].join("")));
    };
    for (var e in a.headers) {
      c.setRequestHeader(e, a.headers[e] + "");
    }
    c.send(goog.json.serialize(a.data));
  } catch (f) {
    b(f);
  }
};
webdriver.Builder = function(a) {
  a = (new goog.Uri((a || window).location)).getQueryData();
  this.serverUrl_ = a.get(webdriver.Builder.SERVER_URL_PARAM, webdriver.Builder.DEFAULT_SERVER_URL);
  this.sessionId_ = a.get(webdriver.Builder.SESSION_ID_PARAM);
  this.capabilities_ = new webdriver.Capabilities;
};
webdriver.Builder.SESSION_ID_PARAM = "wdsid";
webdriver.Builder.SERVER_URL_PARAM = "wdurl";
webdriver.Builder.DEFAULT_SERVER_URL = "http://localhost:4444/wd/hub";
webdriver.Builder.prototype.usingServer = function(a) {
  this.serverUrl_ = a;
  return this;
};
webdriver.Builder.prototype.getServerUrl = function() {
  return this.serverUrl_;
};
webdriver.Builder.prototype.usingSession = function(a) {
  this.sessionId_ = a;
  return this;
};
webdriver.Builder.prototype.getSession = function() {
  return this.sessionId_;
};
webdriver.Builder.prototype.withCapabilities = function(a) {
  this.capabilities_ = new webdriver.Capabilities(a);
  return this;
};
webdriver.Builder.prototype.build = function() {
  if (goog.userAgent.GECKO && "complete" != document.readyState) {
    throw Error("Cannot create driver instance before window.onload");
  }
  var a;
  if (webdriver.FirefoxDomExecutor.isAvailable()) {
    return a = new webdriver.FirefoxDomExecutor, webdriver.WebDriver.createSession(a, this.capabilities_);
  }
  a = this.serverUrl_;
  a = "/" == a[0] ? new webdriver.http.XhrClient((window.location.origin || window.location.protocol + "//" + window.location.host) + a) : new webdriver.http.CorsClient(a);
  a = new webdriver.http.Executor(a);
  if (this.sessionId_) {
    return webdriver.WebDriver.attachToSession(a, this.sessionId_);
  }
  throw Error("Unable to create a new client for this browser. The WebDriver session ID has not been defined.");
};
goog.labs.testing = {};
goog.labs.testing.Matcher = function() {
};
goog.labs.testing.Matcher.prototype.matches = function(a) {
};
goog.labs.testing.Matcher.prototype.describe = function(a, b) {
};
goog.labs.testing.Matcher.makeMatcher = function(a, b) {
  var c = function() {
  };
  c.prototype.matches = a;
  b && (c.prototype.describe = b);
  return c;
};
goog.labs.testing.GreaterThanMatcher = function(a) {
  this.value_ = a;
};
goog.labs.testing.GreaterThanMatcher.prototype.matches = function(a) {
  goog.asserts.assertNumber(a);
  return a > this.value_;
};
goog.labs.testing.GreaterThanMatcher.prototype.describe = function(a) {
  goog.asserts.assertNumber(a);
  return a + " is not greater than " + this.value_;
};
goog.labs.testing.LessThanMatcher = function(a) {
  this.value_ = a;
};
goog.labs.testing.LessThanMatcher.prototype.matches = function(a) {
  goog.asserts.assertNumber(a);
  return a < this.value_;
};
goog.labs.testing.LessThanMatcher.prototype.describe = function(a) {
  goog.asserts.assertNumber(a);
  return a + " is not less than " + this.value_;
};
goog.labs.testing.GreaterThanEqualToMatcher = function(a) {
  this.value_ = a;
};
goog.labs.testing.GreaterThanEqualToMatcher.prototype.matches = function(a) {
  goog.asserts.assertNumber(a);
  return a >= this.value_;
};
goog.labs.testing.GreaterThanEqualToMatcher.prototype.describe = function(a) {
  goog.asserts.assertNumber(a);
  return a + " is not greater than equal to " + this.value_;
};
goog.labs.testing.LessThanEqualToMatcher = function(a) {
  this.value_ = a;
};
goog.labs.testing.LessThanEqualToMatcher.prototype.matches = function(a) {
  goog.asserts.assertNumber(a);
  return a <= this.value_;
};
goog.labs.testing.LessThanEqualToMatcher.prototype.describe = function(a) {
  goog.asserts.assertNumber(a);
  return a + " is not less than equal to " + this.value_;
};
goog.labs.testing.EqualToMatcher = function(a) {
  this.value_ = a;
};
goog.labs.testing.EqualToMatcher.prototype.matches = function(a) {
  goog.asserts.assertNumber(a);
  return a === this.value_;
};
goog.labs.testing.EqualToMatcher.prototype.describe = function(a) {
  goog.asserts.assertNumber(a);
  return a + " is not equal to " + this.value_;
};
goog.labs.testing.CloseToMatcher = function(a, b) {
  this.value_ = a;
  this.range_ = b;
};
goog.labs.testing.CloseToMatcher.prototype.matches = function(a) {
  goog.asserts.assertNumber(a);
  return Math.abs(this.value_ - a) < this.range_;
};
goog.labs.testing.CloseToMatcher.prototype.describe = function(a) {
  goog.asserts.assertNumber(a);
  return a + " is not close to(" + this.range_ + ") " + this.value_;
};
function greaterThan(a) {
  return new goog.labs.testing.GreaterThanMatcher(a);
}
function greaterThanEqualTo(a) {
  return new goog.labs.testing.GreaterThanEqualToMatcher(a);
}
function lessThan(a) {
  return new goog.labs.testing.LessThanMatcher(a);
}
function lessThanEqualTo(a) {
  return new goog.labs.testing.LessThanEqualToMatcher(a);
}
function equalTo(a) {
  return new goog.labs.testing.EqualToMatcher(a);
}
function closeTo(a, b) {
  return new goog.labs.testing.CloseToMatcher(a, b);
}
;goog.labs.testing.ContainsStringMatcher = function(a) {
  this.value_ = a;
};
goog.labs.testing.ContainsStringMatcher.prototype.matches = function(a) {
  goog.asserts.assertString(a);
  return goog.string.contains(a, this.value_);
};
goog.labs.testing.ContainsStringMatcher.prototype.describe = function(a) {
  return a + " does not contain " + this.value_;
};
goog.labs.testing.EndsWithMatcher = function(a) {
  this.value_ = a;
};
goog.labs.testing.EndsWithMatcher.prototype.matches = function(a) {
  goog.asserts.assertString(a);
  return goog.string.endsWith(a, this.value_);
};
goog.labs.testing.EndsWithMatcher.prototype.describe = function(a) {
  return a + " does not end with " + this.value_;
};
goog.labs.testing.EqualToIgnoringWhitespaceMatcher = function(a) {
  this.value_ = a;
};
goog.labs.testing.EqualToIgnoringWhitespaceMatcher.prototype.matches = function(a) {
  goog.asserts.assertString(a);
  a = goog.string.collapseWhitespace(a);
  return 0 === goog.string.caseInsensitiveCompare(this.value_, a);
};
goog.labs.testing.EqualToIgnoringWhitespaceMatcher.prototype.describe = function(a) {
  return a + " is not equal(ignoring whitespace) to " + this.value_;
};
goog.labs.testing.EqualsMatcher = function(a) {
  this.value_ = a;
};
goog.labs.testing.EqualsMatcher.prototype.matches = function(a) {
  goog.asserts.assertString(a);
  return this.value_ === a;
};
goog.labs.testing.EqualsMatcher.prototype.describe = function(a) {
  return a + " is not equal to " + this.value_;
};
goog.labs.testing.RegexMatcher = function(a) {
  this.regex_ = a;
};
goog.labs.testing.RegexMatcher.prototype.matches = function(a) {
  goog.asserts.assertString(a);
  return this.regex_.test(a);
};
goog.labs.testing.RegexMatcher.prototype.describe = function(a) {
  return a + " does not match " + this.regex_;
};
goog.labs.testing.StartsWithMatcher = function(a) {
  this.value_ = a;
};
goog.labs.testing.StartsWithMatcher.prototype.matches = function(a) {
  goog.asserts.assertString(a);
  return goog.string.startsWith(a, this.value_);
};
goog.labs.testing.StartsWithMatcher.prototype.describe = function(a) {
  return a + " does not start with " + this.value_;
};
goog.labs.testing.StringContainsInOrderMatcher = function(a) {
  this.values_ = a;
};
goog.labs.testing.StringContainsInOrderMatcher.prototype.matches = function(a) {
  goog.asserts.assertString(a);
  for (var b, c = 0, d = 0;d < this.values_.length;d++) {
    b = goog.string.contains(a, this.values_[d]);
    if (0 > b || b < c) {
      return!1;
    }
    c = b;
  }
  return!0;
};
goog.labs.testing.StringContainsInOrderMatcher.prototype.describe = function(a) {
  return a + " does not contain the expected values in order.";
};
function containsString(a) {
  return new goog.labs.testing.ContainsStringMatcher(a);
}
function endsWith(a) {
  return new goog.labs.testing.EndsWithMatcher(a);
}
function equalToIgnoringWhitespace(a) {
  return new goog.labs.testing.EqualToIgnoringWhitespaceMatcher(a);
}
function equals(a) {
  return new goog.labs.testing.EqualsMatcher(a);
}
function matchesRegex(a) {
  return new goog.labs.testing.RegexMatcher(a);
}
function startsWith(a) {
  return new goog.labs.testing.StartsWithMatcher(a);
}
function stringContainsInOrder(a) {
  return new goog.labs.testing.StringContainsInOrderMatcher(a);
}
;goog.labs.testing.ObjectEqualsMatcher = function(a) {
  this.object_ = a;
};
goog.labs.testing.ObjectEqualsMatcher.prototype.matches = function(a) {
  return a === this.object_;
};
goog.labs.testing.ObjectEqualsMatcher.prototype.describe = function(a) {
  return "Input object is not the same as the expected object.";
};
goog.labs.testing.HasPropertyMatcher = function(a) {
  this.property_ = a;
};
goog.labs.testing.HasPropertyMatcher.prototype.matches = function(a) {
  return this.property_ in a;
};
goog.labs.testing.HasPropertyMatcher.prototype.describe = function(a) {
  return "Object does not have property: " + this.property_;
};
goog.labs.testing.InstanceOfMatcher = function(a) {
  this.object_ = a;
};
goog.labs.testing.InstanceOfMatcher.prototype.matches = function(a) {
  return a instanceof this.object_;
};
goog.labs.testing.InstanceOfMatcher.prototype.describe = function(a) {
  return "Input object is not an instance of the expected object";
};
goog.labs.testing.IsNullOrUndefinedMatcher = function() {
};
goog.labs.testing.IsNullOrUndefinedMatcher.prototype.matches = function(a) {
  return!goog.isDefAndNotNull(a);
};
goog.labs.testing.IsNullOrUndefinedMatcher.prototype.describe = function(a) {
  return a + " is not null or undefined.";
};
goog.labs.testing.IsNullMatcher = function() {
};
goog.labs.testing.IsNullMatcher.prototype.matches = function(a) {
  return goog.isNull(a);
};
goog.labs.testing.IsNullMatcher.prototype.describe = function(a) {
  return a + " is not null.";
};
goog.labs.testing.IsUndefinedMatcher = function() {
};
goog.labs.testing.IsUndefinedMatcher.prototype.matches = function(a) {
  return!goog.isDef(a);
};
goog.labs.testing.IsUndefinedMatcher.prototype.describe = function(a) {
  return a + " is not undefined.";
};
function equalsObject(a) {
  return new goog.labs.testing.ObjectEqualsMatcher(a);
}
function hasProperty(a) {
  return new goog.labs.testing.HasPropertyMatcher(a);
}
function instanceOfClass(a) {
  return new goog.labs.testing.InstanceOfMatcher(a);
}
function isNull() {
  return new goog.labs.testing.IsNullMatcher;
}
function isNullOrUndefined() {
  return new goog.labs.testing.IsNullOrUndefinedMatcher;
}
function isUndefined() {
  return new goog.labs.testing.IsUndefinedMatcher;
}
;goog.labs.testing.AllOfMatcher = function(a) {
  this.matchers_ = a;
};
goog.labs.testing.AllOfMatcher.prototype.matches = function(a) {
  return goog.array.every(this.matchers_, function(b) {
    return b.matches(a);
  });
};
goog.labs.testing.AllOfMatcher.prototype.describe = function(a) {
  var b = "";
  goog.array.forEach(this.matchers_, function(c) {
    c.matches(a) || (b += c.describe(a) + "\n");
  });
  return b;
};
goog.labs.testing.AnyOfMatcher = function(a) {
  this.matchers_ = a;
};
goog.labs.testing.AnyOfMatcher.prototype.matches = function(a) {
  return goog.array.some(this.matchers_, function(b) {
    return b.matches(a);
  });
};
goog.labs.testing.AnyOfMatcher.prototype.describe = function(a) {
  var b = "";
  goog.array.forEach(this.matchers_, function(c) {
    c.matches(a) || (b += c.describe(a) + "\n");
  });
  return b;
};
goog.labs.testing.IsNotMatcher = function(a) {
  this.matcher_ = a;
};
goog.labs.testing.IsNotMatcher.prototype.matches = function(a) {
  return!this.matcher_.matches(a);
};
goog.labs.testing.IsNotMatcher.prototype.describe = function(a) {
  return "The following is false: " + this.matcher_.describe(a);
};
function allOf(a) {
  var b = goog.array.toArray(arguments);
  return new goog.labs.testing.AllOfMatcher(b);
}
function anyOf(a) {
  var b = goog.array.toArray(arguments);
  return new goog.labs.testing.AnyOfMatcher(b);
}
function isNot(a) {
  return new goog.labs.testing.IsNotMatcher(a);
}
;goog.labs.testing.assertThat = function(a, b, c) {
  if (!b.matches(a)) {
    throw a = (c ? c + ": " : "") + b.describe(a), new goog.labs.testing.MatcherError(a);
  }
};
goog.labs.testing.MatcherError = function(a) {
  goog.debug.Error.call(this, a);
};
goog.inherits(goog.labs.testing.MatcherError, goog.debug.Error);
webdriver.testing = {};
webdriver.testing.asserts = {};
webdriver.testing.ContainsMatcher = function(a) {
  this.value_ = a;
};
webdriver.testing.ContainsMatcher.prototype.matches = function(a) {
  return goog.isString(a) ? goog.string.contains(a, this.value_) : goog.array.contains(a, this.value_);
};
webdriver.testing.ContainsMatcher.prototype.describe = function(a) {
  return a + " does not contain " + this.value_;
};
webdriver.testing.Assertion = function(a) {
  this.value_ = a;
  this instanceof webdriver.testing.NegatedAssertion || (this.is = this, this.not = new webdriver.testing.NegatedAssertion(a));
};
webdriver.testing.Assertion.DelegatingMatcher_ = function(a) {
  this.matches = function(b) {
    return a.matches(b);
  };
  this.describe = function() {
    return a.describe();
  };
};
webdriver.testing.Assertion.prototype.apply = function(a, b) {
  var c = null;
  webdriver.promise.isPromise(this.value_) ? c = webdriver.promise.when(this.value_, function(c) {
    goog.labs.testing.assertThat(c, a, b);
  }) : goog.labs.testing.assertThat(this.value_, a, b);
  return c;
};
webdriver.testing.Assertion.prototype.greaterThan = function(a, b) {
  return this.apply(new goog.labs.testing.GreaterThanMatcher(a), b);
};
webdriver.testing.Assertion.prototype.greaterThanEqualTo = function(a, b) {
  return this.apply(new goog.labs.testing.GreaterThanEqualToMatcher(a), b);
};
webdriver.testing.Assertion.prototype.lessThan = function(a, b) {
  return this.apply(new goog.labs.testing.LessThanMatcher(a), b);
};
webdriver.testing.Assertion.prototype.lessThanEqualTo = function(a, b) {
  return this.apply(new goog.labs.testing.LessThanEqualToMatcher(a), b);
};
webdriver.testing.Assertion.prototype.closeTo = function(a, b, c) {
  return this.apply(new goog.labs.testing.CloseToMatcher(a, b), c);
};
webdriver.testing.Assertion.prototype.instanceOf = function(a, b) {
  return this.apply(new goog.labs.testing.InstanceOfMatcher(a), b);
};
webdriver.testing.Assertion.prototype.isNull = function(a) {
  return this.apply(new goog.labs.testing.IsNullMatcher, a);
};
webdriver.testing.Assertion.prototype.isUndefined = function(a) {
  return this.apply(new goog.labs.testing.IsUndefinedMatcher, a);
};
webdriver.testing.Assertion.prototype.isNullOrUndefined = function(a) {
  return this.apply(new goog.labs.testing.IsNullOrUndefinedMatcher, a);
};
webdriver.testing.Assertion.prototype.contains = function(a, b) {
  return this.apply(new webdriver.testing.ContainsMatcher(a), b);
};
webdriver.testing.Assertion.prototype.endsWith = function(a, b) {
  return this.apply(new goog.labs.testing.EndsWithMatcher(a), b);
};
webdriver.testing.Assertion.prototype.startsWith = function(a, b) {
  return this.apply(new goog.labs.testing.StartsWithMatcher(a), b);
};
webdriver.testing.Assertion.prototype.matches = function(a, b) {
  return this.apply(new goog.labs.testing.RegexMatcher(a), b);
};
webdriver.testing.Assertion.prototype.equalTo = function(a, b) {
  return this.apply(webdriver.testing.asserts.equalTo(a), b);
};
webdriver.testing.Assertion.prototype.isTrue = function() {
  return this.equalTo(!0);
};
webdriver.testing.Assertion.prototype.isFalse = function() {
  return this.equalTo(!1);
};
webdriver.testing.NegatedAssertion = function(a) {
  webdriver.testing.Assertion.call(this, a);
  this.value = a;
};
goog.inherits(webdriver.testing.NegatedAssertion, webdriver.testing.Assertion);
webdriver.testing.NegatedAssertion.prototype.apply = function(a, b) {
  a = new goog.labs.testing.IsNotMatcher(a);
  return webdriver.testing.NegatedAssertion.superClass_.apply.call(this, a, b);
};
webdriver.testing.assert = function(a) {
  return new webdriver.testing.Assertion(a);
};
webdriver.testing.assert.register = function(a, b) {
  webdriver.testing.Assertion.prototype[a] = function(a, d) {
    var e;
    e = goog.isFunction(b) ? new b(a) : new webdriver.testing.Assertion.DelegatingMatcher_(a);
    return this.apply(e, d);
  };
};
webdriver.testing.asserts.assertThat = function(a, b, c) {
  var d = goog.array.slice(arguments, 0), e = 2 < d.length ? d.shift() : "";
  e && (e += "\n");
  var f = d.shift(), g = d.shift();
  return webdriver.promise.when(f, function(a) {
    goog.labs.testing.assertThat(a, g, e);
  });
};
webdriver.testing.asserts.equalTo = function(a) {
  return goog.isString(a) ? new goog.labs.testing.EqualsMatcher(a) : goog.isNumber(a) ? new goog.labs.testing.EqualToMatcher(a) : new goog.labs.testing.ObjectEqualsMatcher(a);
};
goog.exportSymbol("assertThat", webdriver.testing.asserts.assertThat);
goog.exportSymbol("contains", containsString);
goog.exportSymbol("equalTo", webdriver.testing.asserts.equalTo);
goog.exportSymbol("equals", webdriver.testing.asserts.equalTo);
goog.exportSymbol("is", webdriver.testing.asserts.equalTo);
goog.exportSymbol("not", isNot);
goog.exportSymbol("or", anyOf);
exports.ActionSequence = webdriver.ActionSequence;
exports.Builder = webdriver.Builder;
exports.Button = webdriver.Button;
exports.By = webdriver.By;
exports.Capabilities = webdriver.Capabilities;
exports.Capability = webdriver.Capability;
exports.Command = webdriver.Command;
exports.CommandName = webdriver.CommandName;
exports.Error = bot.Error;
exports.ErrorCode = bot.ErrorCode;
exports.EventEmitter = webdriver.EventEmitter;
exports.Key = webdriver.Key;
exports.WebDriver = webdriver.WebDriver;
exports.WebElement = webdriver.WebElement;
exports.Session = webdriver.Session;
exports.http = {Executor:webdriver.http.Executor, Request:webdriver.http.Request, Response:webdriver.http.Response};
exports.http.CorsClient = webdriver.http.CorsClient;
exports.http.XhrClient = webdriver.http.XhrClient;
exports.response = bot.response;
exports.promise = webdriver.promise;
exports.stacktrace = webdriver.stacktrace;
exports.testing = {assert:webdriver.testing.assert, asserts:webdriver.testing.asserts};
})(typeof exports===typeof {}&&exports===this?exports:this.webdriver=this.webdriver||{})
