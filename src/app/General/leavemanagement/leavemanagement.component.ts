import { Component, OnInit } from '@angular/core';
import { LeavemanagementService } from 'src/app/Services/leavemanagement.service';
import { leave } from 'src/app/Classes/leave_class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leavemanagement',
  templateUrl: './leavemanagement.component.html',
  styleUrls: ['./leavemanagement.component.css']
})
export class LeavemanagementComponent implements OnInit {

  employee_email:string;
  leave_msg:string;
  leave_days:number;
  leave_from_date:Date;
  employee_designation:string;
  constructor(private _leave:LeavemanagementService,public _router:Router) { }

  onmyleavebutton()
  {
    this._router.navigate(['ManagerHomepage/myleave']);
    if(this.employee_designation=="Manager")
    {
      this._router.navigate(['ManagerHomepage/myleave']);
    }
    else if(this.employee_designation==="Cashier")
    {
      this._router.navigate(['CashierHomepage/myleave']);
    }
    else if(this.employee_designation==="Worker")
    {
      this._router.navigate(['WorkerHomepage/myleave']);
    }
    else
    {
      this._router.navigate(['DelieveryHomepage/myleave']);
    }
  }
  onAddLeaveButton()
  {
    this._leave.addleave(new leave(this.employee_email,this.leave_msg,this.leave_days,this.leave_from_date)).subscribe(
      (data:any)=>
      {
        alert("Your Leave Request Sent to Admin.");
      }
    );
  }
  ngOnInit() {
    this.employee_email=localStorage.getItem('email');
    this.employee_designation=localStorage.getItem('designation');
  }
  CancelButton()
  {
    if(this.employee_designation=="Manager")
    {
      this._router.navigate(['ManagerHomepage']);
    }
    else if(this.employee_designation==="Cashier")
    {
      this._router.navigate(['CashierHomepage']);
    }
    else if(this.employee_designation=="Worker")
    {
      this._router.navigate(['WorkerHomepage']);
    }
    else
    {
      this._router.navigate(['DelieveryHomepage']);
    }
  }

}
