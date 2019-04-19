import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { employee } from '../Classes/employee_class';
import { url } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaldataService {

  private profile_url=url.endPoint+"empmyprofile/";
  constructor(private _http:HttpClient) { }

  getProfileByEmail(employee_email)
  {
    return this._http.get(this.profile_url+employee_email);
  }

  updateProfile(item:employee)
  {
    let body=JSON.stringify(item);
      let head1=new HttpHeaders().set('Content-Type','application/json');

      return this._http.put(this.profile_url+item.employee_email,body,{headers:head1});
    }
  }
