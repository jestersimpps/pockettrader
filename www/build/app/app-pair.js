/*! Built with http://stenciljs.com */
const { h } = window.App;

import { b as TICKERSERVICE } from './chunk-6b468cd6.js';
import './chunk-8b6e0876.js';
import './chunk-a7525511.js';

class AppPair {
    constructor() {
        this.segment = 1;
    }
    componentDidLoad() {
        console.log(this.pair);
        switch (this.pair) {
            case 'BTC':
                TICKERSERVICE.getTicker(this.exchangeId, `BTC/USD`)
                    .then((response) => {
                    this.ticker = response.data;
                    this.chartID = `${this.exchangeId}:BTCUSD`;
                    this.switchSegment(1);
                })
                    .catch(() => {
                    TICKERSERVICE.getTicker(this.exchangeId, `BTC/USDT`).then((response) => {
                        this.ticker = response.data;
                        this.chartID = `${this.exchangeId}:BTCUSDT`;
                        this.switchSegment(1);
                    });
                });
                break;
            case 'USD':
            case 'EUR':
            case 'GBP':
            case 'CAD':
                TICKERSERVICE.getTicker(this.exchangeId, `BTC/${this.pair}`).then((response) => {
                    this.ticker = response.data;
                    this.chartID = `${this.exchangeId}:BTC${this.pair}`;
                    this.switchSegment(1);
                });
                break;
            default:
                TICKERSERVICE.getTicker(this.exchangeId, `${this.pair}/BTC`).then((response) => {
                    this.ticker = response.data;
                    this.chartID = `${this.exchangeId}:${this.pair}BTC`;
                    this.switchSegment(1);
                });
                break;
        }
    }
    showChart() {
        this.tradingviewWidget = new TradingView.widget({
            container_id: 'tvChart',
            autosize: true,
            symbol: this.chartID,
            interval: '60',
            timezone: 'Etc/UTC',
            theme: 'Light',
            style: '1',
            locale: 'en',
            toolbar_bg: '#fff',
            padding: 0,
            hide_top_toolbar: false,
            enable_publishing: false,
            withdateranges: true,
            hide_side_toolbar: true,
            details: false,
            hideideas: true,
            show_popup_button: false,
            save_image: false,
            allow_symbol_change: false,
        });
    }
    switchSegment(segment) {
        this.segment = segment;
        switch (segment) {
            case 1:
                this.showChart();
                break;
            default:
                break;
        }
    }
    render() {
        const styles = {
            height: `${window.innerHeight - 93}px`,
        };
        return [
            this.ticker && (h("ion-header", null,
                h("ion-toolbar", { color: "dark" },
                    h("ion-buttons", { slot: "start" },
                        h("ion-back-button", { defaultHref: `/exchanges` })),
                    h("ion-title", null, `${this.exchangeId} - ${this.ticker.symbol}`)))),
            h("ion-content", null, this.segment === 1 && h("div", { id: "tvChart", class: "tvchart", style: styles })),
        ];
    }
    static get is() { return "app-pair"; }
    static get properties() { return {
        "chartID": {
            "state": true
        },
        "exchangeId": {
            "type": String,
            "attr": "exchange-id"
        },
        "pair": {
            "type": String,
            "attr": "pair"
        },
        "segment": {
            "state": true
        },
        "store": {
            "context": "store"
        },
        "ticker": {
            "state": true
        }
    }; }
    static get style() { return ".tvchart {\n  height: 50%;\n}\n.full {\n  width: 100%;\n}\n.small {\n  width: 20%;\n}\n.inputbox {\n  border-radius: 7px;\n  border: 2px solid #ffce00;\n  padding: 1px;\n  padding-left: 10px;\n  margin: 4px;\n}\nion-grid {\n  padding: 0;\n}\n.buttonRow {\n  margin-bottom: -15px;\n}"; }
}

export { AppPair };
