/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as numeral } from './chunk-374e99fd.js';
import { a as CURRENCYSERVICE, e as TRADESERVICE } from './chunk-6a09bead.js';
import { a as highstock } from './chunk-09df4f05.js';
import { c as debounceEvent, d as deferEvent } from './chunk-63df273d.js';
import { a as createThemedClasses, b as getElementClassMap } from './chunk-ea7ac2d5.js';
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

class AppOhlc {
    constructor() {
        this.timeFrame = '1h';
        this.isLoading = true;
    }
    changeAltLine() {
        this.chart.series[1].color = +this.curPrice > +this.altPrice ? '#10dc60' : '#f53d3d';
        this.chart.series[1].setData(this.ohlcData.map((d) => {
            return [d[0], this.altPrice];
        }));
    }
    changeSymbol() {
        this.isLoading = true;
        TRADESERVICE.getOhlc(this.exchangeId, this.symbol, this.timeFrame)
            .then((response) => {
            this.ohlcData = response.data;
            this.chart.series[0].setData(response.data);
            this.chart.series[1].color = +this.curPrice > +this.altPrice ? '#10dc60' : '#f53d3d';
            this.chart.series[1].setData(this.ohlcData.map((d) => {
                return [d[0], this.altPrice];
            }));
            if (this.curPrice) {
                this.chart.series[2].setData(this.ohlcData.map((d) => {
                    return [d[0], this.curPrice];
                }));
            }
            this.isLoading = false;
        })
            .catch(() => {
            this.isLoading = false;
            window.alert(`Couldn't get chart data`);
        });
    }
    setTimeFrame(timeFrame) {
        this.isLoading = true;
        this.timeFrame = timeFrame;
        TRADESERVICE.getOhlc(this.exchangeId, this.symbol, timeFrame)
            .then((response) => {
            this.ohlcData = response.data;
            this.chart.series[0].setData(response.data);
            this.chart.series[1].color = +this.curPrice > +this.altPrice ? '#10dc60' : '#f53d3d';
            this.chart.series[1].setData(this.ohlcData.map((d) => {
                return [d[0], this.altPrice];
            }));
            if (this.curPrice) {
                this.chart.series[2].setData(this.ohlcData.map((d) => {
                    return [d[0], this.curPrice];
                }));
            }
            this.isLoading = false;
        })
            .catch(() => {
            this.isLoading = false;
            window.alert(`Couldn't get chart data`);
        });
    }
    componentDidLoad() {
        this.chart = highstock.stockChart('ohlc', {
            title: {
                text: ``,
            },
            rangeSelector: {
                enabled: false,
                inputEnabled: false,
            },
            navigator: {
                enabled: false,
            },
            scrollbar: {
                enabled: false,
            },
            plotOptions: {
                line: {
                    dashStyle: 'Solid',
                    lineWidth: 1,
                },
            },
            series: [
                {
                    name: `${this.exchangeId} - ${this.symbol}`,
                    type: 'candlestick',
                    data: [],
                },
                {
                    name: 'Open Price',
                    type: 'line',
                    data: [],
                },
                {
                    name: 'Last Price',
                    type: 'line',
                    data: [],
                    color: '#000',
                },
            ],
        });
    }
    render() {
        return [
            h("ion-segment", { color: "dark", onIonChange: (e) => this.setTimeFrame(e.detail.value) },
                h("ion-segment-button", { value: "1m", checked: this.timeFrame === '1m' }, "1 hour"),
                h("ion-segment-button", { value: "1h", checked: this.timeFrame === '1h' }, "1 day"),
                h("ion-segment-button", { value: "1d", checked: this.timeFrame === '1d' }, "1 week")),
            h("div", { id: "ohlc", style: { height: '200px', display: this.isLoading ? 'none' : 'block' } }),
            h("div", { style: { height: '200px', display: !this.isLoading ? 'none' : 'block' }, padding: true }, "Loading chart..."),
            h("div", { "padding-left": true, "padding-right": true },
                h("ion-button", { size: "small", color: "dark", fill: "outline", expand: "block", href: `/pair/${this.exchangeId}/${this.symbol}` },
                    h("ion-icon", { name: "stats", "margin-right": true }),
                    "Open Tradingview Chart")),
        ];
    }
    static get is() { return "app-ohlc"; }
    static get properties() { return {
        "altPrice": {
            "type": Number,
            "attr": "alt-price",
            "watchCallbacks": ["changeAltLine"]
        },
        "curPrice": {
            "type": Number,
            "attr": "cur-price"
        },
        "exchangeId": {
            "type": String,
            "attr": "exchange-id"
        },
        "isLoading": {
            "state": true
        },
        "symbol": {
            "type": String,
            "attr": "symbol",
            "watchCallbacks": ["changeSymbol"]
        },
        "timeFrame": {
            "state": true
        }
    }; }
    static get style() { return ".highcharts-point-up {\n  fill: #10dc60;\n}\n.highcharts-point-down {\n  fill: #f53d3d;\n}"; }
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

export { AppBalanceItem as AppBalanceitem, AppCryptoIcon as AppCryptoicon, AppOhlc, Input as IonInput, ItemDivider as IonItemDivider, List as IonList, ListHeader as IonListHeader, NavPop as IonNavPop, Radio as IonRadio, Segment as IonSegment, SegmentButton as IonSegmentButton, ToolbarTitle as IonTitle };
