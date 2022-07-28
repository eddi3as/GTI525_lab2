import { Component, OnInit } from '@angular/core'
import { CSVService } from 'src/app/services/csv.service'
import { FontaineService } from 'src/app/services/fontaines.service'
import { NgxSpinnerService } from 'ngx-spinner'
@Component({
  selector: 'app-fontaines-a-boire',
  templateUrl: './fontaines-a-boire.component.html',
  styleUrls: ['./fontaines-a-boire.component.css']
})
export class FontainesABoireComponent implements OnInit {
    fontaines: any[] = []
    fnt_arr: any
    showMoreInfo: boolean = false
    selectedFontaine: any
  
    constructor(private csvService: CSVService,
                private service: FontaineService,
                private ngxService: NgxSpinnerService) { }
  
    async ngOnInit() {
        this.ngxService.show()
        
        this.service.getFontaines().subscribe((data: any) => {
            /* TODO review data in html or csv and reload in db
            
                    id: fontaine.ID,
                    neighbourhood: fontaine.Arrondissement,
                    parc_name: fontaine.Nom_parc_lieu,
                    install_date: fontaine.date_installation,
                    comment: fontaine.Remarques,
                    latitude: fontaine.X,
                    longitude: fontaine.Y
            */
            data.result.forEach((fontaine: any) => {
                this.fontaines.push({
                    id: fontaine.id,
                    neighbourhood: fontaine.arrondissement,
                    parc_name: fontaine.nom_lieu,
                    install_date: fontaine.date_installation,
                    comment: fontaine.remarques,
                    latitude: fontaine.latitude,
                    longitude: fontaine.longitude
                })
            })
        });
        
        this.ngxService.hide()
    }

    statsSearch() {}

    setSelected(fontaine: any) {
        this.selectedFontaine = fontaine
        this.showMoreInfo = true;
    }

    getSelected() {
        return this.selectedFontaine
    }
}
