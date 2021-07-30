import { SendbirdCommon } from './common';

export declare class Sendbird extends SendbirdCommon {
  init(): void {}
  connect(userId: string): Promise<{data: com.sendbird.android.User}> {}
  createChannel(): Promise<{data: string}, {error: any}> {}
  enterChannel(channelId: string): Promise<{data: string}, {error: any}> {}
  sendMessage(message: string): Promise<{data: string}, {error: any}> {}
  receiveMessage(): Promise<any> {}
  getChannelByUrl(channelUrl: string): Promise<any> {}
  receiveMessages(channelUrl: string) {}
  leaveChannel(channelUrl: string) {}
}

export declare class SendBirdUIKit {
  start(appId: string, userId: stirng, username: string, imageUrl: string): void {}
  setCurrentUser(userId: string, nickname: string, profileUrl: string);
  setTheme(style: 'Light' | 'Dark'): void {}
}
