import { Component, OnInit } from '@angular/core';
import { LeavemanagementService } from 'src/app/Services/leavemanagement.service';
import { leave } from 'src/app/Classes/leave_class';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myleave',
  templateUrl: './myleave.component.html',
  styleUrls: ['./myleave.component.css']
})
export class MyleaveComponent implements OnInit {
  employee_email:string;
  employee_designation:string;
  empleave:leave[]=[];
  displayedColumns: string[] = ['leave_msg','leave_days','leave_from_date','leave_status'];
  dataSource=new MatTableDataSource();
  constructor(private _leaveser:LeavemanagementService,private _router:Router) { }
  BackButton()
  {
    if(this.employee_designation=="Manager")
    {
      this._router.navigate(['ManagerHomepage/addleave']);
    }
    else if(this.employee_designation==="Cashier")
    {
      this._router.navigate(['CashierHomepage/personalloan']);
    }
    else if(this.employee_designation==="Worker")
    {
      this._router.navigate(['WorkerHomepage/personalloan']);
    }
    else
    {
      this._router.navigate(['DelieveryHomepage/personalloan']);
    }
  }
  ngOnInit() {
    this.employee_email=localStorage.getItem('email');
    this.employee_designation=localStorage.getItem('designation');
    this._leaveser.getleave(this.employee_email).subscribe(
      (data:any)=>
      {
        this.empleave=data;
          this.dataSource.data=this.empleave;
      }
    );
  }

}
