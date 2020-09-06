import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CorporateProfile } from 'src/app/garlic-common/models/corporate-profile.model';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  lookUpAPI = '/data';
  screenerEndPoint = '/data/garlic-screener';

  constructor(private http: HttpClient) { }

  lookUp(ticker: string): Observable<CorporateProfile> {
    return this.http.get<CorporateProfile>(environment.apiUrl + this.lookUpAPI + `/${ticker}`)
  }

  screenMarket() {
    let criteria = {};
    criteria['name'] = 'name';
    criteria['marketCap'] = 500;

    const req = new HttpRequest(
      'POST',
      `${environment.apiUrl}${this.screenerEndPoint}`,
      criteria
    );
    return this.http.request(req);
  }
}
