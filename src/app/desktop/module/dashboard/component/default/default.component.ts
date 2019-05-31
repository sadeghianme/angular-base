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
  summeries = [
    {id: 1, title: 'CDC', selected: true, trend: 0.8, trendStatus: 'green', target: '31%', achievement: '32%', kpiValue: '25.3%', kpiStatus: 'green'},
    {id: 2, title: 'GC', trend: 0.8, trendStatus: 'green', target: '43%', achievement: '43%', kpiValue: '20%', kpiStatus: 'orange'},
    {id: 3, title: 'RAM', trend: 0.8, trendStatus: 'green', target: '55%', achievement: '30%', kpiValue: '51%', kpiStatus: 'green'},
    {id: 4, title: 'Key Kpi O1', trend: 0.8, trendStatus: 'red', target: '33%', achievement: '40%', kpiValue: '5.03%', kpiStatus: 'red'},
    {id: 5, title: 'Key Kpi O2', trend: 0.8, trendStatus: 'green', target: '38%', achievement: '20%', kpiValue: '15.3%', kpiStatus: 'green'},
  ];
  headerWidgets = [
    {id: '1', title: 'RAN', data: [1, 8, 3, 5, 6, 7], type: 'chart', config: {type: 'bar'}},
    {id: '2', title: 'GC', data: [7, 18, 12, 31, 13, 10], type: 'chart',
      config: {type: 'bar', title: '', subtitle: '', showTooltip: true,
        xAxis: {title: 'ppp', showLabel: true, categories: ['q', 'c'] }, yAxis: {title: '', showLabel: false, categories: null  },
        legend: {layout: '', enabled: false, floating: true }}},

    {id: '3', title: 'BH', data: [7, 5, 3, 3, 5, 2], type: 'chart', config: {type: 'bar'}},
    {id: '4', title: 'CDC', data: [7, 5, 3, 2, 9, 7], type: 'chart', config: {type: 'bar'}},
    {id: '5', title: 'INET CORE', data: [7, 5, 3, 1, 4, 6], type: 'chart', config: {type: 'bar'}},
    // {id: '4', title: 'CDC', data: [1, 8, 9], config: {type: 'bar'}},
    // {id: '5', title: 'IME CORE', data: [7, 8, 3], config: {type: 'bar'}},
  ];
  widgets = [
    // {id: '1', title: 'Voice', width: '320px', minWidth: '32%', height: '390px', type: 'chart', visible: true, data: [7, 18, 12],
    //   config: {type: 'column', title: 'ty', subtitle: '', showTooltip: true,
    //     xAxis: {title: 'ppp', showLabel: true, categories: ['q', 'c', 'r'] }, yAxis: {title: 'ttt', showLabel: true, categories: null  },
    //     legend: {layout: '', enabled: true, floating: true }}},
    {id: '1', title: 'Voice', width: '320px', minWidth: '32%', height: '390px', type: 'map', visible: true, data: [], config: {type: 'map', }},
    {id: '2', title: 'Data', width: '320px', minWidth: '32%', height: '390px', type: 'map', visible: true, data: [], config: {type: 'map', }},
    {id: '3', title: 'SMS', width: '320px', minWidth: '32%', height: '390px', type: 'map', visible: true, data: [], config: {type: 'map', }},

    {id: '4', title: 'Metrics', width: '320px', minWidth: '40%', height: '320px', type: 'table', visible: true,
      data: {columns: [{text: '', value: 'title'}, {text: 'CPU', value: 'cpu'}, {text: 'RAM', value: 'ram'}, {text: 'Ava.', value: 'ava'}, {text: 'Op. T.', value: 'opt'}, {text: 'Int. U.', value: 'intU'}, {text: 'Sto.', value: 'sto'}],
        rows: [
          {title: 'RAN', cpu: 'green', ram: 'red', ava: 'green', opt: 'orange', intU: 'green', sto: 'red'},
          {title: 'GC', cpu: 'orange', ram: 'green', ava: 'red', opt: 'green', intU: 'green', sto: 'red'},
          {title: 'BH', cpu: 'green', ram: 'green', ava: 'orange', opt: 'green', intU: 'green', sto: 'red'},
          {title: 'CDC', cpu: 'orange', ram: 'green', ava: 'red', opt: 'red', intU: 'green', sto: 'red'},
          {title: 'INET Core', cpu: 'red', ram: 'green', ava: 'red', opt: 'green', intU: 'green', sto: 'red'},
        ]}, config: {type: 'icon'}},
    {id: '5', title: 'Services', width: '280px', minWidth: '28%', height: '320px', type: 'table', visible: true,
      data: {columns: [{text: '', value: 'title'},
          {text: 'Critical', value: 'critical', color: 'red'},
          {text: 'Major', value: 'major', color: 'orange'},
          {text: 'Minor', value: 'minor', color: 'green'}],
        rows: [
          {title: 'RAN', critical: '543', major: '457', minor: '32'},
          {title: 'GC', critical: '132', major: '34', minor: '34'},
          {title: 'BH', critical: '312', major: '342', minor: '345'},
          {title: 'CDC', critical: '124', major: '134', minor: '3145'},
          {title: 'CDC', critical: '512', major: '354', minor: '45'},
          {title: 'CDC', critical: '162', major: '34', minor: '35'},
          {title: 'Bo', critical: '12', major: '34', minor: '345'},
          ]}, config: {type: 'text'}},
    {id: '6', title: 'Alarms', width: '280px', minWidth: '24%', height: '320px', type: 'table', visible: true,
      data: {columns: [{text: '', value: 'title'},
          {text: 'RAN', value: 'ran'},
          {text: 'EPC', value: 'epc'},
          {text: 'IMS', value: 'ims'}],
        rows: [
          {title: 'Data', lists: [
            {title: 'acc', ran: 'green', epc: 'red', ims: 'orange'},
            {title: 'rel', ran: 'orange', epc: 'green', ims: 'green'},
            ]},
          {title: 'Voice', lists: [
              {title: 'acc', ran: 'green', epc: 'green', ims: 'red'},
              {title: 'rel', ran: 'orange', epc: 'green', ims: 'green'},
            ]},
          {title: 'Viop', lists: [
              {title: 'acc', ran: 'red', epc: 'green', ims: 'green'},
              {title: 'rel', ran: 'green', epc: 'red', ims: 'orange'},
            ]}
          ]}, config: {type: 'nested'}},

   //  {id: '1', title: 'RAP', width: '320px', height: '280px', type: 'chart', visible: true, data: [1, 2, 4],
   //   config: {type: 'line', title: 'one', xAxis: {title: 'xxx', showLabel: true, categories: null },
   //     yAxis: {title: 'yyy', showLabel: true, categories: null  },
   //     legend: {layout: '', enabled: true, floating: true }}},
   // {id: '1.1', title: 'RAP', width: '320px', height: '280px', type: 'chart', visible: true, data: [5, 3, 1],
   //   config: {type: 'pie'}},
   // {id: '1.2', title: 'RAP', width: '320px', height: '280px', type: 'chart', visible: true, data: [3, 12, 7],
   //   config: {type: 'column', yAxis: {title: 'row', showLabel: true}, xAxis: {title: 'row', showLabel: true}}},

   {id: '6', title: 'RAN', width: '150px', height: '150px', type: 'sticky', visible: true,
     data: [{title: 'No. O. Sites Operational', value: '133 | 112'}, {title: 'Software License Status', value: 'green', showAsIcon: true}]},
   {id: '7', title: 'Backhaul', width: '150px', height: '150px', type: 'sticky', visible: true, data: [{title: 'No. O. Sites Operational', value: '5343 | 4112'}, {title: 'Software License', value: 'orange', showAsIcon: true}]},
   {id: '8', title: 'GC', width: '150px', height: '150px', type: 'sticky', visible: true, data: [{title: 'No. O. Sites Operational', value: '5343 | 4112'}, {title: 'Software License', value: 'red', showAsIcon: true}]},
 {id: '6', title: 'CDC-vIMS', width: '150px', height: '150px', type: 'sticky', visible: true, data: [{title: 'No. O. Sites Operational', value: '133 | 112'}, {title: 'Software License Status', value: 'green', showAsIcon: true}]},
   {id: '7', title: 'CDC-vEPC', width: '150px', height: '150px', type: 'sticky', visible: true, data: [{title: 'No. O. Sites Operational', value: '5343 | 4112'}, {title: 'Software License', value: 'orange', showAsIcon: true}]},
   {id: '8', title: 'CDC-vRCS', width: '150px', height: '150px', type: 'sticky', visible: true, data: [{title: 'No. O. Sites Operational', value: '5343 | 4112'}, {title: 'Software License', value: 'red', showAsIcon: true}]},
   {id: '8', title: 'INET Core', width: '150px', height: '150px', type: 'sticky', visible: true, data: [{title: 'No. O. Sites Operational', value: '5343 | 4112'}, {title: 'Software License', value: 'red', showAsIcon: true}]},
   {id: '8', title: 'IoT', width: '150px', height: '150px', type: 'sticky', visible: true, data: [{title: 'No. O. Sites Operational', value: '5343 | 4112'}, {title: 'Software License', value: 'red', showAsIcon: true}]},
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
  chatMessage = {chatUpdate: 0, text: ''};
  maxWidget = {currentWidget: {}, active: false};
  addWidgetModal = false;
  currentSummuries: any;
  addDashboardModal = false;
  openChatMessenger = true;
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
    this.currentSummuries = this.summeries[0];
  }

  selectSummuries(item) {
    console.log('iiii', item);
    this.summeries.forEach(x => x.selected = false);
    item.selected = true;
    this.currentSummuries = item;
  }

  prevNextSummuries(state) {
    for (let i = 0; i < this.summeries.length; i++) {
      if (this.summeries[i].id === this.currentSummuries.id) {
        if (state === 'next') {
          this.selectSummuries(this.summeries[(i + 1) % this.summeries.length]);
          break;
        } else {
          this.selectSummuries(this.summeries[i ? (i - 1) : (this.summeries.length - 1) % this.summeries.length]);
          break;
        }
      }
    }
  }

  maximizeWidget(item) {
    item.maximize = !item.maximize;
    this.maxWidget.active = true;
    this.maxWidget.currentWidget = item;
    // setTimeout(() => {
    //   $('#highchart').highcharts().reflow();
    //   $('#map-chart').highcharts().reflow();
    // }, 100);
  }

  returnRowData(row) {
    console.log('*****', row);
    this.closeChatMessenger(true);
    this.chatMessage.chatUpdate ++;
    this.chatMessage.text = JSON.stringify(row) + this.chatMessage.chatUpdate;
  }
  closeChatMessenger(state) {
    this.openChatMessenger =  state;
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
    console.log(modal)
    this[modal] = false;
  }

  insertDashboardItem() {
    this.currentDashboardObj.children.push(this.dashboardObj);
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
