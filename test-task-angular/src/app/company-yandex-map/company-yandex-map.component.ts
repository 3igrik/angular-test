import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from "../http.service";
@Component({
  selector: 'company-yandex-map',
  templateUrl: './company-yandex-map.component.html',
  styleUrls: ['./company-yandex-map.component.scss'],
  providers: [HttpService]
})

export class CompanyYandexMapComponent{
}
