import { Component } from '@stencil/core';
import { Exchanges } from './exchanges';

@Component({
  tag: 'app-exchanges',
  styleUrl: 'app-exchanges.css',
})
export class AppExchanges {
  exchanges = Exchanges;

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
              <ion-avatar item-start>
                <img src={exchange.icon} />
              </ion-avatar>
              <ion-label>{exchange.id}</ion-label>
              <ion-badge item-end>260k</ion-badge>
            </ion-item>
          ))}
        </ion-list>
      </ion-content>,
      <ion-footer>
        <ion-toolbar>
          <ion-button color="dark" class="full" href="/settings">
            Settings
          </ion-button>
        </ion-toolbar>
      </ion-footer>,
    ];
  }
}
