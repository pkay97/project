import { DemoComponent } from './../demo/demo.component';
import { Employee } from './../employee';
import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { EmpDetailsComponent } from '../emp-details/emp-details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employeeList: Employee[] = [];
  singleEmp: any;
  displayedColumns: string[] = ['id', 'employee_name', 'employee_salary', 'employee_age', 'edit'];
  dataSource = [];
  constructor(private service: ServiceService, public dialog: MatDialog) { }

  ngOnInit() {
    this.employeeData();
  }

  employeeData() {
    this.service.getEmp().subscribe((res: any) => {
      this.employeeList = res.data;
      this.dataSource = this.employeeList;
      // console.log(this.employeeList);
      console.log(res);
    });
  }

  singleEmployee(id: number) {

    // this.singleEmp = this.employeeList.find(data => data.id === id);
    // console.log(this.singleEmp);
    // this.openDialog();
  }

  edit(id: number) {
    this.singleEmp = this.employeeList.find(data => data.id === id);
    console.log(this.singleEmp);
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DemoComponent, {
      width: '500px',
      data: {emp: this.singleEmp}
    });
  }
}
