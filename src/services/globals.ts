import { TokenService } from './token.service';
import { WalletService } from './wallets.service';
import { BalanceService } from './balance.service';
import { CurrencyService } from './currency.service';
import { ExchangeService } from './exchange.service';
import { TickerService } from './ticker.service';
import { TradeService } from './trade.service';
export const CURRENCYSERVICE: CurrencyService = new CurrencyService();
export const BALANCESERVICE: BalanceService = new BalanceService();
export const EXCHANGESERVICE: ExchangeService = new ExchangeService();
export const TICKERSERVICE: TickerService = new TickerService();
export const WALLETSERVICE: WalletService = new WalletService();
export const TOKENSERVICE: TokenService = new TokenService();
export const TRADESERVICE: TradeService = new TradeService();
export class ClientCreds {
  readonly key: string;
  readonly secret: string;
}
