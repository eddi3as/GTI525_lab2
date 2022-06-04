import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Compteur } from '../models/compteur';
import { compteursToJSON, fontainesToJSON } from '../../utils/utils';

let compteursUrl = 'assets/compteurs.csv';
let fontainesUrl = 'assets/fontaines.csv';

@Injectable({
  providedIn: 'root'
})
export class CSVService {
  loadedFontaines: any[] = [];
  loadedCompteurs: any[] = [];

  constructor(private http: HttpClient) { }

  /** GET Compteurs from the csv file */
  async getCompteurs() {
    return this.loadedCompteurs.length > 0 ? this.loadedCompteurs : await this.compteursFromCSV();
  }
  
  /** GET Fontaines from the csv file */
  async getFontaines() {
    return this.loadedFontaines.length > 0 ? this.loadedFontaines : await this.fontainesFromCSV();
  }

  async compteursFromCSV(){
    let str: string = "";
    await this.http.get(compteursUrl, {responseType:"text"}).forEach(data => str = data);
    const rows = str.split("\r\n").slice(1);
    this.loadedCompteurs = compteursToJSON(rows);
    return this.loadedCompteurs;
  }

  async fontainesFromCSV(){
    let str: string = "";
    await this.http.get(fontainesUrl, {responseType:"text"}).forEach(data => str = data);
    const rows = str.split("\r\n").slice(1);
    this.loadedFontaines = fontainesToJSON(rows);
    return this.loadedFontaines;
  }
}
