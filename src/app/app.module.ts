import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpLoginComponent } from './General/emp-login/emp-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule,MatSidenavModule,MatInputModule,MatSelectModule,MatTableModule,MatFormFieldModule,MatPaginatorModule,MatIconModule, MatToolbarModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule} from '@angular/material';
import { HomepageComponent } from './Manager/homepage/homepage.component';

import { LayoutModule } from '@angular/cdk/layout';
import { CashierhomepageComponent } from './Cashier/cashierhomepage/cashierhomepage.component';
import { CashierdashboardComponent } from './Cashier/cashierdashboard/cashierdashboard.component';
import { ViewbillComponent } from './Cashier/Bill_management/viewbill/viewbill.component';
import { BillDetailsComponent } from './Cashier/Bill_management/bill-details/bill-details.component';
import { AllsalarylistComponent } from './Cashier/Salary_management/allsalarylist/allsalarylist.component';
import { PendingsalaryComponent } from './Cashier/Salary_management/pendingsalary/pendingsalary.component';
import { DonesalaryComponent } from './Cashier/Salary_management/donesalary/donesalary.component'

@NgModule({
  declarations: [
    AppComponent,
    EmpLoginComponent,
    HomepageComponent,
    CashierhomepageComponent,
    CashierdashboardComponent,
    ViewbillComponent,
    BillDetailsComponent,
    AllsalarylistComponent,
    PendingsalaryComponent,
    DonesalaryComponent
  ],
  imports: [
    routing,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
