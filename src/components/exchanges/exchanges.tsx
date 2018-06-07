import { Balance } from '../exchangedetail/balance.model';

export class Exchange {
  id: string;
  icon: string;
  key: string;
  secret: string;
  balances: Balance[];
}

export const Exchanges: Exchange[] = [
  {
    id: 'kraken',
    icon: 'https://cryptocoincharts.info/img/exchanges/kraken.svg',
    key: '',
    secret: '',
    balances: [],
  },
  {
    id: 'poloniex',
    icon: 'https://cryptocoincharts.info/img/exchanges/poloniex.svg',
    key: '',
    secret: '',
    balances: [],
  },
  {
    id: 'binance',
    icon: 'https://cryptocoincharts.info/img/coins/bnb.svg',
    key: '',
    secret: '',
    balances: [],
  },
  {
    id: 'bittrex',
    icon: 'https://cryptocoincharts.info/img/exchanges/bittrex.svg',
    key: '',
    secret: '',
    balances: [],
  },
];
