import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const SIZE = 10;
const ENDPOINT = `https://random-data-api.com/api/company/random_company?size=${SIZE}`;

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(ENDPOINT);
  }
}
