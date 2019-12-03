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

        //console.log(arrValues);
  
        let finalResult = [];
        arrValues.forEach((el) => {
          // console.log(el);
  
          let text = el.match(regText)[0];
          let href = el.match(regHref)[0];
  
          // console.log('texto >>', text);
          // console.log('links >>', href);
          finalResult.push({ 'text': text, 'href': href });
        });
  
        //console.log(finalResult);
  
        resolve(finalResult);
      }
    })
  })
};

//mdLinks();
 module.exports = mdLinks;
