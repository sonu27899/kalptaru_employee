import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { orderstatus } from '../Classes/order_class';
import { url } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdermanagementService {
  private order_get_url=url.endPoint+"order/"
  private order_url=url.endPoint+"empvieworder/";
  private my_work_url=url.endPoint+"empviewwork/";
  private get_delievery_boy=url.endPoint+"empgetdelieveryboy/";
  private bill_details_url=url.endPoint+'orderDetail/';
  constructor(private _http:HttpClient) { }

  getAllOrder()
  {
    return this._http.get(this.order_get_url);
  }
  getBillDetails(order_id)
  {
    return this._http.get(this.bill_details_url+order_id);
  }
  updateStatus(item:orderstatus){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json')
    return this._http.put(this.order_url+item.order_id,body,{headers:head1});
  }
  getAllDelieveryBoy()
  {
    return this._http.get(this.get_delievery_boy);
  }
  getAllWork(employee_email)
  {
    return this._http.get(this.my_work_url+employee_email);

  }
}
