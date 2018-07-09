import { Component, State, Prop } from '@stencil/core';
import { Store, Action } from '@stencil/redux';
import { appSetDust } from '../../../actions/app';
import { CURRENCYSERVICE } from '../../../services/globals';
import { Currency } from '../../../services/currency.service';

@Component({
  tag: 'app-dust',
  styleUrl: 'app-dust.css',
})
export class AppDust {
  @Prop({ context: 'store' })
  store: Store;
  @State() dust: number;
  @State() baseCurrency: Currency;

  appSetDust: Action;

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { dust, baseCurrency },
      } = state;
      return {
        dust,
        baseCurrency,
      };
    });
    this.store.mapDispatchToProps(this, {
      appSetDust,
    });
  }

  changeValue(ev) {
    this.dust = +ev.target.value > 0 ? +ev.target.value : 0.000002;
  }

  setValue() {
    this.appSetDust(this.dust);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/settings" />
          </ion-buttons>
          <ion-title>Dust Limit</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-list>
          <ion-item lines="none">
            <ion-label>Only show balances larger than (x) BTC:</ion-label>
          </ion-item>
          <ion-item lines="none">
            <ion-input clearInput={true} name="dust" type="number" value={`${this.dust}`} onInput={(ev) => this.changeValue(ev)} />
          </ion-item>
          <ion-item lines="none">
            <ion-label>
              =   <app-baseprice
                  btcPrice={CURRENCYSERVICE.convertToBase(this.dust, this.baseCurrency)}
                  baseCurrency={this.baseCurrency}
                />
            </ion-label>
          </ion-item>
        </ion-list>
        <ion-nav-pop>
          <ion-button icon-left color="success" expand="full" onClick={() => this.setValue()}>
            Set
          </ion-button>
        </ion-nav-pop>
      </ion-content>,
    ];
  }
}
