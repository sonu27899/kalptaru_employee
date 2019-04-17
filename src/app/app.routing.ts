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
import { PageNotFoundComponent } from './General/page-not-found/page-not-found.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { TermsandconditionComponent } from './General/termsandcondition/termsandcondition.component';

const arr:Routes=[
  {path:'forgetpassword',component:ForgetPasswordComponent},
  {path:'not-found',component:PageNotFoundComponent},

  //Cashier
  {path:'',component:EmpLoginComponent},
  {path:'CashierHomepage',component:CashierhomepageComponent,canActivate:[AuthGuardService],children:[
  {path:'Viewbill',component:ViewbillComponent,canActivate:[AuthGuardService]},
  {path:'personalloan',component:PersonalloanComponent,canActivate:[AuthGuardService]},
  {path:'orderdetails/:order_id',component:BillDetailsComponent,canActivate:[AuthGuardService]},
  {path:'Viewsalary',component:AllsalarylistComponent,canActivate:[AuthGuardService]},
  {path:'pendingsalary',component:PendingsalaryComponent,canActivate:[AuthGuardService]},
  {path:'donesalary',component:DonesalaryComponent,canActivate:[AuthGuardService]},
  {path:'myprofile/:email',component:MyprofileComponent,canActivate:[AuthGuardService]},
  {path:'updateprofile/:email',component:UpdateprofileComponent,canActivate:[AuthGuardService]},
  {path:'myleave',component:MyleaveComponent,canActivate:[AuthGuardService]},
  {path:'addleave',component:LeavemanagementComponent,canActivate:[AuthGuardService]},
  {path:'myloan',component:MyloanComponent,canActivate:[AuthGuardService]},
  {path:'terms',component:TermsandconditionComponent,canActivate:[AuthGuardService]}
]},

  //Manager
  {path:'ManagerHomepage',component:ManagerhomepageComponent,canActivate:[AuthGuardService],children:[
    {path:'viewproduct',component:ViewproductComponent,canActivate:[AuthGuardService]},
    {path:'addproduct',component:AddproductComponent,canActivate:[AuthGuardService]},
    {path:'orderdetails/:order_id',component:BillDetailsComponent,canActivate:[AuthGuardService]},
    {path:'updateproduct/:product_id',component:UpdateproductComponent,canActivate:[AuthGuardService]},
    {path:'orderstatus',component:OrderstatusComponent,canActivate:[AuthGuardService]},
    {path:'personalloan',component:PersonalloanComponent,canActivate:[AuthGuardService]},
    {path:'myprofile/:email',component:MyprofileComponent,canActivate:[AuthGuardService]},
    {path:'updateprofile/:email',component:UpdateprofileComponent,canActivate:[AuthGuardService]},
    {path:'viewcategory',component:ViewcategoryComponent,canActivate:[AuthGuardService]},
    {path:'updatecategory/:category_id',component:UpdatecategoryComponent,canActivate:[AuthGuardService]},
    {path:'addcategory',component:AddcategoryComponent,canActivate:[AuthGuardService]},
    {path:'myloan',component:MyloanComponent,canActivate:[AuthGuardService]},
    {path:'moreimage/:product_id',component:UploadImageComponent,canActivate:[AuthGuardService]},
    {path:'forgetpassword',component:ForgetPasswordComponent,canActivate:[AuthGuardService]},
    {path:'addleave',component:LeavemanagementComponent,canActivate:[AuthGuardService]},
    {path:'myleave',component:MyleaveComponent,canActivate:[AuthGuardService]},
    {path:'terms',component:TermsandconditionComponent,canActivate:[AuthGuardService]}
]},

  //DelieveryBoy
  {path:'DelieveryHomepage',component:DelieveryhomepageComponent,canActivate:[AuthGuardService],children:[
    {path:'myprofile/:email',component:MyprofileComponent,canActivate:[AuthGuardService]},
    {path:'updateprofile/:email',component:UpdateprofileComponent,canActivate:[AuthGuardService]},
    {path:'mywork',component:MyworkComponent,canActivate:[AuthGuardService]},
    {path:'personalloan',component:PersonalloanComponent,canActivate:[AuthGuardService]},
    {path:'myloan',component:MyloanComponent,canActivate:[AuthGuardService]},
    {path:'addleave',component:LeavemanagementComponent,canActivate:[AuthGuardService]},
    {path:'myleave',component:MyleaveComponent,canActivate:[AuthGuardService]},
    {path:'terms',component:TermsandconditionComponent,canActivate:[AuthGuardService]}
  ]},

  //Worker
  {path:'WorkerHomepage',component:WorkerHomepageComponent,canActivate:[AuthGuardService],children:[
    {path:'myprofile/:email',component:MyprofileComponent,canActivate:[AuthGuardService]},
    {path:'addleave',component:LeavemanagementComponent,canActivate:[AuthGuardService]},
    {path:'updateprofile/:email',component:UpdateprofileComponent,canActivate:[AuthGuardService]},
    {path:'personalloan',component:PersonalloanComponent,canActivate:[AuthGuardService]},
    {path:'myloan',component:MyloanComponent,canActivate:[AuthGuardService]},
    {path:'myleave',component:MyleaveComponent,canActivate:[AuthGuardService]},
    {path:'terms',component:TermsandconditionComponent,canActivate:[AuthGuardService]}
  ]},
  {path:'**',redirectTo:'/not-found',pathMatch:'full'}

];
export const routing=RouterModule.forRoot(arr);
