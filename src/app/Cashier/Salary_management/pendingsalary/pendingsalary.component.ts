import { Component, OnInit } from '@angular/core';
import { emp_salary } from '../../../Classes/salary_class';
import { Router } from "@angular/router";
import { MatTableDataSource,MatPaginator } from '../../../../../node_modules/@angular/material';
import { SalarymanagementService } from 'src/app/Services/salarymanagement.service';


@Component({
  selector: 'app-pendingsalary',
  templateUrl: './pendingsalary.component.html',
  styleUrls: ['./pendingsalary.component.css']
})
export class PendingsalaryComponent implements OnInit {

  salaryarr:emp_salary[]=[];
  displayedColumns: string[] = ['employee_name','employee_joining_date','employee_salary','employee_designation','employee_mobileno','employee_city','employee_gender','salary_status'];
  dataSource=new MatTableDataSource();

  constructor(private _salaryser:SalarymanagementService,public _router:Router) { }

  ngOnInit() {
    this._salaryser.getPendingEmp().subscribe(
      (data:any[])=>
      {

        this.salaryarr=data;
        this.dataSource.data=this.salaryarr;
      }
    );
  }

}
