import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportItemPage } from './report-item';

@NgModule({
  declarations: [
    ReportItemPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportItemPage),
  ],
})
export class ReportItemPageModule {}
