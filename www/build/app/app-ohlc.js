/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as highstock } from './chunk-09df4f05.js';
import { e as TRADESERVICE, b as TICKERSERVICE, c as BALANCESERVICE, f as OrderStatus, g as OrderType } from './chunk-9f11c581.js';
import { a as numeral } from './chunk-374e99fd.js';
import { h as appSetOrders } from './chunk-43b312d9.js';
import './chunk-a7525511.js';
import './chunk-8b6e0876.js';

class AppOhlc {
    constructor() {
        this.timeFrame = '1h';
    }
    changeAltLine() {
        this.chart.series[1].setData(this.ohlcData.map((d) => {
            return [d[0], this.altPrice];
        }));
    }
    changeSymbol() {
        TRADESERVICE.getOhlc(this.exchangeId, this.symbol, this.timeFrame).then((response) => {
            this.ohlcData = response.data;
            this.chart.series[0].setData(response.data);
            this.chart.series[1].setData(this.ohlcData.map((d) => {
                return [d[0], this.altPrice];
            }));
        }).catch(() => {
            window.alert(`Couldn't get chart data`);
        });
    }
    setTimeFrame(timeFrame) {
        this.timeFrame = timeFrame;
        TRADESERVICE.getOhlc(this.exchangeId, this.symbol, timeFrame).then((response) => {
            this.ohlcData = response.data;
            this.chart.series[0].setData(response.data);
            this.chart.series[1].setData(this.ohlcData.map((d) => {
                return [d[0], this.altPrice];
            }));
        }).catch(() => {
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
                    dashStyle: 'ShortDot',
                },
            },
            series: [
                {
                    name: `${this.exchangeId} - ${this.symbol}`,
                    type: 'candlestick',
                    data: [],
                },
                {
                    name: 'Set Price',
                    type: 'line',
                    data: [],
                },
            ],
        });
    }
    render() {
        return [
            h("ion-segment", { color: "light", onIonChange: (e) => this.setTimeFrame(e.detail.value) },
                h("ion-segment-button", { value: "1m", checked: this.timeFrame === '1m' },
                    h("span", { style: { color: 'black' } }, "1 hour")),
                h("ion-segment-button", { value: "1h", checked: this.timeFrame === '1h' },
                    h("span", { style: { color: 'black' } }, "1 day")),
                h("ion-segment-button", { value: "1d", checked: this.timeFrame === '1d' },
                    h("span", { style: { color: 'black' } }, "1 week"))),
            h("div", { id: "ohlc", style: { height: '200px' } }),
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
        "symbol": {
            "type": String,
            "attr": "symbol",
            "watchCallbacks": ["changeSymbol"]
        },
        "timeFrame": {
            "state": true
        }
    }; }
    static get style() { return ""; }
}

class AppTrade {
    constructor() {
        this.pairs = [];
        this.isLoading = false;
        this.tradePrice = 0;
        this.tradeAmount = 0;
        this.tradeAction = OrderType.LIMITBUY;
        this.baseBalance = 0;
        this.quoteBalance = 0;
        this.tradeFee = 0;
        this.segment = 0;
        this.step = 0;
    }
    componentWillLoad() {
        this.store.mapStateToProps(this, (state) => {
            const { app: { exchanges, baseCurrency, currencies, tickers, wallets, orders }, } = state;
            return {
                exchanges,
                baseCurrency,
                currencies,
                tickers,
                wallets,
                orders,
            };
        });
        this.store.mapDispatchToProps(this, {
            appSetOrders,
        });
        if (this.tickers.length) {
            this.pairs = this.tickers[0].tickers.sort((a, b) => {
                let textA = '';
                let textB = '1';
                if (a.symbol && b.symbol) {
                    textA = a.symbol.toUpperCase();
                    textB = b.symbol.toUpperCase();
                }
                return textA < textB ? -1 : textA > textB ? 1 : 0;
            });
            this.exchangeId = this.tickers[0].exchangeId;
            this.selectedExchange = this.tickers[0].exchangeId;
            this.getNewTicker(this.exchangeId, this.pairs[0].symbol);
        }
    }
    exchangeSelected(e) {
        this.exchangeId = e.target.value;
        this.selectedExchange = e.target.value;
        this.pairs = this.tickers.find((t) => t.exchangeId === e.target.value).tickers.sort((a, b) => {
            let textA = '';
            let textB = '1';
            if (a.symbol && b.symbol) {
                textA = a.symbol.toUpperCase();
                textB = b.symbol.toUpperCase();
            }
            return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
        this.getNewTicker(this.exchangeId, this.pairs[0].symbol);
    }
    pairSelected(exchangeId, pair) {
        this.getNewTicker(exchangeId, pair);
    }
    getBalances(quote, base) {
        let exchange = this.exchanges.find((e) => e.id === this.exchangeId);
        let quoteBalance = exchange.balances.find((b) => b.currency === quote);
        let baseBalance = exchange.balances.find((b) => b.currency === base);
        this.quoteBalance = 0;
        this.baseBalance = 0;
        if (quoteBalance) {
            this.quoteBalance = quoteBalance.available;
        }
        if (baseBalance) {
            this.baseBalance = baseBalance.available;
        }
    }
    setPriceWithButtons(button) {
        let largeNumber = this.tradePrice / 100;
        let smallNumber = this.tradePrice / 1000;
        switch (button) {
            case `--`:
                this.tradePrice -= largeNumber;
                break;
            case `-`:
                this.tradePrice -= smallNumber;
                break;
            case `+`:
                this.tradePrice += smallNumber;
                break;
            case `++`:
                this.tradePrice += largeNumber;
                break;
            default:
                break;
        }
    }
    getAmountFormat() {
        let zeros = [];
        for (let index = 0; index < this.ticker.info.precision.amount; index++) {
            zeros.push(`0`);
        }
        return `0.${zeros.join('')}`;
    }
    getPriceFormat() {
        let zeros = [];
        for (let index = 0; index < this.ticker.info.precision.price; index++) {
            zeros.push(`0`);
        }
        return `0.${zeros.join('')}`;
    }
    getNewTicker(exchangeId, symbol) {
        this.isLoading = true;
        TICKERSERVICE.getTicker(exchangeId, symbol)
            .then((response) => {
            this.exchangeId = exchangeId;
            this.ticker = response.data;
            this.tradePrice = +response.data.last;
            this.getBalances(response.data.quote, response.data.base);
            this.isLoading = false;
        })
            .catch(() => {
            window.alert(`Something went wrong while getting ticker data for ${exchangeId} - ${symbol}`);
            this.isLoading = false;
        });
    }
    setTradePrice(e) {
        this.tradePrice = +e.target.value;
    }
    setTradeAmount(e) {
        this.tradeAmount = +e.target.value;
    }
    setTradeAmountByButton(percentage) {
        let amount = 0;
        switch (this.tradeAction) {
            case OrderType.LIMITBUY:
                amount = (this.quoteBalance * percentage - this.quoteBalance * percentage * this.ticker.info.maker) / this.tradePrice;
                if (this.checkAmounts(amount)) {
                    this.tradeAmount = amount;
                }
                break;
            case OrderType.MARKETBUY:
                amount = (this.quoteBalance * percentage - this.quoteBalance * percentage * this.ticker.info.taker) / this.tradePrice;
                if (this.checkAmounts(amount)) {
                    this.tradeAmount = amount;
                }
                break;
            case OrderType.LIMITSELL:
                amount = this.baseBalance * percentage - this.baseBalance * percentage * this.ticker.info.maker;
                if (this.checkAmounts(amount)) {
                    this.tradeAmount = amount;
                }
                break;
            case OrderType.MARKETSELL:
                amount = this.baseBalance * percentage - this.baseBalance * percentage * this.ticker.info.taker;
                if (this.checkAmounts(amount)) {
                    this.tradeAmount = amount;
                }
                break;
            default:
                break;
        }
    }
    checkAmounts(amount) {
        if (this.ticker.info.limits.amount.min > amount) {
            window.alert(`Minimum amount of ${this.ticker.info.limits.amount.min}`);
            this.tradeAmount = this.ticker.info.limits.amount.min;
            return false;
        }
        if (this.ticker.info.limits.amount.max < amount) {
            window.alert(`Maximum amount of ${this.ticker.info.limits.amount.max}`);
            this.tradeAmount = this.ticker.info.limits.amount.max;
            return false;
        }
        return true;
    }
    getSymbol(balance, exchange) {
        let tickers = this.tickers.find((t) => t.exchangeId === exchange.id).tickers;
        return BALANCESERVICE.getBtcStats(balance, tickers).symbol;
    }
    render() {
        return [
            h("ion-header", null,
                h("ion-toolbar", { color: "dark" },
                    h("ion-title", { "text-center": true }, "Trade")),
                h("ion-segment", { color: "dark", onIonChange: (e) => (this.step = +e.detail.value) },
                    h("ion-segment-button", { value: "0", checked: this.step === 0 }, "Pair"),
                    h("ion-segment-button", { value: "1", checked: this.step === 1 }, "Price"),
                    h("ion-segment-button", { value: "2", checked: this.step === 2 }, "Action"),
                    h("ion-segment-button", { value: "3", checked: this.step === 3 }, "Amount"),
                    h("ion-segment-button", { value: "4", checked: this.step === 4 }, "Summary")),
                this.step === 0 && [
                    h("ion-list-header", { color: "light" },
                        "Pair",
                        this.isLoading ? (h("ion-icon", { name: "sync", class: "spin", slot: "end", "margin-right": true })) : (h("ion-badge", { color: "light", "margin-right": true },
                            this.exchangeId,
                            " - ",
                            this.ticker.symbol))),
                    h("ion-item", { lines: "none" },
                        h("ion-segment", { color: "light", onIonChange: (e) => (this.segment = +e.detail.value) },
                            h("ion-segment-button", { value: "0", checked: this.segment === 0 },
                                h("span", { style: { color: 'black' } }, "All Pairs")),
                            h("ion-segment-button", { value: "1", checked: this.segment === 1 },
                                h("span", { style: { color: 'black' } }, "Current Holdings")))),
                ],
                this.step === 1 && [
                    h("ion-list-header", { color: "light" },
                        "Price",
                        this.isLoading ? (h("ion-icon", { name: "sync", class: "spin", slot: "end", "margin-right": true })) : (h("ion-badge", { color: "light", "margin-right": true },
                            numeral(+this.tradePrice).format(this.getPriceFormat()),
                            " ",
                            this.ticker.quote))),
                ],
                this.step === 2 && [
                    h("ion-list-header", { color: "light" },
                        "Action",
                        h("ion-badge", { color: "light", "margin-right": true }, this.tradeAction)),
                ],
                this.step === 3 && [
                    h("ion-list-header", { color: "light" },
                        "Amount",
                        this.isLoading ? (h("ion-icon", { name: "sync", class: "spin", slot: "end", "margin-right": true })) : (h("ion-badge", { color: "light", "margin-right": true },
                            numeral(this.tradeAmount).format(this.getAmountFormat()),
                            " ",
                            this.ticker.base))),
                ],
                this.step === 4 && [h("ion-list-header", { color: "light" }, "Summary")]),
            h("ion-content", null,
                h("ion-list", null,
                    this.step === 0 && [
                        h("ion-item", { lines: "none", style: { display: this.segment === 1 ? 'none' : 'block' } },
                            h("ion-label", null, "Select Exchange"),
                            h("select", { onChange: (e) => this.exchangeSelected(e) }, this.exchanges.filter((e) => e.key && e.secret).map((e) => h("option", { value: e.id }, e.id)))),
                        h("ion-item", { lines: "none", style: { display: this.segment === 1 ? 'none' : 'block' } },
                            h("ion-label", null, "Select Pair"),
                            h("select", { onChange: (e) => this.pairSelected(this.selectedExchange, e.target[`value`]) }, this.pairs.map((p) => h("option", { value: p.symbol }, p.symbol)))),
                        this.segment === 1 &&
                            this.exchanges.filter((e) => e.key && e.secret).map((exchange) => [
                                h("ion-list-header", { color: "light" }, exchange.id),
                                exchange.balances.filter((b) => b.currency != `BTC`).map((b) => [
                                    h("ion-item", { lines: "full", onClick: () => this.pairSelected(exchange.id, this.getSymbol(b, exchange)) },
                                        h("app-cryptoicon", { class: "cicon", symbol: b.currency }),
                                        h("ion-label", { slot: "end" }, this.getSymbol(b, exchange))),
                                ]),
                            ]),
                    ],
                    this.step === 1 && [
                        this.ticker && [
                            h("app-ohlc", { exchangeId: this.exchangeId, symbol: this.ticker.symbol, altPrice: this.tradePrice, curPrice: this.ticker.last }),
                            h("ion-item", { lines: "none" },
                                h("ion-label", null, "Last price"),
                                h("ion-button", { size: "small", fill: "outline", color: "dark", slot: "end", "text-right": true, onClick: () => (this.tradePrice = this.ticker.last) }, numeral(+this.ticker.last).format(this.getPriceFormat()))),
                            h("ion-item", { lines: "none" },
                                h("ion-label", null, "Set price"),
                                h("ion-input", { slot: "end", name: "price", type: "number", value: `${this.tradePrice}`, onInput: (e) => this.setTradePrice(e) })),
                            h("ion-grid", null,
                                h("ion-row", null,
                                    h("ion-col", null,
                                        h("ion-button", { fill: "outline", expand: "block", color: "danger", onClick: () => this.setPriceWithButtons('--') }, "- -")),
                                    h("ion-col", null,
                                        h("ion-button", { fill: "outline", expand: "block", color: "danger", onClick: () => this.setPriceWithButtons('-') }, "-")),
                                    h("ion-col", null,
                                        h("ion-button", { fill: "outline", expand: "block", color: "success", onClick: () => this.setPriceWithButtons('+') }, "+")),
                                    h("ion-col", null,
                                        h("ion-button", { fill: "outline", expand: "block", color: "success", onClick: () => this.setPriceWithButtons('++') }, "+ +")))),
                        ],
                    ],
                    this.step === 2 && [
                        h("ion-grid", null,
                            h("ion-row", null,
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "success", onClick: () => (this.tradeAction = OrderType.MARKETBUY) }, "Market Buy")),
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "danger", onClick: () => (this.tradeAction = OrderType.MARKETSELL) }, "Market Sell"))),
                            h("ion-row", null,
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "success", onClick: () => (this.tradeAction = OrderType.LIMITBUY) }, "Limit Buy")),
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "danger", onClick: () => (this.tradeAction = OrderType.LIMITSELL) }, "Limit Sell")))),
                    ],
                    this.step === 3 && [
                        (this.tradeAction === OrderType.LIMITBUY || this.tradeAction === OrderType.MARKETBUY) && (h("ion-item", { lines: "none" },
                            h("ion-label", null,
                                "Available ",
                                this.ticker.quote),
                            h("ion-button", { color: "light", slot: "end", "text-right": true, onClick: () => this.setTradeAmountByButton(1) }, numeral(+this.quoteBalance).format(this.getAmountFormat())))),
                        (this.tradeAction === OrderType.LIMITSELL || this.tradeAction === OrderType.MARKETSELL) && (h("ion-item", { lines: "none" },
                            h("ion-label", null,
                                "Available ",
                                this.ticker.base),
                            h("ion-button", { color: "light", slot: "end", "text-right": true, onClick: () => this.setTradeAmountByButton(1) }, numeral(+this.baseBalance).format(this.getAmountFormat())))),
                        h("ion-item", { lines: "none" },
                            h("ion-label", null, "Set Amount"),
                            h("ion-input", { slot: "end", name: "price", type: "number", value: `${this.tradeAmount}`, onInput: (e) => this.setTradeAmount(e), onBlur: () => this.checkAmounts(this.tradeAmount) })),
                        h("ion-grid", null,
                            h("ion-row", null,
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "dark", onClick: () => this.setTradeAmountByButton(0.1) }, "10%")),
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "dark", onClick: () => this.setTradeAmountByButton(0.2) }, "20%")),
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "dark", onClick: () => this.setTradeAmountByButton(0.3) }, "30%")),
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "dark", onClick: () => this.setTradeAmountByButton(0.4) }, "40%")),
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "dark", onClick: () => this.setTradeAmountByButton(0.5) }, "50%")),
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "dark", onClick: () => this.setTradeAmountByButton(0.6) }, "60%")),
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "dark", onClick: () => this.setTradeAmountByButton(0.7) }, "70%")),
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "dark", onClick: () => this.setTradeAmountByButton(0.8) }, "80%")),
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "dark", onClick: () => this.setTradeAmountByButton(0.9) }, "90%")),
                                h("ion-col", null,
                                    h("ion-button", { fill: "outline", expand: "block", color: "dark", onClick: () => this.setTradeAmountByButton(1) }, "100%")))),
                    ],
                    this.step === 4 && [
                        h("ion-item", { lines: "none" },
                            h("ion-label", null, "Action"),
                            h("ion-label", { slot: "end", "text-right": true }, this.tradeAction)),
                        h("ion-item", { lines: "none" },
                            h("ion-label", null, "Amount"),
                            h("ion-label", { slot: "end", "text-right": true },
                                numeral(this.tradeAmount).format(this.getAmountFormat()),
                                " ",
                                this.ticker.base)),
                        h("ion-item", { lines: "none" },
                            h("ion-label", null, "Price"),
                            h("ion-label", { slot: "end", "text-right": true },
                                numeral(+this.tradePrice).format(this.getPriceFormat()),
                                " ",
                                this.ticker.symbol)),
                        h("ion-item", { lines: "none" },
                            h("ion-label", null, "Fee"),
                            h("ion-label", { slot: "end", "text-right": true },
                                this.tradeAction === OrderType.LIMITBUY || this.tradeAction === OrderType.LIMITSELL
                                    ? numeral(+this.ticker.info.maker * +this.tradeAmount * +this.tradePrice).format(this.getAmountFormat())
                                    : numeral(+this.ticker.info.taker * +this.tradeAmount * +this.tradePrice).format(this.getAmountFormat()),
                                ' ',
                                this.ticker.quote)),
                        h("ion-item", { lines: "none" },
                            h("ion-label", null, "Total"),
                            h("ion-label", { slot: "end", "text-right": true },
                                numeral(+this.tradeAmount * +this.tradePrice - +this.ticker.info.taker * +this.tradeAmount * +this.tradePrice).format(this.getAmountFormat()),
                                ' ',
                                this.ticker.quote)),
                        h("ion-button", { expand: "block", color: "success", onClick: () => this.executeOrder(this.ticker.symbol, this.tradeAction, this.tradePrice, this.tradeAmount), disabled: this.isLoading },
                            this.isLoading && h("ion-icon", { name: "refresh", class: "spin", "margin-right": true }),
                            " Execute"),
                    ])),
        ];
    }
    executeOrder(pair, type, price, amount) {
        if (window.confirm('Are you sure you want to place this order?')) {
            this.isLoading = true;
            let exchange = this.exchanges.find((e) => e.id === this.exchangeId);
            TRADESERVICE.newOrder(exchange, {
                pair: pair,
                type: type,
                price: numeral(price).format(this.getPriceFormat()),
                amount: numeral(amount).format(this.getAmountFormat()),
                clientCreds: {
                    key: exchange.key,
                    secret: exchange.secret,
                },
            })
                .then((response) => {
                window.alert(`Placed order:\n
                      Pair: ${pair}\n
                      Type: ${type}\n
                      Price: ${numeral(price).format(this.getPriceFormat())}\n
                      amount:${numeral(amount).format(this.getAmountFormat())}`);
                let newOrder = {
                    exchangeId: exchange.id,
                    pair: pair,
                    type: type,
                    status: OrderStatus.open,
                    orderId: response.data.id,
                    openPrice: numeral(price).format(this.getPriceFormat()),
                    closePrice: 0,
                    filled: 0,
                    remaining: 0,
                    amount: numeral(amount).format(this.getAmountFormat()),
                    fee: this.tradeAction === OrderType.LIMITBUY || this.tradeAction === OrderType.LIMITSELL
                        ? numeral(+this.ticker.info.maker * +this.tradeAmount * +this.tradePrice).format(this.getAmountFormat())
                        : numeral(+this.ticker.info.taker * +this.tradeAmount * +this.tradePrice).format(this.getAmountFormat()),
                    createdAt: new Date().getTime(),
                    updatedAt: new Date().getTime(),
                };
                this.appSetOrders([...this.orders, newOrder]);
                this.isLoading = false;
            })
                .catch((error) => {
                this.isLoading = false;
                window.alert(`Something went wrong while executing the order: ${error.message}`);
            });
        }
    }
    static get is() { return "app-trade"; }
    static get properties() { return {
        "baseBalance": {
            "state": true
        },
        "exchangeId": {
            "state": true
        },
        "exchanges": {
            "state": true
        },
        "isLoading": {
            "state": true
        },
        "orders": {
            "state": true
        },
        "pairs": {
            "state": true
        },
        "quoteBalance": {
            "state": true
        },
        "segment": {
            "state": true
        },
        "selectedExchange": {
            "state": true
        },
        "step": {
            "state": true
        },
        "store": {
            "context": "store"
        },
        "ticker": {
            "state": true
        },
        "tickers": {
            "state": true
        },
        "tradeAction": {
            "state": true
        },
        "tradeAmount": {
            "state": true
        },
        "tradeFee": {
            "state": true
        },
        "tradePrice": {
            "state": true
        }
    }; }
    static get style() { return ".full {\n  width: 100%;\n}"; }
}

export { AppOhlc, AppTrade };
