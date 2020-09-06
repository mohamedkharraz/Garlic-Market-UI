import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Currency } from 'src/app/garlic-common/models/currency.model';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  allCurrenciesApi = '/currencies';

  constructor(private http: HttpClient) { }

  getCurrencies(): Observable<Currency[]> {
    return this.http.get<Currency[]>(environment.apiUrl + this.allCurrenciesApi);
  }
}
