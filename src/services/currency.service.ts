import { Exchange } from './exchange.service';
import { STORAGE } from './storage';
import { Balance } from './balance.service';

declare const axios;

export enum Currency {
  mbtc = 'mBTC',
  btc = 'BTC',
  usd = 'USD',
  eur = 'EUR',
  gbp = 'GBP',
}

export class BtcPrice {
  mBTC: number;
  BTC: number;
  USD: number;
  EUR: number;
  GBP: number;
}

export class CurrencyService {
  getBaseCurrency(): Promise<Currency> {
    return STORAGE.get('basecurrency');
  }

  getConversionRates(): Promise<BtcPrice> {
    return axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`).then((response) => {
      const conversionRates = <BtcPrice>{
        mBTC: 1000,
        BTC: 1,
        USD: +response.data.bpi.USD.rate_float,
        EUR: +response.data.bpi.EUR.rate_float,
        GBP: +response.data.bpi.GBP.rate_float,
      };
      STORAGE.set('conversionrates', conversionRates);
      return conversionRates;
    });
  }

  setBaseCurrency(currency: Currency): void {
    STORAGE.set('basecurrency', currency);
  }

  convertToBase(btcValue: number, conversionRates: BtcPrice, baseCurrency: Currency): number {
    return btcValue * conversionRates[`${baseCurrency}`];
  }

  getBtcTotal(exchange: Exchange, conversionRates: BtcPrice, baseCurrency: Currency) {
    let sum = 0;
    exchange.balances.forEach((balance: Balance) => {
      sum += balance.btc;
    });
    return this.convertToBase(sum, conversionRates, baseCurrency);
  }
}
