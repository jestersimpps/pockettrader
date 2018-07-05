import { Component, Prop } from '@stencil/core';
import numeral from 'numeral';
import { Currency } from '../../../services/currency.service';

@Component({
  tag: 'app-baseprice',
  styleUrl: 'app-baseprice.css',
})
export class AppBasePrice {
  @Prop() btcPrice: number;
  @Prop() baseCurrency: Currency;

  render() {
    return [`${this.baseCurrency.symbol} ${numeral(this.btcPrice).format(this.btcPrice < 1 ? '0,0.000000' : '0,0.00')}`];
  }
}
