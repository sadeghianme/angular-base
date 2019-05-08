import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import {MenuComponent} from './component/menu/menu.component';
import {ButtonComponent} from './component/button/button.component';
import {MaterialModule} from '../../app-material.module';

@NgModule({
  declarations: [MenuComponent, ButtonComponent],
  exports: [MenuComponent, ButtonComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ToolsRoutingModule
  ]
})
export class ToolsModule { }
