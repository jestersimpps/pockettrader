/*! Built with http://stenciljs.com */
App.loadBundle("6vkrhkgb",["exports","./chunk-b5724922.js","./chunk-50c69dbd.js"],function(e,r,t){window;var n=function(){function e(){}return e.prototype.render=function(){return[this.baseCurrency.symbol+" "+r.numeral(this.btcPrice).format(this.btcPrice<1?"0,0.000000":"0,0.00")]},Object.defineProperty(e,"is",{get:function(){return"app-baseprice"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{baseCurrency:{type:"Any",attr:"base-currency"},btcPrice:{type:Number,attr:"btc-price"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return""},enumerable:!0,configurable:!0}),e}();e.AppBaseprice=n,Object.defineProperty(e,"__esModule",{value:!0})});