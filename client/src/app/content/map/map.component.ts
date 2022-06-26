import { Component, OnInit } from '@angular/core';
import * as leaf from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map!: leaf.Map;
  private centroid: L.LatLngExpression = [45.5016889, -73.567255999999]; //MTL
  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = leaf.map('map', {
      center: this.centroid,
      zoom: 12
    });

    const tiles = leaf.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

}
