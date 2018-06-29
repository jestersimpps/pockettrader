/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as createThemedClasses } from './chunk-ea7ac2d5.js';

class Footer {
    constructor() {
        /**
         * If true, the footer will be translucent.
         * Note: In order to scroll content behind the footer, the `fullscreen`
         * attribute needs to be set on the content.
         * Defaults to `false`.
         */
        this.translucent = false;
    }
    hostData() {
        const themedClasses = this.translucent ? createThemedClasses(this.mode, this.color, 'header-translucent') : {};
        const hostClasses = Object.assign({}, themedClasses);
        return {
            class: hostClasses
        };
    }
    static get is() { return "ion-footer"; }
    static get host() { return {
        "theme": "footer"
    }; }
    static get properties() { return {
        "translucent": {
            "type": Boolean,
            "attr": "translucent"
        }
    }; }
    static get style() { return "ion-footer {\n  position: relative;\n  z-index: 10;\n  display: block;\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1;\n  width: 100%; }"; }
    static get styleMode() { return "md"; }
}

export { Footer as IonFooter };
