import { Component, NgZone } from '@angular/core';
import { Page } from '@nativescript/core';
import { SendbirdService } from '../sendbird.service';

@Component({
	selector: 'demo-sendbird',
	templateUrl: 'sendbird.component.html',
})
export class SendbirdComponent {

  private channelUrl: string

	constructor(
    private _ngZone: NgZone,
    private sendbirdService: SendbirdService,
    private _page: Page
  ) {}

  ngOnInit() {
    // this.demoShared = new DemoSharedSendbird();
    /* this._page.on(Page.loadedEvent, () => {
      this.sendbirdService.startUIKit();
    }) */
    this.sendbirdService.startUIKit('faustino', 'faustino', 'faustino');
  }

  start() {
    this.sendbirdService.connect('bento');
  }

  createChannel() {
    this.sendbirdService.createChannel().subscribe(res => {
      /* this.channelUrl = res.data
      console.log('CHANNEL', this.channelUrl); */
    })
  }

  enterChannel() {
    this.sendbirdService.enterChannel(this.channelUrl).subscribe((res: {data: string}) => {
      console.log('res:', res.data)
    })
  }

  sendMessage() {
    this.sendbirdService.sendMessage('Hello from app').subscribe((res: {data: string}) => {
      console.log('res:', res.data)
    })
  }

  receiveMessages() {
    this.sendbirdService.receiveMessages(this.channelUrl);
  }

  // receiveMessages() {
  //   this.sendbird.receiveMessages(this.channelUrl);
  // }

}
