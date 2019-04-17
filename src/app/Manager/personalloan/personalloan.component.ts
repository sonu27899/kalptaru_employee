import { Component, OnInit,Inject } from '@angular/core';
import { LoanService } from '../../Services/loan.service';
import { Router } from '@angular/router';
import { loan } from '../../Classes/loan_class';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogboxComponent } from '../../General/dialogbox/dialogbox.component';

@Component({
  selector: 'app-personalloan',
  templateUrl: './personalloan.component.html',
  styleUrls: ['./personalloan.component.css']
})
export class PersonalloanComponent implements OnInit {
   loan_id:number;
   c1:string;
   loan_amount:number;
   fk_employee_email:string;
   loan_issued_date:Date;
    salary:number;
   loan_status:string;
   loan_reason:string;
   loan_months:number;
   last_installment_date:Date;
   addLoanArray:loan[]=[];
   employee_email:string;
   interest:number;
   emi:number;
   employee_designation:string;
   pay_per_month:number;
flag1:boolean;
  constructor(private _loanservice:LoanService,private _router:Router,public dialog: MatDialog) { }
  @Inject(MAT_DIALOG_DATA) public data: loan;
  onAddLoanButton()
  {

    this.interest=((this.loan_amount*2*this.loan_months)/1200);
    this.interest=parseInt(this.interest+"");
    console.log(this.interest);
    this.emi=((this.loan_amount+this.interest)/this.loan_months);
    this.pay_per_month=parseInt(this.emi+"");


    this.loan_issued_date=new Date(Date.now());
    this.last_installment_date=new Date(Date.now());
    const dialogRef = this.dialog.open(DialogboxComponent, {
      width: '300px',
      height: '500px',
      data: {loan_amount: this.loan_amount,fk_employee_email:this.fk_employee_email,loan_issued_date:this.loan_issued_date,last_installment_date:this.last_installment_date,loan_reason:this.loan_reason,loan_months:this.loan_months,pay_per_month:this.pay_per_month}
    });
    dialogRef.afterClosed().subscribe(result => {
      //console.log('The dialog was closed');
      this.loan_amount=result;
      this.fk_employee_email=result;
      this.loan_issued_date=result;
      this.last_installment_date=result;
      this.loan_reason = "";
      this.loan_months=result;
    });
  }
  onMyLoanButton()
  {
    if(this.employee_designation=="Manager")
      this._router.navigate(['ManagerHomepage/myloan']);
    else if(this.employee_designation=="Worker")
    {
      this._router.navigate(['WorkerHomepage/myloan']);
    }
    else if(this.employee_designation=="Cashier")
    {
      this._router.navigate(['CashierHomepage/myloan']);
    }
    else
      this._router.navigate(['DelieveryHomepage/myloan']);
  }
  ngOnInit() {
   this.fk_employee_email= localStorage.getItem('email');
   this.employee_email=this.fk_employee_email;
    this.employee_designation=localStorage.getItem('designation');
   this._loanservice.getuserdata(this.employee_email).subscribe(
    (data:any)=>{
        this.salary=data[0].employee_salary;

    }
  );



}
onterms()
{
  if(this.employee_designation=="Manager")
    {
        this._router.navigate(['ManagerHomepage/terms']);
    }
    else if(this.employee_designation=="Cashier")
    {
      this._router.navigate(['CashierHomepage/terms']);
    }
    else if(this.employee_designation=="Worker")
    {
      this._router.navigate(['WorkerHomepage/terms']);
    }
    else
    {
      this._router.navigate(['DelieveryHomepage/terms']);
    }
}

item()
{

  if(this.c1=="true")
  {
    this.flag1=true;
  }
  else
  {
    this.flag1=false;
  }

}

}
