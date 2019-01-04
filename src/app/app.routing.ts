import { Routes,RouterModule } from '@angular/router';
import { EmpLoginComponent } from './General/emp-login/emp-login.component';
import { CashierhomepageComponent } from './Cashier/cashierhomepage/cashierhomepage.component';
import { ViewbillComponent } from './Cashier/Bill_management/viewbill/viewbill.component';
import { BillDetailsComponent } from './Cashier/Bill_management/bill-details/bill-details.component';
import { AllsalarylistComponent } from './Cashier/Salary_management/allsalarylist/allsalarylist.component';
import { PendingsalaryComponent } from './Cashier/Salary_management/pendingsalary/pendingsalary.component';
import { DonesalaryComponent } from './Cashier/Salary_management/donesalary/donesalary.component';

const arr:Routes=[
  {path:'',component:EmpLoginComponent},
  {path:'CashierHomepage',component:CashierhomepageComponent},
  {path:'Viewbill',component:ViewbillComponent},
  {path:'getbilldetails/:bill_id',component:BillDetailsComponent},
  {path:'Viewsalary',component:AllsalarylistComponent},
  {path:'pendingsalary',component:PendingsalaryComponent},
  {path:'donesalary',component:DonesalaryComponent}
];
export const routing=RouterModule.forRoot(arr);
