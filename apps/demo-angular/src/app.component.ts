import { Component, OnInit } from '@angular/core';
import { Application, Color, isIOS } from '@nativescript/core';
import { SendbirdService } from './sendbird.service';
import { LaunchEventData, resumeEvent, on } from '@nativescript/core/application';
import { getString } from '@nativescript/core/application-settings';
import * as application from '@nativescript/core/application';

declare const android: any

@Component({
	selector: 'demo-app',
	template: `<GridLayout>
		<page-router-outlet></page-router-outlet>
	</GridLayout>`,
})
export class AppComponent implements OnInit {

  constructor(
    private sendbirdService: SendbirdService
  ) {}

  ngOnInit(): void {
    /* if (isIOS) {
      Application.on('launch', _ => {
        console.log('AQUIIII');

      });
    } */
    this.sendbirdService.init('faustino', 'faustino', 'faustino');
    // this.sendbirdService.setCurrentUser();
    on(resumeEvent, (args: LaunchEventData) => {
      const currentUser: string = getString('sendbirdUserId', 'No saved value');
      console.log('currentUser:', currentUser)
    });
  }
}
