import { Injectable } from '@angular/core';
import { Calcado } from '../model/calcado';
import { HttpClient } from '@angular/common/http';
import { delay, first, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalcadosService {

  constructor(private httpClient: HttpClient) { }

  private readonly API = 'api/calcados';

  list(): Observable<Calcado[]> {
    return this.httpClient.get<Calcado[]>(this.API)
      .pipe(
        first(),
        delay(1000),
        tap(calcados => console.log(calcados))
      );
  }

  save(records: Partial<Calcado>): Observable<Calcado> {
    return this.httpClient.post<Calcado>(this.API, records);
  }

  findById(id: string): Observable<Calcado> {
    return this.httpClient.get<Calcado>(`${this.API}/${id}`);
  }

}
