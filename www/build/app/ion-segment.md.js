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
    static get style() { return "ion-segment {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%; }\n\n.segment-md {\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif; }\n\n.segment-md.segment-disabled {\n  opacity: 0.3;\n  pointer-events: none; }"; }
    static get styleMode() { return "md"; }
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
    static get style() { return "ion-segment-button {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1; }\n\n.segment-button {\n  border-radius: 0;\n  margin-left: 0;\n  margin-right: 0;\n  text-align: center;\n  position: relative;\n  display: block;\n  overflow: hidden;\n  border: 0;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-font-kerning: none;\n  font-kerning: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  contain: content; }\n  .segment-button:active, .segment-button:focus {\n    outline: none; }\n\n.segment-button-md {\n  padding: 0 6px;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  height: 42px;\n  border-bottom-width: 2px;\n  border-bottom-style: solid;\n  border-bottom-color: rgba(0, 0, 0, 0.1);\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 40px;\n  text-transform: uppercase;\n  color: var(--ion-toolbar-md-color-active, var(--ion-toolbar-color-active, #4a4a4a));\n  background-color: transparent;\n  opacity: 0.7;\n  -webkit-transition: 100ms all linear;\n  transition: 100ms all linear; }\n  .segment-button-md ion-icon {\n    font-size: 26px;\n    line-height: 40px; }\n  .segment-button-md.activated, .segment-button-md.segment-checked {\n    border-color: var(--ion-toolbar-md-color-active, var(--ion-toolbar-color-active, #4a4a4a));\n    opacity: 1; }\n\n.segment-md .segment-button-disabled {\n  opacity: 0.3;\n  pointer-events: none; }\n\n.segment-md-primary .segment-button {\n  color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n  .segment-md-primary .segment-button.activated, .segment-md-primary .segment-button.segment-checked {\n    border-color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff));\n    color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n\n.segment-md-secondary .segment-button {\n  color: var(--ion-color-md-secondary, var(--ion-color-secondary, #0cd1e8)); }\n  .segment-md-secondary .segment-button.activated, .segment-md-secondary .segment-button.segment-checked {\n    border-color: var(--ion-color-md-secondary, var(--ion-color-secondary, #0cd1e8));\n    color: var(--ion-color-md-secondary, var(--ion-color-secondary, #0cd1e8)); }\n\n.segment-md-tertiary .segment-button {\n  color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #7044ff)); }\n  .segment-md-tertiary .segment-button.activated, .segment-md-tertiary .segment-button.segment-checked {\n    border-color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #7044ff));\n    color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #7044ff)); }\n\n.segment-md-success .segment-button {\n  color: var(--ion-color-md-success, var(--ion-color-success, #10dc60)); }\n  .segment-md-success .segment-button.activated, .segment-md-success .segment-button.segment-checked {\n    border-color: var(--ion-color-md-success, var(--ion-color-success, #10dc60));\n    color: var(--ion-color-md-success, var(--ion-color-success, #10dc60)); }\n\n.segment-md-warning .segment-button {\n  color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00)); }\n  .segment-md-warning .segment-button.activated, .segment-md-warning .segment-button.segment-checked {\n    border-color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00));\n    color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00)); }\n\n.segment-md-danger .segment-button {\n  color: var(--ion-color-md-danger, var(--ion-color-danger, #f04141)); }\n  .segment-md-danger .segment-button.activated, .segment-md-danger .segment-button.segment-checked {\n    border-color: var(--ion-color-md-danger, var(--ion-color-danger, #f04141));\n    color: var(--ion-color-md-danger, var(--ion-color-danger, #f04141)); }\n\n.segment-md-light .segment-button {\n  color: var(--ion-color-md-light, var(--ion-color-light, #f4f5f8)); }\n  .segment-md-light .segment-button.activated, .segment-md-light .segment-button.segment-checked {\n    border-color: var(--ion-color-md-light, var(--ion-color-light, #f4f5f8));\n    color: var(--ion-color-md-light, var(--ion-color-light, #f4f5f8)); }\n\n.segment-md-medium .segment-button {\n  color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2)); }\n  .segment-md-medium .segment-button.activated, .segment-md-medium .segment-button.segment-checked {\n    border-color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2));\n    color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2)); }\n\n.segment-md-dark .segment-button {\n  color: var(--ion-color-md-dark, var(--ion-color-dark, #222428)); }\n  .segment-md-dark .segment-button.activated, .segment-md-dark .segment-button.segment-checked {\n    border-color: var(--ion-color-md-dark, var(--ion-color-dark, #222428));\n    color: var(--ion-color-md-dark, var(--ion-color-dark, #222428)); }"; }
    static get styleMode() { return "md"; }
}

export { Segment as IonSegment, SegmentButton as IonSegmentButton };
