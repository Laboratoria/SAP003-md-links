#!/usr/bin/env node
const mdLinks = require('./index.js');

// mdLinks(process.argv)
    

    mdLinks()
      .then((result) => console.log(result))
      .catch((err) => console.log(err)) 
    