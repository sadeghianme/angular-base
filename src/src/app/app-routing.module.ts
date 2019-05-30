import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', loadChildren: './desktop/desktop.module#DesktopModule', data: {preload: true}, canActivate: [AppGuard]},
  { path: '', loadChildren: './desktop/desktop.module#DesktopModule', data: {preload: true}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
