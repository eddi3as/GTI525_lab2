import { Component, Input, OnInit } from '@angular/core';
import { Fontaine } from "../../models/fontaine";
import { FontaineService } from "../../services/fontaines.service";
import { Subscription } from 'rxjs';
import * as leaf from 'leaflet';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {
  @Input()
  fontaine!: any;
  private map!: leaf.Map;
  private mapTiles!: leaf.TileLayer;
  private mapMarker!: leaf.Marker;
  selectedPointInteret!: any;

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }
  
  ngOnChanges() {
    if (this.map) {
      this.placeMarker();
    }
  }

  private initMap(): void {
    this.selectedPointInteret = this.fontaine;
    this.map = leaf.map('map', {
      zoom: 15
    });
    this.selectedPointInteret = this.fontaine;
    this.mapTiles = leaf.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    this.mapTiles.addTo(this.map);
    this.placeMarker();
  }



  private placeMarker() {
    if (this.mapMarker) { 
      this.mapMarker.removeFrom(this.map); // remove previous marker
    }
    this.selectedPointInteret = this.fontaine;
    this.mapMarker = leaf.marker([Number(this.selectedPointInteret.latitude), Number(this.selectedPointInteret.longitude)], {
      icon: leaf.icon({
        iconUrl: "../../../assets/marker-icon-red.png"
      })
    }).addTo(this.map);
    this.mapMarker.bindPopup(`<b>${this.selectedPointInteret.parc_name}</b>`).openPopup();
    this.map.setView([this.selectedPointInteret.latitude, this.selectedPointInteret.longitude], 15);
  }

}
