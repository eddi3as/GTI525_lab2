import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, ChartConfiguration, ChartItem } from 'chart.js';
import { StatsService } from 'src/app/services/stats.service';
import * as moment from 'moment';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  stats: any[] = [];
  filter!: string; // j, s, ou m
  routeState: any;
  dateFrom: string | undefined;
  dateTo: string | undefined;

  constructor(private service: StatsService, private router: Router) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.getStats();
      this.getFilter();
    }
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
      this.filter = this.routeState.filter ? this.routeState.filter : "j";
    }
  }

  ngOnInit() {
    this.dateFrom = "01-jan-2019";
    this.dateTo = "01-jan-2020";
  //  console.log("this.stats[0] first element");//TODO delete after tests
  //  console.log(this.stats[0]);//TODO delete after tests
    this.createChart();
  }

  private createChart() {
    let usage: number[] = []
    let dates: string[] = []
    if(this.filter === "j") {
        this.stats.forEach(i => {
            dates.push(moment(i.Date).toDate().getDate().toString())
            usage.push(i.count)
        })
    }
    if(this.filter === "m") {
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
    console.log("dates", dates)
    console.log("filter", this.filter)
    console.log("usage", usage)
    const data = {
      labels: dates,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: usage
      }]
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
          display: true,
          text: "Passages"
        }
      },
      responsive: true,
      maintainAspectRatio: false
    };
    const config: ChartConfiguration = {
      type: 'bar',
      data: data,
      options: options
    };
    const chartItem: ChartItem = document.getElementById('my-chart') as ChartItem;
    new Chart(chartItem, config);
  }

}
