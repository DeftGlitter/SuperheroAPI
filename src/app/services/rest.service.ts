import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISuperhero } from '../models/ISuperhero.model';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private baseUrl: string =
    'https://superheroapi.com/api.php/140b2dbc4e8dc2bc0d39c38ef77e1476/';

  private busquedaUrl: string =
    'https://superheroapi.com/api.php/140b2dbc4e8dc2bc0d39c38ef77e1476/search/';

  constructor(private http: HttpClient) {}

  getHero(id: string): Observable<ISuperhero> {
    return this.http.get<ISuperhero>(this.baseUrl + '/' + id);
  }

  searchByName(name: string): Observable<any> {
    const url = this.busquedaUrl + name;
    return this.http.get<any>(url);
  }
}
