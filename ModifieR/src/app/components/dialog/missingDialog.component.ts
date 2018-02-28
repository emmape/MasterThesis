import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'app-missing-dialog-component',
    templateUrl: './missingDialog.component.html',
  })
  export class MissingDialog {
    constructor(
      public dialogRef: MatDialogRef<MissingDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
  }
