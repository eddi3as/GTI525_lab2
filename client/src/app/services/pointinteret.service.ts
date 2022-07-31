import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PointInteretDTO } from '../models/pointinteretDTO';
import { authHeader } from '../services/security.service';

@Injectable({
    providedIn: 'root'
})
export class PointInteretService {
    private url = environment.apiURL + '/pointsdinteret';
    private fontaineURL = '?type=fontaine';
    private atelierURL = '?type=atelier';

    constructor(private http: HttpClient) { }

    getAllPointsInteret() {
        const headers = authHeader();
        return this.http.get(this.url, headers);
    }

    getFontaines() {
        const headers = authHeader();
        return this.http.get(this.url + this.fontaineURL, headers);
    }

    getAteliers() {
        const headers = authHeader();
        return this.http.get(this.url + this.atelierURL, headers);
    }

    insertPointInteret(pt: PointInteretDTO) {
        const headers = authHeader();
        let new_id = -1
        this.http.post<PointInteretDTO>(this.url, {
            arrondissement: pt.neighbourhood,
            nom_lieu: pt.parc_name,
            date_installation: pt.install_date,
            remarques: pt.comment,
            adresse: pt.comment,
            id: pt.id
        }, headers).subscribe(data => {
            new_id = data.id
        })
        return new_id
    }
}
