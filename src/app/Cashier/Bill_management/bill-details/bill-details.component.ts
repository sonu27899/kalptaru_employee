import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { bill_details } from '../../../Classes/bill_details';
import { MatTableDataSource,MatPaginator } from '../../../../../node_modules/@angular/material';
import { OrdermanagementService } from 'src/app/Services/ordermanagement.service';
import { concat } from 'rxjs';
import { CategoryServiceService } from 'src/app/Services/category-service.service';


@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css']
})
export class BillDetailsComponent implements OnInit {
  id:number;
  details_arr:bill_details[]=[];
  designation:string;
  i:number;
  displayedColumns: string[] = ['fk_bill_id','product_name','category_name','bill_price','bill_qty'];
  dataSource=new MatTableDataSource();
  dataSource1=new MatTableDataSource();
  constructor(public _actroute:ActivatedRoute,public _ser:OrdermanagementService,public _router:Router,public _catser:CategoryServiceService) { }
  @ViewChild(MatPaginator)paginator:MatPaginator;
  ngOnInit() {
    this.designation=localStorage.getItem('designation');
    this.dataSource.paginator=this.paginator;
    this.id=this._actroute.snapshot.params['order_id'];

    this._ser.getBillDetails(this.id).subscribe(
      (data:bill_details[])=>
      {

        this.details_arr=data;

        this.dataSource.data=this.details_arr;




      }
    );
  }
  BackButton()
  {
    if(this.designation=="Cashier")
    {
      this._router.navigate(['CashierHomepage/Viewbill']);
    }
    else
    {
      this._router.navigate(['ManagerHomepage/orderstatus']);
    }

  }
}
