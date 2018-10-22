/*! Built with http://stenciljs.com */
const{h:t}=window.App;import{a as e}from"./chunk-f8b49345.js";import{a as i,e as s}from"./chunk-ef98bfe2.js";import{a}from"./chunk-c2f0607d.js";import{b as n,c as o,d as l,j as r,l as c,m as h}from"./chunk-cb94efc7.js";import"./chunk-6a7807b8.js";import"./chunk-d4e5ef20.js";class d{render(){return[t("ion-item",null===this.exchangeId?{lines:"full"}:{lines:"full",href:`/pair/${this.exchangeId}/${this.cryptodata.currency}`},t("ion-grid",{fixed:!0},t("ion-row",null,t("ion-col",{"col-4":!0,class:"lineText"},t("app-cryptoicon",{class:"cicon",symbol:this.cryptodata.currency})),t("ion-col",{"col-4":!0,"text-center":!0,class:"lineText"},t("app-baseprice",{btcPrice:i.convertToBase(this.cryptodata.btcAmount,this.baseCurrency),baseCurrency:this.baseCurrency})),t("ion-col",{"col-4":!0,"text-right":!0,class:"lineText"},t("app-baseprice",{btcPrice:i.convertToBase(this.cryptodata.btcPrice,this.baseCurrency),baseCurrency:this.baseCurrency}))),t("ion-row",null,t("ion-col",{"col-4":!0,"text-left":!0,class:"lineText"},t("b",{class:"ctext"},this.cryptodata.currency)),t("ion-col",{"col-4":!0,"text-center":!0,class:"lineText"},t("span",null,e(this.cryptodata.balance).format("0,0.00"))),t("ion-col",{"col-4":!0,"text-right":!0,class:"lineText"},t("b",{style:{color:this.cryptodata.change>0?"#10dc60":"#f53d3d"}},this.cryptodata.change>0?"+"+e(this.cryptodata.change).format("0,0.00")+" %":e(this.cryptodata.change).format("0,0.00")+" %")))))]}static get is(){return"app-balanceitem"}static get properties(){return{baseCurrency:{type:"Any",attr:"base-currency"},cryptodata:{type:"Any",attr:"cryptodata"},exchangeId:{type:String,attr:"exchange-id"}}}static get style(){return".lineText{font-size:.8rem}.cicon{position:absolute;top:-1px}"}}class u{render(){return[t("img",{src:`/assets/icon/${this.symbol.toLowerCase()}.svg`})]}static get is(){return"app-cryptoicon"}static get properties(){return{symbol:{type:String,attr:"symbol"}}}static get style(){return""}}class p{constructor(){this.timeFrame="1h",this.isLoading=!0}changeAltLine(){this.chart.series[1].color=+this.curPrice>+this.altPrice?"#10dc60":"#f53d3d",this.chart.series[1].setData(this.ohlcData.map(t=>[t[0],this.altPrice]))}changeSymbol(){this.isLoading=!0,s.getOhlc(this.exchangeId,this.symbol,this.timeFrame).then(t=>{this.ohlcData=t.data,this.chart.series[0].setData(t.data),this.chart.series[1].color=+this.curPrice>+this.altPrice?"#10dc60":"#f53d3d",this.chart.series[1].setData(this.ohlcData.map(t=>[t[0],this.altPrice])),this.curPrice&&this.chart.series[2].setData(this.ohlcData.map(t=>[t[0],this.curPrice])),this.isLoading=!1}).catch(()=>{this.isLoading=!1,window.alert("Couldn't get chart data")})}setTimeFrame(t){this.isLoading=!0,this.timeFrame=t,s.getOhlc(this.exchangeId,this.symbol,t).then(t=>{this.ohlcData=t.data,this.chart.series[0].setData(t.data),this.chart.series[1].color=+this.curPrice>+this.altPrice?"#10dc60":"#f53d3d",this.chart.series[1].setData(this.ohlcData.map(t=>[t[0],this.altPrice])),this.curPrice&&this.chart.series[2].setData(this.ohlcData.map(t=>[t[0],this.curPrice])),this.isLoading=!1}).catch(()=>{this.isLoading=!1,window.alert("Couldn't get chart data")})}componentDidLoad(){this.chart=a.stockChart("ohlc",{title:{text:""},rangeSelector:{enabled:!1,inputEnabled:!1},navigator:{enabled:!1},scrollbar:{enabled:!1},plotOptions:{line:{dashStyle:"Solid",lineWidth:1}},series:[{name:`${this.exchangeId} - ${this.symbol}`,type:"candlestick",data:[]},{name:"Open Price",type:"line",data:[]},{name:"Last Price",type:"line",data:[],color:"#000"}]})}render(){return[t("ion-segment",{color:"dark",onIonChange:t=>this.setTimeFrame(t.detail.value)},t("ion-segment-button",{value:"1m",checked:"1m"===this.timeFrame},"1 hour"),t("ion-segment-button",{value:"1h",checked:"1h"===this.timeFrame},"1 day"),t("ion-segment-button",{value:"1d",checked:"1d"===this.timeFrame},"1 week")),t("div",{id:"ohlc",style:{height:"200px",display:this.isLoading?"none":"block"}}),t("div",{style:{height:"200px",display:this.isLoading?"block":"none"}},"Loading chart..."),t("div",{"padding-left":!0,"padding-right":!0},t("ion-button",{size:"small",color:"dark",fill:"outline",expand:"block",href:`/pair/${this.exchangeId}/${this.symbol}`},t("ion-icon",{name:"stats","margin-right":!0}),"Open Tradingview Chart"))]}static get is(){return"app-ohlc"}static get properties(){return{altPrice:{type:Number,attr:"alt-price",watchCallbacks:["changeAltLine"]},curPrice:{type:Number,attr:"cur-price"},exchangeId:{type:String,attr:"exchange-id"},isLoading:{state:!0},symbol:{type:String,attr:"symbol",watchCallbacks:["changeSymbol"]},timeFrame:{state:!0}}}static get style(){return".highcharts-point-up{fill:#10dc60}.highcharts-point-down{fill:#f53d3d}"}}class m{constructor(){this.inputId=`ion-input-${g++}`,this.didBlurAfterEdit=!1,this.hasFocus=!1,this.autocapitalize="none",this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.clearInput=!1,this.debounce=0,this.disabled=!1,this.name=this.inputId,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.type="text",this.value="",this.onInput=(t=>{const e=t.target;e&&(this.value=e.value||""),this.ionInput.emit(t)}),this.onBlur=(()=>{this.hasFocus=!1,this.focusChanged(),this.emitStyle(),this.ionBlur.emit()}),this.onFocus=(()=>{this.hasFocus=!0,this.focusChanged(),this.emitStyle(),this.ionFocus.emit()}),this.onKeydown=(()=>{this.clearOnEdit&&(this.didBlurAfterEdit&&this.hasValue()&&this.clearTextInput(),this.didBlurAfterEdit=!1)}),this.clearTextInput=(()=>{this.value=""})}debounceChanged(){this.ionChange=n(this.ionChange,this.debounce)}disabledChanged(){this.emitStyle()}valueChanged(){const t=this.nativeInput,e=this.getValue();t&&t.value!==e&&(t.value=e),this.emitStyle(),this.ionChange.emit({value:e})}componentWillLoad(){void 0===this.clearOnEdit&&"password"===this.type&&(this.clearOnEdit=!0)}componentDidLoad(){this.ionStyle=o(this.ionStyle),this.debounceChanged(),this.emitStyle(),this.ionInputDidLoad.emit()}componentDidUnload(){this.nativeInput=void 0,this.ionInputDidUnload.emit()}setFocus(){this.nativeInput&&this.nativeInput.focus()}getValue(){return this.value||""}emitStyle(){this.ionStyle.emit({interactive:!0,input:!0,"has-value":this.hasValue(),"has-focus":this.hasFocus,"interactive-disabled":this.disabled})}focusChanged(){this.clearOnEdit&&!this.hasFocus&&this.hasValue()&&(this.didBlurAfterEdit=!0)}hasValue(){return this.getValue().length>0}hostData(){return{class:Object.assign({},r(this.color),{"in-item":c("ion-item",this.el),"has-value":this.hasValue(),"has-focus":this.hasFocus})}}render(){return l(this.el,this.name,this.getValue(),this.disabled),[t("input",{ref:t=>this.nativeInput=t,"aria-disabled":this.disabled?"true":null,accept:this.accept,autoCapitalize:this.autocapitalize,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,autoFocus:this.autofocus,class:"native-input",disabled:this.disabled,inputMode:this.inputmode,min:this.min,max:this.max,minLength:this.minlength,maxLength:this.maxlength,multiple:this.multiple,name:this.name,pattern:this.pattern,placeholder:this.placeholder,results:this.results,readOnly:this.readonly,required:this.required,spellCheck:this.spellcheck,step:this.step,size:this.size,type:this.type,value:this.getValue(),onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeydown}),t("slot",null),this.clearInput&&!this.readonly&&!this.disabled&&t("button",{type:"button",class:"input-clear-icon",tabindex:"-1",onTouchStart:this.clearTextInput,onMouseDown:this.clearTextInput})]}static get is(){return"ion-input"}static get encapsulation(){return"shadow"}static get properties(){return{accept:{type:String,attr:"accept"},autocapitalize:{type:String,attr:"autocapitalize"},autocomplete:{type:String,attr:"autocomplete"},autocorrect:{type:String,attr:"autocorrect"},autofocus:{type:Boolean,attr:"autofocus"},clearInput:{type:Boolean,attr:"clear-input"},clearOnEdit:{type:Boolean,attr:"clear-on-edit",mutable:!0},color:{type:String,attr:"color"},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},hasFocus:{state:!0},inputmode:{type:String,attr:"inputmode"},max:{type:String,attr:"max"},maxlength:{type:Number,attr:"maxlength"},min:{type:String,attr:"min"},minlength:{type:Number,attr:"minlength"},mode:{type:String,attr:"mode"},multiple:{type:Boolean,attr:"multiple"},name:{type:String,attr:"name"},pattern:{type:String,attr:"pattern"},placeholder:{type:String,attr:"placeholder"},readonly:{type:Boolean,attr:"readonly"},required:{type:Boolean,attr:"required"},results:{type:Number,attr:"results"},setFocus:{method:!0},size:{type:Number,attr:"size"},spellcheck:{type:Boolean,attr:"spellcheck"},step:{type:String,attr:"step"},type:{type:String,attr:"type"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}}static get events(){return[{name:"ionInput",method:"ionInput",bubbles:!0,cancelable:!0,composed:!0},{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionInputDidLoad",method:"ionInputDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionInputDidUnload",method:"ionInputDidUnload",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".sc-ion-input-md-h{--placeholder-color:currentColor;--placeholder-font-style:inherit;--placeholder-font-weight:inherit;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--background:transparent;--color:inherit;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;background:var(--background);color:var(--color);padding:0!important;font-family:var(--ion-font-family,inherit);--padding-top:11px;--padding-end:8px;--padding-bottom:11px;--padding-start:8px;font-size:inherit}.ion-color.sc-ion-input-md-h{color:var(--ion-color-base)}.native-input.sc-ion-input-md{border-radius:var(--border-radius);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;border:0;outline:0;background:0 0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.native-input.sc-ion-input-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-webkit-autofill{background-color:transparent}.native-input[disabled].sc-ion-input-md{opacity:.4}.input-cover.sc-ion-input-md{left:0;top:0;position:absolute;width:100%;height:100%}[disabled].sc-ion-input-md-h   .input-cover.sc-ion-input-md{pointer-events:none}.input-clear-icon.sc-ion-input-md{margin:0;padding:0;background-position:center;border:0;outline:0;background-color:transparent;background-repeat:no-repeat;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><polygon%20fill='var(--ion-text-color-step-400,%20%23666666)'%20points='405,136.798%20375.202,107%20256,226.202%20136.798,107%20107,136.798%20226.202,256%20107,375.202%20136.798,405%20256,285.798%20375.202,405%20405,375.202%20285.798,256'/></svg>\");width:30px;height:30px;background-size:22px}.has-focus.has-value.sc-ion-input-md-h   .input-clear-icon.sc-ion-input-md{visibility:visible}.has-focus.sc-ion-input-md-h   .input-cover.sc-ion-input-md{display:none}.has-focus.sc-ion-input-md-h{pointer-events:none}.has-focus.sc-ion-input-md-h   a.sc-ion-input-md, .has-focus.sc-ion-input-md-h   button.sc-ion-input-md, .has-focus.sc-ion-input-md-h   input.sc-ion-input-md{pointer-events:auto}"}static get styleMode(){return"md"}}let g=0;class b{componentDidLoad(){Array.from(this.el.querySelectorAll("ion-button")).forEach(t=>{t.size||(t.size="small")})}hostData(){return{class:r(this.color)}}render(){return[t("slot",{name:"start"}),t("div",{class:"item-divider-inner"},t("div",{class:"item-divider-wrapper"},t("slot",null)),t("slot",{name:"end"}))]}static get is(){return"ion-item-divider"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},el:{elementRef:!0},mode:{type:String,attr:"mode"}}}static get style(){return".sc-ion-item-divider-md-h{--padding-start:0px;--padding-end:0px;--padding-top:0px;--padding-bottom:0px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:0;padding:var(--padding-top) calc(var(--padding-end) + var(--ion-safe-area-right,0px)) var(--padding-bottom) calc(var(--padding-start) + var(--ion-safe-area-left,0px));display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:30px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:100;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-item-divider-md-h{background:var(--ion-color-base);color:var(--ion-color-contrast)}[sticky].sc-ion-item-divider-md-h{position:-webkit-sticky;position:sticky;top:0}.item-divider-inner.sc-ion-item-divider-md{margin:0;padding:0 8px 0 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border:0;overflow:hidden}.item-divider-wrapper.sc-ion-item-divider-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden}.sc-ion-item-divider-md-h{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color-step-600, #999999);--padding-start:16px;border-bottom:1px solid rgba(var(--ion-item-border-color-rgb,0,0,0),.13);font-size:14px}[slot=end].sc-ion-item-divider-md-h, [slot=start].sc-ion-item-divider-md-h{margin:2px 8px 2px 0}.sc-ion-item-divider-md-s > ion-icon[slot=end], .sc-ion-item-divider-md-s > ion-icon[slot=start]{margin-left:0;margin-top:3px;margin-bottom:2px}.sc-ion-item-divider-md-s > ion-avatar[slot=start], .sc-ion-item-divider-md-s > ion-thumbnail[slot=start]{margin:8px 16px 8px 0}.sc-ion-item-divider-md-s > ion-avatar[slot=end], .sc-ion-item-divider-md-s > ion-thumbnail[slot=end]{margin:8px}.sc-ion-item-divider-md-s > h1{margin:0 0 2px;font-size:24px;font-weight:400}.sc-ion-item-divider-md-s > h2{margin:2px 0;font-size:16px;font-weight:400}.sc-ion-item-divider-md-s > h3, h4.sc-ion-item-divider-md, h5.sc-ion-item-divider-md, h6.sc-ion-item-divider-md{margin:2px 0;font-size:14px;font-weight:400;line-height:normal}.sc-ion-item-divider-md-s > p{margin:0 0 2px;color:var(--ion-text-color-step-400,#666);font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}"}static get styleMode(){return"md"}}class y{constructor(){this.inset=!1}async closeSlidingItems(){const t=this.el.querySelector("ion-item-sliding");return!(!t||!t.closeOpened)&&t.closeOpened()}hostData(){return{class:Object.assign({},h(this.mode,"list"),{[`list-lines-${this.lines}`]:!!this.lines,"list-inset":this.inset,[`list-${this.mode}-lines-${this.lines}`]:!!this.lines})}}static get is(){return"ion-list"}static get properties(){return{closeSlidingItems:{method:!0},el:{elementRef:!0},inset:{type:Boolean,attr:"inset"},lines:{type:String,attr:"lines"},mode:{type:String,attr:"mode"}}}static get style(){return"ion-list{margin:0;padding:0;display:block;background:var(--ion-item-background-color,var(--ion-background-color,#fff));contain:content;list-style-type:none}ion-list.list-inset{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden}.list-md{margin:-1px 0 16px}.list-md>.input:last-child::after{left:0}.list-md:not(.list-inset):not(.list-md-lines-none) .item:last-child{--inner-border-width:0;--border-width:0 0 1px 0}.list-md.list-inset{margin:16px;border-radius:2px}.list-md.list-inset ion-item:first-child{--border-radius:2px 2px 0 0;--border-width:0}.list-md.list-inset ion-item:last-child{--border-radius:0 0 2px,2px;--border-width:0}.list-md.list-inset .item-interactive{--padding-start:0;--padding-end:0}.list-md.list-inset+ion-list.list-inset{margin-top:0}.list-md-lines-none .item{--border-width:0;--inner-border-width:0}.list-md .item-lines-full,.list-md-lines-full .item{--border-width:0 0 1px 0}.list-md-lines-full .item{--inner-border-width:0}.list-md .item-lines-inset,.list-md-lines-inset .item{--inner-border-width:0 0 1px 0}.list-md .item-lines-inset{--border-width:0}.list-md .item-lines-full{--inner-border-width:0}"}static get styleMode(){return"md"}}class v{hostData(){return{class:r(this.color)}}render(){return t("slot",null)}static get is(){return"ion-list-header"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}}static get style(){return".sc-ion-list-header-md-h{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:0 0 13px;padding:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:40px;background:var(--background);color:var(--color);overflow:hidden;--background:transparent;--color:var(--ion-text-color-step-400, #666666);padding-left:calc(var(--ion-safe-area-left,0px) + 16px);min-height:45px;font-size:14px}.ion-color.sc-ion-list-header-md-h{background:var(--ion-color-base);color:var(--ion-color-contrast)}"}static get styleMode(){return"md"}}class S{pop(){const t=this.el.closest("ion-nav");t&&t.pop({skipIfBusy:!0})}static get is(){return"ion-nav-pop"}static get properties(){return{el:{elementRef:!0}}}static get listeners(){return[{name:"child:click",method:"pop"}]}}class k{constructor(){this.inputId=`ion-rb-${C++}`,this.keyFocus=!1,this.name=this.inputId,this.disabled=!1,this.checked=!1,this.onClick=(()=>{this.checkedChanged(!0)}),this.onChange=(()=>{this.checked=!0,this.nativeInput.focus()}),this.onKeyUp=(()=>{this.keyFocus=!0}),this.onFocus=(()=>{this.ionFocus.emit()}),this.onBlur=(()=>{this.keyFocus=!1,this.ionBlur.emit()})}componentWillLoad(){this.ionSelect=o(this.ionSelect),this.ionStyle=o(this.ionStyle),null==this.value&&(this.value=this.inputId),this.emitStyle()}componentDidLoad(){this.ionRadioDidLoad.emit(),this.nativeInput.checked=this.checked;const t=this.nativeInput.closest("ion-item");if(t){const e=t.querySelector("ion-label");e&&(e.id=this.inputId+"-lbl",this.nativeInput.setAttribute("aria-labelledby",e.id))}}componentDidUnload(){this.ionRadioDidUnload.emit()}colorChanged(){this.emitStyle()}checkedChanged(t){this.nativeInput.checked!==t&&(this.nativeInput.checked=t),t&&this.ionSelect.emit({checked:!0,value:this.value}),this.emitStyle()}disabledChanged(t){this.nativeInput.disabled=t,this.emitStyle()}emitStyle(){this.ionStyle.emit({"radio-checked":this.checked,"interactive-disabled":this.disabled})}hostData(){return{class:Object.assign({},r(this.color),{"in-item":c("ion-item",this.el),interactive:!0,"radio-checked":this.checked,"radio-disabled":this.disabled,"radio-key":this.keyFocus})}}render(){return[t("div",{class:"radio-icon"},t("div",{class:"radio-inner"})),t("input",{type:"radio",onClick:this.onClick,onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,onKeyUp:this.onKeyUp,id:this.inputId,name:this.name,value:this.value,disabled:this.disabled,ref:t=>this.nativeInput=t})]}static get is(){return"ion-radio"}static get encapsulation(){return"shadow"}static get properties(){return{checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color",watchCallbacks:["colorChanged"]},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},value:{type:"Any",attr:"value",mutable:!0}}}static get events(){return[{name:"ionRadioDidLoad",method:"ionRadioDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionRadioDidUnload",method:"ionRadioDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0},{name:"ionSelect",method:"ionSelect",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".sc-ion-radio-md-h{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;--color:var(--ion-text-color-step-600, #999999);--color-checked:var(--ion-color-primary, #3880ff);--width:16px;--height:16px;--border-width:2px;--border-style:solid;--inner-width:calc(var(--width) - var(--border-width) * 4);--inner-height:calc(var(--height) - var(--border-width) * 4)}.radio-disabled.sc-ion-radio-md-h{pointer-events:none;opacity:.3}.radio-icon.sc-ion-radio-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:var(--width);height:var(--height);contain:layout size style}input.sc-ion-radio-md{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0}.radio-icon.sc-ion-radio-md, .radio-inner.sc-ion-radio-md{-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-radio-md-h   .radio-inner.sc-ion-radio-md{background:var(--ion-color-base)}.ion-color.radio-checked.sc-ion-radio-md-h   .radio-icon.sc-ion-radio-md{border-color:var(--ion-color-base)}.radio-icon.sc-ion-radio-md{margin:0;border-radius:50%;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner.sc-ion-radio-md{width:var(--inner-width);height:var(--inner-height);border-radius:50%;-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);-webkit-transition:-webkit-transform 280ms cubic-bezier(.4,0,.2,1);transition:-webkit-transform 280ms cubic-bezier(.4,0,.2,1);transition:transform 280ms cubic-bezier(.4,0,.2,1);transition:transform 280ms cubic-bezier(.4,0,.2,1),-webkit-transform 280ms cubic-bezier(.4,0,.2,1);background:var(--color-checked)}.radio-checked.sc-ion-radio-md-h   .radio-icon.sc-ion-radio-md{border-color:var(--color-checked)}.radio-checked.sc-ion-radio-md-h   .radio-inner.sc-ion-radio-md{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}.radio-key.sc-ion-radio-md-h   .radio-icon.sc-ion-radio-md::after{border-radius:50%;left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:\"\";opacity:.2}.in-item.sc-ion-radio-md-h{margin:9px 10px 9px 0;display:block;position:static}.in-item[slot=start].sc-ion-radio-md-h{margin:11px 36px 10px 4px}"}static get styleMode(){return"md"}}let C=0;class f{constructor(){this.disabled=!1}valueChanged(t){this.updateButtons(),this.ionChange.emit({value:t})}segmentClick(t){this.value=t.target.value}componentDidLoad(){if(null==this.value){const t=this.getButtons().find(t=>t.checked);t&&(this.value=t.value)}this.updateButtons()}updateButtons(){const t=this.value;for(const e of this.getButtons())e.checked=e.value===t}getButtons(){return Array.from(this.el.querySelectorAll("ion-segment-button"))}hostData(){return{class:Object.assign({},r(this.color),{"segment-disabled":this.disabled})}}static get is(){return"ion-segment"}static get encapsulation(){return"scoped"}static get properties(){return{color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},mode:{type:String,attr:"mode"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"ionSelect",method:"segmentClick"}]}static get style(){return".sc-ion-segment-md-h{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;font-family:var(--ion-font-family,inherit);text-align:center;--background:transparent;--background-checked:transparent;--border-color:rgba(0, 0, 0, 0.1);--color:var(--ion-toolbar-color-active, #4a4a4a);--color-checked:var(--ion-toolbar-color-active, #4a4a4a)}.sc-ion-segment-md-s > ion-segment-button{--btn-background:var(--background);--btn-border-color:var(--border-color);color:var(--color);--padding-top:0;--padding-end:6px;--padding-bottom:0;--padding-start:6px;--border-width:0 0 2px 0;--border-style:solid;--transition:100ms all linear;--icon-size:26px;height:42px;font-size:12px;font-weight:500;line-height:40px;text-transform:uppercase;opacity:.7}.sc-ion-segment-md-s > .segment-button-checked{--btn-background:var(--background-checked);--btn-border-color:var(--border-color-checked);color:var(--color-checked)}.sc-ion-segment-md-s > .segment-button-disabled, .segment-disabled.sc-ion-segment-md-h{pointer-events:none}.segment-disabled.sc-ion-segment-md-h{opacity:.3}ion-toolbar.ion-color.sc-ion-segment-md-h:not(.ion-color), ion-toolbar.ion-color   .sc-ion-segment-md-h:not(.ion-color){--color:var(--ion-color-contrast);--color-checked:var(--ion-color-contrast)}.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > ion-segment-button{--color:var(--ion-color-base)}.sc-ion-segment-md-h.ion-color.sc-ion-segment-md-s > .segment-button-checked{color:var(--ion-color-base)}.sc-ion-segment-md-s > .activated, .sc-ion-segment-md-s > .segment-button-checked{opacity:1}.sc-ion-segment-md-s > .segment-button-disabled{opacity:.3}"}static get styleMode(){return"md"}}let I=0;class D{constructor(){this.checked=!1,this.disabled=!1,this.value="ion-sb-"+I++}checkedChanged(t,e){t&&!e&&this.ionSelect.emit()}hostData(){const{disabled:t,checked:e,color:i}=this;return{"ion-activatable":!0,class:Object.assign({},r(i),{"segment-button-disabled":t,"segment-button-checked":e})}}render(){return[t("button",{type:"button","aria-pressed":this.checked?"true":null,class:"button-native",disabled:this.disabled,onClick:()=>this.checked=!0},t("slot",null),"md"===this.mode&&t("ion-ripple-effect",null))]}static get is(){return"ion-segment-button"}static get encapsulation(){return"shadow"}static get properties(){return{checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},mode:{type:String,attr:"mode"},value:{type:String,attr:"value"}}}static get events(){return[{name:"ionSelect",method:"ionSelect",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".sc-ion-segment-button-h{--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;--icon-size:1em;--btn-background:inherit;--btn-border-color:inherit;-webkit-box-flex:1;-ms-flex:1;flex:1;color:inherit;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.sc-ion-segment-button-h:first-of-type   .button-native.sc-ion-segment-button{--padding-end:0;border-top-left-radius:var(--border-radius);border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:var(--border-radius)}.sc-ion-segment-button-h:not(:first-of-type)   .button-native.sc-ion-segment-button{border-left-width:0}.sc-ion-segment-button-h:last-of-type   .button-native.sc-ion-segment-button{--padding-start:0;border-top-left-radius:0;border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius);border-bottom-left-radius:0}.button-native.sc-ion-segment-button{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--btn-border-color);outline:0;background:var(--btn-background);contain:content;cursor:pointer;overflow:hidden}.sc-ion-segment-button-s > ion-icon{font-size:var(--icon-size)}"}}class x{getMode(){const t=this.el.closest("ion-toolbar");return t&&t.mode||this.mode}hostData(){const t=this.getMode();return{class:Object.assign({},r(this.color),{[`title-${t}`]:!0})}}render(){return[t("div",{class:"toolbar-title"},t("slot",null))]}static get is(){return"ion-title"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},el:{elementRef:!0}}}static get style(){return".sc-ion-title-h{--color:currentColor;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);color:var(--color)}.title-ios.sc-ion-title-h{left:0;top:0;padding:0 90px;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;letter-spacing:-.03em;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}.title-md.sc-ion-title-h{padding:0 12px;font-size:20px;font-weight:500}.ion-color.sc-ion-title-h{color:var(--ion-color-base)}.toolbar-title.sc-ion-title{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}"}}export{d as AppBalanceitem,u as AppCryptoicon,p as AppOhlc,m as IonInput,b as IonItemDivider,y as IonList,v as IonListHeader,S as IonNavPop,k as IonRadio,f as IonSegment,D as IonSegmentButton,x as IonTitle};