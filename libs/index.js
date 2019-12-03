const fs = require('fs');
const fetch = require("node-fetch");

const mdLinks = (path, option) => {
    
    return new Promise ( (resolve, reject) => {
        fs.readFile(path, 'utf8', (err, logData)=>{
            if(err){
                reject('Erro: arquivo não encontrado')
            } else {
                const matchResult = logData.match(/(\[[^\[\]]+\])\(ht*[^\(\)]+\)/g)
                if(matchResult === null){
                    reject('Erro: nenhum link encontrado')
                } else {
                    const newArray = matchResult.map(data => {
                        const regexResult = data.match(/(\[(.*\n.*|.*)\])\((.*)\)/)
                        return ({href: regexResult[3], text: regexResult[2]})
                    })

                    if(option.validate === true){
                       const promeses = newArray.map(element => {
                          return  fetch(element.href)
                            .then(response => {
                                element.status = response.status
                            })
                            .catch(error => {
                                element.status = 'Page not found'
                            })
                        })

                        Promise.all(promeses)
                        .then(res => resolve(newArray))

                    } else {
                        resolve(newArray)
                    }
                }
                
            }
        })
    }) 
}

module.exports = mdLinks;