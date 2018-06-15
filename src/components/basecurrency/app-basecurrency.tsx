import { Component, State, Prop } from '@stencil/core';
import { Currency } from '../../services/currency.service';
import { Store, Action } from '@stencil/redux';
import { appSetBaseCurrency } from '../../actions/app';

@Component({
  tag: 'app-basecurrency',
  styleUrl: 'app-basecurrency.css',
})
export class AppBaseCurrency {
  @Prop({ context: 'store' })
  store: Store;
  @State() baseCurrency: Currency;

  appSetBaseCurrency: Action;

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { baseCurrency },
      } = state;
      return {
        baseCurrency,
      };
    });
    this.store.mapDispatchToProps(this, {
      appSetBaseCurrency,
    });
    
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/settings" />
          </ion-buttons>
          <ion-title>Base Currency</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        {this.baseCurrency && (
          <ion-nav-pop>
            <ion-list>
              <ion-item lines="full">
                <ion-label>mBTC</ion-label>
                <ion-radio checked={this.baseCurrency === Currency.mbtc} value="mBTC" onClick={() => this.appSetBaseCurrency(Currency.mbtc)} />
              </ion-item>
              <ion-item lines="full">
                <ion-label>BTC</ion-label>
                <ion-radio checked={this.baseCurrency === Currency.btc} value="BTC" onClick={() => this.appSetBaseCurrency(Currency.btc)} />
              </ion-item>
              <ion-item lines="full">
                <ion-label>USD</ion-label>
                <ion-radio checked={this.baseCurrency === Currency.usd} value="USD" onClick={() => this.appSetBaseCurrency(Currency.usd)} />
              </ion-item>
              <ion-item lines="full">
                <ion-label>EUR</ion-label>
                <ion-radio checked={this.baseCurrency === Currency.eur} value="EUR" onClick={() => this.appSetBaseCurrency(Currency.eur)} />
              </ion-item>
              <ion-item lines="full">
                <ion-label>GBP</ion-label>
                <ion-radio checked={this.baseCurrency === Currency.gbp} value="GBP" onClick={() => this.appSetBaseCurrency(Currency.gbp)} />
              </ion-item>
            </ion-list>
          </ion-nav-pop>
        )}
      </ion-content>,
    ];
  }
}
