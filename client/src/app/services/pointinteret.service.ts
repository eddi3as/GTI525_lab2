import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Atelier } from '../models/atelier'
import { PointInteret } from '../models/pointinteret';
import { PointInteretDTO } from '../models/pointinteretDTO';

@Injectable({
    providedIn: 'root'
})
export class PointInteretService {
    private url = environment.apiURL + '/pointsdinteret';
    private fontaineURL = '?type=fontaine';
    private atelierURL = '?type=atelier';

    constructor(private http: HttpClient) { }

    getAllPointsInteret() {
        return this.http.get(this.url);
    }

    getPointFontaines() {
        return this.http.get(this.url + this.fontaineURL);
    }

    getAteliers() {
        return this.http.get(this.url + this.atelierURL);
    }

    insertPointInteret(pt: PointInteretDTO) {
        let new_id = -1
        this.http.post<PointInteretDTO>(this.url, {
            arrondissement: pt.neighbourhood,
            nom_lieu: pt.parc_name,
            date_installation: pt.install_date,
            remarques: pt.comment,
            adresse: pt.comment,
            id: pt.id
        }).subscribe(data => {
            new_id = data.id
        })
        return new_id
    }
}
