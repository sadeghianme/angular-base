import { Injectable } from '@angular/core';
import {Location} from '@angular/common';
import {ApiService} from '../api/api.service';

declare const $: any;
declare const downloadFile;

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(
    private _location: Location,
    private api: ApiService
  ) {
  }

  generateRandomString() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  navigateBack() {
    this._location.back();
  }

  detectLanguage(event, id?, checkInput?) {
    if (!event && (checkInput === 'emailOrNumber' || checkInput === 'number' || checkInput === 'textNumber' || checkInput === 'password'
      || checkInput === 'email' || checkInput === 'phoneNo' || checkInput === 'floatNumber' || checkInput === 'currency' || checkInput === 'bankCartNum' || checkInput === 'username')) {
      return 'left';
    } else if (!event && (checkInput === 'persianLetter')) {
      return 'right';
    }
    if (!event) {
      return;
    }
    if (/^[a-zA-Z0-9.@_%#$&*+^\-]+$/.test(event[0])) {
      return 'left';
    } else {
      return 'right';
    }
  }

  addCommas(nStr) {
    nStr += '';
    const x = nStr.split('.');
    let x1 = x[0];
    const x2 = x.length > 1 ? '.' + x[1] : '';
    const rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  }

  addCommasDynamically(nStr) {
    // console.log(nStr, '============<<<<<<')
    const newStr = nStr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return newStr;
  }

  getDownloadSampleUrl(from, name) {
    // TODO if there is no file then return empty
    return new Promise(res => {
      let path = '';
      switch (from) {
        case 'logestic': {
          path = downloadFile.host + ':' + downloadFile.port + '/logesticFile/' + name + '.csv';
          this.api.downloadFileApi(path)
            .then(data => {
              return res(data);
            });
          break;
        }
        case 'call': {
          path = downloadFile.host + ':' + downloadFile.port + '/callFile/' + name + '.xlsx';
          this.api.downloadFileApi(path)
            .then(data => {
              return res(data);
            });
          break;
        }
      }
    });
  }

  numberWithSpaces(value) {
      return [JSON.parse(JSON.stringify(value)).substr(0, 4),
              JSON.parse(JSON.stringify(value)).substr(4, 3),
              JSON.parse(JSON.stringify(value)).substr(7, 4)].join('-');
  }

  // sortArray(array: any, attr: any) {
  //   const list = array.sort((a: any, b: any) => (a[attr] > b[attr]) - (a[attr] < b[attr]));
  //   return list;
  // }

  multiSort(array, sortObject = {}) {
    const sortKeys = Object.keys(sortObject);

    // Return array if no sort object is supplied.
    if (!sortKeys.length) {
      return array;
    }

    // Change the values of the sortObject keys to -1, 0, or 1.
    for (let key in sortObject) {
      sortObject[key] = sortObject[key] === 'desc' || sortObject[key] === -1 ? -1
        : (sortObject[key] === 'skip' || sortObject[key] === 0 ? 0 : 1);
    }

    const keySort = (a, b, direction) => {
      direction = direction !== null ? direction : 1;

      if (a === b) { // If the values are the same, do not switch positions.
        return 0;
      }

      // If b > a, multiply by -1 to get the reverse direction.
      return a > b ? direction : -1 * direction;
    };

    const list = array.sort((a, b) => {
      let sorted = 0;
      let index = 0;

      // Loop until sorted (-1 or 1) or until the sort keys have been processed.
      while (sorted === 0 && index < sortKeys.length) {
        const key = sortKeys[index];

        if (key) {
          const direction = sortObject[key];

          sorted = keySort(a[key], b[key], direction);
          index++;
        }
      }

      return sorted;
    });

    return list;
  }


}
