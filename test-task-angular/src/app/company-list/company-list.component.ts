import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { ICompanyData } from "../interfaces/ICompanyData";
import { IFilterInputs } from "../interfaces/IFilterInputs";
@Component({
  selector: "company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.scss"],
  providers: [HttpService],
})
export class CompanyListComponent implements OnInit {
  companies: ICompanyData[] = [];
  companiesChangebleCopy: ICompanyData[] = [];
  COMPANIES: ICompanyData[] = [];
  companyIndustries: string[] = [];
  companyTypes: string[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.companyIndustries = [];
    this.companyTypes = [];

    this.httpService.getData().subscribe((data: any) => {
      this.companies = data;
      this.companiesChangebleCopy = data;
      this.COMPANIES = data;

      this.companies.map((company) => {
        if (!this.companyIndustries.includes(company.industry)) {
          this.companyIndustries.push(company.industry);
        }
        if (!this.companyTypes.includes(company.type)) {
          this.companyTypes.push(company.type);
        }
      });
    });
  }

  sortChanged(sortValue: "name" | "type" | "industry") {
    this.sort(sortValue);
    console.log(sortValue);
  }

  filterCompany(filterInputs: IFilterInputs) {
    this.filter(filterInputs);
  }

  sort(sortBy: "name" | "type" | "industry") {
    if (sortBy === "name") {
      this.companies.sort((companyA, companyB) => {
        let companyAfullName = companyA.suffix + companyA.business_name;
        let companyBfullName = companyB.suffix + companyB.business_name;

        if (companyAfullName < companyBfullName) {
          return -1;
        } else if (companyAfullName > companyBfullName) {
          return 1;
        } else return 0;
      });
    } else {
      this.companies.sort((companyA, companyB) => {
        if (companyA[sortBy] < companyB[sortBy]) {
          return -1;
        } else if (companyA.business_name > companyB.business_name) {
          return 1;
        } else return 0;
      });
    }
  }

  filter(inputs: IFilterInputs) {
    this.companiesChangebleCopy = this.COMPANIES;

    if (inputs.selectType !== null && inputs.selectType !== "null") {
      this.companiesChangebleCopy = this.companiesChangebleCopy.filter(
        (el) => el.type === inputs.selectType,
      );
    }

    if (inputs.selectIndustry !== null && inputs.selectIndustry !== "null") {
      this.companiesChangebleCopy = this.companiesChangebleCopy.filter(
        (el) => el.industry === inputs.selectIndustry,
      );
    }

    if (inputs.searchCompany !== null && inputs.searchCompany !== "") {
      this.companiesChangebleCopy = this.companiesChangebleCopy.filter((el) => {
        let fullName = `${el.suffix} ${el.business_name}`;
        return fullName
          .toLowerCase()
          .includes(inputs.searchCompany.toLowerCase());
      });
    }

    this.companies = this.companiesChangebleCopy;
  }
}
