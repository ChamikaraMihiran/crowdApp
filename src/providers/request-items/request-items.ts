import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the RequestItemsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestItemsProvider {

  constructor(public http: Http) {
    console.log('Hello RequestItemsProvider Provider');
  }

  requestItem(item){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/requestNewItem', item,{headers: headers})
      .map(res => res.json());
  }

}
