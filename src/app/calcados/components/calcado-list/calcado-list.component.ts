import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Calcado } from '../../model/calcado';

@Component({
  selector: 'app-calcado-list',
  templateUrl: './calcado-list.component.html',
  styleUrls: ['./calcado-list.component.scss']
})
export class CalcadoListComponent implements OnInit {

  @Input() calcados: Calcado[] = [];
  @Output() add = new EventEmitter(false);

  readonly displayedColumns = ["nome"
    , "marca", "cor", "tamanho", "preco", "quantidadeEmEstoque", "categoria"
    , "dataDeCadastro", "descricao", "actions"];
  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    this.add.emit(true);
  }
}
