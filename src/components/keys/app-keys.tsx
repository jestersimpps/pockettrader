import { Component, Prop } from '@stencil/core';
import { Exchanges } from '../exchanges/exchanges';

@Component({
  tag: 'app-keys',
  styleUrl: 'app-keys.css',
})
export class AppKeys {
  @Prop() exchangeId: string;
  exchange;

  componentWillLoad() {
    this.exchange = Exchanges.find((e) => e.id === this.exchangeId);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>{this.exchange.id} API Keys</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content padding>
        <ion-list>
          <ion-item>
            <ion-label>Key</ion-label>
            <ion-input type="text" />
          </ion-item>
          <ion-item>
            <ion-label>Secret</ion-label>
            <ion-input type="password" />
          </ion-item>
        </ion-list>
      </ion-content>,
      <ion-footer>
        <ion-toolbar>
          <ion-button color="success" class="full">
            Save
          </ion-button>
        </ion-toolbar>
      </ion-footer>,
    ];
  }
}
