import { Injectable } from '@angular/core';
import { isIOS } from '@nativescript/core';
import { Sendbird, SendbirdUIKit} from '@nativescript/sendbird';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SendbirdService {

  sendbird = new Sendbird();
  sendbirdUIKit = new SendbirdUIKit();

  init(user: string, nickname: string, profileUrl: string) {
    if(isIOS) {
      this.sendbirdUIKit.init('DA7C051A-70F5-42C4-83E9-7F47C8755C4B', user, nickname, profileUrl);
    } else {
      this.sendbirdUIKit.init('DA7C051A-70F5-42C4-83E9-7F47C8755C4B', user, nickname, profileUrl);
    }
  }

  connect(user: string, nickname: string, profileUrl: string) {
    this.sendbird.connect(user, nickname, profileUrl);
  }

  setCurrentUser(user: string, nickname: string, profileUrl: string) {
    this.sendbirdUIKit.setCurrentUser(user, nickname, profileUrl);
  }

  startUIKit() {
    // this.sendbirdUIKit.launch(() => {console.log('AQUIII na callback do dismiss');});
    this.sendbirdUIKit.launchTabs(() => {console.log('AQUIII na callback do dismiss');}, { fandom: ["swifties", "army"] });
  }

  getTotalUnreadMessages() {
    return from(this.sendbird.getTotalUnreadMessages());
  }

  createChannel() {
    return from(this.sendbirdUIKit.createChannel('swifties test 3', 'fandom_swifties'));
  }

  enterChannel(channelUrl: string) {
    return from(this.sendbird.enterChannel(channelUrl));
  }

  sendMessage(message: string) {
    return from(this.sendbird.sendMessage(message));
  }

  receiveMessages(channelUrl: string) {
    return this.sendbird.receiveMessages(channelUrl);
  }

  joinChannel(channelUrl: string) {
    console.log('channelUrl:', channelUrl)
    return this.sendbird.joinChannel(channelUrl)
  }

  launchTabs(filters) {
    this.sendbirdUIKit.launchTabs(undefined, filters)
  }

  launchChannel(channelUrl: string) {
    this.sendbirdUIKit.launchChannel(channelUrl);
  }

  leaveChannel(channelUrl: string) {
    return from(this.sendbird.leaveChannel(channelUrl));
  }

}
