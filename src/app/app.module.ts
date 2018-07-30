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
import { CoverComponent } from './cover/cover.component';
import { NewsListComponent } from './news-list/news-list.component';

import { NewsService } from './news.service';
import { CssUrlPipe } from './css-url.pipe';
import { Globals } from './globals';
//import { DataLoaderService } from './data-loader.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    MajorMenuComponent,
    NiiComponent,
    EnrolleeComponent,
    SpeechComponent,
    CoverComponent,
    NewsListComponent,
    CssUrlPipe
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
  providers: [
    NewsService,
    Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
