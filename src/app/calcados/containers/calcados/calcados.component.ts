import { CalcadosService } from '../../service/calcados.service';
import { Component, OnInit } from '@angular/core';
import { Calcado } from '../../model/calcado';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-calcados',
  templateUrl: './calcados.component.html',
  styleUrls: ['./calcados.component.scss']
})
export class CalcadosComponent implements OnInit {

  calcados$: Observable<Calcado[]>;

  constructor(
    private calcadosService: CalcadosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.calcados$ = this.calcadosService.list().
      pipe(
        catchError(err => {
          this.onError('Erro ao carregar os dados');
          return of([]);
        }
        )
      );

  }
  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }



  ngOnInit(): void {

  }
  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }


}
