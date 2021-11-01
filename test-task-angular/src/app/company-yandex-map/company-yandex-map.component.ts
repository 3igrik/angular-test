import { Component } from '@angular/core';
import { HttpService } from "../http.service";

import ymaps from 'ymaps';

@Component({
  selector: 'company-yandex-map',
  templateUrl: './company-yandex-map.component.html',
  styleUrls: ['./company-yandex-map.component.scss'],
  providers: [HttpService]
})

export class CompanyYandexMapComponent{
  constructor() {
    ymaps
  .load()
  .then((maps: { Map: new (arg0: string, arg1: { center: number[]; zoom: number; }) => any; }) => {
    const map = new maps.Map('map', {
      center: [-8.369326, 115.166023],
      zoom: 7
    });
  })
  .catch((error: Error) => console.log('Failed to load Yandex Maps', error));
  }
}
