import { Component, State, Prop } from '@stencil/core';
import { Exchange } from '../../services/exchange.service';
import { Store, Action } from '@stencil/redux';
import { appSetExchanges } from '../../actions/app';

@Component({
  tag: 'app-keys',
  styleUrl: 'app-keys.css',
})
export class AppKeys {
  @Prop({ context: 'store' })
  store: Store;
  @State() exchanges: Exchange[] = [];

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

  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/settings" />
          </ion-buttons>
          <ion-title>API Keys</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-card>
          <ion-card-content>
            <ion-icon name="md-information-circle" />
            These API Keys will never be STORAGEd on any third party server. They will only be STORAGEd locally on your phone.{' '}
          </ion-card-content>
        </ion-card>
        <ion-list>
          {this.exchanges.map((exchange) => (
            <div>
              <ion-item-divider color="light">{exchange.id}</ion-item-divider>
              <ion-item lines="full">
                <ion-label>Key</ion-label>
                <ion-input name="key" type="text" value={exchange.key} onInput={(ev) => this.changeValue(ev, exchange)} />
              </ion-item>
              <ion-item lines="full">
                <ion-label>Secret</ion-label>
                <ion-input name="secret" type="password" value={exchange.secret} onInput={(ev) => this.changeValue(ev, exchange)} />
              </ion-item>
            </div>
          ))}
        </ion-list>
      </ion-content>,
    ];
  }
}
