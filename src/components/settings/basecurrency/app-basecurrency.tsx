import { Component, State, Prop } from '@stencil/core';
import { Currency } from '../../../services/currency.service';
import { Store, Action } from '@stencil/redux';
import { appSetBaseCurrency } from '../../../actions/app';
import { CURRENCYSERVICE } from '../../../services/globals';

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
              {CURRENCYSERVICE.currencies.map((currency) => (
                <ion-item lines="full">
                  <ion-label>{currency.id}</ion-label>
                  <ion-radio
                    checked={this.baseCurrency.id === currency.id}
                    value={currency.id}
                    onClick={() => this.appSetBaseCurrency(currency)}
                  />
                </ion-item>
              ))}
            </ion-list>
          </ion-nav-pop>
        )}
      </ion-content>,
    ];
  }
}
