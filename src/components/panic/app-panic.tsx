import { Component, Prop } from '@stencil/core';
import { Store, Action } from '@stencil/redux';

@Component({
  tag: 'app-panic',
  styleUrl: 'app-panic.css',
})
export class AppPanic {
  @Prop({ context: 'store' })
  store: Store;

  appSetToken: Action;

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { exchanges, baseCurrency, currencies, tickers, wallets },
      } = state;
      return {
        exchanges,
        baseCurrency,
        currencies,
        tickers,
        wallets,
      };
    });
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/settings" />
          </ion-buttons>
          <ion-title>All to BTC</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content />,
    ];
  }
}
