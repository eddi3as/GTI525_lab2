import { Component, OnInit, Input } from '@angular/core';
import { Compteur } from 'src/app/models/compteur';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { StatsService } from 'src/app/services/stats.service';
import { StatsSearch } from 'src/app/models/statssearch';

@Component({
    selector: 'app-statistique',
    templateUrl: './statistique.component.html',
    styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
    @Input() cmpt: Compteur | undefined; 
    dateFrom: string = "2019-01-01";
    dateTo: string = "2019-01-31";

    constructor(private router: Router,
                private service: StatsService,
                private ngxService: NgxSpinnerService) { }

    ngOnInit(): void {}

    setInfo(): void {
        this.ngxService.show();
        let info : StatsSearch = {
            borne_id: this.cmpt?.id,
            debut: this.dateFrom,
            fin: this.dateTo
        };

        this.service.getStats(info).subscribe((data: any) => {
            this.ngxService.hide();
            this.router.navigate(['/chart'], {
                state: { 
                    result: data.result,
                    filter: "m"
                } 
            });
        });
    }
}
