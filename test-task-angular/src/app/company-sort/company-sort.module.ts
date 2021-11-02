import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "../app.component";
import { CompanySortComponent } from "./company-sort.component";

@NgModule({
  declarations: [CompanySortComponent],
  imports: [
    BrowserModule
  ],
  exports: [CompanySortComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class CompanySortModule {}
