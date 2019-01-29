/*! Built with http://stenciljs.com */
App.loadBundle("hfmdsg5p",["exports","./chunk-4c3efb41.js","./chunk-50c69dbd.js","./chunk-468533f7.js"],function(e,t,a,n){var r=window.App.h,s=function(){function e(){this.exchanges=[],this.isLoading=!1}return e.prototype.componentWillLoad=function(){this.store.mapStateToProps(this,function(e){var t=e.app;return{exchanges:t.exchanges,baseCurrency:t.baseCurrency,currencies:t.currencies,tickers:t.tickers,wallets:t.wallets,balances:t.balances,orders:t.orders,dust:t.dust}}),this.store.mapDispatchToProps(this,{appSetExchanges:a.appSetExchanges,appSetBaseCurrency:a.appSetBaseCurrency,appSetCurrencies:a.appSetCurrencies,appSetTickers:a.appSetTickers,appSetTotalBalances:a.appSetTotalBalances,appSetWallets:a.appSetWallets,appSetBalances:a.appSetBalances,appSetOrders:a.appSetOrders})},e.prototype.addTotalBalance=function(e){var a=this;t.BALANCESERVICE.getTotalBalancesFromStorage().then(function(n){if(e&&e>0){var r=Math.round((new Date).getTime());t.BALANCESERVICE.setTotalBalances(n.concat([[r,e]])),a.appSetTotalBalances(n.concat([[r,e]]))}})},e.prototype.getBtcStats=function(e,t){var a={price:0,balance:0,change:0},n=t.find(function(t){return t.symbol===e.currency+"/BTC"});return"BTC"===e.symbol&&(a.balance=e.balance,a.price=1),n&&(a.balance=e.balance*n.last,a.price=n.last,a.change=n.percentage),a},e.prototype.refreshBalances=function(){var e=this;this.isLoading=!0,t.BALANCESERVICE.refreshBalances(this.wallets,this.exchanges,this.orders,this.dust).then(function(t){t&&(e.appSetCurrencies(t.conversionrates),e.appSetTickers(t.tickers),e.appSetWallets(t.wallets),e.appSetExchanges(t.exchanges),e.addTotalBalance(t.exchangeTotal+t.walletTotal),e.appSetBalances({overview:t.exchangeTotal+t.walletTotal,exchanges:t.exchangeTotal,wallets:t.walletTotal}),e.appSetOrders(t.orders)),e.isLoading=!1})},e.prototype.render=function(){var e=this;return[r("ion-header",null,r("ion-toolbar",{color:"dark"},r("ion-buttons",{slot:"start"},r("ion-button",{"icon-only":!0,href:"/settings",padding:!0},r("ion-icon",{name:"options"}))),r("ion-title",{"text-center":!0},r("ion-badge",{color:"light"},r("app-baseprice",{btcPrice:t.CURRENCYSERVICE.convertToBase(this.balances.exchanges,this.baseCurrency),baseCurrency:this.baseCurrency}))),r("ion-buttons",{slot:"end"},r("ion-button",{"icon-only":!0,disabled:this.isLoading,onClick:function(){return e.refreshBalances()},padding:!0},r("ion-icon",{name:"refresh",class:this.isLoading?"spin":""}))))),r("ion-content",null,r("ion-list",null,this.exchanges.filter(function(e){return e.key&&e.secret}).map(function(a){return[r("ion-item-divider",{color:"light"},r("ion-label",null,a.id),r("ion-badge",{slot:"end",color:"light"},r("app-baseprice",{btcPrice:t.CURRENCYSERVICE.getBaseTotal(a.balances,e.baseCurrency),baseCurrency:e.baseCurrency}))),a.balances.sort(function(e,t){return t.btcAmount-e.btcAmount}).map(function(t){return r("app-balanceitem",{exchangeId:a.id,baseCurrency:e.baseCurrency,cryptodata:t})})]})))]},Object.defineProperty(e,"is",{get:function(){return"app-exchanges"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{balances:{state:!0},baseCurrency:{state:!0},dust:{state:!0},exchanges:{state:!0},isLoading:{state:!0},orders:{state:!0},store:{context:"store"},tickers:{state:!0},wallets:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return""},enumerable:!0,configurable:!0}),e}();e.AppExchanges=s,Object.defineProperty(e,"__esModule",{value:!0})});