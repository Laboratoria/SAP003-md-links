#!/usr/bin/env node

const mdLinks = require("./libs/index.js");
const path = process.argv[2]
let option = process.argv[3]

option ===  '--validate'? option = {validate: true} : option = {validate: false}

mdLinks(path, option)
  .then(links => {
    console.log(links)
  })
  .catch(console.error);