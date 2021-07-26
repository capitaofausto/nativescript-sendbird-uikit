import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedSendbird } from '@demo/shared';
import { } from '@nativescript/sendbird';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedSendbird {
	
}
