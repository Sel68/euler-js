
const fs = require('fs');
const N = fs.readFileSync('008.txt', 'utf8').replace(/\D/g, '');


let mx=-1;

for (let i =0; i<N.length- 13; i++){
    tmp = 1;
    for (let j = i; j<i+13; j++){
        tmp*= parseInt(N[j]);
    } mx = Math.max(mx, tmp);
}

console.log(mx);