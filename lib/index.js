const fs = require("fs");

const mdLinks = (path) => {
  const regex = /([^[]+)\](\([^)]*)/gm;
  return new Promise ((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject("Arquivo não encontrado");
      } else {
        const combined = data.match(regex);
        if (combined == null) {
          reject("Links não encontrados");
        } else {
          const result = combined.map((e) => {
            const split = e.split("](");
            const text = split[0].replace("\n ", "");
            const link = split[1];
          
            return {text, link};
          });
          resolve(result);
        }
      }   
    }
    );
  });

};
module.exports = mdLinks;