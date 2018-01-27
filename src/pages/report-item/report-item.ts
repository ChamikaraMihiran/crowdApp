import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { ReportItemProvider } from '../../providers/report-item/report-item'; 
import { ValidationsProvider } from '../../providers/validations/validations';

/**
 * Generated class for the ReportItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report-item',
  templateUrl: 'report-item.html',
})
export class ReportItemPage {
  itemId:any;
  itemName:any;
  reportDescription:any;
  date: any;
  public HomePage = 'HomePage';
  public ReporttItemsPage = 'ReportItemPage';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public validationsProvider: ValidationsProvider,
    public reportItemProvider: ReportItemProvider,) {
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportItemPage');
    this.date = new Date();
  }

  onReportSubmit() {
    const item = {
      itemId: this.itemId,
      itemName: this.itemName,
      reportDescription: this.reportDescription,
      date: this.date
    }
   

    // Required Fields
    if (!this.validationsProvider.validateReport(item)) {
      let alert = this.alertCtrl.create({
        title: 'Report sent failed',
        subTitle: "All fields are required",
        buttons: ['OK']
      })
      alert.present();
      this.navCtrl.setRoot(this.ReporttItemsPage);
      return false;
    }



    // Report Item
    this.reportItemProvider.reportItem(item).subscribe(data => {
      if (data.state) {
        let alert = this.alertCtrl.create({
					title: 'Report sent Success',
					subTitle: data.message,
					buttons: ['OK']
				})
        alert.present();
        
        this.navCtrl.setRoot(this.HomePage);
      } else {
        let alert = this.alertCtrl.create({
					title: 'Report sent failed',
					subTitle: data.message,
					buttons: ['OK']
				})
        alert.present();
        this.navCtrl.setRoot(this.ReporttItemsPage);
      }
    });




  }


}
