import { Routes,RouterModule } from '@angular/router';
import { EmpLoginComponent } from './General/emp-login/emp-login.component';
import { CashierhomepageComponent } from './Cashier/cashierhomepage/cashierhomepage.component';
import { ViewbillComponent } from './Cashier/Bill_management/viewbill/viewbill.component';
import { BillDetailsComponent } from './Cashier/Bill_management/bill-details/bill-details.component';

const arr:Routes=[
  {path:'',component:EmpLoginComponent},
  {path:'CashierHomepage',component:CashierhomepageComponent},
  {path:'Viewbill',component:ViewbillComponent},
  {path:'getbilldetails/:bill_id',component:BillDetailsComponent},
];
export const routing=RouterModule.forRoot(arr);
