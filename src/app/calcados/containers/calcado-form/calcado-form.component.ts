import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Calcado } from '../../model/calcado';
import { CalcadosService } from '../../service/calcados.service';



interface Categorias {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-calcado-form',
  templateUrl: './calcado-form.component.html',
  styleUrls: ['./calcado-form.component.scss']
})
export class CalcadoFormComponent implements OnInit {


  form = this.formBuilder.group({
    id: [0],
    nome: [''],
    marca: [''],
    cor: [''],
    tamanho: [''],
    preco: [0],
    quantidadeEmEstoque: [0],
    categoria: ['TENIS'],
    descricao: ['']
  });



  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CalcadosService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const calcado: Calcado = this.route.snapshot.data['calcado'];
    this.form.setValue({
      id: calcado.id,
      nome: calcado.nome,
      marca: calcado.marca,
      cor: calcado.cor,
      tamanho: calcado.tamanho,
      preco: calcado.preco,
      quantidadeEmEstoque: calcado.quantidadeEmEstoque,
      categoria: calcado.categoria,

      descricao: calcado.descricao
    });

  }


  onSubmit() {
    this.service.save(this.form.value).subscribe(
      result =>
        this.onSuccess(), () => this.onError());
    console.log(this.form.value);

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

  categorias: Categorias[] = [
    { value: "SAPATO", viewValue: 'Sapato' },
    { value: "SANDALIA", viewValue: 'Sandália' },
    { value: "TENIS", viewValue: 'Tênis' },
    { value: "CHINELO", viewValue: 'Chinelo' },
    { value: "BOTA", viewValue: 'Bota' }
  ];



}
