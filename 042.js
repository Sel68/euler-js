
// 2k = n^2 + n, n = -1 +- sqrt(1 + 8k)

const fs = require('fs');

const words = fs.readFileSync('042.txt', 'utf-8')
    .split(',')
    .map(w => w.replace(/"/g, ''));

function triNum(n){
    let sq = Math.floor(Math.sqrt(1+8*n));
    return (sq*sq === 1+8*n) && sq%2

}

let cnt = 0;

for (let w of words) {
    let tmp = 0;
    for (let c of w) {
        tmp += c.charCodeAt(0) - 64;
    }
    if (triNum(tmp)) cnt++;
}

console.log(cnt);
