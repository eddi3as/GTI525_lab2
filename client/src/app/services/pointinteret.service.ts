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
        return this.http.post<PointInteretDTO>(this.url, {
            id: pt.id,
            neighbourhood: pt.neighbourhood,
            parc_name: pt.parc_name,
            install_date: pt.install_date,
            comment: pt.comment,
            longitude: pt.longitude,
            latitude: pt.latitude,
            type: pt.type,
            adress: pt.adress
        }, headers);
    }
}
