import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  messageText: string [];
  constructor(
    public snackBar: MatSnackBar,
    private httpService: HttpClient
  ) {
    if (!this.messageText || this.messageText.length === 0) {
      httpService.get('/assets/messages/messages.json').subscribe(data => {
          this.messageText = data as string [];
          console.log('message file has been loaded');
        }, (err: HttpErrorResponse) => {
          console.log ('err to get message', err.message);
        }
      );
    }
  }

  getMessage(): any {
    return this.messageText;
  }

  success(message, duration?, verticalPosition?, horizontalPosition?, action?) {
    this.openSnackBar(message, 'success', duration, verticalPosition, horizontalPosition, action);
  }

  error(message, duration?, verticalPosition?, horizontalPosition?, action?) {
    this.openSnackBar(message, 'error', duration, verticalPosition, horizontalPosition, action);
  }

  warning(message, duration?, verticalPosition?, horizontalPosition?, action?) {
    this.openSnackBar(message, 'warning', duration, verticalPosition, horizontalPosition, action);
  }

  info(message, duration?, verticalPosition?, horizontalPosition?, action?) {
    this.openSnackBar(message, 'info', duration, verticalPosition, horizontalPosition, action);
  }

  private openSnackBar(message, type, duration?, verticalPosition?, horizontalPosition?, action?) {
    const messageConfig: any = {
      defaultShowMessageTime: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    };
    if (!duration) {
      duration = messageConfig.defaultShowMessageTime;
    }
    if (!verticalPosition) {
      verticalPosition = messageConfig.verticalPosition;
    }
    if (!horizontalPosition) {
      horizontalPosition = messageConfig.horizontalPosition;
    }
    const verPo: MatSnackBarVerticalPosition = verticalPosition;
    const horPo: MatSnackBarHorizontalPosition = horizontalPosition;
    let extraClasses;
    if (type === 'error') {
      extraClasses = ['snack-background-error', 'snack-justify'];
    } else if (type === 'success') {
      extraClasses = ['snack-background-success', 'snack-justify'];
    } else if (type === 'warning') {
      extraClasses = ['snack-background-warning', 'snack-justify'];
    } else if (type === 'info') {
      extraClasses = ['snack-background-info', 'snack-justify'];
    }
    const config = new MatSnackBarConfig();
    config.verticalPosition = verPo;
    config.horizontalPosition = horPo;
    config.duration = duration;
    config.direction = 'rtl';
    config.panelClass = extraClasses;
    setTimeout(() => {
      this.snackBar.open( message, action, config);
    }, 100);
  }
}
