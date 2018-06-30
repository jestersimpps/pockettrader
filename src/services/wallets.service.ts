import { STORAGE } from './storage';

declare const axios;

export class Wallet {
  id: number;
  name: string;
  currency: string;
  balance: number;
  btcPrice: number;
  btcAmount: number;
  change: number;
}

export class WalletService {
  getWalletsFromStorage() {
    return STORAGE.get('wallets');
  }

  setWallets(wallets: Wallet[]): void {
    return STORAGE.set('wallets', wallets);
  }

  getCoinmarketCapListings() {
    return axios.get(`https://api.coinmarketcap.com/v2/listings/`);
  }
}
