import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { RequestItemsProvider } from '../../providers/request-items/request-items';  
import { ValidationsProvider } from '../../providers/validations/validations';


@IonicPage()
@Component({
  selector: 'page-request-items',
  templateUrl: 'request-items.html',
})
export class RequestItemsPage {
  itemName:any;
  itemType:any;
  itemsNeeded:any;
  requestReason:any;
  date: any;
  public HomePage = 'HomePage';
  public RequestItemsPage = 'RequestItemsPage';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public validationsProvider: ValidationsProvider,
              public requestItemProvider: RequestItemsProvider,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestItemsPage');
    this.date = new Date();
  }

  onRequestSubmit() {
    const item = {
      itemName: this.itemName,
      itemType: this.itemType,
      itemsNeeded: this.itemsNeeded,
      requestReason: this.requestReason,
      date: this.date
    }
   
    // Required Fields
    if (!this.validationsProvider.validateRequest(item)) {
      let alert = this.alertCtrl.create({
        title: 'Request sent failed',
        subTitle: "All fields are required",
        buttons: ['OK']
      })
      alert.present();
      this.navCtrl.setRoot(this.RequestItemsPage);
      return false;
    }
  


    // Request Item
    this.requestItemProvider.requestItem(item).subscribe(data => {
      if (data.state) {
        let alert = this.alertCtrl.create({
					title: 'requser sent Success',
					subTitle: data.message,
					buttons: ['OK']
				})
        alert.present();
        
        this.navCtrl.setRoot(this.HomePage);
      } else {
        let alert = this.alertCtrl.create({
					title: 'requser sent failed',
					subTitle: data.message,
					buttons: ['OK']
				})
        alert.present();
        this.navCtrl.setRoot(this.RequestItemsPage);
      }
    });




  }

}
