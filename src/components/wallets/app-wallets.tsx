import { Component, State, Prop } from '@stencil/core';
import { Wallet } from '../../services/ticker.service';
import { Store } from '@stencil/redux';
@Component({
  tag: 'app-wallets',
  styleUrl: 'app-wallets.css',
})
export class AppWallets {
  @Prop({ context: 'store' })
  store: Store;
  @State() wallets: Wallet[] = [];
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
    this.filteredWallets = this.wallets.filter((item) => item.amount > 0);
  }

  onIonInput(e) {
    const val = e.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.filteredWallets = this.wallets.filter((item) => {
        return item.symbol.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    } else {
      this.filteredWallets = this.wallets.filter((item) => item.amount > 0);
    }
  }

  render() {
    return (
      this.wallets && [
        <ion-header>
          <ion-toolbar color="dark">
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/" />
            </ion-buttons>
            <ion-title>Wallets</ion-title>
          </ion-toolbar>
          <ion-searchbar
            onIonInput={(e) => this.onIonInput(e)}
            onIonCancel={() => (this.filteredWallets = this.wallets.filter((item) => item.amount > 0))}
          />
        </ion-header>,
        <ion-content>
          <ion-list>
            {this.filteredWallets.length ? (
              this.filteredWallets.slice(0, 20).map((crypto) => (
                <ion-item lines="full" href={`/settings/wallets/${crypto.id}`}>
                  <ion-label>
                    {crypto.symbol} - {crypto.name}
                  </ion-label>
                  <ion-label text-right>{crypto.amount ? crypto.amount : 0}</ion-label>
                </ion-item>
              ))
            ) : (
              <ion-item lines="none">
                <ion-label>Use search box to select symbol</ion-label>
              </ion-item>
            )}
          </ion-list>
        </ion-content>,
      ]
    );
  }
}
