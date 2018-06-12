import { Exchange, ExchangeId } from './exchange.service';
import { STORAGE } from './storage';
declare const axios;

export class Balance {
  balance: number;
  available: number;
  pending: number;
  currency: string;
  cryptoAddress?: string;
  btc: number;
  usd: number;
  eur: number;
  gbp: number;
  btcprice: number;
  change: number;
}

export class Balances {
  exchangeId: ExchangeId;
  tickers: any[];
}

export class BalanceService {
  getTotalBalances(): Promise<[number, number][]> {
    return STORAGE.get('totalbalances');
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
    return axios.post(`http://lightningassets.com/exchangeapi/${exchange.id}/balances/get`, {
      key: exchange.key,
      secret: exchange.secret,
    });
  }

  getBalancesFromStore(): Promise<Balances> {
    return STORAGE.get('balances');
  }
}
