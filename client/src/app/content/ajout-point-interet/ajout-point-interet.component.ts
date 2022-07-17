import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ajout-point-interet',
    templateUrl: './ajout-point-interet.component.html',
    styleUrls: ['./ajout-point-interet.component.css']
})
export class AjoutPointInteretComponent implements OnInit {
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

    constructor() { }

    ngOnInit(): void {
        
        for(let i = 0; i <= 100; i++) 
            this.annees.push(this.selectedAnnee - i)
    }

}
