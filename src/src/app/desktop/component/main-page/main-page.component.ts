import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../../public/core/services/language/language.service';

declare const $: any;
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  theme = 'default-theme';
  constructor(
    public lang: LanguageService
  ) {
    $('.initiate-loading').fadeOut();
  }

  ngOnInit() {
  }



}
