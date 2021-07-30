import { Injectable } from '@angular/core';
import { Sendbird, SendbirdUIKit} from '@nativescript/sendbird';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SendbirdService {

  sendbird = new Sendbird();
  sendbirdUIKit = new SendbirdUIKit();

  init() {
    this.sendbird.init();
  }

  connect(user: string) {
    this.sendbird.connect(user);
  }

  setCurrentUser(user: string, nickname: string, profileUrl: string) {
    this.sendbirdUIKit.setCurrentUser(user, nickname, profileUrl);
  }

  startUIKit(user: string, nickname: string, profileUrl: string) {
    this.sendbirdUIKit.start('1B1FEC58-BDF5-499E-832A-5C06E86EAD9C', user, nickname, profileUrl);
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
