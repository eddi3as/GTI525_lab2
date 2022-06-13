import { Component, OnInit, Input } from '@angular/core';
import { Compteur } from 'src/app/models/compteur';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  @Input() cmpt: Compteur | undefined; 
  dateFrom!: string;
  dateTo!: string;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  setInfo(): void {
    let info = {
      borne_id: this.cmpt?.id,
      debut: this.dateFrom,
      fin: this.dateTo
    }
    localStorage.setItem("stats", JSON.stringify(info));
    //CALL API FROM THIS MODULE & PASS ARRAY TO CHART
    /*
    this.router.navigate(['/chart'], {
      state: {
        frontEnd: JSON.stringify({ framwork: 'Angular', version: '9' }),
        site: 'edupala.com'
      } 
    });
    */
  }

}
