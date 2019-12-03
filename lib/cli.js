#!/usr/bin/env node

const mdLinks = require ('./index.js');
const path = process.argv[2];
mdLinks(path)
    .then((finalResult) => console.log(finalResult))
    .catch((err) => console.log(err))