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
  point!: any;
  private map!: leaf.Map;
  private mapTiles!: leaf.TileLayer;
  private mapMarker!: leaf.Marker;

  constructor(private service: MapService) { }

  ngOnInit(): void {
    this.initMap();
  }
  
  ngOnChanges() {
    if (this.map) {
      this.validateType();
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

    this.validateType();
  }
  
  private validateType() {
    if (this.point.type === "atelier") {
      this.checkAddress();
    } else if (this.point.type === "fontaine") {
      this.placeMarker(this.point.latitude, this.point.longitude); //Fontaine
    }
  }

  private checkAddress() {
    let defaultCoords = [{lat: 45.5016889, lon: -73.567255999999 }];
    let address = this.point.intersection === undefined || this.point.intersection === '' ?
                    '1100 Rue Notre-Dame montreal' : this.point.intersection;

    this.service.getCoordinatesByAddress(address).subscribe((data: any) => {
      let coords = data[0] === undefined ? defaultCoords : data;
      this.placeMarker(coords[0].lat, coords[0].lon); //Atelier
    });
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
