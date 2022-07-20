import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Fontaine } from '../models/fontaine';

@Injectable({
  providedIn: 'root'
})
export class FontaineService {
  private url = environment.apiKey + '/fontaines';

  constructor(private http: HttpClient) { }

  getFontaines() {
    return this.http.get(this.url);
  }

  insertFontaines(fontaine: Fontaine) {
    return this.http.post(this.url, fontaine)
  }
}
