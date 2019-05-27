import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generalPipe'
})
export class GeneralPipePipe implements PipeTransform {

  transform(data: any, value?: any, field?: any, type?: any): any {
    console.log('in pipe --> ', data, value, field, type);
    if (!value || !field || !type) {
      return data;
    }
    let result = [];
    switch (type) {
      case 'boolean':
        result = data.filter(item => {
          return item[field].toString() === value.toString();
        });
        break;
      case 'string':
        result = data.filter(item => {
          return item[field].toLowerCase().match(value.toLowerCase());
        });
        break;
      case 'number':
        result = data.filter(item => {
          return item[field].toString().match(value.toString());
        });
        break;
    }
    return result;
  }

}
