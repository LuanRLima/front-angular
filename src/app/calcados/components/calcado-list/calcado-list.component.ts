import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';

import { COMMA, TAB, SPACE, ENTER } from '@angular/cdk/keycodes';
import { Calcado } from '../../model/calcado';
import { MatChipInputEvent } from '@angular/material/chips';


export interface SearchItem {
  name: string;
}

@Component({
  selector: 'app-calcado-list',
  templateUrl: './calcado-list.component.html',
  styleUrls: ['./calcado-list.component.scss']
})
export class CalcadoListComponent implements OnInit {

  @Input() calcados: Calcado[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);


  readonly displayedColumns = ["id", "nome"
    , "marca", "cor", "tamanho", "preco", "quantidadeEmEstoque", "categoria"
    , "dataDeCadastro", "descricao", "actions"];








  constructor() { }

  ngOnInit(): void {

  }

  onAdd() {
    this.add.emit(true);
  }

  onEdit(calcado: Calcado) {
    this.edit.emit(calcado);
  }

  onRemove(calcado: Calcado) {
    this.remove.emit(calcado);
  }
}
