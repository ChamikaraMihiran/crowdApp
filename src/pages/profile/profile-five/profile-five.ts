import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { AuthProvider } from '../../../providers/auth/auth';  

@IonicPage()
@Component({
  selector: 'page-profile-five',
  templateUrl: 'profile-five.html',
})
export class ProfileFivePage {

  user = {
    profileImage: 'assets/img/profile/profile.png',
    coverImage: 'assets/img/background/background-5.jpg',
    occupation: 'Designer',
    description: 'Passionate Designer. Recently focusing on developing mobile hybrid apps and web development.'
    
  };

  public username:string;
  public email:string;
  public employeeId:string;
  public LoginPage = 'LoginSliderPage';
  
  
  constructor(public navCtrl: NavController,
              public auth: AuthProvider) {
    
    }
 
   ionViewDidLoad() {
     this.getUser();
     console.log('ionViewDidLoad ProfileFivePage');
   }
 
   getUser(){
     var user = JSON.parse(window.localStorage.getItem('user'));
     this.username = user.username;
     this.email = user.email;
     this.employeeId = user.employeeId;
   }

   logOut(){
    this.auth.logout();
    this.navCtrl.setRoot(this.LoginPage);
   }
 }
 