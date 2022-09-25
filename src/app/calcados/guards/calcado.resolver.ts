import { Calcado } from './../model/calcado';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CalcadosService } from '../service/calcados.service';

@Injectable({
  providedIn: 'root'
})
export class CalcadoResolver implements Resolve<Calcado> {
  constructor(private service: CalcadosService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Calcado> {
    if (route.params && route.params['id']) {
      return this.service.findById(route.params['id']);
    }
    return of({
      id: 0,
      nome: '',
      marca: '',
      cor: '',
      tamanho: '0',
      preco: 0,
      quantidadeEmEstoque: 0,
      categoria: '',
      descricao: '',
    });
  }
}
