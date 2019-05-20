import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ToolsRoutingModule} from './tools-routing.module';
import {MenuComponent} from './component/menu/menu.component';
import {ButtonComponent} from './component/button/button.component';
import {MaterialModule} from '../../app-material.module';
import {ModalComponent} from './component/modal/modal.component';
import {DraggableGridDirective} from './directives/draggable-grid/draggable-grid.directive';

@NgModule({
  declarations: [
    MenuComponent,
    ButtonComponent,
    ModalComponent,
    DraggableGridDirective
  ],
  exports: [
    MenuComponent,
    ButtonComponent,
    ModalComponent,
    DraggableGridDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ToolsRoutingModule
  ]
})
export class ToolsModule {
}
