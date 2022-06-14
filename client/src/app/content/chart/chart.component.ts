import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, ChartConfiguration, ChartItem } from 'chart.js';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  stats: any[] = [];
  routeState: any;

  constructor(private service: StatsService, private router: Router) {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.getStats();
    }
  }

  private getStats() {
    this.routeState = this.router.getCurrentNavigation()?.extras.state;
    if (this.routeState) {
      this.stats = this.routeState.result ? JSON.parse(this.routeState.result) : [];
    }
  }

  ngOnInit() {
    console.log("this.stats[0] first element");//TODO delete after tests
    console.log(this.stats[0]);//TODO delete after tests
    this.createChart();
  }

  private createChart() {
    const data = {
      labels: ['January','February','March','April','May'],
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [10, 5, 2, 20, 30, 45],
      }]
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
          display: false
        }
      }
    };
    const config: ChartConfiguration = {
      type: 'line',
      data: data,
      options: options
    };
    const chartItem: ChartItem = document.getElementById('my-chart') as ChartItem;
    new Chart(chartItem, config);
  }

}
