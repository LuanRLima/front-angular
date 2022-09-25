// import { Calcado } from './../model/calcado';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-calcados',
//   templateUrl: './calcados.component.html',
//   styleUrls: ['./calcados.component.scss']
// })
// export class CalcadosComponent implements OnInit {

//   calcados: Calcado[] = [
//     { _id: 1, nome: 'Tênis Nike', marca: 'Nike', cor: 'Preto', tamanho: '40', preco: 200, quantidadeEmEstoque: 10, categoria: 'Tênis', descricao: 'Tênis Nike Air Max 90', dataDeCriacao: new Date() },
//   ];

//   displayedColumns = ["nome", "marca", "cor, tamanho", "preco", "quantidadeEmEstoque", "categoria", "dataDeCadastro", "descricao"];

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Calcado } from '../model/calcado';

@Component({
  selector: 'app-calcados',
  templateUrl: './calcados.component.html',
  styleUrls: ['./calcados.component.scss']
})
export class CalcadosComponent implements OnInit {

  calcados: Calcado[] = [
    {
      _id: 1, nome: 'Tênis Nike', marca: 'Nike', cor: 'Preto', tamanho: '40', preco: 200,
      quantidadeEmEstoque: 10, categoria: 'Tênis', descricao: 'Tênis Nike Air Max 90', dataDeCriacao: new Date()
    },
  ];
  displayedColumns = ["_id", "nome"
    , "marca", "cor", "tamanho", "preco", "quantidadeEmEstoque", "categoria"
    , "dataDeCadastro", "descricao"
  ];

  constructor() {
    // this.calcados = [];
  }

  ngOnInit(): void {

  }

}
