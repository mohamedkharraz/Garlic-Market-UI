import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Sector } from 'src/app/garlic-common/models/sector.model';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  allSectorsApi = '/sectors';

  constructor(private http: HttpClient) { }

  getSectors(): Observable<Sector[]> {
    return this.http.get<Sector[]>(environment.apiUrl + this.allSectorsApi)
  }

}
