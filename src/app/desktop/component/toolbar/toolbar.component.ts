import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LanguageService} from '../../../public/core/services/language/language.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  colorStyle = [
    {name: 'default-theme', color: 'blue', icon: 'lens', label: 'Light'},
    {name: 'second-theme', color: '#ff4081', icon: 'lens', label: 'Light Pink'},
    // {name: 'third-theme', color: 'blue', icon: 'lens', label: 'Dark Blue'},
    // {name: 'forth-theme', color: '#ff4081', icon: 'lens', label: 'Dark Pink'},
  ];
  languageList = [
    {text: 'English', value: 'en'},
    {text: 'Japanese', value: 'jp'},
    {text: 'Arabic', value: 'ar'},
  ];
  selectedLanguage = {text: 'English', value: 'en'};
  menuOpened = false;
  fullScreen = false;
  @Input() title = '';
  @Input() userInfo: any;
  @Output() resultTheme =  new EventEmitter();
  constructor(
    public lang: LanguageService
  ) { }

  ngOnInit() {
  }

  changeTheme(item) {
    console.log(item.name)
    this.resultTheme.emit(item.name);
  }

  changeLanguage(item) {
    this.selectedLanguage = item;
    this.lang.cl = item.value;
  }

  requestFullScreen() {
    const documen: any = document;
    const docElm: any = document.querySelector('#main-page');
    const isInFullScreen = (document['fullscreenElement'] && document['fullscreenElement'] !== null) ||
      (document['webkitFullscreenElement'] && document['webkitFullscreenElement'] !== null) ||
      (documen.mozFullScreenElement && documen.mozFullScreenElement !== null) ||
      (documen.msFullscreenElement && documen.msFullscreenElement !== null);
    if (!isInFullScreen) {
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (documen.webkitExitFullscreen) {
        document['webkitExitFullscreen']();
      } else if (documen.mozCancelFullScreen) {
        documen.mozCancelFullScreen();
      } else if (documen.msExitFullscreen) {
        documen.msExitFullscreen();
      }
    }
    this.fullScreen = !this.fullScreen;
  }

}
