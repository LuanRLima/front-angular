import { Injectable } from '@angular/core';
import { Calcado } from '../model/calcado';
import { HttpClient } from '@angular/common/http';
import { delay, first, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalcadosService {

  constructor(private httpClient: HttpClient) { }

  private readonly API = 'http://localhost:8080/api/calcado';

  list(): Observable<Calcado[]> {
    return this.httpClient.get<Calcado[]>(this.API)
      .pipe(
        first(),
        delay(15000),
        tap(calcados => console.log(calcados))
      );
  }

}
