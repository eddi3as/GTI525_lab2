import { Component, OnInit } from '@angular/core'
import { AtelierService } from 'src/app/services/ateliers.service'
import { NgxSpinnerService } from 'ngx-spinner'

@Component({
  selector: 'app-reparation-velo',
  templateUrl: './reparation-velo.component.html',
  styleUrls: ['./reparation-velo.component.css']
})
export class ReparationVeloComponent implements OnInit {
    ateliers: any[] = []
    fnt_arr: any
    showMoreInfo: boolean = false
    selectedAtelier: any
  
    constructor(private service: AtelierService,
                private ngxService: NgxSpinnerService) { }
  
    async ngOnInit() {
        this.ngxService.show()
        
        this.service.getAteliers().subscribe((data: any) => {
            data.result.forEach((atelier: any) => {
                console.log(atelier)
                this.ateliers.push({
                    id: atelier.id,
                    neighbourhood: atelier.arrondissement,
                    parc_name: atelier.nom_lieu,
                    install_date: atelier.date_installation,
                    comment: atelier.remarques,
                    intersection: atelier.adresse,
                })
            })
        })
        
        this.ngxService.hide()
    }

    statsSearch() {}

    setSelected(atelier: any) {
        this.selectedAtelier = atelier
        this.showMoreInfo = true;
    }

    getSelected() {
        return this.selectedAtelier
    }
}
