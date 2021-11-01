import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "../app-routing.module";
import { AppComponent } from "../app.component";
import { CompanyListComponent } from "./company-list.component";
import { CompanyItemModule } from "../company-item/company-item.module";

@NgModule({
  declarations: [CompanyListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CompanyItemModule,
  ],
  exports: [CompanyListComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class CompanyListModule {}
