
//let matches = text.match(pattern);

// const fs = require ("fs");

// function mdLinks(){
//   fs.readFile(text,(err,data) =>{


function mdLinks() {
  return new Promise((resolve, reject) => {
    const fs = require('fs');
    const pattern = /\[(.+)\]\(((https|http).+?\S)\)/gm;
    const regText = /(?<=\[).+?\S(?=\])/gm;
    const regHref = /(?<=\()((https|http).+?\S)(?=\))/gm;
    let result;

    fs.readFile('README.md', 'utf8', (err, data) => {
      let arrValues = [];

      // data está OK

      // executa a regex enquanto "der match" dentro do arquivo de leitura
      // adiciona o valor do "match" no array arrValues
      while (result = pattern.exec(data)) {
        arrValues.push(result[0]);
        //console.log(arrValues);
      }

      //console.log(arrValues);

      let teste = arrValues.map((el) => {
        // let text = el.match(regText);
        // let href = el.match(regHref);
        let text = regText.exec(el[0]);
        let href = regHref.exec(el[0]);
          //return {href,text}
          console.log(href,text)
        
      });

      //console.log(teste);

      //resolve(result);
      //reject(console.log(err));
    })
  })
};

mdLinks();
 //module.exports = mdLinks;


