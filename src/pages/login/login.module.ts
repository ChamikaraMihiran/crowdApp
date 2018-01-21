import { LoginListPage } from './login';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
//import { HomePage } from '../home/home'

@NgModule({
  declarations: [
    LoginListPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginListPage),
  ],
  exports: [
    LoginListPage
  ]
})

export class LoginListPageModule { }
