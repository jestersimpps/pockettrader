import { ClientCreds } from './clientcreds.model';

export class OrderRequest {
  readonly orderId: string;
  readonly clientCreds: ClientCreds;
  pair?: string;
}
