/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as numeral } from './chunk-374e99fd.js';
import { a as CURRENCYSERVICE } from './chunk-1c4b34f7.js';
import { c as debounceEvent, d as deferEvent } from './chunk-63df273d.js';
import { a as createThemedClasses } from './chunk-ea7ac2d5.js';
import './chunk-a7525511.js';
import './chunk-ea6d9d39.js';

class AppBalanceItem {
    render() {
        return [
            // TODO: if exchangeid == null, pick one
            this.exchangeId === null ? (h("ion-item", { lines: "full" },
                h("ion-grid", null,
                    h("ion-row", null,
                        h("ion-col", { "col-4": true, class: "lineText" },
                            h("app-cryptoicon", { class: "cicon", symbol: this.cryptodata.currency })),
                        h("ion-col", { "col-4": true, "text-center": true, class: "lineText" },
                            h("app-baseprice", { btcPrice: CURRENCYSERVICE.convertToBase(this.cryptodata.btcAmount, this.baseCurrency), baseCurrency: this.baseCurrency })),
                        h("ion-col", { "col-4": true, "text-right": true, class: "lineText" },
                            h("app-baseprice", { btcPrice: CURRENCYSERVICE.convertToBase(this.cryptodata.btcPrice, this.baseCurrency), baseCurrency: this.baseCurrency }))),
                    h("ion-row", null,
                        h("ion-col", { "col-4": true, "text-left": true, class: "lineText" },
                            h("b", { class: "ctext" }, this.cryptodata.currency)),
                        h("ion-col", { "col-4": true, "text-center": true, class: "lineText" },
                            h("span", null, numeral(this.cryptodata.balance).format('0,0.00'))),
                        h("ion-col", { "col-4": true, "text-right": true, class: "lineText" },
                            h("b", { style: { color: this.cryptodata.change > 0 ? '#10dc60' : '#f53d3d' } }, this.cryptodata.change > 0
                                ? '+' + numeral(this.cryptodata.change).format('0,0.00') + ' %'
                                : numeral(this.cryptodata.change).format('0,0.00') + ' %')))))) : (h("ion-item", { lines: "full", href: `/pair/${this.exchangeId}/${this.cryptodata.currency}` },
                h("ion-grid", null,
                    h("ion-row", null,
                        h("ion-col", { "col-4": true, class: "lineText" },
                            h("app-cryptoicon", { class: "cicon", symbol: this.cryptodata.currency })),
                        h("ion-col", { "col-4": true, "text-center": true, class: "lineText" },
                            h("app-baseprice", { btcPrice: CURRENCYSERVICE.convertToBase(this.cryptodata.btcAmount, this.baseCurrency), baseCurrency: this.baseCurrency })),
                        h("ion-col", { "col-4": true, "text-right": true, class: "lineText" },
                            h("app-baseprice", { btcPrice: CURRENCYSERVICE.convertToBase(this.cryptodata.btcPrice, this.baseCurrency), baseCurrency: this.baseCurrency }))),
                    h("ion-row", null,
                        h("ion-col", { "col-4": true, "text-left": true, class: "lineText" },
                            h("b", { class: "ctext" }, this.cryptodata.currency)),
                        h("ion-col", { "col-4": true, "text-center": true, class: "lineText" },
                            h("span", null, numeral(this.cryptodata.balance).format('0,0.00'))),
                        h("ion-col", { "col-4": true, "text-right": true, class: "lineText" },
                            h("b", { style: { color: this.cryptodata.change > 0 ? '#10dc60' : '#f53d3d' } }, this.cryptodata.change > 0
                                ? '+' + numeral(this.cryptodata.change).format('0,0.00') + ' %'
                                : numeral(this.cryptodata.change).format('0,0.00') + ' %')))))),
        ];
    }
    static get is() { return "app-balanceitem"; }
    static get properties() { return {
        "baseCurrency": {
            "type": "Any",
            "attr": "base-currency"
        },
        "cryptodata": {
            "type": "Any",
            "attr": "cryptodata"
        },
        "exchangeId": {
            "type": String,
            "attr": "exchange-id"
        }
    }; }
    static get style() { return ".lineText {\n  font-size: 0.8rem;\n}\n.cicon {\n  position: absolute;\n  top: -1px;\n}"; }
}

class AppCryptoIcon {
    render() {
        return [h("img", { src: `/assets/icon/${this.symbol.toLowerCase()}.svg` })];
    }
    static get is() { return "app-cryptoicon"; }
    static get properties() { return {
        "symbol": {
            "type": String,
            "attr": "symbol"
        }
    }; }
    static get style() { return ""; }
}

class Input {
    constructor() {
        this.didBlurAfterEdit = false;
        /**
         * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user. Defaults to `"none"`.
         */
        this.autocapitalize = 'none';
        /**
         * Indicates whether the value of the control can be automatically completed by the browser. Defaults to `"off"`.
         */
        this.autocomplete = 'off';
        /**
         * Whether autocorrection should be enabled when the user is entering/editing the text value. Defaults to `"off"`.
         */
        this.autocorrect = 'off';
        /**
         * This Boolean attribute lets you specify that a form control should have input focus when the page loads. Defaults to `false`.
         */
        this.autofocus = false;
        /**
         * If true, a clear icon will appear in the input when there is a value. Clicking it clears the input. Defaults to `false`.
         */
        this.clearInput = false;
        /**
         * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke. Default `0`.
         */
        this.debounce = 0;
        /**
         * If true, the user cannot interact with the input. Defaults to `false`.
         */
        this.disabled = false;
        /**
         * If true, the user cannot modify the value. Defaults to `false`.
         */
        this.readonly = false;
        /**
         * If true, the user must fill in a value before submitting a form.
         */
        this.required = false;
        /**
         * If true, the element will have its spelling and grammar checked. Defaults to `false`.
         */
        this.spellcheck = false;
        /**
         * The type of control to display. The default type is text. Possible values are: `"text"`, `"password"`, `"email"`, `"number"`, `"search"`, `"tel"`, or `"url"`.
         */
        this.type = 'text';
        /**
         * The value of the input.
         */
        this.value = '';
    }
    debounceChanged() {
        this.ionChange = debounceEvent(this.ionChange, this.debounce);
    }
    disabledChanged() {
        this.emitStyle();
    }
    /**
     * Update the native input element when the value changes
     */
    valueChanged() {
        const inputEl = this.nativeInput;
        const value = this.value;
        if (inputEl && inputEl.value !== value) {
            inputEl.value = value;
        }
        this.emitStyle();
        this.ionChange.emit({ value });
    }
    componentWillLoad() {
        // By default, password inputs clear after focus when they have content
        if (this.clearOnEdit === undefined && this.type === 'password') {
            this.clearOnEdit = true;
        }
    }
    componentDidLoad() {
        this.ionStyle = deferEvent(this.ionStyle);
        this.debounceChanged();
        this.emitStyle();
        this.ionInputDidLoad.emit();
    }
    componentDidUnload() {
        this.nativeInput = undefined;
        this.ionInputDidUnload.emit();
    }
    emitStyle() {
        this.ionStyle.emit({
            'interactive': true,
            'input': true,
            'input-disabled': this.disabled,
            'input-has-value': this.hasValue(),
            'input-has-focus': this.hasFocus()
        });
    }
    onInput(ev) {
        const input = ev.target;
        if (input) {
            this.value = ev.target && ev.target.value || '';
        }
        this.ionInput.emit(ev);
    }
    onBlur() {
        this.focusChanged();
        this.emitStyle();
        this.ionBlur.emit();
    }
    onFocus() {
        this.focusChanged();
        this.emitStyle();
        this.ionFocus.emit();
    }
    focusChanged() {
        // If clearOnEdit is enabled and the input blurred but has a value, set a flag
        if (this.clearOnEdit && !this.hasFocus() && this.hasValue()) {
            this.didBlurAfterEdit = true;
        }
    }
    inputKeydown() {
        this.checkClearOnEdit();
    }
    /**
     * Check if we need to clear the text input if clearOnEdit is enabled
     */
    checkClearOnEdit() {
        if (!this.clearOnEdit) {
            return;
        }
        // Did the input value change after it was blurred and edited?
        if (this.didBlurAfterEdit && this.hasValue()) {
            // Clear the input
            this.clearTextInput();
        }
        // Reset the flag
        this.didBlurAfterEdit = false;
    }
    clearTextInput() {
        this.value = '';
    }
    hasFocus() {
        // check if an input has focus or not
        return this.nativeInput === document.activeElement;
    }
    hasValue() {
        return (this.value !== '');
    }
    render() {
        const themedClasses = createThemedClasses(this.mode, this.color, 'native-input');
        // TODO aria-labelledby={this.item.labelId}
        return [
            h("input", { ref: input => this.nativeInput = input, "aria-disabled": this.disabled ? 'true' : false, accept: this.accept, autoCapitalize: this.autocapitalize, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, autoFocus: this.autofocus, class: themedClasses, disabled: this.disabled, inputMode: this.inputmode, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, multiple: this.multiple, name: this.name, pattern: this.pattern, placeholder: this.placeholder, results: this.results, readOnly: this.readonly, required: this.required, spellCheck: this.spellcheck, step: this.step, size: this.size, type: this.type, value: this.value, onInput: this.onInput.bind(this), onBlur: this.onBlur.bind(this), onFocus: this.onFocus.bind(this), onKeyDown: this.inputKeydown.bind(this) }),
            h("button", { type: "button", class: "input-clear-icon", hidden: !this.clearInput, onClick: this.clearTextInput.bind(this), onMouseDown: this.clearTextInput.bind(this) })
        ];
    }
    static get is() { return "ion-input"; }
    static get host() { return {
        "theme": "input"
    }; }
    static get properties() { return {
        "accept": {
            "type": String,
            "attr": "accept"
        },
        "autocapitalize": {
            "type": String,
            "attr": "autocapitalize"
        },
        "autocomplete": {
            "type": String,
            "attr": "autocomplete"
        },
        "autocorrect": {
            "type": String,
            "attr": "autocorrect"
        },
        "autofocus": {
            "type": Boolean,
            "attr": "autofocus"
        },
        "clearInput": {
            "type": Boolean,
            "attr": "clear-input"
        },
        "clearOnEdit": {
            "type": Boolean,
            "attr": "clear-on-edit",
            "mutable": true
        },
        "debounce": {
            "type": Number,
            "attr": "debounce",
            "watchCallbacks": ["debounceChanged"]
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "watchCallbacks": ["disabledChanged"]
        },
        "el": {
            "elementRef": true
        },
        "inputmode": {
            "type": String,
            "attr": "inputmode"
        },
        "max": {
            "type": String,
            "attr": "max"
        },
        "maxlength": {
            "type": Number,
            "attr": "maxlength"
        },
        "min": {
            "type": String,
            "attr": "min"
        },
        "minlength": {
            "type": Number,
            "attr": "minlength"
        },
        "multiple": {
            "type": Boolean,
            "attr": "multiple"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "pattern": {
            "type": String,
            "attr": "pattern"
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder"
        },
        "readonly": {
            "type": Boolean,
            "attr": "readonly"
        },
        "required": {
            "type": Boolean,
            "attr": "required"
        },
        "results": {
            "type": Number,
            "attr": "results"
        },
        "size": {
            "type": Number,
            "attr": "size"
        },
        "spellcheck": {
            "type": Boolean,
            "attr": "spellcheck"
        },
        "step": {
            "type": String,
            "attr": "step"
        },
        "type": {
            "type": String,
            "attr": "type"
        },
        "value": {
            "type": String,
            "attr": "value",
            "mutable": true,
            "watchCallbacks": ["valueChanged"]
        }
    }; }
    static get events() { return [{
            "name": "ionInput",
            "method": "ionInput",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionChange",
            "method": "ionChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionStyle",
            "method": "ionStyle",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionBlur",
            "method": "ionBlur",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionFocus",
            "method": "ionFocus",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionInputDidLoad",
            "method": "ionInputDidLoad",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionInputDidUnload",
            "method": "ionInputDidUnload",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".input {\n  position: relative;\n  display: block;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  width: 100%; }\n\n.item-input .input {\n  position: static; }\n\n.native-input {\n  -moz-appearance: none;\n  -ms-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  border-radius: 0;\n  display: inline-block;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  width: 92%;\n  width: calc(100% - 10px);\n  border: 0;\n  background: transparent; }\n  .native-input:active, .native-input:focus {\n    outline: none; }\n\n.native-input[disabled] {\n  opacity: .4; }\n\ninput.native-input:-webkit-autofill {\n  background-color: transparent; }\n\n.input-cover {\n  left: 0;\n  top: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%; }\n\n.input[disabled] .input-cover {\n  pointer-events: none; }\n\n.item-input-has-focus .input-cover {\n  display: none; }\n\n.item-input-has-focus {\n  pointer-events: none; }\n\n.item-input-has-focus input,\n.item-input-has-focus a,\n.item-input-has-focus button {\n  pointer-events: auto; }\n\n[next-input] {\n  padding: 0;\n  position: absolute;\n  bottom: 20px;\n  width: 1px;\n  height: 1px;\n  border: 0;\n  background: transparent;\n  pointer-events: none; }\n\n.input-clear-icon {\n  margin: 0;\n  padding: 0;\n  background-position: center;\n  position: absolute;\n  top: 0;\n  display: none;\n  height: 100%;\n  background-repeat: no-repeat; }\n\n.item-input-has-focus.item-input-has-value .input-clear-icon {\n  display: block; }\n\n.native-input-md {\n  margin: 13px 8px;\n  padding: 0;\n  width: calc(100% - 8px - 8px);\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n  font-size: inherit; }\n  .native-input-md::-moz-placeholder {\n    color: var(--ion-placeholder-text-md-color, var(--ion-placeholder-text-color, #999)); }\n  .native-input-md:-ms-input-placeholder {\n    color: var(--ion-placeholder-text-md-color, var(--ion-placeholder-text-color, #999)); }\n  .native-input-md::-webkit-input-placeholder {\n    text-indent: 0;\n    color: var(--ion-placeholder-text-md-color, var(--ion-placeholder-text-color, #999)); }\n\n.input-md .inset-input {\n  padding: 6.5px 8px;\n  margin: 6.5px 16px; }\n\n.item-md.item-input.item-input-has-focus .item-inner {\n  border-bottom-color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff));\n  -webkit-box-shadow: inset 0 -1px 0 0 var(--ion-color-md-primary, var(--ion-color-primary, #3880ff));\n  box-shadow: inset 0 -1px 0 0 var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n\n.list-md .item-input.item-input-has-focus:last-child {\n  border-bottom-color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff));\n  -webkit-box-shadow: inset 0 -1px 0 0 var(--ion-color-md-primary, var(--ion-color-primary, #3880ff));\n  box-shadow: inset 0 -1px 0 0 var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n  .list-md .item-input.item-input-has-focus:last-child .item-inner {\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\n.item-md.item-input.ng-valid.item-input-has-value:not(.item-input-has-focus) .item-inner {\n  border-bottom-color: var(--ion-color-md-success, var(--ion-color-success, #10dc60));\n  -webkit-box-shadow: inset 0 -1px 0 0 var(--ion-color-md-success, var(--ion-color-success, #10dc60));\n  box-shadow: inset 0 -1px 0 0 var(--ion-color-md-success, var(--ion-color-success, #10dc60)); }\n\n.list-md .item-input.ng-valid.item-input-has-value:not(.item-input-has-focus):last-child {\n  border-bottom-color: var(--ion-color-md-success, var(--ion-color-success, #10dc60));\n  -webkit-box-shadow: inset 0 -1px 0 0 var(--ion-color-md-success, var(--ion-color-success, #10dc60));\n  box-shadow: inset 0 -1px 0 0 var(--ion-color-md-success, var(--ion-color-success, #10dc60)); }\n  .list-md .item-input.ng-valid.item-input-has-value:not(.item-input-has-focus):last-child .item-inner {\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\n.item-md.item-input.ng-invalid.ng-touched:not(.item-input-has-focus) .item-inner {\n  border-bottom-color: var(--ion-color-md-danger, var(--ion-color-danger, #f04141));\n  -webkit-box-shadow: inset 0 -1px 0 0 var(--ion-color-md-danger, var(--ion-color-danger, #f04141));\n  box-shadow: inset 0 -1px 0 0 var(--ion-color-md-danger, var(--ion-color-danger, #f04141)); }\n\n.list-md .item-input.ng-invalid.ng-touched:not(.item-input-has-focus):last-child {\n  border-bottom-color: var(--ion-color-md-danger, var(--ion-color-danger, #f04141));\n  -webkit-box-shadow: inset 0 -1px 0 0 var(--ion-color-md-danger, var(--ion-color-danger, #f04141));\n  box-shadow: inset 0 -1px 0 0 var(--ion-color-md-danger, var(--ion-color-danger, #f04141)); }\n  .list-md .item-input.ng-invalid.ng-touched:not(.item-input-has-focus):last-child .item-inner {\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\n.item-label-stacked .native-input-md,\n.item-label-floating .native-input-md {\n  margin-left: 0;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  width: calc(100% - 8px); }\n\n.input-md[clear-input] {\n  position: relative; }\n\n.input-md[clear-input] .native-input {\n  padding-right: 30px; }\n\n.input-md .native-input-clear-icon {\n  right: 0;\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><polygon%20fill='var(--ion-text-md-color-step-400,%20var(--ion-text-color-step-400,%20%23666666))'%20points='405,136.798%20375.202,107%20256,226.202%20136.798,107%20107,136.798%20226.202,256%20107,375.202%20136.798,405%20256,285.798%20375.202,405%20405,375.202%20285.798,256'/></svg>\");\n  width: 30px;\n  background-color: transparent;\n  background-size: 22px; }"; }
    static get styleMode() { return "md"; }
}

class ItemDivider {
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
        return [
            h("slot", { name: "start" }),
            h("div", { class: "item-divider-inner" },
                h("div", { class: "item-divider-wrapper" },
                    h("slot", null)),
                h("slot", { name: "end" }))
        ];
    }
    static get is() { return "ion-item-divider"; }
    static get host() { return {
        "theme": "item-divider"
    }; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "el": {
            "elementRef": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        }
    }; }
    static get style() { return "ion-item-divider {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  z-index: 100;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 30px; }\n\nion-item-divider[sticky] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0; }\n\n.item-divider-inner {\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-orient: inherit;\n  -webkit-box-direction: inherit;\n  -ms-flex-direction: inherit;\n  flex-direction: inherit;\n  -webkit-box-align: inherit;\n  -ms-flex-align: inherit;\n  align-items: inherit;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  min-height: inherit;\n  border: 0; }\n\n.item-divider-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-orient: inherit;\n  -webkit-box-direction: inherit;\n  -ms-flex-direction: inherit;\n  flex-direction: inherit;\n  -webkit-box-align: inherit;\n  -ms-flex-align: inherit;\n  align-items: inherit;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  text-overflow: ellipsis; }\n\n.item-divider-md {\n  padding-left: 16px;\n  border-bottom: 1px solid rgba(var(--ion-item-md-border-color-rgb, var(--ion-item-border-color-rgb, 0, 0, 0)), 0.13);\n  font-family: \"Roboto\", \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  color: var(--ion-text-md-color-step-600, var(--ion-text-color-step-600, #999999));\n  background-color: var(--ion-background-md-color, var(--ion-background-color, #fff)); }\n\n.item-divider-md .item-divider-inner {\n  padding-right: 8px; }\n\n.item-divider-md [slot=\"start\"],\n.item-divider-md [slot=\"end\"] {\n  margin: 0 8px 0 0; }\n\n.item-divider-md ion-icon[slot=\"start\"],\n.item-divider-md ion-icon[slot=\"end\"] {\n  margin-left: 0;\n  margin-top: 11px;\n  margin-bottom: 10px; }\n\n.item-divider-md ion-icon[slot=\"start\"] + .item-inner,\n.item-divider-md ion-icon[slot=\"start\"] + .item-interactive {\n  margin-left: 24px; }\n\n.item-divider-md ion-avatar[slot=\"start\"],\n.item-divider-md ion-thumbnail[slot=\"start\"] {\n  margin: 8px 16px 8px 0; }\n\n.item-divider-md ion-avatar[slot=\"end\"],\n.item-divider-md ion-thumbnail[slot=\"end\"] {\n  margin: 8px; }\n\n.item-divider-md h1 {\n  margin: 0 0 2px;\n  font-size: 24px;\n  font-weight: normal; }\n\n.item-divider-md h2 {\n  margin: 2px 0;\n  font-size: 16px;\n  font-weight: normal; }\n\n.item-divider-md h3,\n.item-divider-md h4,\n.item-divider-md h5,\n.item-divider-md h6 {\n  margin: 2px 0;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: normal; }\n\n.item-divider-md p {\n  margin: 0 0 2px;\n  overflow: inherit;\n  font-size: 14px;\n  line-height: normal;\n  text-overflow: inherit;\n  color: var(--ion-text-md-color-step-400, var(--ion-text-color-step-400, #666666)); }\n\n.item-divider-md-primary {\n  color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n  .item-divider-md-primary p {\n    color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff)); }\n  .item-divider-md-primary.activated {\n    background-color: var(--ion-color-md-primary-tint, var(--ion-color-primary-tint, #4c8dff)); }\n\n.item-divider-md-secondary {\n  color: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n  background-color: var(--ion-color-md-secondary, var(--ion-color-secondary, #0cd1e8)); }\n  .item-divider-md-secondary p {\n    color: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff)); }\n  .item-divider-md-secondary.activated {\n    background-color: var(--ion-color-md-secondary-tint, var(--ion-color-secondary-tint, #24d6ea)); }\n\n.item-divider-md-tertiary {\n  color: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n  background-color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #7044ff)); }\n  .item-divider-md-tertiary p {\n    color: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff)); }\n  .item-divider-md-tertiary.activated {\n    background-color: var(--ion-color-md-tertiary-tint, var(--ion-color-tertiary-tint, #7e57ff)); }\n\n.item-divider-md-success {\n  color: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff));\n  background-color: var(--ion-color-md-success, var(--ion-color-success, #10dc60)); }\n  .item-divider-md-success p {\n    color: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff)); }\n  .item-divider-md-success.activated {\n    background-color: var(--ion-color-md-success-tint, var(--ion-color-success-tint, #28e070)); }\n\n.item-divider-md-warning {\n  color: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #fff));\n  background-color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00)); }\n  .item-divider-md-warning p {\n    color: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #fff)); }\n  .item-divider-md-warning.activated {\n    background-color: var(--ion-color-md-warning-tint, var(--ion-color-warning-tint, #ffd31a)); }\n\n.item-divider-md-danger {\n  color: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff));\n  background-color: var(--ion-color-md-danger, var(--ion-color-danger, #f04141)); }\n  .item-divider-md-danger p {\n    color: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff)); }\n  .item-divider-md-danger.activated {\n    background-color: var(--ion-color-md-danger-tint, var(--ion-color-danger-tint, #f25454)); }\n\n.item-divider-md-light {\n  color: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000));\n  background-color: var(--ion-color-md-light, var(--ion-color-light, #f4f5f8)); }\n  .item-divider-md-light p {\n    color: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000)); }\n  .item-divider-md-light.activated {\n    background-color: var(--ion-color-md-light-tint, var(--ion-color-light-tint, #f5f6f9)); }\n\n.item-divider-md-medium {\n  color: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #fff));\n  background-color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2)); }\n  .item-divider-md-medium p {\n    color: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #fff)); }\n  .item-divider-md-medium.activated {\n    background-color: var(--ion-color-md-medium-tint, var(--ion-color-medium-tint, #a2a4ab)); }\n\n.item-divider-md-dark {\n  color: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff));\n  background-color: var(--ion-color-md-dark, var(--ion-color-dark, #222428)); }\n  .item-divider-md-dark p {\n    color: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff)); }\n  .item-divider-md-dark.activated {\n    background-color: var(--ion-color-md-dark-tint, var(--ion-color-dark-tint, #383a3e)); }"; }
    static get styleMode() { return "md"; }
}

class List {
    /**
     * Get the [Item Sliding](../../item-sliding/ItemSliding) that is currently opene.
     */
    getOpenItem() {
        return this.openItem;
    }
    /**
     * Set an [Item Sliding](../../item-sliding/ItemSliding) as the open item.
     */
    setOpenItem(itemSliding) {
        this.openItem = itemSliding;
    }
    /**
     * Close the sliding items. Items can also be closed from the [Item Sliding](../../item-sliding/ItemSliding).
     * Returns a boolean value of whether it closed an item or not.
     */
    closeSlidingItems() {
        if (this.openItem) {
            this.openItem.close();
            this.openItem = undefined;
            return true;
        }
        return false;
    }
    hostData() {
        return {
            class: {
                [`list-lines-${this.lines}`]: !!this.lines,
                [`list-${this.mode}-lines-${this.lines}`]: !!this.lines
            }
        };
    }
    static get is() { return "ion-list"; }
    static get host() { return {
        "theme": "list"
    }; }
    static get properties() { return {
        "closeSlidingItems": {
            "method": true
        },
        "getOpenItem": {
            "method": true
        },
        "lines": {
            "type": String,
            "attr": "lines"
        },
        "setOpenItem": {
            "method": true
        }
    }; }
    static get style() { return "ion-list {\n  margin: 0;\n  padding: 0;\n  display: block;\n  contain: content;\n  list-style-type: none; }\n\nion-list[inset] {\n  overflow: hidden;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0); }\n\n.list-md {\n  margin: -1px 0 16px; }\n\n.list-md + .list ion-list-header {\n  margin-top: -16px; }\n\n.list-md > .input:last-child::after {\n  left: 0; }\n\n.list-md[inset] {\n  margin: 16px;\n  border-radius: 2px; }\n\n.list-md[inset] ion-item:first-child .item-md {\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  border-top-width: 0; }\n\n.list-md[inset] ion-item:last-child .item-md {\n  border-bottom-right-radius: 2px;\n  border-bottom-left-radius: 2px;\n  border-bottom-width: 0; }\n\n.list-md[inset] .item-interactive {\n  padding-left: 0;\n  padding-right: 0; }\n\n.list-md[inset] + ion-list[inset] {\n  margin-top: 0; }\n\n.list-md[inset] ion-list-header {\n  background-color: var(--ion-item-md-background-color, var(--ion-item-background-color, var(--ion-background-color, #fff))); }\n\n.list-md-lines-none .item-md,\n.list-md-lines-none .item-md .item-inner {\n  border-bottom-width: 0; }\n\n.list-md-lines-full .item-md,\n.list-md .item-md-lines-full {\n  border-bottom-width: 1px; }\n\n.list-md-lines-inset .item-md .item-inner,\n.list-md .item-md-lines-inset .item-inner {\n  border-bottom-width: 1px; }\n\n.list-md .item-md-lines-full .item-inner,\n.list-md .item-md-lines-inset {\n  border-bottom-width: 0; }"; }
    static get styleMode() { return "md"; }
}

class ListHeader {
    static get is() { return "ion-list-header"; }
    static get host() { return {
        "theme": "list-header"
    }; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        }
    }; }
    static get style() { return "ion-list-header {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 40px; }\n\n.list-header-md {\n  padding-left: 16px;\n  margin-bottom: 13px;\n  min-height: 45px;\n  font-size: 14px;\n  color: var(--ion-text-md-color-step-400, var(--ion-text-color-step-400, #666666)); }\n\n.list-header-md-primary {\n  color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n\n.list-header-md-secondary {\n  color: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n  background-color: var(--ion-color-md-secondary, var(--ion-color-secondary, #0cd1e8)); }\n\n.list-header-md-tertiary {\n  color: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n  background-color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #7044ff)); }\n\n.list-header-md-success {\n  color: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff));\n  background-color: var(--ion-color-md-success, var(--ion-color-success, #10dc60)); }\n\n.list-header-md-warning {\n  color: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #fff));\n  background-color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00)); }\n\n.list-header-md-danger {\n  color: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff));\n  background-color: var(--ion-color-md-danger, var(--ion-color-danger, #f04141)); }\n\n.list-header-md-light {\n  color: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000));\n  background-color: var(--ion-color-md-light, var(--ion-color-light, #f4f5f8)); }\n\n.list-header-md-medium {\n  color: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #fff));\n  background-color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2)); }\n\n.list-header-md-dark {\n  color: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff));\n  background-color: var(--ion-color-md-dark, var(--ion-color-dark, #222428)); }"; }
    static get styleMode() { return "md"; }
}

class NavPop {
    pop() {
        const nav = this.el.closest('ion-nav');
        if (nav) {
            return nav.pop();
        }
        return Promise.resolve(null);
    }
    static get is() { return "ion-nav-pop"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        }
    }; }
    static get listeners() { return [{
            "name": "child:click",
            "method": "pop"
        }]; }
}

class Radio {
    constructor() {
        this.inputId = `ion-rb-${radioButtonIds++}`;
        this.keyFocus = false;
        /**
         * The name of the control, which is submitted with the form data.
         */
        this.name = this.inputId;
        /*
         * If true, the user cannot interact with the radio. Defaults to `false`.
         */
        this.disabled = false;
        /**
         * If true, the radio is selected. Defaults to `false`.
         */
        this.checked = false;
    }
    componentWillLoad() {
        this.ionSelect = deferEvent(this.ionSelect);
        this.ionStyle = deferEvent(this.ionStyle);
        if (this.value === undefined) {
            this.value = this.inputId;
        }
        this.emitStyle();
    }
    componentDidLoad() {
        this.ionRadioDidLoad.emit();
        this.nativeInput.checked = this.checked;
        const parentItem = this.nativeInput.closest('ion-item');
        if (parentItem) {
            const itemLabel = parentItem.querySelector('ion-label');
            if (itemLabel) {
                itemLabel.id = this.inputId + '-lbl';
                this.nativeInput.setAttribute('aria-labelledby', itemLabel.id);
            }
        }
    }
    componentDidUnload() {
        this.ionRadioDidUnload.emit();
    }
    colorChanged() {
        this.emitStyle();
    }
    checkedChanged(isChecked) {
        if (this.nativeInput.checked !== isChecked) {
            // keep the checked value and native input `nync
            this.nativeInput.checked = isChecked;
        }
        if (isChecked) {
            this.ionSelect.emit({
                checked: true,
                value: this.value
            });
        }
        this.emitStyle();
    }
    disabledChanged(isDisabled) {
        this.nativeInput.disabled = isDisabled;
        this.emitStyle();
    }
    emitStyle() {
        this.ionStyle.emit(Object.assign({}, createThemedClasses(this.mode, this.color, 'radio'), { 'radio-checked': this.checked, 'radio-disabled': this.disabled }));
    }
    onClick() {
        this.checkedChanged(true);
    }
    onChange() {
        this.checked = true;
        this.nativeInput.focus();
    }
    onKeyUp() {
        this.keyFocus = true;
    }
    onFocus() {
        this.ionFocus.emit();
    }
    onBlur() {
        this.keyFocus = false;
        this.ionBlur.emit();
    }
    hostData() {
        return {
            'class': {
                'radio-checked': this.checked,
                'radio-disabled': this.disabled,
                'radio-key': this.keyFocus
            }
        };
    }
    render() {
        return [
            h("div", { class: "radio-icon" },
                h("div", { class: "radio-inner" })),
            h("input", { type: "radio", onClick: this.onClick.bind(this), onChange: this.onChange.bind(this), onFocus: this.onFocus.bind(this), onBlur: this.onBlur.bind(this), onKeyUp: this.onKeyUp.bind(this), id: this.inputId, name: this.name, value: this.value, disabled: this.disabled, ref: r => this.nativeInput = r })
        ];
    }
    static get is() { return "ion-radio"; }
    static get host() { return {
        "theme": "radio"
    }; }
    static get properties() { return {
        "checked": {
            "type": Boolean,
            "attr": "checked",
            "mutable": true,
            "watchCallbacks": ["checkedChanged"]
        },
        "color": {
            "type": String,
            "attr": "color",
            "watchCallbacks": ["colorChanged"]
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled",
            "watchCallbacks": ["disabledChanged"]
        },
        "keyFocus": {
            "state": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "value": {
            "type": String,
            "attr": "value",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "ionRadioDidLoad",
            "method": "ionRadioDidLoad",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionRadioDidUnload",
            "method": "ionRadioDidUnload",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionStyle",
            "method": "ionStyle",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionSelect",
            "method": "ionSelect",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
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
    static get style() { return "ion-radio {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  position: relative;\n  display: inline-block; }\n\nion-radio input {\n  left: 0;\n  top: 0;\n  margin: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n  ion-radio input:active, ion-radio input:focus {\n    outline: none; }\n\nion-radio .radio-icon {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.radio-md .radio-icon {\n  left: 0;\n  top: 0;\n  margin: 0;\n  border-radius: 50%;\n  position: relative;\n  display: block;\n  width: 16px;\n  height: 16px;\n  border-width: 2px;\n  border-style: solid;\n  border-color: var(--ion-text-md-color-step-600, var(--ion-text-color-step-600, #999999));\n  contain: layout size style; }\n\n.radio-md .radio-inner {\n  left: 2px;\n  top: 2px;\n  border-radius: 50%;\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  background-color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff));\n  -webkit-transform: scale3d(0, 0, 0);\n  transform: scale3d(0, 0, 0);\n  -webkit-transition: -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: transform 280ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1); }\n\n.radio-md.radio-checked .radio-icon {\n  border-color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n\n.radio-md.radio-checked .radio-inner {\n  -webkit-transform: scale3d(1, 1, 1);\n  transform: scale3d(1, 1, 1); }\n\n.radio-md.radio-disabled,\n.item-md.item-radio-disabled ion-label {\n  opacity: 0.3;\n  pointer-events: none; }\n\n.radio-key .radio-icon::after {\n  border-radius: 50%;\n  left: -12px;\n  top: -12px;\n  position: absolute;\n  display: block;\n  width: 36px;\n  height: 36px;\n  background: var(--ion-color-md-primary-tint, var(--ion-color-primary-tint, #4c8dff));\n  content: \"\";\n  opacity: .2; }\n\n.item-md .radio-md {\n  margin: 9px 10px 9px 0;\n  position: static;\n  display: block; }\n  .item-md .radio-md[slot=\"start\"] {\n    margin: 11px 36px 10px 4px; }\n\n.item-radio.item-md ion-label {\n  margin-left: 0; }\n\n.item-radio-checked.item-md ion-label {\n  color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n\n.item-radio-md-primary.item-radio-checked ion-label {\n  color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n\n.radio-md-primary.radio-checked .radio-icon {\n  border-color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n\n.radio-md-primary .radio-inner {\n  background-color: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n\n.item-radio-md-secondary.item-radio-checked ion-label {\n  color: var(--ion-color-md-secondary, var(--ion-color-secondary, #0cd1e8)); }\n\n.radio-md-secondary.radio-checked .radio-icon {\n  border-color: var(--ion-color-md-secondary, var(--ion-color-secondary, #0cd1e8)); }\n\n.radio-md-secondary .radio-inner {\n  background-color: var(--ion-color-md-secondary, var(--ion-color-secondary, #0cd1e8)); }\n\n.item-radio-md-tertiary.item-radio-checked ion-label {\n  color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #7044ff)); }\n\n.radio-md-tertiary.radio-checked .radio-icon {\n  border-color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #7044ff)); }\n\n.radio-md-tertiary .radio-inner {\n  background-color: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #7044ff)); }\n\n.item-radio-md-success.item-radio-checked ion-label {\n  color: var(--ion-color-md-success, var(--ion-color-success, #10dc60)); }\n\n.radio-md-success.radio-checked .radio-icon {\n  border-color: var(--ion-color-md-success, var(--ion-color-success, #10dc60)); }\n\n.radio-md-success .radio-inner {\n  background-color: var(--ion-color-md-success, var(--ion-color-success, #10dc60)); }\n\n.item-radio-md-warning.item-radio-checked ion-label {\n  color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00)); }\n\n.radio-md-warning.radio-checked .radio-icon {\n  border-color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00)); }\n\n.radio-md-warning .radio-inner {\n  background-color: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00)); }\n\n.item-radio-md-danger.item-radio-checked ion-label {\n  color: var(--ion-color-md-danger, var(--ion-color-danger, #f04141)); }\n\n.radio-md-danger.radio-checked .radio-icon {\n  border-color: var(--ion-color-md-danger, var(--ion-color-danger, #f04141)); }\n\n.radio-md-danger .radio-inner {\n  background-color: var(--ion-color-md-danger, var(--ion-color-danger, #f04141)); }\n\n.item-radio-md-light.item-radio-checked ion-label {\n  color: var(--ion-color-md-light, var(--ion-color-light, #f4f5f8)); }\n\n.radio-md-light.radio-checked .radio-icon {\n  border-color: var(--ion-color-md-light, var(--ion-color-light, #f4f5f8)); }\n\n.radio-md-light .radio-inner {\n  background-color: var(--ion-color-md-light, var(--ion-color-light, #f4f5f8)); }\n\n.item-radio-md-medium.item-radio-checked ion-label {\n  color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2)); }\n\n.radio-md-medium.radio-checked .radio-icon {\n  border-color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2)); }\n\n.radio-md-medium .radio-inner {\n  background-color: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2)); }\n\n.item-radio-md-dark.item-radio-checked ion-label {\n  color: var(--ion-color-md-dark, var(--ion-color-dark, #222428)); }\n\n.radio-md-dark.radio-checked .radio-icon {\n  border-color: var(--ion-color-md-dark, var(--ion-color-dark, #222428)); }\n\n.radio-md-dark .radio-inner {\n  background-color: var(--ion-color-md-dark, var(--ion-color-dark, #222428)); }"; }
    static get styleMode() { return "md"; }
}
let radioButtonIds = 0;

class Refresher {
    constructor() {
        this.appliedStyles = false;
        this.didStart = false;
        this.progress = 0;
        this.scrollEl = null;
        /**
         * The current state which the refresher is in. The refresher's states include:
         *
         * - `inactive` - The refresher is not being pulled down or refreshing and is currently hidden.
         * - `pulling` - The user is actively pulling down the refresher, but has not reached the point yet that if the user lets go, it'll refresh.
         * - `cancelling` - The user pulled down the refresher and let go, but did not pull down far enough to kick off the `refreshing` state. After letting go, the refresher is in the `cancelling` state while it is closing, and will go back to the `inactive` state once closed.
         * - `ready` - The user has pulled down the refresher far enough that if they let go, it'll begin the `refreshing` state.
         * - `refreshing` - The refresher is actively waiting on the async operation to end. Once the refresh handler calls `complete()` it will begin the `completing` state.
         * - `completing` - The `refreshing` state has finished and the refresher is in the process of closing itself. Once closed, the refresher will go back to the `inactive` state.
         */
        this.state = 1 /* Inactive */;
        /**
         * The minimum distance the user must pull down until the
         * refresher will go into the `refreshing` state. Defaults to `60`.
         */
        this.pullMin = 60;
        /**
         * The maximum distance of the pull until the refresher
         * will automatically go into the `refreshing` state.
         * Defaults to the result of `pullMin + 60`.
         */
        this.pullMax = this.pullMin + 60;
        // TODO: NEVER USED
        /**
         * Time it takes to close the refresher. Defaults to `280ms`.
         */
        this.closeDuration = '280ms';
        /**
         * Time it takes the refresher to to snap back to the `refreshing` state. Defaults to `280ms`.
         */
        this.snapbackDuration = '280ms';
        /**
         * If true, the refresher will be hidden. Defaults to `true`.
         */
        this.disabled = true;
    }
    componentDidLoad() {
        if (this.el.getAttribute('slot') !== 'fixed') {
            console.error('Make sure you use: <ion-refresher slot="fixed">');
            return;
        }
        const parentElement = this.el.parentElement;
        if (!parentElement) {
            console.error('ion-refresher is not attached');
            return;
        }
        this.scrollEl = parentElement.querySelector('ion-scroll');
        if (!this.scrollEl) {
            console.error('ion-refresher didn\'t attached, make sure if parent is a ion-content');
        }
    }
    componentDidUnload() {
        this.scrollEl = null;
    }
    /**
     * Call `complete()` when your async operation has completed.
     * For example, the `refreshing` state is while the app is performing
     * an asynchronous operation, such as receiving more data from an
     * AJAX request. Once the data has been received, you then call this
     * method to signify that the refreshing has completed and to close
     * the refresher. This method also changes the refresher's state from
     * `refreshing` to `completing`.
     */
    complete() {
        this.close(32 /* Completing */, '120ms');
    }
    /**
     * Changes the refresher's state from `refreshing` to `cancelling`.
     */
    cancel() {
        this.close(16 /* Cancelling */, '');
    }
    /**
     * A number representing how far down the user has pulled.
     * The number `0` represents the user hasn't pulled down at all. The
     * number `1`, and anything greater than `1`, represents that the user
     * has pulled far enough down that when they let go then the refresh will
     * happen. If they let go and the number is less than `1`, then the
     * refresh will not happen, and the content will return to it's original
     * position.
     */
    getProgress() {
        return this.progress;
    }
    canStart() {
        if (!this.scrollEl) {
            return false;
        }
        if (this.state !== 1 /* Inactive */) {
            return false;
        }
        // if the scrollTop is greater than zero then it's
        // not possible to pull the content down yet
        if (this.scrollEl.scrollTop > 0) {
            return false;
        }
        return true;
    }
    onStart() {
        this.progress = 0;
        this.state = 1 /* Inactive */;
    }
    onMove(detail) {
        if (!this.scrollEl) {
            return 0;
        }
        // this method can get called like a bazillion times per second,
        // so it's built to be as efficient as possible, and does its
        // best to do any DOM read/writes only when absolutely necessary
        // if multitouch then get out immediately
        const ev = detail.event;
        if (ev.touches && ev.touches.length > 1) {
            return 1;
        }
        // do nothing if it's actively refreshing
        // or it's in the process of closing
        // or this was never a startY
        if (this.state & 56 /* _BUSY_ */) {
            return 2;
        }
        const deltaY = detail.deltaY;
        // don't bother if they're scrolling up
        // and have not already started dragging
        if (deltaY <= 0) {
            // the current Y is higher than the starting Y
            // so they scrolled up enough to be ignored
            this.progress = 0;
            this.state = 1 /* Inactive */;
            if (this.appliedStyles) {
                // reset the styles only if they were applied
                this.setCss(0, '', false, '');
                return 5;
            }
            return 6;
        }
        if (this.state === 1 /* Inactive */) {
            // this refresh is not already actively pulling down
            // get the content's scrollTop
            const scrollHostScrollTop = this.scrollEl.scrollTop;
            // if the scrollTop is greater than zero then it's
            // not possible to pull the content down yet
            if (scrollHostScrollTop > 0) {
                this.progress = 0;
                return 7;
            }
            // content scrolled all the way to the top, and dragging down
            this.state = 2 /* Pulling */;
        }
        // prevent native scroll events
        console.log('preventDefault');
        ev.preventDefault();
        // the refresher is actively pulling at this point
        // move the scroll element within the content element
        this.setCss(deltaY, '0ms', true, '');
        if (!deltaY) {
            // don't continue if there's no delta yet
            this.progress = 0;
            return 8;
        }
        const pullMin = this.pullMin;
        // set pull progress
        this.progress = deltaY / pullMin;
        // emit "start" if it hasn't started yet
        if (!this.didStart) {
            this.didStart = true;
            this.ionStart.emit();
        }
        // emit "pulling" on every move
        this.ionPull.emit();
        // do nothing if the delta is less than the pull threshold
        if (deltaY < pullMin) {
            // ensure it stays in the pulling state, cuz its not ready yet
            this.state = 2 /* Pulling */;
            return 2;
        }
        if (deltaY > this.pullMax) {
            // they pulled farther than the max, so kick off the refresh
            this.beginRefresh();
            return 3;
        }
        // pulled farther than the pull min!!
        // it is now in the `ready` state!!
        // if they let go then it'll refresh, kerpow!!
        this.state = 4 /* Ready */;
        return 4;
    }
    onEnd() {
        // only run in a zone when absolutely necessary
        if (this.state === 4 /* Ready */) {
            // they pulled down far enough, so it's ready to refresh
            this.beginRefresh();
        }
        else if (this.state === 2 /* Pulling */) {
            // they were pulling down, but didn't pull down far enough
            // set the content back to it's original location
            // and close the refresher
            // set that the refresh is actively cancelling
            this.cancel();
        }
    }
    beginRefresh() {
        // assumes we're already back in a zone
        // they pulled down far enough, so it's ready to refresh
        this.state = 8 /* Refreshing */;
        // place the content in a hangout position while it thinks
        this.setCss(this.pullMin, this.snapbackDuration, true, '');
        // emit "refresh" because it was pulled down far enough
        // and they let go to begin refreshing
        this.ionRefresh.emit();
    }
    close(state, delay) {
        // create fallback timer incase something goes wrong with transitionEnd event
        setTimeout(() => {
            this.state = 1 /* Inactive */;
            this.progress = 0;
            this.didStart = false;
            this.setCss(0, '0ms', false, '');
        }, 600);
        // reset set the styles on the scroll element
        // set that the refresh is actively cancelling/completing
        this.state = state;
        this.setCss(0, '', true, delay);
        // TODO: stop gesture
    }
    setCss(y, duration, overflowVisible, delay) {
        this.appliedStyles = (y > 0);
        this.queue.write(() => {
            if (this.scrollEl) {
                const style = this.scrollEl.style;
                style.transform = ((y > 0) ? 'translateY(' + y + 'px) translateZ(0px)' : 'translateZ(0px)');
                style.transitionDuration = duration;
                style.transitionDelay = delay;
                style.overflow = (overflowVisible ? 'hidden' : '');
            }
        });
    }
    hostData() {
        return {
            class: {
                'refresher-active': this.state !== 1 /* Inactive */,
                'refresher-pulling': this.state === 2 /* Pulling */,
                'refresher-ready': this.state === 4 /* Ready */,
                'refresher-refreshing': this.state === 8 /* Refreshing */,
                'refresher-cancelling': this.state === 16 /* Cancelling */,
                'refresher-completing': this.state === 32 /* Completing */
            }
        };
    }
    render() {
        return h("ion-gesture", { canStart: this.canStart.bind(this), onStart: this.onStart.bind(this), onMove: this.onMove.bind(this), onEnd: this.onEnd.bind(this), gestureName: "refresher", gesturePriority: 10, passive: false, direction: "y", threshold: 5, attachTo: this.el.closest('ion-content'), disabled: this.disabled },
            h("slot", null));
    }
    static get is() { return "ion-refresher"; }
    static get host() { return {
        "theme": "refresher"
    }; }
    static get properties() { return {
        "cancel": {
            "method": true
        },
        "closeDuration": {
            "type": String,
            "attr": "close-duration"
        },
        "complete": {
            "method": true
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "el": {
            "elementRef": true
        },
        "getProgress": {
            "method": true
        },
        "pullMax": {
            "type": Number,
            "attr": "pull-max"
        },
        "pullMin": {
            "type": Number,
            "attr": "pull-min"
        },
        "queue": {
            "context": "queue"
        },
        "snapbackDuration": {
            "type": String,
            "attr": "snapback-duration"
        },
        "state": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "ionRefresh",
            "method": "ionRefresh",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionPull",
            "method": "ionPull",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "ionStart",
            "method": "ionStart",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "ion-refresher {\n  left: 0;\n  top: 0;\n  position: absolute;\n  top: 0;\n  z-index: 0;\n  display: none;\n  width: 100%;\n  height: 60px; }\n  ion-refresher.refresher-active {\n    display: block; }\n\nion-refresher-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  height: 100%; }\n\n.refresher-pulling,\n.refresher-refreshing {\n  display: none;\n  width: 100%; }\n\n.refresher-pulling-icon,\n.refresher-refreshing-icon {\n  text-align: center;\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  font-size: 30px;\n  -webkit-transition: 200ms;\n  transition: 200ms; }\n\n.refresher-pulling-text,\n.refresher-refreshing-text {\n  text-align: center;\n  font-size: 16px; }\n\n.refresher-pulling ion-refresher-content .refresher-pulling {\n  display: block; }\n\n.refresher-ready ion-refresher-content .refresher-pulling {\n  display: block; }\n\n.refresher-ready ion-refresher-content .refresher-pulling-icon {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.refresher-refreshing ion-refresher-content .refresher-refreshing {\n  display: block; }\n\n.refresher-cancelling ion-refresher-content .refresher-pulling {\n  display: block; }\n\n.refresher-cancelling ion-refresher-content .refresher-pulling-icon {\n  -webkit-transform: scale(0);\n  transform: scale(0); }\n\n.refresher-completing ion-refresher-content .refresher-refreshing {\n  display: block; }\n\n.refresher-completing ion-refresher-content .refresher-refreshing-icon {\n  -webkit-transform: scale(0);\n  transform: scale(0); }\n\n.refresher-md .refresher-pulling-icon,\n.refresher-md .refresher-refreshing-icon {\n  color: var(--ion-text-md-color, var(--ion-text-color, #000)); }\n\n.refresher-md .refresher-pulling-text,\n.refresher-md .refresher-refreshing-text {\n  color: var(--ion-text-md-color, var(--ion-text-color, #000)); }\n\n.refresher-md .refresher-refreshing .spinner-lines-md line,\n.refresher-md .refresher-refreshing .spinner-lines-small-md line,\n.refresher-md .refresher-refreshing .spinner-crescent circle {\n  stroke: var(--ion-text-md-color, var(--ion-text-color, #000)); }\n\n.refresher-md .refresher-refreshing .spinner-bubbles circle,\n.refresher-md .refresher-refreshing .spinner-circles circle,\n.refresher-md .refresher-refreshing .spinner-dots circle {\n  fill: var(--ion-text-md-color, var(--ion-text-color, #000)); }"; }
    static get styleMode() { return "md"; }
}

class RefresherContent {
    componentDidLoad() {
        if (!this.pullingIcon) {
            this.pullingIcon = this.config.get('ionPullIcon', 'arrow-down');
        }
        if (!this.refreshingSpinner) {
            this.refreshingSpinner = this.config.get('ionRefreshingSpinner', this.config.get('spinner', 'lines'));
        }
    }
    render() {
        return [
            h("div", { class: "refresher-pulling" },
                this.pullingIcon &&
                    h("div", { class: "refresher-pulling-icon" },
                        h("ion-icon", { name: this.pullingIcon })),
                this.pullingText &&
                    h("div", { class: "refresher-pulling-text", innerHTML: this.pullingText })),
            h("div", { class: "refresher-refreshing" },
                this.refreshingSpinner &&
                    h("div", { class: "refresher-refreshing-icon" },
                        h("ion-spinner", { name: this.refreshingSpinner })),
                this.refreshingText &&
                    h("div", { class: "refresher-refreshing-text", innerHTML: this.refreshingText }))
        ];
    }
    static get is() { return "ion-refresher-content"; }
    static get properties() { return {
        "config": {
            "context": "config"
        },
        "pullingIcon": {
            "type": String,
            "attr": "pulling-icon",
            "mutable": true
        },
        "pullingText": {
            "type": String,
            "attr": "pulling-text"
        },
        "refreshingSpinner": {
            "type": String,
            "attr": "refreshing-spinner",
            "mutable": true
        },
        "refreshingText": {
            "type": String,
            "attr": "refreshing-text"
        }
    }; }
}

const SPINNERS = {
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = 'rotate(' + (30 * index + (index < 6 ? 180 : -180)) + 'deg)';
            const animationDelay = -(dur - ((dur / total) * index)) + 'ms';
            return {
                y1: 17,
                y2: 29,
                style: {
                    transform: transform,
                    webkitTransform: transform,
                    animationDelay: animationDelay,
                    webkitAnimationDelay: animationDelay
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = 'rotate(' + (30 * index + (index < 6 ? 180 : -180)) + 'deg)';
            const animationDelay = -(dur - ((dur / total) * index)) + 'ms';
            return {
                y1: 12,
                y2: 20,
                style: {
                    transform: transform,
                    webkitTransform: transform,
                    animationDelay: animationDelay,
                    webkitAnimationDelay: animationDelay
                }
            };
        }
    },
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = -(dur - ((dur / total) * index)) + 'ms';
            return {
                r: 5,
                style: {
                    top: (9 * Math.sin(2 * Math.PI * index / total)) + 'px',
                    left: (9 * Math.cos(2 * Math.PI * index / total)) + 'px',
                    animationDelay: animationDelay,
                    webkitAnimationDelay: animationDelay
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const animationDelay = -(dur - ((dur / total) * index)) + 'ms';
            return {
                r: 5,
                style: {
                    top: (9 * Math.sin(2 * Math.PI * index / total)) + 'px',
                    left: (9 * Math.cos(2 * Math.PI * index / total)) + 'px',
                    animationDelay: animationDelay,
                    webkitAnimationDelay: animationDelay
                }
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (dur, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    left: (9 - (9 * index)) + 'px',
                    animationDelay: animationDelay,
                    webkitAnimationDelay: animationDelay
                }
            };
        }
    }
};

class Spinner {
    constructor() {
        /**
         * If true, the spinner's animation will be paused. Defaults to `false`.
         */
        this.paused = false;
    }
    getName() {
        let name = this.name || this.config.get('spinner');
        if (!name) {
            // fallback
            if (this.mode === 'md') {
                return 'crescent';
            }
            else {
                return 'lines';
            }
        }
        if (name === 'ios') {
            // deprecation warning, renamed in v4
            console.warn(`spinner "ios" has been renamed to "lines"`);
            name = 'lines';
        }
        else if (name === 'ios-small') {
            // deprecation warning, renamed in v4
            console.warn(`spinner "ios-small" has been renamed to "lines-small"`);
            name = 'lines-small';
        }
        return name;
    }
    hostData() {
        const themedClasses = createThemedClasses(this.mode, this.color, `spinner spinner-${this.getName()}`);
        const spinnerClasses = Object.assign({}, themedClasses, { 'spinner-paused': this.paused });
        return {
            class: spinnerClasses
        };
    }
    render() {
        const name = this.getName();
        const spinner = SPINNERS[name] || SPINNERS['lines'];
        const duration = (typeof this.duration === 'number' && this.duration > 10 ? this.duration : spinner.dur);
        const svgs = [];
        if (spinner.circles) {
            for (let i = 0; i < spinner.circles; i++) {
                svgs.push(buildCircle(spinner, duration, i, spinner.circles));
            }
        }
        else if (spinner.lines) {
            for (let i = 0; i < spinner.lines; i++) {
                svgs.push(buildLine(spinner, duration, i, spinner.lines));
            }
        }
        return svgs;
    }
    static get is() { return "ion-spinner"; }
    static get host() { return {
        "theme": "spinner"
    }; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "config": {
            "context": "config"
        },
        "duration": {
            "type": Number,
            "attr": "duration"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "paused": {
            "type": Boolean,
            "attr": "paused"
        }
    }; }
    static get style() { return "ion-spinner {\n  position: relative;\n  display: inline-block;\n  width: 28px;\n  height: 28px; }\n\nion-spinner svg {\n  left: 0;\n  top: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0); }\n\nion-spinner.spinner-paused svg {\n  -webkit-animation-play-state: paused;\n  animation-play-state: paused; }\n\n.spinner-lines line,\n.spinner-lines-small line {\n  stroke-width: 4px;\n  stroke-linecap: round; }\n\n.spinner-lines svg,\n.spinner-lines-small svg {\n  -webkit-animation: spinner-fade-out 1s linear infinite;\n  animation: spinner-fade-out 1s linear infinite; }\n\n.spinner-bubbles svg {\n  -webkit-animation: spinner-scale-out 1s linear infinite;\n  animation: spinner-scale-out 1s linear infinite; }\n\n.spinner-circles svg {\n  -webkit-animation: spinner-fade-out 1s linear infinite;\n  animation: spinner-fade-out 1s linear infinite; }\n\n.spinner-crescent circle {\n  fill: transparent;\n  stroke-width: 4px;\n  stroke-dasharray: 128px;\n  stroke-dashoffset: 82px; }\n\n.spinner-crescent svg {\n  -webkit-animation: spinner-rotate 1s linear infinite;\n  animation: spinner-rotate 1s linear infinite; }\n\n.spinner-dots circle {\n  stroke-width: 0; }\n\n.spinner-dots svg {\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  -webkit-animation: spinner-dots 1s linear infinite;\n  animation: spinner-dots 1s linear infinite; }\n\n\@-webkit-keyframes spinner-fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n\@keyframes spinner-fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n\@-webkit-keyframes spinner-scale-out {\n  0% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1); }\n  100% {\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0); } }\n\n\@keyframes spinner-scale-out {\n  0% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1); }\n  100% {\n    -webkit-transform: scale(0, 0);\n    transform: scale(0, 0); } }\n\n\@-webkit-keyframes spinner-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n\@keyframes spinner-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n\n\@-webkit-keyframes spinner-dots {\n  0% {\n    opacity: .9;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1); }\n  50% {\n    opacity: .3;\n    -webkit-transform: scale(0.4, 0.4);\n    transform: scale(0.4, 0.4); }\n  100% {\n    opacity: .9;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1); } }\n\n\@keyframes spinner-dots {\n  0% {\n    opacity: .9;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1); }\n  50% {\n    opacity: .3;\n    -webkit-transform: scale(0.4, 0.4);\n    transform: scale(0.4, 0.4); }\n  100% {\n    opacity: .9;\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1); } }\n\n.spinner-lines-md line,\n.spinner-lines-small-md line {\n  stroke: var(--ion-text-md-color-step-400, var(--ion-text-color-step-400, #666666)); }\n\n.spinner-bubbles-md circle {\n  fill: var(--ion-text-md-color, var(--ion-text-color, #000)); }\n\n.spinner-circles-md circle {\n  fill: var(--ion-text-md-color-step-400, var(--ion-text-color-step-400, #666666)); }\n\n.spinner-crescent-md circle {\n  stroke: var(--ion-text-md-color, var(--ion-text-color, #000)); }\n\n.spinner-dots-md circle {\n  fill: var(--ion-text-md-color-step-300, var(--ion-text-color-step-300, #4d4d4d)); }\n\n.spinner-md-primary.spinner-lines line,\n.spinner-md-primary.spinner-lines-small line,\n.spinner-md-primary.spinner-crescent circle {\n  stroke: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n\n.spinner-md-primary.spinner-bubbles circle,\n.spinner-md-primary.spinner-circles circle,\n.spinner-md-primary.spinner-dots circle {\n  fill: var(--ion-color-md-primary, var(--ion-color-primary, #3880ff)); }\n\n.spinner-md-secondary.spinner-lines line,\n.spinner-md-secondary.spinner-lines-small line,\n.spinner-md-secondary.spinner-crescent circle {\n  stroke: var(--ion-color-md-secondary, var(--ion-color-secondary, #0cd1e8)); }\n\n.spinner-md-secondary.spinner-bubbles circle,\n.spinner-md-secondary.spinner-circles circle,\n.spinner-md-secondary.spinner-dots circle {\n  fill: var(--ion-color-md-secondary, var(--ion-color-secondary, #0cd1e8)); }\n\n.spinner-md-tertiary.spinner-lines line,\n.spinner-md-tertiary.spinner-lines-small line,\n.spinner-md-tertiary.spinner-crescent circle {\n  stroke: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #7044ff)); }\n\n.spinner-md-tertiary.spinner-bubbles circle,\n.spinner-md-tertiary.spinner-circles circle,\n.spinner-md-tertiary.spinner-dots circle {\n  fill: var(--ion-color-md-tertiary, var(--ion-color-tertiary, #7044ff)); }\n\n.spinner-md-success.spinner-lines line,\n.spinner-md-success.spinner-lines-small line,\n.spinner-md-success.spinner-crescent circle {\n  stroke: var(--ion-color-md-success, var(--ion-color-success, #10dc60)); }\n\n.spinner-md-success.spinner-bubbles circle,\n.spinner-md-success.spinner-circles circle,\n.spinner-md-success.spinner-dots circle {\n  fill: var(--ion-color-md-success, var(--ion-color-success, #10dc60)); }\n\n.spinner-md-warning.spinner-lines line,\n.spinner-md-warning.spinner-lines-small line,\n.spinner-md-warning.spinner-crescent circle {\n  stroke: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00)); }\n\n.spinner-md-warning.spinner-bubbles circle,\n.spinner-md-warning.spinner-circles circle,\n.spinner-md-warning.spinner-dots circle {\n  fill: var(--ion-color-md-warning, var(--ion-color-warning, #ffce00)); }\n\n.spinner-md-danger.spinner-lines line,\n.spinner-md-danger.spinner-lines-small line,\n.spinner-md-danger.spinner-crescent circle {\n  stroke: var(--ion-color-md-danger, var(--ion-color-danger, #f04141)); }\n\n.spinner-md-danger.spinner-bubbles circle,\n.spinner-md-danger.spinner-circles circle,\n.spinner-md-danger.spinner-dots circle {\n  fill: var(--ion-color-md-danger, var(--ion-color-danger, #f04141)); }\n\n.spinner-md-light.spinner-lines line,\n.spinner-md-light.spinner-lines-small line,\n.spinner-md-light.spinner-crescent circle {\n  stroke: var(--ion-color-md-light, var(--ion-color-light, #f4f5f8)); }\n\n.spinner-md-light.spinner-bubbles circle,\n.spinner-md-light.spinner-circles circle,\n.spinner-md-light.spinner-dots circle {\n  fill: var(--ion-color-md-light, var(--ion-color-light, #f4f5f8)); }\n\n.spinner-md-medium.spinner-lines line,\n.spinner-md-medium.spinner-lines-small line,\n.spinner-md-medium.spinner-crescent circle {\n  stroke: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2)); }\n\n.spinner-md-medium.spinner-bubbles circle,\n.spinner-md-medium.spinner-circles circle,\n.spinner-md-medium.spinner-dots circle {\n  fill: var(--ion-color-md-medium, var(--ion-color-medium, #989aa2)); }\n\n.spinner-md-dark.spinner-lines line,\n.spinner-md-dark.spinner-lines-small line,\n.spinner-md-dark.spinner-crescent circle {\n  stroke: var(--ion-color-md-dark, var(--ion-color-dark, #222428)); }\n\n.spinner-md-dark.spinner-bubbles circle,\n.spinner-md-dark.spinner-circles circle,\n.spinner-md-dark.spinner-dots circle {\n  fill: var(--ion-color-md-dark, var(--ion-color-dark, #222428)); }"; }
    static get styleMode() { return "md"; }
}
function buildCircle(spinner, duration, index, total) {
    const data = spinner.fn(duration, index, total);
    data.style.animationDuration = duration + 'ms';
    return (h("svg", { viewBox: "0 0 64 64", style: data.style },
        h("circle", { transform: "translate(32,32)", r: data.r })));
}
function buildLine(spinner, duration, index, total) {
    const data = spinner.fn(duration, index, total);
    data.style.animationDuration = duration + 'ms';
    return (h("svg", { viewBox: "0 0 64 64", style: data.style },
        h("line", { transform: "translate(32,32)", y1: data.y1, y2: data.y2 })));
}

class ToolbarTitle {
    render() {
        const themedClasses = createThemedClasses(this.mode, this.color, 'toolbar-title');
        return [
            h("div", { class: themedClasses },
                h("slot", null))
        ];
    }
    static get is() { return "ion-title"; }
    static get host() { return {
        "theme": "title"
    }; }
    static get properties() { return {
        "color": {
            "type": String,
            "attr": "color"
        },
        "mode": {
            "type": String,
            "attr": "mode"
        }
    }; }
    static get style() { return "ion-title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0); }\n\n.toolbar-title {\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.toolbar-title-md {\n  padding: 0 12px;\n  font-size: 20px;\n  font-weight: 500;\n  color: var(--ion-toolbar-md-text-color, var(--ion-toolbar-text-color, #424242)); }\n\n.toolbar-primary .toolbar-title-md {\n  color: var(--ion-color-md-primary-contrast, var(--ion-color-primary-contrast, #fff)); }\n\n.toolbar-secondary .toolbar-title-md {\n  color: var(--ion-color-md-secondary-contrast, var(--ion-color-secondary-contrast, #fff)); }\n\n.toolbar-tertiary .toolbar-title-md {\n  color: var(--ion-color-md-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff)); }\n\n.toolbar-success .toolbar-title-md {\n  color: var(--ion-color-md-success-contrast, var(--ion-color-success-contrast, #fff)); }\n\n.toolbar-warning .toolbar-title-md {\n  color: var(--ion-color-md-warning-contrast, var(--ion-color-warning-contrast, #fff)); }\n\n.toolbar-danger .toolbar-title-md {\n  color: var(--ion-color-md-danger-contrast, var(--ion-color-danger-contrast, #fff)); }\n\n.toolbar-light .toolbar-title-md {\n  color: var(--ion-color-md-light-contrast, var(--ion-color-light-contrast, #000)); }\n\n.toolbar-medium .toolbar-title-md {\n  color: var(--ion-color-md-medium-contrast, var(--ion-color-medium-contrast, #fff)); }\n\n.toolbar-dark .toolbar-title-md {\n  color: var(--ion-color-md-dark-contrast, var(--ion-color-dark-contrast, #fff)); }"; }
    static get styleMode() { return "md"; }
}

export { AppBalanceItem as AppBalanceitem, AppCryptoIcon as AppCryptoicon, Input as IonInput, ItemDivider as IonItemDivider, List as IonList, ListHeader as IonListHeader, NavPop as IonNavPop, Radio as IonRadio, Refresher as IonRefresher, RefresherContent as IonRefresherContent, Spinner as IonSpinner, ToolbarTitle as IonTitle };
