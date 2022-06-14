import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StatsSearch } from '../models/statssearch';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  private url = environment.apiKey + '/stats/';

  constructor(private http: HttpClient) { }

  /** GET Stats from the db */
  getStats(info: StatsSearch) {
    let statsUrl = this.url + info.borne_id?.toString();
    //TODO params check
    let queryParams = new HttpParams();
    queryParams = queryParams.append("debut", info.debut);
    queryParams = queryParams.append("fin", info.fin);
    return this.http.get(statsUrl, {params: queryParams});
  }
}
