import {Component, HostListener} from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostListener('window:offline', ['$event']) onOffline() {
    $('.initiate-loading').fadeOut();
    $('.pan-overlay').fadeIn();
  }

  @HostListener('window:online', ['$event']) onOnline() {
    $('.pan-overlay').fadeOut();
  }
}
