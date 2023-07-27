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

},{"b1de192c664f450e":"786KC","8b8ece1aedf4b6b5":"1dldy"}],"2A0lH":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7b8910d17af28477";
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

},{}],"jW49j":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$5bc9 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$5bc9.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const Starting = ()=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "nDVxx",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "_1MdYR",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "_1TWur",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "_2COmU",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "m3-34",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "_2TYHu",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                                width: "200",
                                                className: "_1envo",
                                                viewBox: "0 0 200 200",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                                    d: "M19.9253444,58.766315 C19.8876048,58.7384908 19.8458927,58.7037105 19.8021942,58.6654521 C19.094081,57.7879944 14.7152991,52.3026415 10.2535896,45.2670801 C8.91532497,43.0252402 8.046322,41.2767839 8.21317057,40.8246398 C8.64965835,39.6490651 16.4279798,39.0056292 18.8234486,40.0713975 C19.5519214,40.3948545 19.5335482,40.8231492 19.5335482,41.0725738 C19.5335482,42.1487762 19.4804148,45.0365363 19.4804148,45.0365363 C19.4809114,45.6332671 19.9660634,46.1172104 20.5634408,46.1162167 C21.1618115,46.1162167 21.6449771,45.630286 21.6429908,45.0320645 L21.6305765,37.8365137 L21.6285902,37.8365137 C21.6285902,37.2119586 20.9467953,37.055944 20.8186794,37.0315978 C19.5683083,37.0256354 17.0293299,37.0171888 14.3031434,37.0171888 C8.28765654,37.0171888 6.94343308,37.264129 5.92148558,36.5958501 C3.707266,35.1479951 0.0867513255,25.3896318 0.0023338937,19.8993102 C-0.117836803,12.1537335 4.47149205,5.44808831 10.9338947,2.12557426 C13.6337628,0.766160708 16.6832184,0 19.9039917,0 C30.132405,0 38.555775,7.72023676 39.6765405,17.6529986 C39.6775337,17.6614452 39.6775337,17.6708856 39.67952,17.6793322 C39.8851013,20.0806647 26.6504342,20.5909417 24.0325007,19.8923542 C23.6312696,19.785032 23.528479,19.3741274 23.528479,19.1972447 C23.5254995,17.371278 23.5130852,12.2327345 23.5130852,12.2327345 C23.5110989,11.6355068 23.025947,11.1510667 22.4285695,11.1525572 L22.4275764,11.1525572 C21.831192,11.153551 21.3470332,11.6389848 21.3470332,12.2372063 L21.3683859,21.7029181 C21.3867591,22.2991521 21.8873048,22.4601353 22.024359,22.4869659 C23.5130852,22.4874627 26.9945594,22.4839847 30.2371819,22.4839847 C34.6199364,22.4839847 36.460733,22.9917773 37.6857789,23.9243867 C38.5001588,24.5454638 38.8154827,25.7344538 38.5398847,27.2796936 C36.0823442,41.0258688 20.5103075,58.0562997 19.9253444,58.766315 Z M62.158293,26.6840558 C66.0871796,28.3679201 68.5213811,30.23612 68.5213811,34.3367194 C68.5213811,38.5257602 65.3482788,41.2316689 60.4386603,41.2316689 C56.4601164,41.2316689 53.2666546,39.4295516 51.6761309,36.2864046 L51.418906,35.7796057 L56.0966249,33.0692253 L56.4030105,33.5700618 C57.4562421,35.2916875 58.633617,36.0255522 60.3418285,36.0255522 C61.8141679,36.0255522 62.8033415,35.3731729 62.8033415,34.4013114 C62.8033415,33.3246122 62.0872831,32.9211605 59.8740566,31.9522802 L58.7493185,31.4698275 C55.7475339,30.1904087 52.9667244,28.4126376 52.9667244,24.1068343 C52.9667244,20.2372755 55.9327557,17.5348449 60.1799457,17.5348449 C63.3977396,17.5348449 65.6030208,18.7804771 67.1210449,21.4535929 L67.4026018,21.9499577 L62.8703789,24.8625609 L62.5580344,24.3035915 C61.8002638,22.9481529 61.0866882,22.6763695 60.1799457,22.6763695 C59.2319876,22.6763695 58.6212026,23.199068 58.6212026,24.0099463 C58.6212026,24.9415619 59.0710979,25.3504791 61.0320652,26.2001125 L62.158293,26.6840558 Z M95.2686968,27.476898 L98.5709081,18.2690574 L104.238794,18.2690574 L95.8387627,41.611619 L94.5799498,41.611619 L89.484613,30.6796684 C89.2477476,30.1788318 89.0034336,29.556761 88.7928866,28.9868606 C88.5773739,29.5577547 88.327101,30.1813161 88.089739,30.6821527 L82.7952763,41.611619 L81.5449052,41.611619 L73.0103029,18.2690574 L79.065019,18.2690574 L82.4034802,27.476898 C82.61651,28.0641885 82.8350022,28.7801662 83.0261829,29.4444702 C83.2531168,28.7588011 83.5257354,28.0184772 83.8107684,27.4217464 L88.1955091,18.0767719 L89.4086373,18.0767719 L93.8614085,27.4227401 C94.1454483,28.0189741 94.4190601,28.7597949 94.6450009,29.445464 C94.8371747,28.7801662 95.0571566,28.0641885 95.2686968,27.476898 Z M110.84853,40.9414023 L110.84853,17.7921198 L116.569052,17.7921198 L116.569052,40.9414023 L110.84853,40.9414023 Z M135.325265,33.163629 L135.325265,27.9903052 L145.94746,27.9903052 L145.94746,38.3652739 L145.727975,38.5461315 C144.512861,39.5438298 141.291094,41.2316689 136.926713,41.2316689 C129.564023,41.2316689 124.423995,36.3529841 124.423995,29.3676057 C124.423995,22.5114114 129.383767,17.5348449 136.217607,17.5348449 C139.975672,17.5348449 142.730163,18.594154 144.637004,20.7738862 L145.009434,21.1996966 L141.110342,25.059815 L140.686765,24.6235704 C139.59778,23.500663 138.469566,22.8050567 136.217607,22.8050567 C132.717263,22.8050567 130.272137,25.5035125 130.272137,29.3676057 C130.272137,33.3926822 132.883118,35.99425 136.926713,35.99425 C138.267957,35.99425 139.664321,35.7632093 140.614762,35.394041 L140.614762,33.163629 L135.325265,33.163629 Z M164.314658,33.163629 L164.314658,27.9903052 L174.936853,27.9903052 L174.936853,38.3652739 L174.717368,38.5461315 C173.501261,39.5438298 170.280487,41.2316689 165.917099,41.2316689 C158.554409,41.2316689 153.413388,36.3529841 153.413388,29.3676057 C153.413388,22.5114114 158.374153,17.5348449 165.206006,17.5348449 C168.966058,17.5348449 171.720549,18.594154 173.626397,20.7738862 L173.99982,21.1996966 L170.101721,25.059815 L169.677151,24.6235704 C168.587669,23.500663 167.458959,22.8050567 165.206006,22.8050567 C161.706656,22.8050567 159.26153,25.5035125 159.26153,29.3676057 C159.26153,33.3926822 161.873504,35.99425 165.917099,35.99425 C167.258343,35.99425 168.653714,35.7632093 169.604155,35.394041 L169.604155,33.163629 L164.314658,33.163629 Z M195.897503,17.7922192 L201.87674,17.7922192 L193.669876,33.1964218 L193.669876,40.9415017 L187.918566,40.9415017 L187.918566,33.5253443 L179.1759,17.7922192 L185.555871,17.7922192 L189.596487,25.1730995 C190.030988,25.9760279 190.484856,27.0373245 190.827988,27.8988826 C191.155726,27.0442805 191.589235,25.9924244 192.020757,25.1800555 L195.897503,17.7922192 Z"
                                                }, void 0, false, {
                                                    fileName: "src/components/Starting.js",
                                                    lineNumber: 12,
                                                    columnNumber: 45
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "src/components/Starting.js",
                                                lineNumber: 11,
                                                columnNumber: 41
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "_2fX4J",
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                        className: "x4bK8",
                                                        children: "Login"
                                                    }, void 0, false, {
                                                        fileName: "src/components/Starting.js",
                                                        lineNumber: 15,
                                                        columnNumber: 45
                                                    }, undefined),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                        className: "r2iyh",
                                                        children: "Sign up"
                                                    }, void 0, false, {
                                                        fileName: "src/components/Starting.js",
                                                        lineNumber: 16,
                                                        columnNumber: 45
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/components/Starting.js",
                                                lineNumber: 14,
                                                columnNumber: 41
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/components/Starting.js",
                                        lineNumber: 10,
                                        columnNumber: 37
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                                        className: "sZsUd",
                                        children: "Hungry?"
                                    }, void 0, false, {
                                        fileName: "src/components/Starting.js",
                                        lineNumber: 19,
                                        columnNumber: 37
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                                        className: "_1E3AJ",
                                        children: "Order food from favourite restaurants near you."
                                    }, void 0, false, {
                                        fileName: "src/components/Starting.js",
                                        lineNumber: 20,
                                        columnNumber: 37
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "_3mZgT",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "Al5GE",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                    className: "_3Um38 _2oQ4_",
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                                            type: "text",
                                                            className: "_381fS _3BIgv",
                                                            name: "location",
                                                            id: "location",
                                                            autoComplete: "off",
                                                            tabIndex: "1",
                                                            placeholder: "Enter your delivery location",
                                                            maxLength: "30"
                                                        }, void 0, false, {
                                                            fileName: "src/components/Starting.js",
                                                            lineNumber: 24,
                                                            columnNumber: 49
                                                        }, undefined),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("label", {
                                                            className: "_1Cvlf _2tL9P",
                                                            htmlFor: "location"
                                                        }, void 0, false, {
                                                            fileName: "src/components/Starting.js",
                                                            lineNumber: 25,
                                                            columnNumber: 49
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/components/Starting.js",
                                                    lineNumber: 23,
                                                    columnNumber: 45
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "src/components/Starting.js",
                                                lineNumber: 22,
                                                columnNumber: 41
                                            }, undefined),
                                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                                className: "_3iFC5",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                    children: "FIND FOOD"
                                                }, void 0, false, {
                                                    fileName: "src/components/Starting.js",
                                                    lineNumber: 29,
                                                    columnNumber: 45
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "src/components/Starting.js",
                                                lineNumber: 28,
                                                columnNumber: 41
                                            }, undefined)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/components/Starting.js",
                                        lineNumber: 21,
                                        columnNumber: 37
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Starting.js",
                                lineNumber: 9,
                                columnNumber: 33
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/Starting.js",
                            lineNumber: 8,
                            columnNumber: 29
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "_2h2bu"
                        }, void 0, false, {
                            fileName: "src/components/Starting.js",
                            lineNumber: 34,
                            columnNumber: 29
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/Starting.js",
                    lineNumber: 7,
                    columnNumber: 25
                }, undefined),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "_2tnu-",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "_2RZDN",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "_2Zn3W",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "_1Vw_y",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                            className: "_2dYjq",
                                            width: "105",
                                            height: "199",
                                            src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"
                                        }, void 0, false, {
                                            fileName: "src/components/Starting.js",
                                            lineNumber: 40,
                                            columnNumber: 41
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/Starting.js",
                                        lineNumber: 39,
                                        columnNumber: 37
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "_3fted",
                                        children: "No Minimum Order"
                                    }, void 0, false, {
                                        fileName: "src/components/Starting.js",
                                        lineNumber: 42,
                                        columnNumber: 37
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "_12i5X",
                                        children: "Order in for yourself or for the group, with no restrictions on order value"
                                    }, void 0, false, {
                                        fileName: "src/components/Starting.js",
                                        lineNumber: 43,
                                        columnNumber: 37
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Starting.js",
                                lineNumber: 38,
                                columnNumber: 33
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "_2Zn3W",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "_1Vw_y",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                            className: "_2dYjq",
                                            width: "112",
                                            height: "206",
                                            src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"
                                        }, void 0, false, {
                                            fileName: "src/components/Starting.js",
                                            lineNumber: 47,
                                            columnNumber: 41
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/Starting.js",
                                        lineNumber: 46,
                                        columnNumber: 37
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "_3fted",
                                        children: "Live Order Tracking"
                                    }, void 0, false, {
                                        fileName: "src/components/Starting.js",
                                        lineNumber: 49,
                                        columnNumber: 37
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "_12i5X",
                                        children: "Know where your order is at all times, from the restaurant to your doorstep"
                                    }, void 0, false, {
                                        fileName: "src/components/Starting.js",
                                        lineNumber: 50,
                                        columnNumber: 37
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Starting.js",
                                lineNumber: 45,
                                columnNumber: 33
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "_2Zn3W",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "_1Vw_y",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                            className: "_2dYjq",
                                            width: "124",
                                            height: "188",
                                            src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"
                                        }, void 0, false, {
                                            fileName: "src/components/Starting.js",
                                            lineNumber: 54,
                                            columnNumber: 41
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/Starting.js",
                                        lineNumber: 53,
                                        columnNumber: 37
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "_3fted",
                                        children: "Lightning-Fast Delivery"
                                    }, void 0, false, {
                                        fileName: "src/components/Starting.js",
                                        lineNumber: 56,
                                        columnNumber: 37
                                    }, undefined),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "_12i5X",
                                        children: "Experience Swiggy's superfast delivery for food delivered fresh & on time"
                                    }, void 0, false, {
                                        fileName: "src/components/Starting.js",
                                        lineNumber: 57,
                                        columnNumber: 37
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "src/components/Starting.js",
                                lineNumber: 52,
                                columnNumber: 33
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/Starting.js",
                        lineNumber: 37,
                        columnNumber: 29
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/Starting.js",
                    lineNumber: 36,
                    columnNumber: 25
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "src/components/Starting.js",
            lineNumber: 6,
            columnNumber: 21
        }, undefined)
    }, void 0, false, {
        fileName: "src/components/Starting.js",
        lineNumber: 5,
        columnNumber: 17
    }, undefined);
};
_c = Starting;
exports.default = Starting;
var _c;
$RefreshReg$(_c, "Starting");

  $parcel$ReactRefreshHelpers$5bc9.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}]},["1xC6H","2A0lH"], null, "parcelRequire8442")

//# sourceMappingURL=Starting.7af28477.js.map
