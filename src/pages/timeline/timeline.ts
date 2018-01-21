import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage {

  items = [
    {
      title: 'Notification 1',
      itemId: 'item1',
      content: `You have to return the item before 15/2/2018`,
      icon: 'calendar',
      time: { subtitle: '4/1/2018', title: '21:30' }
    },
    {
      title: 'Notification 2',
      itemId: 'item2',
      content: `You have to return the item before 15/2/2018`,
      icon: 'calendar',
      time: { subtitle: '4/1/2018', title: '21:30' }
    },
    {
      title: 'Notification 3',
      itemId: 'item3',
      content: `Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize
                scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo.
                Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize
                chicory burdock tatsoi dulse radish wakame beetroot.`,
      icon: 'calendar',
      time: { title: 'Short Text' }
    }
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimelinePage');
  }

}
