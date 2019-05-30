import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-widget',
  templateUrl: './header-widget.component.html',
  styleUrls: ['./header-widget.component.scss']
})
export class HeaderWidgetComponent implements OnInit {
  @Input() data: any = {title: '', data: []};
  constructor() { }

  ngOnInit() {
  }

}
