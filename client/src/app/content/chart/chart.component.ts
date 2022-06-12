import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartItem } from 'chart.js';
import { StatsDTO } from 'src/app/models/statsDTO';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private service: StatsService) { }
  stats: any;

  ngOnInit() {
    let jsonObj: StatsDTO = {
      borne_id: 0,
      debut: "",
      fin: ""
    };
    let data = localStorage.getItem("stats");

    if(data != null)
      jsonObj = JSON.parse(data);

    this.service.getStats(jsonObj).subscribe((data: any) =>{
      this.stats = JSON.parse(data.result);
      console.log("this.stats[0] first element");
      console.log(this.stats[0]);
      this.createChart()
    });
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
