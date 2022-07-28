import { Component, Input, OnInit } from '@angular/core';
import { MapService } from 'src/app/services/map.service';
import * as leaf from 'leaflet';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {
  @Input()
  fontaine!: any;
  @Input()
  atelier!: any;
  private map!: leaf.Map;
  private mapTiles!: leaf.TileLayer;
  private mapMarker!: leaf.Marker;
  @Input()
  categoryPointInteret!: string; // fontaine, atelier

  constructor(private service: MapService) { }

  ngOnInit(): void {
    this.initMap();
  }
  
  ngOnChanges() {
    if (this.map) {
      if (this.categoryPointInteret === "atelier") {
        const lat = this.service.getCoordinatesByAddress(this.atelier.intersection);
        console.log(lat);
        this.service.getCoordinatesByAddress(this.atelier.intersection).subscribe((data: any) => {
          this.placeMarker(data[0].lat, data[0].lon); //Atelier
        });
      } else if (this.categoryPointInteret === "fontaine") {
        this.placeMarker(this.fontaine.latitude, this.fontaine.longitude); //Fontaine
      }
    }
  }

  private initMap(): void {
    this.map = leaf.map('map', {
      zoom: 15
    });

    this.mapTiles = leaf.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    this.mapTiles.addTo(this.map);

    if (this.categoryPointInteret === "atelier") {
      this.service.getCoordinatesByAddress(this.atelier.intersection).subscribe((data: any) => {
        this.placeMarker(data[0].lat, data[0].lon); //Atelier
      });
    } else if (this.categoryPointInteret === "fontaine") {
      this.placeMarker(this.fontaine.latitude, this.fontaine.longitude); //Fontaine
    }
    
  }



  private placeMarker(latitude: number, longitude: number) {
    if (this.mapMarker) { 
      this.mapMarker.removeFrom(this.map); // remove previous marker
    }

    this.mapMarker = leaf.marker([latitude, longitude], {
      icon: leaf.icon({
        iconUrl: "../../../assets/marker-icon-red.png"
      })
    }).addTo(this.map);
    this.map.setView([latitude, longitude], 15);
  }

}
