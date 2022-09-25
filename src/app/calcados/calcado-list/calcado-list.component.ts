import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Calcado } from '../model/calcado';

@Component({
  selector: 'app-calcado-list',
  templateUrl: './calcado-list.component.html',
  styleUrls: ['./calcado-list.component.scss']
})
export class CalcadoListComponent implements OnInit {

  @Input() calcados: Calcado[] = [];

  readonly displayedColumns = ["nome"
    , "marca", "cor", "tamanho", "preco", "quantidadeEmEstoque", "categoria"
    , "dataDeCadastro", "descricao", "actions"];
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
