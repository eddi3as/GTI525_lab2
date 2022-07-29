import { Component, OnInit } from '@angular/core';
import { fontainesToModel } from 'src/utils/utils';
import { FontaineService } from 'src/app/services/fontaines.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AtelierService } from 'src/app/services/ateliers.service';

@Component({
  selector: 'app-point-interet',
  templateUrl: './point-interet.component.html',
  styleUrls: ['./point-interet.component.css']
})
export class PointInteretComponent implements OnInit {
  pointsInteret: any[] = [];
  fnt_arr: any;
  showMoreInfo: boolean = false;
  selectedFontaine: any;

  constructor(private serviceFontaines: FontaineService,
              private serviceAteliers: AtelierService,
              private ngxService: NgxSpinnerService) { }

  async ngOnInit() {
    this.ngxService.show();
    
    this.serviceFontaines.getFontaines().subscribe((data: any) => {
      this.pointsInteret = fontainesToModel(data.result);
    })

        
    this.serviceAteliers.getAteliers().subscribe((data: any) => {
        data.result.forEach((atelier: any) => {
            this.pointsInteret.push({
                id: atelier.id,
                neighbourhood: atelier.arrondissement,
                parc_name: atelier.nom_lieu,
                install_date: atelier.date_installation,
                comment: atelier.remarques,
                intersection: atelier.adresse,
                type: "Atelier"
            })
        })
    })
   
    this.ngxService.hide();
  }

  statsSearch() {}

  setSelected(fontaine: any) {
    this.selectedFontaine = fontaine;
    this.showMoreInfo = true;
  }

  getSelected() {
    return this.selectedFontaine;
  }

}
