import { SendbirdCommon } from './common';

export declare class Sendbird extends SendbirdCommon {
  init(appId: string, userId: string, nickname: string, profileUrl: string) {}
  connect(userId: string): Promise<{data: com.sendbird.android.User}> {}
  createChannel(): Promise<{data: string}, {error: any}> {}
  enterChannel(channelId: string): Promise<{data: string}, {error: any}> {}
  sendMessage(message: string): Promise<{data: string}, {error: any}> {}
  receiveMessage(): Promise<any> {}
  getChannelByUrl(channelUrl: string): Promise<any> {}
  receiveMessages(channelUrl: string) {}
  leaveChannel(channelUrl: string) {}
  getTotalUnreadMessages(): Promise<{data: string}, {error: any}> {}
}

export declare class SendbirdUIKit {
  init(appId: string, user: string, nickname: string, profileUrl: string): void {}
  launch(): void {}
  setCurrentUser(userId: string, nickname: string, profileUrl: string);
  setTheme(style: 'Light' | 'Dark'): void {}
  launchTabs(): void {}
}
