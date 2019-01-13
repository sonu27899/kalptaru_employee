import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { orderstatus } from '../Classes/order_class';

@Injectable({
  providedIn: 'root'
})
export class OrdermanagementService {
  private order_url="http://localhost:3000/empvieworder/";
  constructor(private _http:HttpClient) { }

  getAllOrder()
  {
    return this._http.get(this.order_url);
  }
  updateStatus(item:orderstatus){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json')
    return this._http.put(this.order_url+item.order_id,body,{headers:head1});
  }
}
