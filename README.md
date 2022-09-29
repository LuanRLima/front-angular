<h1 align="center"> QUESTÃO 03 - DESAFIO DE PROGRAMAÇÃO </h1>
<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>

### Tópicos

:small_blue_diamond:[Descrição do projeto](#descrição-do-projetp)

:small_blue_diamond:[Ferramentas utilizadas](#ferramentas-utilizadas)

:small_blue_diamond:[Pré-requisitos](#pre-requisitos)

:small_blue_diamond:[Acesso ao projeto](#acesso-ao-projeto)

:small_blue_diamond:[Abrir e rodar o projeto](#abrir-e-rodar-o-projeto)

## Descrição do projeto

<p align="justify">
O projeto consiste em uma aplicação web que permite  um CRUD de calçados.
Temos o bakcend em java com spring boot e o frontend em angular.

</p>

## Desafio

### [Questão 03](https://github.com/LuanRLima/capgemini-academia-desafio-programacao/tree/master/questao_03):

>Implementar uma aplicação na linguagem Java que seja capaz de inserir, editar, deletar e
atualizar os cadastros de um calçado no banco, a aplicação deve ter uma interface.


### Requisitos funcionais:

2.1 - O banco de dados deve ter os seguintes campos:

- Tamanho
- Categoria
- Cor
- Preço
- Marca
- Data cadastro
- Quantidade em estoque
- Descrição.
- 
2.2 - Deve ser possível filtrar os calçados por tamanho, categoria, cor, preço, marca, data
cadastro e descrição, os filtros podem ser combinados;

2.3 - Desenvolver uma API para fazer o CRUD da mesma forma que interface executa;

2.4 - Implementar teste unitário;

2.5 - Utilizar linguagem de programação Java + Frameworks (se necessário);

2.6 - O script de criação do banco deve ser enviado junto com a aplicação ao finalizar o teste. O
envio dos arquivos deve ser via e-mail ou um link do repositório no GitHub. 

Obs. Colocar print para exemplificar as telas de editar/cadastrar e listar
## Ferramentas utilizadas

<h3><a href="https://www.java.com"> Java - 11</a></h3>
<h3><a href="https://junit.org/junit5"> Junit - 5</a></h3>
<h3><a href="https://maven.apache.org"> Maven</a></h3>
<h3><a href="https://site.mockito.org"> Mockito </a></h3>
<h3><a href="https://www.testcontainers.org"> TestContainers </a></h3>
<h3><a href="http://modelmapper.org"> Modelmapper</a></h3>
<h3><a href="https://rest-assured.io"> Rest-Assured</a></h3>
<h3><a href="https://spring.io/projects/spring-boot"> Spring boot </a></h3>
<h3><a href="https://spring.io/projects/spring-data-jpa"> Spring data jpa</a></h3>
<h3><a href="https://spring.io/projects/spring-ws"> Spring web</a></h3>
<h3><a href="https://www.postgresql.org/"> PostgreSQL</a></h3>
<h3><a href="https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javadoc.html"> Java Doc</a></h3>
<h3><a href="https://swagger.io/"> Swagger </a></h3>
<h3><a href="https://www.java.com"> Angular</a></h3>
<h3><a href="https://www.java.com"> Angular Material</a></h3>

## [Projeto Front-End](https://github.com/LuanRLima/front-angular)


### Clonando o projeto

Abra `Terminal`.

Altere o diretório de trabalho `atual` para o local em que deseja ter o `diretório clonado`.

Digite `https://github.com/LuanRLima/front-angular`.

[Tutorial como clonar um repositório](https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository).


## Abrir e rodar o projeto

### Pré-requisitos
- Baixar e instalar o [Angular](https://angular.io/guide/setup-local)
- Baixar e instalar o [Npm](https://www.npmjs.com/get-npm)
- Baixar e instalar o [Node](https://nodejs.org/en/download/)

Após baixar o projeto, você pode abrir com o IDE favorita [VsCode](https://code.visualstudio.com/) ou outra de sua preferência.

### Rodando o projeto


### [VsCode](https://code.visualstudio.com/)
## [Angular](https://angular.io/guide/setup-local)
- Abra o projeto no VsCode
- Abra o terminal do VsCode
- Digite o comando `npm install` para instalar as dependências do projeto
- Digite o comando `ng serve` para rodar o projeto
- Abra o navegador e digite `http://localhost:4200/` para acessar o projeto
- Lembrar de subir o projeto back-end para que o front-end funcione corretamente
- Lembrar de instalar o postgresql e criar o banco de dados  ou subir o script do docker
- Para parar o projeto, basta digitar `Ctrl + C` no terminal do VsCode


# FrontAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
