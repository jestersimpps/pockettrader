/*! Built with http://stenciljs.com */
const{h:t}=window.App;function e(t,e,i,s){return e=(e||"md").toLowerCase(),i&&"ios"===e?t=i.toLowerCase():s&&"md"===e?t=s.toLowerCase():t&&(t=t.toLowerCase(),/^md-|^ios-|^logo-/.test(t)||(t=`${e}-${t}`)),"string"!=typeof t||""===t.trim()?null:""!==t.replace(/[a-z]|-|\d/gi,"")?null:t}function i(t){return"string"==typeof t&&(t=t.trim()).length>0&&/(\/|\.)/.test(t)?t:null}class s{constructor(){this.isVisible=!1,this.lazy=!1}componentWillLoad(){this.waitUntilVisible(this.el,"50px",()=>{this.isVisible=!0,this.loadIcon()})}componentDidUnload(){this.io&&(this.io.disconnect(),this.io=void 0)}waitUntilVisible(t,e,i){if(this.lazy&&this.win&&this.win.IntersectionObserver){const s=this.io=new this.win.IntersectionObserver(t=>{t[0].isIntersecting&&(s.disconnect(),this.io=void 0,i())},{rootMargin:e});s.observe(t)}else i()}loadIcon(){if(!this.isServer&&this.isVisible){const t=this.getUrl();t&&function(t,e,i){let s=n.get(e);return s||(s=fetch(e,{cache:"force-cache"}).then(t=>t.ok?t.text():Promise.resolve(null)).then(e=>(function(t,e,i){if(e){const i=t.createDocumentFragment(),s=t.createElement("div");s.innerHTML=e,i.appendChild(s);for(let t=s.childNodes.length-1;t>=0;t--)"svg"!==s.childNodes[t].nodeName.toLowerCase()&&s.removeChild(s.childNodes[t]);const n=s.firstElementChild;if(n&&"svg"===n.nodeName.toLowerCase()&&(n.setAttribute("class","s-ion-icon"),function t(e){if(1===e.nodeType){if("script"===e.nodeName.toLowerCase())return!1;for(let t=0;t<e.attributes.length;t++){const i=e.attributes[t].value;if("string"==typeof i&&0===i.toLowerCase().indexOf("on"))return!1}for(let i=0;i<e.childNodes.length;i++)if(!t(e.childNodes[i]))return!1}return!0}(n)))return s.innerHTML}return""})(t,e)),n.set(e,s)),s}(this.doc,t).then(t=>this.svgContent=t)}if(!this.ariaLabel){const t=e(this.name,this.mode,this.ios,this.md);t&&(this.ariaLabel=t.replace("ios-","").replace("md-","").replace(/\-/g," "))}}getUrl(){let t=i(this.src);return t||((t=e(this.name,this.mode,this.ios,this.md))?this.getNamedUrl(t):(t=i(this.icon))?t:(t=e(this.icon,this.mode,this.ios,this.md))?this.getNamedUrl(t):null)}getNamedUrl(t){return`${this.resourcesUrl}svg/${t}.svg`}hostData(){return{role:"img",class:Object.assign({},(t=this.color,t?{"ion-color":!0,[`ion-color-${t}`]:!0}:null),{[`icon-${this.size}`]:!!this.size})};var t}render(){return t("div",!this.isServer&&this.svgContent?{class:"icon-inner",innerHTML:this.svgContent}:{class:"icon-inner"})}static get is(){return"ion-icon"}static get encapsulation(){return"shadow"}static get properties(){return{ariaLabel:{type:String,attr:"aria-label",reflectToAttr:!0,mutable:!0},color:{type:String,attr:"color"},doc:{context:"document"},el:{elementRef:!0},icon:{type:String,attr:"icon",watchCallbacks:["loadIcon"]},ios:{type:String,attr:"ios"},isServer:{context:"isServer"},isVisible:{state:!0},lazy:{type:Boolean,attr:"lazy"},md:{type:String,attr:"md"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name",watchCallbacks:["loadIcon"]},resourcesUrl:{context:"resourcesUrl"},size:{type:String,attr:"size"},src:{type:String,attr:"src",watchCallbacks:["loadIcon"]},svgContent:{state:!0},win:{context:"window"}}}static get style(){return".sc-ion-icon-h{display:inline-block;width:1em;height:1em;contain:strict;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}.ion-color.sc-ion-icon-h{color:var(--ion-color-base)!important}.icon-small.sc-ion-icon-h{font-size:var(--ion-icon-size-small,18px)!important}.icon-large.sc-ion-icon-h{font-size:var(--ion-icon-size-large,32px)!important}.icon-inner.sc-ion-icon, svg.sc-ion-icon{display:block;fill:currentColor;stroke:currentColor;height:100%;width:100%}.ion-color-primary.sc-ion-icon-h{--ion-color-base:var(--ion-color-primary, #3880ff)}.ion-color-secondary.sc-ion-icon-h{--ion-color-base:var(--ion-color-secondary, #0cd1e8)}.ion-color-tertiary.sc-ion-icon-h{--ion-color-base:var(--ion-color-tertiary, #f4a942)}.ion-color-success.sc-ion-icon-h{--ion-color-base:var(--ion-color-success, #10dc60)}.ion-color-warning.sc-ion-icon-h{--ion-color-base:var(--ion-color-warning, #ffce00)}.ion-color-danger.sc-ion-icon-h{--ion-color-base:var(--ion-color-danger, #f14141)}.ion-color-light.sc-ion-icon-h{--ion-color-base:var(--ion-color-light, #f4f5f8)}.ion-color-medium.sc-ion-icon-h{--ion-color-base:var(--ion-color-medium, #989aa2)}.ion-color-dark.sc-ion-icon-h{--ion-color-base:var(--ion-color-dark, #222428)}"}}const n=new Map;export{s as IonIcon};