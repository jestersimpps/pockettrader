/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as hasShadowDom, j as createColorClasses, k as openURL } from './chunk-cb94efc7.js';

class Button {
    constructor() {
        this.keyFocus = false;
        this.buttonType = "button";
        this.disabled = false;
        this.strong = false;
        this.type = "button";
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onKeyUp = () => {
            this.keyFocus = true;
        };
        this.onBlur = () => {
            this.keyFocus = false;
            this.ionBlur.emit();
        };
        this.onClick = (ev) => {
            if (this.type === "button") {
                return openURL(this.win, this.href, ev, this.routerDirection);
            }
            else if (hasShadowDom(this.el)) {
                const form = this.el.closest("form");
                if (form) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    const fakeButton = document.createElement("button");
                    fakeButton.type = this.type;
                    fakeButton.style.display = "none";
                    form.appendChild(fakeButton);
                    fakeButton.click();
                    fakeButton.remove();
                }
            }
            return Promise.resolve(false);
        };
    }
    componentWillLoad() {
        if (this.fill === undefined) {
            this.fill = this.el.closest("ion-buttons") ? "clear" : "solid";
        }
    }
    hostData() {
        const { buttonType, keyFocus, disabled, color, expand, fill, shape, size, strong } = this;
        return {
            "ion-activatable": true,
            class: Object.assign({}, createColorClasses(color), { [buttonType]: true, [`${buttonType}-${expand}`]: !!expand, [`${buttonType}-${size}`]: !!size, [`${buttonType}-${shape}`]: !!shape, [`${buttonType}-${fill}`]: !!fill, [`${buttonType}-strong`]: strong, "focused": keyFocus, "button-disabled": disabled })
        };
    }
    render() {
        const TagType = this.href === undefined ? "button" : "a";
        const attrs = (TagType === "button")
            ? { type: this.type }
            : { href: this.href };
        return (h(TagType, Object.assign({}, attrs, { class: "button-native", disabled: this.disabled, onFocus: this.onFocus, onKeyUp: this.onKeyUp, onBlur: this.onBlur, onClick: this.onClick }), h("span", { class: "button-inner" }, h("slot", { name: "icon-only" }), h("slot", { name: "start" }), h("slot", null), h("slot", { name: "end" })), this.mode === "md" && h("ion-ripple-effect", null)));
    }
    static get is() { return "ion-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
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
                "attr": "disabled",
                "reflectToAttr": true
            },
            "el": {
                "elementRef": true
            },
            "expand": {
                "type": String,
                "attr": "expand",
                "reflectToAttr": true
            },
            "fill": {
                "type": String,
                "attr": "fill",
                "reflectToAttr": true,
                "mutable": true
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
                "attr": "shape",
                "reflectToAttr": true
            },
            "size": {
                "type": String,
                "attr": "size",
                "reflectToAttr": true
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
        };
    }
    static get events() {
        return [{
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
            }];
    }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the button\n   * \@prop --background-activated: Background of the button when activated\n   * \@prop --background-focused: Background of the button when focused\n   *\n   * \@prop --color: Text color of the button\n   * \@prop --color-activated: Text color of the button when activated\n   * \@prop --color-focused: Text color of the button when focused\n   *\n   * \@prop --width: Width of the button\n   * \@prop --height: Height of the button\n   *\n   * \@prop --transition: Transition of the button\n   *\n   * \@prop --border-radius: Border radius of the button\n   * \@prop --border-width: Border width of the button\n   * \@prop --border-style: Border style of the button\n   * \@prop --border-color: Border color of the button\n   *\n   * \@prop --ripple-color: Color of the button ripple effect\n   *\n   * \@prop --box-shadow: Box shadow of the button\n   * \@prop --opacity: Opacity of the button\n   *\n   * \@prop --margin-top: Margin top of the button\n   * \@prop --margin-end: Margin end of the button\n   * \@prop --margin-bottom: Margin bottom of the button\n   * \@prop --margin-start: Margin start of the button\n   *\n   * \@prop --padding-top: Padding top of the button\n   * \@prop --padding-end: Padding end of the button\n   * \@prop --padding-bottom: Padding bottom of the button\n   * \@prop --padding-start: Padding start of the button\n   */\n  --width: auto;\n  --overflow: hidden;\n  --ripple-color: currentColor;\n  display: inline-block;\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  pointer-events: auto;\n  text-align: center;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: top;\n  vertical-align: -webkit-baseline-middle;\n  -webkit-font-kerning: none;\n  font-kerning: none; }\n\n:host(.button-disabled) {\n  pointer-events: none; }\n\n:host(.button-solid) {\n  --background: var(--ion-color-primary, #3880ff);\n  --background-activated: var(--ion-color-primary-shade, #3171e0);\n  --background-focused: var(--ion-color-primary-shade, #3171e0);\n  --color: var(--ion-color-primary-contrast, #fff);\n  --color-activated: var(--ion-color-primary-contrast, #fff);\n  --color-focused: var(--ion-color-primary-contrast, #fff); }\n\n:host(.button-solid.ion-color) .button-native {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast); }\n\n:host(.button-solid.ion-color.focused) .button-native,\n:host(.button-solid.ion-color.activated) .button-native {\n  background: var(--ion-color-shade); }\n\n:host(.button-outline) {\n  --border-color: var(--ion-color-primary, #3880ff);\n  --background: transparent;\n  --color: var(--ion-color-primary, #3880ff);\n  --color-focused: var(--ion-color-primary, #3880ff); }\n\n:host(.button-outline.ion-color) .button-native {\n  border-color: var(--ion-color-base);\n  background: transparent;\n  color: var(--ion-color-base); }\n\n:host(.button-outline.focused.ion-color) .button-native {\n  background: rgba(var(--ion-color-base-rgb), 0.1);\n  color: var(--ion-color-base); }\n\n:host(.button-clear) {\n  --border-width: 0;\n  --background: transparent;\n  --color: var(--ion-color-primary, #3880ff); }\n\n:host(.button-clear.ion-color) .button-native {\n  background: transparent;\n  color: var(--ion-color-base); }\n\n:host(.button-clear.focused.ion-color) .button-native {\n  background: rgba(var(--ion-color-base-rgb), 0.1);\n  color: var(--ion-color-base); }\n\n:host(.button-clear.activated.ion-color) .button-native {\n  background: transparent; }\n\n:host(.button-block) {\n  display: block; }\n\n:host(.button-block) .button-native {\n  margin-left: 0;\n  margin-right: 0;\n  display: block;\n  width: 100%;\n  clear: both;\n  contain: strict; }\n\n:host(.button-block) .button-native::after {\n  clear: both; }\n\n:host(.button-full) {\n  display: block; }\n\n:host(.button-full) .button-native {\n  margin-left: 0;\n  margin-right: 0;\n  display: block;\n  width: 100%;\n  contain: strict; }\n\n:host(.button-full:not(.button-round)) .button-native {\n  border-radius: 0;\n  border-right-width: 0;\n  border-left-width: 0; }\n\n.button-native {\n  border-radius: var(--border-radius);\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin: var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);\n  padding: var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  display: block;\n  position: relative;\n  width: var(--width);\n  height: var(--height);\n  -webkit-transition: var(--transition);\n  transition: var(--transition);\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: var(--border-color);\n  outline: none;\n  background: var(--background);\n  line-height: 1;\n  -webkit-box-shadow: var(--box-shadow);\n  box-shadow: var(--box-shadow);\n  contain: content;\n  cursor: pointer;\n  opacity: var(--opacity);\n  overflow: var(--overflow);\n  z-index: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.button-native[disabled] {\n  cursor: default;\n  opacity: .5;\n  pointer-events: none; }\n\n:host(.focused) .button-native {\n  background: var(--background-focused);\n  color: var(--color-focused); }\n\n:host(.activated) .button-native {\n  background: var(--background-activated);\n  color: var(--color-activated); }\n\n.button-inner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%; }\n\n::slotted(ion-icon) {\n  font-size: 1.4em;\n  pointer-events: none; }\n\n::slotted(ion-icon[slot=\"start\"]) {\n  margin: 0 0.3em 0 -0.3em; }\n\n::slotted(ion-icon[slot=\"end\"]) {\n  margin: 0 -0.2em 0 0.3em; }\n\n::slotted(ion-icon[slot=\"icon-only\"]) {\n  font-size: 1.8em; }\n\nion-ripple-effect {\n  color: var(--ripple-color); }\n\n:host {\n  --border-radius: 2px;\n  --margin-top: 4px;\n  --margin-bottom: 4px;\n  --margin-start: 2px;\n  --margin-end: 2px;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --padding-start: 1.1em;\n  --padding-end: 1.1em;\n  --height: 36px;\n  --transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1), background-color 300ms cubic-bezier(0.4, 0, 0.2, 1), color 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: uppercase; }\n\n:host(.button-solid) {\n  --box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n:host(.button-solid.activated) {\n  --box-shadow: 0 3px 5px rgba(0, 0, 0, 0.14), 0 3px 5px rgba(0, 0, 0, 0.21); }\n\n:host(.button-outline) {\n  --border-width: 1px;\n  --border-style: solid;\n  --box-shadow: none;\n  --background-activated: transparent;\n  --background-focused: rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.1);\n  --color-activated: var(--ion-color-primary, #3880ff); }\n\n:host(.button-outline.activated.ion-color) .button-native {\n  background: transparent; }\n\n:host(.button-clear) {\n  --opacity: 1;\n  --background-activated: transparent;\n  --background-focused: rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.1);\n  --color-activated: var(--ion-color-primary, #3880ff);\n  --color-focused: var(--ion-color-primary, #3880ff); }\n\n:host(.button-round) {\n  --border-radius: 64px;\n  --padding-top: 0;\n  --padding-start: 26px;\n  --padding-end: 26px;\n  --padding-bottom: 0; }\n\n:host(.button-large) {\n  --padding-top: 0;\n  --padding-start: 1em;\n  --padding-end: 1em;\n  --padding-bottom: 0;\n  --height: 2.8em;\n  font-size: 20px; }\n\n:host(.button-small) {\n  --padding-top: 0;\n  --padding-start: 0.9em;\n  --padding-end: 0.9em;\n  --padding-bottom: 0;\n  --height: 2.1em;\n  font-size: 13px; }\n\n:host(.button-strong) {\n  font-weight: bold; }\n\n::slotted(ion-icon[slot=\"icon-only\"]) {\n  padding: 0; }"; }
    static get styleMode() { return "md"; }
}

export { Button as IonButton };
