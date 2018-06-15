import { Component, Prop, State } from '@stencil/core';
import { Store, Action } from '@stencil/redux';
import { appSetWallets } from '../../actions/app';
import { Wallet } from '../../services/wallets.service';
import { TICKERSERVICE } from '../../services/globals';

@Component({
  tag: 'app-editwallet',
  styleUrl: 'app-editwallet.css',
})
export class AppEditwallet {
  @Prop({ context: 'store' })
  store: Store;
  @State() wallets: Wallet[] = [];
  @State() wallet: Wallet;
  @Prop() walletId: number;

  appSetWallets: Action;

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { wallets },
      } = state;
      return {
        wallets,
      };
    });
    this.store.mapDispatchToProps(this, {
      appSetWallets,
    });
    let wallet = this.wallets.find((w) => w.id === this.walletId);
    if (wallet) {
      this.wallet = wallet;
    } else {
      TICKERSERVICE.getCoinmarketcapTicker(this.walletId).then((response) => {
        this.wallet = {
          id: response.data.data.id,
          name: response.data.data.name,
          symbol: response.data.data.symbol,
          amount: 0,
          icon: `https://github.com/cjdowner/cryptocurrency-icons/raw/master/32/icon/${response.data.data.symbol.toLowerCase()}.png`,
          btcprice: response.data.data.quotes.BTC.price,
          total: 0,
          change: +response.data.data.quotes.BTC.percent_change_24h,
        };
      });
    }
  }

  changeValue(ev) {
    let wallet = this.wallets.find((w) => w.id === this.walletId);
    if (wallet) {
      wallet.amount = +ev.target.value > 0 ? +ev.target.value : null;
      this.appSetWallets(this.wallets);
    } else {
      this.wallet.amount = +ev.target.value > 0 ? +ev.target.value : null;
      this.appSetWallets([...this.wallets, this.wallet]);
    }
  }

  render() {
    return (
      this.wallet && [
        <ion-header>
          <ion-toolbar color="dark">
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/settings" />
            </ion-buttons>
            <ion-title>Set {this.wallet.symbol} Holdings</ion-title>
          </ion-toolbar>
        </ion-header>,
        <ion-content>
          <ion-list>
            <ion-item lines="full">
              <ion-label>Amount</ion-label>
              <ion-input name="key" type="number" value={`${this.wallet.amount}`} onInput={(ev) => this.changeValue(ev)} />
            </ion-item>
          </ion-list>
        </ion-content>,
        <ion-footer>
          <ion-toolbar>
            <ion-nav-pop>
              <ion-button icon-left color="light" class="full">
                Set
              </ion-button>
            </ion-nav-pop>
          </ion-toolbar>
        </ion-footer>,
      ]
    );
  }
}