import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Compteur } from 'src/app/models/compteur';

@Injectable({
  providedIn: 'root'
})
export class CompteurService {
  private url = environment.apiURL + '/compteurs';
  allCompteursSubject = new Subject<any>();
  selectedCompteurSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  getCompteurs(){
    return this.http.get(this.url);
  }

  setAllCompteurs(allCompteurs: Compteur[]) {
    this.allCompteursSubject.next(allCompteurs);
  }
  
  setSelectedCompteur(selectedCompteur: Compteur) {
    this.selectedCompteurSubject.next(selectedCompteur);
  }

  getAllCompteurs(): Observable<any> {
    return this.allCompteursSubject.asObservable();
  }
  
  getSelectedCompteur(): Observable<any> {
    return this.selectedCompteurSubject.asObservable();
  }

}
