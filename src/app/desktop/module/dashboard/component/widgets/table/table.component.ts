import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data: any;
  @Output() resultRowData = new EventEmitter();
  constructor() { }

  ngOnInit() {
    // console.log('ddddd', this.data)
  }

  returnRowData(row) {
    this.resultRowData.emit(row);
  }

}
