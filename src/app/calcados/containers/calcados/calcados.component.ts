import { CalcadosService } from '../../service/calcados.service';
import { Component, OnInit } from '@angular/core';
import { Calcado } from '../../model/calcado';
import { catchError, Observable, of, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calcados',
  templateUrl: './calcados.component.html',
  styleUrls: ['./calcados.component.scss']
})
export class CalcadosComponent implements OnInit {


  calcados$: Observable<Calcado[]> | null = null;

  // create form formgoup an form control

  form = new FormGroup({
    nome: new FormControl(''),
    marca: new FormControl(''),
    cor: new FormControl(''),
    tamanho: new FormControl(''),
    preco: new FormControl(''),
    quantidadeEmEstoque: new FormControl(''),
    categoria: new FormControl(''),
    descricao: new FormControl('')
  });


  constructor(
    private calcadosService: CalcadosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar

  ) {
    this.refresh();
  }
  ngOnDestroy(): void {
    this.refresh();
  }
  refresh() {
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
  // impementig list

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  onEdit(calcado: Calcado) {
    this.router.navigate(['edit', calcado.id], { relativeTo: this.route });
  }

  onRemove(calcado: Calcado) {
    this.calcadosService.delete(calcado.id).subscribe(
      () => {
        this.refresh();
        this.snackBar.open('Calcado removido com sucesso', 'OK', { duration: 2000 });
      },
      () => this.onError('Erro ao tentar remover calcado.')
    );
  }

  onFilter() {
    this.calcados$ = this.calcadosService.getAllWithFilter(this.form.value).pipe(
      tap(records => this.calcados$ = of(records)),
      catchError(err => {
        this.onError('Erro ao carregar os dados');
        return of([]);
      }

      )
    );
  }
  // onFilter transform para observable$ Calcado[] with tap
}


