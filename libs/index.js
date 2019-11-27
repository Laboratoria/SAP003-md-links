const fs = require('fs');
const fileUrl = ''
const newarray =[];
//./README.md

const mdLinks = (fileUrl) => {

    return new Promise ( (resolve, reject) => {

        if (!fileUrl){
            reject('Erro: arquivo não encontrado')
        } else {
            fs.readFile(fileUrl, 'utf8', (err, logData)=>{
                if(err) throw (err)
                const matchResult = logData.match(/(\[[^\[\]]+\])\(ht*[^\(\)]+\)/g)
                    matchResult.forEach(data => {
                        const regexResult = data.match(/(\[(.*\n.*|.*)\])\((.*)\)/)
                        newarray.push({text: regexResult[2], href: regexResult[3]})
                })
                resolve(newarray)
            })
        }
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))
    
}

mdLinks(fileUrl)


// const fileData = fs.readFile(fileUrl, 'utf8', (err, logData)=>{
//     if(err) throw console.log(err)
//     const matchResult = logData.match(/(\[[^\[\]]+\])\(ht*[^\(\)]+\)/g)
//     matchResult.forEach(data => {
//         const regexResult = data.match(/(\[(.*\n.*|.*)\])\((.*)\)/)
//         newarray.push({text: regexResult[2], href: regexResult[3]})
//     })
//     console.log(newarray)
//     });


//(\[(.*)\])\(http[s]?.*\)|(\[(.*\n.*)\])\((http[s]?.*)\)
//(\[[^\[\]]+\])\([^\(\)]+\)