import { Component, OnInit} from '@angular/core';
import { HttpService } from "../http.service";
import { ICompanyData } from '../interfaces/ICompanyData';

@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
  providers: [HttpService]
})

export class CompanyListComponent implements OnInit {
  companies: ICompanyData[] = [];

  constructor (private httpService: HttpService){};

  ngOnInit() {
    this.httpService.getData().subscribe((data: any) => this.companies = data);
  }

}
