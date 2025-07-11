
const fs = require('fs')

const data = fs.readFileSync('013.txt', 'utf8', ).trim().split("\n");

sm = 0;
for (let i of data){
    sm+= Number(i.slice(0, 13));
}
console.log(sm);