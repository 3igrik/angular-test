import { Component, Input} from '@angular/core';
import { HttpService } from "../http.service";
import { ICompanyData } from '../interfaces/ICompanyData';

@Component({
  selector: 'company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.scss'],
  providers: [HttpService]
})

export class CompanyItemComponent {
  @Input() company: ICompanyData = {
    id: 0,
    uid: "",
    business_name: "",
    suffix: "",
    industry: "",
    catch_phrase: "",
    buzzword: "",
    bs_company_statement: "",
    employee_identification_number: "",
    duns_number: "",
    logo: "",
    type: "",
    phone_number: "",
    full_address: "",
    latitude: 0,
    longitude: 0
  }
}
