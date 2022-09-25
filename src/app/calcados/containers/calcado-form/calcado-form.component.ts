import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CalcadosService } from '../../service/calcados.service';

@Component({
  selector: 'app-calcado-form',
  templateUrl: './calcado-form.component.html',
  styleUrls: ['./calcado-form.component.scss']
})
export class CalcadoFormComponent implements OnInit {


  form = this.formBuilder.group({
    nome: [''],
    marca: [''],
    cor: [''],
    tamanho: [''],
    preco: [0],
    quantidadeEmEstoque: [0],
    categoria: [''],
    descricao: ['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CalcadosService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {

  }

  ngOnInit(): void {
    this.form.value.preco = 0;
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      result =>
        this.onSuccess(), () => this.onError());
    this.onCancel();
  }
  onCancel() {
    this.location.back();
    console.log('cancel');
  }

  private onSuccess() {
    this.snackBar.open('Calcado salvo com sucesso', 'OK', { duration: 3000 });
  }

  private onError() {
    this.snackBar.open('Erro ao salvar o calcado', 'OK', { duration: 3000 });
  }

}
