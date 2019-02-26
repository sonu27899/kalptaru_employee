import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatTableDataSource,MatPaginator } from '../../../../../node_modules/@angular/material';
import { orderstatus } from 'src/app/Classes/order_class';
import { OrdermanagementService } from 'src/app/Services/ordermanagement.service';
import { getNativeByTNode } from '@angular/core/src/render3/util';


@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.css']
})
export class OrderstatusComponent implements OnInit {
  orderarr:orderstatus[]=[];
  displayedColumns: string[] = ['order_id','order_date','order_amount','fk_product_id','fk_category_id','fk_user_email','Address','order_status','Action'];
  dataSource=new MatTableDataSource();
  i:number;
  status_no:number;
  flag:number=1;
  constructor(private _ser:OrdermanagementService,public _router:Router) { }
  UpdateStatus(element)
  {
    if(element.order_status=='Vendor Recieved Order')
    {
        this.status_no=1;
    }
    else if(element.order_status=='Product Dispatched')
    {
      this.status_no=2;
    }
    else if(element.order_status='Shipment')
    {
      this.status_no=3;
    }

    this._ser.updateStatus(new orderstatus(element.order_id,element.order_date,element.order_amount,element.fk_product_id,element.fk_category_id,element.fk_user_email,this.status_no)).subscribe(
      (data:any)=>{

        this.orderarr=data;

        this.dataSource.data=this.orderarr;
        this.ngOnInit();
        this._router.navigate(['/orderstatus']);
      }
    );
  }
  onClick(item)
  {
    this._router.navigate(['/getbilldetails',item.bill_id]);
  }
  ngOnInit() {
    this._ser.getAllOrder().subscribe(
      (data:any[])=>
      {
        console.log(data);
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
              this.flag=0;

            }
         }
        this.orderarr=data;

        this.dataSource.data=this.orderarr;

      }
    );
  }

}
