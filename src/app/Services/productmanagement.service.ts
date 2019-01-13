import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { product  } from '../Classes/product_class';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:3000/product/';
  constructor(private _http:HttpClient) { }
  getAllProduct(){
    return this._http.get(this.url);
  }
  getProductById(product_id:string){
    return this._http.get(this.url+product_id);
}
  addproduct(item:product)
  {
    const body=JSON.stringify(item);
    const head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url,body,{headers:head1});
  }

  updateproduct(item:product)
  {
    const body=JSON.stringify(item);
    const head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url + item.product_id,body,{headers:head1});
  }

  deleteproduct(item){
    return this._http.delete(this.url+item.product_id);
  }


}
