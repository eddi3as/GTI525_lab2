import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FontaineService } from 'src/app/services/fontaines.service';
import { AtelierService } from 'src/app/services/ateliers.service';

@Component({
    selector: 'app-ajout-point-interet',
    templateUrl: './ajout-point-interet.component.html',
    styleUrls: ['./ajout-point-interet.component.css']
})
export class AjoutPointInteretComponent implements OnInit {
    routeState: any;
    public types: string[] = ["Fontaines à boire", "Atelier de vélo"]
    public selectedType: string = ""
    public annees: number[] = []
    public selectedAnnee: number = new Date().getFullYear()
    public nomLieu: string = ""
    public adresse: string = ""
    public arrondissement: string = ""
    public longitude: number = 0
    public latitude: number = 0
    public remarque: string = ""

    constructor(
        private router: Router,
        private fontaineService: FontaineService,
        private atelierService: AtelierService) { }

    ngOnInit(): void {
        
        for(let i = 0; i <= 100; i++) 
            this.annees.push(this.selectedAnnee - i)
    }

    public ajoutPointInteret(): void {
        console.log("Click")
        let id = Math.floor(Math.random() * 100001);
        // Si c'est une fontaine
        if(this.selectedType === this.types[0]) {
            console.log("F")
            this.fontaineService.insertFontaines({
                id: id,
                neighbourhood: this.arrondissement,
                parc_name: this.nomLieu,
                install_date: this.selectedAnnee.toString(),
                comment: this.remarque,
                latitude: this.latitude,
                longitude: this.longitude
            })
        } else {
            console.log("A")
            this.atelierService.insertAteliers({
                id: id,
                neighbourhood: this.arrondissement,
                parc_name: this.nomLieu,
                install_date: this.selectedAnnee.toString(),
                comment: this.remarque,
                address: this.adresse,
            })
        }
    }

    public annuler(): void {
        this.router.navigate(['/'])
    }

}
