
function sieve(hi = 1e7) {
    const num = Array(hi).fill(true);
    num[0] = num[1] = 0;
    for (let i = 2; i < hi; i++) {
        if (num[i]) {
            for (let j = i * i; j < hi; j += i) {
                num[j] = 0;
            }
        }
    }
    return num;
}

let num = sieve(1e7);
let primes = [];
for (let i = 0; i < num.length; i++) if (num[i]) primes.push(i);
    
console.log(primes.length);

let mx = -1;
for (let i of primes) {
    let s = Array.from({length: i.toString().length}, (_, k) => (k + 1).toString()).join('');
    if ([...i.toString()].sort().join('') === s) mx = i;
    
}
console.log(mx);
