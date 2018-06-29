/*! Built with http://stenciljs.com */
const { h } = window.App;

import { d as getButtonClassMap, b as getElementClassMap, c as openURL } from './chunk-ea7ac2d5.js';

class Button {
    constructor() {
        this.keyFocus = false;
        /**
         * The type of button.
         * Possible values are: `"button"`, `"bar-button"`.
         */
        this.buttonType = 'button';
        /**
         * If true, the user cannot interact with the button. Defaults to `false`.
         */
        this.disabled = false;
        /**
         * Set to `"clear"` for a transparent button, to `"outline"` for a transparent
         * button with a border, or to `"solid"`. The default style is `"solid"` except inside of
         * a toolbar, where the default is `"clear"`.
         */
        this.fill = 'default';
        /**
         * If true, activates a button with a heavier font weight.
         */
        this.strong = false;
        /**
         * The type of the button.
         * Possible values are: `"submit"`, `"reset"` and `"button"`.
         * Default value is: `"button"`
         */
        this.type = 'button';
    }
    componentWillLoad() {
        if (this.el.closest('ion-buttons')) {
            this.buttonType = 'bar-button';
        }
    }
    onFocus() {
        this.ionFocus.emit();
    }
    onKeyUp() {
        this.keyFocus = true;
    }
    onBlur() {
        this.keyFocus = false;
        this.ionBlur.emit();
    }
    render() {
        const { buttonType, color, expand, fill, mode, shape, size, strong } = this;
        const TagType = this.href ? 'a' : 'button';
        const buttonClasses = Object.assign({}, getButtonClassMap(buttonType, mode), getButtonTypeClassMap(buttonType, expand, mode), getButtonTypeClassMap(buttonType, size, mode), getButtonTypeClassMap(buttonType, shape, mode), getButtonTypeClassMap(buttonType, strong ? 'strong' : undefined, mode), getColorClassMap(buttonType, color, fill, mode), getElementClassMap(this.el.classList), { 'focused': this.keyFocus });
        const attrs = (TagType === 'button')
            ? { type: this.type }
            : { href: this.href };
        return (h(TagType, Object.assign({}, attrs, { class: buttonClasses, disabled: this.disabled, onFocus: this.onFocus.bind(this), onKeyUp: this.onKeyUp.bind(this), onBlur: this.onBlur.bind(this), onClick: (ev) => openURL(this.win, this.href, ev, this.routerDirection) }),
            h("span", { class: "button-inner" },
                h("slot", { name: "icon-only" }),
                h("slot", { name: "start" }),
                h("slot", null),
                h("slot", { name: "end" })),
            this.mode === 'md' && h("ion-ripple-effect", { tapClick: true })));
    }
    static get is() { return "ion-button"; }
    static get properties() { return {
        "buttonType": {
            "type": String,
            "attr": "button-type",
            "mutable": true
        },
        "color": {
            "type": String,
            "attr": "color"
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "el": {
            "elementRef": true
        },
        "expand": {
            "type": String,
            "attr": "expand"
        },
        "fill": {
            "type": String,
            "attr": "fill"
        },
        "href": {
            "type": String,
            "attr": "href"
        },
        "keyFocus": {
            "state": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "routerDirection": {
            "type": String,
            "attr": "router-direction"
        },
        "shape": {
            "type": String,
            "attr": "shape"
        },
        "size": {
            "type": String,
            "attr": "size"
        },
        "strong": {
            "type": Boolean,
            "attr": "strong"
        },
        "type": {
            "type": String,
            "attr": "type"
        },
        "win": {
            "context": "window"
        }
    }; }
    static get events() { return [{
            "name": "ionFocus",
            "method": "ionFocus",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionBlur",
            "method": "ionBlur",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".button {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  text-align: center;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  position: relative;\n  z-index: 0;\n  display: inline-block;\n  border: 0;\n  line-height: 1;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n  cursor: pointer;\n  vertical-align: top;\n  vertical-align: -webkit-baseline-middle;\n  -webkit-transition: background-color, opacity 100ms linear;\n  transition: background-color, opacity 100ms linear;\n  -webkit-font-kerning: none;\n  font-kerning: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  contain: content; }\n\n.button:active,\n.button:focus {\n  outline: none; }\n\n.button-inner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%; }\n\na[disabled],\nbutton[disabled],\n.button[disabled] {\n  cursor: default;\n  pointer-events: none; }\n\n.button-block {\n  display: block;\n  clear: both;\n  width: 100%;\n  contain: strict; }\n\n.button-block::after {\n  clear: both; }\n\n.button-full {\n  display: block;\n  width: 100%;\n  contain: strict; }\n\n.button-full.button-outline {\n  border-radius: 0;\n  border-right-width: 0;\n  border-left-width: 0; }\n\n.button ion-icon {\n  font-size: 1.4em;\n  pointer-events: none; }\n\n.button ion-icon[slot=\"start\"] {\n  margin: 0 0.3em 0 -0.3em; }\n\n.button ion-icon[slot=\"end\"] {\n  margin: 0 -0.2em 0 0.3em; }\n\n.button ion-icon[slot=\"icon-only\"] {\n  font-size: 1.8em; }\n\n.button-md {\n  border-radius: 2px;\n  margin: 4px 2px;\n  padding: 0 1.1em;\n  overflow: hidden;\n  height: 36px;\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff));\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  -webkit-transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1); }\n\n.button-md:hover {\n  background-color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n\n.button-md.activated {\n  background-color: var(--ion-color-md-primary-shade, var(--ion-color-primary-shade, #3171e0));\n  -webkit-box-shadow: 0 3px 5px rgba(0, 0, 0, 0.14), 0 3px 5px rgba(0, 0, 0, 0.21);\n  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.14), 0 3px 5px rgba(0, 0, 0, 0.21); }\n\n.button-md.focused {\n  background-color: var(--ion-color-md-primary-shade, var(--ion-color-primary-shade, #3171e0)); }\n\n.button-md .ripple-effect {\n  background-color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff)); }\n\na[disabled],\nbutton[disabled],\n.button[disabled] {\n  opacity: 0.5; }\n\n.button-large-md {\n  padding: 0 1em;\n  height: 2.8em;\n  font-size: 20px; }\n\n.button-small-md {\n  padding: 0 0.9em;\n  height: 2.1em;\n  font-size: 13px; }\n\n.button-block-md {\n  margin-left: 0;\n  margin-right: 0; }\n\n.button-full-md {\n  margin-left: 0;\n  margin-right: 0;\n  border-radius: 0;\n  border-right-width: 0;\n  border-left-width: 0; }\n\n.button-outline-md {\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff));\n  color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff));\n  background-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\n.button-outline-md:hover {\n  background-color: rgba(var(--ion-text-md-color-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.1); }\n\n.button-outline-md.activated {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  opacity: 1; }\n\n.button-outline-md.focused {\n  background-color: rgba(var(--ion-color-md-primary-rgb, var(--ion-color-primary-rgb, 56, 128, 255)), 0.1); }\n\n.button-outline-md .ripple-effect {\n  background-color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n\n.button-clear-md {\n  border-color: transparent;\n  color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff));\n  background-color: transparent;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  opacity: 1; }\n\n.button-clear-md.activated {\n  background-color: rgba(var(--ion-text-md-color-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.1);\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\n.button-clear-md.focused {\n  background-color: rgba(var(--ion-color-md-primary-rgb, var(--ion-color-primary-rgb, 56, 128, 255)), 0.1); }\n\n.button-clear-md:hover {\n  background-color: rgba(var(--ion-text-md-color-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.1); }\n\n.button-clear-md .ripple-effect {\n  background-color: var(--ion-text-md-color-step-600, var(--ion-text-color-step-600, #999999)); }\n\n.button-round-md {\n  border-radius: 64px;\n  padding: 0 26px; }\n\n.button-md ion-icon[slot=\"icon-only\"] {\n  padding: 0; }\n\n.button-md-primary {\n  color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n\n.button-md-primary:hover {\n  background-color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n\n.button-md-primary.activated {\n  background-color: var(--ion-color-md-primary-shade, var(--ion-color-primary-shade, #3171e0));\n  opacity: 1; }\n\n.button-md-primary.focused {\n  background-color: var(--ion-color-md-primary-shade, var(--ion-color-primary-shade, #3171e0)); }\n\n.button-md-primary .ripple-effect {\n  background-color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff)); }\n\n.button-outline-md-primary {\n  border-color: var(--ion-color-md-primary-tint, var(--ion-color-primary-tint, #4c8dff));\n  color: var(--ion-color-md-primary-tint, var(--ion-color-primary-tint, #4c8dff));\n  background-color: transparent; }\n\n.button-outline-md-primary:hover {\n  background-color: rgba(var(--ion-text-md-color-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.1); }\n\n.button-outline-md-primary.activated {\n  background-color: transparent; }\n\n.button-outline-md-primary.focused {\n  background-color: rgba(var(--ion-color-md-primary-rgb, var(--ion-color-primary-rgb, 56, 128, 255)), 0.1); }\n\n.button-outline-md-primary .ripple-effect {\n  background-color: var(--ion-color-md-primary-tint, var(--ion-color-primary-tint, #4c8dff)); }\n\n.button-clear-md-primary {\n  border-color: transparent;\n  color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff));\n  background-color: transparent; }\n\n.button-clear-md-primary.activated {\n  background-color: rgba(var(--ion-text-md-color-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.1);\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\n.button-clear-md-primary.focused {\n  background-color: rgba(var(--ion-color-md-primary-rgb, var(--ion-color-primary-rgb, 56, 128, 255)), 0.1); }\n\n.button-clear-md-primary:hover {\n  color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n\n.button-md-secondary {\n  color: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n  background-color: var(--ion-color-md-secondary, var(--ion-color-secondary, #0cd1e8)); }\n\n.button-md-secondary:hover {\n  background-color: var(--ion-color-md-secondary, var(--ion-color-secondary, #0cd1e8)); }\n\n.button-md-secondary.activated {\n  background-color: var(--ion-color-md-secondary-shade, var(--ion-color-secondary-shade, #0bb8cc));\n  opacity: 1; }\n\n.button-md-secondary.focused {\n  background-color: var(--ion-color-md-secondary-shade, var(--ion-color-secondary-shade, #0bb8cc)); }\n\n.button-md-secondary .ripple-effect {\n  background-color: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff)); }\n\n.button-outline-md-secondary {\n  border-color: var(--ion-color-md-secondary-tint, var(--ion-color-secondary-tint, #24d6ea));\n  color: var(--ion-color-md-secondary-tint, var(--ion-color-secondary-tint, #24d6ea));\n  background-color: transparent; }\n\n.button-outline-md-secondary:hover {\n  background-color: rgba(var(--ion-text-md-color-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.1); }\n\n.button-outline-md-secondary.activated {\n  background-color: transparent; }\n\n.button-outline-md-secondary.focused {\n  background-color: rgba(var(--ion-color-md-secondary-rgb, var(--ion-color-secondary-rgb, 12, 209, 232)), 0.1); }\n\n.button-outline-md-secondary .ripple-effect {\n  background-color: var(--ion-color-md-secondary-tint, var(--ion-color-secondary-tint, #24d6ea)); }\n\n.button-clear-md-secondary {\n  border-color: transparent;\n  color: var(--ion-color-md-secondary, var(--ion-color-secondary, #0cd1e8));\n  background-color: transparent; }\n\n.button-clear-md-secondary.activated {\n  background-color: rgba(var(--ion-text-md-color-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.1);\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\n.button-clear-md-secondary.focused {\n  background-color: rgba(var(--ion-color-md-secondary-rgb, var(--ion-color-secondary-rgb, 12, 209, 232)), 0.1); }\n\n.button-clear-md-secondary:hover {\n  color: var(--ion-color-md-secondary, var(--ion-color-secondary, #0cd1e8)); }\n\n.button-md-tertiary {\n  color: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n  background-color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #7044ff)); }\n\n.button-md-tertiary:hover {\n  background-color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #7044ff)); }\n\n.button-md-tertiary.activated {\n  background-color: var(--ion-color-md-tertiary-shade, var(--ion-color-tertiary-shade, #633ce0));\n  opacity: 1; }\n\n.button-md-tertiary.focused {\n  background-color: var(--ion-color-md-tertiary-shade, var(--ion-color-tertiary-shade, #633ce0)); }\n\n.button-md-tertiary .ripple-effect {\n  background-color: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff)); }\n\n.button-outline-md-tertiary {\n  border-color: var(--ion-color-md-tertiary-tint, var(--ion-color-tertiary-tint, #7e57ff));\n  color: var(--ion-color-md-tertiary-tint, var(--ion-color-tertiary-tint, #7e57ff));\n  background-color: transparent; }\n\n.button-outline-md-tertiary:hover {\n  background-color: rgba(var(--ion-text-md-color-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.1); }\n\n.button-outline-md-tertiary.activated {\n  background-color: transparent; }\n\n.button-outline-md-tertiary.focused {\n  background-color: rgba(var(--ion-color-md-tertiary-rgb, var(--ion-color-tertiary-rgb, 112, 68, 255)), 0.1); }\n\n.button-outline-md-tertiary .ripple-effect {\n  background-color: var(--ion-color-md-tertiary-tint, var(--ion-color-tertiary-tint, #7e57ff)); }\n\n.button-clear-md-tertiary {\n  border-color: transparent;\n  color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #7044ff));\n  background-color: transparent; }\n\n.button-clear-md-tertiary.activated {\n  background-color: rgba(var(--ion-text-md-color-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.1);\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\n.button-clear-md-tertiary.focused {\n  background-color: rgba(var(--ion-color-md-tertiary-rgb, var(--ion-color-tertiary-rgb, 112, 68, 255)), 0.1); }\n\n.button-clear-md-tertiary:hover {\n  color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #7044ff)); }\n\n.button-md-success {\n  color: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff));\n  background-color: var(--ion-color-md-success, var(--ion-color-success, #10dc60)); }\n\n.button-md-success:hover {\n  background-color: var(--ion-color-md-success, var(--ion-color-success, #10dc60)); }\n\n.button-md-success.activated {\n  background-color: var(--ion-color-md-success-shade, var(--ion-color-success-shade, #0ec254));\n  opacity: 1; }\n\n.button-md-success.focused {\n  background-color: var(--ion-color-md-success-shade, var(--ion-color-success-shade, #0ec254)); }\n\n.button-md-success .ripple-effect {\n  background-color: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff)); }\n\n.button-outline-md-success {\n  border-color: var(--ion-color-md-success-tint, var(--ion-color-success-tint, #28e070));\n  color: var(--ion-color-md-success-tint, var(--ion-color-success-tint, #28e070));\n  background-color: transparent; }\n\n.button-outline-md-success:hover {\n  background-color: rgba(var(--ion-text-md-color-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.1); }\n\n.button-outline-md-success.activated {\n  background-color: transparent; }\n\n.button-outline-md-success.focused {\n  background-color: rgba(var(--ion-color-md-success-rgb, var(--ion-color-success-rgb, 16, 220, 96)), 0.1); }\n\n.button-outline-md-success .ripple-effect {\n  background-color: var(--ion-color-md-success-tint, var(--ion-color-success-tint, #28e070)); }\n\n.button-clear-md-success {\n  border-color: transparent;\n  color: var(--ion-color-md-success, var(--ion-color-success, #10dc60));\n  background-color: transparent; }\n\n.button-clear-md-success.activated {\n  background-color: rgba(var(--ion-text-md-color-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.1);\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\n.button-clear-md-success.focused {\n  background-color: rgba(var(--ion-color-md-success-rgb, var(--ion-color-success-rgb, 16, 220, 96)), 0.1); }\n\n.button-clear-md-success:hover {\n  color: var(--ion-color-md-success, var(--ion-color-success, #10dc60)); }\n\n.button-md-warning {\n  color: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #fff));\n  background-color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00)); }\n\n.button-md-warning:hover {\n  background-color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00)); }\n\n.button-md-warning.activated {\n  background-color: var(--ion-color-md-warning-shade, var(--ion-color-warning-shade, #e0b500));\n  opacity: 1; }\n\n.button-md-warning.focused {\n  background-color: var(--ion-color-md-warning-shade, var(--ion-color-warning-shade, #e0b500)); }\n\n.button-md-warning .ripple-effect {\n  background-color: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #fff)); }\n\n.button-outline-md-warning {\n  border-color: var(--ion-color-md-warning-tint, var(--ion-color-warning-tint, #ffd31a));\n  color: var(--ion-color-md-warning-tint, var(--ion-color-warning-tint, #ffd31a));\n  background-color: transparent; }\n\n.button-outline-md-warning:hover {\n  background-color: rgba(var(--ion-text-md-color-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.1); }\n\n.button-outline-md-warning.activated {\n  background-color: transparent; }\n\n.button-outline-md-warning.focused {\n  background-color: rgba(var(--ion-color-md-warning-rgb, var(--ion-color-warning-rgb, 255, 206, 0)), 0.1); }\n\n.button-outline-md-warning .ripple-effect {\n  background-color: var(--ion-color-md-warning-tint, var(--ion-color-warning-tint, #ffd31a)); }\n\n.button-clear-md-warning {\n  border-color: transparent;\n  color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00));\n  background-color: transparent; }\n\n.button-clear-md-warning.activated {\n  background-color: rgba(var(--ion-text-md-color-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.1);\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\n.button-clear-md-warning.focused {\n  background-color: rgba(var(--ion-color-md-warning-rgb, var(--ion-color-warning-rgb, 255, 206, 0)), 0.1); }\n\n.button-clear-md-warning:hover {\n  color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00)); }\n\n.button-md-danger {\n  color: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff));\n  background-color: var(--ion-color-md-danger, var(--ion-color-danger, #f04141)); }\n\n.button-md-danger:hover {\n  background-color: var(--ion-color-md-danger, var(--ion-color-danger, #f04141)); }\n\n.button-md-danger.activated {\n  background-color: var(--ion-color-md-danger-shade, var(--ion-color-danger-shade, #d33939));\n  opacity: 1; }\n\n.button-md-danger.focused {\n  background-color: var(--ion-color-md-danger-shade, var(--ion-color-danger-shade, #d33939)); }\n\n.button-md-danger .ripple-effect {\n  background-color: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff)); }\n\n.button-outline-md-danger {\n  border-color: var(--ion-color-md-danger-tint, var(--ion-color-danger-tint, #f25454));\n  color: var(--ion-color-md-danger-tint, var(--ion-color-danger-tint, #f25454));\n  background-color: transparent; }\n\n.button-outline-md-danger:hover {\n  background-color: rgba(var(--ion-text-md-color-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.1); }\n\n.button-outline-md-danger.activated {\n  background-color: transparent; }\n\n.button-outline-md-danger.focused {\n  background-color: rgba(var(--ion-color-md-danger-rgb, var(--ion-color-danger-rgb, 240, 65, 65)), 0.1); }\n\n.button-outline-md-danger .ripple-effect {\n  background-color: var(--ion-color-md-danger-tint, var(--ion-color-danger-tint, #f25454)); }\n\n.button-clear-md-danger {\n  border-color: transparent;\n  color: var(--ion-color-md-danger, var(--ion-color-danger, #f04141));\n  background-color: transparent; }\n\n.button-clear-md-danger.activated {\n  background-color: rgba(var(--ion-text-md-color-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.1);\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\n.button-clear-md-danger.focused {\n  background-color: rgba(var(--ion-color-md-danger-rgb, var(--ion-color-danger-rgb, 240, 65, 65)), 0.1); }\n\n.button-clear-md-danger:hover {\n  color: var(--ion-color-md-danger, var(--ion-color-danger, #f04141)); }\n\n.button-md-light {\n  color: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000));\n  background-color: var(--ion-color-md-light, var(--ion-color-light, #f4f5f8)); }\n\n.button-md-light:hover {\n  background-color: var(--ion-color-md-light, var(--ion-color-light, #f4f5f8)); }\n\n.button-md-light.activated {\n  background-color: var(--ion-color-md-light-shade, var(--ion-color-light-shade, #d7d8da));\n  opacity: 1; }\n\n.button-md-light.focused {\n  background-color: var(--ion-color-md-light-shade, var(--ion-color-light-shade, #d7d8da)); }\n\n.button-md-light .ripple-effect {\n  background-color: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000)); }\n\n.button-outline-md-light {\n  border-color: var(--ion-color-md-light-tint, var(--ion-color-light-tint, #f5f6f9));\n  color: var(--ion-color-md-light-tint, var(--ion-color-light-tint, #f5f6f9));\n  background-color: transparent; }\n\n.button-outline-md-light:hover {\n  background-color: rgba(var(--ion-text-md-color-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.1); }\n\n.button-outline-md-light.activated {\n  background-color: transparent; }\n\n.button-outline-md-light.focused {\n  background-color: rgba(var(--ion-color-md-light-rgb, var(--ion-color-light-rgb, 244, 245, 248)), 0.1); }\n\n.button-outline-md-light .ripple-effect {\n  background-color: var(--ion-color-md-light-tint, var(--ion-color-light-tint, #f5f6f9)); }\n\n.button-clear-md-light {\n  border-color: transparent;\n  color: var(--ion-color-md-light, var(--ion-color-light, #f4f5f8));\n  background-color: transparent; }\n\n.button-clear-md-light.activated {\n  background-color: rgba(var(--ion-text-md-color-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.1);\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\n.button-clear-md-light.focused {\n  background-color: rgba(var(--ion-color-md-light-rgb, var(--ion-color-light-rgb, 244, 245, 248)), 0.1); }\n\n.button-clear-md-light:hover {\n  color: var(--ion-color-md-light, var(--ion-color-light, #f4f5f8)); }\n\n.button-md-medium {\n  color: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #fff));\n  background-color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2)); }\n\n.button-md-medium:hover {\n  background-color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2)); }\n\n.button-md-medium.activated {\n  background-color: var(--ion-color-md-medium-shade, var(--ion-color-medium-shade, #86888f));\n  opacity: 1; }\n\n.button-md-medium.focused {\n  background-color: var(--ion-color-md-medium-shade, var(--ion-color-medium-shade, #86888f)); }\n\n.button-md-medium .ripple-effect {\n  background-color: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #fff)); }\n\n.button-outline-md-medium {\n  border-color: var(--ion-color-md-medium-tint, var(--ion-color-medium-tint, #a2a4ab));\n  color: var(--ion-color-md-medium-tint, var(--ion-color-medium-tint, #a2a4ab));\n  background-color: transparent; }\n\n.button-outline-md-medium:hover {\n  background-color: rgba(var(--ion-text-md-color-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.1); }\n\n.button-outline-md-medium.activated {\n  background-color: transparent; }\n\n.button-outline-md-medium.focused {\n  background-color: rgba(var(--ion-color-md-medium-rgb, var(--ion-color-medium-rgb, 152, 154, 162)), 0.1); }\n\n.button-outline-md-medium .ripple-effect {\n  background-color: var(--ion-color-md-medium-tint, var(--ion-color-medium-tint, #a2a4ab)); }\n\n.button-clear-md-medium {\n  border-color: transparent;\n  color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2));\n  background-color: transparent; }\n\n.button-clear-md-medium.activated {\n  background-color: rgba(var(--ion-text-md-color-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.1);\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\n.button-clear-md-medium.focused {\n  background-color: rgba(var(--ion-color-md-medium-rgb, var(--ion-color-medium-rgb, 152, 154, 162)), 0.1); }\n\n.button-clear-md-medium:hover {\n  color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2)); }\n\n.button-md-dark {\n  color: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff));\n  background-color: var(--ion-color-md-dark, var(--ion-color-dark, #222428)); }\n\n.button-md-dark:hover {\n  background-color: var(--ion-color-md-dark, var(--ion-color-dark, #222428)); }\n\n.button-md-dark.activated {\n  background-color: var(--ion-color-md-dark-shade, var(--ion-color-dark-shade, #1e2023));\n  opacity: 1; }\n\n.button-md-dark.focused {\n  background-color: var(--ion-color-md-dark-shade, var(--ion-color-dark-shade, #1e2023)); }\n\n.button-md-dark .ripple-effect {\n  background-color: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff)); }\n\n.button-outline-md-dark {\n  border-color: var(--ion-color-md-dark-tint, var(--ion-color-dark-tint, #383a3e));\n  color: var(--ion-color-md-dark-tint, var(--ion-color-dark-tint, #383a3e));\n  background-color: transparent; }\n\n.button-outline-md-dark:hover {\n  background-color: rgba(var(--ion-text-md-color-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.1); }\n\n.button-outline-md-dark.activated {\n  background-color: transparent; }\n\n.button-outline-md-dark.focused {\n  background-color: rgba(var(--ion-color-md-dark-rgb, var(--ion-color-dark-rgb, 34, 36, 40)), 0.1); }\n\n.button-outline-md-dark .ripple-effect {\n  background-color: var(--ion-color-md-dark-tint, var(--ion-color-dark-tint, #383a3e)); }\n\n.button-clear-md-dark {\n  border-color: transparent;\n  color: var(--ion-color-md-dark, var(--ion-color-dark, #222428));\n  background-color: transparent; }\n\n.button-clear-md-dark.activated {\n  background-color: rgba(var(--ion-text-md-color-rgb, var(--ion-text-color-rgb, 0, 0, 0)), 0.1);\n  -webkit-box-shadow: none;\n  box-shadow: none; }\n\n.button-clear-md-dark.focused {\n  background-color: rgba(var(--ion-color-md-dark-rgb, var(--ion-color-dark-rgb, 34, 36, 40)), 0.1); }\n\n.button-clear-md-dark:hover {\n  color: var(--ion-color-md-dark, var(--ion-color-dark, #222428)); }\n\n.button-strong-md {\n  font-weight: bold; }"; }
    static get styleMode() { return "md"; }
}
/**
 * Get the classes based on the type
 * e.g. block, full, round, large
 */
function getButtonTypeClassMap(buttonType, type, mode) {
    if (!type) {
        return {};
    }
    type = type.toLocaleLowerCase();
    return {
        [`${buttonType}-${type}`]: true,
        [`${buttonType}-${type}-${mode}`]: true
    };
}
function getColorClassMap(buttonType, color, fill, mode) {
    let className = buttonType;
    if (buttonType !== 'bar-button' && fill === 'solid') {
        fill = 'default';
    }
    if (fill && fill !== 'default') {
        className += `-${fill.toLowerCase()}`;
    }
    // special case for a default bar button
    // if the bar button is default it should get the fill
    // but if a color is passed the fill shouldn't be added
    if (buttonType === 'bar-button' && fill === 'default') {
        className = buttonType;
        if (!color) {
            className += '-' + fill.toLowerCase();
        }
    }
    const map = {
        [className]: true,
        [`${className}-${mode}`]: true,
    };
    if (color) {
        map[`${className}-${mode}-${color}`] = true;
    }
    return map;
}

export { Button as IonButton };
