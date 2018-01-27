import { SharedModule } from './shared.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MODULES, PROVIDERS } from './app.imports';
import { AuthProvider } from '../providers/auth/auth';
import { HttpModule } from '@angular/http';
import { NotificationProvider } from '../providers/notification/notification';
import { RequestItemsProvider } from '../providers/request-items/request-items';
import { ReportItemProvider } from '../providers/report-item/report-item';
import { ValidationsProvider } from '../providers/validations/validations';

@NgModule({
  declarations: [
    // App Core
    MyApp,
  ],
  imports: [
    MODULES,
    IonicModule.forRoot(MyApp),
    SharedModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [PROVIDERS, { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    NotificationProvider,
    RequestItemsProvider,
    ReportItemProvider,
    ValidationsProvider]
})
export class AppModule { }
