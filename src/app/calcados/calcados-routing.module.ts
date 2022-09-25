import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalcadosComponent } from './calcados/calcados.component';

const routes: Routes = [
  {
    path: '', component: CalcadosComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalcadosRoutingModule { }
