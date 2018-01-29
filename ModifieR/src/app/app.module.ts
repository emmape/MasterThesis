import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule,
  MatButtonModule, MatRadioModule,
  MatIconModule, MatCardModule,
  MatSidenavModule, MatCheckboxModule, MatToolbarModule} from '@angular/material';
  import {MatStepperModule} from '@angular/material/stepper';

  import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InferModuleComponent } from './infer-module/infer-module.component';
import { InformationComponent } from './information/information.component';


@NgModule({
  declarations: [
    AppComponent,
    InferModuleComponent,
    InformationComponent
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
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    MatStepperModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
