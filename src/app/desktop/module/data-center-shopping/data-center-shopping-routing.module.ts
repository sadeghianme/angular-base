import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoppingComponent} from './component/shopping/shopping.component';

const routes: Routes = [
  {path: '', redirectTo: 'dc', pathMatch: 'full'},
  {path: 'dc', component: ShoppingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataCenterShoppingRoutingModule { }
