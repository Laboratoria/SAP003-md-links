const text = /home/laboratoria/Lab/SAP003-md-links/README.md
const pattern = /\[(.+)\]|\((.+)\)/gm
let result = "";
//let matches = text.match(pattern);

function mdLinks (text,pattern){
  while(result = pattern.exec(text)){
    console.log(result)
 }
}

mdLinks();