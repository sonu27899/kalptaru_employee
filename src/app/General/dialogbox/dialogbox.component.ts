import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { loan } from '../../Classes/loan_class';
import { LoanService } from '../../Services/loan.service';
import {  ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogboxComponent>, @Inject(MAT_DIALOG_DATA) public data: loan,private _withdrawamountservice:LoanService,private _ac:ActivatedRoute,private _router:Router) { }
  public loan_amount:number;
  public employee_designation:string;
  public fk_employee_email:string;
  public loan_issued_date:Date;
  public last_installment_date:Date;
  public loan_reason:string;
  public loan_months:number;
  loan_id:number;
  pay_per_month:number;
  onNoClick(): void {
    this.dialogRef.close();
    if(this.employee_designation=="Manager")
        {
          this._router.navigate(['ManagerHomepage/personalloan']);
        }
        else if(this.employee_designation=="Cashier")
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
  onClick(item)
  {

    this._withdrawamountservice.addLoanNotification(new loan(item.loan_amount,item.fk_employee_email,item.loan_issued_date,item.last_installment_date,item.loan_reason,item.loan_months,item.pay_per_month)).subscribe(
      (data:any)=>
      {
        alert("Your Loan Request Sent To The ADMIN");
        if(this.employee_designation=="Manager")
        {
          this._router.navigate(['ManagerHomepage/personalloan']);
        }
        else if(this.employee_designation=="Cashier")
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
    )

    }


  ngOnInit() {
    this.employee_designation=localStorage.getItem('designation');

  }

}
