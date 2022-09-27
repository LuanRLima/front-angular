export interface Calcado {

  id: number;
  nome: string;
  marca: string;
  cor: string;
  tamanho: string;
  preco: number
  quantidadeEmEstoque: number;
  categoria: string;
  descricao: string;
  dataDeCadastro?: Date;
}

