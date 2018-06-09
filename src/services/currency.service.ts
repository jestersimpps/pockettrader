import { STORE } from './storage';

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
  USD: number;
  EUR: number;
  GBP: number;
}

export class CurrencyService {
  storage = STORE;

  getBaseCurrency(): Promise<Currency> {
    return this.storage.get('basecurrency');
  }

  getConversionRates(): Promise<BtcPrice> {
    return axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`).then((response) => {
      const conversionRates = <BtcPrice>{
        mBTC: 1000,
        USD: +response.data.bpi.USD.rate_float,
        EUR: +response.data.bpi.EUR.rate_float,
        GBP: +response.data.bpi.GBP.rate_float,
      };
      this.storage.set('conversionrates', conversionRates);
      return conversionRates;
    });
  }

  setBaseCurrency(currency: Currency): void {
    this.storage.set('basecurrency', currency);
  }

  convertToBase(btcValue: number, conversionRates: BtcPrice, baseCurrency: Currency): number {
    return btcValue * conversionRates[`${baseCurrency}`];
  }
}
