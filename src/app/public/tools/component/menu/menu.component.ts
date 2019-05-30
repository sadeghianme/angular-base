import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() list = [];
  @Input() iconName = 'list';
  @Output() onAction = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  action(action) {
    this.onAction.emit(action);
  }
}
