import { Component, OnInit, Inject } from '@angular/core';
import { FileUploaderComponent } from '../components/file-uploader/file-uploader.component';
import {ReadFileService} from '../services/readFile.service';
import { MissingDialog } from '../components/dialog/missingDialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-infer-module',
  templateUrl: './infer-module.component.html',
  styleUrls: ['./infer-module.component.css']
})
export class InferModuleComponent implements OnInit {
  isLinear = true;
  selectedNetwork = '';
  diamond = false;
  mcode= false;
  md= false;
  barrenas= false;
  comboChoice= false;
  countSelected= 0;
  geneFile: any = '';
  networkFile: any = '';

  animal: string;
  name: string;

  networks = [
    {value: 'upload', viewValue: 'Upload a New Network'},
    {value: 'StringPPI', viewValue: 'String PPI'},
    {value: 'other', viewValue: 'Other PPI'}
  ];

  constructor(private readFileService: ReadFileService, public dialog: MatDialog) {
    readFileService.file$.subscribe(
      file => {
        if (file.fileType === 'genes') {
          this.geneFile = file.file;
        }else if (file.fileType === 'network') {
          this.networkFile = file.file;
        }
        // console.log(this.geneFile, this.networkFile);
      });
   }

  ngOnInit() {

  }

  diamondChbChanged() {
    if (this.diamond === false) {
      this.diamond = true;
      this.countSelected ++;
    }else {
      this.diamond = false;
      this.countSelected --;
    }
     if (this.countSelected > 1) {
      this.comboChoice = true;
     }else {
       this.comboChoice = false;
     }
  }
  mcodeChbChanged() {
    if (this.mcode === false) {
      this.mcode = true;
      this.countSelected ++;
    }else {
      this.mcode = false;
      this.countSelected --;
    }
     if (this.countSelected > 1) {
      this.comboChoice = true;
     }else {
       this.comboChoice = false;
     }
  }
  mdChbChanged() {
    if (this.md === false) {
      this.md = true;
      this.countSelected ++;
    }else {
      this.md = false;
      this.countSelected --;
    }
     if (this.countSelected > 1) {
      this.comboChoice = true;
     }else {
       this.comboChoice = false;
     }
  }
  barrenasChbChanged() {
    if (this.barrenas === false) {
      this.barrenas = true;
      this.countSelected ++;
    }else {
      this.barrenas = false;
      this.countSelected --;
    }
     if (this.countSelected > 1) {
      this.comboChoice = true;
     }else {
       this.comboChoice = false;
     }
  }
  clickNext(stepper: any): void {
    if (this.geneFile === '') {
      const dialogRef = this.dialog.open(MissingDialog, {
        width: '250px',
        data: { name: this.name, animal: this.animal }
      });
      dialogRef.afterClosed().subscribe(result => {
        // console.log('The dialog was closed');
        this.animal = result;
      });
    }else {
      stepper.next();
    }
  }


}
