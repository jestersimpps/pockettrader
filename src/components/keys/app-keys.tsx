import { Component, Prop, State } from '@stencil/core';
import { Exchange } from '../exchanges/exchanges';
import { STORE } from '../../services/store';

@Component({
  tag: 'app-keys',
  styleUrl: 'app-keys.css',
})
export class AppKeys {
  @Prop() exchangeId: string;
  @State() exchanges: Exchange[] = [];
  @State() exchange: Exchange = new Exchange();
  storage = STORE;

  componentWillLoad() {
    this.storage.get(`exchanges`).then((exchanges) => {
      this.exchanges = exchanges;
      this.exchange = this.exchanges.find((e) => e.id === this.exchangeId);
    });
  }

  saveKeys() {
    this.storage.set(`exchanges`, this.exchanges);
  }

  removeKeys() {
    this.exchange.key = '';
    this.exchange.secret = '';
    this.storage.set(`exchanges`, this.exchanges);
  }

  changeValue(ev) {
    let value = ev.target.value;
    switch (ev.target.name) {
      case 'key': {
        this.exchange.key = value;
        break;
      }
      case 'secret': {
        this.exchange.secret = value;
        break;
      }
    }
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
            <ion-input name="key" type="text" value={this.exchange.key} onInput={(ev) => this.changeValue(ev)} />
          </ion-item>
          <ion-item>
            <ion-label>Secret</ion-label>
            <ion-input name="secret" type="password" value={this.exchange.secret} onInput={(ev) => this.changeValue(ev)} />
          </ion-item>
        </ion-list>
      </ion-content>,
      <ion-footer>
        <ion-toolbar>
          <ion-button color="danger" class="full" onClick={() => this.removeKeys()}>
            Erase Keys From Phone
          </ion-button>
          <ion-button color="success" class="full" onClick={() => this.saveKeys()}>
            Save Keys On Phone
          </ion-button>
        </ion-toolbar>
      </ion-footer>,
    ];
  }
}
