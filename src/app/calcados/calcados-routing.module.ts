import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcadoFormComponent } from './calcado-form/calcado-form.component';

import { CalcadosComponent } from './calcados/calcados.component';

const routes: Routes = [
  {
    path: '', component: CalcadosComponent,
  },
  {
    path: 'new', component: CalcadoFormComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalcadosRoutingModule { }
