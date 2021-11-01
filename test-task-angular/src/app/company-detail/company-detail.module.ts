import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "../app-routing.module";
import { AppComponent } from "../app.component";
import { CompanyDetailComponent } from "./company-detail.component";
import { CompanyItemModule } from "../company-item/company-item.module";
import { CompanyListModule } from "../company-list/company-list.module";

@NgModule({
  declarations: [CompanyDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  exports: [CompanyDetailComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class CompanyDetailModule {}
