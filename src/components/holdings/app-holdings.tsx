import { Component, State, Prop } from '@stencil/core';
import { Store } from '@stencil/redux';
import { Wallet } from '../../services/wallets.service';
import { WALLETSERVICE } from '../../services/globals';
@Component({
  tag: 'app-holdings',
  styleUrl: 'app-holdings.css',
})
export class AppHoldings {
  @Prop({ context: 'store' })
  store: Store;
  cryptos: any[] = [];
  @State() wallets: Wallet[] = [];
  @State() visibleCryptos: any[] = [];
  @State() filteredWallets: Wallet[] = [];

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { wallets },
      } = state;
      return {
        wallets,
      };
    });
    WALLETSERVICE.getCoinmarketCapListings().then((response) => {
      this.cryptos = response.data.data;
    });
  }

  onIonInput(e) {
    const val = e.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.visibleCryptos = this.cryptos.filter((item) => {
        return item.symbol.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    } else {
      this.visibleCryptos = [];
    }
  }

  render() {
    return (
      this.cryptos && [
        <ion-header>
          <ion-toolbar color="dark">
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/settings" />
            </ion-buttons>
            <ion-searchbar color="light" onIonChange={(e) => this.onIonInput(e)} placeholder="Enter Symbol to Add Holdings..." />
          </ion-toolbar>
        </ion-header>,
        <ion-content>
          <ion-list>
            {this.visibleCryptos.length
              ? this.visibleCryptos.slice(0, 20).map((crypto) => (
                  <ion-item lines="full" href={`/settings/holdings/${crypto.id}`}>
                    <ion-label>
                      {crypto.symbol} - {crypto.name}
                    </ion-label>
                  </ion-item>
                ))
              : this.wallets.filter((w) => w.balance > 0).map((wallet) => (
                  <ion-item lines="full" href={`/settings/holdings/${wallet.id}`}>
                    <ion-label>
                      {wallet.currency} - {wallet.name}
                    </ion-label>
                    <ion-label text-right>{wallet.balance}</ion-label>
                  </ion-item>
                ))}
          </ion-list>
        </ion-content>,
      ]
    );
  }
}
