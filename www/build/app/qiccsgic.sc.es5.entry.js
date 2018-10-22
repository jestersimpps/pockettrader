/*! Built with http://stenciljs.com */
App.loadBundle("qiccsgic",["exports","./chunk-9675f313.js"],function(t,e){var n=window.App.h,i={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)"};function r(t,e){return void 0===e||""===e||t.matchMedia(i[e]).matches}var o=window,l=!!(o.CSS&&o.CSS.supports&&o.CSS.supports("--a: 0")),s=["","xs","sm","md","lg","xl"],a=function(){function t(){}return t.prototype.onResize=function(){this.el.forceUpdate()},t.prototype.getColumns=function(t){for(var e,n=0,i=s;n<i.length;n++){var o=i[n],l=r(this.win,o),a=this[t+o.charAt(0).toUpperCase()+o.slice(1)];l&&void 0!==a&&(e=a)}return e},t.prototype.calculateSize=function(){var t=this.getColumns("size");if(t&&""!==t){var e="auto"===t?"auto":l?"calc(calc("+t+" / var(--ion-grid-columns, 12)) * 100%)":t/12*100+"%";return{flex:"0 0 "+e,width:""+e,"max-width":""+e}}},t.prototype.calculatePosition=function(t,e){var n,i=this.getColumns(t);if(i)return(n={})[e]=l?"calc(calc("+i+" / var(--ion-grid-columns, 12)) * 100%)":i>0&&i<12?i/12*100+"%":"auto",n},t.prototype.calculateOffset=function(){return this.calculatePosition("offset","margin-left")},t.prototype.calculatePull=function(){return this.calculatePosition("pull","right")},t.prototype.calculatePush=function(){return this.calculatePosition("push","left")},t.prototype.hostData=function(){return{style:Object.assign({},this.calculateOffset(),this.calculatePull(),this.calculatePush(),this.calculateSize())}},t.prototype.render=function(){return n("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-col"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{el:{elementRef:!0},offset:{type:String,attr:"offset"},offsetLg:{type:String,attr:"offset-lg"},offsetMd:{type:String,attr:"offset-md"},offsetSm:{type:String,attr:"offset-sm"},offsetXl:{type:String,attr:"offset-xl"},offsetXs:{type:String,attr:"offset-xs"},pull:{type:String,attr:"pull"},pullLg:{type:String,attr:"pull-lg"},pullMd:{type:String,attr:"pull-md"},pullSm:{type:String,attr:"pull-sm"},pullXl:{type:String,attr:"pull-xl"},pullXs:{type:String,attr:"pull-xs"},push:{type:String,attr:"push"},pushLg:{type:String,attr:"push-lg"},pushMd:{type:String,attr:"push-md"},pushSm:{type:String,attr:"push-sm"},pushXl:{type:String,attr:"push-xl"},pushXs:{type:String,attr:"push-xs"},size:{type:String,attr:"size"},sizeLg:{type:String,attr:"size-lg"},sizeMd:{type:String,attr:"size-md"},sizeSm:{type:String,attr:"size-sm"},sizeXl:{type:String,attr:"size-xl"},sizeXs:{type:String,attr:"size-xs"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"window:resize",method:"onResize",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-col-h{padding:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;width:100%;max-width:100%;min-height:1px}\@media (min-width:576px){.sc-ion-col-h{padding:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px))}}\@media (min-width:768px){.sc-ion-col-h{padding:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px))}}\@media (min-width:992px){.sc-ion-col-h{padding:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px))}}\@media (min-width:1200px){.sc-ion-col-h{padding:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px))}}"},enumerable:!0,configurable:!0}),t}(),u=function(){function t(){this.fixed=!1}return t.prototype.hostData=function(){return{class:{"grid-fixed":this.fixed}}},t.prototype.render=function(){return n("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-grid"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{fixed:{type:Boolean,attr:"fixed"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-grid-h{padding:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));margin-left:auto;margin-right:auto;display:block}.grid-fixed.sc-ion-grid-h{width:var(--ion-grid-width-xs,var(--ion-grid-width,100%));max-width:100%}\@media (min-width:576px){.sc-ion-grid-h{padding:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px))}.grid-fixed.sc-ion-grid-h{width:var(--ion-grid-width-sm,var(--ion-grid-width,540px))}}\@media (min-width:768px){.sc-ion-grid-h{padding:var(--ion-grid-padding-md,var(--ion-grid-padding,5px))}.grid-fixed.sc-ion-grid-h{width:var(--ion-grid-width-md,var(--ion-grid-width,720px))}}\@media (min-width:992px){.sc-ion-grid-h{padding:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px))}.grid-fixed.sc-ion-grid-h{width:var(--ion-grid-width-lg,var(--ion-grid-width,960px))}}\@media (min-width:1200px){.sc-ion-grid-h{padding:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px))}.grid-fixed.sc-ion-grid-h{width:var(--ion-grid-width-xl,var(--ion-grid-width,1140px))}}[no-padding].sc-ion-grid-h{padding:0}.sc-ion-grid-h[no-padding] .sc-ion-grid-s > ion-col{padding:0}"},enumerable:!0,configurable:!0}),t}(),c=function(){function t(){this.itemStyles=new Map,this.multipleInputs=!1,this.button=!1,this.detailIcon="ios-arrow-forward",this.disabled=!1,this.type="button"}return t.prototype.itemStyle=function(t){t.stopPropagation();for(var e=t.target.tagName,n=t.detail,i=Object.keys(t.detail),r={},o=this.itemStyles.get(e)||{},l=!1,s=0,a=i;s<a.length;s++){var u=a[s],c="item-"+u,p=n[u];p!==o[c]&&(l=!0),r[c]=p}l&&(this.itemStyles.set(e,r),this.el.forceUpdate())},t.prototype.componentDidLoad=function(){Array.from(this.el.querySelectorAll("ion-button")).forEach(function(t){t.size||(t.size="small")});var t=this.el.querySelectorAll("ion-select, ion-datetime");this.multipleInputs=t.length>1},t.prototype.isClickable=function(){return void 0!==this.href||this.button},t.prototype.hostData=function(){var t,n={};return this.itemStyles.forEach(function(t){Object.assign(n,t)}),{"ion-activatable":this.isClickable(),class:Object.assign({},n,e.createColorClasses(this.color),(t={},t["item-lines-"+this.lines]=!!this.lines,t["item-disabled"]=this.disabled,t["in-list"]=e.hostContext("ion-list",this.el),t.item=!0,t["item-multiple-inputs"]=this.multipleInputs,t))}},t.prototype.render=function(){var t=this,i=t.href,r=t.detail,o=t.mode,l=t.win,s=t.detailIcon,a=t.routerDirection,u=t.type,c=this.isClickable(),p=c?void 0===i?"button":"a":"div",f=void 0!==r?r:"ios"===o&&c;return[n(p,Object.assign({},"button"===p?{type:u}:{href:i},{class:"item-native",onClick:function(t){return e.openURL(l,i,t,a)}}),n("slot",{name:"start"}),n("div",{class:"item-inner"},n("div",{class:"input-wrapper"},n("slot",null)),n("slot",{name:"end"}),f&&n("ion-icon",{icon:s,lazy:!1,class:"item-detail-icon"}),n("div",{class:"item-inner-highlight"})),c&&"md"===o&&n("ion-ripple-effect",null)),n("div",{class:"item-highlight"})]},Object.defineProperty(t,"is",{get:function(){return"ion-item"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{button:{type:Boolean,attr:"button"},color:{type:String,attr:"color"},detail:{type:Boolean,attr:"detail"},detailIcon:{type:String,attr:"detail-icon"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},href:{type:String,attr:"href"},lines:{type:String,attr:"lines"},mode:{type:String,attr:"mode"},multipleInputs:{state:!0},routerDirection:{type:String,attr:"router-direction"},type:{type:String,attr:"type"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionStyle",method:"itemStyle"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-item-md-h{--min-height:44px;--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--box-shadow:none;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:currentColor;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:initial;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-item-md-h   .item-native.sc-ion-item-md{background:var(--ion-color-base);color:var(--ion-color-contrast)}.ion-color.sc-ion-item-md-h   .item-inner.sc-ion-item-md, .ion-color.sc-ion-item-md-h   .item-native.sc-ion-item-md{border-color:var(--ion-color-shade)}.activated.sc-ion-item-md-h   .item-native.sc-ion-item-md{background:var(--background-activated)}.ion-color.activated.sc-ion-item-md-h   .item-native.sc-ion-item-md{background:var(--ion-color-tint)}.item-disabled.sc-ion-item-md-h{cursor:default;opacity:.3;pointer-events:none}.item-native.sc-ion-item-md{border-radius:var(--border-radius);margin:0;padding:var(--padding-top) var(--padding-end) var(--padding-bottom) calc(var(--padding-start) + var(--ion-safe-area-left,0px));font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:0;background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}a.sc-ion-item-md, button.sc-ion-item-md{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-inner.sc-ion-item-md{margin:0;padding:var(--inner-padding-top) calc(var(--ion-safe-area-right,0px) + var(--inner-padding-end)) var(--inner-padding-bottom) var(--inner-padding-start);display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.item-detail-icon.sc-ion-item-md{color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}.sc-ion-item-md-s > ion-icon{font-size:1.6em}.sc-ion-item-md-s > ion-button{--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}.item-input.sc-ion-item-md-h, [vertical-align-top].sc-ion-item-md-h{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.input-wrapper.sc-ion-item-md{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.item-label-floating.sc-ion-item-md-h   .input-wrapper.sc-ion-item-md, .item-label-stacked.sc-ion-item-md-h   .input-wrapper.sc-ion-item-md{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.item-highlight.sc-ion-item-md, .item-inner-highlight.sc-ion-item-md{left:0;right:0;bottom:0;position:absolute;background:var(--highlight-background)}.item-highlight.sc-ion-item-md{height:var(--full-highlight-height)}.item-inner-highlight.sc-ion-item-md{height:var(--inset-highlight-height)}.item-interactive.item-has-focus.sc-ion-item-md-h{--highlight-background:var(--highlight-color-focused);--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}.item-interactive.ion-valid.sc-ion-item-md-h{--highlight-background:var(--highlight-color-valid)}.item-interactive.ion-invalid.sc-ion-item-md-h{--highlight-background:var(--highlight-color-invalid)}.sc-ion-item-md-h.item-label-floating .sc-ion-item-md-s > ion-select, .sc-ion-item-md-h.item-label-stacked .sc-ion-item-md-s > ion-select{--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}.sc-ion-item-md-h.item-label-floating .sc-ion-item-md-s > ion-datetime, .sc-ion-item-md-h.item-label-stacked .sc-ion-item-md-s > ion-datetime{--padding-start:0;width:100%}.sc-ion-item-md-h.item-multiple-inputs .sc-ion-item-md-s > ion-datetime, .sc-ion-item-md-h.item-multiple-inputs .sc-ion-item-md-s > ion-select{position:relative}.item-textarea.sc-ion-item-md-h{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.sc-ion-item-md-s > ion-reorder[slot]{margin-top:0;margin-bottom:0}.sc-ion-item-md-h{--background:var(--ion-item-background-color, transparent);--background-activated:var(--ion-item-background-color-active, #f1f1f1);--border-color:rgba(var(--ion-item-border-color-rgb, 0, 0, 0), 0.13);--color:var(--ion-item-text-color, var(--ion-text-color, #000));--transition:background-color 300ms cubic-bezier(.4, 0, .2, 1);--padding-start:16px;--background:var(--ion-item-background-color, transparent);--background-activated:var(--ion-item-background-color-active, #f1f1f1);--color:var(--ion-item-text-color, var(--ion-text-color, #000));--border-color:rgba(var(--ion-item-border-color-rgb, 0, 0, 0), 0.13);--inner-padding-end:8px;--inner-border-width:0 0 1px 0;--highlight-height:2px;--highlight-color-focused:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #10dc60);--highlight-color-invalid:var(--ion-color-danger, #f04141);font-size:16px;font-weight:400;text-transform:none}.item-interactive.sc-ion-item-md-h{--border-width:0 0 1px 0;--inner-border-width:0;--show-full-highlight:1;--show-inset-highlight:0}.item-lines-full.sc-ion-item-md-h{--border-width:0 0 1px 0;--show-full-highlight:1;--show-inset-highlight:0}.item-lines-inset.sc-ion-item-md-h{--inner-border-width:0 0 1px 0;--show-full-highlight:0;--show-inset-highlight:1}.item-lines-inset.sc-ion-item-md-h, .item-lines-none.sc-ion-item-md-h{--border-width:0;--show-full-highlight:0}.item-lines-full.sc-ion-item-md-h, .item-lines-none.sc-ion-item-md-h{--inner-border-width:0;--show-inset-highlight:0}.sc-ion-item-md-s > :not(.interactive)[slot=end], .sc-ion-item-md-s > :not(.interactive)[slot=start]{margin:2px 8px 2px 0}.sc-ion-item-md-s > ion-icon[slot=end], .sc-ion-item-md-s > ion-icon[slot=start]{margin-left:0;margin-top:3px;margin-bottom:2px}.sc-ion-item-md-s > ion-icon[slot=start]+.item-inner, .sc-ion-item-md-s > ion-icon[slot=start]+.item-interactive{margin-left:24px}.sc-ion-item-md-s > ion-avatar[slot=start], .sc-ion-item-md-s > ion-thumbnail[slot=start]{margin:8px 16px 8px 0}.sc-ion-item-md-s > ion-avatar[slot=end], .sc-ion-item-md-s > ion-thumbnail[slot=end]{margin:8px}.sc-ion-item-md-h.item-label-floating .sc-ion-item-md-s > [slot=end], .sc-ion-item-md-h.item-label-stacked .sc-ion-item-md-s > [slot=end]{margin-top:7px;margin-bottom:7px}.sc-ion-item-md-s > .button-small-md{--padding-top:0;--padding-bottom:0;--padding-start:.6em;--padding-end:.6em;--height:25px;font-size:12px}.sc-ion-item-md-s > .button-small-md ion-icon[slot=icon-only]{padding:0}.sc-ion-item-md-s > ion-avatar{width:40px;height:40px}.sc-ion-item-md-s > ion-thumbnail{width:80px;height:80px}.sc-ion-item-md-h.item-radio .sc-ion-item-md-s > ion-label, .sc-ion-item-md-h.item-toggle .sc-ion-item-md-s > ion-label{margin-left:0}.sc-ion-item-md-h.item-label-floating .sc-ion-item-md-s > ion-input, .sc-ion-item-md-h.item-label-floating .sc-ion-item-md-s > ion-select, .sc-ion-item-md-h.item-label-floating .sc-ion-item-md-s > ion-textarea, .sc-ion-item-md-h.item-label-stacked .sc-ion-item-md-s > ion-input, .sc-ion-item-md-h.item-label-stacked .sc-ion-item-md-s > ion-select, .sc-ion-item-md-h.item-label-stacked .sc-ion-item-md-s > ion-textarea{--padding-top:8px;--padding-bottom:8px;--padding-start:0}.sc-ion-item-md-h:not(.item-label) .sc-ion-item-md-s > ion-input, .sc-ion-item-md-h:not(.item-label) .sc-ion-item-md-s > ion-textarea{--padding-start:0}.sc-ion-item-md-h.item-has-focus:not(.ion-color) .sc-ion-item-md-s > .label-floating, .sc-ion-item-md-h.item-has-focus:not(.ion-color) .sc-ion-item-md-s > .label-stacked{color:var(--ion-color-primary,#3880ff)}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),p=function(){function t(){}return t.prototype.render=function(){return n("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-row"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-row-h{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}"},enumerable:!0,configurable:!0}),t}();t.IonCol=a,t.IonGrid=u,t.IonItem=c,t.IonRow=p,Object.defineProperty(t,"__esModule",{value:!0})});