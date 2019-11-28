const fs = require('fs');

const mdLinks = () =>{
    const links = /\[(.*)\]\((.*)\)/gm
    const replaceBrackets = /\[/
    const repalceParentheses = /\)/
    return new Promise((resolve, reject) => {
        fs.readFile('README.md', 'utf8',  (err,data) => {
            if(err) {
                reject(err);
            } else {
            const matches = data.match(links)
            const result = matches.map((el) => {
                  const splited = el.split('](');
                  const text = splited[0].replace(replaceBrackets,'');
                  const href = splited[1].replace(repalceParentheses, '');
                 
                  return { href, text }
                });
                resolve(result);
                }; 
            });  
    });
};        
            

//         console.error("Could not open file: %s", err);
//         process.exit(1);
//     }
	
// 	console.log(data.toString('utf8'));
// });

 module.exports = mdLinks;