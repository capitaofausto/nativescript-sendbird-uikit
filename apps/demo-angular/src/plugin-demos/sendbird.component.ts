import { Component, NgZone } from '@angular/core';
// import { DemoSharedSendbird } from '@demo/shared';
// import { Sendbird } from '@nativescript/sendbird';

@Component({
	selector: 'demo-sendbird',
	templateUrl: 'sendbird.component.html',
})
export class SendbirdComponent {

  // demoShared: DemoSharedSendbird;
  // sendbird = new Sendbird()
  private channelUrl: string

	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    // this.demoShared = new DemoSharedSendbird();
    // this.sendbird.init()
  }

  start() {
    // this.sendbird.connect('bento')
  }

  createChannel() {
    /* this.sendbird.createChannel().then(res => {
      this.channelUrl = res.data
    }) */
  }

  enterChannel() {
    /* this.sendbird.enterChannel(this.channelUrl).then(res => {
      console.log('res:', res.data)
    }) */
  }

  sendMessage() {
    /* this.sendbird.sendMessage('Hello from app').then(res => {
      console.log('res:', res.data)
    }) */
  }

}
