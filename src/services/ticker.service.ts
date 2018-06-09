import { ExchangeId } from './exchange.service';
declare const axios;

export class TickerService {
  getTickers(exchangeId: ExchangeId) {
    return axios.get(`http://lightningassets.com/exchangeapi/${exchangeId}/tickers`);
  }

  getTicker(exchangeId: ExchangeId, pair: string) {
    return axios.get(`http://lightningassets.com/exchangeapi/${exchangeId}/ticker/data?symbol=${pair}`);
  }
}
