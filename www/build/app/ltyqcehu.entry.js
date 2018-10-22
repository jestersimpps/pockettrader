/*! Built with http://stenciljs.com */
const{h:e}=window.App;import{a as t,c as i}from"./chunk-ef98bfe2.js";import{a as s}from"./chunk-f8b49345.js";import{d as l,a as o,e as n,f as a,g as c,c as r,h,i as u}from"./chunk-6a7807b8.js";import{c as d,d as p,j as g,l as b}from"./chunk-cb94efc7.js";import"./chunk-d4e5ef20.js";class m{constructor(){this.sellType="market",this.exchanges=[],this.isLoading=!1}componentWillLoad(){this.store.mapStateToProps(this,e=>{const{app:{exchanges:t,baseCurrency:i,currencies:s,tickers:l,wallets:o,balances:n,orders:a,dust:c}}=e;return{exchanges:t,baseCurrency:i,currencies:s,tickers:l,wallets:o,balances:n,orders:a,dust:c}}),this.store.mapDispatchToProps(this,{appSetExchanges:l,appSetBaseCurrency:o,appSetCurrencies:n,appSetTickers:a,appSetTotalBalances:c,appSetWallets:r,appSetBalances:h,appSetOrders:u})}appSetSell(e){this.sellType=e}render(){return[e("ion-header",null,e("ion-toolbar",{color:"dark"},e("ion-buttons",{slot:"start"},e("ion-back-button",{defaultHref:"/trade"})),e("ion-title",null,"All to BTC"),e("ion-buttons",{slot:"end"},e("ion-button",{"icon-only":!0,disabled:this.isLoading,onClick:()=>this.refreshBalances(),padding:!0},e("ion-icon",{name:"refresh",class:this.isLoading?"spin":""}))))),e("ion-content",null,e("ion-list",null,e("ion-list-header",{color:"light"},"Sell Type"),e("ion-item",{lines:"full"},e("ion-label",null,"Market Sell"),e("ion-radio",{checked:"market"==this.sellType,value:"market",onClick:()=>this.appSetSell("market")})),e("ion-item",{lines:"full"},e("ion-label",null,"Limit Sell"),e("ion-radio",{checked:"limit"==this.sellType,value:"limit",onClick:()=>this.appSetSell("limit")})),e("ion-button",{expand:"full",color:"danger"},"Convert selected to BTC"),e("ion-list-header",{color:"light"},"Balance overview",e("ion-badge",{color:"light","margin-right":!0},e("app-baseprice",{btcPrice:t.convertToBase(this.balances.exchanges,this.baseCurrency),baseCurrency:this.baseCurrency}))),e("ion-item",{lines:"full"},e("ion-grid",null,e("ion-row",null,e("ion-col",{"col-6":!0,class:"lineText"},"Current Value"),e("ion-col",{"col-6":!0,"text-right":!0,class:"lineText"},s(t.convertToBase(this.balances.exchanges,this.baseCurrency)).format("0,0.00000000"))),e("ion-row",null,e("ion-col",{"col-6":!0,class:"lineText"},"Sell Value"),e("ion-col",{"col-6":!0,"text-right":!0,class:"lineText"},"0")),e("ion-row",null,e("ion-col",{"col-6":!0,class:"lineText"},"Change"),e("ion-col",{"col-6":!0,"text-right":!0,class:"lineText"},s(0).format("0,0.00"))))),this.exchanges.filter(e=>e.key&&e.secret).map(i=>[e("ion-list-header",{color:"light"},i.id,e("ion-badge",{color:"light","margin-right":!0},e("app-baseprice",{btcPrice:t.getBaseTotal(i.balances,this.baseCurrency),baseCurrency:this.baseCurrency}))),i.balances.map(t=>e("ion-item",{lines:"full"},e("ion-grid",null,e("ion-row",null,e("ion-col",{"col-6":!0,class:"lineText"},e("app-cryptoicon",{class:"cicon",symbol:t.currency}),e("b",{style:{position:"absolute",top:"10px",left:"50px"}},t.currency)),e("ion-col",{"col-6":!0,"text-right":!0,class:"lineText"},e("ion-toggle",{checked:!0}))),e("ion-row",null,e("ion-col",{"col-6":!0,class:"lineText"},"Status"),e("ion-col",{"col-6":!0,"text-right":!0,class:"lineText"},"open")),e("ion-row",null,e("ion-col",{"col-6":!0,class:"lineText"},"Current Price"),e("ion-col",{"col-6":!0,"text-right":!0,class:"lineText"},s(t.btcPrice).format("0,0.00000000"))),e("ion-row",null,e("ion-col",{"col-6":!0,class:"lineText"},"Sell Price"),e("ion-col",{"col-6":!0,"text-right":!0,class:"lineText"},s(t.btcPrice).format("0,0.00000000"))),e("ion-row",null,e("ion-col",{"col-6":!0,class:"lineText"},"Current Value"),e("ion-col",{"col-6":!0,"text-right":!0,class:"lineText"},s(t.btcAmount).format("0,0.00000000"))),e("ion-row",null,e("ion-col",{"col-6":!0,class:"lineText"},"Sell Value"),e("ion-col",{"col-6":!0,"text-right":!0,class:"lineText"},s(t.btcAmount).format("0,0.00000000"))),e("ion-row",null,e("ion-col",{"col-6":!0,class:"lineText"},"Change"),e("ion-col",{"col-6":!0,"text-right":!0,class:"lineText"},s(t.btcAmount).format("0,0.00"))),e("ion-row",null,e("ion-col",{"col-6":!0,class:"lineText","padding-bottom":!0},e("ion-button",{size:"small",color:"danger",expand:"block"},"Cancel"))))))])))]}addTotalBalance(e){i.getTotalBalancesFromStorage().then(t=>{if(e&&e>0){let s=Math.round((new Date).getTime());i.setTotalBalances([...t,[s,e]]),this.appSetTotalBalances([...t,[s,e]])}})}refreshBalances(){this.isLoading=!0,i.refreshBalances(this.wallets,this.exchanges,this.orders,this.dust).then(e=>{e&&(this.appSetCurrencies(e.conversionrates),this.appSetTickers(e.tickers),this.appSetWallets(e.wallets),this.appSetExchanges(e.exchanges),this.addTotalBalance(e.exchangeTotal+e.walletTotal),this.appSetBalances({overview:e.exchangeTotal+e.walletTotal,exchanges:e.exchangeTotal,wallets:e.walletTotal}),this.appSetOrders(e.orders)),this.isLoading=!1})}static get is(){return"app-panic"}static get properties(){return{balances:{state:!0},baseCurrency:{state:!0},dust:{state:!0},exchanges:{state:!0},isLoading:{state:!0},orders:{state:!0},sellType:{state:!0},store:{context:"store"},tickers:{state:!0},wallets:{state:!0}}}static get style(){return""}}function y(){const e=window.TapticEngine;e&&e.selection()}class k{constructor(){this.inputId=`ion-tg-${T++}`,this.pivotX=0,this.activated=!1,this.keyFocus=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onChange=(()=>{this.checked=!this.checked}),this.onKeyUp=(()=>{this.keyFocus=!0}),this.onFocus=(()=>{this.ionFocus.emit()}),this.onBlur=(()=>{this.keyFocus=!1,this.ionBlur.emit()})}checkedChanged(e){this.ionChange.emit({checked:e,value:this.value})}disabledChanged(){this.ionStyle.emit({"interactive-disabled":this.disabled}),this.gesture&&this.gesture.setDisabled(this.disabled)}componentWillLoad(){this.ionStyle=d(this.ionStyle)}async componentDidLoad(){const e=this.nativeInput.closest("ion-item");if(e){const t=e.querySelector("ion-label");t&&(t.id=this.inputId+"-lbl",this.nativeInput.setAttribute("aria-labelledby",t.id))}this.gesture=(await import("./gesture.js")).createGesture({el:this.el,queue:this.queue,gestureName:"toggle",gesturePriority:100,threshold:0,onStart:e=>this.onStart(e),onMove:e=>this.onMove(e),onEnd:e=>this.onEnd(e)}),this.disabledChanged()}onStart(e){return this.pivotX=e.currentX,this.activated=!0,e.event.preventDefault(),!0}onMove(e){const t=e.currentX;x(this.checked,t-this.pivotX,-15)&&(this.checked=!this.checked,this.pivotX=t,y())}onEnd(e){x(this.checked,e.currentX-this.pivotX,4)&&(this.checked=!this.checked,y()),this.activated=!1,this.nativeInput.focus()}hostData(){return{class:Object.assign({},g(this.color),{"in-item":b("ion-item",this.el),"toggle-activated":this.activated,"toggle-checked":this.checked,"toggle-disabled":this.disabled,"toggle-key":this.keyFocus,interactive:!0})}}render(){return p(this.el,this.name,this.checked?this.value:"",this.disabled),[e("div",{class:"toggle-icon"},e("div",{class:"toggle-inner"})),e("input",{type:"checkbox",onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,onKeyUp:this.onKeyUp,checked:this.checked,id:this.inputId,name:this.name,value:this.value,disabled:this.disabled,ref:e=>this.nativeInput=e}),e("slot",null)]}static get is(){return"ion-toggle"}static get encapsulation(){return"shadow"}static get properties(){return{activated:{state:!0},checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},queue:{context:"queue"},value:{type:String,attr:"value"}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host{-webkit-box-sizing:content-box!important;box-sizing:content-box!important;display:inline-block;contain:content;cursor:pointer;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--background:var(--ion-item-background-color, var(--ion-background-color, #fff));--background-checked:var(--ion-color-primary, #3880ff);--handle-background:var(--ion-item-background-color, var(--ion-background-color, #fff));--handle-background-checked:var(--ion-item-background-color, var(--ion-background-color, #fff));-webkit-box-sizing:content-box;box-sizing:content-box;position:relative;width:51px;height:32px;contain:strict}:host(.toggle-key) input{border:2px solid #5e9ed6}:host(:focus){outline:0}:host(.toggle-disabled){pointer-events:none;opacity:.3}input{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;pointer-events:none}:host(.ion-color.toggle-checked) .toggle-icon{background:var(--ion-color-base)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-contrast)}.toggle-icon{border-radius:16px;display:block;position:relative;width:100%;height:100%;-webkit-transition:background-color .3s;transition:background-color .3s;background-color:var(--ion-background-color-step-50,#f2f2f2);overflow:hidden;pointer-events:none}.toggle-icon::before{left:2px;right:2px;top:2px;bottom:2px;border-radius:16px;position:absolute;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;background:var(--background);content:\"\"}.toggle-inner{left:2px;top:2px;border-radius:14px;position:absolute;width:28px;height:28px;-webkit-transition:width 120ms ease-in-out 80ms,left 110ms ease-in-out 80ms,right 110ms ease-in-out 80ms,-webkit-transform .3s;transition:width 120ms ease-in-out 80ms,left 110ms ease-in-out 80ms,right 110ms ease-in-out 80ms,-webkit-transform .3s;transition:transform .3s,width 120ms ease-in-out 80ms,left 110ms ease-in-out 80ms,right 110ms ease-in-out 80ms;transition:transform .3s,width 120ms ease-in-out 80ms,left 110ms ease-in-out 80ms,right 110ms ease-in-out 80ms,-webkit-transform .3s;background:var(--handle-background);-webkit-box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);will-change:transform;contain:strict}:host(.toggle-checked) .toggle-icon{background:var(--background-checked)}:host(.toggle-activated) .toggle-icon::before,:host(.toggle-checked) .toggle-icon::before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}:host(.toggle-checked) .toggle-inner{-webkit-transform:translate3d(19px,0,0);transform:translate3d(19px,0,0);background:var(--handle-background-checked)}:host(.toggle-activated.toggle-checked) .toggle-inner::before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}:host(.toggle-activated) .toggle-inner{width:34px}:host(.toggle-activated.toggle-checked) .toggle-inner{left:-4px}:host(.in-item[slot]){margin:0;padding:6px 8px 5px 16px}:host(.in-item[slot=start]){padding:6px 16px 5px 0}"}static get styleMode(){return"ios"}}function x(e,t,i){const s="rtl"===document.dir;return e?!s&&i>t||s&&-i<t:!s&&-i<t||s&&i>t}let T=0;export{m as AppPanic,k as IonToggle};