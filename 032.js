
const s = new Set();

for (let i=1; i < 1e4; i++) {
    for (let j=1; j < 1e3; j++) {
        const prod = i * j;
        const str = '' + i + j + prod;
        if (str.length === 9 && [...str].sort().join('') === '123456789') {
            s.add(prod);
        }
    }
}

let sum = 0;
for (const val of s) sum += val;

console.log(sum);
