const fs = require('fs');

const mdLinks = (path) =>{
    const links = /([^\[]+)\](\([^\)]*)/gm
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err,data) => {
            if(err) {
                reject("Erro no arquivo ou nao encontrado");
            } else {
            const matches = data.match(links);
            if (matches == null){
                reject("Arquivo sem nenhum links");
            } else {
                const result = matches.map((el) => {
                    const splited = el.split('](');
                    const text = splited[0].replace('\n ','');
                    const href = splited[1]
                    return { href, text }
                });
                resolve(result);
               } 
              }; 
            });  
         });
}; 
module.exports = mdLinks;