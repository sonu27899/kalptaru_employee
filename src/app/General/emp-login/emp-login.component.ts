import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Login } from "../../Classes/login_class";
import { LoginService } from "../../Services/login.service";

@Component({
  selector: "app-emp-login",
  templateUrl: "./emp-login.component.html",
  styleUrls: ["./emp-login.component.css"]
})
export class EmpLoginComponent implements OnInit {
  employee_email: string;
  employee_password: string;
  employee_designation: string;
  constructor(private _route: Router, private _loginser: LoginService) {}

  ngOnInit() {}

  onLogin() {
    this._loginser.getLogin(new Login(this.employee_email, this.employee_password)).subscribe(
      (data: Login[]) => {


        if (data.length == 1)
        {

          localStorage.setItem("email", this.employee_email);

          if (data[0].employee_designation == "Manager")
          {
            alert("Welcome Manager");
            localStorage.setItem("designation",data[0].employee_designation);

            this._route.navigate(['ManagerHomepage/viewproduct']);
          }
          else if (data[0].employee_designation == "Worker")
          {
            alert("Welcome Worker");
            localStorage.setItem("designation",data[0].employee_designation);
            this._route.navigate(['WorkerHomepage/personalloan']);
          }
          else if(data[0].employee_designation=='Cashier')
          {
            alert("Welcome Cashier");
            localStorage.setItem("designation",data[0].employee_designation);
            this._route.navigate(['CashierHomepage/Viewbill']);
          }
          else if(data[0].employee_designation=="Delievery_Boy")
          {
            alert("Welcome Delievery_Boy");
            localStorage.setItem("designation",data[0].employee_designation);
            this._route.navigate(['DelieveryHomepage/mywork']);
          }
        }
         else {
          alert("Email Or Password Incorrect");
        }
      });
  }
}
