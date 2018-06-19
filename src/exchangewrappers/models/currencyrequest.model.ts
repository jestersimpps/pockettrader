import { ClientCreds } from './clientcreds.model';

export class CurrencyRequest {
    readonly currency?: string;
    readonly clientCreds: ClientCreds;
}
