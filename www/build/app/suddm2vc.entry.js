/*! Built with http://stenciljs.com */
const{h:t}=window.App;import{j as o,k as e,l,m as s,n as r}from"./chunk-cb94efc7.js";class n{async onClick(t){const o=this.el.closest("ion-nav");return t.preventDefault(),o&&await o.canGoBack()?o.pop({skipIfBusy:!0}):e(this.win,this.defaultHref,t,"back")}hostData(){const t=void 0!==this.defaultHref;return{"ion-activatable":!0,class:Object.assign({},o(this.color),{button:!0,"show-back-button":t})}}render(){const o="ios"===this.mode?"Back":null,e=null!=this.icon?this.icon:this.config.get("backButtonIcon","arrow-back"),l=null!=this.text?this.text:this.config.get("backButtonText",o);return t("button",{type:"button",class:"button-native",onClick:t=>this.onClick(t)},t("span",{class:"button-inner"},e&&t("ion-icon",{icon:e,lazy:!1}),l&&t("span",{class:"button-text"},l),"md"===this.mode&&t("ion-ripple-effect",null)),"md"===this.mode&&t("ion-ripple-effect",null))}static get is(){return"ion-back-button"}static get encapsulation(){return"scoped"}static get properties(){return{color:{type:String,attr:"color"},config:{context:"config"},defaultHref:{type:String,attr:"default-href"},el:{elementRef:!0},icon:{type:String,attr:"icon"},mode:{type:String,attr:"mode"},text:{type:String,attr:"text"},win:{context:"window"}}}static get style(){return".sc-ion-back-button-md-h{--background:transparent;--ripple-color:currentColor;--transition:background-color,opacity 100ms linear;--opacity:1;display:none;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}.ion-color.sc-ion-back-button-md-h   .button-native.sc-ion-back-button-md{color:var(--ion-color-base)}.activated.sc-ion-back-button-md-h   .button-native.sc-ion-back-button-md{opacity:.4}.show-back-button.sc-ion-back-button-md-h, .can-go-back.sc-ion-back-button-md-h > ion-header.sc-ion-back-button-md, .can-go-back > ion-header   .sc-ion-back-button-md-h{display:block}.button-native.sc-ion-back-button-md{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin:var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;min-width:var(--min-width);min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:0;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-shadow:none;box-shadow:none}.button-inner.sc-ion-back-button-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}ion-icon.sc-ion-back-button-md{padding:var(--icon-padding-top) var(--icon-padding-end) var(--icon-padding-bottom) var(--icon-padding-start);margin:var(--icon-margin-top) var(--icon-margin-end) var(--icon-margin-bottom) var(--icon-margin-start);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none;line-height:.67;text-align:start}.sc-ion-back-button-md-h{--color:currentColor;--margin-top:1px;--margin-end:6px;--margin-bottom:0;--margin-start:0;--padding-top:0;--padding-end:5px;--padding-bottom:0;--padding-start:5px;--min-height:32px;--min-width:44px;--icon-padding-end:.3em;--icon-padding-start:.3em;--icon-margin-top:0;--icon-margin-end:6px;--icon-margin-bottom:0;--icon-margin-start:6px;--icon-font-size:24px;--icon-font-weight:normal;font-size:14px;font-weight:500;text-transform:uppercase}"}static get styleMode(){return"md"}}class i{static get is(){return"ion-buttons"}static get encapsulation(){return"scoped"}static get style(){return".sc-ion-buttons-md-h{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-md-s  ion-button {--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;--padding-top:0;--padding-bottom:0;--padding-start:0;--padding-end:0;--box-shadow:none;margin-left:2px;margin-right:2px;--padding-top:0;--padding-bottom:0;--padding-start:8px;--padding-end:8px;--height:32px;--box-shadow:none;font-size:14px;font-weight:500}.sc-ion-buttons-md-s  ion-button:not(.button-round) {--border-radius:2px}.sc-ion-buttons-md-h.ion-color.sc-ion-buttons-md-s  .button , .ion-color .sc-ion-buttons-md-h.sc-ion-buttons-md-s  .button {--color:currentColor;--color-activated:currentColor}.sc-ion-buttons-md-s  .button-solid {--color:var(--ion-toolbar-background-color, #f8f8f8);--color-activated:var(--ion-toolbar-background-color, #f8f8f8);--background:var(--ion-toolbar-text-color, #424242);--background-activated:var(--ion-toolbar-text-color, #424242)}.sc-ion-buttons-md-s  .button-outline {--color:currentColor;--color-activated:currentColor;--background:transparent;--background-activated:transparent;--border-color:currentColor}.sc-ion-buttons-md-s  .button-clear {--color:currentColor;--color-activated:currentColor;--background:transparent}.sc-ion-buttons-md-s  ion-icon[slot=start] {margin:0 .3em 0 0;font-size:1.4em}.sc-ion-buttons-md-s  ion-icon[slot=end] {margin:0 0 0 .4em;font-size:1.4em}.sc-ion-buttons-md-s  ion-icon[slot=icon-only] {padding:0;margin:0;font-size:1.8em}[slot=start].sc-ion-buttons-md-h{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}[slot=secondary].sc-ion-buttons-md-h{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}[slot=primary].sc-ion-buttons-md-h{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5;text-align:end}[slot=end].sc-ion-buttons-md-h{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6;text-align:end}"}static get styleMode(){return"md"}}class c{constructor(){this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1}onNavChanged(){this.resize()}componentWillLoad(){void 0===this.forceOverscroll&&(this.forceOverscroll="ios"===this.mode&&r(this.win,"mobile"))}componentDidLoad(){this.resize()}componentDidUnload(){this.watchDog&&clearInterval(this.watchDog)}resize(){this.fullscreen?this.queue.read(this.readDimensions.bind(this)):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,this.el.forceUpdate())}readDimensions(){const t=function(t){const o=t.closest("ion-tabs");if(o)return o;const e=t.closest("ion-app,ion-page,.ion-page,page-inner");return e||function(t){return t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null}(t)}(this.el),o=Math.max(this.el.offsetTop,0),e=Math.max(t.offsetHeight-o-this.el.offsetHeight,0);(o!==this.cTop||e!==this.cBottom)&&(this.cTop=o,this.cBottom=e,this.el.forceUpdate())}onScroll(t){const o=Date.now(),e=!this.isScrolling;this.lastScroll=o,e&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,this.queue.read(o=>{this.queued=!1,this.detail.event=t,function(t,o,e,l){const s=t.currentX,r=t.currentY,n=t.timeStamp,i=o.scrollLeft,c=o.scrollTop;l&&(t.startTimeStamp=e,t.startX=i,t.startY=c,t.velocityX=t.velocityY=0),t.timeStamp=e,t.currentX=t.scrollLeft=i,t.currentY=t.scrollTop=c,t.deltaX=i-t.startX,t.deltaY=c-t.startY;const a=e-n;if(a>0&&a<100){const o=(c-r)/a;t.velocityX=.7*((i-s)/a)+.3*t.velocityX,t.velocityY=.7*o+.3*t.velocityY}}(this.detail,this.scrollEl,o,e),this.ionScroll.emit(this.detail)}))}getScrollElement(){return Promise.resolve(this.scrollEl)}scrollToTop(t=0){return this.scrollToPoint(void 0,0,t)}scrollToBottom(t=0){return this.scrollToPoint(void 0,this.scrollEl.scrollHeight-this.scrollEl.clientHeight,t)}scrollByPoint(t,o,e){return this.scrollToPoint(t+this.scrollEl.scrollLeft,o+this.scrollEl.scrollTop,e)}async scrollToPoint(t,o,e=0){const l=this.scrollEl;if(e<32)return null!=o&&(l.scrollTop=o),void(null!=t&&(l.scrollLeft=t));let s,r=0;const n=new Promise(t=>s=t),i=l.scrollTop,c=l.scrollLeft,a=null!=o?o-i:0,h=null!=t?t-c:0,u=t=>{const o=Math.min(1,(t-r)/e)-1,n=Math.pow(o,3)+1;0!==a&&(l.scrollTop=Math.floor(n*a+i)),0!==h&&(l.scrollLeft=Math.floor(n*h+c)),n<1?requestAnimationFrame(u):s()};return requestAnimationFrame(t=>{r=t,u(t)}),n}onScrollStart(){this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval(()=>{this.lastScroll<Date.now()-120&&this.onScrollEnd()},100)}onScrollEnd(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1})}hostData(){return{class:Object.assign({},o(this.color),{"content-sizing":l("ion-popover",this.el),overscroll:!!this.forceOverscroll}),style:{"--offset-top":`${this.cTop}px`,"--offset-bottom":`${this.cBottom}px`}}}render(){const{scrollX:o,scrollY:e,forceOverscroll:l}=this;return this.resize(),[t("div",{class:{"inner-scroll":!0,"scroll-x":o,"scroll-y":e,overscroll:(o||e)&&!!l},ref:t=>this.scrollEl=t,onScroll:t=>this.onScroll(t)},t("slot",null)),t("slot",{name:"fixed"})]}static get is(){return"ion-content"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},config:{context:"config"},el:{elementRef:!0},forceOverscroll:{type:Boolean,attr:"force-overscroll",mutable:!0},fullscreen:{type:Boolean,attr:"fullscreen"},getScrollElement:{method:!0},queue:{context:"queue"},scrollByPoint:{method:!0},scrollEvents:{type:Boolean,attr:"scroll-events"},scrollToBottom:{method:!0},scrollToPoint:{method:!0},scrollToTop:{method:!0},scrollX:{type:Boolean,attr:"scroll-x"},scrollY:{type:Boolean,attr:"scroll-y"},win:{context:"window"}}}static get events(){return[{name:"ionScrollStart",method:"ionScrollStart",bubbles:!0,cancelable:!0,composed:!0},{name:"ionScroll",method:"ionScroll",bubbles:!0,cancelable:!0,composed:!0},{name:"ionScrollEnd",method:"ionScrollEnd",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"body:ionNavDidChange",method:"onNavChanged"}]}static get style(){return":host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:layout size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-background-color-step-50, #f2f2f2)}.inner-scroll{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding:calc(var(--padding-top) + var(--offset-top)) var(--padding-end) calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom)) var(--padding-start);position:absolute;background:var(--background);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}.scroll-x,.scroll-y{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y{overflow-y:var(--overflow)}.scroll-x{overflow-x:var(--overflow)}.overscroll::after,.overscroll::before{position:absolute;width:1px;height:1px;content:\"\"}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}"}}class a{constructor(){this.translucent=!1}hostData(){const t=s(this.mode,"header"),o=this.translucent?s(this.mode,"header-translucent"):null;return{class:Object.assign({},t,o)}}static get is(){return"ion-header"}static get properties(){return{mode:{type:String,attr:"mode"},translucent:{type:Boolean,attr:"translucent"}}}static get style(){return"ion-header{display:block;position:relative;-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-md::after{left:0;bottom:-5px;background-position:left 0 top -2px;position:absolute;width:100%;height:5px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);background-repeat:repeat-x;content:\"\"}.header-md[no-border]::after{display:none}"}static get styleMode(){return"md"}}class h{hostData(){return{class:o(this.color)}}render(){return[t("div",{class:"toolbar-background"}),t("div",{class:"toolbar-container"},t("slot",{name:"start"}),t("slot",{name:"secondary"}),t("div",{class:"toolbar-content"},t("slot",null)),t("slot",{name:"primary"}),t("slot",{name:"end"}))]}static get is(){return"ion-toolbar"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},config:{context:"config"},mode:{type:String,attr:"mode"}}}static get style(){return":host{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box;--background:var(--ion-toolbar-background-color, #f8f8f8);--color:var(--ion-toolbar-text-color, #424242);--border-color:var(--ion-toolbar-border-color, var(--ion-border-color, #c1c4cd));--padding-top:4px;--padding-bottom:4px;--padding-start:4px;--padding-end:4px;--min-height:56px}:host(.ion-color){color:var(--ion-color-contrast)}:host(.ion-color) .toolbar-background{background:var(--ion-color-base)}.toolbar-container{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}.toolbar-background{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-content{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3;min-width:0;max-width:100%}"}static get styleMode(){return"md"}}export{n as IonBackButton,i as IonButtons,c as IonContent,a as IonHeader,h as IonToolbar};