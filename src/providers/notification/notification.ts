import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NotificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationProvider {
  item: any;

  constructor(public http: Http) {
    console.log('Hello NotificationProvider Provider');
  }

  viewMyNotification(item){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/middleTermNotification/notify', item,{ headers: headers})
      .map(res => res.json());
  }

}
