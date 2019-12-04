# Markdown Links


[Markdown](https://pt.wikipedia.org/wiki/Markdown) é uma linguagem de marcação
muito popular entre os programadores. Os arquivos `Markdown` normalmente contém _links_ que muitas vezes estão
quebrados, ou que já não são válidos e isso prejudica muito o valor da
informação que está ali.

Uma comunidade open source nos propôs criar uma ferramenta, usando
[Node.js](https://nodejs.org/), que leia e analise arquivos no formato
`Markdown`, para verificar os arquivos que contenham links e mostrar algumas
estatísticas.

Foi, então, criado uma biblioteca e script executável (ferramenta de linha de comando - CLI) implementados em JavaScript para serem executadas com Node.JS.

### Guia
#### Como instalar

 ```shell
$ npm install -g elaineshimabukuro/SAP003-md-links
```

Para executar esta biblioteca você deverá ter o node e npm instalados.

 É instalável via `npm install`, incluindo um _executável_ que pode ser chamado tanto por linha de
  comando, quanto importado com `require` para ser usado em seu código.


##### Argumento

* `path`: Rota absoluta ou relativa ao arquivo. Se a rota passada é
  relativa, deve resolver como sendo relativa ao diretório onde foi chamada -
  _current working directory_

##### Valor de retorno

A função deve retornar uma promessa (`Promise`) que resolve um array (`Array`) e
objetos(`Object`), onde cada objeto representa um link, contendo as seguintes
propriedades:

* `href`: URL encontrada.
* `text`: Texto dentro do markdown.

#### Como utilizar

```js
const mdLinks = require("md-links");

mdLinks("./example.md")
  .then(links => {
    // => [{text,href }]
  })
  .catch(console.error);
```

### CLI (Command Line Interface - Interface de Linha de Comando)

O executável da aplicação pode ser executado da seguinte maneira,
através do terminal:

`md-links <path-to-file>`





