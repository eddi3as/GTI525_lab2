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
    let new_id = -1
    this.http.post<Fontaine>(this.url, {
        arrondissement: fontaine.neighbourhood,
        nom_lieu: fontaine.parc_name,
        date_installation: fontaine.install_date,
        remarques: fontaine.comment,
        latitude: fontaine.latitude,
        longitude: fontaine.longitude,
        id: fontaine.id
    }).subscribe(data => {
        new_id = data.id
    })
    return new_id
  }
}
