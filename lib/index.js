// const text = 'README.md';

 //let result = [];
 //let matches = text.match(pattern);

// const fs = require ("fs");

// function mdLinks(){
//   fs.readFile(text,(err,data) =>{

//   })

//   .then{ 
//     while(result = pattern.exec(text)){
//     console.log(result)
//     }
//   }
// }

// mdLinks();

function mdLinks() {
  return new Promise((resolve, reject) => {
    const fs = require('fs');
    const pattern = /\[(.+)\]|\((.+)\)/gm;
    //let newText = pattern.exec(read);
    let result;

    fs.readFile('README.md', 'utf8', (err,data) => {
       result = pattern.exec(data)
       console.log(result)
    //   while (result === null) { 
    //     console.log(result)
    // //     if (result.index === pattern.lastIndex) {
    // //       pattern.lastIndex++;
    // //   }    result.forEach((match, groupIndex) => {
            
    // // });
    // }
      resolve (result)

      reject(console.log(err))
  })
})
                      
     
  };
    mdLinks();
 //module.exports = mdLinks;


// function mdLinks(){
//   const text = 'README.md'
//   const pattern = /\[(.+)\]|\((.+)\)/gm;

//   while (pattern.exec(text))
// }



//  .then(data => {
//       while(result = pattern.exec(text)){
//        console.log(result['input'])
//      }});


// function mdLinks(){
//   return new Promise((resolve, reject)=>{
//     const fs = require('fs');
//     const resultado = [];
//     const read = fs.readFile('README.md', 'utf8', (err,data) => {
//       if (err){
//         console.log(err)
//       } else {
//         console.log(data)
//       }
//      }).then

//   })

// }

// module.exports= mdLinks;

//  .then(data => {
//       while(result = pattern.exec(README.md)){
//        console.log(result)
//      })}
//  .catch(console.error);
    

