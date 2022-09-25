import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CalcadoFormComponent } from './calcado-form/calcado-form.component';
import { CalcadosRoutingModule } from './calcados-routing.module';
import { CalcadosComponent } from './calcados/calcados.component';
import { CalcadoListComponent } from './calcado-list/calcado-list.component';




@NgModule({
  declarations: [
    CalcadosComponent,
    CalcadoFormComponent,
    CalcadoListComponent
  ],
  imports: [
    CommonModule,
    CalcadosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class CalcadosModule { }
