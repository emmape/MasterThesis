import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule, MatSelectModule,
  MatButtonModule, MatRadioModule, MatListModule,
  MatIconModule, MatCardModule, MatDividerModule, MatSlideToggleModule,
  MatSidenavModule, MatCheckboxModule, MatToolbarModule} from '@angular/material';
  import {MatStepperModule} from '@angular/material/stepper';

  import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InferModuleComponent } from './infer-module/infer-module.component';
import { InformationComponent } from './information/information.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { ReadFileService } from './services/readFile.service';
// import { FilePickerModule } from 'angular-file-picker';


@NgModule({
  declarations: [
    AppComponent,
    InferModuleComponent,
    InformationComponent,
    FileUploaderComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
       { path: 'home', component: InformationComponent },
      { path: 'analyze', component: InferModuleComponent },
      { path: '**', redirectTo: 'home' },

  ]),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    MatStepperModule,
    MatCardModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [ReadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
