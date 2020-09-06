import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Industry } from 'src/app/garlic-common/models/industry.model';

@Injectable({
  providedIn: 'root'
})
export class IndustryService {

  allIndustriesApi = '/industries';

  constructor(private http: HttpClient) { }

  getIndustries(): Observable<Industry[]> {
    return this.http.get<Industry[]>(environment.apiUrl + this.allIndustriesApi);
  }
}
