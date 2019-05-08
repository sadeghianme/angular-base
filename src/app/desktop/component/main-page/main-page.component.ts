import { Component, OnInit } from '@angular/core';

declare const $: any;
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  theme = 'default-theme';
  constructor() {
    $('.initiate-loading').fadeOut();
  }

  ngOnInit() {
  }



}
