import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from './../service.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
 empForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<DemoComponent>, @Inject(MAT_DIALOG_DATA) public data,
              private service: ServiceService) { }

  ngOnInit() {
    this.empForm = new FormGroup({
      name: new FormControl(this.data.emp.employee_name),
      salary: new FormControl(this.data.emp.employee_salary),
      age: new FormControl(this.data.emp.employee_age),
    });
  }

  submit(id: number) {
    this.service.updateEmp(id, this.empForm.value).subscribe(res => console.log('success', res));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
