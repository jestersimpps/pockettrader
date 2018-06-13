import { Component, State, Prop } from '@stencil/core';
import { Exchange } from '../../services/exchange.service';
import { Store } from '@stencil/redux';

@Component({
  tag: 'app-keys',
  styleUrl: 'app-keys.css',
})
export class AppKeys {
  @Prop({ context: 'store' })
  store: Store;
  @State() exchanges: Exchange[] = [];

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { exchanges },
      } = state;
      return {
        exchanges,
      };
    });
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/settings" />
          </ion-buttons>
          <ion-title>Exchanges</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        <ion-list>
          {this.exchanges.map((exchange) => (
            <ion-item lines="full" href={`/settings/keys/${exchange.id}`}>
              {exchange.key && exchange.secret ? (
                <ion-icon name="checkmark" item-start margin-right />
              ) : (
                <ion-icon name="close" item-start margin-right />
              )}
              <ion-label>{exchange.id}</ion-label>
            </ion-item>
          ))}
        </ion-list>
      </ion-content>,
    ];
  }
}
