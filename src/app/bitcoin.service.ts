import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BitcoinService {
  url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  constructor(private http: HttpClient) {}

  getCurrentBalance() {
    return this.http.get(this.url);
  }
}
