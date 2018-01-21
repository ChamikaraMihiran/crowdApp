import { Component } from '@angular/core';

import { NavController, MenuController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfileListPage {
 

  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.rootPage = 'ProfileListPage';
    this.menu.enable(true, 'menu-profile');
    this.items = [
      {
        title: 'My Profile',
        page: 'ProfileFivePage'
      },
      {
        title: 'Profile Settings',
        page: 'ProfileSettingsPage'
      },
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
