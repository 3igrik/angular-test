import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "../app.component";
import { CompanyFilterComponent } from "./company-filter.component";

@NgModule({
  declarations: [CompanyFilterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CompanyFilterComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class CompanyFilterModule {}
