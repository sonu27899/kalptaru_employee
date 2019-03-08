import { Component, OnInit } from '@angular/core';
import { product } from '../../../Classes/product_class';
import { ProductService } from '../../../Services/productmanagement.service';
import { Router,ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { CategoryServiceService } from 'src/app/Services/category-service.service';
import { category } from 'src/app/Classes/category_class';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
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
  categoryarr:category[]=[];
  dataSource=new MatTableDataSource;
  addProductArray:product[]=[];
  constructor(private _productservice:ProductService,private _router:Router,private _catser:CategoryServiceService) { }
  onAddProductButton()
  {
    this._productservice.addproduct(new product(this.product_id,this.product_name,this.category_id,this.product_price,this.product_colour,this.product_image,this.product_weight,this.product_warranty,this.product_material,this.product_Roomtype,this.product_height,this.product_width,this.product_depth,this.product_qty,this.product_soh)).subscribe(
        (data:any)=>{

            this.addProductArray.push(new product(this.product_id,this.product_name,this.category_id,this.product_price,this.product_colour,this.product_image,this.product_weight,this.product_warranty,this.product_material,this.product_Roomtype,this.product_height,this.product_width,this.product_depth,this.product_qty,this.product_soh));
            alert("successfully added");
            this._router.navigate(['ManagerHomepage/viewproduct']);
        }
    )
  }
  BackButton()
  {
    this._router.navigate(['ManagerHomepage/viewproduct']);
  }
  ngOnInit() {
    this._catser.getAllCategory().subscribe(
      (data:any)=>{

        this.categoryarr=data;

      }
    );
  }

}
