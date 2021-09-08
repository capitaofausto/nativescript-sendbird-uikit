import { SendbirdCommon } from './common';
export interface dismissCallback {
  (): void;
}
export interface SendbirdFilters {
  [key: string]: string[]
}
export declare class Sendbird extends SendbirdCommon {
  init(appId: string, userId: string, nickname: string, profileUrl: string) {}
  connect(userId: string, nickname: string, profileUrl: string): Promise<{data: com.sendbird.android.User}> {}
  createChannel(): Promise<{data: string}, {error: any}> {}
  enterChannel(channelId: string): Promise<{data: string}, {error: any}> {}
  sendMessage(message: string): Promise<{data: string}, {error: any}> {}
  receiveMessage(): Promise<any> {}
  getChannelByUrl(channelUrl: string): Promise<any> {}
  receiveMessages(channelUrl: string) {}
  leaveChannel(channelUrl: string) {}
  getTotalUnreadMessages(): Promise<{data: string}, {error: any}> {}
  joinChannel(channelUrl: string): void
}

export declare class SendbirdUIKit {
  init(appId: string, user: string, nickname: string, profileUrl: string): void {}
  launch(callback: dismissCallback): void {}
  joinChannel(channelUrl: string): Promise<void>
  launchChannel(fandoms: string[]);
  launchTabs(callback: dismissCallback, filters?: SendbirdFilters);
  launchCreateChannel(callback: dismissCallback, filters?: SendbirdFilters);
  setCurrentUser(userId: string, nickname: string, profileUrl: string);
  setTheme(style: 'Light' | 'Dark'): void {}
}
