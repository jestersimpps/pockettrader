/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as createThemedClasses, b as getElementClassMap } from './chunk-ea7ac2d5.js';

class Segment {
    constructor() {
        /*
         * If true, the user cannot interact with the segment. Defaults to `false`.
         */
        this.disabled = false;
    }
    valueChanged(value) {
        this.update();
        this.ionChange.emit({ value });
    }
    segmentClick(ev) {
        const selectedButton = ev.target;
        this.value = selectedButton.value;
    }
    componentDidLoad() {
        if (this.value === undefined) {
            const buttons = Array.from(this.el.querySelectorAll('ion-segment-button'));
            const checked = buttons.find(b => b.checked);
            if (checked) {
                this.value = checked.value;
            }
        }
        this.update();
    }
    update() {
        const value = this.value;
        const buttons = Array.from(this.el.querySelectorAll('ion-segment-button'));
        for (const button of buttons) {
            button.checked = (button.value === value);
        }
    }
    hostData() {
        return {
            class: {
                'segment-disabled': this.disabled
            }
        };
    }
    static get is() { return "ion-segment"; }
    static get host() { return {
        "theme": "segment"
    }; }
    static get properties() { return {
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
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "value": {
            "type": String,
            "attr": "value",
            "mutable": true,
            "watchCallbacks": ["valueChanged"]
        }
    }; }
    static get events() { return [{
            "name": "ionChange",
            "method": "ionChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "ionSelect",
            "method": "segmentClick"
        }]; }
    static get style() { return "ion-segment {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%; }\n\n.segment-ios {\n  font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif; }\n\n.segment-ios.segment-disabled {\n  opacity: 0.4;\n  pointer-events: none; }\n\n.toolbar-ios .segment-ios {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute; }"; }
    static get styleMode() { return "ios"; }
}

let ids = 0;
class SegmentButton {
    constructor() {
        /**
         * If true, the segment button is selected. Defaults to `false`.
         */
        this.checked = false;
        /*
         * If true, the user cannot interact with the segment button. Default false.
         */
        this.disabled = false;
        /**
         * The value of the segment button.
         */
        this.value = 'ion-sb-' + (ids++);
    }
    checkedChanged(checked, prev) {
        if (checked && !prev) {
            this.ionSelect.emit();
        }
    }
    render() {
        const themedClasses = createThemedClasses(this.mode, this.color, 'segment-button');
        const hostClasses = getElementClassMap(this.el.classList);
        const buttonClasses = Object.assign({ 'segment-button-disabled': this.disabled, 'segment-checked': this.checked }, themedClasses, hostClasses);
        const TagType = this.href ? 'a' : 'button';
        const attrs = (TagType === 'button')
            ? { type: 'button' }
            : {};
        return [
            h(TagType, Object.assign({}, attrs, { "aria-pressed": this.checked, class: buttonClasses, disabled: this.disabled, href: this.href, onClick: () => this.checked = true }),
                h("slot", null),
                this.mode === 'md' && h("ion-ripple-effect", { tapClick: true }))
        ];
    }
    static get is() { return "ion-segment-button"; }
    static get properties() { return {
        "checked": {
            "type": Boolean,
            "attr": "checked",
            "mutable": true,
            "watchCallbacks": ["checkedChanged"]
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
        "href": {
            "type": String,
            "attr": "href"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "value": {
            "type": String,
            "attr": "value"
        }
    }; }
    static get events() { return [{
            "name": "ionSelect",
            "method": "ionSelect",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "ion-segment-button {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1; }\n\n.segment-button {\n  border-radius: 0;\n  margin-left: 0;\n  margin-right: 0;\n  text-align: center;\n  position: relative;\n  display: block;\n  overflow: hidden;\n  border: 0;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-font-kerning: none;\n  font-kerning: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  contain: content; }\n  .segment-button:active, .segment-button:focus {\n    outline: none; }\n\nion-segment-button:first-of-type .segment-button-ios {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 4px;\n  margin-right: 0; }\n\nion-segment-button:not(:first-of-type) .segment-button-ios {\n  border-left-width: 0; }\n\nion-segment-button:last-of-type .segment-button-ios {\n  border-top-left-radius: 0;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 0;\n  margin-left: 0;\n  border-left-width: 0; }\n\n.segment-button-ios {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  height: 32px;\n  border-width: 1px;\n  border-style: solid;\n  border-color: var(--ion-color-ios-primary, var(--ion-color-primary, #3880ff));\n  font-size: 13px;\n  line-height: 28px;\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #3880ff));\n  background-color: transparent; }\n  .segment-button-ios ion-icon {\n    font-size: 26px;\n    line-height: 28px; }\n  .segment-button-ios.segment-checked {\n    color: var(--ion-color-ios-primary-contrast, var(--ion-color-primary-contrast, #fff));\n    background-color: var(--ion-color-ios-primary, var(--ion-color-primary, #3880ff));\n    -webkit-transition: 100ms all linear;\n    transition: 100ms all linear; }\n  .segment-button-ios:hover:not(.segment-checked) {\n    background-color: rgba(var(--ion-color-ios-primary-rgb, var(--ion-color-primary-rgb, 56, 128, 255)), 0.1);\n    -webkit-transition: 100ms all linear;\n    transition: 100ms all linear; }\n  .segment-button-ios:active:not(.segment-checked) {\n    background-color: rgba(var(--ion-color-ios-primary-rgb, var(--ion-color-primary-rgb, 56, 128, 255)), 0.1);\n    -webkit-transition: 100ms all linear;\n    transition: 100ms all linear; }\n\n[dir=\"rtl\"] ion-segment-button:first-of-type .segment-button-ios {\n  border-left-width: 0; }\n\n[dir=\"rtl\"] ion-segment-button:last-of-type .segment-button-ios {\n  border-left-width: 1px; }\n\n.segment-ios .segment-button-disabled {\n  color: rgba(var(--ion-color-ios-primary-rgb, var(--ion-color-primary-rgb, 56, 128, 255)), 0.5);\n  pointer-events: none; }\n\n.toolbar-ios ion-segment-button {\n  max-width: 100px; }\n\n.toolbar-ios .segment-button-ios {\n  height: 30px;\n  font-size: 12px;\n  line-height: 22px; }\n  .toolbar-ios .segment-button-ios ion-icon {\n    font-size: 22px;\n    line-height: 24px; }\n\n.segment-ios-primary .segment-button {\n  border-color: var(--ion-color-ios-primary, var(--ion-color-primary, #3880ff));\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #3880ff)); }\n  .segment-ios-primary .segment-button:hover:not(.segment-checked) {\n    background-color: rgba(var(--ion-color-ios-primary-rgb, var(--ion-color-primary-rgb, 56, 128, 255)), 0.1); }\n  .segment-ios-primary .segment-button:active:not(.segment-checked) {\n    background-color: rgba(var(--ion-color-ios-primary-rgb, var(--ion-color-primary-rgb, 56, 128, 255)), 0.1); }\n  .segment-ios-primary .segment-button.segment-checked {\n    color: var(--ion-color-ios-primary-contrast, var(--ion-color-primary-contrast, #fff));\n    background-color: var(--ion-color-ios-primary, var(--ion-color-primary, #3880ff)); }\n\n.segment-ios-primary .segment-button-disabled {\n  color: rgba(var(--ion-color-ios-primary-rgb, var(--ion-color-primary-rgb, 56, 128, 255)), 0.5); }\n\n.toolbar-ios-primary .segment-button-ios.segment-checked {\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #3880ff)); }\n\n.segment-ios-secondary .segment-button {\n  border-color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #0cd1e8));\n  color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #0cd1e8)); }\n  .segment-ios-secondary .segment-button:hover:not(.segment-checked) {\n    background-color: rgba(var(--ion-color-ios-secondary-rgb, var(--ion-color-secondary-rgb, 12, 209, 232)), 0.1); }\n  .segment-ios-secondary .segment-button:active:not(.segment-checked) {\n    background-color: rgba(var(--ion-color-ios-secondary-rgb, var(--ion-color-secondary-rgb, 12, 209, 232)), 0.1); }\n  .segment-ios-secondary .segment-button.segment-checked {\n    color: var(--ion-color-ios-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n    background-color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #0cd1e8)); }\n\n.segment-ios-secondary .segment-button-disabled {\n  color: rgba(var(--ion-color-ios-secondary-rgb, var(--ion-color-secondary-rgb, 12, 209, 232)), 0.5); }\n\n.toolbar-ios-secondary .segment-button-ios.segment-checked {\n  color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #0cd1e8)); }\n\n.segment-ios-tertiary .segment-button {\n  border-color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #7044ff));\n  color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #7044ff)); }\n  .segment-ios-tertiary .segment-button:hover:not(.segment-checked) {\n    background-color: rgba(var(--ion-color-ios-tertiary-rgb, var(--ion-color-tertiary-rgb, 112, 68, 255)), 0.1); }\n  .segment-ios-tertiary .segment-button:active:not(.segment-checked) {\n    background-color: rgba(var(--ion-color-ios-tertiary-rgb, var(--ion-color-tertiary-rgb, 112, 68, 255)), 0.1); }\n  .segment-ios-tertiary .segment-button.segment-checked {\n    color: var(--ion-color-ios-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n    background-color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #7044ff)); }\n\n.segment-ios-tertiary .segment-button-disabled {\n  color: rgba(var(--ion-color-ios-tertiary-rgb, var(--ion-color-tertiary-rgb, 112, 68, 255)), 0.5); }\n\n.toolbar-ios-tertiary .segment-button-ios.segment-checked {\n  color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #7044ff)); }\n\n.segment-ios-success .segment-button {\n  border-color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n  color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60)); }\n  .segment-ios-success .segment-button:hover:not(.segment-checked) {\n    background-color: rgba(var(--ion-color-ios-success-rgb, var(--ion-color-success-rgb, 16, 220, 96)), 0.1); }\n  .segment-ios-success .segment-button:active:not(.segment-checked) {\n    background-color: rgba(var(--ion-color-ios-success-rgb, var(--ion-color-success-rgb, 16, 220, 96)), 0.1); }\n  .segment-ios-success .segment-button.segment-checked {\n    color: var(--ion-color-ios-success-contrast, var(--ion-color-success-contrast, #fff));\n    background-color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60)); }\n\n.segment-ios-success .segment-button-disabled {\n  color: rgba(var(--ion-color-ios-success-rgb, var(--ion-color-success-rgb, 16, 220, 96)), 0.5); }\n\n.toolbar-ios-success .segment-button-ios.segment-checked {\n  color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60)); }\n\n.segment-ios-warning .segment-button {\n  border-color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n  color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00)); }\n  .segment-ios-warning .segment-button:hover:not(.segment-checked) {\n    background-color: rgba(var(--ion-color-ios-warning-rgb, var(--ion-color-warning-rgb, 255, 206, 0)), 0.1); }\n  .segment-ios-warning .segment-button:active:not(.segment-checked) {\n    background-color: rgba(var(--ion-color-ios-warning-rgb, var(--ion-color-warning-rgb, 255, 206, 0)), 0.1); }\n  .segment-ios-warning .segment-button.segment-checked {\n    color: var(--ion-color-ios-warning-contrast, var(--ion-color-warning-contrast, #fff));\n    background-color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00)); }\n\n.segment-ios-warning .segment-button-disabled {\n  color: rgba(var(--ion-color-ios-warning-rgb, var(--ion-color-warning-rgb, 255, 206, 0)), 0.5); }\n\n.toolbar-ios-warning .segment-button-ios.segment-checked {\n  color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00)); }\n\n.segment-ios-danger .segment-button {\n  border-color: var(--ion-color-ios-danger, var(--ion-color-danger, #f04141));\n  color: var(--ion-color-ios-danger, var(--ion-color-danger, #f04141)); }\n  .segment-ios-danger .segment-button:hover:not(.segment-checked) {\n    background-color: rgba(var(--ion-color-ios-danger-rgb, var(--ion-color-danger-rgb, 240, 65, 65)), 0.1); }\n  .segment-ios-danger .segment-button:active:not(.segment-checked) {\n    background-color: rgba(var(--ion-color-ios-danger-rgb, var(--ion-color-danger-rgb, 240, 65, 65)), 0.1); }\n  .segment-ios-danger .segment-button.segment-checked {\n    color: var(--ion-color-ios-danger-contrast, var(--ion-color-danger-contrast, #fff));\n    background-color: var(--ion-color-ios-danger, var(--ion-color-danger, #f04141)); }\n\n.segment-ios-danger .segment-button-disabled {\n  color: rgba(var(--ion-color-ios-danger-rgb, var(--ion-color-danger-rgb, 240, 65, 65)), 0.5); }\n\n.toolbar-ios-danger .segment-button-ios.segment-checked {\n  color: var(--ion-color-ios-danger, var(--ion-color-danger, #f04141)); }\n\n.segment-ios-light .segment-button {\n  border-color: var(--ion-color-ios-light, var(--ion-color-light, #f4f5f8));\n  color: var(--ion-color-ios-light, var(--ion-color-light, #f4f5f8)); }\n  .segment-ios-light .segment-button:hover:not(.segment-checked) {\n    background-color: rgba(var(--ion-color-ios-light-rgb, var(--ion-color-light-rgb, 244, 245, 248)), 0.1); }\n  .segment-ios-light .segment-button:active:not(.segment-checked) {\n    background-color: rgba(var(--ion-color-ios-light-rgb, var(--ion-color-light-rgb, 244, 245, 248)), 0.1); }\n  .segment-ios-light .segment-button.segment-checked {\n    color: var(--ion-color-ios-light-contrast, var(--ion-color-light-contrast, #000));\n    background-color: var(--ion-color-ios-light, var(--ion-color-light, #f4f5f8)); }\n\n.segment-ios-light .segment-button-disabled {\n  color: rgba(var(--ion-color-ios-light-rgb, var(--ion-color-light-rgb, 244, 245, 248)), 0.5); }\n\n.toolbar-ios-light .segment-button-ios.segment-checked {\n  color: var(--ion-color-ios-light, var(--ion-color-light, #f4f5f8)); }\n\n.segment-ios-medium .segment-button {\n  border-color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n  color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2)); }\n  .segment-ios-medium .segment-button:hover:not(.segment-checked) {\n    background-color: rgba(var(--ion-color-ios-medium-rgb, var(--ion-color-medium-rgb, 152, 154, 162)), 0.1); }\n  .segment-ios-medium .segment-button:active:not(.segment-checked) {\n    background-color: rgba(var(--ion-color-ios-medium-rgb, var(--ion-color-medium-rgb, 152, 154, 162)), 0.1); }\n  .segment-ios-medium .segment-button.segment-checked {\n    color: var(--ion-color-ios-medium-contrast, var(--ion-color-medium-contrast, #fff));\n    background-color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2)); }\n\n.segment-ios-medium .segment-button-disabled {\n  color: rgba(var(--ion-color-ios-medium-rgb, var(--ion-color-medium-rgb, 152, 154, 162)), 0.5); }\n\n.toolbar-ios-medium .segment-button-ios.segment-checked {\n  color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2)); }\n\n.segment-ios-dark .segment-button {\n  border-color: var(--ion-color-ios-dark, var(--ion-color-dark, #222428));\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222428)); }\n  .segment-ios-dark .segment-button:hover:not(.segment-checked) {\n    background-color: rgba(var(--ion-color-ios-dark-rgb, var(--ion-color-dark-rgb, 34, 36, 40)), 0.1); }\n  .segment-ios-dark .segment-button:active:not(.segment-checked) {\n    background-color: rgba(var(--ion-color-ios-dark-rgb, var(--ion-color-dark-rgb, 34, 36, 40)), 0.1); }\n  .segment-ios-dark .segment-button.segment-checked {\n    color: var(--ion-color-ios-dark-contrast, var(--ion-color-dark-contrast, #fff));\n    background-color: var(--ion-color-ios-dark, var(--ion-color-dark, #222428)); }\n\n.segment-ios-dark .segment-button-disabled {\n  color: rgba(var(--ion-color-ios-dark-rgb, var(--ion-color-dark-rgb, 34, 36, 40)), 0.5); }\n\n.toolbar-ios-dark .segment-button-ios.segment-checked {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222428)); }"; }
    static get styleMode() { return "ios"; }
}

export { Segment as IonSegment, SegmentButton as IonSegmentButton };
