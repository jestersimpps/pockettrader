import '@ionic/core';
import { Component, Prop, Listen } from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css',
})
export class MyApp {
  @Prop({ connect: 'ion-toast-controller' })
  toastCtrl: HTMLIonToastControllerElement;

  /**
   * Handle service worker updates correctly.
   * This code will show a toast letting the
   * user of the PWA know that there is a
   * new version available. When they click the
   * reload button it then reloads the page
   * so that the new service worker can take over
   * and serve the fresh content
   */
  @Listen('window:swUpdate')
  async onSWUpdate() {
    const toast = await this.toastCtrl.create({
      message: 'New version available',
      showCloseButton: true,
      closeButtonText: 'Reload',
    });
    await toast.present();
    await toast.onWillDismiss();
    window.location.reload();
  }

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-exchanges" />
          <ion-route url="/exchanges/:exchangeId" component="app-exchangedetail" />
          <ion-route url="/settings/" component="app-settings" />
          <ion-route url="/settings/keys/:exchangeId" component="app-keys" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
