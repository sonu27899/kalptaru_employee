import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalarymanagementService {

  private salary_url="http://localhost:3000/empviewallempsalary/";
  private pendingemp_url='http://localhost:3000/emppendingempsalary/';
  private doneemp_url='http://localhost:3000/empdoneempsalary/';
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
}
