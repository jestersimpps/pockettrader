import { ExchangeId } from './exchange.service';
import { STORAGE } from './storage';

export enum PanicOrderStatus {
  sold = 'sold',
  bought = 'bought',
  open = 'open',
  cancelled = 'cancelled',
}

export class PanicOrder {
  exchangeId: ExchangeId;
  status: PanicOrderStatus;
  sellPrice: number;
  sellAmount: number;
  include: boolean;
}

export class PanicOrderService {
  getPanicOrdersFromStore(): Promise<PanicOrder[]> {
    return STORAGE.get('panicorders');
  }
  setTickers(orders: PanicOrder[]): void {
    return STORAGE.set('panicorders', orders);
  }
}
