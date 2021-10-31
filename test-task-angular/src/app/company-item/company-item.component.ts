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
  @Input() companyLogo: string = "";
  @Input() companySuffix: string = "";
  @Input() companyBusinessName: string = "";
  @Input() companyIndustry: string = "";
  @Input() companyType: string = "";
}
