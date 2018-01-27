import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { NotificationProvider } from '../../providers/notification/notification';

@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {
  user = window.localStorage.getItem('user');
  items: any;

  ngOnInit() {
    this.notificationProvider.viewMyNotification(this.user).subscribe((response) => {
      if (response) {
        this.items = response;
        console.log(this.items);
      } else {
        console.log("error in data notification");
        console.log(response);
      }
    });
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private notificationProvider: NotificationProvider,
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
  }

}
