import { ExchangeId } from './exchange.service';
import { STORAGE } from './storage';

declare const axios;

export class Ticker {
  exchangeId: ExchangeId;
  tickers: any[];
}

export class TickerService {
  getTickersFromStore(): Promise<Ticker[]> {
    return STORAGE.get('tickers');
  }
  setTickers(tickers: Ticker[]): void {
    return STORAGE.set('tickers', tickers);
  }

  getTickers(exchangeId: ExchangeId) {
    return axios.get(`https://lightningassets.com/exchangeapi/${exchangeId}/tickers`);
  }

  getTicker(exchangeId: ExchangeId, pair: string) {
    return axios.get(`https://lightningassets.com/exchangeapi/${exchangeId}/ticker/data?symbol=${pair}`);
  }
  getCoinmarketcapTicker(tickerId: number) {
    return axios.get(`https://api.coinmarketcap.com/v2/ticker/${tickerId}/?convert=BTC`);
  }
}
