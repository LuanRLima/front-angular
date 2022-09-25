import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { CalcadosRoutingModule } from './calcados-routing.module';
import { CalcadosComponent } from './calcados/calcados.component';


@NgModule({
  declarations: [
    CalcadosComponent
  ],
  imports: [
    CommonModule,
    CalcadosRoutingModule,
    MatTableModule
  ]
})
export class CalcadosModule { }
