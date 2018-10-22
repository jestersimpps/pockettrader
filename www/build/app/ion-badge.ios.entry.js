/*! Built with http://stenciljs.com */
const { h } = window.App;

import { j as createColorClasses } from './chunk-cb94efc7.js';

class Badge {
    hostData() {
        return {
            class: createColorClasses(this.color)
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-badge"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "color": {
                "type": String,
                "attr": "color"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            }
        };
    }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the badge\n   * \@prop --color: Text color of the badge\n   *\n   * \@prop --padding-top: Padding top of the badge\n   * \@prop --padding-end: Padding end of the badge\n   * \@prop --padding-bottom: Padding bottom of the badge\n   * \@prop --padding-start: Padding start of the badge\n   */\n  --background: var(--ion-color-primary, #3880ff);\n  --color: var(--ion-color-primary-contrast, #fff);\n  --padding-top: 3px;\n  --padding-end: 8px;\n  --padding-bottom: 3px;\n  --padding-start: 8px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  padding: var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);\n  display: inline-block;\n  min-width: 10px;\n  background: var(--background);\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  contain: content;\n  vertical-align: baseline; }\n\n:host(.ion-color) {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast); }\n\n:host(:empty) {\n  display: none; }\n\n:host {\n  border-radius: 10px; }"; }
    static get styleMode() { return "ios"; }
}

export { Badge as IonBadge };
