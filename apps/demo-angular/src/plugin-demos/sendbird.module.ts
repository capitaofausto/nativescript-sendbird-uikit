import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { SendbirdComponent } from './sendbird.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: SendbirdComponent }])],
  declarations: [SendbirdComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class SendbirdModule {}
