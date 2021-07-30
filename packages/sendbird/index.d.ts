import { SendbirdCommon } from './common';

export declare class Sendbird extends SendbirdCommon {
  init(): void {}
  connect(userId: string): Promise<{data: com.sendbird.android.User}> {}
  createChannel(): Promise<{data: string}> {}
  enterChannel(channelId: string): Promise<{data: string} | {error: any}> {}
  sendMessage(message: string): Promise<{data: string} | {error: any}> {}
  receiveMessages(channelUrl: string) {}
  leaveChannel(channelUrl: string) {}
}

export declare class SendbirdUIKit {
  startUIKit() {};
  setCurrentUser(userId: string, nickname: string, profileUrl: string);
}
