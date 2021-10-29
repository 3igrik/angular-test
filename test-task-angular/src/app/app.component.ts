import { Component, OnInit } from '@angular/core';
import { HttpService } from "./http.service";
import { ICompanyData } from './interfaces/ICompanyData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {

  companies: ICompanyData[] = [];

  constructor (private httpService: HttpService){};

  ngOnInit() {
    this.httpService.getData().subscribe((data: any) => this.companies = data)
  }
}
