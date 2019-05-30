import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GeneralPipePipe} from './pipes/general/general-pipe.pipe';

@NgModule({
  declarations: [GeneralPipePipe],
  exports: [GeneralPipePipe],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
