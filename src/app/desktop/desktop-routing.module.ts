import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './component/main-page/main-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {
    path: 'homepage', component: MainPageComponent, children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      // {path: 'dashboard', component: DashboardComponent}
      {path: 'shopping', loadChildren: './module/data-center-shopping/data-center-shopping.module#DataCenterShoppingModule', data: {preload: true} },
      {path: 'dashboard', loadChildren: './module/dashboard/dashboard.module#DashboardModule', data: {preload: true} },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesktopRoutingModule { }
