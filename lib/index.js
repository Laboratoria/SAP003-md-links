function mdLinks(path) {
  return new Promise((resolve, reject) => {
    const fs = require('fs');

    //const pattern = /\[(.+)\]\(((https|http).+?\S)\)/gm;
    const pattern = /\[([^\s].*)\]\((http[s]?:\/\/[^\)].*)\)/gm;

    const regText = /(?<=\[).+?\S(?=\])/gm;
    const regHref = /(?<=\()((https|http).+?\S)(?=\))/gm;

    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject (err)
      } else {
        const arrValues = data.match(pattern);
  
        let finalResult = [];
        arrValues.forEach((el) => {
          let text = el.match(regText)[0];
          let href = el.match(regHref)[0];
  
          finalResult.push({ 'text': text, 'href': href });
        });
  
        resolve(finalResult);
      }
    })
  })
};

 module.exports = mdLinks;
