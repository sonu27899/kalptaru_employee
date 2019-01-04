import { Routes,RouterModule } from '@angular/router';
import { EmpLoginComponent } from './General/emp-login/emp-login.component';
import { CashierhomepageComponent } from './Cashier/cashierhomepage/cashierhomepage.component';
import { ViewbillComponent } from './Cashier/Bill_management/viewbill/viewbill.component';
import { BillDetailsComponent } from './Cashier/Bill_management/bill-details/bill-details.component';
import { AllsalarylistComponent } from './Cashier/Salary_management/allsalarylist/allsalarylist.component';
import { PendingsalaryComponent } from './Cashier/Salary_management/pendingsalary/pendingsalary.component';
import { DonesalaryComponent } from './Cashier/Salary_management/donesalary/donesalary.component';
import { ManagerhomepageComponent } from './Manager/managerhomepage/managerhomepage.component';
import { ViewproductComponent } from './Manager/product_management/viewproduct/viewproduct.component';
import { AddproductComponent } from './Manager/product_management/addproduct/addproduct.component';
import { UpdateproductComponent } from './Manager/product_management/updateproduct/updateproduct.component';

const arr:Routes=[
  //Cashier
  {path:'',component:EmpLoginComponent},
  {path:'CashierHomepage',component:CashierhomepageComponent},
  {path:'Viewbill',component:ViewbillComponent},
  {path:'getbilldetails/:bill_id',component:BillDetailsComponent},
  {path:'Viewsalary',component:AllsalarylistComponent},
  {path:'pendingsalary',component:PendingsalaryComponent},
  {path:'donesalary',component:DonesalaryComponent},

  //Manager
  {path:'ManagerHomepage',component:ManagerhomepageComponent},
  {path:'viewproduct',component:ViewproductComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'updateproduct',component:UpdateproductComponent}
];
export const routing=RouterModule.forRoot(arr);
