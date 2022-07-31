import { Component, OnInit } from '@angular/core'
import { NgxSpinnerService } from 'ngx-spinner'
import { PointInteretService } from 'src/app/services/pointinteret.service'
import { pointToModel } from 'src/utils/utils'

@Component({
  selector: 'app-reparation-velo',
  templateUrl: './reparation-velo.component.html',
  styleUrls: ['./reparation-velo.component.css']
})
export class ReparationVeloComponent implements OnInit {
    ateliers: any[] = [];
    fnt_arr: any;
    showMoreInfo: boolean = false;
    selectedAtelier: any;
  
    constructor(private service: PointInteretService,
                private ngxService: NgxSpinnerService) { }
  
    async ngOnInit() {
        this.ngxService.show()
        this.service.getAteliers().subscribe((data: any) => {
            this.ateliers = pointToModel(data.result);
            this.ngxService.hide();
        });
    }

    statsSearch() {}

    setSelected(atelier: any) {
        this.selectedAtelier = atelier
        this.showMoreInfo = true;
    }

    getSelected() {
        return this.selectedAtelier
    }

    setHeight() {
        return this.ateliers.length > 10 ? "full-table-apply" : "";
    }
}
