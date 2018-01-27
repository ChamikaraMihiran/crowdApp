import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ValidationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ValidationsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ValidationsProvider Provider');
  }

  validateRegister(user){
    if(user.employeeId == undefined || user.username == undefined || user.email == undefined || user.password == undefined ){
      return false;
    } else {
      return true;
    }
  }
  
  validateLogin(user){
    if((user.email == undefined) || (user.password == undefined)){
      return false;
    } else {
      return true;
    }
  }
  
  validateEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validateReport(item){
    if(item.itemId == undefined || item.itemName == undefined || item.reportDescription == undefined){
      return false;
    } else {
      return true;
    }
  }

  validateRequest(item){
    if(item.itemName == undefined || item.itemType == undefined || item.itemsNeeded == undefined || item.requestReason == undefined){
      return false;
    } else {
      return true;
    }
  }
  
}
