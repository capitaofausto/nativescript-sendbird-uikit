import { Component, OnInit } from '@angular/core';
import { Application, Color, isIOS } from '@nativescript/core';
import { SendbirdService } from './sendbird.service';

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

    // this.sendbirdService.setCurrentUser();
  }
}
