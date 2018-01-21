import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ionic-native',
  templateUrl: 'ionic-native.html',
})
export class IonicNativePage {

  rootPage: any;
  items: Array<{ title: string, page: any }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = 'IonicNativePage';

    this.items = [
      {
        title: 'Barcode scan',
        page: 'BarcodeScannerPage'
      },
        
    ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(item.page);
  }
}
