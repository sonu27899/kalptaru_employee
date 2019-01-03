import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { viewbill } from '../Classes/bill_class';

@Injectable({
  providedIn: 'root'
})
export class BillmanagementService {

  private bill_url="http://localhost:3000/billmanagement/";
  private bill_details_url='http://localhost:3000/getbilldetails/'
  constructor(private _http:HttpClient) { }

  getBillDetails(bill_id)
  {
    return this._http.get(this.bill_details_url+bill_id);
  }
  getAllBill()
  {
    return this._http.get(this.bill_url);
  }
}
