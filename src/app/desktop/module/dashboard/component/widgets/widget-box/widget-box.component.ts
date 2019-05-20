import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-widget-box',
  templateUrl: './widget-box.component.html',
  styleUrls: ['./widget-box.component.scss']
})
export class WidgetBoxComponent implements OnInit {
  @Input() title = '';
  @Input() data: any;
  @Input() size = {width: '', height: ''};
  @Output() removeClick = new EventEmitter();
  @Output() maximizeClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.data)
  }

  removeItem() {
    this.removeClick.emit();
  }

  maximizeBox() {
    this.maximizeClick.emit();
  }

}
