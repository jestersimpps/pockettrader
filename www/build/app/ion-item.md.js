/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as createThemedClasses, b as getElementClassMap, c as openURL } from './chunk-ea7ac2d5.js';

class Item {
    constructor() {
        this.itemStyles = {};
        /**
         * If true, a button tag will be rendered and the item will be tappable. Defaults to `false`.
         */
        this.button = false;
        /**
         * If true, the user cannot interact with the item. Defaults to `false`.
         */
        this.disabled = false;
    }
    itemStyle(ev) {
        ev.stopPropagation();
        const tagName = ev.target.tagName;
        const updatedStyles = ev.detail;
        const updatedKeys = Object.keys(ev.detail);
        const newStyles = {};
        const childStyles = this.itemStyles[tagName] || {};
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
            this.itemStyles[tagName] = newStyles;
            this.el.forceUpdate();
        }
    }
    componentDidLoad() {
        // Change the button size to small for each ion-button in the item
        // unless the size is explicitly set
        const buttons = this.el.querySelectorAll('ion-button');
        for (let i = 0; i < buttons.length; i++) {
            if (!buttons[i].size) {
                buttons[i].size = 'small';
            }
        }
    }
    render() {
        const childStyles = {};
        for (const key in this.itemStyles) {
            Object.assign(childStyles, this.itemStyles[key]);
        }
        const clickable = !!(this.href || this.el.onclick || this.button);
        const TagType = clickable
            ? this.href ? 'a' : 'button'
            : 'div';
        const attrs = (TagType === 'button')
            ? { type: 'button' }
            : { href: this.href };
        const showDetail = this.detail != null ? this.detail : (this.mode === 'ios' && clickable);
        const themedClasses = Object.assign({}, childStyles, createThemedClasses(this.mode, this.color, 'item'), getElementClassMap(this.el.classList), { 'item-disabled': this.disabled, 'item-detail-push': showDetail, [`item-lines-${this.lines}`]: !!this.lines, [`item-${this.mode}-lines-${this.lines}`]: !!this.lines });
        return (h(TagType, Object.assign({}, attrs, { class: themedClasses, onClick: (ev) => openURL(this.win, this.href, ev, this.routerDirection) }),
            h("slot", { name: "start" }),
            h("div", { class: "item-inner" },
                h("div", { class: "input-wrapper" },
                    h("slot", null)),
                h("slot", { name: "end" })),
            clickable && this.mode === 'md' && h("ion-ripple-effect", { tapClick: true })));
    }
    static get is() { return "ion-item"; }
    static get properties() { return {
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
        "routerDirection": {
            "type": String,
            "attr": "router-direction"
        },
        "win": {
            "context": "window"
        }
    }; }
    static get listeners() { return [{
            "name": "ionStyle",
            "method": "itemStyle"
        }]; }
    static get style() { return "ion-item {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: block; }\n\n.item {\n  border-radius: 0;\n  margin: 0;\n  padding: 0;\n  text-align: initial;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 44px;\n  border: 0;\n  outline: none;\n  font-weight: normal;\n  line-height: normal;\n  text-decoration: none;\n  color: inherit; }\n\n.item-inner {\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-orient: inherit;\n  -webkit-box-direction: inherit;\n  -ms-flex-direction: inherit;\n  flex-direction: inherit;\n  -webkit-box-align: inherit;\n  -ms-flex-align: inherit;\n  align-items: inherit;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  min-height: inherit;\n  border: 0; }\n\n.input-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-orient: inherit;\n  -webkit-box-direction: inherit;\n  -ms-flex-direction: inherit;\n  flex-direction: inherit;\n  -webkit-box-align: inherit;\n  -ms-flex-align: inherit;\n  align-items: inherit;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  text-overflow: ellipsis; }\n\nion-item-group {\n  display: block; }\n\n[vertical-align-top],\n.input.item {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start; }\n\n.item-cover {\n  left: 0;\n  top: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  cursor: pointer; }\n\n.item > ion-icon,\n.item-inner > ion-icon {\n  font-size: 1.6em; }\n\n.item .button {\n  margin: 0; }\n\n.item-disabled {\n  cursor: default;\n  opacity: .4;\n  pointer-events: none; }\n\n.item-md {\n  padding-left: 16px;\n  position: relative;\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: normal;\n  text-transform: none;\n  color: var(--ion-item-md-text-color, var(--ion-item-text-color, var(--ion-text-color, #000)));\n  background-color: var(--ion-item-md-background-color, var(--ion-item-background-color, var(--ion-background-color, #fff)));\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  -webkit-transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1); }\n\n.item-md .item-inner {\n  padding-right: 8px; }\n\n.item-md.activated {\n  background-color: var(--ion-item-md-background-color-active, var(--ion-item-background-color-active, #f1f1f1)); }\n\n.item-md h1 {\n  margin: 0 0 2px;\n  font-size: 24px;\n  font-weight: normal; }\n\n.item-md h2 {\n  margin: 2px 0;\n  font-size: 16px;\n  font-weight: normal; }\n\n.item-md h3,\n.item-md h4,\n.item-md h5,\n.item-md h6 {\n  margin: 2px 0;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: normal; }\n\n.item-md p {\n  margin: 0 0 2px;\n  overflow: inherit;\n  font-size: 14px;\n  line-height: normal;\n  text-overflow: inherit;\n  color: var(--ion-text-md-color-step-400, var(--ion-text-color-step-400, #666666)); }\n\n.item-md,\n.item-md .item-inner {\n  border-bottom-width: 0;\n  border-bottom-style: solid;\n  border-bottom-color: rgba(var(--ion-item-md-border-color-rgb, var(--ion-item-border-color-rgb, 0, 0, 0)), 0.13); }\n\n.item-md.item-interactive {\n  border-bottom-width: 1px; }\n\n.item-md-lines-full,\n.item-md-lines-inset .item-inner {\n  border-bottom-width: 1px; }\n\n.item-md-lines-inset,\n.item-md-lines-full .item-inner,\n.item-md-lines-none,\n.item-md-lines-none .item-inner {\n  border-bottom-width: 0; }\n\n.item-md.item-detail-push .item-inner {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='rgba(var(--ion-item-md-border-color-rgb,%20var(--ion-item-border-color-rgb,%200,%200,%200)),%200.13)'/></svg>\");\n  padding-right: 32px;\n  background-position: right 14px center;\n  background-repeat: no-repeat;\n  background-size: 14px 14px; }\n\n.item-md [slot=\"start\"],\n.item-md [slot=\"end\"] {\n  margin: 0 8px 0 0; }\n\n.item-md > ion-icon[slot=\"start\"],\n.item-md > ion-icon[slot=\"end\"] {\n  margin-left: 0;\n  margin-top: 11px;\n  margin-bottom: 10px; }\n\n.item-md > ion-icon[slot=\"start\"] + .item-inner,\n.item-md > ion-icon[slot=\"start\"] + .item-interactive {\n  margin-left: 24px; }\n\n.item-md ion-avatar[slot=\"start\"],\n.item-md ion-thumbnail[slot=\"start\"] {\n  margin: 8px 16px 8px 0; }\n\n.item-md ion-avatar[slot=\"end\"],\n.item-md ion-thumbnail[slot=\"end\"] {\n  margin: 8px; }\n\n.item-md.item-label-stacked [slot=\"end\"],\n.item-md.item-label-floating [slot=\"end\"] {\n  margin-top: 7px;\n  margin-bottom: 7px; }\n\n.item-md .button-small-md {\n  padding: 0 0.6em;\n  height: 25px;\n  font-size: 12px; }\n\n.item-md .button-small-md ion-icon[slot=\"icon-only\"] {\n  padding: 0; }\n\n.item-md ion-avatar {\n  width: 40px;\n  height: 40px; }\n\n.item-md ion-thumbnail {\n  width: 80px;\n  height: 80px; }\n\n.item-md-primary {\n  border-bottom-color: var(--ion-color-md-primary-shade, var(--ion-color-primary-shade, #3171e0));\n  color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n  .item-md-primary .item-inner {\n    border-bottom-color: var(--ion-color-md-primary-shade, var(--ion-color-primary-shade, #3171e0)); }\n  .item-md-primary p {\n    color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff)); }\n  .item-md-primary.activated {\n    background-color: var(--ion-color-md-primary-tint, var(--ion-color-primary-tint, #4c8dff)); }\n\n.item-md-primary.item-detail-push .item-inner {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-primary-shade,%20var(--ion-color-primary-shade,%20%233171e0))'/></svg>\"); }\n\n.item-md-secondary {\n  border-bottom-color: var(--ion-color-md-secondary-shade, var(--ion-color-secondary-shade, #0bb8cc));\n  color: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n  background-color: var(--ion-color-md-secondary, var(--ion-color-secondary, #0cd1e8)); }\n  .item-md-secondary .item-inner {\n    border-bottom-color: var(--ion-color-md-secondary-shade, var(--ion-color-secondary-shade, #0bb8cc)); }\n  .item-md-secondary p {\n    color: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff)); }\n  .item-md-secondary.activated {\n    background-color: var(--ion-color-md-secondary-tint, var(--ion-color-secondary-tint, #24d6ea)); }\n\n.item-md-secondary.item-detail-push .item-inner {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-secondary-shade,%20var(--ion-color-secondary-shade,%20%230bb8cc))'/></svg>\"); }\n\n.item-md-tertiary {\n  border-bottom-color: var(--ion-color-md-tertiary-shade, var(--ion-color-tertiary-shade, #633ce0));\n  color: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n  background-color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #7044ff)); }\n  .item-md-tertiary .item-inner {\n    border-bottom-color: var(--ion-color-md-tertiary-shade, var(--ion-color-tertiary-shade, #633ce0)); }\n  .item-md-tertiary p {\n    color: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff)); }\n  .item-md-tertiary.activated {\n    background-color: var(--ion-color-md-tertiary-tint, var(--ion-color-tertiary-tint, #7e57ff)); }\n\n.item-md-tertiary.item-detail-push .item-inner {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-tertiary-shade,%20var(--ion-color-tertiary-shade,%20%23633ce0))'/></svg>\"); }\n\n.item-md-success {\n  border-bottom-color: var(--ion-color-md-success-shade, var(--ion-color-success-shade, #0ec254));\n  color: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff));\n  background-color: var(--ion-color-md-success, var(--ion-color-success, #10dc60)); }\n  .item-md-success .item-inner {\n    border-bottom-color: var(--ion-color-md-success-shade, var(--ion-color-success-shade, #0ec254)); }\n  .item-md-success p {\n    color: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff)); }\n  .item-md-success.activated {\n    background-color: var(--ion-color-md-success-tint, var(--ion-color-success-tint, #28e070)); }\n\n.item-md-success.item-detail-push .item-inner {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-success-shade,%20var(--ion-color-success-shade,%20%230ec254))'/></svg>\"); }\n\n.item-md-warning {\n  border-bottom-color: var(--ion-color-md-warning-shade, var(--ion-color-warning-shade, #e0b500));\n  color: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #fff));\n  background-color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00)); }\n  .item-md-warning .item-inner {\n    border-bottom-color: var(--ion-color-md-warning-shade, var(--ion-color-warning-shade, #e0b500)); }\n  .item-md-warning p {\n    color: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #fff)); }\n  .item-md-warning.activated {\n    background-color: var(--ion-color-md-warning-tint, var(--ion-color-warning-tint, #ffd31a)); }\n\n.item-md-warning.item-detail-push .item-inner {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-warning-shade,%20var(--ion-color-warning-shade,%20%23e0b500))'/></svg>\"); }\n\n.item-md-danger {\n  border-bottom-color: var(--ion-color-md-danger-shade, var(--ion-color-danger-shade, #d33939));\n  color: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff));\n  background-color: var(--ion-color-md-danger, var(--ion-color-danger, #f04141)); }\n  .item-md-danger .item-inner {\n    border-bottom-color: var(--ion-color-md-danger-shade, var(--ion-color-danger-shade, #d33939)); }\n  .item-md-danger p {\n    color: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff)); }\n  .item-md-danger.activated {\n    background-color: var(--ion-color-md-danger-tint, var(--ion-color-danger-tint, #f25454)); }\n\n.item-md-danger.item-detail-push .item-inner {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-danger-shade,%20var(--ion-color-danger-shade,%20%23d33939))'/></svg>\"); }\n\n.item-md-light {\n  border-bottom-color: var(--ion-color-md-light-shade, var(--ion-color-light-shade, #d7d8da));\n  color: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000));\n  background-color: var(--ion-color-md-light, var(--ion-color-light, #f4f5f8)); }\n  .item-md-light .item-inner {\n    border-bottom-color: var(--ion-color-md-light-shade, var(--ion-color-light-shade, #d7d8da)); }\n  .item-md-light p {\n    color: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000)); }\n  .item-md-light.activated {\n    background-color: var(--ion-color-md-light-tint, var(--ion-color-light-tint, #f5f6f9)); }\n\n.item-md-light.item-detail-push .item-inner {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-light-shade,%20var(--ion-color-light-shade,%20%23d7d8da))'/></svg>\"); }\n\n.item-md-medium {\n  border-bottom-color: var(--ion-color-md-medium-shade, var(--ion-color-medium-shade, #86888f));\n  color: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #fff));\n  background-color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2)); }\n  .item-md-medium .item-inner {\n    border-bottom-color: var(--ion-color-md-medium-shade, var(--ion-color-medium-shade, #86888f)); }\n  .item-md-medium p {\n    color: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #fff)); }\n  .item-md-medium.activated {\n    background-color: var(--ion-color-md-medium-tint, var(--ion-color-medium-tint, #a2a4ab)); }\n\n.item-md-medium.item-detail-push .item-inner {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-medium-shade,%20var(--ion-color-medium-shade,%20%2386888f))'/></svg>\"); }\n\n.item-md-dark {\n  border-bottom-color: var(--ion-color-md-dark-shade, var(--ion-color-dark-shade, #1e2023));\n  color: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff));\n  background-color: var(--ion-color-md-dark, var(--ion-color-dark, #222428)); }\n  .item-md-dark .item-inner {\n    border-bottom-color: var(--ion-color-md-dark-shade, var(--ion-color-dark-shade, #1e2023)); }\n  .item-md-dark p {\n    color: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff)); }\n  .item-md-dark.activated {\n    background-color: var(--ion-color-md-dark-tint, var(--ion-color-dark-tint, #383a3e)); }\n\n.item-md-dark.item-detail-push .item-inner {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-md-dark-shade,%20var(--ion-color-dark-shade,%20%231e2023))'/></svg>\"); }"; }
    static get styleMode() { return "md"; }
}

export { Item as IonItem };
