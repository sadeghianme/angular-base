import {Injectable} from '@angular/core';
import {dashboardData} from './data.class';

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {

  constructor() {
  }
  static generateColumn(columns, shortLength) {
    return columns
      .map(x => {
        // if shortLength is 0 then make upercase only first char else if shortLength is 'all' make uppercase all else make upercase according shortLength number
        return {text: shortLength ? x.substr(0, shortLength === 'all' ? x.length : shortLength).toUpperCase() :
            x.charAt(0).toUpperCase() + x.slice(1), value: x};
      });
  }

  static setMetricValue(item) {
    if (item.above_threshold > 0) {
      return 'red';
    } else if (item.above_threshold === 0 && item.within_threshold > 0) {
      return 'orange';
    } else {
      return 'green';
    }
  }

  static generateRows(data, columns, isMetric = false) {
    return  Object.keys(data)
      .map(x => {
        const obj = {
          title: x
        };
        columns.forEach(item => {
          obj[item.value] = isMetric ? WidgetsService.setMetricValue(data[x][item.value]) : data[x][item.value];
        });
        return obj;
      });
  }

  static generateServiceRows(data) {
    let rowsField: any = [];
    Object.keys(data).forEach(x => {
      rowsField = rowsField.concat(Object.keys((data[x])));
    });
    return Array.from(new Set(rowsField));
  }

  static setStickyValue(item) {
    if (item.no_of_licence_exp > 0) {
      return 'red';
    } else if (item.no_of_licence_exp === 0 && item.no_of_licence_exp_soon > 0) {
      return 'orange';
    } else {
      return 'green';
    }
  }

  convertToMetric(data?) {
    data = dashboardData.metric;
    const columns = WidgetsService.generateColumn(Object.keys(data[Object.keys(data)[0]]), 3);
    const rows = WidgetsService.generateRows(data, columns, true);
    columns.unshift({text: '', value: 'title'});


    return {
        id: '4', title: 'Metrics', width: '320px', minWidth: '40%', height: '350px', type: 'table', visible: true,
        data: { columns, rows }, config: {type: 'icon'}
      };
  }

  convertToAlarms(data?) {
    data = dashboardData.alarms;
    const columns = WidgetsService.generateColumn(Object.keys(data[Object.keys(data)[0]]), false);
    columns.forEach(x => {
      x.color = x.value === 'critical' ? 'red' : x.value === 'major' ? 'orange' : 'green';
    });
    const rows = WidgetsService.generateRows(data, columns);
    columns.unshift({text: '', value: 'title'});
    return {
      id: '5', title: 'Alarms', width: '280px', minWidth: '28%', height: '350px', type: 'table', visible: true,
      data: { rows, columns }, config: {type: 'text'}
    };
  }

  convertToService = (data?) => {
    data = dashboardData.services;
    const columns = WidgetsService.generateColumn(Object.keys(data), 'all');
    const rows: any = [];
    WidgetsService.generateServiceRows(data)
      .forEach((row: any) => {
        rows.push({title: row.charAt(0).toUpperCase() + row.slice(1), value: row, lists: []});
    });
    rows.forEach(row => {
      columns.forEach(col => {
        Array.from(new Set(Object.keys(data[col.value][row.value])))
          .forEach((subRec: any) => {
            row.lists.push({title: subRec, [col.value]: data[col.value][row.value][subRec]})
          });
      });
    });
    rows.forEach(row => {
      const temp = [];
      row.lists.forEach(x => {
        if (temp.filter(y => x.title === y).length === 0) {
          temp.push(x.title);
        }
      });
      const newRow = [];
      temp.forEach(x => {
        const filtered: any = row.lists.filter(y => y.title === x );
        newRow.push(Object.assign({}, ...filtered));
      });
      row.lists = newRow;
    });
    columns.unshift({text: '', value: 'title'});
    return {
      id: '6', title: 'Services', width: '280px', minWidth: '24%', height: '350px', type: 'table', visible: true,
      data: { rows, columns }, config: {type: 'nested'}
    };
  }

  convertToSticky(data?) {
    data = dashboardData.sticky;
    const obj = Object.keys(data)
      .map((x, ind) => {
         return {id: ind, title: x, width: '150px', height: '150px', type: 'sticky', visible: true,
          data: {
            operation_status: data[x].operation_status,
            software_license: {
              value: WidgetsService.setStickyValue(data[x].software_license)
            }
          }
        };
      });
    return obj;
  }
}
