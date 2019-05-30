import { Injectable } from '@angular/core';
import { languages } from './languageInfo.config';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  cl = 'en';
  defaultLanguage = 'en';

  constructor() {
  }

  public ln(item) {
    const arr = item.split('.');
    let obj;
    let result = obj = {};
    arr.forEach(key => {
      result = result[key] = {};
    });
    // console.log(item, obj, this.getPropByString(languages, `${item}.${this.cl}`));
    // const lan = languages[item.split('.')[0]][item.split('.')[1]][this.cl] ||
    // languages[item.split('.')[0]][item.split('.')[1]][this.defaultLanguage];
    return this.getPropByString(languages, `${item}.${this.cl}`) ||
      this.getPropByString(languages, `${item}.${this.defaultLanguage}`) || item;
  }

   private getPropByString(obj, propString) {
    // console.log('---->', obj, propString)
    if (!propString) {
      return obj;
    }
    let prop, i, iLen;
    const props = propString.split('.');

    for (i = 0, iLen = props.length - 1; i < iLen; i++) {
      prop = props[i];
      const candidate = obj[prop];
      if (candidate !== undefined) {
        obj = candidate;
      } else {
        break;
      }
    }
    // console.log(obj[props[i]])
    return obj[props[i]];
  }
}
