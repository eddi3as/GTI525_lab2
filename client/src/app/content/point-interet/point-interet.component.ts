import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CSVService } from 'src/app/services/csv.service';

@Component({
  selector: 'app-point-interet',
  templateUrl: './point-interet.component.html',
  styleUrls: ['./point-interet.component.css']
})
export class PointInteretComponent implements OnInit {
  fontaines: any[] = [];
  showMoreInfo: boolean = false;
  selectedFontaine: any;

  constructor(private csvService: CSVService) { }

  async ngOnInit(): Promise<void> {
    this.fontaines = await this.csvService.getFontaines();
    console.log(this.fontaines)
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
