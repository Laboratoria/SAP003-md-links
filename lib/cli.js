#!/usr/bin/env node

const mdLinks = require('./index.js');
    const path = process.argv[2];

      .then((result) => result.forEach(e =>{
          if(e.text.length < 47){
              console.log(e.link, "-->", e.text.substring(0,50))
          }
          else{
            console.log(e.link, "-->", e.text.substring(0,47)+ '...')

          }
      }))
      .catch(console.log(err); 
    