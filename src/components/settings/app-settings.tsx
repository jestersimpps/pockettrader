import { Component, State } from '@stencil/core';
import { Exchange } from '../exchanges/exchanges';
import { STORE } from '../../services/store';

@Component({
  tag: 'app-settings',
  styleUrl: 'app-settings.css',
})
export class AppSettings {
  @State() exchanges: Exchange[] = [];
  storage = STORE;

  componentWillLoad() {
    this.storage.get(`exchanges`).then((exchanges) => {
      this.exchanges = exchanges;
    });
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Settings</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
        <ion-list>
          <ion-list-header padding>API Keys</ion-list-header>
          {this.exchanges.map((exchange) => (
            <ion-item href={`/settings/keys/${exchange.id}`}>
              <ion-label> {exchange.id}</ion-label>
              <ion-radio checked={!!exchange.key && !!exchange.secret} />
            </ion-item>
          ))}
          <ion-item>
            <ion-card>
              <ion-card-content>
                <ion-icon name="md-information-circle" />
                These Api keys will never be stored on any server or in any database. The keys are stored locally on your phone.
              </ion-card-content>
            </ion-card>
          </ion-item>
          <ion-list-header padding>Base Currency</ion-list-header>
          <ion-item>
            <ion-label>BTC</ion-label>
            <ion-radio checked={true} value="BTC" />
          </ion-item>
          <ion-item>
            <ion-label>USD</ion-label>
            <ion-radio value="USD" />
          </ion-item>
          <ion-item>
            <ion-label>EUR</ion-label>
            <ion-radio value="EUR" />
          </ion-item>
          <ion-item>
            <ion-label>GBP</ion-label>
            <ion-radio value="GBP" />
          </ion-item>
        </ion-list>
      </ion-content>,
    ];
  }
}
