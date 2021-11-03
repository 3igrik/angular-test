import { Component, Output, EventEmitter, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ICompanyData } from "../interfaces/ICompanyData";

@Component({
  selector: "company-filter",
  templateUrl: "./company-filter.component.html",
  styleUrls: ["./company-filter.component.scss"],
})
export class CompanyFilterComponent {
  @Input() companyIndustries: string[] = [];
  @Input() companyTypes: string[] = [];
  @Output() filterCompany = new EventEmitter();

  typesArr: string[] = [];

  filterForm: FormGroup = new FormGroup({
    searchCompany: new FormControl(),
    selectType: new FormControl(),
    selectIndustry: new FormControl()
  });

  constructor() {
    this.filterForm.valueChanges.subscribe(value => {
      this.filterCompany.emit(value);
      console.log(value);
    })
  }





}
