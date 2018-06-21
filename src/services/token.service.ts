import { STORAGE } from './storage';

declare const Hashids;

export class TokenService {
  constructor() {}
  getTokenFromStore(): Promise<string> {
    return STORAGE.get('token');
  }

  setToken(token: string): void {
    return STORAGE.set('token', token);
  }

  generateNewToken(): string {
    let time = new Date().getTime();
    let hashid = new Hashids(`token-${time}`, 8);
    return hashid.encode(1, 2, 3);
  }
}
