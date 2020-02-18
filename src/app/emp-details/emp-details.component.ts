import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent {

  constructor(public dialogRef: MatDialogRef<EmpDetailsComponent>,
              @Inject(MAT_DIALOG_DATA) public data ) {
              }

  // ngOnInit(): void {
  // }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
