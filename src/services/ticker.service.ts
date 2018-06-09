import { STORE } from './storage';
import { ExchangeId } from './exchange.service';
declare const axios;

export class TickerService {
  storage = STORE;

  getTickers(exchangeId: ExchangeId) {
    return axios.get(`http://lightningassets.com/exchangeapi/${exchangeId}/tickers`);
  }
}
