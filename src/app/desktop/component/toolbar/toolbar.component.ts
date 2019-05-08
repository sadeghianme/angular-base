import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  colorStyle = [
    {name: 'default-theme', color: 'blue', icon: 'lens', label: 'Light Blue'},
    {name: 'second-theme', color: '#ff4081', icon: 'lens', label: 'Light Pink'},
    {name: 'third-theme', color: 'blue', icon: 'lens', label: 'Dark Blue'},
    {name: 'forth-theme', color: '#ff4081', icon: 'lens', label: 'Dark Pink'},
  ]
  screenMode = 'fullscreen'; // fullscreen_exit
  @Input() title = '';
  @Input() userInfo: any;
  @Output() resultTheme =  new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  changeTheme(item) {
    console.log(item.name)
    this.resultTheme.emit(item.name);
  }

}
