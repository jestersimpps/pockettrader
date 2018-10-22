import { Component } from '@stencil/core';

@Component({
  tag: 'app-tutorial',
  styleUrl: 'app-tutorial.css',
})
export class AppTutorial {
  render() {
    return [
      <ion-content>
        <ion-slides pager>
          <ion-slide>
            <div class="slide-content">
              <img src="/assets/tutorial/welcome-img.png" class="slide-image top-image" />
              <h2 class="slide-title">What is PocketTrader? </h2>
              <p>
                Pocket Trader is a crypto portfolio manager that allows you to <b>track and trade</b> your cryptos on the go.
                <br />
                <br />
                <br />
                <small>Beta v0.0.5</small>
              </p>
            </div>
          </ion-slide>
          <ion-slide>
            <div class="slide-content">
              <h2 class="slide-title">Ios Installation</h2>
              <span class="intertext">Step 1:</span>
              <br />
              <img src="/assets/tutorial/ioshomescreen1.png" class="half-slide-image" />
              <br />
              <span class="intertext">Step 2:</span>
              <br />
              <img src="/assets/tutorial/ioshomescreen.png" class="half-slide-image" />
              <p>Click on the share button in the bottom of the browser and select 'Add to Homescreen' </p>
            </div>
          </ion-slide>
          <ion-slide>
            <div class="slide-content">
              <h2 class="slide-title">Android Installation</h2>
              <img src="/assets/tutorial/androidhomescreen.jpeg" class="slide-image" />
              <p>Click on the 3 dots in the top right of your browser and select 'Add to Homescreen' </p>
            </div>
          </ion-slide>
          <ion-slide>
            <div class="slide-content">
              <h2 class="slide-title">Configure Exchanges</h2>
              <span class="intertext">Step 1:</span>
              <br />
              <img src="/assets/tutorial/settings.png" class="half-slide-image" />
              <br />
              <span class="intertext">Step 2:</span>
              <br />
              <img src="/assets/tutorial/apikeys.png" class="half-slide-image" />
              <p>
                To allow the app to connect with the exchanges, you should set up your API keys. You can do this by tapping the 'settings' icon in
                the top left of the screen. Next, tap on 'exchange keys' and enter the readonly/trade key and secret for every exchange you want to
                connect to.
              </p>
            </div>
          </ion-slide>

          <ion-slide>
            <div class="slide-content">
              <h2 class="slide-title">Privacy & Security</h2>
              <p>
                Pocket Trader will <b>Never</b> store your keys on any server. They will be stored on your phone. When you remove the app, the keys
                will be removed from your phone too.
              </p>
              <img src="/assets/tutorial/binancekeys.png" class="slide-image" />
              <p>
                When creating API keys for the different exchanges, you can set a key to be used for reading exchange data, making trades and/or
                withdrawing. Be sure to <b>Never</b> create a key that allows for withdrawing!
              </p>
            </div>
          </ion-slide>
          <ion-slide>
            <div class="slide-content">
              <h2 class="slide-title">Exchange Balances</h2>
              <img src="/assets/tutorial/refresh.png" class="slide-image" />
              <p>
                Once the exchange keys are set, the balance overview will be automatically synchronized by tapping the 'refresh' icon in the top right
                of the overview screen.
              </p>
            </div>
          </ion-slide>
          <ion-slide>
            <div class="slide-content">
              <h2 class="slide-title">Adding wallet balances</h2>
              <span class="intertext">Step 1:</span>
              <br />
              <img src="/assets/tutorial/holdings.png" class="half-slide-image" />
              <br />
              <span class="intertext">Step 2:</span>
              <br />
              <img src="/assets/tutorial/holdings2.png" class="half-slide-image" />
              <p>
                Wallet balances can be added by going to the 'wallet holdings' item in the 'settings' menu. You can find any cryptocurrency by using
                the search box in the top.
              </p>
            </div>
          </ion-slide>
          <ion-slide>
            <div class="slide-content">
              <h2 class="slide-title">Trading</h2>
              <img src="/assets/tutorial/trading.png" class="slide-image" />
              <p>
                Trading will be free for the first 1000 users. After an initial period of testing, trading will become a paying service for about $10 a month.
              </p>
            </div>
          </ion-slide>
        </ion-slides>
      </ion-content>,
    ];
  }
}
