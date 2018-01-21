// import { FormBuilder, FormControl, Validator } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { MenuController,AlertController, App, LoadingController, NavController, 
        Slides, IonicPage, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../../providers/auth/auth';        

@IonicPage(
  {
    name: 'LoginSliderPage'   //
  }
  )

@Component({
  selector: 'page-login-slider',
  templateUrl: 'login-slider.html',
})

export class LoginSliderPage {
  public loginForm: any;
  public backgroundImage = 'assets/img/background/invent-bg2.jpg';
  public HomePage = 'HomePage';


  public employeeId: string;
  public username: string;
  public email: String;
  public password: String;
  


  MENU = {
    DEFAULT: 'menu-components',
    MATERIAL: 'menu-material',
    AVATAR: 'menu-avatar',
  };

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public app: App,
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    private auth: AuthProvider,
  ) { }

  // Slider methods
  @ViewChild('slider') slider: Slides;
  @ViewChild('innerSlider') innerSlider: Slides;

  goToLogin() {
    this.slider.slideTo(1);
  }

  goToSignup() {
    this.slider.slideTo(2);
  }

  slideNext() {
    this.innerSlider.slideNext();
  }

  slidePrevious() {
    this.innerSlider.slidePrev();
  }

  presentLoading(message) {
    const loading = this.loadingCtrl.create({
      duration: 500
    });

    loading.onDidDismiss(() => {
      
      const alert = this.alertCtrl.create({
        title: 'Success',
        subTitle: message,
        buttons: ['Dismiss']
      });
      alert.present();
    });

    loading.present();
  }

  login() {
    const user = {
			email: this.email,
			password: this.password
		}
		this.auth.authenticateUser(user).subscribe(data => {
			if (data.success) {
				this.auth.storeUserData(data.token, data.user);
				//console.log(data.token);
				let alert = this.alertCtrl.create({
					title: 'Login Success',
					subTitle: data.message,
					buttons: ['OK']
				})
				alert.present();

				this.navCtrl.setRoot(this.HomePage);
			} else {
				this.password = '';
				let alert = this.alertCtrl.create({
					title: 'Login Failed',
					subTitle: data.message,
					buttons: ['OK']
				})
				alert.present();
			}
    });
    
  }

   signup() {
    const user = {
      employeeId: this.employeeId,
      username: this.username,
      email: this.email,
      password: this.password,
      userRole: "employee"

    }
    // Register user
    this.auth.registerUser(user).subscribe(data => {
      if(data.success){
        let alert = this.alertCtrl.create({
					title: 'Registered Success, ',
					subTitle: data.message,
					buttons: ['OK']
				})
				alert.present();
        this.navCtrl.setRoot(this.HomePage);
      } else {
        let alert = this.alertCtrl.create({
					title: 'Registered Failed, Please Login to the system',
					subTitle: data.message,
					buttons: ['OK']
				})
				alert.present();
        
      }
    });
   
   }
  resetPassword() {
    this.presentLoading('An e-mail was sent with your new password.');
  }

 
}
