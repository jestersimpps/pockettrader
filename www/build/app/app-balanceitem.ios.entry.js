/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as numeral } from './chunk-60e5018c.js';
import { a as CURRENCYSERVICE, e as TRADESERVICE } from './chunk-811498d8.js';
import { a as highstock } from './chunk-0f8bcb1f.js';
import { b as debounceEvent, c as deferEvent, d as renderHiddenInput, j as createColorClasses, l as hostContext, m as createThemedClasses } from './chunk-cb94efc7.js';
import './chunk-917ac8f0.js';
import './chunk-7affb05f.js';

class AppBalanceItem {
    render() {
        return [
            // TODO: if exchangeid == null, pick one
            this.exchangeId === null ? (h("ion-item", { lines: "full" },
                h("ion-grid", { fixed: true },
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
                h("ion-grid", { fixed: true },
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
            h("div", { style: { height: '200px', display: !this.isLoading ? 'none' : 'block' } }, "Loading chart..."),
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
        this.inputId = `ion-input-${inputIds++}`;
        this.didBlurAfterEdit = false;
        this.hasFocus = false;
        this.autocapitalize = "none";
        this.autocomplete = "off";
        this.autocorrect = "off";
        this.autofocus = false;
        this.clearInput = false;
        this.debounce = 0;
        this.disabled = false;
        this.name = this.inputId;
        this.readonly = false;
        this.required = false;
        this.spellcheck = false;
        this.type = "text";
        this.value = "";
        this.onInput = (ev) => {
            const input = ev.target;
            if (input) {
                this.value = input.value || "";
            }
            this.ionInput.emit(ev);
        };
        this.onBlur = () => {
            this.hasFocus = false;
            this.focusChanged();
            this.emitStyle();
            this.ionBlur.emit();
        };
        this.onFocus = () => {
            this.hasFocus = true;
            this.focusChanged();
            this.emitStyle();
            this.ionFocus.emit();
        };
        this.onKeydown = () => {
            if (this.clearOnEdit) {
                if (this.didBlurAfterEdit && this.hasValue()) {
                    this.clearTextInput();
                }
                this.didBlurAfterEdit = false;
            }
        };
        this.clearTextInput = () => {
            this.value = "";
        };
    }
    debounceChanged() {
        this.ionChange = debounceEvent(this.ionChange, this.debounce);
    }
    disabledChanged() {
        this.emitStyle();
    }
    valueChanged() {
        const inputEl = this.nativeInput;
        const value = this.getValue();
        if (inputEl && inputEl.value !== value) {
            inputEl.value = value;
        }
        this.emitStyle();
        this.ionChange.emit({ value });
    }
    componentWillLoad() {
        if (this.clearOnEdit === undefined && this.type === "password") {
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
    setFocus() {
        if (this.nativeInput) {
            this.nativeInput.focus();
        }
    }
    getValue() {
        return this.value || "";
    }
    emitStyle() {
        this.ionStyle.emit({
            "interactive": true,
            "input": true,
            "has-value": this.hasValue(),
            "has-focus": this.hasFocus,
            "interactive-disabled": this.disabled,
        });
    }
    focusChanged() {
        if (this.clearOnEdit && !this.hasFocus && this.hasValue()) {
            this.didBlurAfterEdit = true;
        }
    }
    hasValue() {
        return this.getValue().length > 0;
    }
    hostData() {
        return {
            class: Object.assign({}, createColorClasses(this.color), { "in-item": hostContext("ion-item", this.el), "has-value": this.hasValue(), "has-focus": this.hasFocus })
        };
    }
    render() {
        renderHiddenInput(this.el, this.name, this.getValue(), this.disabled);
        return [
            h("input", { ref: input => this.nativeInput = input, "aria-disabled": this.disabled ? "true" : null, accept: this.accept, autoCapitalize: this.autocapitalize, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, autoFocus: this.autofocus, class: "native-input", disabled: this.disabled, inputMode: this.inputmode, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, multiple: this.multiple, name: this.name, pattern: this.pattern, placeholder: this.placeholder, results: this.results, readOnly: this.readonly, required: this.required, spellCheck: this.spellcheck, step: this.step, size: this.size, type: this.type, value: this.getValue(), onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeydown }),
            h("slot", null),
            (this.clearInput && !this.readonly && !this.disabled) && h("button", { type: "button", class: "input-clear-icon", tabindex: "-1", onTouchStart: this.clearTextInput, onMouseDown: this.clearTextInput })
        ];
    }
    static get is() { return "ion-input"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
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
            "color": {
                "type": String,
                "attr": "color"
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
            "hasFocus": {
                "state": true
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
            "mode": {
                "type": String,
                "attr": "mode"
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
            "setFocus": {
                "method": true
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
        };
    }
    static get events() {
        return [{
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
            }];
    }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the input\n   * \@prop --color: Color of the input text\n   * \@prop --padding-top: Top padding of the input\n   * \@prop --padding-end: End padding of the input\n   * \@prop --padding-bottom: Bottom padding of the input\n   * \@prop --padding-start: Start padding of the input\n   * \@prop --placeholder-color: Color of the input placeholder text\n   * \@prop --placeholder-font-style: Font style of the input placeholder text\n   * \@prop --placeholder-font-weight: Font weight of the input placeholder text\n   * \@prop --placeholder-opacity: Opacity of the input placeholder text\n   */\n  --placeholder-color: currentColor;\n  --placeholder-font-style: inherit;\n  --placeholder-font-weight: inherit;\n  --placeholder-opacity: .5;\n  --padding-top: 0;\n  --padding-end: 0;\n  --padding-bottom: 0;\n  --padding-start: 0;\n  --background: transparent;\n  --color: inherit;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 100%;\n  background: var(--background);\n  color: var(--color);\n  /* stylelint-disable */\n  /* TODO: find a better solution in padding.css, that does not require !important, */\n  padding: 0 !important;\n  /* stylelint-enable */\n  font-family: var(--ion-font-family, inherit); }\n\n:host(.ion-color) {\n  color: var(--ion-color-base); }\n\n.native-input {\n  border-radius: var(--border-radius);\n  padding: var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  display: inline-block;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  width: 100%;\n  border: 0;\n  outline: none;\n  background: transparent;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n  .native-input::-webkit-input-placeholder {\n    color: var(--placeholder-color);\n    font-family: inherit;\n    font-style: var(--placeholder-font-style);\n    font-weight: var(--placeholder-font-weight);\n    opacity: var(--placeholder-opacity); }\n  .native-input:-ms-input-placeholder {\n    color: var(--placeholder-color);\n    font-family: inherit;\n    font-style: var(--placeholder-font-style);\n    font-weight: var(--placeholder-font-weight);\n    opacity: var(--placeholder-opacity); }\n  .native-input::-ms-input-placeholder {\n    color: var(--placeholder-color);\n    font-family: inherit;\n    font-style: var(--placeholder-font-style);\n    font-weight: var(--placeholder-font-weight);\n    opacity: var(--placeholder-opacity); }\n  .native-input::placeholder {\n    color: var(--placeholder-color);\n    font-family: inherit;\n    font-style: var(--placeholder-font-style);\n    font-weight: var(--placeholder-font-weight);\n    opacity: var(--placeholder-opacity); }\n  .native-input:-webkit-autofill {\n    background-color: transparent; }\n\n.native-input[disabled] {\n  opacity: .4; }\n\n.input-cover {\n  left: 0;\n  top: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%; }\n\n:host([disabled]) .input-cover {\n  pointer-events: none; }\n\n.input-clear-icon {\n  margin: 0;\n  padding: 0;\n  background-position: center;\n  border: 0;\n  outline: none;\n  background-color: transparent;\n  background-repeat: no-repeat;\n  visibility: hidden;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n:host(.has-focus.has-value) .input-clear-icon {\n  visibility: visible; }\n\n:host(.has-focus) .input-cover {\n  display: none; }\n\n:host(.has-focus) {\n  pointer-events: none; }\n\n:host(.has-focus) input,\n:host(.has-focus) a,\n:host(.has-focus) button {\n  pointer-events: auto; }\n\n:host {\n  --padding-top: 10px;\n  --padding-end: 8px;\n  --padding-bottom: 10px;\n  --padding-start: 0;\n  font-size: inherit; }\n\n.input-clear-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-text-color-step-400,%20%23666666)'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");\n  width: 30px;\n  height: 30px;\n  background-size: 18px; }"; }
    static get styleMode() { return "ios"; }
}
let inputIds = 0;

class ItemDivider {
    componentDidLoad() {
        Array.from(this.el.querySelectorAll("ion-button")).forEach(button => {
            if (!button.size) {
                button.size = "small";
            }
        });
    }
    hostData() {
        return {
            class: createColorClasses(this.color)
        };
    }
    render() {
        return [
            h("slot", { name: "start" }),
            h("div", { class: "item-divider-inner" }, h("div", { class: "item-divider-wrapper" }, h("slot", null)), h("slot", { name: "end" }))
        ];
    }
    static get is() { return "ion-item-divider"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
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
        };
    }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the item divider\n   * \@prop --color: Color of the item divider\n   * \@prop --padding-start: Start padding of the item divider\n   * \@prop --padding-end: End padding of the item divider\n   * \@prop --padding-top: Top padding of the item divider\n   * \@prop --padding-bottom: Bottom padding of the item divider\n   */\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin: 0;\n  padding: var(--padding-top) calc(var(--padding-end) + var(--ion-safe-area-right, 0px)) var(--padding-bottom) calc(var(--padding-start) + var(--ion-safe-area-left, 0px));\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 30px;\n  background: var(--background);\n  color: var(--color);\n  font-family: var(--ion-font-family, inherit);\n  overflow: hidden;\n  z-index: 100;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n:host(.ion-color) {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast); }\n\n:host([sticky]) {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0; }\n\n.item-divider-inner {\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-orient: inherit;\n  -webkit-box-direction: inherit;\n  -ms-flex-direction: inherit;\n  flex-direction: inherit;\n  -webkit-box-align: inherit;\n  -ms-flex-align: inherit;\n  align-items: inherit;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  min-height: inherit;\n  border: 0;\n  overflow: hidden; }\n\n.item-divider-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-orient: inherit;\n  -webkit-box-direction: inherit;\n  -ms-flex-direction: inherit;\n  flex-direction: inherit;\n  -webkit-box-align: inherit;\n  -ms-flex-align: inherit;\n  align-items: inherit;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  text-overflow: ellipsis;\n  overflow: hidden; }\n\n:host {\n  --background: var(--ion-background-color-step-50, #f2f2f2);\n  --color: var(--ion-text-color-step-150, #262626);\n  --padding-start: 16px;\n  border-radius: 0;\n  position: relative;\n  font-size: 17px; }\n\n.item-divider-inner {\n  padding-right: 8px; }\n\n:host([slot=\"start\"]) {\n  margin: 2px 16px 2px 0; }\n\n:host([slot=\"end\"]) {\n  margin-left: 8px;\n  margin-right: 8px; }\n\n::slotted(ion-icon[slot=\"start\"]),\n::slotted(ion-icon[slot=\"end\"]) {\n  margin-left: 0;\n  margin-top: 7px;\n  margin-bottom: 7px; }\n\n::slotted(h1) {\n  margin: 0 0 2px;\n  font-size: 24px;\n  font-weight: normal; }\n\n::slotted(h2) {\n  margin: 0 0 2px;\n  font-size: 17px;\n  font-weight: normal; }\n\n::slotted(h3),\n::slotted(h4),\n::slotted(h5),\n::slotted(h6) {\n  margin: 0 0 3px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: normal; }\n\n::slotted(p) {\n  margin: 0 0 2px;\n  color: var(--ion-text-color-step-600, #999999);\n  font-size: 14px;\n  line-height: normal;\n  text-overflow: inherit;\n  overflow: inherit; }\n\n::slotted(h2:last-child)\n::slotted(h3:last-child),\n::slotted(h4:last-child),\n::slotted(h5:last-child),\n::slotted(h6:last-child),\n::slotted(p:last-child) {\n  margin-bottom: 0; }"; }
    static get styleMode() { return "ios"; }
}

class List {
    constructor() {
        this.inset = false;
    }
    async closeSlidingItems() {
        const item = this.el.querySelector("ion-item-sliding");
        if (item && item.closeOpened) {
            return item.closeOpened();
        }
        return false;
    }
    hostData() {
        return {
            class: Object.assign({}, createThemedClasses(this.mode, "list"), { [`list-lines-${this.lines}`]: !!this.lines, "list-inset": this.inset, [`list-${this.mode}-lines-${this.lines}`]: !!this.lines })
        };
    }
    static get is() { return "ion-list"; }
    static get properties() {
        return {
            "closeSlidingItems": {
                "method": true
            },
            "el": {
                "elementRef": true
            },
            "inset": {
                "type": Boolean,
                "attr": "inset"
            },
            "lines": {
                "type": String,
                "attr": "lines"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            }
        };
    }
    static get style() { return "ion-list {\n  margin: 0;\n  padding: 0;\n  display: block;\n  background: var(--ion-item-background-color, var(--ion-background-color, #fff));\n  contain: content;\n  list-style-type: none; }\n\nion-list.list-inset {\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  overflow: hidden; }\n\n.list-ios {\n  margin: -1px 0 32px; }\n\n.list-ios:not(.list-inset):not(.list-ios-lines-none) .item:last-child {\n  --inner-border-width: 0;\n  --border-width: 0 0 0.55px 0; }\n\n.list-ios.list-inset {\n  margin: 16px;\n  border-radius: 4px; }\n\n.list-ios.list-inset ion-item {\n  --border-width: 0 0 1px 0;\n  --inner-border-width: 0; }\n\n.list-ios.list-inset ion-item:last-child {\n  --border-width: 0;\n  --inner-border-width: 0; }\n\n.list-ios.list-inset + ion-list.list-inset {\n  margin-top: 0; }\n\n.list-ios-lines-none .item {\n  --border-width: 0;\n  --inner-border-width: 0; }\n\n.list-ios-lines-full .item,\n.list-ios .item-lines-full {\n  --border-width: 0 0 0.55px 0; }\n\n.list-ios-lines-full .item {\n  --inner-border-width: 0; }\n\n.list-ios-lines-inset .item,\n.list-ios .item-lines-inset {\n  --inner-border-width: 0 0 0.55px 0; }\n\n.list-ios .item-lines-inset {\n  --border-width: 0; }\n\n.list-ios .item-lines-full {\n  --inner-border-width: 0; }"; }
    static get styleMode() { return "ios"; }
}

class ListHeader {
    hostData() {
        return {
            class: createColorClasses(this.color)
        };
    }
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-list-header"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "color": {
                "type": String,
                "attr": "color"
            },
            "mode": {
                "type": String,
                "attr": "mode"
            }
        };
    }
    static get style() { return ":host {\n  /**\n   * \@prop --background: Background of the list header\n   * \@prop --color: Color of the list header text\n   */\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 40px;\n  background: var(--background);\n  color: var(--color);\n  overflow: hidden; }\n\n:host(.ion-color) {\n  background: var(--ion-color-base);\n  color: var(--ion-color-contrast); }\n\n:host {\n  --background: transparent;\n  --color: var(--ion-text-color-step-150, #262626);\n  padding-left: calc(var(--ion-safe-area-left, 0px) + 16px);\n  position: relative;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 1px;\n  text-transform: uppercase; }"; }
    static get styleMode() { return "ios"; }
}

class NavPop {
    pop() {
        const nav = this.el.closest("ion-nav");
        if (nav) {
            nav.pop({ skipIfBusy: true });
        }
    }
    static get is() { return "ion-nav-pop"; }
    static get properties() {
        return {
            "el": {
                "elementRef": true
            }
        };
    }
    static get listeners() {
        return [{
                "name": "child:click",
                "method": "pop"
            }];
    }
}

class Radio {
    constructor() {
        this.inputId = `ion-rb-${radioButtonIds++}`;
        this.keyFocus = false;
        this.name = this.inputId;
        this.disabled = false;
        this.checked = false;
        this.onClick = () => {
            this.checkedChanged(true);
        };
        this.onChange = () => {
            this.checked = true;
            this.nativeInput.focus();
        };
        this.onKeyUp = () => {
            this.keyFocus = true;
        };
        this.onFocus = () => {
            this.ionFocus.emit();
        };
        this.onBlur = () => {
            this.keyFocus = false;
            this.ionBlur.emit();
        };
    }
    componentWillLoad() {
        this.ionSelect = deferEvent(this.ionSelect);
        this.ionStyle = deferEvent(this.ionStyle);
        if (this.value == null) {
            this.value = this.inputId;
        }
        this.emitStyle();
    }
    componentDidLoad() {
        this.ionRadioDidLoad.emit();
        this.nativeInput.checked = this.checked;
        const parentItem = this.nativeInput.closest("ion-item");
        if (parentItem) {
            const itemLabel = parentItem.querySelector("ion-label");
            if (itemLabel) {
                itemLabel.id = this.inputId + "-lbl";
                this.nativeInput.setAttribute("aria-labelledby", itemLabel.id);
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
        this.ionStyle.emit({
            "radio-checked": this.checked,
            "interactive-disabled": this.disabled,
        });
    }
    hostData() {
        return {
            class: Object.assign({}, createColorClasses(this.color), { "in-item": hostContext("ion-item", this.el), "interactive": true, "radio-checked": this.checked, "radio-disabled": this.disabled, "radio-key": this.keyFocus })
        };
    }
    render() {
        return [
            h("div", { class: "radio-icon" }, h("div", { class: "radio-inner" })),
            h("input", { type: "radio", onClick: this.onClick, onChange: this.onChange, onFocus: this.onFocus, onBlur: this.onBlur, onKeyUp: this.onKeyUp, id: this.inputId, name: this.name, value: this.value, disabled: this.disabled, ref: r => this.nativeInput = r })
        ];
    }
    static get is() { return "ion-radio"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
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
            "el": {
                "elementRef": true
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
                "type": "Any",
                "attr": "value",
                "mutable": true
            }
        };
    }
    static get events() {
        return [{
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
            }];
    }
    static get style() { return ":host {\n  /**\n   * \@prop --color: Color of the radio\n   * \@prop --color-checked: Color of the checked radio\n   */\n  display: inline-block;\n  position: relative;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n:host(.radio-disabled) {\n  pointer-events: none; }\n\n.radio-icon {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: var(--width);\n  height: var(--height);\n  contain: layout size style; }\n\n.radio-inner {\n  width: var(--inner-width);\n  height: var(--inner-height); }\n\ninput {\n  left: 0;\n  top: 0;\n  margin: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none; }\n\n.radio-icon,\n.radio-inner {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n:host {\n  --color-checked: var(--ion-color-primary, #3880ff);\n  --width: 16px;\n  --height: 21px;\n  --inner-width: 5px;\n  --inner-height: 12px; }\n\n:host(.ion-color.radio-checked) .radio-inner {\n  border-color: var(--ion-color-base); }\n\n.item-radio.item-ios ion-label {\n  margin-left: 0; }\n\n:host(.radio-checked) .radio-inner {\n  width: 5px;\n  height: 12px;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  border-width: 2px;\n  border-top-width: 0;\n  border-left-width: 0;\n  border-style: solid;\n  border-color: var(--color-checked); }\n\n:host(.radio-disabled) {\n  opacity: 0.3; }\n\n:host(.radio-key) .radio-icon::after {\n  border-radius: 50%;\n  left: -9px;\n  top: -8px;\n  display: block;\n  position: absolute;\n  width: 36px;\n  height: 36px;\n  background: var(--ion-color-primary-tint, #4c8dff);\n  content: \"\";\n  opacity: .2; }\n\n:host(.in-item) {\n  margin: 8px 11px 8px 8px;\n  display: block;\n  position: static; }\n\n:host(.in-item[slot=\"start\"]) {\n  margin: 8px 21px 8px 3px; }"; }
    static get styleMode() { return "ios"; }
}
let radioButtonIds = 0;

class Segment {
    constructor() {
        this.disabled = false;
    }
    valueChanged(value) {
        this.updateButtons();
        this.ionChange.emit({ value });
    }
    segmentClick(ev) {
        const selectedButton = ev.target;
        this.value = selectedButton.value;
    }
    componentDidLoad() {
        if (this.value == null) {
            const checked = this.getButtons().find(b => b.checked);
            if (checked) {
                this.value = checked.value;
            }
        }
        this.updateButtons();
    }
    updateButtons() {
        const value = this.value;
        for (const button of this.getButtons()) {
            button.checked = (button.value === value);
        }
    }
    getButtons() {
        return Array.from(this.el.querySelectorAll("ion-segment-button"));
    }
    hostData() {
        return {
            class: Object.assign({}, createColorClasses(this.color), { "segment-disabled": this.disabled })
        };
    }
    static get is() { return "ion-segment"; }
    static get encapsulation() { return "scoped"; }
    static get properties() {
        return {
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
        };
    }
    static get events() {
        return [{
                "name": "ionChange",
                "method": "ionChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get listeners() {
        return [{
                "name": "ionSelect",
                "method": "segmentClick"
            }];
    }
    static get style() { return ".sc-ion-segment-ios-h {\n  \n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n  font-family: var(--ion-font-family, inherit);\n  text-align: center; }\n\n.sc-ion-segment-ios-s > ion-segment-button {\n  --btn-background: var(--background);\n  --btn-border-color: var(--border-color);\n  color: var(--color); }\n\n.sc-ion-segment-ios-s > .segment-button-checked {\n  --btn-background: var(--background-checked);\n  --btn-border-color: var(--border-color-checked);\n  color: var(--color-checked); }\n\n.segment-disabled.sc-ion-segment-ios-h, .sc-ion-segment-ios-s > .segment-button-disabled {\n  pointer-events: none; }\n\n.sc-ion-segment-ios-h {\n  --background: transparent;\n  --background-checked: var(--ion-color-primary, #3880ff);\n  --border-color: currentColor;\n  --border-color-checked: var(--ion-color-primary, #3880ff);\n  --border-color-disabled: var(--ion-color-primary, #3880ff);\n  --color: var(--ion-color-primary, #3880ff);\n  --color-checked: var(--ion-color-primary-contrast, #fff);\n  --color-disabled: rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.3); }\n\n.segment-disabled.sc-ion-segment-ios-h {\n  opacity: 0.4; }\n\n.sc-ion-segment-ios-s > ion-segment-button {\n  --border-radius: 4px;\n  --border-width: 1px;\n  --border-style: solid;\n  --transition: 100ms all linear;\n  --icon-size: 26px;\n  height: 32px;\n  font-size: 13px;\n  line-height: 37px; }\n\n.sc-ion-segment-ios-s > .segment-button-disabled {\n  --btn-border-color: var(--border-color-disabled);\n  color: var(--color-disabled); }\n\n.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > ion-segment-button {\n  color: var(--ion-color-base); }\n\n.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-checked {\n  --btn-background: var(--ion-color-base);\n  --btn-border-color: var(--ion-color-base);\n  color: var(--ion-color-contrast); }\n\n.sc-ion-segment-ios-h.ion-color.sc-ion-segment-ios-s > .segment-button-disabled {\n  --btn-border-color: var(--ion-color-base);\n  color: rgba(var(--ion-color-base-rgb), 0.5); }\n\nion-toolbar.sc-ion-segment-ios-h, ion-toolbar   .sc-ion-segment-ios-h {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: 0;\n  position: absolute; }\n\n.sc-ion-segment-ios-hion-toolbar.sc-ion-segment-ios-s > ion-segment-button, ion-toolbar .sc-ion-segment-ios-h.sc-ion-segment-ios-s > ion-segment-button {\n  max-width: 100px;\n  height: 30px;\n  font-size: 12px;\n  line-height: 22px; }\n\nion-toolbar.ion-color.sc-ion-segment-ios-h:not(.ion-color), ion-toolbar.ion-color   .sc-ion-segment-ios-h:not(.ion-color) {\n  --color: var(--ion-color-contrast);\n  --color-checked: var(--ion-color-base);\n  --color-disabled: rgba(var(--ion-color-contrast-rgb), 0.3);\n  --background-checked: var(--ion-color-contrast);\n  --border-color-checked: var(--ion-color-contrast);\n  --border-color-disabled: var(--ion-color-contrast); }"; }
    static get styleMode() { return "ios"; }
}

let ids = 0;
class SegmentButton {
    constructor() {
        this.checked = false;
        this.disabled = false;
        this.value = "ion-sb-" + (ids++);
    }
    checkedChanged(checked, prev) {
        if (checked && !prev) {
            this.ionSelect.emit();
        }
    }
    hostData() {
        const { disabled, checked, color } = this;
        return {
            "ion-activatable": true,
            class: Object.assign({}, createColorClasses(color), { "segment-button-disabled": disabled, "segment-button-checked": checked })
        };
    }
    render() {
        return [
            h("button", { type: "button", "aria-pressed": this.checked ? "true" : null, class: "button-native", disabled: this.disabled, onClick: () => this.checked = true }, h("slot", null), this.mode === "md" && h("ion-ripple-effect", null))
        ];
    }
    static get is() { return "ion-segment-button"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
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
            "mode": {
                "type": String,
                "attr": "mode"
            },
            "value": {
                "type": String,
                "attr": "value"
            }
        };
    }
    static get events() {
        return [{
                "name": "ionSelect",
                "method": "ionSelect",
                "bubbles": true,
                "cancelable": true,
                "composed": true
            }];
    }
    static get style() { return ":host {\n  /**\n   * \@prop --btn-background: Background of the button\n   * \@prop --btn-border-color: Color of the button border\n   * \@prop --border-radius: Radius of the button border\n   * \@prop --border-style: Style of the button border\n   * \@prop --border-width: Width of the button border\n   * \@prop --icon-size: Size of the button icon\n   * \@prop --margin-top: Top margin of the button\n   * \@prop --margin-end: End margin of the button\n   * \@prop --margin-bottom: Bottom margin of the button\n   * \@prop --margin-start: Start margin of the button\n   * \@prop --padding-top: Top padding of the button\n   * \@prop --padding-end: End padding of the button\n   * \@prop --padding-bottom: Bottom padding of the button\n   * \@prop --padding-start: Start padding of the button\n   * \@prop --transition: Transition of the button\n   */\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --icon-size: 1em;\n  --btn-background: inherit;\n  --btn-border-color: inherit;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  color: inherit;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  -webkit-font-kerning: none;\n  font-kerning: none; }\n\n:host(:first-of-type) .button-native {\n  --padding-end: 0;\n  border-top-left-radius: var(--border-radius);\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: var(--border-radius); }\n\n:host(:not(:first-of-type)) .button-native {\n  border-left-width: 0; }\n\n:host(:last-of-type) .button-native {\n  --padding-start: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: var(--border-radius);\n  border-bottom-right-radius: var(--border-radius);\n  border-bottom-left-radius: 0; }\n\n.button-native {\n  font-family: inherit;\n  font-size: inherit;\n  font-style: inherit;\n  font-weight: inherit;\n  letter-spacing: inherit;\n  text-decoration: inherit;\n  text-overflow: inherit;\n  text-transform: inherit;\n  text-align: inherit;\n  white-space: inherit;\n  color: inherit;\n  margin: var(--margin-top) var(--margin-end) var(--margin-bottom) var(--margin-start);\n  padding: var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  -webkit-transition: var(--transition);\n  transition: var(--transition);\n  border-width: var(--border-width);\n  border-style: var(--border-style);\n  border-color: var(--btn-border-color);\n  outline: none;\n  background: var(--btn-background);\n  contain: content;\n  cursor: pointer;\n  overflow: hidden; }\n\n::slotted(ion-icon) {\n  font-size: var(--icon-size); }"; }
}

class ToolbarTitle {
    getMode() {
        const toolbar = this.el.closest("ion-toolbar");
        return (toolbar && toolbar.mode) || this.mode;
    }
    hostData() {
        const mode = this.getMode();
        return {
            class: Object.assign({}, createColorClasses(this.color), { [`title-${mode}`]: true })
        };
    }
    render() {
        return [
            h("div", { class: "toolbar-title" }, h("slot", null))
        ];
    }
    static get is() { return "ion-title"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "color": {
                "type": String,
                "attr": "color"
            },
            "el": {
                "elementRef": true
            }
        };
    }
    static get style() { return ":host {\n  /**\n   * \@prop --color: Text color of the title\n   */\n  --color: currentColor;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  color: var(--color); }\n\n:host(.title-ios) {\n  left: 0;\n  top: 0;\n  padding: 0 90px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  font-size: 17px;\n  font-weight: 600;\n  letter-spacing: -.03em;\n  text-align: center;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  pointer-events: none; }\n\n:host(.title-md) {\n  padding: 0 12px;\n  font-size: 20px;\n  font-weight: 500; }\n\n:host(.ion-color) {\n  color: var(--ion-color-base); }\n\n.toolbar-title {\n  display: block;\n  width: 100%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  pointer-events: auto; }"; }
}

export { AppBalanceItem as AppBalanceitem, AppCryptoIcon as AppCryptoicon, AppOhlc, Input as IonInput, ItemDivider as IonItemDivider, List as IonList, ListHeader as IonListHeader, NavPop as IonNavPop, Radio as IonRadio, Segment as IonSegment, SegmentButton as IonSegmentButton, ToolbarTitle as IonTitle };
