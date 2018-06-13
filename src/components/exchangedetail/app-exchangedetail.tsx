import { Component, Prop, State } from '@stencil/core';
import { Exchange, ExchangeId } from '../../services/exchange.service';
import { Store, Action } from '@stencil/redux';
import { Currency, BtcPrice } from '../../services/currency.service';
import { Ticker } from '../../services/ticker.service';
import numeral from 'numeral';
import { CURRENCYSERVICE } from '../../services/globals';

@Component({
  tag: 'app-exchangedetail',
  styleUrl: 'app-exchangedetail.css',
})
export class AppExchangeDetail {
  @Prop({ context: 'store' })
  store: Store;
  @Prop() exchangeId: ExchangeId;

  @State() exchanges: Exchange[] = [];
  @State() exchange: Exchange = new Exchange();
  @State() tickers: Ticker[] = [];
  @State() baseCurrency: Currency;
  @State() conversionRates: BtcPrice;

  appSetExchanges: Action;
  appSetBaseCurrency: Action;
  appSetConversionRates: Action;

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { exchanges, baseCurrency, conversionRates, tickers },
      } = state;
      return {
        exchanges,
        baseCurrency,
        conversionRates,
        tickers,
      };
    });
    this.exchange = this.exchanges.find((e) => e.id === this.exchangeId);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>{this.exchangeId}</ion-title>
          <ion-buttons padding slot="end">
            <ion-badge slot="end" color="light">
              {this.exchange &&
                `${numeral(CURRENCYSERVICE.getBaseTotal(this.exchange, this.conversionRates, this.baseCurrency)).format(
                  this.baseCurrency === Currency.btc ? '0,0.0000' : '0,0.00',
                )} ${this.baseCurrency}`}
            </ion-badge>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <app-exchangebalances exchangeId={this.exchangeId} />
      </ion-content>,
      <ion-footer>
        <ion-toolbar>
          <ion-button icon-left color="light" class="full" disabled>
            Trade
          </ion-button>
        </ion-toolbar>
      </ion-footer>,
    ];
  }
}
