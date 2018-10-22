/*! Built with http://stenciljs.com */
const { h } = window.App;

import { j as createColorClasses } from './chunk-cb94efc7.js';

class Label {
    componentDidLoad() {
        this.positionChanged();
    }
    positionChanged() {
        const position = this.position;
        this.ionStyle.emit({
            "label": true,
            [`label-${position}`]: !!position
        });
    }
    hostData() {
        const position = this.position;
        return {
            class: Object.assign({}, createColorClasses(this.color), { [`label-${position}`]: !!position })
        };
    }
    static get is() { return "ion-label"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
            "color": {
                "type": String,
                "attr": "color"
            },
            "el": {
                "elementRef": true
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "position": {
                "type": String,
                "attr": "position",
                "watchCallbacks": ["positionChanged"]
            }
        };
    }
    static get events() {
        return [{
                "name": "ionStyle",
                "method": "ionStyle",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get style() { return ".sc-ion-label-md-h {\n  \n  --color: currentColor;\n  margin: 0;\n  display: block;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  font-size: inherit;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.ion-color.sc-ion-label-md-h {\n  color: var(--ion-color-base); }\n\n[text-wrap].sc-ion-label-md-h {\n  white-space: normal; }\n\n.item-interactive-disabled.sc-ion-label-md-h, .item-interactive-disabled   .sc-ion-label-md-h {\n  cursor: default;\n  opacity: .3;\n  pointer-events: none; }\n\n.item-input.sc-ion-label-md-h, .item-input   .sc-ion-label-md-h {\n  -webkit-box-flex: initial;\n  -ms-flex: initial;\n  flex: initial;\n  max-width: 200px;\n  pointer-events: none; }\n\n.label-fixed.sc-ion-label-md-h {\n  -webkit-box-flex: 0;\n  -ms-flex: 0 0 100px;\n  flex: 0 0 100px;\n  width: 100px;\n  min-width: 100px;\n  max-width: 200px; }\n\n.label-stacked.sc-ion-label-md-h, .label-floating.sc-ion-label-md-h {\n  margin-bottom: 0;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  width: auto;\n  max-width: 100%; }\n\n.item-has-focus.label-floating.sc-ion-label-md-h, .item-has-focus   .label-floating.sc-ion-label-md-h, .item-has-value.label-floating.sc-ion-label-md-h, .item-has-value   .label-floating.sc-ion-label-md-h {\n  -webkit-transform: translate3d(0,  0,  0) scale(0.8);\n  transform: translate3d(0,  0,  0) scale(0.8); }\n\n.sc-ion-label-md-h {\n  margin: 11px 8px 11px 0; }\n\n[text-wrap].sc-ion-label-md-h {\n  font-size: 14px;\n  line-height: 1.5; }\n\n.label-stacked.sc-ion-label-md-h {\n  font-size: 12px; }\n\n.label-floating.sc-ion-label-md-h {\n  -webkit-transform: translate3d(0,  27px,  0);\n  transform: translate3d(0,  27px,  0);\n  -webkit-transform-origin: left top;\n  transform-origin: left top;\n  -webkit-transition: -webkit-transform 150ms ease-in-out;\n  transition: -webkit-transform 150ms ease-in-out;\n  transition: transform 150ms ease-in-out;\n  transition: transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out; }\n\n.label-stacked.sc-ion-label-md-h, .label-floating.sc-ion-label-md-h {\n  margin-left: 0;\n  margin-bottom: 0; }\n\n.sc-ion-label-md-s  h1  {\n  margin: 0 0 2px;\n  font-size: 24px;\n  font-weight: normal; }\n\n.sc-ion-label-md-s  h2  {\n  margin: 2px 0;\n  font-size: 16px;\n  font-weight: normal; }\n\n.sc-ion-label-md-s  h3 , .sc-ion-label-md-s  h4 , .sc-ion-label-md-s  h5 , .sc-ion-label-md-s  h6  {\n  margin: 2px 0;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: normal; }\n\n.sc-ion-label-md-s  p  {\n  margin: 0 0 2px;\n  font-size: 14px;\n  line-height: normal;\n  text-overflow: inherit;\n  overflow: inherit; }\n\n.sc-ion-label-md-s > p {\n  color: var(--ion-text-color-step-400, #666666); }\n\n.sc-ion-label-md-h.ion-color.sc-ion-label-md-s > p, .ion-color .sc-ion-label-md-h.sc-ion-label-md-s > p {\n  color: inherit; }"; }
    static get styleMode() { return "md"; }
}

export { Label as IonLabel };
