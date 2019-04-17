import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-termsandcondition',
  templateUrl: './termsandcondition.component.html',
  styleUrls: ['./termsandcondition.component.css']
})
export class TermsandconditionComponent implements OnInit {
  designation:string;
  constructor(private _route:Router) { }
  onback()
  {
    if(this.designation=="Manager")
    {
        this._route.navigate(['ManagerHomepage/personalloan']);
    }
    else if(this.designation=="Cashier")
    {
      this._route.navigate(['CashierHomepage/personalloan']);
    }
    else if(this.designation=="Worker")
    {
      this._route.navigate(['WorkerHomepage/personalloan']);
    }
    else
    {
      this._route.navigate(['DelieveryHomepage/personalloan']);
    }
  }
  ngOnInit() {
    this.designation=localStorage.getItem('designation');

  }

}
