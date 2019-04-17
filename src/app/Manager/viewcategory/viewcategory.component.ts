import { Component, OnInit, ViewChild } from '@angular/core';
import {category} from './../../Classes/category_class';
import { Router,ActivatedRoute } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { CategoryServiceService } from 'src/app/Services/category-service.service';

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css']
})
export class ViewcategoryComponent implements OnInit {

  category:category[]=[];
  deleteCategoryArray:category[]=[];
   f:number=0;
  displayedColumns: string[] = [ 'Category_Id','Category_Name','Action'];
  dataSource=new MatTableDataSource(this.category);
  @ViewChild(MatPaginator)paginator:MatPaginator;
  constructor(private _catser:CategoryServiceService,private _router:Router) { }

  CategoryPage()
  {
    this._router.navigate(['ManagerHomepage/addcategory']);
  }
  UpdateCategory(item:category)
  {

    this._router.navigate(['ManagerHomepage/updatecategory',item.category_id]);
  }

  DeleteCategory(item)
  {
    this._catser.deletecategory(item).subscribe(
      (data:any)=>{

        this.deleteCategoryArray.splice(this.deleteCategoryArray.indexOf(item),1);
        this.dataSource.data.splice(this.dataSource.data.indexOf(item),1);

        this.dataSource.data=this.category;
        alert("Your Category Is Deleted");
      }
    )
  }

  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this._catser.getAllCategory().subscribe(
      (data:any)=>{
        this.category=data;
        this.dataSource.data=this.category;
      }
    );
  }

}
