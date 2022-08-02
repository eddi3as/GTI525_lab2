import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { PointInteretService } from 'src/app/services/pointinteret.service';
import { PointInteretDTO } from 'src/app/models/pointinteretDTO';
import { NgxSpinnerService } from 'ngx-spinner';

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
        private ngxService: NgxSpinnerService,
        private service: PointInteretService) { }

    ngOnInit(): void {
        
        for(let i = 0; i <= 100; i++) 
            this.annees.push(this.selectedAnnee - i)
    }

    public ajoutPointInteret(): void {
        this.ngxService.show();
        let id = Math.floor(Math.random() * 100001);
        let type = this.selectedType === this.types[0] ? 'fontaine' : 'atelier';
        let point: PointInteretDTO = {
            id: id,
            neighbourhood: this.arrondissement,
            parc_name: this.nomLieu,
            install_date: this.selectedAnnee.toString(),
            comment: this.remarque,
            latitude: this.latitude,
            longitude: this.longitude,
            type: type,
            adress: this.adresse
        };

        this.service.insertPointInteret(point).subscribe((data) =>{
            this.ngxService.hide();
            this.router.navigate(['/']);
        });
    }

    public annuler(): void {
        this.router.navigate(['/']);
    }

}
