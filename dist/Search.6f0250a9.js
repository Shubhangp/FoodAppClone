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

},{"b1de192c664f450e":"786KC","8b8ece1aedf4b6b5":"1dldy"}],"hlclX":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7f212b9a6f0250a9";
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

},{}],"jqPPz":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$8a55 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$8a55.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _searchByPopularCui = require("./SearchByPopularCui");
var _searchByPopularCuiDefault = parcelHelpers.interopDefault(_searchByPopularCui);
var _searchSuggest = require("./SearchSuggest");
var _searchSuggestDefault = parcelHelpers.interopDefault(_searchSuggest);
var _searchBy = require("./SearchBy");
var _searchByDefault = parcelHelpers.interopDefault(_searchBy);
var _userLocation = require("../utils/UserLocation");
var _userLocationDefault = parcelHelpers.interopDefault(_userLocation);
var _constants = require("../utils/constants");
var _s = $RefreshSig$();
const Search = ()=>{
    _s();
    const [popularCusi, setPopularCusi] = (0, _react.useState)([]);
    const [searchApi, setSearchApi] = (0, _react.useState)([
        "1"
    ]);
    const [searchText, setSearchText] = (0, _react.useState)("");
    const [searchByApi, setSearchByApi] = (0, _react.useState)([]);
    const [searchByData, setSearchByData] = (0, _react.useState)([]);
    const [searchByRes, setSearchByRes] = (0, _react.useState)([]);
    const { latitude , longitude  } = (0, _react.useContext)((0, _userLocationDefault.default));
    (0, _react.useEffect)(()=>{
        fetchData();
    }, []);
    const fetchData = async ()=>{
        if (latitude == undefined && longitude == undefined) {
            var data = await fetch(`https://www.swiggy.com/dapi/landing/PRE_SEARCH?${(0, _constants.Lat)}${(0, _constants.Lng)}`);
            var json = await data.json();
        } else {
            var data = await fetch(`https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=${latitude}&lng=${longitude}`);
            var json = await data.json();
        }
        console.log(json);
        setPopularCusi(json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
    };
    // console.log(popularCusi);
    (0, _react.useEffect)(()=>{
        fetchSearchData();
    }, [
        searchText
    ]);
    const fetchSearchData = async ()=>{
        if (latitude == undefined && longitude == undefined) {
            var dataSearch = await fetch(`https://www.swiggy.com/dapi/restaurants/search/suggest?${(0, _constants.Lat)}${(0, _constants.Lng)}&str=${searchText}&trackingId=undefined`);
            var json1 = await dataSearch.json();
        } else {
            var dataSearch = await fetch(`https://www.swiggy.com/dapi/restaurants/search/suggest?lat=${latitude}&lng=${longitude}&str=${searchText}&trackingId=undefined`);
            var json1 = await dataSearch.json();
        }
        setSearchApi(json1?.data?.suggestions);
    };
    (0, _react.useEffect)(()=>{
        fetchSearchBy();
    }, [
        searchByApi
    ]);
    const fetchSearchBy = async ()=>{
        if (latitude == undefined && longitude == undefined) {
            var dataSearchBy = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?${(0, _constants.Lat)}${(0, _constants.Lng)}&str=${searchText}&trackingId=undefined&submitAction=SUGGESTION&${searchByApi}`);
            var json2 = await dataSearchBy.json();
        } else {
            var dataSearchBy = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=${latitude}&lng=${longitude}&str=${searchText}&trackingId=undefined&submitAction=SUGGESTION&${searchByApi}`);
            var json2 = await dataSearchBy.json();
        }
        setSearchByData(json2?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards);
    };
    (0, _react.useEffect)(()=>{
        fetchSearchByRes();
    }, [
        searchByApi
    ]);
    const fetchSearchByRes = async ()=>{
        if (latitude == undefined && longitude == undefined) {
            var dataSearchByRes = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?${(0, _constants.Lat)}${(0, _constants.Lng)}&str=${searchText}&trackingId=undefined&submitAction=SUGGESTION&${searchByApi}&selectedPLTab=RESTAURANT`);
            var json3 = await dataSearchByRes.json();
        } else {
            var dataSearchByRes = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=${latitude}&lng=${longitude}&str=${searchText}&trackingId=undefined&submitAction=SUGGESTION&${searchByApi}&selectedPLTab=RESTAURANT`);
            var json3 = await dataSearchByRes.json();
        }
        setSearchByRes(json3?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards);
    };
    function suggestionClick(e) {
        setSearchByApi(e[1]);
    }
    // Popular Cuisine Search
    function selectClick(e) {
        setSearchText(e);
    }
    function backClick() {
        setSearchText("");
        setSearchByData(undefined);
    }
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "nDVxx",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "rbcmH",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "_1JbgW _1jet9",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("form", {
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "_1QBzC",
                            children: [
                                searchByData == undefined ? "" : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "_38OJP _2EyGE",
                                    onClick: ()=>backClick(),
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                        className: "_16EzP",
                                        viewBox: "0 0 22 24",
                                        height: "20",
                                        width: "20",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                            d: "M16.7806341,2.29035615 C17.3106478,1.84800244 18.0989073,1.91906491 18.541261,2.4490786 C18.9541245,2.94375805 18.9197454,3.66339831 18.4824058,4.11680172 L18.3825386,4.20970553 L9.2,11.8720308 L18.3310359,19.4913284 C18.8257555,19.9041438 18.9207068,20.6183204 18.5715601,21.142665 L18.4899294,21.2519399 C18.077114,21.7466594 17.3629373,21.8416107 16.8385928,21.4924641 L16.7293179,21.4108334 L6.44914097,12.8326086 C5.88775027,12.3641599 5.85262408,11.5262778 6.34379605,11.011602 L6.44904776,10.9131814 L16.7806341,2.29035615 Z",
                                            fill: "#535766"
                                        }, void 0, false, {
                                            fileName: "src/components/Search.js",
                                            lineNumber: 108,
                                            columnNumber: 41
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/Search.js",
                                        lineNumber: 107,
                                        columnNumber: 37
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/components/Search.js",
                                    lineNumber: 106,
                                    columnNumber: 34
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "_2O4-3",
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                        type: "text",
                                        className: "_2FkHZ",
                                        placeholder: "Search for restaurants and food",
                                        maxLength: "200",
                                        autoFocus: "",
                                        value: searchText,
                                        onChange: (e)=>setSearchText(e.target.value)
                                    }, "input-text", false, {
                                        fileName: "src/components/Search.js",
                                        lineNumber: 113,
                                        columnNumber: 33
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/components/Search.js",
                                    lineNumber: 112,
                                    columnNumber: 29
                                }, undefined),
                                searchText == "" ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "_2p8XD",
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        className: "icon-magnifier",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                            className: "_1GTCc",
                                            viewBox: "5 -1 12 25",
                                            height: "17",
                                            width: "17",
                                            fill: "#686b78",
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                                d: "M17.6671481,17.1391632 L22.7253317,22.1973467 L20.9226784,24 L15.7041226,18.7814442 C14.1158488,19.8024478 12.225761,20.3946935 10.1973467,20.3946935 C4.56550765,20.3946935 0,15.8291858 0,10.1973467 C0,4.56550765 4.56550765,0 10.1973467,0 C15.8291858,0 20.3946935,4.56550765 20.3946935,10.1973467 C20.3946935,12.8789625 19.3595949,15.3188181 17.6671481,17.1391632 Z M10.1973467,17.8453568 C14.4212261,17.8453568 17.8453568,14.4212261 17.8453568,10.1973467 C17.8453568,5.97346742 14.4212261,2.54933669 10.1973467,2.54933669 C5.97346742,2.54933669 2.54933669,5.97346742 2.54933669,10.1973467 C2.54933669,14.4212261 5.97346742,17.8453568 10.1973467,17.8453568 Z"
                                            }, void 0, false, {
                                                fileName: "src/components/Search.js",
                                                lineNumber: 127,
                                                columnNumber: 45
                                            }, undefined)
                                        }, void 0, false, {
                                            fileName: "src/components/Search.js",
                                            lineNumber: 126,
                                            columnNumber: 41
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/Search.js",
                                        lineNumber: 125,
                                        columnNumber: 37
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/components/Search.js",
                                    lineNumber: 124,
                                    columnNumber: 34
                                }, undefined) : "",
                                searchText == "" ? "" : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                    onClick: ()=>setSearchText(""),
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        class: "_3XUKB",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                            class: "jBKjW",
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                                width: "19",
                                                height: "19",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                                    d: "M17.0251484,0.288798437 C17.5090218,-0.114571204 18.2292627,-0.0967643175 18.6927565,0.350826444 C19.189357,0.830387975 19.2031698,1.62172366 18.7236083,2.11832416 L18.7236083,2.11832416 L11.274,9.831 L18.7236083,17.5450054 C19.2031698,18.0416059 19.189357,18.8329416 18.6927565,19.3125031 C18.2292627,19.7600939 17.5090218,19.7779007 17.0251484,19.3745311 L16.9252588,19.2816513 L9.537,11.631 L2.14917595,19.2816513 L2.04928636,19.3745311 C1.56541292,19.7779007 0.845172034,19.7600939 0.381678232,19.3125031 C-0.114922271,18.8329416 -0.128735086,18.0416059 0.350826444,17.5450054 L0.350826444,17.5450054 L7.799,9.831 L0.350826444,2.11832416 C-0.128735086,1.62172366 -0.114922271,0.830387975 0.381678232,0.350826444 C0.845172034,-0.0967643175 1.56541292,-0.114571204 2.04928636,0.288798437 L2.14917595,0.381678232 L9.537,8.032 L16.9252588,0.381678232 Z",
                                                    fill: "#535766",
                                                    fillRule: "nonzero",
                                                    stroke: "none",
                                                    strokeWidth: "1"
                                                }, void 0, false, {
                                                    fileName: "src/components/Search.js",
                                                    lineNumber: 138,
                                                    columnNumber: 49
                                                }, undefined)
                                            }, void 0, false, {
                                                fileName: "src/components/Search.js",
                                                lineNumber: 137,
                                                columnNumber: 45
                                            }, undefined)
                                        }, void 0, false, {
                                            fileName: "src/components/Search.js",
                                            lineNumber: 136,
                                            columnNumber: 41
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/Search.js",
                                        lineNumber: 135,
                                        columnNumber: 37
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/components/Search.js",
                                    lineNumber: 134,
                                    columnNumber: 35
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/Search.js",
                            lineNumber: 104,
                            columnNumber: 25
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/Search.js",
                        lineNumber: 103,
                        columnNumber: 21
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/Search.js",
                    lineNumber: 102,
                    columnNumber: 17
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Search.js",
                lineNumber: 101,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "_2NSqs",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "_3X3Bt _13h-R",
                    children: [
                        searchByData == undefined ? "" : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _searchByDefault.default), {
                            searchByData: searchByData,
                            searchByRes: searchByRes
                        }, void 0, false, {
                            fileName: "src/components/Search.js",
                            lineNumber: 151,
                            columnNumber: 26
                        }, undefined),
                        searchText == "" || searchByData != undefined ? "" : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "_1VxLu",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _searchSuggestDefault.default), {
                                searchApi: searchApi,
                                suggestionClick: suggestionClick
                            }, void 0, false, {
                                fileName: "src/components/Search.js",
                                lineNumber: 155,
                                columnNumber: 29
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/Search.js",
                            lineNumber: 154,
                            columnNumber: 26
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "Search_wrapper__lQvnw _1cEc4",
                            children: searchText == "" && searchByData == undefined ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _searchByPopularCuiDefault.default), {
                                popularCusi: popularCusi,
                                selectClick: selectClick
                            }, void 0, false, {
                                fileName: "src/components/Search.js",
                                lineNumber: 160,
                                columnNumber: 30
                            }, undefined) : ""
                        }, void 0, false, {
                            fileName: "src/components/Search.js",
                            lineNumber: 158,
                            columnNumber: 21
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/Search.js",
                    lineNumber: 149,
                    columnNumber: 17
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/Search.js",
                lineNumber: 148,
                columnNumber: 13
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/Search.js",
        lineNumber: 100,
        columnNumber: 9
    }, undefined);
};
_s(Search, "Ud2oftN/X8e7olDItRJmHxKtyMw=");
_c = Search;
exports.default = Search;
var _c;
$RefreshReg$(_c, "Search");

  $parcel$ReactRefreshHelpers$8a55.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","./SearchByPopularCui":"3Fz2n","./SearchSuggest":"aqydN","./SearchBy":"8NNjA","../utils/UserLocation":"aVyyN","../utils/constants":"hB8jg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"3Fz2n":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$c08c = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$c08c.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const SearchByPopularCui = ({ popularCusi , selectClick  })=>{
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "Search_widgetsV2__27BBR",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "styles_container__jxIGl",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {}, void 0, false, {
                        fileName: "src/components/SearchByPopularCui.js",
                        lineNumber: 8,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "styles_headerContainer__2UgeD",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "_2cdfd",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h2", {
                                    className: "styles_headerContainerTitle__27_ET",
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: "Popular Cuisines"
                                    }, void 0, false, {
                                        fileName: "src/components/SearchByPopularCui.js",
                                        lineNumber: 12,
                                        columnNumber: 29
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/components/SearchByPopularCui.js",
                                    lineNumber: 11,
                                    columnNumber: 25
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: "styles_headerContainerSubtitle__1WRg5"
                                }, void 0, false, {
                                    fileName: "src/components/SearchByPopularCui.js",
                                    lineNumber: 14,
                                    columnNumber: 25
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/SearchByPopularCui.js",
                            lineNumber: 10,
                            columnNumber: 21
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/SearchByPopularCui.js",
                        lineNumber: 9,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "_fft45",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "styles_slider__podEu",
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "styles_row__1ivP1",
                                children: popularCusi.map((image)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "styles_slide__2c207",
                                        onClick: ()=>selectClick(image.entityId.slice(23)),
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            className: "Carousel_slide__klR8u",
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                        className: "styles_container __1Nshr",
                                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                                            className: "Ripple_container__17nxL styles_containerImg__3AXGh",
                                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                                alt: "",
                                                                className: "styles_img__3HNZ4",
                                                                loading: "lazy",
                                                                src: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" + image.imageId
                                                            }, void 0, false, {
                                                                fileName: "src/components/SearchByPopularCui.js",
                                                                lineNumber: 26,
                                                                columnNumber: 53
                                                            }, undefined)
                                                        }, void 0, false, {
                                                            fileName: "src/components/SearchByPopularCui.js",
                                                            lineNumber: 25,
                                                            columnNumber: 49
                                                        }, undefined)
                                                    }, void 0, false, {
                                                        fileName: "src/components/SearchByPopularCui.js",
                                                        lineNumber: 24,
                                                        columnNumber: 45
                                                    }, undefined),
                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {}, void 0, false, {
                                                        fileName: "src/components/SearchByPopularCui.js",
                                                        lineNumber: 31,
                                                        columnNumber: 45
                                                    }, undefined)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/components/SearchByPopularCui.js",
                                                lineNumber: 23,
                                                columnNumber: 41
                                            }, undefined)
                                        }, void 0, false, {
                                            fileName: "src/components/SearchByPopularCui.js",
                                            lineNumber: 22,
                                            columnNumber: 37
                                        }, undefined)
                                    }, image.id, false, {
                                        fileName: "src/components/SearchByPopularCui.js",
                                        lineNumber: 21,
                                        columnNumber: 33
                                    }, undefined))
                            }, void 0, false, {
                                fileName: "src/components/SearchByPopularCui.js",
                                lineNumber: 19,
                                columnNumber: 25
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/SearchByPopularCui.js",
                            lineNumber: 18,
                            columnNumber: 21
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/SearchByPopularCui.js",
                        lineNumber: 17,
                        columnNumber: 17
                    }, undefined)
                ]
            }, void 0, true, {
                fileName: "src/components/SearchByPopularCui.js",
                lineNumber: 7,
                columnNumber: 13
            }, undefined),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {}, void 0, false, {
                fileName: "src/components/SearchByPopularCui.js",
                lineNumber: 40,
                columnNumber: 13
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/SearchByPopularCui.js",
        lineNumber: 6,
        columnNumber: 9
    }, undefined);
};
_c = SearchByPopularCui;
exports.default = SearchByPopularCui;
var _c;
$RefreshReg$(_c, "SearchByPopularCui");

  $parcel$ReactRefreshHelpers$c08c.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"aqydN":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$a83e = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$a83e.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
const SearchSuggest = ({ searchApi , suggestionClick  })=>{
    return searchApi == undefined ? "" : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        children: searchApi.map((data, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                className: "_37IIF _1rZ-i",
                onClick: ()=>suggestionClick(data?.cta?.link.slice(23).split("&")),
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "_2f0cx",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                            className: "_2tuBw _12_oN _2f0cx",
                            alt: "",
                            src: `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/${data?.cloudinaryId}`
                        }, void 0, false, {
                            fileName: "src/components/SearchSuggest.js",
                            lineNumber: 9,
                            columnNumber: 21
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/SearchSuggest.js",
                        lineNumber: 8,
                        columnNumber: 17
                    }, undefined),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "_23LIV",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "RNzoC",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("b", {
                                    children: data?.text
                                }, void 0, false, {
                                    fileName: "src/components/SearchSuggest.js",
                                    lineNumber: 13,
                                    columnNumber: 25
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/SearchSuggest.js",
                                lineNumber: 12,
                                columnNumber: 21
                            }, undefined),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "_1Z_E6",
                                children: data?.tagToDisplay
                            }, void 0, false, {
                                fileName: "src/components/SearchSuggest.js",
                                lineNumber: 15,
                                columnNumber: 21
                            }, undefined)
                        ]
                    }, void 0, true, {
                        fileName: "src/components/SearchSuggest.js",
                        lineNumber: 11,
                        columnNumber: 17
                    }, undefined)
                ]
            }, index, true, {
                fileName: "src/components/SearchSuggest.js",
                lineNumber: 7,
                columnNumber: 17
            }, undefined))
    }, void 0, false, {
        fileName: "src/components/SearchSuggest.js",
        lineNumber: 5,
        columnNumber: 9
    }, undefined);
};
_c = SearchSuggest;
exports.default = SearchSuggest;
var _c;
$RefreshReg$(_c, "SearchSuggest");

  $parcel$ReactRefreshHelpers$a83e.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"8NNjA":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$877c = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$877c.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _searchByDish = require("./SearchByDish");
var _searchByDishDefault = parcelHelpers.interopDefault(_searchByDish);
var _searchByRestaurant = require("./SearchByRestaurant");
var _searchByRestaurantDefault = parcelHelpers.interopDefault(_searchByRestaurant);
var _s = $RefreshSig$();
const SearchBy = ({ searchByData , searchByRes  })=>{
    _s();
    const [btnContain, setBtnContain] = (0, _react.useState)("Dishes");
    function handlerClick(e) {
        setBtnContain(e);
    }
    let btnActiveDish = btnContain == "Dishes" ? " NavTab_tabSelected__2B4GW" : "";
    let btnActiveRest = btnContain == "Restaurents" ? " NavTab_tabSelected__2B4GW" : "";
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "Search_wrapper__lQvnw _3_gGY _3jBq8",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "Search_widgetsV2__27BBR Search_widgets__3o_bA Search_widgetsFullLength__2lPs9",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "NavTabs_wrapper__1me4c _3DdnR NavTabs_wrapperScrolled__10HRt",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                            onClick: ()=>handlerClick("Restaurents"),
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                className: `styles_container__1ieVH styles_size-sm__1emwv styles_variant-default__2VzW8 styles_rounded__3IerS styles_canClick__16iph NavTab_tab__1JygM${btnActiveRest}`,
                                role: "button",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    children: "Restaurants"
                                }, void 0, false, {
                                    fileName: "src/components/SearchBy.js",
                                    lineNumber: 23,
                                    columnNumber: 29
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/SearchBy.js",
                                lineNumber: 22,
                                columnNumber: 25
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/SearchBy.js",
                            lineNumber: 21,
                            columnNumber: 21
                        }, undefined),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                            onClick: ()=>handlerClick("Dishes"),
                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                className: `styles_container__1ieVH styles_size-sm__1emwv styles_variant-default__2VzW8 styles_rounded__3IerS styles_canClick__16iph NavTab_tab__1JygM${btnActiveDish}`,
                                role: "button",
                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    children: "Dishes"
                                }, void 0, false, {
                                    fileName: "src/components/SearchBy.js",
                                    lineNumber: 28,
                                    columnNumber: 29
                                }, undefined)
                            }, void 0, false, {
                                fileName: "src/components/SearchBy.js",
                                lineNumber: 27,
                                columnNumber: 25
                            }, undefined)
                        }, void 0, false, {
                            fileName: "src/components/SearchBy.js",
                            lineNumber: 26,
                            columnNumber: 21
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "src/components/SearchBy.js",
                    lineNumber: 20,
                    columnNumber: 17
                }, undefined)
            }, void 0, false, {
                fileName: "src/components/SearchBy.js",
                lineNumber: 19,
                columnNumber: 13
            }, undefined),
            btnContain == "Dishes" ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _searchByDishDefault.default), {
                searchByData: searchByData
            }, void 0, false, {
                fileName: "src/components/SearchBy.js",
                lineNumber: 35,
                columnNumber: 21
            }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _searchByRestaurantDefault.default), {
                searchByRes: searchByRes
            }, void 0, false, {
                fileName: "src/components/SearchBy.js",
                lineNumber: 37,
                columnNumber: 21
            }, undefined)
        ]
    }, void 0, true, {
        fileName: "src/components/SearchBy.js",
        lineNumber: 18,
        columnNumber: 9
    }, undefined);
};
_s(SearchBy, "hX2jlIwjQZzXgBtiYg7z2wtB2TI=");
_c = SearchBy;
exports.default = SearchBy;
var _c;
$RefreshReg$(_c, "SearchBy");

  $parcel$ReactRefreshHelpers$877c.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","./SearchByDish":"8ZhNI","./SearchByRestaurant":"gQ3Ie","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"8ZhNI":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$4bef = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$4bef.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRouterDom = require("react-router-dom");
var _vegePng = require("../utils/vege.png");
var _vegePngDefault = parcelHelpers.interopDefault(_vegePng);
var _nonvegPng = require("../utils/nonveg.png");
var _nonvegPngDefault = parcelHelpers.interopDefault(_nonvegPng);
const SearchByDish = ({ searchByData  })=>{
    // console.log(searchByData);
    return searchByData == undefined ? "" : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "search_card_dish",
        children: searchByData.map((card, index)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "Search_widgetsV2__27BBR Search_widgets__3o_bA",
                children: card?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Dish" ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "styles_container__2GTLR styles_containerV2__1_U51",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "styles_containerInner__2Q_JM styles_containerInnerV2__2yjT5",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                                    to: "/restaurents/" + card?.card?.card?.restaurant?.info?.id,
                                    className: "styles_restaurant__20fB8",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                    className: "styles_restaurantName__5VIQZ styles_restaurantNameBold__2OmFY",
                                                    children: [
                                                        "By ",
                                                        card?.card?.card?.restaurant?.info?.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/components/SearchByDish.js",
                                                    lineNumber: 21,
                                                    columnNumber: 45
                                                }, undefined),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                    className: "styles_restaurantMeta__2yx7V",
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                    className: "styles_restaurantMetaRatingStar__8olHv icon-star",
                                                                    children: "★"
                                                                }, void 0, false, {
                                                                    fileName: "src/components/SearchByDish.js",
                                                                    lineNumber: 24,
                                                                    columnNumber: 53
                                                                }, undefined),
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                    className: "styles_restaurantMetaRating__3MhTg",
                                                                    children: card?.card?.card?.restaurant?.info?.avgRatingString
                                                                }, void 0, false, {
                                                                    fileName: "src/components/SearchByDish.js",
                                                                    lineNumber: 25,
                                                                    columnNumber: 53
                                                                }, undefined)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "src/components/SearchByDish.js",
                                                            lineNumber: 23,
                                                            columnNumber: 49
                                                        }, undefined),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                            className: "styles_restaurantMetaDot__usB4d"
                                                        }, void 0, false, {
                                                            fileName: "src/components/SearchByDish.js",
                                                            lineNumber: 27,
                                                            columnNumber: 49
                                                        }, undefined),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            children: card?.card?.card?.restaurant?.info?.sla.slaString
                                                        }, void 0, false, {
                                                            fileName: "src/components/SearchByDish.js",
                                                            lineNumber: 28,
                                                            columnNumber: 49
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/components/SearchByDish.js",
                                                    lineNumber: 22,
                                                    columnNumber: 45
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/components/SearchByDish.js",
                                            lineNumber: 20,
                                            columnNumber: 41
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                            width: "28",
                                            height: "28",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M13.2307 5.53999C12.9769 5.28615 12.5653 5.28615 12.3115 5.53999C12.0576 5.79383 12.0576 6.20539 12.3115 6.45923L17.2019 11.3496L5.39414 11.3496C5.03516 11.3496 4.74414 11.6406 4.74414 11.9996C4.74414 12.3586 5.03516 12.6496 5.39414 12.6496L17.2019 12.6496L12.3115 17.54C12.0576 17.7938 12.0576 18.2054 12.3115 18.4592C12.5653 18.7131 12.9769 18.7131 13.2307 18.4592L18.949 12.741C19.3584 12.3315 19.3584 11.6677 18.949 11.2583L13.2307 5.53999Z",
                                                fill: "#868891"
                                            }, void 0, false, {
                                                fileName: "src/components/SearchByDish.js",
                                                lineNumber: 32,
                                                columnNumber: 45
                                            }, undefined)
                                        }, void 0, false, {
                                            fileName: "src/components/SearchByDish.js",
                                            lineNumber: 31,
                                            columnNumber: 41
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/SearchByDish.js",
                                    lineNumber: 19,
                                    columnNumber: 37
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "styles_divider__3zP03"
                                }, void 0, false, {
                                    fileName: "src/components/SearchByDish.js",
                                    lineNumber: 35,
                                    columnNumber: 37
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "styles_container__-kShr",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            className: "styles_item__3_NEA styles_hasImage__3OsYt",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                                    className: "ScreenReaderOnly_screenReaderOnly___ww-V",
                                                    children: card?.card?.card?.info?.description
                                                }, void 0, false, {
                                                    fileName: "src/components/SearchByDish.js",
                                                    lineNumber: 39,
                                                    columnNumber: 49
                                                }, undefined),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                    className: "styles_detailsContainer__22vh8",
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("i", {
                                                                    className: "styles_icon__m6Ujp styles_itemIcon__1LXTw icon-NonVeg",
                                                                    role: "presentation",
                                                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                        className: "res_card_img",
                                                                        children: card?.card?.card?.info?.isVeg ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                                            src: (0, _vegePngDefault.default)
                                                                        }, void 0, false, {
                                                                            fileName: "src/components/SearchByDish.js",
                                                                            lineNumber: 45,
                                                                            columnNumber: 126
                                                                        }, undefined) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                                            src: (0, _nonvegPngDefault.default)
                                                                        }, void 0, false, {
                                                                            fileName: "src/components/SearchByDish.js",
                                                                            lineNumber: 45,
                                                                            columnNumber: 148
                                                                        }, undefined)
                                                                    }, void 0, false, {
                                                                        fileName: "src/components/SearchByDish.js",
                                                                        lineNumber: 45,
                                                                        columnNumber: 61
                                                                    }, undefined)
                                                                }, void 0, false, {
                                                                    fileName: "src/components/SearchByDish.js",
                                                                    lineNumber: 44,
                                                                    columnNumber: 57
                                                                }, undefined),
                                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                    className: "styles_ribbon__3tZ21 styles_itemRibbon__353Fy",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                            className: "styles_ribbonStar__1cZQq icon-star",
                                                                            children: "★ "
                                                                        }, void 0, false, {
                                                                            fileName: "src/components/SearchByDish.js",
                                                                            lineNumber: 48,
                                                                            columnNumber: 61
                                                                        }, undefined),
                                                                        "BESTSELLER"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "src/components/SearchByDish.js",
                                                                    lineNumber: 47,
                                                                    columnNumber: 57
                                                                }, undefined)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "src/components/SearchByDish.js",
                                                            lineNumber: 43,
                                                            columnNumber: 53
                                                        }, undefined),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            className: "styles_itemName__hLfgz",
                                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h3", {
                                                                className: "styles_itemNameText__3ZmZZ",
                                                                children: card?.card?.card?.info?.name
                                                            }, void 0, false, {
                                                                fileName: "src/components/SearchByDish.js",
                                                                lineNumber: 53,
                                                                columnNumber: 57
                                                            }, undefined)
                                                        }, void 0, false, {
                                                            fileName: "src/components/SearchByDish.js",
                                                            lineNumber: 52,
                                                            columnNumber: 53
                                                        }, undefined),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            className: "styles_itemPortionContainer__1u_tj",
                                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                className: "styles_price__2xrhD styles_itemPrice__1Nrpd styles_s__66zLz",
                                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                                    className: "rupee",
                                                                    children: card?.card?.card?.info?.price / 100
                                                                }, void 0, false, {
                                                                    fileName: "src/components/SearchByDish.js",
                                                                    lineNumber: 57,
                                                                    columnNumber: 61
                                                                }, undefined)
                                                            }, void 0, false, {
                                                                fileName: "src/components/SearchByDish.js",
                                                                lineNumber: 56,
                                                                columnNumber: 57
                                                            }, undefined)
                                                        }, void 0, false, {
                                                            fileName: "src/components/SearchByDish.js",
                                                            lineNumber: 55,
                                                            columnNumber: 53
                                                        }, undefined),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            className: "styles_itemDesc__3vhM0 styles_hasMoreText__3fWkR",
                                                            children: card?.card?.card?.info?.description
                                                        }, void 0, false, {
                                                            fileName: "src/components/SearchByDish.js",
                                                            lineNumber: 60,
                                                            columnNumber: 53
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/components/SearchByDish.js",
                                                    lineNumber: 42,
                                                    columnNumber: 49
                                                }, undefined),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                    className: "styles_itemImageContainer__3Czsd",
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                                                className: "styles_itemImage__3CsDL",
                                                                "aria-label": "See more information about Biryani",
                                                                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                                                    alt: "Dish Logo",
                                                                    className: "styles_itemImage__3CsDL",
                                                                    loading: "lazy",
                                                                    width: "256",
                                                                    src: `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${card?.card?.card?.info?.imageId}`
                                                                }, void 0, false, {
                                                                    fileName: "src/components/SearchByDish.js",
                                                                    lineNumber: 65,
                                                                    columnNumber: 61
                                                                }, undefined)
                                                            }, void 0, false, {
                                                                fileName: "src/components/SearchByDish.js",
                                                                lineNumber: 64,
                                                                columnNumber: 57
                                                            }, undefined)
                                                        }, void 0, false, {
                                                            fileName: "src/components/SearchByDish.js",
                                                            lineNumber: 63,
                                                            columnNumber: 53
                                                        }, undefined),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                            className: "styles_itemAddButton",
                                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                className: "_3L1X9 _2IhbV",
                                                                children: [
                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                        className: "_1RPOp",
                                                                        children: "ADD"
                                                                    }, void 0, false, {
                                                                        fileName: "src/components/SearchByDish.js",
                                                                        lineNumber: 70,
                                                                        columnNumber: 61
                                                                    }, undefined),
                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                        className: "_1ds9T _2WdfZ _4aKW6",
                                                                        children: "+"
                                                                    }, void 0, false, {
                                                                        fileName: "src/components/SearchByDish.js",
                                                                        lineNumber: 71,
                                                                        columnNumber: 61
                                                                    }, undefined),
                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                        className: "_29Y5Z _20vNm _4aKW6"
                                                                    }, void 0, false, {
                                                                        fileName: "src/components/SearchByDish.js",
                                                                        lineNumber: 72,
                                                                        columnNumber: 61
                                                                    }, undefined),
                                                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                                        className: "_2zAXs _2quy- _4aKW6",
                                                                        children: "0"
                                                                    }, void 0, false, {
                                                                        fileName: "src/components/SearchByDish.js",
                                                                        lineNumber: 73,
                                                                        columnNumber: 61
                                                                    }, undefined)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "src/components/SearchByDish.js",
                                                                lineNumber: 69,
                                                                columnNumber: 57
                                                            }, undefined)
                                                        }, void 0, false, {
                                                            fileName: "src/components/SearchByDish.js",
                                                            lineNumber: 68,
                                                            columnNumber: 53
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/components/SearchByDish.js",
                                                    lineNumber: 62,
                                                    columnNumber: 49
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/components/SearchByDish.js",
                                            lineNumber: 38,
                                            columnNumber: 45
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/SearchByDish.js",
                                        lineNumber: 37,
                                        columnNumber: 41
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/components/SearchByDish.js",
                                    lineNumber: 36,
                                    columnNumber: 37
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/SearchByDish.js",
                            lineNumber: 18,
                            columnNumber: 33
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/SearchByDish.js",
                        lineNumber: 17,
                        columnNumber: 29
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/SearchByDish.js",
                    lineNumber: 16,
                    columnNumber: 26
                }, undefined) : ""
            }, index, false, {
                fileName: "src/components/SearchByDish.js",
                lineNumber: 14,
                columnNumber: 17
            }, undefined))
    }, void 0, false, {
        fileName: "src/components/SearchByDish.js",
        lineNumber: 12,
        columnNumber: 9
    }, undefined);
};
_c = SearchByDish;
exports.default = SearchByDish;
var _c;
$RefreshReg$(_c, "SearchByDish");

  $parcel$ReactRefreshHelpers$4bef.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-router-dom":"9xmpe","../utils/vege.png":"4IQOP","../utils/nonveg.png":"kC4Lk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"4IQOP":[function(require,module,exports) {
module.exports = require("7acca49ecd5350df").getBundleURL("aUHSv") + "vege.71093493.png" + "?" + Date.now();

},{"7acca49ecd5350df":"lgJ39"}],"kC4Lk":[function(require,module,exports) {
module.exports = require("df17a6e4e77a84c7").getBundleURL("aUHSv") + "nonveg.d18220d5.png" + "?" + Date.now();

},{"df17a6e4e77a84c7":"lgJ39"}],"gQ3Ie":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$af0e = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$af0e.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _reactRouterDom = require("react-router-dom");
const SearchByRestaurant = ({ searchByRes  })=>{
    // console.log(searchByRes);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "search_card_res",
        children: searchByRes.map((card)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "Search_widgetsV2__27BBR Search_widgets__3o_bA",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "styles_container__zEwGm",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "styles_restaurantListItem__1lOsF",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouterDom.Link), {
                            className: "styles_container__fLC0R",
                            to: "/restaurents/" + card?.card?.card?.info?.id,
                            role: "button",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "styles_imgContainer__1uHo5",
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                        className: "styles_ImageContainer__2rk9a",
                                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                            alt: "",
                                            className: "styles_Image__1fplJ",
                                            loading: "lazy",
                                            src: `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${card?.card?.card?.info?.cloudinaryImageId}`
                                        }, void 0, false, {
                                            fileName: "src/components/SearchByRestaurant.js",
                                            lineNumber: 16,
                                            columnNumber: 41
                                        }, undefined)
                                    }, void 0, false, {
                                        fileName: "src/components/SearchByRestaurant.js",
                                        lineNumber: 15,
                                        columnNumber: 37
                                    }, undefined)
                                }, void 0, false, {
                                    fileName: "src/components/SearchByRestaurant.js",
                                    lineNumber: 14,
                                    columnNumber: 33
                                }, undefined),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "styles_containerRestaurant__3vhx3",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            className: "styles_containerImageBadge__14fk3",
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                className: "styles_restaurantName__29jAP",
                                                children: card?.card?.card?.info?.name
                                            }, void 0, false, {
                                                fileName: "src/components/SearchByRestaurant.js",
                                                lineNumber: 21,
                                                columnNumber: 41
                                            }, undefined)
                                        }, void 0, false, {
                                            fileName: "src/components/SearchByRestaurant.js",
                                            lineNumber: 20,
                                            columnNumber: 37
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            className: "styles_restaurantMeta__2QtMf",
                                            children: [
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                            className: "styles_restaurantMetaRatingStar__7G4dD icon-star",
                                                            children: "★"
                                                        }, void 0, false, {
                                                            fileName: "src/components/SearchByRestaurant.js",
                                                            lineNumber: 25,
                                                            columnNumber: 45
                                                        }, undefined),
                                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                            className: "styles_restaurantMetaRating__4H1gt",
                                                            children: card?.card?.card?.info?.avgRatingString
                                                        }, void 0, false, {
                                                            fileName: "src/components/SearchByRestaurant.js",
                                                            lineNumber: 26,
                                                            columnNumber: 45
                                                        }, undefined)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/components/SearchByRestaurant.js",
                                                    lineNumber: 24,
                                                    columnNumber: 41
                                                }, undefined),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                    className: "styles_restaurantMetaDot__1AKA9"
                                                }, void 0, false, {
                                                    fileName: "src/components/SearchByRestaurant.js",
                                                    lineNumber: 28,
                                                    columnNumber: 41
                                                }, undefined),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                    children: card?.card?.card?.info?.sla?.slaString
                                                }, void 0, false, {
                                                    fileName: "src/components/SearchByRestaurant.js",
                                                    lineNumber: 29,
                                                    columnNumber: 41
                                                }, undefined),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                    className: "styles_restaurantMetaDot__1AKA9"
                                                }, void 0, false, {
                                                    fileName: "src/components/SearchByRestaurant.js",
                                                    lineNumber: 30,
                                                    columnNumber: 41
                                                }, undefined),
                                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                                    children: card?.card?.card?.info?.costForTwoMessage
                                                }, void 0, false, {
                                                    fileName: "src/components/SearchByRestaurant.js",
                                                    lineNumber: 31,
                                                    columnNumber: 41
                                                }, undefined)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/components/SearchByRestaurant.js",
                                            lineNumber: 23,
                                            columnNumber: 37
                                        }, undefined),
                                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                            className: "styles_restaurantCuisines__3lBL4",
                                            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                                children: card?.card?.card?.info?.cuisines.join(", ")
                                            }, void 0, false, {
                                                fileName: "src/components/SearchByRestaurant.js",
                                                lineNumber: 34,
                                                columnNumber: 41
                                            }, undefined)
                                        }, void 0, false, {
                                            fileName: "src/components/SearchByRestaurant.js",
                                            lineNumber: 33,
                                            columnNumber: 37
                                        }, undefined)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/components/SearchByRestaurant.js",
                                    lineNumber: 19,
                                    columnNumber: 33
                                }, undefined)
                            ]
                        }, void 0, true, {
                            fileName: "src/components/SearchByRestaurant.js",
                            lineNumber: 13,
                            columnNumber: 29
                        }, undefined)
                    }, void 0, false, {
                        fileName: "src/components/SearchByRestaurant.js",
                        lineNumber: 12,
                        columnNumber: 25
                    }, undefined)
                }, void 0, false, {
                    fileName: "src/components/SearchByRestaurant.js",
                    lineNumber: 11,
                    columnNumber: 21
                }, undefined)
            }, card?.card?.card?.info?.id, false, {
                fileName: "src/components/SearchByRestaurant.js",
                lineNumber: 10,
                columnNumber: 17
            }, undefined))
    }, void 0, false, {
        fileName: "src/components/SearchByRestaurant.js",
        lineNumber: 8,
        columnNumber: 12
    }, undefined);
};
_c = SearchByRestaurant;
exports.default = SearchByRestaurant;
var _c;
$RefreshReg$(_c, "SearchByRestaurant");

  $parcel$ReactRefreshHelpers$af0e.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","react-router-dom":"9xmpe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}]},["1xC6H","hlclX"], null, "parcelRequire8442")

//# sourceMappingURL=Search.6f0250a9.js.map
