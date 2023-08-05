// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1xC6H":[function(require,module,exports) {
var Refresh = require("b1de192c664f450e");
var ErrorOverlay = require("8b8ece1aedf4b6b5");
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};
ErrorOverlay.setEditorHandler(function editorHandler(errorLocation) {
    let file = `${errorLocation.fileName}:${errorLocation.lineNumber || 1}:${errorLocation.colNumber || 1}`;
    fetch(`/__parcel_launch_editor?file=${encodeURIComponent(file)}`);
});
ErrorOverlay.startReportingRuntimeErrors({
    onError: function() {}
});
window.addEventListener("parcelhmraccept", ()=>{
    ErrorOverlay.dismissRuntimeErrors();
});

},{"b1de192c664f450e":"786KC","8b8ece1aedf4b6b5":"1dldy"}],"k8hhB":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "dedb1c3c9e76ab78";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h8J3U":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$ad24 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$ad24.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const Cart = ()=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        class: "nDVxx _340-t",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            class: "_3-bcQ",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    class: "_3djal",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                class: "_1rwo5 _1Ak49 _34Whq",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        class: "F8Sye",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                class: "_2YrH-",
                                                children: "Delivery address"
                                            }, void 0, false, {
                                                fileName: "src/components/Cart.js",
                                                lineNumber: 11,
                                                columnNumber: 33
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                class: "C2lmo _3za0v",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                    class: "_2C3aj _1eJQw",
                                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                        class: "_1ZSwS icon-tickRound"
                                                    }, void 0, false, {
                                                        fileName: "src/components/Cart.js",
                                                        lineNumber: 14,
                                                        columnNumber: 41
                                                    }, undefined)
                                                }, void 0, false, {
                                                    fileName: "src/components/Cart.js",
                                                    lineNumber: 13,
                                                    columnNumber: 37
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "src/components/Cart.js",
                                                lineNumber: 12,
                                                columnNumber: 33
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/components/Cart.js",
                                        lineNumber: 10,
                                        columnNumber: 29
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        class: "_2zPJt",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                class: "_1IPhI",
                                                children: "Change"
                                            }, void 0, false, {
                                                fileName: "src/components/Cart.js",
                                                lineNumber: 19,
                                                columnNumber: 33
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                class: "_2kejs",
                                                children: "home"
                                            }, void 0, false, {
                                                fileName: "src/components/Cart.js",
                                                lineNumber: 20,
                                                columnNumber: 33
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                class: "_1QRRt",
                                                children: "fd, WJPF+3QH, KHB Colony, Koramangala 4th Block, Koramangala, Bengaluru, Karnataka 560034, India"
                                            }, void 0, false, {
                                                fileName: "src/components/Cart.js",
                                                lineNumber: 21,
                                                columnNumber: 33
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                class: "_1__JV",
                                                children: "26 MINS"
                                            }, void 0, false, {
                                                fileName: "src/components/Cart.js",
                                                lineNumber: 22,
                                                columnNumber: 33
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/components/Cart.js",
                                        lineNumber: 18,
                                        columnNumber: 29
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        class: "_250uQ"
                                    }, void 0, false, {
                                        fileName: "src/components/Cart.js",
                                        lineNumber: 24,
                                        columnNumber: 29
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        class: "_2b4pY",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                            class: "_1q8J4 icon-marker-checkout"
                                        }, void 0, false, {
                                            fileName: "src/components/Cart.js",
                                            lineNumber: 26,
                                            columnNumber: 33
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/Cart.js",
                                        lineNumber: 25,
                                        columnNumber: 29
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Cart.js",
                                lineNumber: 9,
                                columnNumber: 25
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    class: "_1rwo5",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            class: "F8Sye",
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                class: "_2YrH-",
                                                children: "Choose payment method"
                                            }, void 0, false, {
                                                fileName: "src/components/Cart.js",
                                                lineNumber: 32,
                                                columnNumber: 37
                                            }, undefined)
                                        }, void 0, false, {
                                            fileName: "src/components/Cart.js",
                                            lineNumber: 31,
                                            columnNumber: 33
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                            class: "_3PNwl",
                                            children: "Proceed to Pay"
                                        }, void 0, false, {
                                            fileName: "src/components/Cart.js",
                                            lineNumber: 34,
                                            columnNumber: 33
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            class: "_2b4pY",
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                class: "_1q8J4 icon-wallet-checkout"
                                            }, void 0, false, {
                                                fileName: "src/components/Cart.js",
                                                lineNumber: 36,
                                                columnNumber: 37
                                            }, undefined)
                                        }, void 0, false, {
                                            fileName: "src/components/Cart.js",
                                            lineNumber: 35,
                                            columnNumber: 33
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/Cart.js",
                                    lineNumber: 30,
                                    columnNumber: 29
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/Cart.js",
                                lineNumber: 29,
                                columnNumber: 25
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Cart.js",
                        lineNumber: 8,
                        columnNumber: 21
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/Cart.js",
                    lineNumber: 7,
                    columnNumber: 17
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    class: "_2sMsA",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        class: "_1LDW5",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                class: "_1mJeT",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        class: "_1dcmE",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                            class: "",
                                            imageurl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/r4ufflqojich0r29efvc",
                                            imageid: "",
                                            alt: "img renderer",
                                            src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/r4ufflqojich0r29efvc",
                                            width: "50",
                                            height: "50"
                                        }, void 0, false, {
                                            fileName: "src/components/Cart.js",
                                            lineNumber: 46,
                                            columnNumber: 33
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/Cart.js",
                                        lineNumber: 45,
                                        columnNumber: 29
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        class: "u1PgV",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                class: "V7Usk",
                                                children: "Leon's - Burgers & Wings (Leon Grill)"
                                            }, void 0, false, {
                                                fileName: "src/components/Cart.js",
                                                lineNumber: 49,
                                                columnNumber: 33
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                class: "_2ofXa",
                                                children: "Koramangala"
                                            }, void 0, false, {
                                                fileName: "src/components/Cart.js",
                                                lineNumber: 50,
                                                columnNumber: 33
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/components/Cart.js",
                                        lineNumber: 48,
                                        columnNumber: 29
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Cart.js",
                                lineNumber: 44,
                                columnNumber: 25
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                class: "_1A195",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    class: "_1t-Al",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            class: "_3YMqW"
                                        }, void 0, false, {
                                            fileName: "src/components/Cart.js",
                                            lineNumber: 55,
                                            columnNumber: 33
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            class: "_2ObNr _2Y5ZT _2XVjJ _1S7oI",
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                        class: "_2zsON"
                                                    }, void 0, false, {
                                                        fileName: "src/components/Cart.js",
                                                        lineNumber: 58,
                                                        columnNumber: 41
                                                    }, undefined),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                        class: "_2pdCL",
                                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            class: "_2bXOy",
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                    class: "_3SG03",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                                                            class: "styles_icon__m6Ujp _2MJB6 icon-NonVeg",
                                                                            role: "presentation",
                                                                            style: "line-height: 1.2;",
                                                                            "aria-hidden": "true"
                                                                        }, void 0, false, {
                                                                            fileName: "src/components/Cart.js",
                                                                            lineNumber: 62,
                                                                            columnNumber: 53
                                                                        }, undefined),
                                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                            class: "_33KRy",
                                                                            children: [
                                                                                "Grilled Lamb Burger Combo",
                                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                                                                    class: "_23dMP",
                                                                                    children: "Customize"
                                                                                }, void 0, false, {
                                                                                    fileName: "src/components/Cart.js",
                                                                                    lineNumber: 64,
                                                                                    columnNumber: 57
                                                                                }, undefined)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "src/components/Cart.js",
                                                                            lineNumber: 63,
                                                                            columnNumber: 53
                                                                        }, undefined)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "src/components/Cart.js",
                                                                    lineNumber: 61,
                                                                    columnNumber: 49
                                                                }, undefined),
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                    class: "_2bWmk",
                                                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                        class: "_1yTZI",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                                class: "_3L1X9 _29ugw",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                                        class: "_1ds9T",
                                                                                        children: "+"
                                                                                    }, void 0, false, {
                                                                                        fileName: "src/components/Cart.js",
                                                                                        lineNumber: 70,
                                                                                        columnNumber: 61
                                                                                    }, undefined),
                                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                                        class: "_29Y5Z"
                                                                                    }, void 0, false, {
                                                                                        fileName: "src/components/Cart.js",
                                                                                        lineNumber: 71,
                                                                                        columnNumber: 61
                                                                                    }, undefined),
                                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                                        class: "_2zAXs",
                                                                                        children: "1"
                                                                                    }, void 0, false, {
                                                                                        fileName: "src/components/Cart.js",
                                                                                        lineNumber: 72,
                                                                                        columnNumber: 61
                                                                                    }, undefined)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "src/components/Cart.js",
                                                                                lineNumber: 69,
                                                                                columnNumber: 57
                                                                            }, undefined),
                                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                                class: "_1mx0r",
                                                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                                    class: "_2W2U4",
                                                                                    children: "719.33"
                                                                                }, void 0, false, {
                                                                                    fileName: "src/components/Cart.js",
                                                                                    lineNumber: 75,
                                                                                    columnNumber: 61
                                                                                }, undefined)
                                                                            }, void 0, false, {
                                                                                fileName: "src/components/Cart.js",
                                                                                lineNumber: 74,
                                                                                columnNumber: 57
                                                                            }, undefined)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "src/components/Cart.js",
                                                                        lineNumber: 68,
                                                                        columnNumber: 53
                                                                    }, undefined)
                                                                }, void 0, false, {
                                                                    fileName: "src/components/Cart.js",
                                                                    lineNumber: 67,
                                                                    columnNumber: 49
                                                                }, undefined)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "src/components/Cart.js",
                                                            lineNumber: 60,
                                                            columnNumber: 45
                                                        }, undefined)
                                                    }, void 0, false, {
                                                        fileName: "src/components/Cart.js",
                                                        lineNumber: 59,
                                                        columnNumber: 41
                                                    }, undefined),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                        class: "_2JQh7",
                                                        style: "height: 51px;",
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("textarea", {
                                                                class: "aeGJF",
                                                                maxlength: "140",
                                                                style: ""
                                                            }, void 0, false, {
                                                                fileName: "src/components/Cart.js",
                                                                lineNumber: 82,
                                                                columnNumber: 45
                                                            }, undefined),
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                class: "_2_0V3",
                                                                children: "Any suggestions? We will pass it on..."
                                                            }, void 0, false, {
                                                                fileName: "src/components/Cart.js",
                                                                lineNumber: 83,
                                                                columnNumber: 45
                                                            }, undefined),
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                                                class: "_3iLcN",
                                                                viewBox: "0 0 32 32",
                                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                                                    d: "M7.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.357-0.056 0.724-0.086 1.097-0.086zM25.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.358-0.056 0.724-0.086 1.097-0.086z"
                                                                }, void 0, false, {
                                                                    fileName: "src/components/Cart.js",
                                                                    lineNumber: 85,
                                                                    columnNumber: 49
                                                                }, undefined)
                                                            }, void 0, false, {
                                                                fileName: "src/components/Cart.js",
                                                                lineNumber: 84,
                                                                columnNumber: 45
                                                            }, undefined)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/components/Cart.js",
                                                        lineNumber: 81,
                                                        columnNumber: 41
                                                    }, undefined),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                        class: "DBHDW",
                                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            class: "_3yJGp",
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                    class: "_3wdKC",
                                                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                                                        class: "Checkbox_checkboxLabel__3HKUG",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                                                                type: "checkbox",
                                                                                class: "Checkbox_checkboxInput__16SSg",
                                                                                name: "CUTLERY_INSTRUCTION_CHK_BOX",
                                                                                value: "CUTLERY_INSTRUCTION_CHK_BOX"
                                                                            }, void 0, false, {
                                                                                fileName: "src/components/Cart.js",
                                                                                lineNumber: 92,
                                                                                columnNumber: 57
                                                                            }, undefined),
                                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                                                                class: "Checkbox_checkboxTick__TZzsL",
                                                                                viewBox: "0 0 24 24",
                                                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                                                                    d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                                                                                }, void 0, false, {
                                                                                    fileName: "src/components/Cart.js",
                                                                                    lineNumber: 94,
                                                                                    columnNumber: 61
                                                                                }, undefined)
                                                                            }, void 0, false, {
                                                                                fileName: "src/components/Cart.js",
                                                                                lineNumber: 93,
                                                                                columnNumber: 57
                                                                            }, undefined)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "src/components/Cart.js",
                                                                        lineNumber: 91,
                                                                        columnNumber: 53
                                                                    }, undefined)
                                                                }, void 0, false, {
                                                                    fileName: "src/components/Cart.js",
                                                                    lineNumber: 90,
                                                                    columnNumber: 49
                                                                }, undefined),
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                    "aria-hidden": "true",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                            class: "_2gBWe",
                                                                            children: "Opt in for No-contact Delivery"
                                                                        }, void 0, false, {
                                                                            fileName: "src/components/Cart.js",
                                                                            lineNumber: 99,
                                                                            columnNumber: 53
                                                                        }, undefined),
                                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                            class: "_2Ohbp",
                                                                            children: "Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)"
                                                                        }, void 0, false, {
                                                                            fileName: "src/components/Cart.js",
                                                                            lineNumber: 100,
                                                                            columnNumber: 53
                                                                        }, undefined)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "src/components/Cart.js",
                                                                    lineNumber: 98,
                                                                    columnNumber: 49
                                                                }, undefined)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "src/components/Cart.js",
                                                            lineNumber: 89,
                                                            columnNumber: 45
                                                        }, undefined)
                                                    }, void 0, false, {
                                                        fileName: "src/components/Cart.js",
                                                        lineNumber: 88,
                                                        columnNumber: 41
                                                    }, undefined),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                        class: "_3PZFF",
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                role: "button",
                                                                "aria-label": "Apply Coupon",
                                                                class: "_2aJip",
                                                                children: [
                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                                                        class: "icon-offers-coupon _2W5PY"
                                                                    }, void 0, false, {
                                                                        fileName: "src/components/Cart.js",
                                                                        lineNumber: 106,
                                                                        columnNumber: 49
                                                                    }, undefined),
                                                                    " Apply Coupon"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "src/components/Cart.js",
                                                                lineNumber: 105,
                                                                columnNumber: 45
                                                            }, undefined),
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                class: "_3e0Qi",
                                                                children: "Bill Details"
                                                            }, void 0, false, {
                                                                fileName: "src/components/Cart.js",
                                                                lineNumber: 108,
                                                                columnNumber: 45
                                                            }, undefined),
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                class: "_3rlIu",
                                                                children: [
                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                        class: "_2VV4a",
                                                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                            children: "Item Total"
                                                                        }, void 0, false, {
                                                                            fileName: "src/components/Cart.js",
                                                                            lineNumber: 111,
                                                                            columnNumber: 53
                                                                        }, undefined)
                                                                    }, void 0, false, {
                                                                        fileName: "src/components/Cart.js",
                                                                        lineNumber: 110,
                                                                        columnNumber: 49
                                                                    }, undefined),
                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                        class: "_1I8bA",
                                                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                            class: "",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {}, void 0, false, {
                                                                                    fileName: "src/components/Cart.js",
                                                                                    lineNumber: 115,
                                                                                    columnNumber: 57
                                                                                }, undefined),
                                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                                    class: "ZH2UW",
                                                                                    children: "719.33"
                                                                                }, void 0, false, {
                                                                                    fileName: "src/components/Cart.js",
                                                                                    lineNumber: 116,
                                                                                    columnNumber: 57
                                                                                }, undefined)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "src/components/Cart.js",
                                                                            lineNumber: 114,
                                                                            columnNumber: 53
                                                                        }, undefined)
                                                                    }, void 0, false, {
                                                                        fileName: "src/components/Cart.js",
                                                                        lineNumber: 113,
                                                                        columnNumber: 49
                                                                    }, undefined)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "src/components/Cart.js",
                                                                lineNumber: 109,
                                                                columnNumber: 45
                                                            }, undefined),
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                class: "_3rlIu",
                                                                children: [
                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                        class: "_2VV4a",
                                                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                            children: [
                                                                                "Delivery Fee | 1.3 kms",
                                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                                    class: "_3sNvC",
                                                                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                                        class: "icon-info"
                                                                                    }, void 0, false, {
                                                                                        fileName: "src/components/Cart.js",
                                                                                        lineNumber: 124,
                                                                                        columnNumber: 61
                                                                                    }, undefined)
                                                                                }, void 0, false, {
                                                                                    fileName: "src/components/Cart.js",
                                                                                    lineNumber: 123,
                                                                                    columnNumber: 57
                                                                                }, undefined)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "src/components/Cart.js",
                                                                            lineNumber: 122,
                                                                            columnNumber: 53
                                                                        }, undefined)
                                                                    }, void 0, false, {
                                                                        fileName: "src/components/Cart.js",
                                                                        lineNumber: 121,
                                                                        columnNumber: 49
                                                                    }, undefined),
                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                        class: "_1I8bA",
                                                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                            class: "",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {}, void 0, false, {
                                                                                    fileName: "src/components/Cart.js",
                                                                                    lineNumber: 130,
                                                                                    columnNumber: 57
                                                                                }, undefined),
                                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                                    class: "ZH2UW",
                                                                                    children: "27"
                                                                                }, void 0, false, {
                                                                                    fileName: "src/components/Cart.js",
                                                                                    lineNumber: 131,
                                                                                    columnNumber: 57
                                                                                }, undefined)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "src/components/Cart.js",
                                                                            lineNumber: 129,
                                                                            columnNumber: 53
                                                                        }, undefined)
                                                                    }, void 0, false, {
                                                                        fileName: "src/components/Cart.js",
                                                                        lineNumber: 128,
                                                                        columnNumber: 49
                                                                    }, undefined)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "src/components/Cart.js",
                                                                lineNumber: 120,
                                                                columnNumber: 45
                                                            }, undefined),
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                class: "_1Accg"
                                                            }, void 0, false, {
                                                                fileName: "src/components/Cart.js",
                                                                lineNumber: 135,
                                                                columnNumber: 45
                                                            }, undefined),
                                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                class: "_3rlIu",
                                                                children: [
                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                        class: "_2VV4a",
                                                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                            children: [
                                                                                "GST and Restaurant Charges",
                                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                                    class: "_3sNvC",
                                                                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                                        class: "icon-info"
                                                                                    }, void 0, false, {
                                                                                        fileName: "src/components/Cart.js",
                                                                                        lineNumber: 140,
                                                                                        columnNumber: 61
                                                                                    }, undefined)
                                                                                }, void 0, false, {
                                                                                    fileName: "src/components/Cart.js",
                                                                                    lineNumber: 139,
                                                                                    columnNumber: 57
                                                                                }, undefined)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "src/components/Cart.js",
                                                                            lineNumber: 138,
                                                                            columnNumber: 53
                                                                        }, undefined)
                                                                    }, void 0, false, {
                                                                        fileName: "src/components/Cart.js",
                                                                        lineNumber: 137,
                                                                        columnNumber: 49
                                                                    }, undefined),
                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                        class: "_1I8bA",
                                                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                            class: "",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {}, void 0, false, {
                                                                                    fileName: "src/components/Cart.js",
                                                                                    lineNumber: 146,
                                                                                    columnNumber: 57
                                                                                }, undefined),
                                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                                    class: "ZH2UW",
                                                                                    children: "70.62"
                                                                                }, void 0, false, {
                                                                                    fileName: "src/components/Cart.js",
                                                                                    lineNumber: 147,
                                                                                    columnNumber: 57
                                                                                }, undefined)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "src/components/Cart.js",
                                                                            lineNumber: 145,
                                                                            columnNumber: 53
                                                                        }, undefined)
                                                                    }, void 0, false, {
                                                                        fileName: "src/components/Cart.js",
                                                                        lineNumber: 144,
                                                                        columnNumber: 49
                                                                    }, undefined)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "src/components/Cart.js",
                                                                lineNumber: 136,
                                                                columnNumber: 45
                                                            }, undefined)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/components/Cart.js",
                                                        lineNumber: 104,
                                                        columnNumber: 41
                                                    }, undefined),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                        class: "_3DPdG"
                                                    }, void 0, false, {
                                                        fileName: "src/components/Cart.js",
                                                        lineNumber: 152,
                                                        columnNumber: 41
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/components/Cart.js",
                                                lineNumber: 57,
                                                columnNumber: 37
                                            }, undefined)
                                        }, void 0, false, {
                                            fileName: "src/components/Cart.js",
                                            lineNumber: 56,
                                            columnNumber: 33
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            class: "_1v28S _2Cjz6"
                                        }, void 0, false, {
                                            fileName: "src/components/Cart.js",
                                            lineNumber: 155,
                                            columnNumber: 33
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/Cart.js",
                                    lineNumber: 54,
                                    columnNumber: 29
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/Cart.js",
                                lineNumber: 53,
                                columnNumber: 25
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                class: "ZBf6d",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        children: "TO PAY"
                                    }, void 0, false, {
                                        fileName: "src/components/Cart.js",
                                        lineNumber: 159,
                                        columnNumber: 29
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        class: "_3ZAW1",
                                        children: "817"
                                    }, void 0, false, {
                                        fileName: "src/components/Cart.js",
                                        lineNumber: 160,
                                        columnNumber: 29
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Cart.js",
                                lineNumber: 158,
                                columnNumber: 25
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                class: "_1DqhC",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        class: "CancellationNoticeV2Awareness_wrapper__3fjf5 MQb2s",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                class: "CancellationNoticeV2Awareness_header__1BwAV _2SlxS",
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                        alt: "",
                                                        class: "CancellationNoticeV2Awareness_logo__13uwl",
                                                        loading: "lazy",
                                                        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/CancellationPolicyAssets/CancellationsReviewOrderCollapsed.png",
                                                        width: "48",
                                                        height: "48"
                                                    }, void 0, false, {
                                                        fileName: "src/components/Cart.js",
                                                        lineNumber: 166,
                                                        columnNumber: 41
                                                    }, undefined),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                        "data-cy": "cart-cancellation-awareness-notice-title",
                                                        class: "CancellationNoticeV2Awareness_title__Nv8xQ",
                                                        children: "Review your order and address details to avoid cancellations"
                                                    }, void 0, false, {
                                                        fileName: "src/components/Cart.js",
                                                        lineNumber: 167,
                                                        columnNumber: 41
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/components/Cart.js",
                                                lineNumber: 165,
                                                columnNumber: 37
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                "data-cy": "cart-cancellation-awareness-notice-message",
                                                class: "NoticeBody_message__1YK1T _14BFZ",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                            style: "color:red",
                                                            children: "Note:"
                                                        }, void 0, false, {
                                                            fileName: "src/components/Cart.js",
                                                            lineNumber: 171,
                                                            columnNumber: 45
                                                        }, undefined),
                                                        " If you cancel within 60 seconds of placing your order, a 100% refund will be issued. No refund for cancellations made after 60 seconds.",
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                            fileName: "src/components/Cart.js",
                                                            lineNumber: 171,
                                                            columnNumber: 217
                                                        }, undefined),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("br", {}, void 0, false, {
                                                            fileName: "src/components/Cart.js",
                                                            lineNumber: 171,
                                                            columnNumber: 223
                                                        }, undefined),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                            style: "color:grey",
                                                            children: "Avoid cancellation as it leads to food wastage."
                                                        }, void 0, false, {
                                                            fileName: "src/components/Cart.js",
                                                            lineNumber: 172,
                                                            columnNumber: 45
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/components/Cart.js",
                                                    lineNumber: 170,
                                                    columnNumber: 41
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "src/components/Cart.js",
                                                lineNumber: 169,
                                                columnNumber: 37
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                class: "ActionButtons_wrapper__3vWGV _20sAM",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    "data-cy": "cart-cancellation-awareness-notice-anchor-btn",
                                                    href: "https://www.swiggy.com/refund-policy",
                                                    class: "ActionButtons_actionButton__1dM-h",
                                                    children: "Read cancellation policy"
                                                }, void 0, false, {
                                                    fileName: "src/components/Cart.js",
                                                    lineNumber: 176,
                                                    columnNumber: 41
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "src/components/Cart.js",
                                                lineNumber: 175,
                                                columnNumber: 37
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/components/Cart.js",
                                        lineNumber: 164,
                                        columnNumber: 33
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/components/Cart.js",
                                    lineNumber: 163,
                                    columnNumber: 29
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/Cart.js",
                                lineNumber: 162,
                                columnNumber: 25
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Cart.js",
                        lineNumber: 43,
                        columnNumber: 21
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/Cart.js",
                    lineNumber: 42,
                    columnNumber: 17
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/components/Cart.js",
            lineNumber: 6,
            columnNumber: 13
        }, undefined)
    }, void 0, false, {
        fileName: "src/components/Cart.js",
        lineNumber: 5,
        columnNumber: 9
    }, undefined);
};
_c = Cart;
exports.default = Cart;
var _c;
$RefreshReg$(_c, "Cart");

  $parcel$ReactRefreshHelpers$ad24.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}]},["1xC6H","k8hhB"], null, "parcelRequire8442")

//# sourceMappingURL=Cart.9e76ab78.js.map
