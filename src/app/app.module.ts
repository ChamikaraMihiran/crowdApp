import { SharedModule } from './shared.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MODULES, PROVIDERS } from './app.imports';
import { AuthProvider } from '../providers/auth/auth';
import { HttpModule } from '@angular/http';

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
    AuthProvider]
})
export class AppModule { }
