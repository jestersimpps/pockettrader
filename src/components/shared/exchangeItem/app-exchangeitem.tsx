import { Component, Prop } from '@stencil/core';
import { Exchange } from '../../../services/exchange.service';
import { Currency, ConversionRates } from '../../../services/currency.service';
import { CURRENCYSERVICE } from '../../../services/globals';

@Component({
  tag: 'app-exchangeitem',
  styleUrl: 'app-exchangeitem.css',
})
export class AppExchangeItem {
  @Prop() exchange: Exchange;
  @Prop() conversionRates: ConversionRates;
  @Prop() baseCurrency: Currency;

  render() {
    return [
      <ion-item lines="full" href={`/exchanges/${this.exchange.id}`}>
        {/* <ion-thumbnail item-start margin-right>
          <img src={this.exchange.icon} />
        </ion-thumbnail> */}
        <ion-label>{this.exchange.id}</ion-label>
        <ion-badge color="light" item-end>
          <app-baseprice
            btcPrice={CURRENCYSERVICE.getBaseTotal(this.exchange, this.conversionRates, this.baseCurrency)}
            baseCurrency={this.baseCurrency}
          />
        </ion-badge>
      </ion-item>,
    ];
  }
}
