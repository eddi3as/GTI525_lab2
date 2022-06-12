import { Component, OnInit } from '@angular/core';
import { CSVService } from '../services/csv.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    logoPath: string = "assets/logo.png"
    constructor(private csvService: CSVService) { }

    async ngOnInit() {
      await this.csvService.getCompteurs();
      await this.csvService.getFontaines();
    }

}
