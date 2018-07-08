/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as STORAGE, b as ExchangeService } from './chunk-ea6d9d39.js';

class TokenService {
    constructor() { }
    getTokenFromStorage() {
        return STORAGE.get('token');
    }
    setToken(token) {
        return STORAGE.set('token', token);
    }
    generateNewToken() {
        let time = new Date().getTime();
        let hashid = new Hashids(`token-${time}`, 8);
        return hashid.encode(1, 2, 3);
    }
}

class WalletService {
    getWalletsFromStorage() {
        return STORAGE.get('wallets');
    }
    setWallets(wallets) {
        return STORAGE.set('wallets', wallets);
    }
    getCoinmarketCapListings() {
        return axios.get(`https://api.coinmarketcap.com/v2/listings/`);
    }
}

class BalanceService {
    getTotalBalancesFromStorage() {
        return STORAGE.get('totalbalances');
    }
    getBalancesFromStorage() {
        return STORAGE.get('balances');
    }
    getLatestTotal(totalBalances) {
        if (totalBalances.length) {
            return totalBalances[totalBalances.length - 1][1];
        }
        return 0;
    }
    setTotalBalances(totalbalances) {
        STORAGE.set(`totalbalances`, totalbalances);
    }
    setBalances(balances) {
        STORAGE.set(`balances`, balances);
    }
    getBalances(exchange) {
        return axios.post(`https://lightningassets.com/exchangeapi/${exchange.id}/balances/get`, {
            key: exchange.key,
            secret: exchange.secret,
        });
    }
    refreshBalances(wallets, exchanges, dust) {
        let exchangeIds = [];
        let tickerPromises = [];
        let balancePromises = [];
        let walletPromises = [];
        let scopedTickers = [];
        let scopedWallets = wallets.filter((w) => w.balance > 0);
        let scopedExchanges = exchanges.filter((e) => e.key && e.secret);
        scopedExchanges.forEach((exchange) => {
            exchangeIds.push(exchange.id);
            tickerPromises.push(TICKERSERVICE.getTickers(exchange.id));
            balancePromises.push(BALANCESERVICE.getBalances(exchange));
        });
        scopedWallets.forEach((wallet) => walletPromises.push(TICKERSERVICE.getCoinmarketcapTicker(wallet.id)));
        let response = {
            conversionrates: null,
            tickers: null,
            wallets: null,
            exchanges: null,
            exchangeTotal: 0,
            walletTotal: 0,
        };
        return CURRENCYSERVICE.getConversionRates()
            .then((priceData) => {
            response.conversionrates = priceData;
            return Promise.all(tickerPromises)
                .then((tickerData) => {
                return Promise.all(walletPromises)
                    .then((walletData) => {
                    return Promise.all(balancePromises)
                        .then((balanceData) => {
                        for (let index = 0; index < exchangeIds.length; index++) {
                            // refresh tickers
                            scopedTickers[index] = {
                                exchangeId: exchangeIds[index],
                                tickers: tickerData[index].data,
                            };
                            // refresh exchange balances
                            scopedExchanges[index].balances = balanceData[index].data
                                .map((balance) => {
                                const btc = this.getBtcStats(balance, tickerData[index].data);
                                response.exchangeTotal += btc.amount;
                                return {
                                    btcAmount: btc.amount,
                                    balance: balance.balance,
                                    pending: balance.pending,
                                    available: balance.available,
                                    currency: balance.currency,
                                    btcPrice: btc.price,
                                    change: btc.change,
                                };
                            })
                                .filter((b) => {
                                return +b.btcAmount > dust; // leave out dust balances
                            });
                        }
                        // refresh wallets
                        for (let index = 0; index < scopedWallets.length; index++) {
                            scopedWallets[index].btcPrice = +walletData[index].data.data.quotes.BTC.price;
                            scopedWallets[index].btcAmount = +scopedWallets[index].balance * +walletData[index].data.data.quotes.BTC.price;
                            scopedWallets[index].change = +walletData[index].data.data.quotes.BTC.percent_change_24h;
                            response.walletTotal += +scopedWallets[index].balance * +walletData[index].data.data.quotes.BTC.price;
                        }
                        response.tickers = scopedTickers;
                        response.wallets = scopedWallets;
                        response.exchanges = exchanges.map((e) => {
                            let newData = scopedExchanges.find((s) => s.id === e.id);
                            if (newData) {
                                return newData;
                            }
                            return e;
                        });
                        return response;
                    })
                        .catch(() => {
                        window.alert(`Error fetching balance data, please check API keys`);
                        return null;
                    });
                })
                    .catch(() => {
                    window.alert(`Error fetching wallet data, please check internet connection`);
                    return null;
                });
            })
                .catch(() => {
                window.alert(`Error fetching ticker data, please check internet connection`);
                return null;
            });
        })
            .catch(() => {
            window.alert(`Error fetching conversionrates, please check internet connection`);
            return null;
        });
    }
    getBtcStats(balance, tickerData) {
        let stats = { price: 0, amount: 0, change: 0, last: 0, symbol: null };
        const altTicker = tickerData.find((t) => t.symbol === `${balance.currency}/BTC`);
        const fiatTicker = tickerData.find((t) => t.symbol === `BTC/${balance.currency}`);
        if (balance.currency === 'BTC') {
            stats.amount = balance.balance;
            stats.price = 1;
        }
        if (altTicker) {
            stats.amount = balance.balance * altTicker.last;
            stats.price = altTicker.last;
            stats.change = altTicker.percentage;
            stats.symbol = altTicker.symbol;
        }
        if (fiatTicker) {
            stats.amount = balance.balance / fiatTicker.last;
            stats.price = 1 / fiatTicker.last;
            stats.change = fiatTicker.percentage;
            stats.symbol = fiatTicker.symbol;
        }
        return stats;
    }
}

class CurrencyService {
    constructor() {
        this.currencies = [
            {
                id: `mBTC`,
                symbol: `mBTC`,
                conversionRate: 1000,
            },
            {
                id: `BTC`,
                symbol: `BTC`,
                conversionRate: 1,
            },
            {
                id: `EUR`,
                symbol: `€`,
                conversionRate: null,
            },
            {
                id: `USD`,
                symbol: `$`,
                conversionRate: null,
            },
            {
                id: `GBP`,
                symbol: `£`,
                conversionRate: null,
            },
        ];
    }
    getBaseCurrencyFromStorage() {
        return STORAGE.get('basecurrency');
    }
    getConversionRates() {
        return axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`).then((response) => {
            this.currencies.map((c) => {
                switch (c.id) {
                    case 'USD':
                        c.conversionRate = +response.data.bpi.USD.rate_float;
                        break;
                    case 'EUR':
                        c.conversionRate = +response.data.bpi.EUR.rate_float;
                        break;
                    case 'GBP':
                        c.conversionRate = +response.data.bpi.GBP.rate_float;
                        break;
                    default:
                        break;
                }
            });
            STORAGE.set('currencies', this.currencies);
            return this.currencies;
        });
    }
    setBaseCurrency(currency) {
        STORAGE.set('basecurrency', currency);
    }
    convertToBase(btcValue, baseCurrency) {
        return btcValue * this.currencies.find((c) => c.id === baseCurrency.id).conversionRate;
    }
    getBaseTotal(balances, baseCurrency) {
        let sum = 0;
        balances.forEach((balance) => {
            sum += balance.btcAmount;
        });
        return this.convertToBase(sum, baseCurrency);
    }
}

class TickerService {
    getTickersFromStorage() {
        return STORAGE.get('tickers');
    }
    setTickers(tickers) {
        return STORAGE.set('tickers', tickers);
    }
    getTickers(exchangeId) {
        return axios.get(`https://lightningassets.com/exchangeapi/${exchangeId}/tickers`);
    }
    getTicker(exchangeId, pair) {
        return axios.get(`https://lightningassets.com/exchangeapi/${exchangeId}/ticker/data?symbol=${pair}`);
    }
    getCoinmarketcapTicker(tickerId) {
        return axios.get(`https://api.coinmarketcap.com/v2/ticker/${tickerId}/?convert=BTC`);
    }
}

var OrderType;
(function (OrderType) {
    OrderType["LIMITSELL"] = "LIMITSELL";
    OrderType["LIMITBUY"] = "LIMITBUY";
    OrderType["MARKETSELL"] = "MARKETSELL";
    OrderType["MARKETBUY"] = "MARKETBUY";
    OrderType["CANCEL"] = "CANCEL";
})(OrderType || (OrderType = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["open"] = "open";
    OrderStatus["filled"] = "filled";
    OrderStatus["cancelled"] = "cancelled";
    OrderStatus["closed"] = "closed";
    OrderStatus["failed"] = "failed";
})(OrderStatus || (OrderStatus = {}));
class TradeService {
    getOrdersFromStorage() {
        return STORAGE.get('orders');
    }
    setOrders(orders) {
        return STORAGE.set('orders', orders);
    }
    newOrder(exchange, newOrder) {
        return axios.post(`https://lightningassets.com/exchangeapi/${exchange.id}/orders/create`, newOrder);
    }
    getOrder(exchange, orderId, pair) {
        return axios.post(`https://lightningassets.com/exchangeapi/${exchange.id}/orders/get`, {
            pair: pair,
            orderId: orderId,
            clientCreds: {
                key: exchange.key,
                secret: exchange.secret,
            },
        });
    }
    cancelOrder(exchange, orderId, pair) {
        return axios.post(`https://lightningassets.com/exchangeapi/${exchange.id}/orders/cancel`, {
            pair: pair,
            orderId: orderId,
            clientCreds: {
                key: exchange.key,
                secret: exchange.secret,
            },
        });
    }
    getOhlc(exchangeId, symbol, timeFrame = '1h') {
        return axios.get(`https://lightningassets.com/exchangeapi/${exchangeId}/ticker/ohlc?symbol=${symbol}&timeframe=${timeFrame}`);
    }
}

const CURRENCYSERVICE = new CurrencyService();
const BALANCESERVICE = new BalanceService();
const EXCHANGESERVICE = new ExchangeService();
const TICKERSERVICE = new TickerService();
const WALLETSERVICE = new WalletService();
const TOKENSERVICE = new TokenService();
const TRADESERVICE = new TradeService();

export { CURRENCYSERVICE as a, TICKERSERVICE as b, BALANCESERVICE as c, TRADESERVICE as d, OrderStatus as e, OrderType as f, WALLETSERVICE as g, TOKENSERVICE as h, EXCHANGESERVICE as i };
