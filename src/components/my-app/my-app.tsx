import '@ionic/core';
import { Component, Prop } from '@stencil/core';
import { Store } from '@stencil/redux';
import { configureStore } from '../../store';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css',
})
export class MyApp {
  @Prop({ context: 'store' })
  store: Store;

  componentWillLoad() {
    // Only do this once, in the root component
    this.store.setStore(configureStore({}));
  }

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-exchanges" />
          <ion-route url="/exchanges/:exchangeId" component="app-exchangedetail" />
          <ion-route url="/pair/:exchangeId/:pair" component="app-pair" />
          <ion-route url="/settings/" component="app-settings" />
          <ion-route url="/settings/keys" component="app-keys" />
          <ion-route url="/settings/basecurrency" component="app-basecurrency" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
