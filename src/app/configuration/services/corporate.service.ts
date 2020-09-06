import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Corporate } from 'src/app/garlic-common/models/corporate.model';

@Injectable({
  providedIn: 'root',
})
export class CorporateService {

  private corporatesApi = '/corporates';

  constructor(private http: HttpClient) {
  }

  getCorporates(): Observable<Corporate[]> {
    return this.http.get<Corporate[]>(environment.apiUrl + this.corporatesApi)
  }

  updateCorporate(ticker: string, newCorporate: Corporate): Observable<Corporate> {
    return this.http.put<Corporate>(environment.apiUrl + this.corporatesApi + `/${ticker}`, newCorporate);
  }

  addNewCorporate(ticker: string): Observable<Corporate> {
    return this.http.post<Corporate>(environment.apiUrl + this.corporatesApi + `/${ticker}`, null);
  }
}
