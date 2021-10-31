import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule }   from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { CompanyItemComponent } from './company-item.component';

@NgModule({
  declarations: [
    CompanyItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  exports: [CompanyItemComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class CompanyItemModule { }
