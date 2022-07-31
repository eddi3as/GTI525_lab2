import { Component, OnInit } from '@angular/core'
import { pointToModel } from 'src/utils/utils'
import { FontaineService } from 'src/app/services/fontaines.service'
import { NgxSpinnerService } from 'ngx-spinner'
import { PointInteretService } from 'src/app/services/pointinteret.service'
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
  
    constructor(private service2: FontaineService,
                private service: PointInteretService,
                private ngxService: NgxSpinnerService) { }
  
    async ngOnInit() {
        this.ngxService.show();
        this.service.getPointFontaines().subscribe((data: any) => {
            this.fontaines = pointToModel(data.result);
            this.ngxService.hide();
        });
        
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
