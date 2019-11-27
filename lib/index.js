 const text = 'README.md';
 const pattern = /\[(.+)\]|\((.+)\)/gm;
 let result = pattern.exec(data);
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

const fs = require('fs');

fs.readFile('README.md', 'utf8', (err,data) => {
  if (err){
    console.log(err)
  } else {
     pattern.exec(data) = result;
     console.log(result);
  }
})
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
    

