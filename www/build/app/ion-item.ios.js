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
    static get style() { return "ion-item {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: block; }\n\n.item {\n  border-radius: 0;\n  margin: 0;\n  padding: 0;\n  text-align: initial;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 44px;\n  border: 0;\n  outline: none;\n  font-weight: normal;\n  line-height: normal;\n  text-decoration: none;\n  color: inherit; }\n\n.item-inner {\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-orient: inherit;\n  -webkit-box-direction: inherit;\n  -ms-flex-direction: inherit;\n  flex-direction: inherit;\n  -webkit-box-align: inherit;\n  -ms-flex-align: inherit;\n  align-items: inherit;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  min-height: inherit;\n  border: 0; }\n\n.input-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-orient: inherit;\n  -webkit-box-direction: inherit;\n  -ms-flex-direction: inherit;\n  flex-direction: inherit;\n  -webkit-box-align: inherit;\n  -ms-flex-align: inherit;\n  align-items: inherit;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  text-overflow: ellipsis; }\n\nion-item-group {\n  display: block; }\n\n[vertical-align-top],\n.input.item {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  align-items: flex-start; }\n\n.item-cover {\n  left: 0;\n  top: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  cursor: pointer; }\n\n.item > ion-icon,\n.item-inner > ion-icon {\n  font-size: 1.6em; }\n\n.item .button {\n  margin: 0; }\n\n.item-disabled {\n  cursor: default;\n  opacity: .4;\n  pointer-events: none; }\n\n.item-ios {\n  padding-left: 16px;\n  padding-left: calc(constant(safe-area-inset-left) + 16px);\n  padding-left: calc(env(safe-area-inset-left) + 16px);\n  border-radius: 0;\n  position: relative;\n  font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n  font-size: 17px;\n  color: var(--ion-item-ios-text-color, var(--ion-item-text-color, var(--ion-text-color, #000)));\n  background-color: var(--ion-item-ios-background-color, var(--ion-background-ios-color, var(--ion-background-color, #fff)));\n  -webkit-transition: background-color 200ms linear;\n  transition: background-color 200ms linear; }\n\n.item-ios.activated {\n  background-color: var(--ion-item-ios-background-color-active, var(--ion-item-background-color-active, #d9d9d9));\n  -webkit-transition-duration: 0ms;\n  transition-duration: 0ms; }\n\n.item-ios h1 {\n  margin: 0 0 2px;\n  font-size: 24px;\n  font-weight: normal; }\n\n.item-ios h2 {\n  margin: 0 0 2px;\n  font-size: 17px;\n  font-weight: normal; }\n\n.item-ios h3,\n.item-ios h4,\n.item-ios h5,\n.item-ios h6 {\n  margin: 0 0 3px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: normal; }\n\n.item-ios p {\n  margin: 0 0 2px;\n  overflow: inherit;\n  font-size: 14px;\n  line-height: normal;\n  text-overflow: inherit;\n  color: var(--ion-text-ios-color-step-600, var(--ion-text-color-step-600, #999999)); }\n\n.item-ios h2:last-child,\n.item-ios h3:last-child,\n.item-ios h4:last-child,\n.item-ios h5:last-child,\n.item-ios h6:last-child,\n.item-ios p:last-child {\n  margin-bottom: 0; }\n\n.item-ios .item-inner {\n  padding-right: 8px; }\n  \@media screen and (orientation: landscape) {\n    .item-ios .item-inner {\n      padding-right: calc(constant(safe-area-inset-right) + 8px);\n      padding-right: calc(env(safe-area-inset-right) + 8px); } }\n\n.item-ios,\n.item-ios .item-inner {\n  border-bottom-width: 0;\n  border-bottom-style: solid;\n  border-bottom-color: var(--ion-item-ios-border-color, var(--ion-item-border-color, #c8c7cc)); }\n\n.item-ios .item-inner {\n  border-bottom-width: 0.55px; }\n\n.item-ios-lines-full,\n.item-ios-lines-inset .item-inner {\n  border-bottom-width: 0.55px; }\n\n.item-ios-lines-inset,\n.item-ios-lines-full .item-inner,\n.item-ios-lines-none,\n.item-ios-lines-none .item-inner {\n  border-bottom-width: 0; }\n\n.item-ios [slot=\"start\"] {\n  margin: 8px 16px 8px 0; }\n\n.item-ios [slot=\"end\"] {\n  margin-left: 8px;\n  margin-right: 8px; }\n\n.item-ios > ion-icon[slot=\"start\"],\n.item-ios > ion-icon[slot=\"end\"] {\n  margin-left: 0;\n  margin-top: 9px;\n  margin-bottom: 8px; }\n\n.item-ios.item-label-stacked [slot=\"end\"],\n.item-ios.item-label-floating [slot=\"end\"] {\n  margin-top: 6px;\n  margin-bottom: 6px; }\n\n.item-ios .button-small-ios {\n  padding: 0 0.5em;\n  height: 24px;\n  font-size: 13px; }\n\n.item-ios .button-small-ios ion-icon[slot=\"icon-only\"] {\n  padding: 0 1px; }\n\n.item-ios ion-avatar {\n  width: 36px;\n  height: 36px; }\n\n.item-ios ion-thumbnail {\n  width: 56px;\n  height: 56px; }\n\n.item-ios ion-avatar[slot=\"end\"],\n.item-ios ion-thumbnail[slot=\"end\"] {\n  margin: 8px; }\n\n.item-ios.item-detail-push .item-inner {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-item-ios-border-color,%20var(--ion-item-border-color,%20%23c8c7cc))'/></svg>\");\n  padding-right: 32px;\n  background-position: right 14px center;\n  background-position: right calc(14px + constant(safe-area-inset-right)) center;\n  background-position: right calc(14px + env(safe-area-inset-right)) center;\n  background-repeat: no-repeat;\n  background-size: 14px 14px; }\n\n.item-ios-primary {\n  border-bottom-color: var(--ion-color-ios-primary-shade, var(--ion-color-primary-shade, #3171e0));\n  color: var(--ion-color-ios-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-ios-primary, var(--ion-color-primary, #3880ff)); }\n  .item-ios-primary .item-inner {\n    border-bottom-color: var(--ion-color-ios-primary-shade, var(--ion-color-primary-shade, #3171e0)); }\n  .item-ios-primary p {\n    color: var(--ion-color-ios-primary-contrast, var(--ion-color-primary-contrast, #fff)); }\n  .item-ios-primary.activated {\n    background-color: var(--ion-color-ios-primary-tint, var(--ion-color-primary-tint, #4c8dff)); }\n\n.item-ios-primary.item-detail-push .item-inner {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-ios-primary-shade,%20var(--ion-color-primary-shade,%20%233171e0))'/></svg>\"); }\n\n.item-ios-secondary {\n  border-bottom-color: var(--ion-color-ios-secondary-shade, var(--ion-color-secondary-shade, #0bb8cc));\n  color: var(--ion-color-ios-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n  background-color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #0cd1e8)); }\n  .item-ios-secondary .item-inner {\n    border-bottom-color: var(--ion-color-ios-secondary-shade, var(--ion-color-secondary-shade, #0bb8cc)); }\n  .item-ios-secondary p {\n    color: var(--ion-color-ios-secondary-contrast, var(--ion-color-secondary-contrast, #fff)); }\n  .item-ios-secondary.activated {\n    background-color: var(--ion-color-ios-secondary-tint, var(--ion-color-secondary-tint, #24d6ea)); }\n\n.item-ios-secondary.item-detail-push .item-inner {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-ios-secondary-shade,%20var(--ion-color-secondary-shade,%20%230bb8cc))'/></svg>\"); }\n\n.item-ios-tertiary {\n  border-bottom-color: var(--ion-color-ios-tertiary-shade, var(--ion-color-tertiary-shade, #633ce0));\n  color: var(--ion-color-ios-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n  background-color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #7044ff)); }\n  .item-ios-tertiary .item-inner {\n    border-bottom-color: var(--ion-color-ios-tertiary-shade, var(--ion-color-tertiary-shade, #633ce0)); }\n  .item-ios-tertiary p {\n    color: var(--ion-color-ios-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff)); }\n  .item-ios-tertiary.activated {\n    background-color: var(--ion-color-ios-tertiary-tint, var(--ion-color-tertiary-tint, #7e57ff)); }\n\n.item-ios-tertiary.item-detail-push .item-inner {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-ios-tertiary-shade,%20var(--ion-color-tertiary-shade,%20%23633ce0))'/></svg>\"); }\n\n.item-ios-success {\n  border-bottom-color: var(--ion-color-ios-success-shade, var(--ion-color-success-shade, #0ec254));\n  color: var(--ion-color-ios-success-contrast, var(--ion-color-success-contrast, #fff));\n  background-color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60)); }\n  .item-ios-success .item-inner {\n    border-bottom-color: var(--ion-color-ios-success-shade, var(--ion-color-success-shade, #0ec254)); }\n  .item-ios-success p {\n    color: var(--ion-color-ios-success-contrast, var(--ion-color-success-contrast, #fff)); }\n  .item-ios-success.activated {\n    background-color: var(--ion-color-ios-success-tint, var(--ion-color-success-tint, #28e070)); }\n\n.item-ios-success.item-detail-push .item-inner {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-ios-success-shade,%20var(--ion-color-success-shade,%20%230ec254))'/></svg>\"); }\n\n.item-ios-warning {\n  border-bottom-color: var(--ion-color-ios-warning-shade, var(--ion-color-warning-shade, #e0b500));\n  color: var(--ion-color-ios-warning-contrast, var(--ion-color-warning-contrast, #fff));\n  background-color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00)); }\n  .item-ios-warning .item-inner {\n    border-bottom-color: var(--ion-color-ios-warning-shade, var(--ion-color-warning-shade, #e0b500)); }\n  .item-ios-warning p {\n    color: var(--ion-color-ios-warning-contrast, var(--ion-color-warning-contrast, #fff)); }\n  .item-ios-warning.activated {\n    background-color: var(--ion-color-ios-warning-tint, var(--ion-color-warning-tint, #ffd31a)); }\n\n.item-ios-warning.item-detail-push .item-inner {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-ios-warning-shade,%20var(--ion-color-warning-shade,%20%23e0b500))'/></svg>\"); }\n\n.item-ios-danger {\n  border-bottom-color: var(--ion-color-ios-danger-shade, var(--ion-color-danger-shade, #d33939));\n  color: var(--ion-color-ios-danger-contrast, var(--ion-color-danger-contrast, #fff));\n  background-color: var(--ion-color-ios-danger, var(--ion-color-danger, #f04141)); }\n  .item-ios-danger .item-inner {\n    border-bottom-color: var(--ion-color-ios-danger-shade, var(--ion-color-danger-shade, #d33939)); }\n  .item-ios-danger p {\n    color: var(--ion-color-ios-danger-contrast, var(--ion-color-danger-contrast, #fff)); }\n  .item-ios-danger.activated {\n    background-color: var(--ion-color-ios-danger-tint, var(--ion-color-danger-tint, #f25454)); }\n\n.item-ios-danger.item-detail-push .item-inner {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-ios-danger-shade,%20var(--ion-color-danger-shade,%20%23d33939))'/></svg>\"); }\n\n.item-ios-light {\n  border-bottom-color: var(--ion-color-ios-light-shade, var(--ion-color-light-shade, #d7d8da));\n  color: var(--ion-color-ios-light-contrast, var(--ion-color-light-contrast, #000));\n  background-color: var(--ion-color-ios-light, var(--ion-color-light, #f4f5f8)); }\n  .item-ios-light .item-inner {\n    border-bottom-color: var(--ion-color-ios-light-shade, var(--ion-color-light-shade, #d7d8da)); }\n  .item-ios-light p {\n    color: var(--ion-color-ios-light-contrast, var(--ion-color-light-contrast, #000)); }\n  .item-ios-light.activated {\n    background-color: var(--ion-color-ios-light-tint, var(--ion-color-light-tint, #f5f6f9)); }\n\n.item-ios-light.item-detail-push .item-inner {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-ios-light-shade,%20var(--ion-color-light-shade,%20%23d7d8da))'/></svg>\"); }\n\n.item-ios-medium {\n  border-bottom-color: var(--ion-color-ios-medium-shade, var(--ion-color-medium-shade, #86888f));\n  color: var(--ion-color-ios-medium-contrast, var(--ion-color-medium-contrast, #fff));\n  background-color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2)); }\n  .item-ios-medium .item-inner {\n    border-bottom-color: var(--ion-color-ios-medium-shade, var(--ion-color-medium-shade, #86888f)); }\n  .item-ios-medium p {\n    color: var(--ion-color-ios-medium-contrast, var(--ion-color-medium-contrast, #fff)); }\n  .item-ios-medium.activated {\n    background-color: var(--ion-color-ios-medium-tint, var(--ion-color-medium-tint, #a2a4ab)); }\n\n.item-ios-medium.item-detail-push .item-inner {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-ios-medium-shade,%20var(--ion-color-medium-shade,%20%2386888f))'/></svg>\"); }\n\n.item-ios-dark {\n  border-bottom-color: var(--ion-color-ios-dark-shade, var(--ion-color-dark-shade, #1e2023));\n  color: var(--ion-color-ios-dark-contrast, var(--ion-color-dark-contrast, #fff));\n  background-color: var(--ion-color-ios-dark, var(--ion-color-dark, #222428)); }\n  .item-ios-dark .item-inner {\n    border-bottom-color: var(--ion-color-ios-dark-shade, var(--ion-color-dark-shade, #1e2023)); }\n  .item-ios-dark p {\n    color: var(--ion-color-ios-dark-contrast, var(--ion-color-dark-contrast, #fff)); }\n  .item-ios-dark.activated {\n    background-color: var(--ion-color-ios-dark-tint, var(--ion-color-dark-tint, #383a3e)); }\n\n.item-ios-dark.item-detail-push .item-inner {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2012%2020'><path%20d='M2,20l-2-2l8-8L0,2l2-2l10,10L2,20z'%20fill='var(--ion-color-ios-dark-shade,%20var(--ion-color-dark-shade,%20%231e2023))'/></svg>\"); }"; }
    static get styleMode() { return "ios"; }
}

export { Item as IonItem };
