import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompteurService {
  private url = environment.apiKey + '/compteurs';
  
  constructor(private http: HttpClient) { }

  getCompteurs(){
    return this.http.get(this.url);
  }
}
