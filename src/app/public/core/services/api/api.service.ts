import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { info } from './getApiInfo.config';
import {Router} from '@angular/router';
import {flatMap, retryWhen} from 'rxjs/operators';
import {interval, Observable, of, throwError} from 'rxjs';
import {SnackBarService} from '../snack-bar/snack-bar.service';

declare const severHost: any;
declare const severPort: any;
declare const preApiAddress: any;
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url: string;
  private request: any = [];
  // private  headers = new HttpHeaders({'Content-Type': 'application/zip; application/json; charset=utf-8'});
  private  headers = new HttpHeaders({'Content-Type': 'application/json;'});
  constructor(
    private http: HttpClient,
    private messageBox: SnackBarService,
    private router: Router,
  ) { }

  getInfo() {
    return JSON.parse(JSON.stringify(info));
  }

  setHeader(setToken, contentType = 'application/json') {
    if (setToken) {
      return {
        headers: new HttpHeaders({
          // 'Content-Type':  contentType,
          token: '' // this.loginState.getToken()
        })
      };
    } else {
      return {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        })
      };
    }
  }


  callApi(path, setToken = false, returnError = false, apiServer = 'kookaat', repeat = false) {
    // console.log('@@@@@@@@@@@@', path)
    // if (setToken && apiServer === 'kookaat' && this.expired.checkExpiredTime()) {
    //   this.router.navigate(['/auth/login']);
    // }
    // this.loginState.showSpinner(true);**
    this.url = this.makeUrl(path);
    switch (path.method) {
      case 'post':
        return this.postMethod(path, setToken, returnError, repeat);
      case 'get':
        return this.getMethod(path, setToken, returnError);
    }
  }

  private extractData(data) {
    // this.loginState.showSpinner(false);**
    if (data.code === 0 || data.resultCode === 0) {
      return data.returnValue || data.data || {};
    } else {
      this.showServeError(data);
      return false;
    }
  }

  private postMethod(path, setToken, returnError, repeat) {
    if (repeat) {
      return new Observable(res => {
        this.http.post<any>(this.url, path.body, {headers: this.setHeader(setToken).headers})
          .pipe(retryWhen(_ => {
            return interval(7000).pipe(
              flatMap(count => count === 3 ? throwError('Giving up') : of(count)));
            // The code above will do exactly that. The interval operator emits a sequence number. When the number reaches a certain limit flatMap will return a failed observable.
          }))
          // .takeUntil(Observable.of(true).pipe(delay(15000)))
          // .debounceTime(2000)        // wait for 400ms pause in events --- baraye search key up khube va maghadiri ke kamtar az 2000 bian ro reject mikone bade 2000 akharin meghdar mifreste
          // .distinctUntilChanged()   // ignore if next search term is same as previous
          .subscribe(data => {
            res.next(this.extractData(data));
          }, (err: HttpErrorResponse) => {
            this.errorHandelling(err);
            if (returnError) {
              res.next(false);
            }
          });
      });
    } else {
      return new Observable(res => {
        this.http.post<any>(this.url, path.body, {headers: this.setHeader(setToken).headers})
        // .takeUntil(Observable.of(true).pipe(delay(5000)))
        // .debounceTime(400)        // wait for 400ms pause in events
        // .distinctUntilChanged()   // ignore if next search term is same as previous
          .subscribe(data => {
            res.next(this.extractData(data));
          }, (err: HttpErrorResponse) => {
            this.errorHandelling(err);
            if (returnError) {
              // this.loginState.showSpinner(false);**
              res.next(false);
            }
          });
      });
    }
  }

  private getMethod(path, setToken, returnError) {
    if (path.body) {
      path.body = this.makeQueryString(path.body);
    }
    return new Observable(res => {
      this.http.get<any>(this.url, {params: path.body, headers: this.setHeader(setToken).headers})
        .subscribe(data => {

          res.next(this.extractData(data));
        }, (err: HttpErrorResponse) => {
          this.errorHandelling(err);
          if (returnError) {
            // this.loginState.showSpinner(false);
            res.next(false);
          }
        });
    });
  }
  private makeQueryString(params) {
    Object.keys(params)
      .filter(field => !params[field])
      .forEach(item => {
        delete params[item];
      });
    return params;
  }

  getMessage(): any {
    return this.messageBox.getMessage();
  }

  showMessageBox(type, message, duration?, verticalPosition?, horizontalPosition?, action?) {
    if (Array.isArray(message)) {
      message = message.toString().split(',').join('\n**');
    }
    this.messageBox[type](message, duration, verticalPosition, horizontalPosition, action);
  }

  private showServeError(err) {
    // console.log('for Expired==>', err, 'state--->', this.loginState.tokenPending);
    // if (err.code === -5 || err.code === -6) {
    //   // TODO get token for when no refresh
    //   if (!this.loginState.tokenPending) {
    //     location.reload();
    //   }
    //   return;
    // }
    if (this.getMessage().error.hasOwnProperty(err.code)) {
      this.messageBox.error(this.getMessage().error[err.code].message);
    } else if (err.message) {
      this.messageBox.error(err.message);
    } else if (err.body) {
      this.messageBox.error(err.body.message);
    } else if (err.hasOwnProperty('errors') && err.errors && err.errors.length) {
      this.messageBox.error(err.errors[0]);
    }
  }

  private errorHandelling(err) {
    // this.loginState.showSpinner(false);**
    if (err.error instanceof Error) {
      // A client-side or network error occurred.
      console.log('An error occurred:', err.error.message);
      this.messageBox.error('client side error: ' + err.error.message);
    } else {
      // Backend returns unsuccessful response codes such as 404, 500 etc.
      console.log('Backend returned status code: ', err.status);
      console.log('Response body:', err.error);
      if (err && err.error &&
        ((err.error.code === -4 || err.error.code === -5 || err.error.code === -6) ||
          (err.error.hasOwnProperty('errors') && err.error.errors && err.error.errors.length))) {
        this.showServeError(err.error);
        return;
      }
      if (err && err.error) {
        if (err.error.responseMessage) {
          this.messageBox.error('server side error: ' + err.error.responseMessage);
        } else if (err.error.message) {
          this.messageBox.error('server side error: ' + err.error.message);
        } else {
          this.messageBox.error('عدم برقراری ارتباط با سرور');
        }
      } else {
        this.messageBox.error('server side error: ' + err.status);
      }

    }
  }

  private makeUrl(path) {
    if (path && path.url) {
          return `${severHost}:${severPort}/${preApiAddress}/${path.url}`;
      }
  }
}
