const fs = require('fs');

const data = fs.readFileSync('022.txt', 'utf-8');
const names = data.trim().split(',').map(name => name.replace(/"/g, '')).sort();

names.sort()
let sm = 0;
for (let i = 0; i < names.length; i++) {
    let val = 0;
    for (let ch of names[i]) {
        val += ch.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    }
    sm += val * (i + 1);
}

console.log(sm);
