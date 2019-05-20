import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sticky',
  templateUrl: './sticky.component.html',
  styleUrls: ['./sticky.component.scss']
})
export class StickyComponent implements OnInit {
  @Input() data: any = [];
  constructor() { }

  ngOnInit() {
    console.log(this.data)
  }

}
