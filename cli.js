#!/usr/bin/env node

const mdLinks = require("./libs/index.js");

mdLinks(process.argv[2])
  .then(links => {
   links.map(element => {
        console.log({href: element.href, text: element.text})        
    })
  })
  .catch(console.error);
