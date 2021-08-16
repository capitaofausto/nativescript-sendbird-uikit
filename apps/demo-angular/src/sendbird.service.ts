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
      this.sendbirdUIKit.init('1B1FEC58-BDF5-499E-832A-5C06E86EAD9C', user, nickname, profileUrl);
    } else {
      this.sendbirdUIKit.init('1B1FEC58-BDF5-499E-832A-5C06E86EAD9C', user, nickname, profileUrl);
    }
  }

  connect(user: string, nickname: string, profileUrl: string) {
    this.sendbird.connect(user, nickname, profileUrl);
  }

  setCurrentUser(user: string, nickname: string, profileUrl: string) {
    this.sendbirdUIKit.setCurrentUser(user, nickname, profileUrl);
  }

  startUIKit() {
    this.sendbirdUIKit.launch(() => {console.log('AQUIII na callback do dismiss');});
  }

  getTotalUnreadMessages() {
    return from(this.sendbird.getTotalUnreadMessages());
  }

  createChannel() {
    return from(this.sendbird.createChannel());
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

}
