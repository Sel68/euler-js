
function sieve(n){
    const primes = [];
    const isPrime = Array(n).fill(true);
    isPrime[0] = isPrime[1] = false;
    
    for (let i = 2; i<n; i++) {
        if (isPrime[i]) {
            primes.push(i);
            for (let j = i * i; j <= n; j += i) isPrime[j] = false;
        }
    }
    return primes;
}

function fn(n) {
    let s = n.toString(), res = [];
    for (let i = 0; i < s.length; i++) res.push(parseInt(s.slice(i) + s.slice(0, i)));
    
    return res;
}

let primes = sieve(1000000);
let s = new Set(primes);

let sm = 0;
for (let p of primes){
    let rotations = fn(p);
    if (rotations.every(x => s.has(x))) sm++;

}

console.log(sm);

