import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "../http.service";
import { Subscription } from "rxjs";

@Component({
  selector: "company-detail",
  templateUrl: "./company-detail.component.html",
  styleUrls: ["./company-detail.component.scss"],
  providers: [HttpService],
})
export class CompanyDetailComponent {
  id: number | undefined;
  private routeSubscription: Subscription;
  company: any;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {
    this.routeSubscription = route.params.subscribe((params) => {
      this.id = params["id"];
      console.log(params);
      this.company = params;
    });

    route.queryParams.subscribe((params) => {
      this.company = params;
    });
  }
}
