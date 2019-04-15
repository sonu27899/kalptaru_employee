import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { product  } from '../Classes/product_class';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:3000/product/';
  private update_product_without_pic_url='http://localhost:3000/update_product_without_pic/';
  private get_image='http://localhost:3000/get_image/';
  private add_image='http://localhost:3000/add_image/';
  constructor(private _http:HttpClient) { }
  getAllProduct(){
    return this._http.get(this.url);
  }
  getProductById(product_id:string){
    return this._http.get(this.url+product_id);
}

  addproduct(item:FormData)
  {
    return this._http.post(this.url,item);
  }
  updateproductwithpic(product_id,item:FormData)
  {

    return this._http.put(this.url +product_id ,item);
  }
  uploadimage(product_id,item)
  {
    return this._http.put(this.add_image+product_id,item);
  }

  updateproductwithoutpic(item:product)
  {
    const body=JSON.stringify(item);
    const head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.update_product_without_pic_url + item.product_id,body,{headers:head1});
  }

  deleteproduct(item){
    return this._http.delete(this.url+item.product_id);
  }
  getImageById(product_id)
  {
    return this._http.get(this.get_image+product_id);
  }

  addimage(item)
  {
    return this._http.post(this.add_image,item);
  }


}
