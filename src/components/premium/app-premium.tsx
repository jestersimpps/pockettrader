import { Component, State, Prop } from '@stencil/core';
import { Store, Action } from '@stencil/redux';
import { appSetToken } from '../../actions/app';

@Component({
  tag: 'app-premium',
  styleUrl: 'app-premium.css',
})
export class AppPremium {
  @Prop({ context: 'store' })
  store: Store;
  @State() token: string;

  appSetToken: Action;

  componentWillLoad() {
    this.store.mapStateToProps(this, (state) => {
      const {
        app: { token },
      } = state;
      return {
        token,
      };
    });
    this.store.mapDispatchToProps(this, {
      appSetToken,
    });
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/settings" />
          </ion-buttons>
          <ion-title>Premium version</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content>
        {this.token && (
          <ion-nav-pop>
            <ion-list>
              <ion-item lines="full">
                <ion-label>App Version</ion-label>
                <ion-input name="status" type="text" value={`Free`} disabled />
              </ion-item>
              <ion-item lines="full">
                <ion-label>Token</ion-label>
                <ion-input name="key" type="text" value={`${this.token}`} disabled />
              </ion-item>
              <ion-button expand="block">Try Premium for one week</ion-button>
              <ion-button color="success" expand="block">
                Purchase Premium
              </ion-button>
            </ion-list>
          </ion-nav-pop>
        )}
      </ion-content>,
    ];
  }
}
