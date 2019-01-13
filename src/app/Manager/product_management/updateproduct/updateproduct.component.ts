import { Component, OnInit } from '@angular/core';
import { product } from '../../../Classes/product_class';
import { ProductService } from '../../../Services/productmanagement.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  product_id:string;
  product_name:string;
  category_id:number;
  product_price:number;
  product_colour:string;
  product_image:string;
  product_weight:number;
  product_warranty:number;
  product_material:string;
  product_Roomtype:string;
  product_height:number;
  product_width:number;
  product_depth:number;
  product_qty:number;
  product_soh:number;
  updateProductArray:product[]=[];
  constructor(private _productservice:ProductService,private _router:Router,private _activatedroutes:ActivatedRoute) { }

  BackButton()
  {
    this._router.navigate(['/product']);
  }
  UpdateProduct()
  {
     this._productservice.updateproduct(new product(this.product_id,this.product_name,this.category_id,this.product_price,this.product_colour,this.product_image,this.product_weight,this.product_warranty,this.product_material,this.product_Roomtype,this.product_height,this.product_width,this.product_depth,this.product_qty,this.product_soh)).subscribe(
       (data:any)=>{
         console.log(data);
        this._router.navigate(['/product']);
       }
    )

  }
  CancelProduct()
  {
    this._router.navigate(['/product']);
  }
  ngOnInit() {
   this.product_id=this._activatedroutes.snapshot.params['product_id'];

    this._productservice.getProductById(this.product_id).subscribe(
      (data:product[])=>{
        this.product_id=data[0].product_id;
        this.product_name=data[0].product_name;
        this.category_id=data[0].category_id;
        this.product_price=data[0].product_price;
        this.product_colour=data[0].product_colour;
        this.product_image=data[0].product_image;
        this.product_weight=data[0].product_weight;
        this.product_warranty=data[0].product_warranty;
        this.product_material=data[0].product_material;
        this.product_Roomtype=data[0].product_Roomtype;
        this.product_height=data[0].product_height;
        this.product_width=data[0].product_width;
        this.product_depth=data[0].product_depth;
        this.product_qty=data[0].product_qty;
        this.product_soh=data[0].product_soh;
      }
    );
  }

}
