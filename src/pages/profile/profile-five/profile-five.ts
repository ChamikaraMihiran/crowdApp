import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile-five',
  templateUrl: 'profile-five.html',
})
export class ProfileFivePage {

  user = {
    profileImage: 'assets/img/avatar/chami.jpg',
    coverImage: 'assets/img/background/background-5.jpg',
    occupation: 'Designer',
    location: 'Seattle, WA',
    description: 'Passionate Designer. Recently focusing on developing mobile hybrid apps and web development.',
    address: '27 King\'s College Cir, Toronto, ON M5S, Canada',
    phone: '555 555 555',
    whatsapp: '555 555 555',
  };

  public username:string;
  public email:string;
  public employeeId:string;
  
  constructor(public navCtrl: NavController) {
    
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
 }
 