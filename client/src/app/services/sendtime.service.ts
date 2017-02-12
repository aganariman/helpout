import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

import {Configuration} from '../app.constants';
import {AuthenticationService} from './authentication.service'

@Injectable()
export class SendtimeService {
  private actionUrl: string;
  private headers: any;

  constructor(private _http: Http,
              private _configuration: Configuration,
              private _authenticationService: AuthenticationService){
    this.actionUrl = _configuration.Server + 'api/v1/sendtime';
    this.headers = _authenticationService.createAuthorizationHeader();
  }
 
  public sendtime(reciever: string, amount: string): Observable<any> {
     let user: any = JSON.parse(localStorage.getItem('currentUser')).user;

    return this._http.post(this.actionUrl + '/', {reciever: reciever, amount: amount, user: user.userID}, {headers:this.headers})
      .map((response: Response) => {
        if (!response || !response.json || !response.json()) {
          return false;
        }

        return true;
      }).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public sendtime2(reciever: string, amount: string) {
    let user: any = JSON.parse(localStorage.getItem('currentUser')).user;                
  
    console.log(amount);

    return this._http
      .get(this.actionUrl + '/' + amount, {headers: this.headers})
      .map(res => res.json());

  }

}