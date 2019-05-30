import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataCenterShoppingRoutingModule } from './data-center-shopping-routing.module';
import { ShoppingComponent } from './component/shopping/shopping.component';

@NgModule({
  declarations: [ShoppingComponent],
  imports: [
    CommonModule,
    DataCenterShoppingRoutingModule
  ]
})
export class DataCenterShoppingModule { }
