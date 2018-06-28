/*! Built with http://stenciljs.com */
const{h:e}=window.App;import{a,c as t}from"./chunk-fa062d1d.js";import{c as s,a as n,d as c,e as r,f as i,b as o,g as l}from"./chunk-5ac4d949.js";import"./chunk-6061a41c.js";import"./chunk-a7525511.js";class h{constructor(){this.exchanges=[],this.isLoading=!1}componentWillLoad(){this.store.mapStateToProps(this,e=>{const{app:{exchanges:a,baseCurrency:t,currencies:s,tickers:n,wallets:c,balances:r}}=e;return{exchanges:a,baseCurrency:t,currencies:s,tickers:n,wallets:c,balances:r}}),this.store.mapDispatchToProps(this,{appSetExchanges:s,appSetBaseCurrency:n,appSetCurrencies:c,appSetTickers:r,appSetTotalBalances:i,appSetWallets:o,appSetBalances:l})}addTotalBalance(e){t.getTotalBalances().then(a=>{if(e&&e>0){let s=Math.round((new Date).getTime());t.setTotalBalances([...a,[s,e]]),this.appSetTotalBalances([...a,[s,e]])}})}getBtcStats(e,a){let t={price:0,balance:0,change:0};const s=a.find(a=>a.symbol===`${e.currency}/BTC`);return"BTC"===e.symbol&&(t.balance=e.balance,t.price=1),s&&(t.balance=e.balance*s.last,t.price=s.last,t.change=s.percentage),t}refreshBalances(){this.isLoading=!0,t.refreshBalances(this.wallets,this.exchanges).then(e=>{e&&(this.appSetCurrencies(e.conversionrates),this.appSetTickers(e.tickers),this.appSetWallets(e.wallets),this.appSetExchanges(e.exchanges),this.addTotalBalance(e.exchangeTotal+e.walletTotal),this.appSetBalances({overview:e.exchangeTotal+e.walletTotal,exchanges:e.exchangeTotal,wallets:e.walletTotal})),this.isLoading=!1})}render(){return[e("ion-header",null,e("ion-toolbar",{color:"dark"},e("ion-buttons",{slot:"start"},e("ion-button",{"icon-only":!0,href:"/settings",padding:!0},e("ion-icon",{name:"options"}))),e("ion-title",{"text-center":!0},e("ion-badge",{color:"light"},e("app-baseprice",{btcPrice:a.convertToBase(this.balances.exchanges,this.baseCurrency),baseCurrency:this.baseCurrency}))),e("ion-buttons",{slot:"end"},e("ion-button",{"icon-only":!0,disabled:this.isLoading,onClick:()=>this.refreshBalances(),padding:!0},e("ion-icon",{name:"refresh",class:this.isLoading?"spin":""}))))),e("ion-content",null,e("ion-refresher",{slot:"fixed",onIonRefresh:()=>this.refreshBalances()},e("ion-refresher-content",null)),e("ion-list",null,this.exchanges.filter(e=>e.key&&e.secret).map(t=>[e("ion-list-header",{color:"light"},t.id,e("ion-badge",{color:"light","margin-right":!0},e("app-baseprice",{btcPrice:a.getBaseTotal(t.balances,this.baseCurrency),baseCurrency:this.baseCurrency}))),t.balances.map(a=>e("app-balanceitem",{exchangeId:t.id,baseCurrency:this.baseCurrency,cryptodata:a}))])))]}static get is(){return"app-exchanges"}static get properties(){return{balances:{state:!0},baseCurrency:{state:!0},exchanges:{state:!0},isLoading:{state:!0},store:{context:"store"},tickers:{state:!0},wallets:{state:!0}}}static get style(){return""}}export{h as AppExchanges};