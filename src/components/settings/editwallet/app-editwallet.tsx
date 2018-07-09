import { Component, Prop, State } from '@stencil/core';
import { Store, Action } from '@stencil/redux';
import { appSetWallets } from '../../../actions/app';
import { Wallet } from '../../../services/wallets.service';
import { TICKERSERVICE } from '../../../services/globals';

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
          currency: response.data.data.symbol,
          balance: 0,
          btcPrice: response.data.data.quotes.BTC.price,
          btcAmount: 0,
          change: +response.data.data.quotes.BTC.percent_change_24h,
        };
      });
    }
  }

  changeValue(ev) {
    let wallet = this.wallets.find((w) => w.id === this.walletId);
    if (wallet) {
      wallet.balance = +ev.target.value > 0 ? +ev.target.value : null;
      this.appSetWallets(this.wallets);
    } else {
      this.wallet.balance = +ev.target.value > 0 ? +ev.target.value : null;
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
            <ion-title>Set {this.wallet.currency} Holdings</ion-title>
          </ion-toolbar>
        </ion-header>,
        <ion-content>
          <ion-list>
            <ion-item lines="none">
              <ion-label>Amount:</ion-label>
              <ion-input clearInput={true} name="key" type="number" value={`${this.wallet.balance}`} onInput={(ev) => this.changeValue(ev)} />
            </ion-item>
          </ion-list>
          <ion-nav-pop>
            <ion-button icon-left color="success" expand="full">
              Set
            </ion-button>
          </ion-nav-pop>
        </ion-content>,
      ]
    );
  }
}
