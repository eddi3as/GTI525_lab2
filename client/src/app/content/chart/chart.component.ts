import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartItem } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let jsonObj = {};
    let data = localStorage.getItem("stats");
    if(data != null){
      jsonObj = JSON.parse(data);
    }
    this.createChart()
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
