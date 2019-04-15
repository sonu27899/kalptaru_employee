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
import { OrderstatusComponent } from './Manager/order_management/orderstatus/orderstatus.component';
import { PersonalloanComponent } from './Manager/personalloan/personalloan.component';
import { MyprofileComponent } from './General/myprofile/myprofile.component';
import { UpdateprofileComponent } from './General/updateprofile/updateprofile.component';
import { DelieveryhomepageComponent } from './Delievery_Boy/delieveryhomepage/delieveryhomepage.component';
import { MyworkComponent } from './Delievery_Boy/mywork/mywork.component';
import { ViewcategoryComponent } from './Manager/viewcategory/viewcategory.component';
import { UpdatecategoryComponent } from './Manager/updatecategory/updatecategory.component';
import { AddcategoryComponent } from './Manager/addcategory/addcategory.component';
import { MyloanComponent } from './Manager/myloan/myloan.component';
import { WorkerHomepageComponent } from './Worker/worker-homepage/worker-homepage.component';
import { UploadImageComponent } from './Manager/product_management/upload-image/upload-image.component';
import { ForgetPasswordComponent } from './General/forget-password/forget-password.component';
import { LeavemanagementComponent } from './General/leavemanagement/leavemanagement.component';
import { MyleaveComponent } from './General/myleave/myleave.component';
const arr:Routes=[
  //Cashier
  {path:'',component:EmpLoginComponent},
  {path:'CashierHomepage',component:CashierhomepageComponent,children:[
  {path:'Viewbill',component:ViewbillComponent},
  {path:'orderdetails/:order_id',component:BillDetailsComponent},
  {path:'Viewsalary',component:AllsalarylistComponent},
  {path:'pendingsalary',component:PendingsalaryComponent},
  {path:'donesalary',component:DonesalaryComponent},
  {path:'myprofile/:email',component:MyprofileComponent},
  {path:'updateprofile/:email',component:UpdateprofileComponent}
]},
  //Manager
  {path:'ManagerHomepage',component:ManagerhomepageComponent,children:[
    {path:'viewproduct',component:ViewproductComponent},
    {path:'addproduct',component:AddproductComponent},
    {path:'updateproduct/:product_id',component:UpdateproductComponent},
    {path:'orderstatus',component:OrderstatusComponent},
    {path:'personalloan',component:PersonalloanComponent},
    {path:'myprofile/:email',component:MyprofileComponent},
    {path:'updateprofile/:email',component:UpdateprofileComponent},
    {path:'viewcategory',component:ViewcategoryComponent},
    {path:'updatecategory/:category_id',component:UpdatecategoryComponent},
    {path:'addcategory',component:AddcategoryComponent},
    {path:'myloan',component:MyloanComponent},
    {path:'moreimage/:product_id',component:UploadImageComponent},
    {path:'forgetpassword',component:ForgetPasswordComponent},
    {path:'addleave',component:LeavemanagementComponent},
    {path:'myleave',component:MyleaveComponent}
]},

  //DelieveryBoy
  {path:'DelieveryHomepage',component:DelieveryhomepageComponent,children:[
    {path:'myprofile/:email',component:MyprofileComponent},
    {path:'updateprofile/:email',component:UpdateprofileComponent},
    {path:'mywork',component:MyworkComponent},
    {path:'personalloan',component:PersonalloanComponent},
    {path:'myloan',component:MyloanComponent},
    {path:'addleave',component:LeavemanagementComponent},
  ]},

  //Worker
  {path:'WorkerHomepage',component:WorkerHomepageComponent,children:[
    {path:'myprofile/:email',component:MyprofileComponent},
    {path:'updateprofile/:email',component:UpdateprofileComponent},
    {path:'personalloan',component:PersonalloanComponent},
    {path:'myloan',component:MyloanComponent}
  ]},

];
export const routing=RouterModule.forRoot(arr);
