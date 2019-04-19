import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { leave } from '../Classes/leave_class';
import { url } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeavemanagementService {

  private leave_url = url.endPoint+'addleave/';
  private myleave_url = url.endPoint+'empmyleave/';


  constructor(private _http:HttpClient) { }

  addleave(item:leave)
  {
    const body=JSON.stringify(item);
    const head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.leave_url,body,{headers:head1});
  }
  getleave(employee_email)
  {
    return this._http.get(this.myleave_url+employee_email);
  }
}
