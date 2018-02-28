import { Component, OnInit } from '@angular/core';
import { FileUploaderComponent } from '../components/file-uploader/file-uploader.component';
import {ReadFileService} from '../services/readFile.service';

@Component({
  selector: 'app-infer-module',
  templateUrl: './infer-module.component.html',
  styleUrls: ['./infer-module.component.css']
})
export class InferModuleComponent implements OnInit {
  selectedNetwork = '';
  diamond = false;
  mcode= false;
  md= false;
  barrenas= false;
  comboChoice= false;
  countSelected= 0;
  geneFile: any;
  networkFile: any;

  networks = [
    {value: 'upload', viewValue: 'Upload a New Network'},
    {value: 'StringPPI', viewValue: 'String PPI'},
    {value: 'other', viewValue: 'Other PPI'}
  ];

  constructor(private readFileService: ReadFileService) {
    readFileService.file$.subscribe(
      file => {
        if (file.fileType === 'genes') {
          this.geneFile = file.file;
        }else if (file.fileType === 'network') {
          this.networkFile = file.file;
        }
        console.log(this.geneFile, this.networkFile);
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

}
