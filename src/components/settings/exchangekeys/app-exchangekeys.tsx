import { Component, Prop, State } from '@stencil/core';
import { Store, Action } from '@stencil/redux';
import { ExchangeId, Exchange } from '../../../services/exchange.service';
import { appSetExchanges } from '../../../actions/app';

@Component({
  tag: 'app-exchangekeys',
  styleUrl: 'app-exchangekeys.css',
})
export class AppExchangeKeys {
  @Prop({ context: 'store' })
  store: Store;
  @State() exchanges: Exchange[] = [];
  @State() exchange: Exchange = new Exchange();
  @Prop() exchangeId: ExchangeId;

  appSetExchanges: Action;

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { exchanges },
      } = state;
      return {
        exchanges,
      };
    });
    this.store.mapDispatchToProps(this, {
      appSetExchanges,
    });
    this.exchange = this.exchanges.find((e) => e.id === this.exchangeId);
  }

  changeValue(ev, exchange) {
    let value = ev.target.value;
    switch (ev.target.name) {
      case 'key': {
        exchange.key = value;
        break;
      }
      case 'secret': {
        exchange.secret = value;
        break;
      }
    }
    this.appSetExchanges(this.exchanges);
  }

  deleteKeys(exchange) {
    exchange.key = null;
    exchange.secret = null;
    this.appSetExchanges(this.exchanges);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/settings" />
          </ion-buttons>
          <ion-title>Set {this.exchangeId} API keys</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-list>
          <ion-item lines="none">
            <ion-label>Key</ion-label>
          </ion-item>
          <ion-item lines="full">
            <ion-input name="key" type="text" value={this.exchange.key} onInput={(ev) => this.changeValue(ev, this.exchange)} />
          </ion-item>
          <ion-item lines="none">
            <ion-label>Secret</ion-label>
          </ion-item>
          <ion-item lines="none">
            <ion-input name="secret" type="password" value={this.exchange.secret} onInput={(ev) => this.changeValue(ev, this.exchange)} />
          </ion-item>
        </ion-list>
        <ion-nav-pop>
          <ion-button icon-left color="success" expand="full">
            Set
          </ion-button>
        </ion-nav-pop>
      </ion-content>,
    ];
  }
}
