import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule }   from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { CompanyItemComponent } from './company-item.component';
import { CompanyDetailModule } from '../company-detail/company-detail.module';

@NgModule({
  declarations: [
    CompanyItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CompanyDetailModule
  ],
  exports: [CompanyItemComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class CompanyItemModule { }
