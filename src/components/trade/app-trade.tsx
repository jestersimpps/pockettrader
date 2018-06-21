import { Component, Prop } from '@stencil/core';
import { ExchangeId } from '../../services/exchange.service';
import { Store } from '@stencil/redux';

@Component({
  tag: 'app-trade',
  styleUrl: 'app-trade.css',
})
export class AppTrade {
  @Prop({ context: 'store' })
  store: Store;
  @Prop() exchangeId: ExchangeId;
  @Prop() pair: any;

  componentWillLoad() {}

  render() {
    return [];
  }
}
