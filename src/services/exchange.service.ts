import { Balance } from './balance.service';
import { STORAGE } from './storage';

export class Exchange {
  id: ExchangeId;
  icon: string;
  key: string;
  secret: string;
  balances: Balance[];
}

export enum ExchangeId {
  kraken = 'kraken',
  poloniex = 'poloniex',
  binance = 'binance',
  bittrex = 'bittrex',
}

export const Exchanges: Exchange[] = [
  {
    id: ExchangeId.kraken,
    icon: 'https://cryptocoincharts.info/img/exchanges/kraken.svg',
    key: '',
    secret: '',
    balances: [],
  },
  {
    id: ExchangeId.poloniex,
    icon: 'https://cryptocoincharts.info/img/exchanges/poloniex.svg',
    key: '',
    secret: '',
    balances: [],
  },
  {
    id: ExchangeId.binance,
    icon: 'https://cryptocoincharts.info/img/coins/bnb.svg',
    key: '',
    secret: '',
    balances: [],
  },
  {
    id: ExchangeId.bittrex,
    icon: 'https://cryptocoincharts.info/img/exchanges/bittrex.svg',
    key: '',
    secret: '',
    balances: [],
  },
];

export class ExchangeService {

  getExchanges(): Promise<Exchange[]> {
    return STORAGE.get(`exchanges`);
  }

  setExchanges(exchanges: Exchange[]): void {
    STORAGE.set(`exchanges`, exchanges);
  }
  
}
