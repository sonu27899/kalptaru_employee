import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { leave } from '../Classes/leave_class';

@Injectable({
  providedIn: 'root'
})
export class LeavemanagementService {

  private leave_url = 'http://localhost:3000/addleave/';
  private myleave_url = 'http://localhost:3000/empmyleave/';


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
