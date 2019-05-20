import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DefaultComponent } from './component/default/default.component';
import {ToolsModule} from '../../../public/tools/tools.module';
import { WidgetBoxComponent } from './component/widgets/widget-box/widget-box.component';
import {MaterialModule} from '../../../app-material.module';
import { DragComponent } from './component/drag/drag.component';
import {CoreModule} from '../../../public/core/core.module';
import {ChartModule, HIGHCHARTS_MODULES} from 'angular-highcharts';
import * as more from 'highcharts/highcharts-more.src';
import * as highcharts from 'highcharts';
import * as exporting from 'highcharts/modules/exporting.src';
import * as offline from 'highcharts/modules/offline-exporting';
import * as highmaps from 'highcharts/modules/map.src';
import * as highstock from 'highcharts/modules/stock.src';
import { StickyComponent } from './component/widgets/sticky/sticky.component';
import { MapChartComponent } from './component/widgets/map-chart/map-chart.component';
import { ChartComponent } from './component/widgets/chart/chart.component';
import { TableComponent } from './component/widgets/table/table.component';
import { HeaderWidgetComponent } from './component/widgets/header-widget/header-widget.component';
// exporting(highcharts);
// offline(highcharts);
@NgModule({
  declarations: [DefaultComponent, WidgetBoxComponent, DragComponent, StickyComponent, MapChartComponent, ChartComponent, TableComponent, HeaderWidgetComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ToolsModule,
    CoreModule,
    MaterialModule,
    ChartModule
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ more, exporting ] }, // add as factory to your providers
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ highmaps ] },
    { provide: HIGHCHARTS_MODULES, useFactory: () => [ highstock ] }
  ]
})
export class DashboardModule { }
