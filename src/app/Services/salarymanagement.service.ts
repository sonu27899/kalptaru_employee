import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { update_salary } from '../Classes/salary_update';
import { url } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalarymanagementService {

  private salary_url=url.endPoint+"empviewallempsalary/";
  private pendingemp_url=url.endPoint+'emppendingempsalary/';
  private doneemp_url=url.endPoint+'empdoneempsalary/';
  constructor(private _http:HttpClient) { }
  getAllEmp()
  {
    return this._http.get(this.salary_url);
  }
  getDoneEmp()
  {
    return this._http.get(this.doneemp_url);
  }
  getPendingEmp()
  {
    return this._http.get(this.pendingemp_url);
  }
  updateStatus(item:update_salary){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json')
    return this._http.put(this.salary_url+item.employee_email,body,{headers:head1});
  }
}
