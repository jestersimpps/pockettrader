import { ClientCreds } from './clientcreds.model';
import { OrderType } from './../enums/ordertype.enum';

export class NewOrderRequest {
    readonly pair: string;
    readonly type: OrderType;
    readonly price: number;
    readonly amount: number;
    readonly clientCreds: ClientCreds;
}

