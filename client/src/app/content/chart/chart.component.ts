import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, ChartConfiguration, ChartItem } from 'chart.js';
import { StatsService } from 'src/app/services/stats.service';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';
import { StatsSearch } from 'src/app/models/statssearch';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
    stats: any[] = [];
    filter: string = "Jour"
    filterTypes: string[] = ["Jour", "Semaine", "Mois"]
    routeState: any;
    dateFrom: string = ""
    dateTo: string = ""
    borne_id: number = -1
    borne_name: string = ""
    chart: Chart | undefined

    constructor(
        private service: StatsService, 
        private router: Router,
        private ngxService: NgxSpinnerService) {
        if (this.router.getCurrentNavigation()?.extras.state) {
            this.getStats();
            this.getFilter();
            this.getBorneId()
            this.getBorneName()
            this.getDateTo()
            this.getDateFrom()
        }
    }

    update(): void {
        this.ngxService.show();
        let info : StatsSearch = {
            borne_id: this.borne_id,
            borne_name: this.borne_name,
            debut: this.dateFrom,
            fin: this.dateTo
        };

        this.service.getStats(info).subscribe((data: any) => {
            this.ngxService.hide();
            this.router.navigate(['/chart'], {
                state: { 
                    result: data.result,
                    filter: this.filter
                } 
            });
        });
        this.createChart();
    }

    retour() {
        this.router.navigate(['/'])
    }

    private getStats() {
        this.routeState = this.router.getCurrentNavigation()?.extras.state;
        if (this.routeState) {
            this.stats = this.routeState.result ? this.routeState.result : [];
        }
    }

    private getFilter() {
        this.routeState = this.router.getCurrentNavigation()?.extras.state;
        if (this.routeState) {
            this.filter = this.routeState.filter ? this.routeState.filter : "Jour";
        }
    }

    private getBorneId() {
        this.routeState = this.router.getCurrentNavigation()?.extras.state;
        if (this.routeState) {
            this.borne_id = this.routeState.parameters.borne_id ? this.routeState.parameters.borne_id : "";
        }
    }

    private getBorneName() {
        this.routeState = this.router.getCurrentNavigation()?.extras.state;
        if (this.routeState) {
            this.borne_name = this.routeState.parameters.borne_name ? this.routeState.parameters.borne_name : "";
        }
    }

    private getDateFrom() {
        this.routeState = this.router.getCurrentNavigation()?.extras.state;
        if (this.routeState) {
            this.dateFrom = this.routeState.parameters.dateFrom ? this.routeState.parameters.dateFrom : undefined;
        }
    } 
    
    private getDateTo() {
        this.routeState = this.router.getCurrentNavigation()?.extras.state;
        if (this.routeState) {
            this.dateTo = this.routeState.parameters.dateTo ? this.routeState.parameters.dateTo : undefined;
        }
    } 

    ngOnInit() {
        this.createChart();
        this.routeState = this.router.getCurrentNavigation()?.extras.state;
        if (this.routeState) {
            this.update()
        }
    }

    private createChart() {
        if(this.chart) this.chart.destroy()
        let usage: number[] = [0]
        let dates: string[] = ["0"]

        if(this.filter === "Jour") {
            this.stats.forEach(i => {
                dates.push(moment(i.Date).toDate().getDate().toString())
                usage.push(i.count)
            })
        }
        if(this.filter === "Semaine") {
            let usage_index = 0
            let previous_day = 0
            this.stats.forEach(i => {
                let current_day: number = moment(i.Date).toDate().getDay()
                if(current_day < previous_day) {
                    usage_index++
                    dates.push(usage_index.toString())
                    usage[usage_index] = 0
                }
                if(i.count) usage[usage_index] = usage[usage_index] + Number(i.count)
                previous_day = current_day
            })
        }
        if(this.filter === "Mois") {
            this.stats.forEach(i => {
                let current_month: number = moment(i.Date).toDate().getMonth()
                dates[current_month] = moment(i.Date).format("MM").toString()

                if(usage.length < dates.length) {
                    for(let j = 0; j < dates.length; j++) {
                        usage.push(0)
                    }
                }

                this.stats.forEach(j => {
                    if(j.count) {
                        usage[current_month] = usage[current_month] + Number(j.count)
                    }
                })
            })
        }
        
        const data = {
            labels: dates,
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                barPercentage: 1,
                data: usage
            }]
        };
        const options = {
            responsive: true,
            maintainAspectRatio: false
        };
        const config: ChartConfiguration = {
            type: 'bar',
            data: data,
            options: options
        };
        const chartItem: ChartItem = document.getElementById('my-chart') as ChartItem;
        this.chart = new Chart(chartItem, config);
    }

}
