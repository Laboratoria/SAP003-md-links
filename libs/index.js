const fs = require('fs');
const newArray =[];

const mdLinks = (fileUrl) => {

    return new Promise ( (resolve, reject) => {
        fs.readFile(fileUrl, 'utf8', (err, logData)=>{
            if(err){
                reject('Erro: arquivo não encontrado')
            } else {
                const matchResult = logData.match(/(\[[^\[\]]+\])\(ht*[^\(\)]+\)/g)
                if(matchResult === null){
                    reject('Erro: nenhum link encontrado')
                } else {
                    matchResult.forEach(data => {
                    const regexResult = data.match(/(\[(.*\n.*|.*)\])\((.*)\)/)
                    newArray.push({text: regexResult[2], href: regexResult[3]})
                    })
                }
                resolve(newArray)
            }
        })
    }) 
}

module.exports = mdLinks;