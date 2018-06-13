import { Component, Prop, State } from '@stencil/core';
import { Store, Action } from '@stencil/redux';
import { appSetWallets } from '../../actions/app';
import { Wallet } from '../../services/ticker.service';

@Component({
  tag: 'app-editwallet',
  styleUrl: 'app-editwallet.css',
})
export class AppEditwallet {
  @Prop({ context: 'store' })
  store: Store;
  @State() wallets: Wallet[] = [];
  @State() wallet: Wallet = new Wallet();
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
    this.wallet = this.wallets.find((e) => e.id === this.walletId);
  }

  changeValue(ev, wallet) {
    wallet.amount = ev.target.value;
    this.appSetWallets(this.wallets);
  }

  deleteAmount(wallet) {
    wallet.amount = null;
    this.appSetWallets(this.wallets);
  }

  render() {
    return [
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
            <ion-input name="key" type="number" value={`${this.wallet.amount}`} onInput={(ev) => this.changeValue(ev, this.wallet)} />
          </ion-item>
        </ion-list>
      </ion-content>,
      <ion-footer>
        <ion-toolbar>
          <ion-nav-pop>
            <ion-button icon-left color="danger" class="full" onClick={() => this.deleteAmount(this.wallet)}>
              Remove Holdings
            </ion-button>
          </ion-nav-pop>
        </ion-toolbar>
      </ion-footer>,
    ];
  }
}
