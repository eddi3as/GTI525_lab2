import { Component, OnInit } from '@angular/core';
import { Compteur } from 'src/app/models/compteur';
import { CompteurService } from 'src/app/services/compteurs.service';
import { Subscription } from 'rxjs';
import * as leaf from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map!: leaf.Map;
  private centroid: L.LatLngExpression = [45.5016889, -73.567255999999]; //MTL
  allCompteursSub: Subscription;
  selectedCompteurSub: Subscription;
  allCompteurs!: Compteur[];
  selectedCompteur!: Compteur; 
     
  constructor(private compteurService: CompteurService) {
    this.allCompteursSub = this.compteurService.getAllCompteurs().subscribe((compteurs) => {
      this.allCompteurs = compteurs;
    })
    this.selectedCompteurSub = this.compteurService.getSelectedCompteur().subscribe((compteur) => {
      this.selectedCompteur = compteur;
    })
  }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {    
    this.centroid = [Number(this.selectedCompteur.latitude), Number(this.selectedCompteur.longitude)];
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

    const normal_marker = leaf.icon({
      iconUrl: "../../../assets/marker-icon.png"
    });

    let otherCompteurs = this.allCompteurs.map((x) => x);
    otherCompteurs.splice(otherCompteurs.findIndex((counter) => counter == this.selectedCompteur), 1);
    otherCompteurs.forEach((compteur) => {
      const otherCounterMarker =  leaf.marker([Number(compteur.latitude), Number(compteur.longitude)], {icon: normal_marker}).addTo(this.map);
      otherCounterMarker.bindPopup(`<b>${compteur.name}</b>`);
    });

    const selectedCompteurMarker = leaf.marker([Number(this.selectedCompteur.latitude), Number(this.selectedCompteur.longitude)], {
      icon: leaf.icon({
        iconUrl: "../../../assets/marker-icon-red.png"
      })
    }).addTo(this.map);
    selectedCompteurMarker.bindPopup(`<b>${this.selectedCompteur.name}</b>`).openPopup();
  }

  ngOnDestroy() {
    this.allCompteursSub.unsubscribe();
    this.selectedCompteurSub.unsubscribe();
  }


}
