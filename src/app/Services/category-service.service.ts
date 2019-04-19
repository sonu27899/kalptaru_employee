import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { category } from '../Classes/category_class';
import { url } from '../../../src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  private category_url =url.endPoint +'category/';

  constructor(private _http:HttpClient) { }

  getAllCategory(){
    return this._http.get(this.category_url);
  }
  addcategory(item:category)
  {
    const body=JSON.stringify(item);
    const head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.category_url,body,{headers:head1});
  }
  updatecategory(item:category)
  {
    const body=JSON.stringify(item);
    const head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.category_url,body,{headers:head1});
  }
  getCategoryById(category_id)
  {
    return this._http.get(this.category_url+category_id);
  }
  deletecategory(item){
    return this._http.delete(this.category_url+item.category_id);
  }
}
