import { ChangeDetectorRef, Component, NgZone } from '@angular/core';
import { Page } from '@nativescript/core';
import { SendbirdService } from '../sendbird.service';

@Component({
	selector: 'demo-sendbird',
	templateUrl: 'sendbird.component.html'
})
export class SendbirdComponent {
	public unreadCount: any;
	private channelUrl: string;

	constructor(private _ngZone: NgZone, private sendbirdService: SendbirdService, private cdr: ChangeDetectorRef, private _page: Page) {}

	ngOnInit() {
		// this.demoShared = new DemoSharedSendbird();
		/* this._page.on(Page.loadedEvent, () => {
    }) */
		// this.sendbirdService.startUIKit();
    this.sendbirdService.connect('6074541cecb19f6f8ef8c156', 'Joao Bento', 'https://res.cloudinary.com/quelleent/image/upload/ar_1,c_fill,q_90,w_100/v1/s3-assets/profile/678ed400-9b98-11eb-87e9-53e71f6a91e1.jpg');
		setTimeout(() => {
			this.sendbirdService.getTotalUnreadMessages().subscribe((res: any) => {
				console.log('SO PARA VER', res);
				this.unreadCount = res.data;
				this.cdr.detectChanges();
			});
		}, 10000);
	}

	start() {
    this.sendbirdService.startUIKit();
  }

  leaveChannel() {
    this.sendbirdService.leaveChannel('sendbird_group_channel_105782747_5f6cc1525f336c0a3a22da13744637c230eb370a')
    .subscribe(res => {
      console.log('SO PARA VER', res);
    })
  }


  launchCreateChannel() {
    this.sendbirdService.createChannel().subscribe(res => {
			this.channelUrl = res.data
      this.sendbirdService.launchChannel(this.channelUrl);
		})
  }

	enterChannel() {
    const channelUrl = 'sendbird_group_channel_105358137_5f69506189e70d0029cbb2da2df7fae58b431f7a'
		this.sendbirdService.joinChannel(channelUrl)
    // this.sendbirdService.launchChannel(channelUrl)
	}

	sendMessage() {
		this.sendbirdService.sendMessage('Hello from app').subscribe((res: { data: string }) => {
			console.log('res:', res.data);
		});
	}

	receiveMessages() {
		this.sendbirdService.receiveMessages(this.channelUrl);
	}

	// receiveMessages() {
	//   this.sendbird.receiveMessages(this.channelUrl);
	// }
}
