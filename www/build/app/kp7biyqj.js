/*! Built with http://stenciljs.com */
const{h:e}=window.App;import{a as r}from"./chunk-374e99fd.js";import"./chunk-a7525511.js";class t{render(){return[`${this.baseCurrency.symbol} ${r(this.btcPrice).format("BTC"===this.baseCurrency.id?"0,0.0000":"0,0.00")}`]}static get is(){return"app-baseprice"}static get properties(){return{baseCurrency:{type:"Any",attr:"base-currency"},btcPrice:{type:Number,attr:"btc-price"}}}static get style(){return""}}export{t as AppBaseprice};