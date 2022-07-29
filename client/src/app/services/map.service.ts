import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }



  getCoordinatesByAddress(address: string) {
    return this.http.get<any>(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`);
  }

}
