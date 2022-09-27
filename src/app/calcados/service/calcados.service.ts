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
  getAllWithFilter(filter: any): Observable<Calcado[]> {
    return this.httpClient.get<Calcado[]>(`${this.API}/filter`, { params: filter }).pipe(first(),
      delay(1000),
      tap(calcados => console.log(calcados)));
  }

  list(): Observable<Calcado[]> {
    return this.httpClient.get<Calcado[]>(this.API)
      .pipe(
        first(),
        delay(1000),
        tap(calcados => console.log(calcados))
      );
  }

  save(record: Partial<Calcado>) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(records: Partial<Calcado>): Observable<Calcado> {
    return this.httpClient.post<Calcado>(this.API, records);
  }


  findById(id: string): Observable<Calcado> {
    return this.httpClient.get<Calcado>(`${this.API}/${id}`).pipe(first());
  }

  update(record: Partial<Calcado>) {
    return this.httpClient.put<Calcado>(`${this.API}/${record.id}`, record).pipe(first());
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }
  //getall with filter integraing formgroup
}
