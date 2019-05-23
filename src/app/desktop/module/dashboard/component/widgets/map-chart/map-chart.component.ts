import { Component, OnInit } from '@angular/core';
import { info } from './map-data';
// import {MapChart} from 'angular-highcharts';
import * as Highcharts from 'highcharts';
// import HC_map from 'highcharts/modules/map';
// HC_map(Highcharts);
// require("./worldmap")(Highcharts);
// import Highcharts from 'highcharts/highstock';
import mapFactory from 'highcharts/modules/map';
import {MapChart} from 'angular-highcharts';
mapFactory(Highcharts);
declare const $: any;
@Component({
  selector: 'app-map-chart',
  templateUrl: './map-chart.component.html',
  styleUrls: ['./map-chart.component.scss']
})
export class MapChartComponent implements OnInit {
  data2 = [
    {
      'hc-key': 'jp-hs',
      value: 8
    }, {
      'hc-key': 'jp-3480',
      value: 8
    }
  ];
  data = [
    {
      'hc-key': 'jp-hs',
      value: 8
    }, {
      'hc-key': 'jp-3480',
      value: 8
    },
    {
      'hc-key': 'jp-hk',
      value: 10
    },
    {
      'hc-key': 'jp-fs',
      value: 2
    }
  ];
  constructor() { }
  map: any;
  ngOnInit() {
    this.init();
  }

  areaClick(data) {
    console.log(data.point);
    // alert(data.point.name);
  }

  init() {
    this.map = new MapChart({
      colors: ['#ff281e', '#ffae2e', '#8bbc21', '#1aadce'],

      chart: {
        reflow: true,
        margin: .5, //removes all margin
        // backgroundColor: '#ffffff',
        height: (12 / 16 * 100) + '%',
        // animation: {
        //   duration: 1000,
        //   easing: 'easeOutBounce'
        // }
      },
      legend: {
        enabled: false
        // enabled: this.data.config.legend && this.data.config.legend.enabled,
        // layout: this.data.config.legend && this.data.config.legend.layout, // horizontal or vertical
        // align: 'right',
        // verticalAlign: 'top',
        // x: 0,
        // y: 0,
        // floating: this.data.config.legend && this.data.config.legend.floating,
        // borderWidth: 1,
        // backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
        // backgroundColor:  '#FFFFFF',
      },
      title: {
        text: ''
      },

      subtitle: {
        // text: 'Source map: <a href="https://code.highcharts.com/mapdata/countries/au/au-all.js">JAPAN</a>'
      },

      colorAxis: {
        min: 0
      },
      plotOptions: {
        series: {
          point: {
            events: {
              click: (data) => {
                this.areaClick(data);
              },
              select: () => {

              },
              unselect: () => {

              }
            }
          }
        }
      },
      series: [{
        type: undefined,
        data: this.data,
        mapData: info,
        joinBy: 'hc-key',
        allowPointSelect: true,
        // nullColor: 'red',
        name: 'Random data',
        states: {
          hover: {
            color: '#a4edba',
            borderColor: 'gray'
          },
          select: {
            color: '#EFFFEF',
            borderColor: 'black',
            dashStyle: 'dot'
          }
        },
        dataLabels: {
          enabled: false,
          format: '{point.name}'
        }
      } as any]
    });
  }
}
