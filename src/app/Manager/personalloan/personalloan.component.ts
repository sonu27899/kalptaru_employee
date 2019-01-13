import { Component, OnInit } from '@angular/core';
import { LoanService } from '../../Services/loan.service';
import { Router,ActivatedRoute } from '@angular/router';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
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

   loan_status:string;
   loan_reason:string;
   loan_months:number;
   last_installment_date:Date;
   addLoanArray:loan[]=[];


  constructor(private _loanservice:LoanService,private _router:Router) { }
  onAddLoanButton()
  {

    this.loan_issued_date=new Date(Date.now());
    this.last_installment_date=new Date(Date.now());
    this._loanservice.addLoanNotification(new loan(this.loan_amount,this.fk_employee_email,this.loan_issued_date,this.last_installment_date,this.loan_reason,this.loan_months)).subscribe(
        (data:any)=>{
            console.log(this.fk_employee_email)
            //this.addLoanArray.push(new loan(this.loan_amount,this.fk_employee_email,this.loan_issued_date,this.last_installment_date,this.loan_reason,this.loan_months));
            alert("successfully added");
            console.log(data);
            //console.log(this.addLoanArray);
        }
    )
  }
  ngOnInit() {
   this.fk_employee_email= localStorage.getItem('email');
  }

}
