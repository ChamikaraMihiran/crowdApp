import { Component } from '@angular/core';
import { IonicPage, NavController,Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  drawerOptions: any;
  constructor(public navCtrl: NavController,private eventCtrl: Events) {
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };
  }
}
