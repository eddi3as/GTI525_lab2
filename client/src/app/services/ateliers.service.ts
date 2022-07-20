import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Atelier } from '../models/atelier'

@Injectable({
    providedIn: 'root'
})
export class AtelierService {
    private url = environment.apiKey + '/ateliers';

    constructor(private http: HttpClient) { }

    getAteliers() {
        return this.http.get(this.url);
    }

    insertAteliers(atelier: Atelier) {
        console.log("post", this.url, atelier)
        console.log("res", this.http.post(this.url, atelier))
        let new_id = -1
        this.http.post<Atelier>(this.url, {
            arrondissement: atelier.neighbourhood,
            nom_lieu: atelier.parc_name,
            date_installation: atelier.install_date,
            remarques: atelier.comment,
            adresse: atelier.address,
            id: atelier.id
        }).subscribe(data => {
            new_id = data.id
            console.log("data", data)
        })
        console.log(new_id)
        return new_id
    }
}
