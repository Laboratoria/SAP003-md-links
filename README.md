# Markdown Links

## Índice

* [1. Prefácio](#1-prefácio)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Instalação e Uso](#3-instalação-e-uso)
* [4. Considerações Finais](#4-considerações-finais)

***

## 1. Prefácio

[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação
muito popular entre os programadores. É usada em muitas plataformas que
manipulam texto (GitHub, fórum, blogs e etc), e é muito comum encontrar arquivos
com este formato em qualquer repositório (começando pelo tradicional
`README.md`).

Os arquivos `Markdown` normalmente contém _links_ que muitas vezes estão
quebrados, ou que já não são válidos e isso prejudica muito o valor da
informação que está ali.

Então criamos uma biblioteca capaz de encontrar e validar esses links.


## 2. Resumo do projeto

O projeto é uma biblioteca que pode ser executada por uma CLI (Command Line Interface - Interface de Linha de Comando)
que retorna um array de objetos dos links contidos em um arquivo Markdown(.md) e como opção pode validar os mesmos.

## 3. Instalação e Uso

### Como Instalar

Você pode instalar a biblioteca usando o seguinte comando no seu terminal:

`$ npm install -g jackmattar/SAP003-md-links`

Talvez você precise de autorização de administrador para instalar.
Caso ocorra um erro de permissão na instalação tente:

`$ sudo npm install -g jackmattar/SAP003-md-links`

### Como usar

Para usar a biblioteca em seus projetos JavaScript, faça um `require` no seu arquivo da seguinte forma:


### Javascript

* [ ] Uso de callbacks
* [ ] Consumo de Promises
* [ ] Criação de uma Promise
* [ ] Módulos de JS (CommonJS vs ES Modules)

### Node

* [ ] Sistema de arquivos ([fs](https://nodejs.org/api/fs.html), [path](https://nodejs.org/api/path.html))
* [ ] [package.json](https://docs.npmjs.com/files/package.json)
* [ ] criação de módulos [(CommonJS)](https://nodejs.org/docs/latest-v0.10.x/api/modules.html)
* [ ] Instalar e usar módulos ([npm](https://www.npmjs.com/))
* [ ] [npm-scripts](https://docs.npmjs.com/misc/scripts)
* [ ] CLI (Command Line Interface - Interface de Linha de Comando)
* [ ] [http.get](https://nodejs.org/api/http.html#http_http_get_options_callback)

### Testing

* [ ] Testar suas funções
* [ ] Teste assíncrono
* [ ] Usar biblioteca de mock
* [ ] Mock manual
* [ ] Teste para múltiplos sistemas operacionais

### Git e Github

* [ ] Organização no Github

### Boas práticas de desenvolvimento

* [ ] Modularização
* [ ] Nomenclatura / Semântica
* [ ] Linting

***

## 4. Considerações gerais

* Este projeto deve ser feito individualmente.

* A biblioteca e script executável (ferramenta de linha de comando - CLI) devem
  ser implementados em JavaScript para serem executadas com Node.JS. **É permitido
  usar bibliotecas externas**.

* O seu módulo deve ser instalável via `npm install <github-user>/md-links`. O
  módulo deve incluir um _executável_ que pode ser chamado tanto por linha de
  comando, quanto importado com `require` para ser usado em seu código.

* Os testes unitários devem cobrir no mínimo 99,9% dos _statements_, _functions_,
  _lines_ e _branches_. Recomendamos que explore o [Jest](https://jestjs.io/)
  para as suas provas unitárias.

* Neste projeto não é permitido utilizar `async/await`.