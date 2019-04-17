import { Component, OnInit, ViewChild } from '@angular/core';
import { BillmanagementService } from '../../../Services/billmanagement.service';
import { viewbill } from '../../../Classes/bill_class';
import { Router } from "@angular/router";
import { MatTableDataSource,MatPaginator } from '../../../../../node_modules/@angular/material';
import { OrdermanagementService } from 'src/app/Services/ordermanagement.service';
import { orderstatus } from 'src/app/Classes/order_class';


@Component({
  selector: 'app-viewbill',
  templateUrl: './viewbill.component.html',
  styleUrls: ['./viewbill.component.css']
})
export class ViewbillComponent implements OnInit {
  billarr:viewbill[]=[];
  i:number;
  orderarr:orderstatus[]=[];
  n_flag:number=0;
  flag:number=0;
  displayedColumns: string[] = ['order_id','order_date','order_amount','fk_user_email','Address','order_status','Delievery Assign To','More'];
  dataSource=new MatTableDataSource();

  constructor(private _ser:OrdermanagementService,public _router:Router) { }
  @ViewChild(MatPaginator)paginator:MatPaginator;
  onClick(item)
  {
    this._router.navigate(['CashierHomepage/orderdetails',item.order_id]);
  }
  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this._ser.getAllOrder().subscribe(
      (data:any[])=>
      {


         for(this.i=0;this.i<data.length;this.i++)
         {

            if(data[this.i].order_status==1)
            {
              data[this.i].order_status='Vendor Recieved Order';
            }
            else if(data[this.i].order_status==2)
            {
              data[this.i].order_status='Product Dispatched';
            }
            else if(data[this.i].order_status==3)
            {
                data[this.i].order_status='Shipment';
            }
            else if(data[this.i].order_status==4)
            {
              data[this.i].order_status='Order Delivered';

            }

            if(data[this.i].delievery_assign=="")
            {
              this.n_flag=1;


            }
            else
            {
              this.flag=1;

            }
         }
        this.orderarr=data;
        this.dataSource.data=this.orderarr;
      });
  }
}
