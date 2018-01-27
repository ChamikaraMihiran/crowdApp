import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the ReportItemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReportItemProvider {

  constructor(public http: Http) {
    console.log('Hello ReportItemProvider Provider');
  }

  reportItem(item){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/reportItem', item,{headers: headers})
      .map(res => res.json());
  }
}
