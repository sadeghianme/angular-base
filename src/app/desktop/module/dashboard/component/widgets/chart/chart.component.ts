import {Component, Input, OnInit} from '@angular/core';
import {Chart} from 'angular-highcharts';
declare const $: any;
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() data: any;
  chart: any;
  constructor() { }

  ngOnInit() {
    console.log(this.data)
    if (this.data && this.data.config) {
      this.init();
    }
  }

  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }

  addSerie() {
    this.chart.addSeries({
      name: 'Line ' + Math.floor(Math.random() * 10),
      data: [
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10)
      ]
    });
  }

  init() {
    this.chart = new Chart({
      chart: {
        reflow: true,
        margin: .5, //removes all margin
        backgroundColor: '#ffffff',
        type: this.data.config.type || 'line',
        height: (9 / 16 * 100) + '%',
        animation: {
          duration: 1000,
          easing: 'easeOutBounce'
        }
      },
      title: {
        text: this.data.config.title || ''
      },
      subtitle: {
        text: this.data.config.subtitle || ''
      },
      tooltip: {
        enabled: this.data.config.tooltip || true
      },
      xAxis: {
        // crosshair: true, //hover effect of column
        gridLineWidth: 0,
        lineWidth: 1,
        // min: 0,
        title: {
          text: this.data.config.xAxis && this.data.config.xAxis.title,
          // align: 'high'
        },
        categories: this.data.config.xAxis && this.data.config.xAxis.categories,
        labels: {
          enabled: this.data.config.xAxis && this.data.config.xAxis.showLabel || true,
          overflow: 'justify'
        }
      },
      yAxis: {
        gridLineWidth: 0,
        lineWidth: 1,
        // min: 0,
        title: {
          text: this.data.config.yAxis && this.data.config.yAxis.title,
          // align: 'high'
        },
        categories: this.data.config.yAxis && this.data.config.yAxis.categories,
        labels: {
          enabled: this.data.config.yAxis && this.data.config.yAxis.showLabel || true,
          overflow: 'justify'
        }
      },
      legend: {
        enabled: this.data.config.legend && this.data.config.legend.enabled,
        layout: this.data.config.legend && this.data.config.legend.layout, // horizontal or vertical
        align: 'right',
        verticalAlign: 'top',
        x: 0,
        y: 0,
        floating: this.data.config.legend && this.data.config.legend.floating,
        borderWidth: 1,
        // backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        backgroundColor:  '#FFFFFF',
      },
      credits: {
        enabled: false
      },
      series: [{
        name: '',
        data: this.data.data,
        type: undefined,
      }],
      // responsive: {
      //   rules: [{
      //     condition: {
      //       maxWidth: 100
      //     },
      //     chartOptions: {
      //       chart: {
      //         height: 60
      //       },
      //       subtitle: {
      //         text: null
      //       },
      //       navigator: {
      //         enabled: false
      //       }
      //     }
      //   }]
      // }
    });
    // chart.addPoint(4);
    // this.chart = chart;
    // chart.addPoint(5);
    // setTimeout(() => {
    //   chart.addPoint(6);
    // }, 200);

    // chart.ref$.subscribe(console.log);
  }
}
