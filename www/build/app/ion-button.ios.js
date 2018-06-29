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
    static get style() { return ".button {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  text-align: center;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  position: relative;\n  z-index: 0;\n  display: inline-block;\n  border: 0;\n  line-height: 1;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  text-transform: none;\n  white-space: nowrap;\n  cursor: pointer;\n  vertical-align: top;\n  vertical-align: -webkit-baseline-middle;\n  -webkit-transition: background-color, opacity 100ms linear;\n  transition: background-color, opacity 100ms linear;\n  -webkit-font-kerning: none;\n  font-kerning: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  contain: content; }\n\n.button:active,\n.button:focus {\n  outline: none; }\n\n.button-inner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%; }\n\na[disabled],\nbutton[disabled],\n.button[disabled] {\n  cursor: default;\n  pointer-events: none; }\n\n.button-block {\n  display: block;\n  clear: both;\n  width: 100%;\n  contain: strict; }\n\n.button-block::after {\n  clear: both; }\n\n.button-full {\n  display: block;\n  width: 100%;\n  contain: strict; }\n\n.button-full.button-outline {\n  border-radius: 0;\n  border-right-width: 0;\n  border-left-width: 0; }\n\n.button ion-icon {\n  font-size: 1.4em;\n  pointer-events: none; }\n\n.button ion-icon[slot=\"start\"] {\n  margin: 0 0.3em 0 -0.3em; }\n\n.button ion-icon[slot=\"end\"] {\n  margin: 0 -0.2em 0 0.3em; }\n\n.button ion-icon[slot=\"icon-only\"] {\n  font-size: 1.8em; }\n\n.button-ios {\n  border-radius: 8px;\n  margin: 4px 2px;\n  padding: 0 1em;\n  height: 2.8em;\n  font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: -0.03em;\n  color: var(--ion-color-ios-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-ios-primary, var(--ion-color-primary, #3880ff)); }\n\n.button-ios.activated {\n  background-color: var(--ion-color-ios-primary-shade, var(--ion-color-primary-shade, #3171e0));\n  opacity: 1; }\n\n.button-ios.focused {\n  background-color: var(--ion-color-ios-primary-shade, var(--ion-color-primary-shade, #3171e0)); }\n\n.button-ios:hover {\n  opacity: 0.8; }\n\na[disabled],\nbutton[disabled],\n.button[disabled] {\n  opacity: 0.5; }\n\n.button-large-ios {\n  padding: 0 1em;\n  height: 2.8em;\n  font-size: 20px; }\n\n.button-small-ios {\n  padding: 0 0.9em;\n  height: 2.1em;\n  font-size: 13px; }\n\n.button-block-ios {\n  margin-left: 0;\n  margin-right: 0; }\n\n.button-full-ios {\n  margin-left: 0;\n  margin-right: 0;\n  border-radius: 0;\n  border-right-width: 0;\n  border-left-width: 0; }\n\n.button-outline-ios {\n  border-radius: 8px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--ion-color-ios-primary, var(--ion-color-primary, #3880ff));\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #3880ff));\n  background-color: transparent; }\n\n.button-outline-ios.activated {\n  color: var(--ion-color-ios-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-ios-primary, var(--ion-color-primary, #3880ff));\n  opacity: 1; }\n\n.button-outline-ios.focused {\n  background-color: rgba(var(--ion-color-ios-primary-rgb, var(--ion-color-primary-rgb, 56, 128, 255)), 0.25); }\n\n.button-outline-ios.activated.focused {\n  border-color: var(--ion-color-ios-primary-shade, var(--ion-color-primary-shade, #3171e0));\n  background-color: var(--ion-color-ios-primary-shade, var(--ion-color-primary-shade, #3171e0)); }\n\n.button-clear-ios {\n  border-color: transparent;\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #3880ff));\n  background-color: transparent; }\n\n.button-clear-ios.activated {\n  background-color: transparent;\n  opacity: 0.4; }\n\n.button-clear-ios.focused {\n  background-color: rgba(var(--ion-color-ios-primary-rgb, var(--ion-color-primary-rgb, 56, 128, 255)), 0.25); }\n\n.button-clear-ios:hover {\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #3880ff));\n  opacity: 0.6; }\n\n.button-round-ios {\n  border-radius: 64px;\n  padding: 0 26px; }\n\n.button-ios-primary {\n  color: var(--ion-color-ios-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-ios-primary, var(--ion-color-primary, #3880ff)); }\n\n.button-ios-primary.activated {\n  background-color: var(--ion-color-ios-primary-shade, var(--ion-color-primary-shade, #3171e0)); }\n\n.button-ios-primary.focused {\n  background-color: var(--ion-color-ios-primary-shade, var(--ion-color-primary-shade, #3171e0)); }\n\n.button-outline-ios-primary {\n  border-color: var(--ion-color-ios-primary, var(--ion-color-primary, #3880ff));\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #3880ff));\n  background-color: transparent; }\n\n.button-outline-ios-primary.activated {\n  color: var(--ion-color-ios-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-ios-primary, var(--ion-color-primary, #3880ff)); }\n\n.button-outline-ios-primary.focused {\n  background-color: rgba(var(--ion-color-ios-primary-rgb, var(--ion-color-primary-rgb, 56, 128, 255)), 0.25); }\n\n.button-outline-ios-primary.activated.focused {\n  border-color: var(--ion-color-ios-primary-shade, var(--ion-color-primary-shade, #3171e0));\n  background-color: var(--ion-color-ios-primary-shade, var(--ion-color-primary-shade, #3171e0)); }\n\n.button-clear-ios-primary {\n  border-color: transparent;\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #3880ff));\n  background-color: transparent; }\n\n.button-clear-ios-primary.activated {\n  opacity: 0.4; }\n\n.button-clear-ios-primary.focused {\n  background-color: rgba(var(--ion-color-ios-primary-rgb, var(--ion-color-primary-rgb, 56, 128, 255)), 0.25); }\n\n.button-clear-ios-primary:hover {\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #3880ff)); }\n\n.button-ios-secondary {\n  color: var(--ion-color-ios-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n  background-color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #0cd1e8)); }\n\n.button-ios-secondary.activated {\n  background-color: var(--ion-color-ios-secondary-shade, var(--ion-color-secondary-shade, #0bb8cc)); }\n\n.button-ios-secondary.focused {\n  background-color: var(--ion-color-ios-secondary-shade, var(--ion-color-secondary-shade, #0bb8cc)); }\n\n.button-outline-ios-secondary {\n  border-color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #0cd1e8));\n  color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #0cd1e8));\n  background-color: transparent; }\n\n.button-outline-ios-secondary.activated {\n  color: var(--ion-color-ios-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n  background-color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #0cd1e8)); }\n\n.button-outline-ios-secondary.focused {\n  background-color: rgba(var(--ion-color-ios-secondary-rgb, var(--ion-color-secondary-rgb, 12, 209, 232)), 0.25); }\n\n.button-outline-ios-secondary.activated.focused {\n  border-color: var(--ion-color-ios-secondary-shade, var(--ion-color-secondary-shade, #0bb8cc));\n  background-color: var(--ion-color-ios-secondary-shade, var(--ion-color-secondary-shade, #0bb8cc)); }\n\n.button-clear-ios-secondary {\n  border-color: transparent;\n  color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #0cd1e8));\n  background-color: transparent; }\n\n.button-clear-ios-secondary.activated {\n  opacity: 0.4; }\n\n.button-clear-ios-secondary.focused {\n  background-color: rgba(var(--ion-color-ios-secondary-rgb, var(--ion-color-secondary-rgb, 12, 209, 232)), 0.25); }\n\n.button-clear-ios-secondary:hover {\n  color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #0cd1e8)); }\n\n.button-ios-tertiary {\n  color: var(--ion-color-ios-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n  background-color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #7044ff)); }\n\n.button-ios-tertiary.activated {\n  background-color: var(--ion-color-ios-tertiary-shade, var(--ion-color-tertiary-shade, #633ce0)); }\n\n.button-ios-tertiary.focused {\n  background-color: var(--ion-color-ios-tertiary-shade, var(--ion-color-tertiary-shade, #633ce0)); }\n\n.button-outline-ios-tertiary {\n  border-color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #7044ff));\n  color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #7044ff));\n  background-color: transparent; }\n\n.button-outline-ios-tertiary.activated {\n  color: var(--ion-color-ios-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n  background-color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #7044ff)); }\n\n.button-outline-ios-tertiary.focused {\n  background-color: rgba(var(--ion-color-ios-tertiary-rgb, var(--ion-color-tertiary-rgb, 112, 68, 255)), 0.25); }\n\n.button-outline-ios-tertiary.activated.focused {\n  border-color: var(--ion-color-ios-tertiary-shade, var(--ion-color-tertiary-shade, #633ce0));\n  background-color: var(--ion-color-ios-tertiary-shade, var(--ion-color-tertiary-shade, #633ce0)); }\n\n.button-clear-ios-tertiary {\n  border-color: transparent;\n  color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #7044ff));\n  background-color: transparent; }\n\n.button-clear-ios-tertiary.activated {\n  opacity: 0.4; }\n\n.button-clear-ios-tertiary.focused {\n  background-color: rgba(var(--ion-color-ios-tertiary-rgb, var(--ion-color-tertiary-rgb, 112, 68, 255)), 0.25); }\n\n.button-clear-ios-tertiary:hover {\n  color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #7044ff)); }\n\n.button-ios-success {\n  color: var(--ion-color-ios-success-contrast, var(--ion-color-success-contrast, #fff));\n  background-color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60)); }\n\n.button-ios-success.activated {\n  background-color: var(--ion-color-ios-success-shade, var(--ion-color-success-shade, #0ec254)); }\n\n.button-ios-success.focused {\n  background-color: var(--ion-color-ios-success-shade, var(--ion-color-success-shade, #0ec254)); }\n\n.button-outline-ios-success {\n  border-color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n  color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n  background-color: transparent; }\n\n.button-outline-ios-success.activated {\n  color: var(--ion-color-ios-success-contrast, var(--ion-color-success-contrast, #fff));\n  background-color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60)); }\n\n.button-outline-ios-success.focused {\n  background-color: rgba(var(--ion-color-ios-success-rgb, var(--ion-color-success-rgb, 16, 220, 96)), 0.25); }\n\n.button-outline-ios-success.activated.focused {\n  border-color: var(--ion-color-ios-success-shade, var(--ion-color-success-shade, #0ec254));\n  background-color: var(--ion-color-ios-success-shade, var(--ion-color-success-shade, #0ec254)); }\n\n.button-clear-ios-success {\n  border-color: transparent;\n  color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n  background-color: transparent; }\n\n.button-clear-ios-success.activated {\n  opacity: 0.4; }\n\n.button-clear-ios-success.focused {\n  background-color: rgba(var(--ion-color-ios-success-rgb, var(--ion-color-success-rgb, 16, 220, 96)), 0.25); }\n\n.button-clear-ios-success:hover {\n  color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60)); }\n\n.button-ios-warning {\n  color: var(--ion-color-ios-warning-contrast, var(--ion-color-warning-contrast, #fff));\n  background-color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00)); }\n\n.button-ios-warning.activated {\n  background-color: var(--ion-color-ios-warning-shade, var(--ion-color-warning-shade, #e0b500)); }\n\n.button-ios-warning.focused {\n  background-color: var(--ion-color-ios-warning-shade, var(--ion-color-warning-shade, #e0b500)); }\n\n.button-outline-ios-warning {\n  border-color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n  color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n  background-color: transparent; }\n\n.button-outline-ios-warning.activated {\n  color: var(--ion-color-ios-warning-contrast, var(--ion-color-warning-contrast, #fff));\n  background-color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00)); }\n\n.button-outline-ios-warning.focused {\n  background-color: rgba(var(--ion-color-ios-warning-rgb, var(--ion-color-warning-rgb, 255, 206, 0)), 0.25); }\n\n.button-outline-ios-warning.activated.focused {\n  border-color: var(--ion-color-ios-warning-shade, var(--ion-color-warning-shade, #e0b500));\n  background-color: var(--ion-color-ios-warning-shade, var(--ion-color-warning-shade, #e0b500)); }\n\n.button-clear-ios-warning {\n  border-color: transparent;\n  color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n  background-color: transparent; }\n\n.button-clear-ios-warning.activated {\n  opacity: 0.4; }\n\n.button-clear-ios-warning.focused {\n  background-color: rgba(var(--ion-color-ios-warning-rgb, var(--ion-color-warning-rgb, 255, 206, 0)), 0.25); }\n\n.button-clear-ios-warning:hover {\n  color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00)); }\n\n.button-ios-danger {\n  color: var(--ion-color-ios-danger-contrast, var(--ion-color-danger-contrast, #fff));\n  background-color: var(--ion-color-ios-danger, var(--ion-color-danger, #f04141)); }\n\n.button-ios-danger.activated {\n  background-color: var(--ion-color-ios-danger-shade, var(--ion-color-danger-shade, #d33939)); }\n\n.button-ios-danger.focused {\n  background-color: var(--ion-color-ios-danger-shade, var(--ion-color-danger-shade, #d33939)); }\n\n.button-outline-ios-danger {\n  border-color: var(--ion-color-ios-danger, var(--ion-color-danger, #f04141));\n  color: var(--ion-color-ios-danger, var(--ion-color-danger, #f04141));\n  background-color: transparent; }\n\n.button-outline-ios-danger.activated {\n  color: var(--ion-color-ios-danger-contrast, var(--ion-color-danger-contrast, #fff));\n  background-color: var(--ion-color-ios-danger, var(--ion-color-danger, #f04141)); }\n\n.button-outline-ios-danger.focused {\n  background-color: rgba(var(--ion-color-ios-danger-rgb, var(--ion-color-danger-rgb, 240, 65, 65)), 0.25); }\n\n.button-outline-ios-danger.activated.focused {\n  border-color: var(--ion-color-ios-danger-shade, var(--ion-color-danger-shade, #d33939));\n  background-color: var(--ion-color-ios-danger-shade, var(--ion-color-danger-shade, #d33939)); }\n\n.button-clear-ios-danger {\n  border-color: transparent;\n  color: var(--ion-color-ios-danger, var(--ion-color-danger, #f04141));\n  background-color: transparent; }\n\n.button-clear-ios-danger.activated {\n  opacity: 0.4; }\n\n.button-clear-ios-danger.focused {\n  background-color: rgba(var(--ion-color-ios-danger-rgb, var(--ion-color-danger-rgb, 240, 65, 65)), 0.25); }\n\n.button-clear-ios-danger:hover {\n  color: var(--ion-color-ios-danger, var(--ion-color-danger, #f04141)); }\n\n.button-ios-light {\n  color: var(--ion-color-ios-light-contrast, var(--ion-color-light-contrast, #000));\n  background-color: var(--ion-color-ios-light, var(--ion-color-light, #f4f5f8)); }\n\n.button-ios-light.activated {\n  background-color: var(--ion-color-ios-light-shade, var(--ion-color-light-shade, #d7d8da)); }\n\n.button-ios-light.focused {\n  background-color: var(--ion-color-ios-light-shade, var(--ion-color-light-shade, #d7d8da)); }\n\n.button-outline-ios-light {\n  border-color: var(--ion-color-ios-light, var(--ion-color-light, #f4f5f8));\n  color: var(--ion-color-ios-light, var(--ion-color-light, #f4f5f8));\n  background-color: transparent; }\n\n.button-outline-ios-light.activated {\n  color: var(--ion-color-ios-light-contrast, var(--ion-color-light-contrast, #000));\n  background-color: var(--ion-color-ios-light, var(--ion-color-light, #f4f5f8)); }\n\n.button-outline-ios-light.focused {\n  background-color: rgba(var(--ion-color-ios-light-rgb, var(--ion-color-light-rgb, 244, 245, 248)), 0.25); }\n\n.button-outline-ios-light.activated.focused {\n  border-color: var(--ion-color-ios-light-shade, var(--ion-color-light-shade, #d7d8da));\n  background-color: var(--ion-color-ios-light-shade, var(--ion-color-light-shade, #d7d8da)); }\n\n.button-clear-ios-light {\n  border-color: transparent;\n  color: var(--ion-color-ios-light, var(--ion-color-light, #f4f5f8));\n  background-color: transparent; }\n\n.button-clear-ios-light.activated {\n  opacity: 0.4; }\n\n.button-clear-ios-light.focused {\n  background-color: rgba(var(--ion-color-ios-light-rgb, var(--ion-color-light-rgb, 244, 245, 248)), 0.25); }\n\n.button-clear-ios-light:hover {\n  color: var(--ion-color-ios-light, var(--ion-color-light, #f4f5f8)); }\n\n.button-ios-medium {\n  color: var(--ion-color-ios-medium-contrast, var(--ion-color-medium-contrast, #fff));\n  background-color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2)); }\n\n.button-ios-medium.activated {\n  background-color: var(--ion-color-ios-medium-shade, var(--ion-color-medium-shade, #86888f)); }\n\n.button-ios-medium.focused {\n  background-color: var(--ion-color-ios-medium-shade, var(--ion-color-medium-shade, #86888f)); }\n\n.button-outline-ios-medium {\n  border-color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n  color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n  background-color: transparent; }\n\n.button-outline-ios-medium.activated {\n  color: var(--ion-color-ios-medium-contrast, var(--ion-color-medium-contrast, #fff));\n  background-color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2)); }\n\n.button-outline-ios-medium.focused {\n  background-color: rgba(var(--ion-color-ios-medium-rgb, var(--ion-color-medium-rgb, 152, 154, 162)), 0.25); }\n\n.button-outline-ios-medium.activated.focused {\n  border-color: var(--ion-color-ios-medium-shade, var(--ion-color-medium-shade, #86888f));\n  background-color: var(--ion-color-ios-medium-shade, var(--ion-color-medium-shade, #86888f)); }\n\n.button-clear-ios-medium {\n  border-color: transparent;\n  color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n  background-color: transparent; }\n\n.button-clear-ios-medium.activated {\n  opacity: 0.4; }\n\n.button-clear-ios-medium.focused {\n  background-color: rgba(var(--ion-color-ios-medium-rgb, var(--ion-color-medium-rgb, 152, 154, 162)), 0.25); }\n\n.button-clear-ios-medium:hover {\n  color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2)); }\n\n.button-ios-dark {\n  color: var(--ion-color-ios-dark-contrast, var(--ion-color-dark-contrast, #fff));\n  background-color: var(--ion-color-ios-dark, var(--ion-color-dark, #222428)); }\n\n.button-ios-dark.activated {\n  background-color: var(--ion-color-ios-dark-shade, var(--ion-color-dark-shade, #1e2023)); }\n\n.button-ios-dark.focused {\n  background-color: var(--ion-color-ios-dark-shade, var(--ion-color-dark-shade, #1e2023)); }\n\n.button-outline-ios-dark {\n  border-color: var(--ion-color-ios-dark, var(--ion-color-dark, #222428));\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222428));\n  background-color: transparent; }\n\n.button-outline-ios-dark.activated {\n  color: var(--ion-color-ios-dark-contrast, var(--ion-color-dark-contrast, #fff));\n  background-color: var(--ion-color-ios-dark, var(--ion-color-dark, #222428)); }\n\n.button-outline-ios-dark.focused {\n  background-color: rgba(var(--ion-color-ios-dark-rgb, var(--ion-color-dark-rgb, 34, 36, 40)), 0.25); }\n\n.button-outline-ios-dark.activated.focused {\n  border-color: var(--ion-color-ios-dark-shade, var(--ion-color-dark-shade, #1e2023));\n  background-color: var(--ion-color-ios-dark-shade, var(--ion-color-dark-shade, #1e2023)); }\n\n.button-clear-ios-dark {\n  border-color: transparent;\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222428));\n  background-color: transparent; }\n\n.button-clear-ios-dark.activated {\n  opacity: 0.4; }\n\n.button-clear-ios-dark.focused {\n  background-color: rgba(var(--ion-color-ios-dark-rgb, var(--ion-color-dark-rgb, 34, 36, 40)), 0.25); }\n\n.button-clear-ios-dark:hover {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222428)); }\n\n.button-strong-ios {\n  font-weight: 600; }"; }
    static get styleMode() { return "ios"; }
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
