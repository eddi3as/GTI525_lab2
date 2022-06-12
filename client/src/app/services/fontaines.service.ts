import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FontaineService {
  private url = environment.apiKey + '/fontaines';

  constructor(private http: HttpClient) { }

  getFontaines(){
    return this.http.get(this.url);
  }
}
