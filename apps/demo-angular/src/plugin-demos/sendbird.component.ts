import { Component, NgZone } from '@angular/core';
// import { DemoSharedSendbird } from '@demo/shared';
import { Sendbird, SendBirdUIKit } from '@nativescript/sendbird';

@Component({
	selector: 'demo-sendbird',
	templateUrl: 'sendbird.component.html',
})
export class SendbirdComponent {

  // demoShared: DemoSharedSendbird;
  sendbird = new Sendbird()
  sendbirdUiKit = new SendBirdUIKit()
  private channelUrl: string

	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    // this.demoShared = new DemoSharedSendbird();
    this.sendbird.init()
  }

  start() {
    this.sendbird.connect('bento')
  }

  createChannel() {
    this.sendbird.createChannel().then(res => {
      this.channelUrl = res.data
      console.log('CHANNEL', this.channelUrl);
    })
  }

  enterChannel() {
    this.sendbird.enterChannel(this.channelUrl).then((res: {data: string}) => {
      console.log('res:', res.data)
    })
  }

  sendMessage() {
    this.sendbird.sendMessage('Hello from app').then(res => {
      // console.log('res:', res.data)
    })
  }

  uiKitInit() {
    this.sendbirdUiKit.init()
  }

  // receiveMessages() {
  //   this.sendbird.receiveMessages(this.channelUrl);
  // }

}
