import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ReadFileService {

  constructor() { }

  private file = new Subject<ReadFile>();
  file$ = this.file.asObservable();
  fileUploaded(f: ReadFile) {
    this.file.next(f);
  }

}
