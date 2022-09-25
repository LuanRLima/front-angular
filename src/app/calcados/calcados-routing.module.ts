import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcadoFormComponent } from './containers/calcado-form/calcado-form.component';

import { CalcadosComponent } from './containers/calcados/calcados.component';
import { CalcadoResolver } from './guards/calcado.resolver';

const routes: Routes = [
  {
    path: '', component: CalcadosComponent,
  },
  {
    path: 'new', component: CalcadoFormComponent, resolve: { calcado: CalcadoResolver }
  },
  {
    path: 'edit/:id', component: CalcadoFormComponent, resolve: { calcado: CalcadoResolver },
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalcadosRoutingModule { }
