import { Component, OnInit } from '@angular/core';
import { emp_salary } from '../../../Classes/salary_class';
import { Router } from "@angular/router";
import { MatTableDataSource,MatPaginator } from '../../../../../node_modules/@angular/material';
import { SalarymanagementService } from 'src/app/Services/salarymanagement.service';


@Component({
  selector: 'app-allsalarylist',
  templateUrl: './allsalarylist.component.html',
  styleUrls: ['./allsalarylist.component.css']
})
export class AllsalarylistComponent implements OnInit {

  salaryarr:emp_salary[]=[];
  displayedColumns: string[] = ['employee_name','employee_salary','employee_designation','employee_mobileno','employee_city','employee_gender','salary_status'];
  dataSource=new MatTableDataSource();

  constructor(private _salaryser:SalarymanagementService,public _router:Router) { }

  ngOnInit() {
    this._salaryser.getAllEmp().subscribe(
      (data:any[])=>
      {

        this.salaryarr=data;
        this.dataSource.data=this.salaryarr;
      }
    );
  }

}
