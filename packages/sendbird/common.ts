import { Observable } from '@nativescript/core';

export const APP_ID = '1B1FEC58-BDF5-499E-832A-5C06E86EAD9C';

export interface dismissCallback {
  (): void;
}
export interface SendbirdFilters {
  [key: string]: string[]
}
export class SendbirdCommon extends Observable {

  registerPushToken(token: string): Promise<void> {
    return Promise.reject('Not implemented');
  }
}
