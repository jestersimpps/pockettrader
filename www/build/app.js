/*!
 * Built with http://stenciljs.com
 * 2018-09-22T20:38:08
 */
(function(win, doc, namespace, fsNamespace, resourcesUrl, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components) {

  function init(win, doc, namespace, fsNamespace, resourcesUrl, appCore, appCorePolyfilled, hydratedCssClass, components, HTMLElementPrototype, App, x, y, scriptElm) {
    // create global namespace if it doesn't already exist
    App = win[namespace] = win[namespace] || {};
    App.components = components;
    y = components.map(function (c) { return c[0]; });
    if (y.length) {
        // auto hide components until they been fully hydrated
        // reusing the "x" and "i" variables from the args for funzies
        x = doc.createElement('style');
        x.innerHTML = y.join() + '{visibility:hidden}.' + hydratedCssClass + '{visibility:inherit}';
        x.setAttribute('data-styles', '');
        y = doc.head.querySelector('meta[charset]');
        doc.head.insertBefore(x, y ? y.nextSibling : doc.head.firstChild);
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

  })(window, document, "App","app",0,"app.core.js","es5-build-disabled.js","hydrated",[["app-balanceitem",{"ios":"app-balanceitem.ios","md":"app-balanceitem.md"},1,[["baseCurrency",1],["cryptodata",1],["exchangeId",1,0,"exchange-id",2]]],["app-barchart","app-barchart",1,[["store",4,0,0,0,"store"],["totalBalances",16]]],["app-basecurrency","app-basecurrency",1,[["baseCurrency",16],["store",4,0,0,0,"store"]]],["app-baseprice","app-baseprice",1,[["baseCurrency",1],["btcPrice",1,0,"btc-price",8]]],["app-cryptoicon",{"ios":"app-balanceitem.ios","md":"app-balanceitem.md"},1,[["symbol",1,0,1,2]]],["app-dust","app-dust",1,[["baseCurrency",16],["dust",16],["store",4,0,0,0,"store"]]],["app-editwallet","app-editwallet",1,[["store",4,0,0,0,"store"],["wallet",16],["walletId",1,0,"wallet-id",8],["wallets",16]]],["app-exchangebalances","app-exchangebalances",1,[["baseCurrency",16],["exchange",16],["exchangeId",1,0,"exchange-id",2],["exchanges",16],["store",4,0,0,0,"store"],["tickers",16]]],["app-exchangeitem","app-exchangeitem",1,[["baseCurrency",1],["exchange",1]]],["app-exchangekeys","app-exchangekeys",1,[["exchange",16],["exchangeId",1,0,"exchange-id",2],["exchanges",16],["store",4,0,0,0,"store"]]],["app-exchanges","app-exchanges",1,[["balances",16],["baseCurrency",16],["dust",16],["exchanges",16],["isLoading",16],["orders",16],["store",4,0,0,0,"store"],["tickers",16],["wallets",16]]],["app-holdings",{"ios":"app-holdings.ios","md":"app-holdings.md"},1,[["filteredWallets",16],["store",4,0,0,0,"store"],["visibleCryptos",16],["wallets",16]]],["app-keys","app-keys",1,[["exchanges",16],["store",4,0,0,0,"store"]]],["app-ohlc",{"ios":"app-balanceitem.ios","md":"app-balanceitem.md"},1,[["altPrice",1,0,"alt-price",8],["curPrice",1,0,"cur-price",8],["exchangeId",1,0,"exchange-id",2],["isLoading",16],["symbol",1,0,1,2],["timeFrame",16]]],["app-order","app-order",1,[["baseCurrency",16],["exchanges",16],["isLoading",16],["order",16],["orderId",1,0,"order-id",2],["orders",16],["store",4,0,0,0,"store"],["tickers",16]]],["app-orders","app-orders",1,[["dust",16],["exchangeId",16],["exchanges",16],["isLoading",16],["orders",16],["pairs",16],["status",16],["store",4,0,0,0,"store"],["ticker",16],["tickers",16],["wallets",16]]],["app-overview","app-overview",1,[["balances",16],["baseCurrency",16],["dust",16],["exchanges",16],["isLoading",16],["orders",16],["showTutorial",16],["store",4,0,0,0,"store"],["tickers",16],["wallets",16]]],["app-pair","app-pair",1,[["chartID",16],["exchangeId",1,0,"exchange-id",2],["pair",1,0,1,2],["segment",16],["store",4,0,0,0,"store"],["ticker",16]]],["app-panic",{"ios":"app-panic.ios","md":"app-panic.md"},1,[["balances",16],["baseCurrency",16],["dust",16],["exchanges",16],["isLoading",16],["orders",16],["sellType",16],["store",4,0,0,0,"store"],["tickers",16],["wallets",16]]],["app-premium","app-premium",1,[["store",4,0,0,0,"store"],["token",16]]],["app-settings","app-settings",1],["app-splinechart","app-overview",1,[["baseCurrency",16],["store",4,0,0,0,"store"],["totalBalances",16]]],["app-sunburst","app-overview",1,[["baseCurrency",1],["exchanges",1],["totalBalance",1,0,"total-balance",8],["wallets",1]]],["app-trade","app-trade",1,[["baseBalance",16],["dust",16],["exchangeId",16],["exchanges",16],["isLoading",16],["orders",16],["pairs",16],["quoteBalance",16],["selectedExchange",16],["step",16],["store",4,0,0,0,"store"],["ticker",16],["tickers",16],["tradeAction",16],["tradeAmount",16],["tradePrice",16],["wallets",16]]],["app-tutorial",{"ios":"app-tutorial.ios","md":"app-tutorial.md"},1],["app-wallets","app-wallets",1,[["balances",16],["baseCurrency",16],["dust",16],["exchanges",16],["isLoading",16],["orders",16],["segment",16],["store",4,0,0,0,"store"],["tickers",16],["wallets",16]]],["ion-animation-controller",{"ios":"my-app.ios","md":"my-app.md"},0,[["config",4,0,0,0,"config"],["create",32]]],["ion-app",{"ios":"my-app.ios","md":"my-app.md"},1,[["config",4,0,0,0,"config"],["el",64],["queue",4,0,0,0,"queue"],["win",4,0,0,0,"window"]]],["ion-back-button",{"ios":"ion-back-button.ios","md":"ion-back-button.md"},1,[["color",1,0,1,2],["config",4,0,0,0,"config"],["defaultHref",1,0,"default-href",2],["el",64],["icon",1,0,1,2],["mode",1,0,1,2],["text",1,0,1,2],["win",4,0,0,0,"window"]],2],["ion-badge",{"ios":"ion-badge.ios","md":"ion-badge.md"},1,[["color",1,0,1,2],["mode",1,0,1,2]],1],["ion-button",{"ios":"ion-button.ios","md":"ion-button.md"},1,[["buttonType",2,0,"button-type",2],["color",1,0,1,2],["disabled",1,0,1,4],["el",64],["expand",1,0,1,2],["fill",2,0,1,2],["href",1,0,1,2],["keyFocus",16],["mode",1,0,1,2],["routerDirection",1,0,"router-direction",2],["shape",1,0,1,2],["size",1,0,1,2],["strong",1,0,1,4],["type",1,0,1,2],["win",4,0,0,0,"window"]],1],["ion-buttons",{"ios":"ion-back-button.ios","md":"ion-back-button.md"},1,0,2],["ion-col",{"ios":"ion-col.ios","md":"ion-col.md"},1,[["el",64],["offset",1,0,1,2],["offsetLg",1,0,"offset-lg",2],["offsetMd",1,0,"offset-md",2],["offsetSm",1,0,"offset-sm",2],["offsetXl",1,0,"offset-xl",2],["offsetXs",1,0,"offset-xs",2],["pull",1,0,1,2],["pullLg",1,0,"pull-lg",2],["pullMd",1,0,"pull-md",2],["pullSm",1,0,"pull-sm",2],["pullXl",1,0,"pull-xl",2],["pullXs",1,0,"pull-xs",2],["push",1,0,1,2],["pushLg",1,0,"push-lg",2],["pushMd",1,0,"push-md",2],["pushSm",1,0,"push-sm",2],["pushXl",1,0,"push-xl",2],["pushXs",1,0,"push-xs",2],["size",1,0,1,2],["sizeLg",1,0,"size-lg",2],["sizeMd",1,0,"size-md",2],["sizeSm",1,0,"size-sm",2],["sizeXl",1,0,"size-xl",2],["sizeXs",1,0,"size-xs",2],["win",4,0,0,0,"window"]],1,[["window:resize","onResize",0,1]]],["ion-content",{"ios":"ion-back-button.ios","md":"ion-back-button.md"},1,[["color",1,0,1,2],["config",4,0,0,0,"config"],["el",64],["forceOverscroll",2,0,"force-overscroll",4],["fullscreen",1,0,1,4],["getScrollElement",32],["queue",4,0,0,0,"queue"],["scrollByPoint",32],["scrollEvents",1,0,"scroll-events",4],["scrollToBottom",32],["scrollToPoint",32],["scrollToTop",32],["scrollX",1,0,"scroll-x",4],["scrollY",1,0,"scroll-y",4],["win",4,0,0,0,"window"]],1,[["body:ionNavDidChange","onNavChanged"]]],["ion-footer",{"ios":"my-app.ios","md":"my-app.md"},1,[["mode",1,0,1,2],["translucent",1,0,1,4]]],["ion-grid",{"ios":"ion-col.ios","md":"ion-col.md"},1,[["fixed",1,0,1,4]],1],["ion-header",{"ios":"ion-back-button.ios","md":"ion-back-button.md"},1,[["mode",1,0,1,2],["translucent",1,0,1,4]]],["ion-icon","ion-icon",1,[["ariaLabel",2,0,"aria-label",2],["color",1,0,1,2],["doc",4,0,0,0,"document"],["el",64],["icon",1,0,1,2],["ios",1,0,1,2],["isServer",4,0,0,0,"isServer"],["isVisible",16],["lazy",1,0,1,4],["md",1,0,1,2],["mode",1,0,1,2],["name",1,0,1,2],["resourcesUrl",4,0,0,0,"resourcesUrl"],["size",1,0,1,2],["src",1,0,1,2],["svgContent",16],["win",4,0,0,0,"window"]],1],["ion-input",{"ios":"app-balanceitem.ios","md":"app-balanceitem.md"},1,[["accept",1,0,1,2],["autocapitalize",1,0,1,2],["autocomplete",1,0,1,2],["autocorrect",1,0,1,2],["autofocus",1,0,1,4],["clearInput",1,0,"clear-input",4],["clearOnEdit",2,0,"clear-on-edit",4],["color",1,0,1,2],["debounce",1,0,1,8],["disabled",1,0,1,4],["el",64],["hasFocus",16],["inputmode",1,0,1,2],["max",1,0,1,2],["maxlength",1,0,1,8],["min",1,0,1,2],["minlength",1,0,1,8],["mode",1,0,1,2],["multiple",1,0,1,4],["name",1,0,1,2],["pattern",1,0,1,2],["placeholder",1,0,1,2],["readonly",1,0,1,4],["required",1,0,1,4],["results",1,0,1,8],["setFocus",32],["size",1,0,1,8],["spellcheck",1,0,1,4],["step",1,0,1,2],["type",1,0,1,2],["value",2,0,1,2]],1],["ion-item",{"ios":"ion-col.ios","md":"ion-col.md"},1,[["button",1,0,1,4],["color",1,0,1,2],["detail",1,0,1,4],["detailIcon",1,0,"detail-icon",2],["disabled",1,0,1,4],["el",64],["href",1,0,1,2],["lines",1,0,1,2],["mode",1,0,1,2],["multipleInputs",16],["routerDirection",1,0,"router-direction",2],["type",1,0,1,2],["win",4,0,0,0,"window"]],1,[["ionStyle","itemStyle"]]],["ion-item-divider",{"ios":"app-balanceitem.ios","md":"app-balanceitem.md"},1,[["color",1,0,1,2],["el",64],["mode",1,0,1,2]],1],["ion-label",{"ios":"ion-label.ios","md":"ion-label.md"},1,[["color",1,0,1,2],["el",64],["mode",1,0,1,2],["position",1,0,1,2]],2],["ion-list",{"ios":"app-balanceitem.ios","md":"app-balanceitem.md"},1,[["closeSlidingItems",32],["el",64],["inset",1,0,1,4],["lines",1,0,1,2],["mode",1,0,1,2]]],["ion-list-header",{"ios":"app-balanceitem.ios","md":"app-balanceitem.md"},1,[["color",1,0,1,2],["mode",1,0,1,2]],1],["ion-nav",{"ios":"my-app.ios","md":"my-app.md"},1,[["animated",1,0,1,4],["animation",1],["animationCtrl",8,0,0,0,"ion-animation-controller"],["canGoBack",32],["config",4,0,0,0,"config"],["delegate",1],["el",64],["getActive",32],["getByIndex",32],["getPrevious",32],["getRouteId",32],["insert",32],["insertPages",32],["pop",32],["popTo",32],["popToRoot",32],["push",32],["queue",4,0,0,0,"queue"],["removeIndex",32],["root",1,0,1,2],["rootParams",1],["setPages",32],["setRoot",32],["setRouteId",32],["swipeGesture",2,0,"swipe-gesture",4],["win",4,0,0,0,"window"]],1],["ion-nav-pop",{"ios":"app-balanceitem.ios","md":"app-balanceitem.md"},0,[["el",64]],0,[["child:click","pop"]]],["ion-radio",{"ios":"app-balanceitem.ios","md":"app-balanceitem.md"},1,[["checked",2,0,1,4],["color",1,0,1,2],["disabled",1,0,1,4],["el",64],["keyFocus",16],["mode",1,0,1,2],["name",1,0,1,2],["value",2,0,1,1]],1],["ion-ripple-effect","ion-ripple-effect",1,[["addRipple",32],["config",4,0,0,0,"config"],["el",64],["queue",4,0,0,0,"queue"],["win",4,0,0,0,"window"]],1],["ion-route",{"ios":"my-app.ios","md":"my-app.md"},0,[["component",1,0,1,2],["componentProps",1],["url",1,0,1,2]]],["ion-router",{"ios":"my-app.ios","md":"my-app.md"},0,[["config",4,0,0,0,"config"],["el",64],["goBack",32],["navChanged",32],["printDebug",32],["push",32],["queue",4,0,0,0,"queue"],["root",1,0,1,2],["useHash",1,0,"use-hash",4],["win",4,0,0,0,"window"]],0,[["document:ionBackButton","onBackButton"],["window:popstate","onPopState"]]],["ion-row",{"ios":"ion-col.ios","md":"ion-col.md"},1,0,1],["ion-searchbar",{"ios":"app-holdings.ios","md":"app-holdings.md"},1,[["animated",1,0,1,4],["autocomplete",1,0,1,2],["autocorrect",1,0,1,2],["cancelButtonIcon",1,0,"cancel-button-icon",2],["cancelButtonText",1,0,"cancel-button-text",2],["clearIcon",1,0,"clear-icon",2],["color",1,0,1,2],["config",4,0,0,0,"config"],["debounce",1,0,1,8],["doc",4,0,0,0,"document"],["el",64],["focused",16],["mode",1,0,1,2],["placeholder",1,0,1,2],["searchIcon",1,0,"search-icon",2],["setFocus",32],["showCancelButton",1,0,"show-cancel-button",4],["spellcheck",1,0,1,4],["type",1,0,1,2],["value",2,0,1,2]],2],["ion-segment",{"ios":"app-balanceitem.ios","md":"app-balanceitem.md"},1,[["color",1,0,1,2],["disabled",1,0,1,4],["el",64],["mode",1,0,1,2],["value",2,0,1,2]],2,[["ionSelect","segmentClick"]]],["ion-segment-button",{"ios":"app-balanceitem.ios","md":"app-balanceitem.md"},1,[["checked",2,0,1,4],["color",1,0,1,2],["disabled",1,0,1,4],["el",64],["mode",1,0,1,2],["value",1,0,1,2]],1],["ion-slide",{"ios":"app-tutorial.ios","md":"app-tutorial.md"},1],["ion-slides",{"ios":"app-tutorial.ios","md":"app-tutorial.md"},1,[["el",64],["getActiveIndex",32],["getPreviousIndex",32],["isBeginning",32],["isEnd",32],["length",32],["lockSwipeToNext",32],["lockSwipeToPrev",32],["lockSwipes",32],["mode",1,0,1,2],["options",1,0,1,1],["pager",1,0,1,4],["scrollbar",1,0,1,4],["slideNext",32],["slidePrev",32],["slideTo",32],["startAutoplay",32],["stopAutoplay",32],["update",32]],0,[["ionSlideChanged","onSlideChanged"]]],["ion-tab",{"ios":"my-app.ios","md":"my-app.md"},1,[["active",2,0,1,4],["badge",1,0,1,2],["badgeColor",1,0,"badge-color",2],["btnId",1,0,"btn-id",2],["component",1,0,1,2],["delegate",1],["disabled",1,0,1,4],["el",64],["href",1,0,1,2],["icon",1,0,1,2],["label",1,0,1,2],["name",2,0,1,2],["selected",1,0,1,4],["setActive",32],["show",1,0,1,4],["tabsHideOnSubPages",1,0,"tabs-hide-on-sub-pages",4]],1],["ion-tabbar",{"ios":"my-app.ios","md":"my-app.md"},1,[["canScrollLeft",16],["canScrollRight",16],["color",1,0,1,2],["doc",4,0,0,0,"document"],["el",64],["highlight",1,0,1,4],["keyboardVisible",16],["layout",1,0,1,2],["mode",1,0,1,2],["placement",1,0,1,2],["queue",4,0,0,0,"queue"],["selectedTab",1],["tabs",1],["translucent",1,0,1,4]],2,[["body:keyboardWillHide","onKeyboardWillHide"],["body:keyboardWillShow","onKeyboardWillShow"],["window:resize","updateHighlight",0,1]]],["ion-tabs",{"ios":"my-app.ios","md":"my-app.md"},1,[["config",4,0,0,0,"config"],["doc",4,0,0,0,"document"],["el",64],["getRouteId",32],["getSelected",32],["getTab",32],["name",1,0,1,2],["select",32],["selectedTab",16],["setRouteId",32],["tabbarHidden",1,0,"tabbar-hidden",4],["tabs",16],["useRouter",2,0,"use-router",4]],1,[["ionTabbarClick","onTabClicked"],["ionTabMutated","onTabMutated"]]],["ion-title",{"ios":"app-balanceitem.ios","md":"app-balanceitem.md"},1,[["color",1,0,1,2],["el",64]],1],["ion-toggle",{"ios":"app-panic.ios","md":"app-panic.md"},1,[["activated",16],["checked",2,0,1,4],["color",1,0,1,2],["disabled",1,0,1,4],["el",64],["keyFocus",16],["mode",1,0,1,2],["name",1,0,1,2],["queue",4,0,0,0,"queue"],["value",1,0,1,2]],1],["ion-toolbar",{"ios":"ion-back-button.ios","md":"ion-back-button.md"},1,[["color",1,0,1,2],["config",4,0,0,0,"config"],["mode",1,0,1,2]],1],["my-app",{"ios":"my-app.ios","md":"my-app.md"},1,[["loading",16],["nav",16],["store",4,0,0,0,"store"]]]],HTMLElement.prototype);