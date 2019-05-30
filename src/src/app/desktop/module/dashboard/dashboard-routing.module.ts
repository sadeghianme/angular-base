import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from './component/default/default.component';

const routes: Routes = [
  {path: '', redirectTo: 'default', pathMatch: 'full'},
  {path: 'default', component: DefaultComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
