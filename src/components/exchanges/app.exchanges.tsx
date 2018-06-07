import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-exchanges',
  styleUrl: 'app-exchanges.css',
})
export class AppExchanges {
  @Prop()
  exchanges: {
    id: string;
    key: string;
    secret: string;
  }[] = [
    {
      id: 'kraken',
      key: '',
      secret: '',
    },
    {
      id: 'poloniex',
      key: '',
      secret: '',
    },
    {
      id: 'binance',
      key: '',
      secret: '',
    },
    {
      id: 'bittrex',
      key: '',
      secret: '',
    },
  ];

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Exchanges</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
        <ion-list>
          {this.exchanges.map((exchange) => (
            <ion-item href={`/exchanges/${exchange.id}`}>
              <ion-label>{exchange.id}</ion-label>
            </ion-item>
          ))}
        </ion-list>
      </ion-content>,
    ];
  }
}
