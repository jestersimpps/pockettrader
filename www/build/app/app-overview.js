/*! Built with http://stenciljs.com */
const { h } = window.App;

import { c as BALANCESERVICE, a as CURRENCYSERVICE } from './chunk-6a09bead.js';
import { d as appSetExchanges, a as appSetBaseCurrency, e as appSetCurrencies, f as appSetTickers, g as appSetTotalBalances, c as appSetWallets, h as appSetBalances, i as appSetOrders } from './chunk-9c7d3ec3.js';
import { a as highstock } from './chunk-09df4f05.js';
import { a as numeral } from './chunk-374e99fd.js';
import './chunk-ea6d9d39.js';
import './chunk-a7525511.js';

class AppOverview {
    constructor() {
        this.exchanges = [];
        this.isLoading = false;
    }
    componentWillLoad() {
        this.store.mapStateToProps(this, (state) => {
            const { app: { exchanges, baseCurrency, currencies, tickers, wallets, balances, orders, dust }, } = state;
            return {
                exchanges,
                baseCurrency,
                currencies,
                tickers,
                wallets,
                balances,
                orders,
                dust,
            };
        });
        this.store.mapDispatchToProps(this, {
            appSetExchanges,
            appSetBaseCurrency,
            appSetCurrencies,
            appSetTickers,
            appSetTotalBalances,
            appSetWallets,
            appSetBalances,
            appSetOrders,
        });
        let scopedWallets = this.wallets.filter((w) => w.balance > 0);
        let scopedExchanges = this.exchanges.filter((e) => e.key && e.secret);
        this.showTutorial = scopedWallets.length + scopedExchanges.length === 0;
    }
    addTotalBalance(totalBtcBalance) {
        BALANCESERVICE.getTotalBalancesFromStorage().then((totalBalances) => {
            if (totalBtcBalance && totalBtcBalance > 0) {
                let now = Math.round(new Date().getTime());
                BALANCESERVICE.setTotalBalances([...totalBalances, [now, totalBtcBalance]]);
                this.appSetTotalBalances([...totalBalances, [now, totalBtcBalance]]);
            }
        });
    }
    getBtcStats(balance, tickerData) {
        let stats = { price: 0, balance: 0, change: 0 };
        const innerTicker = tickerData.find((t) => t.symbol === `${balance.currency}/BTC`);
        if (balance.symbol === 'BTC') {
            stats.balance = balance.balance;
            stats.price = 1;
        }
        // TODO fiat
        if (innerTicker) {
            stats.balance = balance.balance * innerTicker.last;
            stats.price = innerTicker.last;
            stats.change = innerTicker.percentage;
        }
        return stats;
    }
    refreshBalances() {
        this.isLoading = true;
        BALANCESERVICE.refreshBalances(this.wallets, this.exchanges, this.orders, this.dust).then((response) => {
            if (response) {
                this.appSetCurrencies(response.conversionrates);
                this.appSetTickers(response.tickers);
                this.appSetWallets(response.wallets);
                this.appSetExchanges(response.exchanges);
                this.addTotalBalance(response.exchangeTotal + response.walletTotal);
                this.appSetBalances({
                    overview: response.exchangeTotal + response.walletTotal,
                    exchanges: response.exchangeTotal,
                    wallets: response.walletTotal,
                });
                this.appSetOrders(response.orders);
            }
            this.isLoading = false;
        });
    }
    render() {
        return [
            h("ion-header", null,
                h("ion-toolbar", { color: "dark" },
                    h("ion-buttons", { slot: "start" },
                        h("ion-button", { "icon-only": true, href: "/settings", padding: true },
                            h("ion-icon", { name: "options" }))),
                    h("ion-title", { "text-center": true },
                        h("ion-badge", { color: "light" },
                            h("app-baseprice", { btcPrice: CURRENCYSERVICE.convertToBase(this.balances.overview, this.baseCurrency), baseCurrency: this.baseCurrency }))),
                    h("ion-buttons", { slot: "end" },
                        h("ion-button", { "icon-only": true, disabled: this.isLoading, onClick: () => this.refreshBalances(), padding: true },
                            h("ion-icon", { name: "refresh", class: this.isLoading ? 'spin' : '' }))))),
            h("ion-content", null, !this.isLoading ? (this.showTutorial ? ([
                h("div", { padding: true },
                    h("p", null, "Welcome to Pocket Trader!"),
                    h("ion-button", { expand: "block", color: "light", href: "/settings/tutorial" }, "View tutorial")),
            ]) : (h("ion-list", null,
                h("ion-list-header", { color: "light" }, "Distribution & 24h Change"),
                h("app-sunburst", { exchanges: this.exchanges, wallets: this.wallets, totalBalance: this.balances.overview, baseCurrency: this.baseCurrency }),
                h("ion-list-header", { color: "light" },
                    "Total Balance (",
                    this.baseCurrency.id,
                    ")"),
                h("app-splinechart", null)))) : (h("div", { class: "progress", "text-center": true },
                h("ion-icon", { name: "sync", class: "spin" })))),
        ];
    }
    static get is() { return "app-overview"; }
    static get properties() { return {
        "balances": {
            "state": true
        },
        "baseCurrency": {
            "state": true
        },
        "dust": {
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
        "showTutorial": {
            "state": true
        },
        "store": {
            "context": "store"
        },
        "tickers": {
            "state": true
        },
        "wallets": {
            "state": true
        }
    }; }
    static get style() { return ""; }
}

class AppSplineChart {
    componentWillLoad() {
        this.store.mapStateToProps(this, (state) => {
            const { app: { baseCurrency, totalBalances }, } = state;
            return {
                baseCurrency,
                totalBalances,
            };
        });
    }
    componentDidLoad() {
        this.chart = highstock.stockChart('spline', {
            title: {
                text: '',
            },
            rangeSelector: {
                inputEnabled: false,
                selected: 2,
                buttons: [
                    {
                        type: 'minute',
                        count: 60,
                        text: '1h',
                    },
                    {
                        type: 'day',
                        count: 1,
                        text: '1d',
                    },
                    {
                        type: 'week',
                        count: 1,
                        text: '1w',
                    },
                    {
                        type: 'month',
                        count: 1,
                        text: '1m',
                    },
                    {
                        type: 'year',
                        count: 1,
                        text: '1y',
                    },
                    {
                        type: 'all',
                        text: 'All',
                    },
                ],
            },
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {
                    month: '%e. %b',
                    year: '%b',
                },
                title: {
                    text: '',
                },
            },
            yAxis: {
                title: {
                    text: `Balance (${this.baseCurrency.symbol})`,
                },
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: `<b>Time:</b> {point.x:%e %b %Y, %H:%M}<br><b>Balance:</b> ${this.baseCurrency.symbol} {point.y:.8f} `,
            },
            plotOptions: {
                spline: {
                    marker: {
                        enabled: true,
                        radius: 2,
                    },
                },
            },
            legend: {
                enabled: false,
            },
            colors: ['#000'],
            series: [
                {
                    name: `Total ${this.baseCurrency.id} Balance over time`,
                    data: this.balancePoints(),
                },
            ],
        });
    }
    balancePoints() {
        const balances = [];
        this.totalBalances.forEach((b) => {
            balances.push([b[0], +CURRENCYSERVICE.convertToBase(b[1], this.baseCurrency)]);
        });
        return balances;
    }
    render() {
        return [h("div", { id: "spline", class: "chart" })];
    }
    static get is() { return "app-splinechart"; }
    static get properties() { return {
        "baseCurrency": {
            "state": true
        },
        "store": {
            "context": "store"
        },
        "totalBalances": {
            "state": true
        }
    }; }
    static get style() { return ".chart {\n  height: 400px;\n}"; }
}

class AppSunburst {
    constructor() {
        this.exchanges = [];
        this.wallets = [];
    }
    componentDidLoad() {
        let innerText = `${this.baseCurrency.symbol} ${numeral(CURRENCYSERVICE.convertToBase(this.totalBalance, this.baseCurrency)).format(this.baseCurrency.id === `BTC` ? '0,0.0000' : '0,0.00')}`;
        const nodeData = {
            name: innerText,
            change: 0,
            children: [
                ...this.exchanges.map((e) => {
                    return {
                        name: e.id,
                        balance: e.balances.reduce((a, b) => a + b.balance, 0),
                        value: e.balances.reduce((a, b) => a + b.btcAmount, 0),
                        change: e.balances.reduce((a, b) => a + b.change * b.btcAmount, 0) / e.balances.reduce((a, b) => a + b.btcAmount, 0),
                        children: e.balances.map((b) => {
                            return { name: b.currency, size: b.btcAmount, balance: b.balance, value: b.btcAmount, change: b.change };
                        }),
                    };
                }),
                {
                    name: 'Wallets',
                    balance: this.wallets.reduce((a, b) => a + b.balance, 0),
                    value: this.wallets.reduce((a, b) => a + b.btcAmount, 0),
                    change: this.wallets.reduce((a, b) => a + b.change * b.btcAmount, 0) / this.wallets.reduce((a, b) => a + b.btcAmount, 0),
                    children: this.wallets.map((w) => {
                        return { name: w.currency, size: w.btcAmount, balance: w.balance, value: w.btcAmount, change: w.change };
                    }),
                },
            ],
        };
        const width = window.innerWidth, height = window.innerHeight, maxRadius = Math.min(width, height) / 1.4;
        const max = Math.max(...this.exchanges.map((e) => Math.max(...e.balances.map((b) => b.change))));
        const min = Math.min(...this.exchanges.map((e) => Math.min(...e.balances.map((b) => b.change))));
        let color = d3
            .scaleLinear()
            .domain([min, 0, max])
            .range(['#f53d3d', '#fff', '#10dc60']);
        const x = d3
            .scaleLinear()
            .range([0, 2 * Math.PI])
            .clamp(true);
        const y = d3.scaleLinear().range([maxRadius * 0.1, maxRadius]);
        const partition = d3.partition();
        const middleArcLine = (d) => {
            const halfPi = Math.PI / 2;
            const angles = [x(d.x0) - halfPi, x(d.x1) - halfPi];
            const r = Math.max(0, (y(d.y0) + y(d.y1)) / 2);
            const middleAngle = (angles[1] + angles[0]) / 2;
            const invertDirection = middleAngle > 0 && middleAngle < Math.PI; // On lower quadrants write text ccw
            if (invertDirection) {
                angles.reverse();
            }
            const path = d3.path();
            path.arc(0, 0, r, angles[0], angles[1], invertDirection);
            return path.toString();
        };
        const textFits = (d) => {
            const CHAR_SPACE = 6;
            const deltaAngle = x(d.x1) - x(d.x0);
            const r = Math.max(0, (y(d.y0) + y(d.y1)) / 2);
            const perimeter = r * deltaAngle;
            return d.data.name.length * CHAR_SPACE < perimeter;
        };
        const svg = d3
            .select('#sunburst-chart')
            .append('svg')
            .style('width', '100vw')
            .style('height', '400px')
            .style('background', '#fff')
            .attr('viewBox', `${-width / 2} ${-height / 2} ${width} ${height}`)
            .on('click', () => focusOn()); // Reset zoom on canvas click
        const root = d3.hierarchy(nodeData).sum(function (d) {
            return d.size;
        });
        const slice = svg.selectAll('g.slice').data(partition(root).descendants());
        const newSlice = slice
            .enter()
            .append('g')
            .attr('class', 'slice')
            .on('click', (d) => {
            d3.event.stopPropagation();
            focusOn(d);
        });
        const arc = d3
            .arc()
            .startAngle((d) => x(d.x0))
            .endAngle((d) => x(d.x1))
            .innerRadius((d) => Math.max(0, y(d.y0)))
            .outerRadius((d) => Math.max(0, y(d.y1)));
        newSlice
            .append('path')
            .attr('class', 'main-arc')
            .attr('fill', (d) => color(d.data.change))
            .transition()
            // .delay(function(d,i) {
            //   return 500 * (d.y1 - d.y0) * i;
            // })
            .duration(function (d) {
            return 2000 * (d.y1 - d.y0);
        })
            .attrTween('d', function (d) {
            var i = d3.interpolate(d.x0, d.x1);
            return function (t) {
                d.x1 = i(t);
                return arc(d);
            };
        });
        newSlice
            .append('path')
            .attr('class', 'hidden-arc')
            .attr('id', (_, i) => `hiddenArc${i}`)
            .attr('d', middleArcLine);
        const text = newSlice
            .append('text')
            .style('stroke', '#000')
            .attr('fill', '#000')
            .style('font-size', '1.2rem');
        text
            .append('textPath')
            .attr('startOffset', '50%')
            .attr('xlink:href', (_, i) => `#hiddenArc${i}`)
            .text((d) => {
            if (d.data.change != 0) {
                return `${d.data.name} (${numeral(d.data.change).format('0.0')}%)`;
            }
            else {
                return ``;
            }
        });
        function focusOn(d = { x0: 0, x1: 1, y0: 0, y1: 1 }) {
            const transition = svg
                .transition()
                .duration(500)
                .tween('scale', () => {
                const xd = d3.interpolate(x.domain(), [d.x0, d.x1]), yd = d3.interpolate(y.domain(), [d.y0, 1]);
                return (t) => {
                    x.domain(xd(t));
                    y.domain(yd(t));
                };
            });
            transition.selectAll('path.main-arc').attrTween('d', (d) => () => arc(d));
            transition.selectAll('path.hidden-arc').attrTween('d', (d) => () => middleArcLine(d));
            transition.selectAll('text').attrTween('display', (d) => () => (textFits(d) ? null : 'none'));
            moveStackToFront(d);
            function moveStackToFront(elD) {
                svg
                    .selectAll('.slice')
                    .filter((d) => d === elD)
                    .each(function (d) {
                    this.parentNode.appendChild(this);
                    if (d.parent) {
                        moveStackToFront(d.parent);
                    }
                })
                    .transition()
                    .duration(500);
            }
        }
    }
    render() {
        return [h("div", { id: "sunburst-chart" })];
    }
    static get is() { return "app-sunburst"; }
    static get properties() { return {
        "baseCurrency": {
            "type": "Any",
            "attr": "base-currency"
        },
        "exchanges": {
            "type": "Any",
            "attr": "exchanges"
        },
        "totalBalance": {
            "type": Number,
            "attr": "total-balance"
        },
        "wallets": {
            "type": "Any",
            "attr": "wallets"
        }
    }; }
    static get style() { return ".slice {\n  cursor: pointer;\n}\n\n.slice .main-arc {\n  stroke: #fff;\n  stroke-width: 5px;\n}\n\n.slice .hidden-arc {\n  fill: none;\n}\n\n.slice text {\n  pointer-events: none;\n  text-anchor: middle;\n}"; }
}

export { AppOverview, AppSplineChart as AppSplinechart, AppSunburst };
