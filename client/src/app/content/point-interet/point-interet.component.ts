import { Component, OnInit } from '@angular/core';
import { pointToModel } from 'src/utils/utils';
import { NgxSpinnerService } from 'ngx-spinner';
import { PointInteretService } from 'src/app/services/pointinteret.service';

@Component({
  selector: 'app-point-interet',
  templateUrl: './point-interet.component.html',
  styleUrls: ['./point-interet.component.css']
})
export class PointInteretComponent implements OnInit {
  pointsInteret: any[] = [];
  fnt_arr: any;
  showMoreInfo: boolean = false;
  selectedPt: any;

  constructor(private service: PointInteretService,
              private ngxService: NgxSpinnerService) { }

  async ngOnInit() {
    this.ngxService.show();

    this.service.getAllPointsInteret().subscribe((data: any) => {
      this.pointsInteret = pointToModel(data.result);
      this.ngxService.hide();
    });
  }

  statsSearch() {}

  setSelected(pt: any) {
    this.selectedPt = pt;
    this.showMoreInfo = true;
  }

  getSelected() {
    return this.selectedPt;
  }

}
