/*! Built with http://stenciljs.com */
const { h } = window.App;

import { j as createColorClasses, l as hostContext, k as openURL } from './chunk-cb94efc7.js';

const SIZE_TO_MEDIA = {
    'xs': '(min-width: 0px)',
    'sm': '(min-width: 576px)',
    'md': '(min-width: 768px)',
    'lg': '(min-width: 992px)',
    'xl': '(min-width: 1200px)',
};
function matchBreakpoint(win, breakpoint) {
    if (breakpoint === undefined || breakpoint === '') {
        return true;
    }
    const mediaQuery = SIZE_TO_MEDIA[breakpoint];
    return win.matchMedia(mediaQuery).matches;
}

const win = window;
const SUPPORTS_VARS = !!(win.CSS && win.CSS.supports && win.CSS.supports("--a: 0"));
const BREAKPOINTS = ["", "xs", "sm", "md", "lg", "xl"];
class Col {
    onResize() {
        this.el.forceUpdate();
    }
    getColumns(property) {
        let matched;
        for (const breakpoint of BREAKPOINTS) {
            const matches = matchBreakpoint(this.win, breakpoint);
            const columns = this[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];
            if (matches && columns !== undefined) {
                matched = columns;
            }
        }
        return matched;
    }
    calculateSize() {
        const columns = this.getColumns("size");
        if (!columns || columns === "") {
            return;
        }
        const colSize = (columns === "auto")
            ? "auto"
            : SUPPORTS_VARS ? `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`
                : ((columns / 12) * 100) + "%";
        return {
            "flex": `0 0 ${colSize}`,
            "width": `${colSize}`,
            "max-width": `${colSize}`
        };
    }
    calculatePosition(property, modifier) {
        const columns = this.getColumns(property);
        if (!columns) {
            return;
        }
        const amount = SUPPORTS_VARS
            ? `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`
            : (columns > 0 && columns < 12) ? (columns / 12 * 100) + "%" : "auto";
        return {
            [modifier]: amount
        };
    }
    calculateOffset() {
        return this.calculatePosition("offset", "margin-left");
    }
    calculatePull() {
        return this.calculatePosition("pull", "right");
    }
    calculatePush() {
        return this.calculatePosition("push", "left");
    }
    hostData() {
        return {
            style: Object.assign({}, this.calculateOffset(), this.calculatePull(), this.calculatePush(), this.calculateSize())
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-col"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "el": {
                "elementRef": true
            },
            "offset": {
                "type": String,
                "attr": "offset"
            },
            "offsetLg": {
                "type": String,
                "attr": "offset-lg"
            },
            "offsetMd": {
                "type": String,
                "attr": "offset-md"
            },
            "offsetSm": {
                "type": String,
                "attr": "offset-sm"
            },
            "offsetXl": {
                "type": String,
                "attr": "offset-xl"
            },
            "offsetXs": {
                "type": String,
                "attr": "offset-xs"
            },
            "pull": {
                "type": String,
                "attr": "pull"
            },
            "pullLg": {
                "type": String,
                "attr": "pull-lg"
            },
            "pullMd": {
                "type": String,
                "attr": "pull-md"
            },
            "pullSm": {
                "type": String,
                "attr": "pull-sm"
            },
            "pullXl": {
                "type": String,
                "attr": "pull-xl"
            },
            "pullXs": {
                "type": String,
                "attr": "pull-xs"
            },
            "push": {
                "type": String,
                "attr": "push"
            },
            "pushLg": {
                "type": String,
                "attr": "push-lg"
            },
            "pushMd": {
                "type": String,
                "attr": "push-md"
            },
            "pushSm": {
                "type": String,
                "attr": "push-sm"
            },
            "pushXl": {
                "type": String,
                "attr": "push-xl"
            },
            "pushXs": {
                "type": String,
                "attr": "push-xs"
            },
            "size": {
                "type": String,
                "attr": "size"
            },
            "sizeLg": {
                "type": String,
                "attr": "size-lg"
            },
            "sizeMd": {
                "type": String,
                "attr": "size-md"
            },
            "sizeSm": {
                "type": String,
                "attr": "size-sm"
            },
            "sizeXl": {
                "type": String,
                "attr": "size-xl"
            },
            "sizeXs": {
                "type": String,
                "attr": "size-xs"
            },
            "win": {
                "context": "window"
            }
        };
    }
    static get listeners() {
        return [{
                "name": "window:resize",
                "method": "onResize",
                "passive": true
            }];
    }
    static get style() { return ":host {\n  /**\n   * \@prop --ion-grid-columns: The number of total Columns in the Grid\n   * \@prop --ion-grid-column-padding: Padding for the Column\n   * \@prop --ion-grid-column-padding-xs: Padding for the Column on xs screens and up\n   * \@prop --ion-grid-column-padding-sm: Padding for the Column on sm screens and up\n   * \@prop --ion-grid-column-padding-md: Padding for the Column on md screens and up\n   * \@prop --ion-grid-column-padding-lg: Padding for the Column on lg screens and up\n   * \@prop --ion-grid-column-padding-xl: Padding for the Column on xl screens and up\n   */\n  padding: var(--ion-grid-column-padding-xs, var(--ion-grid-column-padding, 5px));\n  margin: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  position: relative;\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  width: 100%;\n  max-width: 100%;\n  min-height: 1px; }\n  \@media (min-width: 576px) {\n    :host {\n      padding: var(--ion-grid-column-padding-sm, var(--ion-grid-column-padding, 5px)); } }\n  \@media (min-width: 768px) {\n    :host {\n      padding: var(--ion-grid-column-padding-md, var(--ion-grid-column-padding, 5px)); } }\n  \@media (min-width: 992px) {\n    :host {\n      padding: var(--ion-grid-column-padding-lg, var(--ion-grid-column-padding, 5px)); } }\n  \@media (min-width: 1200px) {\n    :host {\n      padding: var(--ion-grid-column-padding-xl, var(--ion-grid-column-padding, 5px)); } }"; }
}

class Grid {
    constructor() {
        this.fixed = false;
    }
    hostData() {
        return {
            class: {
                "grid-fixed": this.fixed
            }
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-grid"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "fixed": {
                "type": Boolean,
                "attr": "fixed"
            }
        };
    }
    static get style() { return ":host {\n  /**\n   * \@prop --ion-grid-padding: Padding for the Grid\n   * \@prop --ion-grid-padding-xs: Padding for the Grid on xs screens\n   * \@prop --ion-grid-padding-sm: Padding for the Grid on sm screens\n   * \@prop --ion-grid-padding-md: Padding for the Grid on md screens\n   * \@prop --ion-grid-padding-lg: Padding for the Grid on lg screens\n   * \@prop --ion-grid-padding-xl: Padding for the Grid on xl screens\n   *\n   * \@prop --ion-grid-width: Width of the fixed Grid\n   * \@prop --ion-grid-width-xs: Width of the fixed Grid on xs screens\n   * \@prop --ion-grid-width-sm: Width of the fixed Grid on sm screens\n   * \@prop --ion-grid-width-md: Width of the fixed Grid on md screens\n   * \@prop --ion-grid-width-lg: Width of the fixed Grid on lg screens\n   * \@prop --ion-grid-width-xl: Width of the fixed Grid on xl screens\n   */\n  padding: var(--ion-grid-padding-xs, var(--ion-grid-padding, 5px));\n  margin-left: auto;\n  margin-right: auto;\n  display: block; }\n  \@media (min-width: 576px) {\n    :host {\n      padding: var(--ion-grid-padding-sm, var(--ion-grid-padding, 5px)); } }\n  \@media (min-width: 768px) {\n    :host {\n      padding: var(--ion-grid-padding-md, var(--ion-grid-padding, 5px)); } }\n  \@media (min-width: 992px) {\n    :host {\n      padding: var(--ion-grid-padding-lg, var(--ion-grid-padding, 5px)); } }\n  \@media (min-width: 1200px) {\n    :host {\n      padding: var(--ion-grid-padding-xl, var(--ion-grid-padding, 5px)); } }\n\n:host(.grid-fixed) {\n  width: var(--ion-grid-width-xs, var(--ion-grid-width, 100%));\n  max-width: 100%; }\n  \@media (min-width: 576px) {\n    :host(.grid-fixed) {\n      width: var(--ion-grid-width-sm, var(--ion-grid-width, 540px)); } }\n  \@media (min-width: 768px) {\n    :host(.grid-fixed) {\n      width: var(--ion-grid-width-md, var(--ion-grid-width, 720px)); } }\n  \@media (min-width: 992px) {\n    :host(.grid-fixed) {\n      width: var(--ion-grid-width-lg, var(--ion-grid-width, 960px)); } }\n  \@media (min-width: 1200px) {\n    :host(.grid-fixed) {\n      width: var(--ion-grid-width-xl, var(--ion-grid-width, 1140px)); } }\n\n:host([no-padding]) {\n  padding: 0; }\n\n:host([no-padding]) ::slotted(ion-col) {\n  padding: 0; }"; }
}

class Item {
    constructor() {
        this.itemStyles = new Map();
        this.multipleInputs = false;
        this.button = false;
        this.detailIcon = "ios-arrow-forward";
        this.disabled = false;
        this.type = "button";
    }
    itemStyle(ev) {
        ev.stopPropagation();
        const tagName = ev.target.tagName;
        const updatedStyles = ev.detail;
        const updatedKeys = Object.keys(ev.detail);
        const newStyles = {};
        const childStyles = this.itemStyles.get(tagName) || {};
        let hasStyleChange = false;
        for (const key of updatedKeys) {
            const itemKey = `item-${key}`;
            const newValue = updatedStyles[key];
            if (newValue !== childStyles[itemKey]) {
                hasStyleChange = true;
            }
            newStyles[itemKey] = newValue;
        }
        if (hasStyleChange) {
            this.itemStyles.set(tagName, newStyles);
            this.el.forceUpdate();
        }
    }
    componentDidLoad() {
        Array.from(this.el.querySelectorAll("ion-button")).forEach(button => {
            if (!button.size) {
                button.size = "small";
            }
        });
        const inputs = this.el.querySelectorAll("ion-select, ion-datetime");
        this.multipleInputs = inputs.length > 1 ? true : false;
    }
    isClickable() {
        return (this.href !== undefined || this.button);
    }
    hostData() {
        const childStyles = {};
        this.itemStyles.forEach(value => {
            Object.assign(childStyles, value);
        });
        return {
            "ion-activatable": this.isClickable(),
            class: Object.assign({}, childStyles, createColorClasses(this.color), { [`item-lines-${this.lines}`]: !!this.lines, "item-disabled": this.disabled, "in-list": hostContext("ion-list", this.el), "item": true, "item-multiple-inputs": this.multipleInputs })
        };
    }
    render() {
        const { href, detail, mode, win, detailIcon, routerDirection, type } = this;
        const clickable = this.isClickable();
        const TagType = clickable ? (href === undefined ? "button" : "a") : "div";
        const attrs = TagType === "button" ? { type } : { href };
        const showDetail = detail !== undefined ? detail : mode === "ios" && clickable;
        return [
            h(TagType, Object.assign({}, attrs, { class: "item-native", onClick: ev => openURL(win, href, ev, routerDirection) }), h("slot", { name: "start" }), h("div", { class: "item-inner" }, h("div", { class: "input-wrapper" }, h("slot", null)), h("slot", { name: "end" }), showDetail && h("ion-icon", { icon: detailIcon, lazy: false, class: "item-detail-icon" }), h("div", { class: "item-inner-highlight" })), clickable && mode === "md" && h("ion-ripple-effect", null)),
            h("div", { class: "item-highlight" })
        ];
    }
    static get is() { return "ion-item"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "button": {
                "type": Boolean,
                "attr": "button"
            },
            "color": {
                "type": String,
                "attr": "color"
            },
            "detail": {
                "type": Boolean,
                "attr": "detail"
            },
            "detailIcon": {
                "type": String,
                "attr": "detail-icon"
            },
            "disabled": {
                "type": Boolean,
                "attr": "disabled"
            },
            "el": {
                "elementRef": true
            },
            "href": {
                "type": String,
                "attr": "href"
            },
            "lines": {
                "type": String,
                "attr": "lines"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "multipleInputs": {
                "state": true
            },
            "routerDirection": {
                "type": String,
                "attr": "router-direction"
            },
            "type": {
                "type": String,
                "attr": "type"
            },
            "win": {
                "context": "window"
            }
        };
    }
    static get listeners() {
        return [{
                "name": "ionStyle",
                "method": "itemStyle"
            }];
    }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the item\n   * \@prop --background-activated: Background of the activated item\n   * \@prop --border-color: Color of the item border\n   * \@prop --border-radius: Radius of the item border\n   * \@prop --border-style: Style of the item border\n   * \@prop --border-width: Width of the item border\n   * \@prop --box-shadow: Box shadow of the item\n   * \@prop --color: Color of the item\n   *\n   * \@prop --detail-icon-color: Color of the item detail icon\n   * \@prop --detail-icon-opacity: Opacity of the item detail icon\n   * \@prop --detail-icon-font-size: Font size of the item detail icon\n   * \@prop --inner-border-width: Width of the item inner border\n   * \@prop --inner-box-shadow: Box shadow of the item inner\n   * \@prop --inner-padding-bottom: Bottom padding of the item inner\n   * \@prop --inner-padding-end: End padding of the item inner\n   * \@prop --inner-padding-start: Start padding of the item inner\n   * \@prop --inner-padding-top: Top padding of the item inner\n   *\n   * \@prop --min-height: Minimum height of the item\n   * \@prop --padding-bottom: Bottom padding of the item\n   * \@prop --padding-end: End padding of the item\n   * \@prop --padding-start: Start padding of the item\n   * \@prop --padding-top: Top padding of the item\n   * \@prop --transition: Transition of the item\n   *\n   * \@prop --highlight-height: The height of the highlight on the item\n   * \@prop --highlight-color-focused: The color of the highlight on the item when focused\n   * \@prop --highlight-color-valid: The color of the highlight on the item when valid\n   * \@prop --highlight-color-invalid: The color of the highlight on the item when invalid\n   */\n  --min-height: 44px;\n  --border-radius: 0px;\n  --border-width: 0px;\n  --border-style: solid;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  --box-shadow: none;\n  --inner-border-width: 0px;\n  --inner-padding-top: 0px;\n  --inner-padding-bottom: 0px;\n  --inner-padding-start: 0px;\n  --inner-padding-end: 0px;\n  --inner-box-shadow: none;\n  --show-full-highlight: 0;\n  --show-inset-highlight: 0;\n  --detail-icon-color: currentColor;\n  --detail-icon-font-size: 20px;\n  --detail-icon-opacity: 0.25;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: block;\n  position: relative;\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  text-align: initial;\n  text-decoration: none;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n:host(.ion-color) .item-native {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast); }\n\n:host(.ion-color) .item-native,\n:host(.ion-color) .item-inner {\n  border-color: var(--ion-color-shade); }\n\n:host(.activated) .item-native {\n  background: var(--background-activated); }\n\n:host(.ion-color.activated) .item-native {\n  background: var(--ion-color-tint); }\n\n:host(.item-disabled) {\n  cursor: default;\n  opacity: .3;\n  pointer-events: none; }\n\n.item-native {\n  border-radius: var(--border-radius);\n  margin: 0;\n  padding: var(--padding-top) var(--padding-end) var(--padding-bottom) calc(var(--padding-start) + var(--ion-safe-area-left, 0px));\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n  min-height: var(--min-height);\n  -webkit-transition: var(--transition);\n  transition: var(--transition);\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  outline: none;\n  background: var(--background);\n  -webkit-box-shadow: var(--box-shadow);\n  box-shadow: var(--box-shadow);\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\nbutton, a {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-user-drag: none; }\n\n.item-inner {\n  margin: 0;\n  padding: var(--inner-padding-top) calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end)) var(--inner-padding-bottom) var(--inner-padding-start);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-orient: inherit;\n  -webkit-box-direction: inherit;\n  -ms-flex-direction: inherit;\n  flex-direction: inherit;\n  -webkit-box-align: inherit;\n  -ms-flex-align: inherit;\n  align-items: inherit;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  min-height: inherit;\n  border-width: var(--inner-border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  -webkit-box-shadow: var(--inner-box-shadow);\n  box-shadow: var(--inner-box-shadow);\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.item-detail-icon {\n  color: var(--detail-icon-color);\n  font-size: var(--detail-icon-font-size);\n  opacity: var(--detail-icon-opacity); }\n\n::slotted(ion-icon) {\n  font-size: 1.6em; }\n\n::slotted(ion-button) {\n  --margin-top: 0;\n  --margin-bottom: 0;\n  --margin-start: 0;\n  --margin-end: 0;\n  z-index: 1; }\n\n:host([vertical-align-top]),\n:host(.item-input) {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start; }\n\n.input-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-orient: inherit;\n  -webkit-box-direction: inherit;\n  -ms-flex-direction: inherit;\n  flex-direction: inherit;\n  -webkit-box-align: inherit;\n  -ms-flex-align: inherit;\n  align-items: inherit;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n:host(.item-label-stacked) .input-wrapper,\n:host(.item-label-floating) .input-wrapper {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n\n.item-highlight,\n.item-inner-highlight {\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  background: var(--highlight-background); }\n\n.item-highlight {\n  height: var(--full-highlight-height); }\n\n.item-inner-highlight {\n  height: var(--inset-highlight-height); }\n\n:host(.item-interactive.item-has-focus) {\n  --highlight-background: var(--highlight-color-focused);\n  --full-highlight-height: calc(var(--highlight-height) * var(--show-full-highlight));\n  --inset-highlight-height: calc(var(--highlight-height) * var(--show-inset-highlight)); }\n\n:host(.item-interactive.ion-valid) {\n  --highlight-background: var(--highlight-color-valid); }\n\n:host(.item-interactive.ion-invalid) {\n  --highlight-background: var(--highlight-color-invalid); }\n\n:host(.item-label-stacked) ::slotted(ion-select),\n:host(.item-label-floating) ::slotted(ion-select) {\n  --padding-start: 0;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  width: 100%;\n  max-width: 100%; }\n\n:host(.item-label-stacked) ::slotted(ion-datetime),\n:host(.item-label-floating) ::slotted(ion-datetime) {\n  --padding-start: 0;\n  width: 100%; }\n\n:host(.item-multiple-inputs) ::slotted(ion-datetime),\n:host(.item-multiple-inputs) ::slotted(ion-select) {\n  position: relative; }\n\n:host(.item-textarea) {\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch; }\n\n::slotted(ion-reorder[slot]) {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n:host {\n  --background: var(--ion-item-background-color, transparent);\n  --background-activated: var(--ion-item-background-color-active, #f1f1f1);\n  --border-color: rgba(var(--ion-item-border-color-rgb, 0, 0, 0), 0.13);\n  --color: var(--ion-item-text-color, var(--ion-text-color, #000));\n  --transition: background-color 300ms cubic-bezier(.4, 0, .2, 1);\n  --padding-start: 16px;\n  --background: var(--ion-item-background-color, transparent);\n  --background-activated: var(--ion-item-background-color-active, #f1f1f1);\n  --color: var(--ion-item-text-color, var(--ion-text-color, #000));\n  --border-color: rgba(var(--ion-item-border-color-rgb, 0, 0, 0), 0.13);\n  --inner-padding-end: 8px;\n  --inner-border-width: 0 0 1px 0;\n  --highlight-height: 2px;\n  --highlight-color-focused: var(--ion-color-primary, #3880ff);\n  --highlight-color-valid: var(--ion-color-success, #10dc60);\n  --highlight-color-invalid: var(--ion-color-danger, #f04141);\n  font-size: 16px;\n  font-weight: normal;\n  text-transform: none; }\n\n:host(.item-interactive) {\n  --border-width: 0 0 1px 0;\n  --inner-border-width: 0;\n  --show-full-highlight: 1;\n  --show-inset-highlight: 0; }\n\n:host(.item-lines-full) {\n  --border-width: 0 0 1px 0;\n  --show-full-highlight: 1;\n  --show-inset-highlight: 0; }\n\n:host(.item-lines-inset) {\n  --inner-border-width: 0 0 1px 0;\n  --show-full-highlight: 0;\n  --show-inset-highlight: 1; }\n\n:host(.item-lines-inset),\n:host(.item-lines-none) {\n  --border-width: 0;\n  --show-full-highlight: 0; }\n\n:host(.item-lines-full),\n:host(.item-lines-none) {\n  --inner-border-width: 0;\n  --show-inset-highlight: 0; }\n\n::slotted(:not(.interactive)[slot=\"start\"]),\n::slotted(:not(.interactive)[slot=\"end\"]) {\n  margin: 2px 8px 2px 0; }\n\n::slotted(ion-icon[slot=\"start\"]),\n::slotted(ion-icon[slot=\"end\"]) {\n  margin-left: 0;\n  margin-top: 3px;\n  margin-bottom: 2px; }\n\n::slotted(ion-icon[slot=\"start\"]) + .item-inner,\n::slotted(ion-icon[slot=\"start\"]) + .item-interactive {\n  margin-left: 24px; }\n\n::slotted(ion-avatar[slot=\"start\"]),\n::slotted(ion-thumbnail[slot=\"start\"]) {\n  margin: 8px 16px 8px 0; }\n\n::slotted(ion-avatar[slot=\"end\"]),\n::slotted(ion-thumbnail[slot=\"end\"]) {\n  margin: 8px; }\n\n:host(.item-label-stacked) ::slotted([slot=\"end\"]),\n:host(.item-label-floating) ::slotted([slot=\"end\"]) {\n  margin-top: 7px;\n  margin-bottom: 7px; }\n\n::slotted(.button-small-md) {\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: .6em;\n  --padding-end: .6em;\n  --height: 25px;\n  font-size: 12px; }\n\n::slotted(.button-small-md) ion-icon[slot=\"icon-only\"] {\n  padding: 0; }\n\n::slotted(ion-avatar) {\n  width: 40px;\n  height: 40px; }\n\n::slotted(ion-thumbnail) {\n  width: 80px;\n  height: 80px; }\n\n:host(.item-toggle) ::slotted(ion-label),\n:host(.item-radio) ::slotted(ion-label) {\n  margin-left: 0; }\n\n:host(.item-label-stacked) ::slotted(ion-input),\n:host(.item-label-floating) ::slotted(ion-input),\n:host(.item-label-stacked) ::slotted(ion-textarea),\n:host(.item-label-floating) ::slotted(ion-textarea),\n:host(.item-label-stacked) ::slotted(ion-select),\n:host(.item-label-floating) ::slotted(ion-select) {\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --padding-start: 0; }\n\n:host(:not(.item-label)) ::slotted(ion-input),\n:host(:not(.item-label)) ::slotted(ion-textarea) {\n  --padding-start: 0; }\n\n:host(.item-has-focus:not(.ion-color)) ::slotted(.label-stacked),\n:host(.item-has-focus:not(.ion-color)) ::slotted(.label-floating) {\n  color: var(--ion-color-primary, #3880ff); }"; }
    static get styleMode() { return "md"; }
}

class Row {
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-row"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }"; }
}

export { Col as IonCol, Grid as IonGrid, Item as IonItem, Row as IonRow };
