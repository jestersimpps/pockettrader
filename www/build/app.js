/*!
 * Built with http://stenciljs.com
 * 2018-05-30T10:18:24
 */
(function(win, doc, namespace, fsNamespace, resourcesUrl, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components) {

  function init(win, doc, namespace, fsNamespace, resourcesUrl, appCore, appCorePolyfilled, hydratedCssClass, components, HTMLElementPrototype, App, x, y, scriptElm) {
    // create global namespace if it doesn't already exist
    App = win[namespace] = win[namespace] || {};
    App.components = components;
    y = components.filter(function (c) { return c[2]; }).map(function (c) { return c[0]; });
    if (y.length) {
        // auto hide components until they been fully hydrated
        // reusing the "x" and "i" variables from the args for funzies
        x = doc.createElement('style');
        x.innerHTML = y.join() + '{visibility:hidden}.' + hydratedCssClass + '{visibility:inherit}';
        x.setAttribute('data-styles', '');
        doc.head.insertBefore(x, doc.head.firstChild);
    }
    createComponentOnReadyPrototype(win, namespace, HTMLElementPrototype);
    resourcesUrl = resourcesUrl || App.resourcesUrl;
    // figure out the script element for this current script
    y = doc.querySelectorAll('script');
    for (x = y.length - 1; x >= 0; x--) {
        scriptElm = y[x];
        if (scriptElm.src || scriptElm.hasAttribute('data-resources-url')) {
            break;
        }
    }
    // get the resource path attribute on this script element
    y = scriptElm.getAttribute('data-resources-url');
    if (!resourcesUrl && y) {
        // the script element has a data-resources-url attribute, always use that
        resourcesUrl = y;
    }
    if (!resourcesUrl && scriptElm.src) {
        // we don't have an exact resourcesUrl, so let's
        // figure it out relative to this script's src and app's filesystem namespace
        y = scriptElm.src.split('/').slice(0, -1);
        resourcesUrl = (y.join('/')) + (y.length ? '/' : '') + fsNamespace + '/';
    }
    // request the core this browser needs
    // test for native support of custom elements and fetch
    // if either of those are not supported, then use the core w/ polyfills
    // also check if the page was build with ssr or not
    x = doc.createElement('script');
    if (usePolyfills(win, win.location, x, 'import("")')) {
        // requires the es5/polyfilled core
        x.src = resourcesUrl + appCorePolyfilled;
    }
    else {
        // let's do this!
        x.src = resourcesUrl + appCore;
        x.setAttribute('type', 'module');
        x.setAttribute('crossorigin', true);
    }
    x.setAttribute('data-resources-url', resourcesUrl);
    x.setAttribute('data-namespace', fsNamespace);
    doc.head.appendChild(x);
}
function usePolyfills(win, location, scriptElm, dynamicImportTest) {
    // fyi, dev mode has verbose if/return statements
    // but it minifies to a nice 'lil one-liner ;)
    if (location.search.indexOf('core=esm') > 0) {
        // force esm build
        return false;
    }
    if ((location.search.indexOf('core=es5') > 0) ||
        (location.protocol === 'file:') ||
        (!(win.customElements && win.customElements.define)) ||
        (!win.fetch) ||
        (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) ||
        (!('noModule' in scriptElm))) {
        // es5 build w/ polyfills
        return true;
    }
    // final test to see if this browser support dynamic imports
    return doesNotSupportsDynamicImports(dynamicImportTest);
}
function doesNotSupportsDynamicImports(dynamicImportTest) {
    try {
        new Function(dynamicImportTest);
        return false;
    }
    catch (e) { }
    return true;
}
function createComponentOnReadyPrototype(win, namespace, HTMLElementPrototype) {
    (win['s-apps'] = win['s-apps'] || []).push(namespace);
    if (!HTMLElementPrototype.componentOnReady) {
        HTMLElementPrototype.componentOnReady = function componentOnReady() {
            /*tslint:disable*/
            var elm = this;
            function executor(resolve) {
                if (elm.nodeName.indexOf('-') > 0) {
                    // window hasn't loaded yet and there's a
                    // good chance this is a custom element
                    var apps = win['s-apps'];
                    var appsReady = 0;
                    // loop through all the app namespaces
                    for (var i = 0; i < apps.length; i++) {
                        // see if this app has "componentOnReady" setup
                        if (win[apps[i]].componentOnReady) {
                            // this app's core has loaded call its "componentOnReady"
                            if (win[apps[i]].componentOnReady(elm, resolve)) {
                                // this component does belong to this app and would
                                // have fired off the resolve fn
                                // let's stop here, we're good
                                return;
                            }
                            appsReady++;
                        }
                    }
                    if (appsReady < apps.length) {
                        // not all apps are ready yet
                        // add it to the queue to be figured out when they are
                        (win['s-cr'] = win['s-cr'] || []).push([elm, resolve]);
                        return;
                    }
                }
                // not a recognized app component
                resolve(null);
            }
            // callback wasn't provided, let's return a promise
            if (win.Promise) {
                // use native/polyfilled promise
                return new win.Promise(executor);
            }
            // promise may not have been polyfilled yet
            return { then: executor };
        };
    }
}


  init(win, doc, namespace, fsNamespace, resourcesUrl, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components);

  })(window, document, "App","app",0,"app.core.js","es5-build-disabled.js","hydrated",[["app-balanceitem",{"ios":"app-balanceitem.ios","md":"app-balanceitem.md"},1,[["baseCurrency",1],["cryptodata",1],["exchangeId",1,0,"exchange-id",2]]],["app-barchart","app-barchart",1,[["store",3,0,0,0,"store"],["totalBalances",5]]],["app-basecurrency","app-basecurrency",1,[["baseCurrency",5],["store",3,0,0,0,"store"]]],["app-baseprice","app-baseprice",1,[["baseCurrency",1],["btcPrice",1,0,"btc-price",4]]],["app-cryptoicon",{"ios":"app-balanceitem.ios","md":"app-balanceitem.md"},1,[["symbol",1,0,1,2]]],["app-editwallet","app-editwallet",1,[["store",3,0,0,0,"store"],["wallet",5],["walletId",1,0,"wallet-id",4],["wallets",5]]],["app-exchangebalances","app-exchangebalances",1,[["baseCurrency",5],["exchange",5],["exchangeId",1,0,"exchange-id",2],["exchanges",5],["store",3,0,0,0,"store"],["tickers",5]]],["app-exchangeitem","app-exchangeitem",1,[["baseCurrency",1],["exchange",1]]],["app-exchangekeys","app-exchangekeys",1,[["exchange",5],["exchangeId",1,0,"exchange-id",2],["exchanges",5],["store",3,0,0,0,"store"]]],["app-exchanges","app-exchanges",1,[["balances",5],["baseCurrency",5],["exchanges",5],["isLoading",5],["store",3,0,0,0,"store"],["tickers",5],["wallets",5]]],["app-holdings",{"ios":"app-holdings.ios","md":"app-holdings.md"},1,[["filteredWallets",5],["store",3,0,0,0,"store"],["visibleCryptos",5],["wallets",5]]],["app-keys","app-keys",1,[["exchanges",5],["store",3,0,0,0,"store"]]],["app-overview","app-overview",1,[["balances",5],["baseCurrency",5],["exchanges",5],["isLoading",5],["store",3,0,0,0,"store"],["tickers",5],["wallets",5]]],["app-pair","app-pair",1,[["chartID",5],["exchangeId",1,0,"exchange-id",2],["pair",1,0,1,2],["segment",5],["store",3,0,0,0,"store"],["ticker",5]]],["app-panic",{"ios":"app-panic.ios","md":"app-panic.md"},1,[["balances",5],["baseCurrency",5],["exchanges",5],["isLoading",5],["sellType",5],["store",3,0,0,0,"store"],["tickers",5],["wallets",5]]],["app-premium","app-premium",1,[["store",3,0,0,0,"store"],["token",5]]],["app-settings","app-settings",1],["app-splinechart","app-overview",1,[["baseCurrency",5],["store",3,0,0,0,"store"],["totalBalances",5]]],["app-sunburst","app-overview",1,[["baseCurrency",1],["exchanges",1],["totalBalance",1,0,"total-balance",4],["wallets",1]]],["app-trade",{"ios":"app-trade.ios","md":"app-trade.md"},1,[["baseBalance",5],["exchangeId",5],["exchanges",5],["isLoading",5],["pairs",5],["quoteBalance",5],["segment",5],["store",3,0,0,0,"store"],["ticker",5],["tickers",5],["tradeAction",5],["tradeAmount",5],["tradeFee",5],["tradePrice",5]]],["app-wallets","app-wallets",1,[["balances",5],["baseCurrency",5],["exchanges",5],["isLoading",5],["segment",5],["store",3,0,0,0,"store"],["tickers",5],["wallets",5]]],["ion-animation-controller",{"ios":"my-app.ios","md":"my-app.md"},0,[["create",6]]],["ion-app",{"ios":"my-app.ios","md":"my-app.md"},1,[["config",3,0,0,0,"config"],["el",7],["win",3,0,0,0,"window"]]],["ion-back-button",{"ios":"ion-back-button.ios","md":"ion-back-button.md"},1,[["color",1,0,1,2],["config",3,0,0,0,"config"],["defaultHref",1,0,"default-href",2],["el",7],["icon",1,0,1,2],["mode",1,0,1,2],["text",1,0,1,2],["win",3,0,0,0,"window"]]],["ion-badge",{"ios":"ion-badge.ios","md":"ion-badge.md"},1,[["color",1,0,1,2],["mode",1,0,1,2]]],["ion-button",{"ios":"ion-button.ios","md":"ion-button.md"},1,[["buttonType",2,0,"button-type",2],["color",1,0,1,2],["disabled",1,0,1,3],["el",7],["expand",1,0,1,2],["fill",1,0,1,2],["href",1,0,1,2],["keyFocus",5],["mode",1,0,1,2],["routerDirection",1,0,"router-direction",2],["shape",1,0,1,2],["size",1,0,1,2],["strong",1,0,1,3],["type",1,0,1,2],["win",3,0,0,0,"window"]]],["ion-buttons",{"ios":"ion-back-button.ios","md":"ion-back-button.md"}],["ion-col",{"ios":"ion-col.ios","md":"ion-col.md"}],["ion-content",{"ios":"ion-back-button.ios","md":"ion-back-button.md"},1,[["config",3,0,0,0,"config"],["el",7],["forceOverscroll",1,0,"force-overscroll",3],["fullscreen",1,0,1,3],["queue",3,0,0,0,"queue"],["scrollByPoint",6],["scrollEnabled",1,0,"scroll-enabled",3],["scrollEvents",1,0,"scroll-events",3],["scrollToBottom",6],["scrollToPoint",6],["scrollToTop",6]],0,[["body:ionNavDidChange","onNavChanged"]]],["ion-footer",{"ios":"ion-footer.ios","md":"ion-footer.md"},1,[["translucent",1,0,1,3]]],["ion-gesture","ion-gesture",0,[["attachTo",1,0,"attach-to",2],["autoBlockAll",1,0,"auto-block-all",3],["canStart",1],["direction",1,0,1,2],["disableScroll",1,0,"disable-scroll",3],["disabled",1,0,1,3],["enableListener",3,0,0,0,"enableListener"],["gestureCtrl",4,0,0,0,"ion-gesture-controller"],["gestureName",1,0,"gesture-name",2],["gesturePriority",1,0,"gesture-priority",4],["isServer",3,0,0,0,"isServer"],["maxAngle",1,0,"max-angle",4],["notCaptured",1],["onEnd",1],["onMove",1],["onStart",1],["onWillStart",1],["passive",1,0,1,3],["queue",3,0,0,0,"queue"],["threshold",1,0,1,4]],0,[["document:mousemove","onMoveMove",1,1],["document:mouseup","onMouseUp",1,1],["mousedown","onMouseDown",1,1],["touchcancel","onTouchCancel",1,1],["touchend","onTouchCancel",1,1],["touchmove","onTouchMove",1,1],["touchstart","onTouchStart",1,1]]],["ion-gesture-controller","ion-gesture",0,[["create",6],["createBlocker",6]]],["ion-grid",{"ios":"ion-col.ios","md":"ion-col.md"},1],["ion-header",{"ios":"ion-back-button.ios","md":"ion-back-button.md"},1,[["translucent",1,0,1,3]]],["ion-icon","ion-icon",1,[["ariaLabel",2,0,"aria-label",2],["color",1,0,1,2],["doc",3,0,0,0,"document"],["el",7],["icon",1,0,1,2],["ios",1,0,1,2],["isServer",3,0,0,0,"isServer"],["isVisible",5],["md",1,0,1,2],["mode",3,0,0,0,"mode"],["name",1,0,1,2],["resourcesUrl",3,0,0,0,"resourcesUrl"],["size",1,0,1,2],["src",1,0,1,2],["svgContent",5],["win",3,0,0,0,"window"]],1],["ion-input",{"ios":"app-balanceitem.ios","md":"app-balanceitem.md"},1,[["accept",1,0,1,2],["autocapitalize",1,0,1,2],["autocomplete",1,0,1,2],["autocorrect",1,0,1,2],["autofocus",1,0,1,3],["clearInput",1,0,"clear-input",3],["clearOnEdit",2,0,"clear-on-edit",3],["debounce",1,0,1,4],["disabled",1,0,1,3],["el",7],["inputmode",1,0,1,2],["max",1,0,1,2],["maxlength",1,0,1,4],["min",1,0,1,2],["minlength",1,0,1,4],["multiple",1,0,1,3],["name",1,0,1,2],["pattern",1,0,1,2],["placeholder",1,0,1,2],["readonly",1,0,1,3],["required",1,0,1,3],["results",1,0,1,4],["size",1,0,1,4],["spellcheck",1,0,1,3],["step",1,0,1,2],["type",1,0,1,2],["value",2,0,1,2]]],["ion-item",{"ios":"ion-col.ios","md":"ion-col.md"},1,[["button",1,0,1,3],["color",1,0,1,2],["detail",1,0,1,3],["disabled",1,0,1,3],["el",7],["href",1,0,1,2],["lines",1,0,1,2],["mode",1,0,1,2],["routerDirection",1,0,"router-direction",2],["win",3,0,0,0,"window"]],0,[["ionStyle","itemStyle"]]],["ion-label",{"ios":"app-balanceitem.ios","md":"app-balanceitem.md"},1,[["color",1,0,1,2],["el",7],["getText",6],["mode",1,0,1,2],["position",1,0,1,2]]],["ion-list",{"ios":"app-balanceitem.ios","md":"app-balanceitem.md"},1,[["closeSlidingItems",6],["getOpenItem",6],["lines",1,0,1,2],["setOpenItem",6]]],["ion-list-header",{"ios":"app-balanceitem.ios","md":"app-balanceitem.md"},1,[["color",1,0,1,2],["mode",1,0,1,2]]],["ion-nav",{"ios":"my-app.ios","md":"my-app.md"},0,[["animated",2,0,1,3],["animationCtrl",4,0,0,0,"ion-animation-controller"],["canGoBack",6],["config",3,0,0,0,"config"],["delegate",1],["el",7],["getActive",6],["getByIndex",6],["getPrevious",6],["getRouteId",6],["insert",6],["insertPages",6],["length",6],["pop",6],["popTo",6],["popToRoot",6],["push",6],["queue",3,0,0,0,"queue"],["removeIndex",6],["root",1,0,1,2],["rootParams",1],["setPages",6],["setRoot",6],["setRouteId",6],["swipeBackEnabled",2,0,"swipe-back-enabled",3],["win",3,0,0,0,"window"]]],["ion-nav-pop",{"ios":"app-balanceitem.ios","md":"app-balanceitem.md"},0,[["el",7]],0,[["child:click","pop"]]],["ion-radio",{"ios":"app-balanceitem.ios","md":"app-balanceitem.md"},1,[["checked",2,0,1,3],["color",1,0,1,2],["disabled",1,0,1,3],["keyFocus",5],["mode",1,0,1,2],["name",1,0,1,2],["value",2,0,1,2]]],["ion-refresher",{"ios":"app-balanceitem.ios","md":"app-balanceitem.md"},1,[["cancel",6],["closeDuration",1,0,"close-duration",2],["complete",6],["disabled",1,0,1,3],["el",7],["getProgress",6],["pullMax",1,0,"pull-max",4],["pullMin",1,0,"pull-min",4],["queue",3,0,0,0,"queue"],["snapbackDuration",1,0,"snapback-duration",2],["state",5]]],["ion-refresher-content",{"ios":"app-balanceitem.ios","md":"app-balanceitem.md"},0,[["config",3,0,0,0,"config"],["pullingIcon",2,0,"pulling-icon",2],["pullingText",1,0,"pulling-text",2],["refreshingSpinner",2,0,"refreshing-spinner",2],["refreshingText",1,0,"refreshing-text",2]]],["ion-ripple-effect","ion-ripple-effect",1,[["addRipple",6],["doc",3,0,0,0,"document"],["el",7],["enableListener",3,0,0,0,"enableListener"],["queue",3,0,0,0,"queue"],["tapClick",1,0,"tap-click",3]],0,[["mousedown","mouseDown",1,1],["parent:ionActivated","ionActivated",1],["touchstart","touchStart",1,1]]],["ion-route",{"ios":"my-app.ios","md":"my-app.md"},0,[["component",1,0,1,2],["componentProps",1],["url",1,0,1,2]]],["ion-router",{"ios":"my-app.ios","md":"my-app.md"},0,[["config",3,0,0,0,"config"],["el",7],["navChanged",6],["printDebug",6],["push",6],["queue",3,0,0,0,"queue"],["root",1,0,1,2],["useHash",1,0,"use-hash",3],["win",3,0,0,0,"window"]],0,[["window:popstate","onPopState"]]],["ion-row",{"ios":"ion-col.ios","md":"ion-col.md"}],["ion-scroll",{"ios":"ion-scroll.ios","md":"ion-scroll.md"},1,[["config",3,0,0,0,"config"],["el",7],["forceOverscroll",2,0,"force-overscroll",3],["mode",1,0,1,2],["queue",3,0,0,0,"queue"],["scrollByPoint",6],["scrollEvents",1,0,"scroll-events",3],["scrollToBottom",6],["scrollToPoint",6],["scrollToTop",6],["win",3,0,0,0,"window"]],0,[["scroll","onScroll",0,1]]],["ion-searchbar",{"ios":"app-holdings.ios","md":"app-holdings.md"},1,[["activated",5],["animated",1,0,1,3],["autocomplete",1,0,1,2],["autocorrect",1,0,1,2],["cancelButtonText",1,0,"cancel-button-text",2],["color",1,0,1,2],["debounce",1,0,1,4],["doc",3,0,0,0,"document"],["el",7],["focused",5],["mode",1,0,1,2],["placeholder",1,0,1,2],["showCancelButton",1,0,"show-cancel-button",3],["spellcheck",1,0,1,3],["type",1,0,1,2],["value",2,0,1,2]]],["ion-segment",{"ios":"app-trade.ios","md":"app-trade.md"},1,[["color",1,0,1,2],["disabled",1,0,1,3],["el",7],["mode",1,0,1,2],["value",2,0,1,2]],0,[["ionSelect","segmentClick"]]],["ion-segment-button",{"ios":"app-trade.ios","md":"app-trade.md"},1,[["checked",2,0,1,3],["color",1,0,1,2],["disabled",1,0,1,3],["el",7],["href",1,0,1,2],["mode",1,0,1,2],["value",1,0,1,2]]],["ion-spinner",{"ios":"app-balanceitem.ios","md":"app-balanceitem.md"},1,[["color",1,0,1,2],["config",3,0,0,0,"config"],["duration",1,0,1,4],["mode",1,0,1,2],["name",1,0,1,2],["paused",1,0,1,3]]],["ion-status-tap",{"ios":"my-app.ios","md":"my-app.md"},0,[["duration",1,0,1,4],["queue",3,0,0,0,"queue"],["win",3,0,0,0,"window"]],0,[["window:statusTap","onStatusTap"]]],["ion-tab","ion-tab",0,[["active",2,0,1,3],["badge",1,0,1,2],["badgeColor",1,0,"badge-color",2],["btnId",1,0,"btn-id",2],["component",1,0,1,2],["delegate",1],["disabled",1,0,1,3],["el",7],["getTabId",6],["href",1,0,1,2],["icon",1,0,1,2],["label",1,0,1,2],["name",1,0,1,2],["selected",2,0,1,3],["setActive",6],["show",1,0,1,3],["tabsHideOnSubPages",1,0,"tabs-hide-on-sub-pages",3]]],["ion-tab-button",{"ios":"my-app.ios","md":"my-app.md"},1,[["el",7],["keyFocus",5],["selected",1,0,1,3],["tab",1]],0,[["click","onClick"]]],["ion-tabbar",{"ios":"my-app.ios","md":"my-app.md"},1,[["canScrollLeft",5],["canScrollRight",5],["doc",3,0,0,0,"document"],["el",7],["hidden",5],["highlight",1,0,1,3],["layout",1,0,1,2],["placement",1,0,1,2],["queue",3,0,0,0,"queue"],["scrollable",1,0,1,3],["selectedTab",1],["tabs",1],["translucent",1,0,1,3]],0,[["body:keyboardWillHide","onKeyboardWillHide"],["body:keyboardWillShow","onKeyboardWillShow"],["ionTabButtonDidLoad","onTabButtonLoad"],["ionTabButtonDidUnload","onTabButtonLoad"],["window:resize","onResize",0,1]]],["ion-tabs",{"ios":"my-app.ios","md":"my-app.md"},1,[["color",1,0,1,2],["config",3,0,0,0,"config"],["doc",3,0,0,0,"document"],["el",7],["getRouteId",6],["getSelected",6],["getTab",6],["name",1,0,1,2],["scrollable",1,0,1,3],["select",6],["selectedTab",5],["setRouteId",6],["tabbarHidden",1,0,"tabbar-hidden",3],["tabbarHighlight",2,0,"tabbar-highlight",3],["tabbarLayout",2,0,"tabbar-layout",2],["tabbarPlacement",2,0,"tabbar-placement",2],["tabs",5],["translucent",1,0,1,3],["useRouter",2,0,"use-router",3]],0,[["ionTabbarClick","tabChange"]]],["ion-tap-click",{"ios":"my-app.ios","md":"my-app.md"},0,[["el",7],["enableListener",3,0,0,0,"enableListener"],["isServer",3,0,0,0,"isServer"]],0,[["body:click","onBodyClick",0,0,1],["body:ionGestureCaptured","cancelActive"],["body:ionScrollStart","cancelActive"],["document:mousedown","onMouseDown",0,1,1],["document:mouseup","onMouseUp",0,0,1],["document:touchcancel","onTouchEnd",0,0,1],["document:touchend","onTouchEnd",0,0,1],["document:touchstart","onTouchStart",0,1,1]]],["ion-title",{"ios":"app-balanceitem.ios","md":"app-balanceitem.md"},1,[["color",1,0,1,2],["mode",1,0,1,2]]],["ion-toggle",{"ios":"app-panic.ios","md":"app-panic.md"},1,[["activated",5],["checked",2,0,1,3],["color",1,0,1,2],["disabled",1,0,1,3],["keyFocus",5],["mode",1,0,1,2],["name",1,0,1,2],["value",1,0,1,2]]],["ion-toolbar",{"ios":"ion-back-button.ios","md":"ion-back-button.md"},1,[["color",1,0,1,2],["config",3,0,0,0,"config"],["mode",1,0,1,2],["translucent",1,0,1,3]]],["my-app",{"ios":"my-app.ios","md":"my-app.md"},1,[["loading",5],["store",3,0,0,0,"store"]]]],HTMLElement.prototype);