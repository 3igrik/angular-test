import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule }   from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { CompanyListComponent } from './compnay-list.component';

@NgModule({
  declarations: [
    CompanyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  exports: [CompanyListComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class CompanyListModule { }
