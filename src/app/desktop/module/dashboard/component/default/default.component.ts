import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, CdkDragEnter, moveItemInArray} from '@angular/cdk/drag-drop';
import {LanguageService} from '../../../../../public/core/services/language/language.service';

declare const $: any;
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  chatState = 'bot';
  summeries = [
    {id: '1', title: 'CDC', trend: 0.8, trendStatus: 'green', target: '31%', achievement: '32%', kpiValue: '25.3%', kpiStatus: 'green'},
    {id: '2', title: 'GC', trend: 0.8, trendStatus: 'green', target: '43%', achievement: '43%', kpiValue: '20%', kpiStatus: 'orange'},
    {id: '3', title: 'RAM', trend: 0.8, trendStatus: 'green', target: '55%', achievement: '30%', kpiValue: '51%', kpiStatus: 'green'},
    {id: '4', title: 'Key Kpi O1', trend: 0.8, trendStatus: 'red', target: '33%', achievement: '40%', kpiValue: '5.03%', kpiStatus: 'red'},
    {id: '5', title: 'Key Kpi O2', trend: 0.8, trendStatus: 'green', target: '38%', achievement: '20%', kpiValue: '15.3%', kpiStatus: 'green'},
  ];
  chats = [
    {title: 'Mehdi', time: '11:20', icon: 'user', message: 'Hello, I have a Problem with this site'},
    {title: 'Bot', time: '12:30', icon: 'robot', message: 'hello, about your problem, you can follow link www.google.com'},
    ];
  headerWidgets = [
    {id: '1', title: 'GC', data: [1, 8, 3], config: {type: 'bar'}},
    {id: '2', title: 'RAP', data: [1, 80, 2], config: {type: 'bar', title: '', subtitle: '', showTooltip: true,
        xAxis: {title: '', showLabel: false, categories: null }, yAxis: {title: '', showLabel: false, categories: null  },
        legend: {layout: '', enabled: false, floating: true }}},

    {id: '3', title: 'BH', data: [7, 5, 3], config: {type: 'bar'}},
    // {id: '4', title: 'CDC', data: [1, 8, 9], config: {type: 'bar'}},
    // {id: '5', title: 'IME CORE', data: [7, 8, 3], config: {type: 'bar'}},
  ];
  widgets = [
    {id: '3', title: 'Rakuten', width: '340px', height: '320px', type: 'table', visible: true,
      data: {columns: [{text: '', value: 'title'}, {text: 'CPU', value: 'cpu'}, {text: 'RAM', value: 'ram'}, {text: 'Ava.', value: 'ava'}, {text: 'Op. T.', value: 'opt'}],
        rows: [
          {title: 'green', cpu: 'green', ram: 'red', ava: 'green', opt: 'orange'},
          {title: 'green', cpu: 'orange', ram: 'red', ava: 'green', opt: 'green'},
          ]}, config: {type: 'icon'}},
    {id: '3', title: 'Rakuten', width: '340px', height: '320px', type: 'table', visible: true,
      data: {columns: [{text: '', value: 'title'}, {text: 'Critical', value: 'critical', color: 'red'}, {text: 'Major', value: 'major'}, {text: 'Minor', value: ',minor'}],
        rows: [
          {title: 'green', critical: '543', major: '457', minor: '32'},
          {title: 'green', critical: '12', major: '34', minor: '345'},
          ]}, config: {type: 'text'}},

    {id: '1', title: 'RAP', width: '320px', height: '280px', type: 'chart', visible: true, data: [1, 2, 4],
     config: {type: 'line', title: 'one', xAxis: {title: 'xxx', showLabel: true, categories: null },
       yAxis: {title: 'yyy', showLabel: true, categories: null  },
       legend: {layout: '', enabled: true, floating: true }}},
   {id: '1.1', title: 'RAP', width: '320px', height: '280px', type: 'chart', visible: true, data: [5, 3, 1],
     config: {type: 'pie'}},
   {id: '1.2', title: 'RAP', width: '320px', height: '280px', type: 'chart', visible: true, data: [3, 12, 7],
     config: {type: 'column', yAxis: {title: 'row', showLabel: true}, xAxis: {title: 'row', showLabel: true}}},
   // {id: '3', title: 'Rakuten', width: '340px', height: '320px', type: '', visible: true, data: [], config: {type: 'map', }},
   // {id: '2', title: 'RCS', width: '220px', height: '320px', type: '', visible: true, data: {value: 175, unit: 'Mb'}, config: {type: 'sticky' }},
   // {id: '4', title: 'IMS', width: '320px', height: '320px', type: '', visible: true, data: {value: 700, unit: 'Gb/sub'}, config: {type: 'sticky'}},
   // {id: '5', title: 'IMS2', width: '390px', height: '205px', type: '', visible: false, data: {value: '158600sub'}, config: {type: 'sticky' }},
   {id: '6', title: 'RAN', width: '150px', height: '150px', type: 'sticky', visible: true, data: [{title: 'No. O. Sites Operational', value: '133 | 112'}, {title: 'Software License Status', value: 'green', showAsIcon: true}]},
   {id: '7', title: 'GC', width: '150px', height: '150px', type: 'sticky', visible: true, data: [{title: 'No. O. Sites Operational', value: '5343 | 4112'}, {title: 'Software License', value: 'orange', showAsIcon: true}]},
   {id: '8', title: 'CDC-vIMS', width: '150px', height: '150px', type: 'sticky', visible: true, data: [{title: 'No. O. Sites Operational', value: '5343 | 4112'}, {title: 'Software License', value: 'red', showAsIcon: true}]},
 {id: '6', title: 'RAN', width: '150px', height: '150px', type: 'sticky', visible: true, data: [{title: 'No. O. Sites Operational', value: '133 | 112'}, {title: 'Software License Status', value: 'green', showAsIcon: true}]},
   {id: '7', title: 'GC', width: '150px', height: '150px', type: 'sticky', visible: true, data: [{title: 'No. O. Sites Operational', value: '5343 | 4112'}, {title: 'Software License', value: 'orange', showAsIcon: true}]},
   {id: '8', title: 'CDC-vIMS', width: '150px', height: '150px', type: 'sticky', visible: true, data: [{title: 'No. O. Sites Operational', value: '5343 | 4112'}, {title: 'Software License', value: 'red', showAsIcon: true}]},
  ];
  menus = [
    {
      id: '1',
      name: 'dashboard.menu.kpi',
      icon: 'dashboard',
      link: 'dashboard',
      accessCondition: [{role: '', groupId: []}],
      tooltip: '',
      children: [
        {
          id: '1-1',
          name: 'dashboard.menu.kpi.performance',
          icon: 'dashboard',
          link: 'dashboard',
          accessCondition: [{role: '', groupId: []}],
          tooltip: '',
          children: []
        }, {
          id: '1-2',
          name: 'dashboard.menu.kpi.configure',
          icon: 'dashboard',
          link: 'dashboard',
          accessCondition: [{role: '', groupId: []}],
          tooltip: '',
          children: []
        },
      ]
    },
    {
      id: '2',
      name: 'dashboard.menu.measure',
      icon: 'dashboard',
      link: 'dashboard',
      accessCondition: [{role: '', groupId: []}],
      tooltip: '',
      children: [
        {
          id: '1-1',
          name: 'Performance',
          icon: 'dashboard',
          link: 'dashboard',
          accessCondition: [{role: '', groupId: []}],
          tooltip: '',
          children: [{}]
        }, {
          id: '1-2',
          name: 'Configure',
          icon: 'dashboard',
          link: 'dashboard',
          accessCondition: [{role: '', groupId: []}],
          tooltip: '',
          children: [{}]
        },
      ]
    },
    {
      id: '3',
      name: 'dashboard.menu.dimension',
      icon: 'dashboard',
      link: 'dashboard',
      accessCondition: [{role: '', groupId: []}],
      tooltip: 'پیشخوان',
      children: [
        {
          id: '1-1',
          name: 'Performance',
          icon: 'dashboard',
          link: 'dashboard',
          accessCondition: [{role: '', groupId: []}],
          tooltip: '',
          children: []
        }, {
          id: '1-2',
          name: 'Configure',
          icon: 'dashboard',
          link: 'dashboard',
          accessCondition: [{role: '', groupId: []}],
          tooltip: '',
          children: [{}]
        },
      ]
    }
  ];

  addWidgetModal = false;
  addDashboardModal = false;
  currentDashboardObj: any;
  dashboardObj = {
    name: '',
    jpName: '',
    enName: '',
    tooltip: '',
    priority: '',
    children: false
  };
  constructor(
    public lang: LanguageService
  ) { }

  ngOnInit() {
  }

  maximizeWidget(item) {
    item.maximize = !item.maximize;
    setTimeout(() => {
      $('#highchart').highcharts().reflow();
    }, 100);
  }

  removeItem(item) {
    item.visible = false;
  }

  insertWidget(item) {
    item.maximize = false;
    item.visible = !item.visible;
  }

  entered(event: CdkDragEnter) {
    console.log(event.item.data, event.container.data)
    moveItemInArray(this.widgets, event.item.data, event.container.data);
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.widgets, event.previousIndex, event.currentIndex);
  }

  addModalWidget() {
    this.addWidgetModal = true;
  }

  closeModal(modal) {
    this[modal] = false;
  }

  insertDashboardItem() {
    this.currentDashboardObj.children.push(this.dashboardObj)
  }

  // EXPORT_WIDTH = 1000;
  //
  // save_chart(filename) {
  //   const chart = $('#container').highcharts();
  //   const render_width = this.EXPORT_WIDTH;
  //   const render_height = render_width * chart.chartHeight / chart.chartWidth;
  //
  //   const svg = chart.getSVG({
  //     exporting: {
  //       sourceWidth: chart.chartWidth,
  //       sourceHeight: chart.chartHeight
  //     }
  //   });
  //
  //   const canvas = document.createElement('canvas');
  //   canvas.height = render_height;
  //   canvas.width = render_width;
  //
  //   const image = new Image;
  //   image.onload = () => {
  //     canvas.getContext('2d').drawImage(image, 0, 0, render_width, render_height);
  //     const data = canvas.toDataURL('image/png');
  //     this.download(data, filename + '.png');
  //   };
  //   image.src = 'data:image/svg+xml;base64,' + window.btoa(svg);
  // }
  //
  // download(data, filename) {
  //   const a = document.createElement('a');
  //   a.download = filename;
  //   a.href = data;
  //   document.body.appendChild(a);
  //   a.click();
  //   a.remove();
  // }
}
