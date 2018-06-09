import { BalanceService } from './balance.service';
import { CurrencyService } from './currency.service';
import { ExchangeService } from './exchange.service';
import { TickerService } from './ticker.service';
export const CURRENCYSERVICE: CurrencyService = new CurrencyService();
export const BALANCESERVICE: BalanceService = new BalanceService();
export const EXCHANGESERVICE: ExchangeService = new ExchangeService();
export const TICKERSERVICE: TickerService = new TickerService();
