/*! Built with http://stenciljs.com */
const{h:e}=window.App;import{c as t,a as s}from"./chunk-ef98bfe2.js";import{d as a,a as n,e as r,f as i,g as o,c,h as l,i as h}from"./chunk-6a7807b8.js";import"./chunk-d4e5ef20.js";class p{constructor(){this.exchanges=[],this.isLoading=!1,this.segment="1"}componentWillLoad(){this.store.mapStateToProps(this,e=>{const{app:{exchanges:t,baseCurrency:s,currencies:a,tickers:n,wallets:r,balances:i,orders:o,dust:c}}=e;return{exchanges:t,baseCurrency:s,currencies:a,tickers:n,wallets:r,balances:i,orders:o,dust:c}}),this.store.mapDispatchToProps(this,{appSetExchanges:a,appSetBaseCurrency:n,appSetCurrencies:r,appSetTickers:i,appSetTotalBalances:o,appSetWallets:c,appSetBalances:l,appSetOrders:h})}addTotalBalance(e){t.getTotalBalancesFromStorage().then(s=>{if(e&&e>0){let a=Math.round((new Date).getTime());t.setTotalBalances([...s,[a,e]]),this.appSetTotalBalances([...s,[a,e]])}})}refreshBalances(){this.isLoading=!0,t.refreshBalances(this.wallets,this.exchanges,this.orders,this.dust).then(e=>{e&&(this.appSetCurrencies(e.conversionrates),this.appSetTickers(e.tickers),this.appSetWallets(e.wallets),this.appSetExchanges(e.exchanges),this.addTotalBalance(e.exchangeTotal+e.walletTotal),this.appSetBalances({overview:e.exchangeTotal+e.walletTotal,exchanges:e.exchangeTotal,wallets:e.walletTotal}),this.appSetOrders(e.orders)),this.isLoading=!1})}getExchange(e){let s=null;return this.exchanges.forEach(a=>{let n=this.tickers.find(e=>e.exchangeId===a.id);n&&t.getBtcStats(e,n.tickers).symbol&&(s=a.id)}),s}render(){return[e("ion-header",null,e("ion-toolbar",{color:"dark"},e("ion-buttons",{slot:"start"},e("ion-button",{"icon-only":!0,href:"/settings",padding:!0},e("ion-icon",{name:"options"}))),e("ion-title",{"text-center":!0},e("ion-badge",{color:"light"},e("app-baseprice",{btcPrice:s.convertToBase(this.balances.wallets,this.baseCurrency),baseCurrency:this.baseCurrency}))),e("ion-buttons",{slot:"end"},e("ion-button",{"icon-only":!0,disabled:this.isLoading,onClick:()=>this.refreshBalances(),padding:!0},e("ion-icon",{name:"refresh",class:this.isLoading?"spin":""}))))),e("ion-content",null,e("ion-list",null,this.wallets.filter(e=>e.balance>0).sort((e,t)=>t.btcAmount-e.btcAmount).map(t=>e("app-balanceitem",{exchangeId:this.getExchange(t),baseCurrency:this.baseCurrency,cryptodata:t}))))]}static get is(){return"app-wallets"}static get properties(){return{balances:{state:!0},baseCurrency:{state:!0},dust:{state:!0},exchanges:{state:!0},isLoading:{state:!0},orders:{state:!0},segment:{state:!0},store:{context:"store"},tickers:{state:!0},wallets:{state:!0}}}static get style(){return""}}export{p as AppWallets};