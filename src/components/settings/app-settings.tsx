import { Component } from '@stencil/core';
@Component({
  tag: 'app-settings',
  styleUrl: 'app-settings.css',
})
export class AppSettings {
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
      <ion-content>
        <ion-list>
          <ion-item lines="full" href={`/settings/keys`}>
            <ion-icon name="key" item-start padding/>
            <ion-label>API Keys</ion-label>
          </ion-item>
          <ion-item lines="full" href={`/settings/basecurrency`}>
            <ion-icon name="logo-usd" item-start padding/>
            <ion-label>Base Currency</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>,
    ];
  }
}
