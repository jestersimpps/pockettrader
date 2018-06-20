import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'app-cryptoicon',
  styleUrl: 'app-cryptoicon.css',
})
export class AppCryptoIcon {
  @Prop() symbol: string;

  render() {
    return [<img src={`/assets/icon/${this.symbol.toLowerCase()}.svg`} />];
  }
}
