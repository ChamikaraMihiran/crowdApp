import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestItemsPage } from './request-items';

@NgModule({
  declarations: [
    RequestItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestItemsPage),
  ],
})
export class RequestItemsPageModule {}
