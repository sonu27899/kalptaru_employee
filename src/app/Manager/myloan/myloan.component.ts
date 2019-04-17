import { Component, OnInit, ViewChild } from '@angular/core';
import { LoanService } from 'src/app/Services/loan.service';
import { employee } from 'src/app/Classes/employee_class';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { loan } from 'src/app/Classes/loan_class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myloan',
  templateUrl: './myloan.component.html',
  styleUrls: ['./myloan.component.css']
})
export class MyloanComponent implements OnInit {
  employee_email:string;
  emploan:loan[]=[];
  employee_designation:string;
  displayedColumns: string[] = ['loan_amount','issued_date','loan_status','loan_reason','duration','payment_per_month'];
  dataSource=new MatTableDataSource();
  @ViewChild(MatPaginator)paginator:MatPaginator;
  constructor(private _loanser:LoanService,private _router:Router) { }

  BackButton()
  {
    if(this.employee_designation=="Manager")
    {
      this._router.navigate(['ManagerHomepage/personalloan']);
    }
    else if(this.employee_designation==="Cashier")
    {
      this._router.navigate(['CashierHomepage/personalloan']);
    }
    else if(this.employee_designation=="Worker")
    {
      this._router.navigate(['WorkerHomepage/personalloan']);
    }
    else
    {
      this._router.navigate(['DelieveryHomepage/personalloan']);
    }
  }
  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this.employee_email=localStorage.getItem('email');
    this.employee_designation=localStorage.getItem('designation');

    this._loanser.getmyloan(this.employee_email).subscribe(
      (data:any)=>
      {

        this.emploan=data;
          this.dataSource.data=this.emploan;
      }
    );
  }

}
