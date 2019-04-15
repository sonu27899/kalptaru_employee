import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailManagementService } from 'src/app/Services/email-management.service';
import { sendmail } from 'src/app/Classes/mail_class';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  email:string;
  password:string;
subject1:string;
  constructor(private _route:Router,private _mail:EmailManagementService) { }

  ngOnInit() {

  }

  oncancel()
  {
    this._route.navigate(['../']);
  }
  onforget(){
    this._mail.getpassById(this.email).subscribe(
      (data:any)=>{
        if(data.length>0){

          this.password=data[0].employee_password;

          this._mail.sendmail(new sendmail(this.email,this.subject1,this.password)).subscribe(
            (data:sendmail[])=>{

            }

          );
          alert('Password will send on your mail');
          this._route.navigate(['../']);
         //this._route.navigate(['']);
        }
        else
        {
          alert('Email_id is Not Correct');
        }
      }
    );
  }
}
