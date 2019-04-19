import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { sendmail } from '../Classes/mail_class';
import { url } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailManagementService {

  private forget:string=url.endPoint+'forgetpassword/';
  private email:string=url.endPoint+'sendemail/';
  constructor(private _http:HttpClient) { }

  getpassById(email_id:string){
    return this._http.get(this.forget+email_id);
  }

  sendmail(item:sendmail){
    let body=JSON.stringify(item)
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.email,body,{headers:head1})
  }
}
