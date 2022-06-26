import { Component, OnInit } from '@angular/core';
import { Compteur } from 'src/app/models/compteur';
import { CSVService } from 'src/app/services/csv.service';
import { CompteurService } from 'src/app/services/compteurs.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-comptage-velo',
    templateUrl: './comptage-velo.component.html',
    styleUrls: ['./comptage-velo.component.css']
})
export class ComptageVeloComponent implements OnInit {
    compteurs: any[] = [];
    cmpt_arr: any;
    sortOrder = "ascend";
    sortBy = "id";
    showStatsSearch: boolean = false;
    selectedCmpt: Compteur | undefined;
    closeResult: string = '';

    constructor(private csvService: CSVService,
                private service: CompteurService,
                private ngxService: NgxSpinnerService,
                private modalService: NgbModal) { }

    async ngOnInit() {
      this.ngxService.show();
      this.compteurs = await this.csvService.getCompteurs();
        //API CALL for IT-3
        /*
        this.service.getCompteurs().subscribe((data: any) =>{
          this.cmpt_arr = JSON.parse(data.result);
          console.log(this.cmpt_arr[0]);
        });
        */
      this.ngxService.hide();
    }     

    /**
     * Write code on Method
     *
     * @return response()
     */
    open(content:any, compteur: any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg', windowClass: 'modal-xl'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } 
     
    /**
     * Write code on Method
     *
     * @return response()
     */
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

    setSortOrder() {
        if (this.sortOrder === "ascend") {
            this.sortOrder = "descend";
        } else if (this.sortOrder === "descend") {
            this.sortOrder = "ascend";
        }
        this.sort();
    }

    sort() {
        if (this.sortBy === "id") {
          (this.sortOrder === "descend") ? this.compteurs.sort((a, b) => b.id - a.id) : this.compteurs.sort((a, b) => a.id - b.id);
        } else if (this.sortBy === "nom") {
          (this.sortOrder === "descend") ? this.compteurs.sort((a, b) => b.name.localeCompare(a.name)) : this.compteurs.sort((a, b) => a.name.localeCompare(b.name));
        } else if (this.sortBy === "status") {
          (this.sortOrder === "descend") ? this.compteurs.sort((a, b) => b.status.localeCompare(a.status)) : this.compteurs.sort((a, b) => a.status.localeCompare(b.status));
        } else if (this.sortBy === "annee") {
          (this.sortOrder === "descend") ? this.compteurs.sort((a, b) => b.year_build - a.year_build) : this.compteurs.sort((a, b) => a.year_build - b.year_build);
        }
    }

    statsSearch(compteur: Compteur) {
      this.selectedCmpt = compteur;
      this.showStatsSearch = true;
    }
}
