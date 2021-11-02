import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { ICompanyData } from "../interfaces/ICompanyData";

@Component({
  selector: "company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.scss"],
  providers: [HttpService],
})
export class CompanyListComponent implements OnInit {
  companies: ICompanyData[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService
      .getData()
      .subscribe((data: any) => (this.companies = data));
  }

  onChanged(sortValue: "name" | "type" | "industry"){
    this.sort(sortValue);
    console.log(sortValue);
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
}
