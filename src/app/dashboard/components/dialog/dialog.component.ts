import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

export interface DialogData {
  animal: string;
  
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.css'],
})
export class DialogOverviewExample  implements OnInit{
  
  animal: string;
  

  constructor(public dialog: MatDialog) {
    
  }
  ngOnInit() {
   
  }
  

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['dialog-overview-example-dialog.css']
})
export class DialogOverviewExampleDialog {
  DeviceId:number;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private Activatedroute:ActivatedRoute) {}

  ngOnInit() {
  } 
  onNoClick(): void {
    this.dialogRef.close();
  }

}