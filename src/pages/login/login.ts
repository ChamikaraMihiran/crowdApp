import { Component } from '@angular/core';
import { MenuController,NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginListPage {
  rootPage: any;
  items: Array<{ title: string, page: any }>;


  constructor(public navCtrl: NavController) {
    this.rootPage = 'LoginSliderPage';
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }

  
}
