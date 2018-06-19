import { ClientCreds } from './clientcreds.model';

export class PairRequest {
  readonly pair?: string;
  readonly clientCreds: ClientCreds;
  since?: string;
  limit?: number;
}
