import { Component, OnInit } from '@angular/core';
import { CSVService } from 'src/app/services/csv.service';
import { FontaineService } from 'src/app/services/fontaines.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-point-interet',
  templateUrl: './point-interet.component.html',
  styleUrls: ['./point-interet.component.css']
})
export class PointInteretComponent implements OnInit {
  fontaines: any[] = [];
  fnt_arr: any;
  showMoreInfo: boolean = false;
  selectedFontaine: any;

  constructor(private csvService: CSVService,
              private service: FontaineService,
              private ngxService: NgxSpinnerService) { }

  async ngOnInit() {
    this.ngxService.show();
    this.fontaines = await this.csvService.getFontaines();
    //API CALL for IT-3
    /*
    this.service.getFontaines().subscribe((data: any) => {
      this.fnt_arr = JSON.parse(data.result);
      console.log(this.fnt_arr[0]);
    });
    */
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
