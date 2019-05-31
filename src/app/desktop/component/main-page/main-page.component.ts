import { Component, OnInit } from '@angular/core';
import {LanguageService} from '../../../public/core/services/language/language.service';
import {ActivatedRoute, Router} from "@angular/router";

declare const $: any;
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  theme = 'default-theme';
  constructor(
    public lang: LanguageService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    $('.initiate-loading').fadeOut();
  }


  ngOnInit() {
    // this.router.navigate(['/dashboard/default'], {relativeTo: this.route});
  }



}
