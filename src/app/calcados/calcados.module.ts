import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CalcadosRoutingModule } from './calcados-routing.module';
import { CalcadosComponent } from './calcados/calcados.component';




@NgModule({
  declarations: [
    CalcadosComponent
  ],
  imports: [
    CommonModule,
    CalcadosRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class CalcadosModule { }
