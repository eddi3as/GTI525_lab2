import { Component, OnInit } from '@angular/core';
import { Compteur } from 'src/app/models/compteur';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  affiche(compteurs: Compteur): void {
    
  }

}
