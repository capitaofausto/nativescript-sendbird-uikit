import { SendbirdCommon } from './common';

export declare class Sendbird extends SendbirdCommon {
  init(): void {}
  connect(userId: string): Promise<{data: com.sendbird.android.User}> {}
  createChannel(): Promise<{data: string}> {}
  enterChannel(channelId: string): Promise<{data: string} | {error: any}> {}
  sendMessage(message: string): Promise<{data: string} | {error: any}> {}
}

export declare class SendBirdUIKit {
  start(appId: string, userId: stirng, username: string, imageUrl: string): void {}
  setTheme(style: 'Light' | 'Dark'): void {}
}
