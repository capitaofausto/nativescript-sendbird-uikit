import { Component, NgZone } from '@angular/core';
import { DemoSharedSendbird } from '@demo/shared';
import { } from '@nativescript/sendbird';

@Component({
	selector: 'demo-sendbird',
	templateUrl: 'sendbird.component.html',
})
export class SendbirdComponent {
  
  demoShared: DemoSharedSendbird;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedSendbird();
  }

}