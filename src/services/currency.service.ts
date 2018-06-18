import { Exchange } from './exchange.service';
import { STORAGE } from './storage';
import { Balance } from './balance.service';

declare const axios;

export class Currency {
  id: string;
  symbol: string;
  conversionRate: number;
}

export class CurrencyService {
  currencies = [
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

  getBaseCurrency(): Promise<Currency> {
    return STORAGE.get('basecurrency');
  }

  getConversionRates(): Promise<Currency[]> {
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

  setBaseCurrency(currency: Currency): void {
    STORAGE.set('basecurrency', currency);
  }

  convertToBase(btcValue: number, baseCurrency: Currency): number {
    return btcValue * this.currencies.find((c) => c.id === baseCurrency.id).conversionRate;
  }

  getBaseTotal(exchange: Exchange, baseCurrency: Currency) {
    let sum = 0;
    exchange.balances.forEach((balance: Balance) => {
      sum += balance.btcAmount;
    });
    return this.convertToBase(sum, baseCurrency);
  }
}
