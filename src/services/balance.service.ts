import { Exchange, ExchangeId } from './exchange.service';
import { STORAGE } from './storage';
import { Wallet } from './wallets.service';
import { Ticker } from './ticker.service';
import { TICKERSERVICE, BALANCESERVICE, CURRENCYSERVICE } from './globals';
import { Currency } from './currency.service';
import { Order, OrderStatus } from './trade.service';
declare const axios;

export class Balance {
  balance: number;
  available: number;
  pending: number;
  currency: string;
  btcAmount: number;
  btcPrice: number;
  change: number;
}

export class Balances {
  overview: number;
  exchanges: number;
  wallets: number;
}

export class RefreshResponse {
  conversionrates: Currency[];
  tickers: Ticker[];
  wallets: Wallet[];
  orders: Order[];
  exchanges: Exchange[];
  exchangeTotal: number;
  walletTotal: number;
}

export class BalanceService {
  getTotalBalancesFromStorage(): Promise<[number, number][]> {
    return STORAGE.get('totalbalances');
  }

  getBalancesFromStorage(): Promise<Balances> {
    return STORAGE.get('balances');
  }

  getLatestTotal(totalBalances: [number, number][]): number {
    if (totalBalances.length) {
      return totalBalances[totalBalances.length - 1][1];
    }
    return 0;
  }

  setTotalBalances(totalbalances: [number, number][]): void {
    STORAGE.set(`totalbalances`, totalbalances);
  }

  setBalances(balances: Balances): void {
    STORAGE.set(`balances`, balances);
  }

  getBalances(exchange: Exchange): Promise<Balance[]> {
    return axios.post(`https://lightningassets.com/exchangeapi/${exchange.id}/balances/get`, {
      key: exchange.key,
      secret: exchange.secret,
    });
  }

  refreshBalances(wallets: Wallet[], exchanges: Exchange[], orders: Order[], dust: number): Promise<RefreshResponse> {
    let exchangeIds: ExchangeId[] = [];
    let tickerPromises = [];
    let balancePromises = [];
    let walletPromises = [];
    let scopedTickers: Ticker[] = [];
    let scopedWallets: Wallet[] = wallets.filter((w) => w.balance > 0);
    let scopedExchanges: Exchange[] = exchanges.filter((e) => e.key && e.secret);

    scopedExchanges.forEach((exchange) => {
      exchangeIds.push(exchange.id);
      tickerPromises.push(TICKERSERVICE.getTickers(exchange.id));
      balancePromises.push(BALANCESERVICE.getBalances(exchange));
    });
    scopedWallets.forEach((wallet) => walletPromises.push(TICKERSERVICE.getCoinmarketcapTicker(wallet.id)));

    let response: RefreshResponse = {
      conversionrates: null,
      tickers: null,
      wallets: null,
      orders: null,
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
                    // refresh orders
                    orders.filter((o) => o.status != OrderStatus.cancelled).map((order) => {
                      let tickerData = scopedTickers.find((t) => t.exchangeId === order.exchangeId).tickers;
                      let ticker = tickerData.find((t) => t.symbol === order.pair);
                      order.last = ticker.last;
                      console.log(order);
                      return order;
                    });
                    // refresh wallets
                    for (let index = 0; index < scopedWallets.length; index++) {
                      scopedWallets[index].btcPrice = +walletData[index].data.data.quotes.BTC.price;
                      scopedWallets[index].btcAmount = +scopedWallets[index].balance * +walletData[index].data.data.quotes.BTC.price;
                      scopedWallets[index].change = +walletData[index].data.data.quotes.BTC.percent_change_24h;
                      response.walletTotal += +scopedWallets[index].balance * +walletData[index].data.data.quotes.BTC.price;
                    }
                    response.tickers = scopedTickers;
                    response.orders = orders.filter((o) => o.orderId); // filter out failed orders
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

  getBtcStats(balance: any, tickerData): { price: number; amount: number; change: number; last: number; symbol: string } {
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
