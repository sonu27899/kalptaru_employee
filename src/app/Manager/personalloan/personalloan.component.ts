import { Component, OnInit } from '@angular/core';
import { LoanService } from '../../Services/loan.service';
import { Router } from '@angular/router';
import { loan } from '../../Classes/loan_class';
@Component({
  selector: 'app-personalloan',
  templateUrl: './personalloan.component.html',
  styleUrls: ['./personalloan.component.css']
})
export class PersonalloanComponent implements OnInit {
   loan_id:number;
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

  constructor(private _loanservice:LoanService,private _router:Router) { }
  onAddLoanButton()
  {
    console.log(this.loan_amount);
    console.log(this.loan_months);

    this.interest=((this.loan_amount*2*this.loan_months)/1200);
    console.log(this.interest);
    this.emi=((this.loan_amount+this.interest)/this.loan_months);
    console.log(this.emi);
    alert("Your Name => " + this.fk_employee_email + "\n Your Loan Amount Is => " + this.loan_amount + "\n Your Loan Duration Is For => " + this.loan_months + "Months" + "\n Your Total Payable Amount Per Month Is => " + this.emi);
    this.loan_issued_date=new Date(Date.now());
    this.last_installment_date=new Date(Date.now());
    this._loanservice.addLoanNotification(new loan(this.loan_amount,this.fk_employee_email,this.loan_issued_date,this.last_installment_date,this.loan_reason,this.loan_months)).subscribe(
        (data:any)=>{
            console.log(this.fk_employee_email);

            alert("successfully added");
            console.log(data);

        }
    )
  }
  ngOnInit() {
   this.fk_employee_email= localStorage.getItem('email');
   this.employee_email=this.fk_employee_email;
   console.log(this.employee_email);
   this._loanservice.getuserdata(this.employee_email).subscribe(
    (data:any)=>{
        this.salary=data[0].employee_salary;
        console.log(data)
    }
  );


  }
}
