import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {postAdComponent} from './components/Advertisements/postAd.component';
import {headerComponent} from './components/header/header.component'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports:      [ BrowserModule,FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent,postAdComponent,headerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
