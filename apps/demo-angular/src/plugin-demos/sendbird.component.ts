import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { Page } from '@nativescript/core';
import { SendbirdService } from '../sendbird.service';

@Component({
	selector: 'demo-sendbird',
	templateUrl: 'sendbird.component.html',
})
export class SendbirdComponent {

  public unreadCount: any;
  private channelUrl: string;

	constructor(
    private _ngZone: NgZone,
    private sendbirdService: SendbirdService,
    private cdr: ChangeDetectorRef,
    private _page: Page
  ) {}

  ngOnInit() {
    // this.demoShared = new DemoSharedSendbird();
    /* this._page.on(Page.loadedEvent, () => {
    }) */
    this.sendbirdService.startUIKit();
    setTimeout(() => {
      this.sendbirdService.getTotalUnreadMessages().subscribe((res: any) => {
        console.log('SO PARA VER', res);
        this.unreadCount = res.data;
        this.cdr.detectChanges();
      })
    }, 500)

  }

  start() {
    /* this.sendbirdService.connect('bento'); */
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
