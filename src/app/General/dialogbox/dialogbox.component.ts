import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { loan } from '../../Classes/loan_class';
import { LoanService } from '../../Services/loan.service';
import {  ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogboxComponent>, @Inject(MAT_DIALOG_DATA) public data: loan,private _withdrawamountservice:LoanService,private _ac:ActivatedRoute) { }
  public loan_amount:number;
  public fk_employee_email:string;
  public loan_issued_date:Date;
  public last_installment_date:Date;
  public loan_reason:string;
  public loan_months:number;
  loan_id:number;
  onNoClick(): void {
    this.dialogRef.close();
  }
  onClick(item)
  {


    console.log(this.loan_amount);
    this._withdrawamountservice.addLoanNotification(new loan(this.loan_amount,this.fk_employee_email,this.loan_issued_date,this.last_installment_date,this.loan_reason,this.loan_months)).subscribe(
      (data:any)=>
      {
        console.log(data);
      }
    )

    }


  ngOnInit() {
    console.log(this.loan_amount);
    console.log(this.loan_reason);
  }

}
