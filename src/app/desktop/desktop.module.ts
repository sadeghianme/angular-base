import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesktopRoutingModule } from './desktop-routing.module';
import { MainPageComponent } from './component/main-page/main-page.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import {MaterialModule} from '../app-material.module';

@NgModule({
  declarations: [ MainPageComponent, ToolbarComponent, MenuBarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    DesktopRoutingModule
  ]
})
export class DesktopModule { }
