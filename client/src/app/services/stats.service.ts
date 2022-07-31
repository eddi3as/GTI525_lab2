import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StatsSearch } from '../models/statssearch';
import { authHeader } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private url = environment.apiURL + '/compteurs/';

  constructor(private http: HttpClient) { }

  /** GET Stats from the db */
  getStats(info: StatsSearch) {
    const headers = authHeader();
    let statsUrl = this.url + info.borne_id?.toString() + "/passages?debut="+ info.debut + "&fin=" + info.fin;
    return this.http.get(statsUrl, headers);
  }
}
