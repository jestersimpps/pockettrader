/*! Built with http://stenciljs.com */
const{h:t}=window.App;import{b as e}from"./chunk-ef98bfe2.js";import"./chunk-d4e5ef20.js";import"./chunk-6a7807b8.js";class i{constructor(){this.segment=1}componentDidLoad(){switch(console.log(this.pair),this.pair){case"BTC":e.getTicker(this.exchangeId,"BTC/USD").then(t=>{this.ticker=t.data,this.chartID=`${this.exchangeId}:BTCUSD`,this.switchSegment(1)}).catch(()=>{e.getTicker(this.exchangeId,"BTC/USDT").then(t=>{this.ticker=t.data,this.chartID=`${this.exchangeId}:BTCUSDT`,this.switchSegment(1)})});break;case"USD":case"EUR":case"GBP":case"CAD":e.getTicker(this.exchangeId,`BTC/${this.pair}`).then(t=>{this.ticker=t.data,this.chartID=`${this.exchangeId}:BTC${this.pair}`,this.switchSegment(1)});break;default:e.getTicker(this.exchangeId,`${this.pair}/BTC`).then(t=>{this.ticker=t.data,this.chartID=`${this.exchangeId}:${this.pair}BTC`,this.switchSegment(1)})}}showChart(){this.tradingviewWidget=new TradingView.widget({container_id:"tvChart",autosize:!0,symbol:this.chartID,interval:"60",timezone:"Etc/UTC",theme:"Light",style:"1",locale:"en",toolbar_bg:"#fff",padding:0,hide_top_toolbar:!1,enable_publishing:!1,withdateranges:!0,hide_side_toolbar:!0,details:!1,hideideas:!0,show_popup_button:!1,save_image:!1,allow_symbol_change:!1})}switchSegment(t){switch(this.segment=t,t){case 1:this.showChart()}}render(){const e={height:`${window.innerHeight-93}px`};return[this.ticker&&t("ion-header",null,t("ion-toolbar",{color:"dark"},t("ion-buttons",{slot:"start"},t("ion-back-button",{defaultHref:"/exchanges"})),t("ion-title",null,`${this.exchangeId} - ${this.ticker.symbol}`))),t("ion-content",null,1===this.segment&&t("div",{id:"tvChart",class:"tvchart",style:e}))]}static get is(){return"app-pair"}static get properties(){return{chartID:{state:!0},exchangeId:{type:String,attr:"exchange-id"},pair:{type:String,attr:"pair"},segment:{state:!0},store:{context:"store"},ticker:{state:!0}}}static get style(){return".tvchart{height:50%}.full{width:100%}.small{width:20%}.inputbox{border-radius:7px;border:2px solid #ffce00;padding:1px 1px 1px 10px;margin:4px}ion-grid{padding:0}.buttonRow{margin-bottom:-15px}"}}export{i as AppPair};