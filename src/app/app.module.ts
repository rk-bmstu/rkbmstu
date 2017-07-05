import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { MajorMenuComponent } from './major-menu/major-menu.component';
import { NiiComponent } from './nii/nii.component';
import { EnrolleeComponent } from './enrollee/enrollee.component';
import { SpeechComponent } from './speech/speech.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    MajorMenuComponent,
    NiiComponent,
    EnrolleeComponent,
    SpeechComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: 'nii',
        component: NiiComponent
      },
      {
        path: 'enrollee',
        component: EnrolleeComponent
      },
      {
        path: 'speech',
        component: SpeechComponent
      },
      {
        path: '**',
        component: MainComponent
      }
    ]),

    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
