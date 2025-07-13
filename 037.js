
function sieve(n){
    const primes = [];
    const isPrime = Array(n).fill(true);
    isPrime[0] = isPrime[1] = false;
    
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            primes.push(i);
            for (let j = i * i; j < n; j += i) isPrime[j] = false;
        }
    }
    return primes;
}
let primes2 = sieve(1e6);
let primes = new Set(primes2);
let cnt = 0, sm = 0;

function fn(n) {
    let s = n.toString();
    for (let i = s.length; i > 0; i--) 
        if (!primes.has(parseInt(s.slice(0, i)))) return false;
    
    for (let i = 1; i < s.length; i++) 
        if (!primes.has(parseInt(s.slice(i)))) return false;
    
    return true;
}

for (let p of primes2){
    if (p < 10) continue;
    if (fn(p)) {
        cnt++; sm += p;
        if (cnt == 11) break;
    }
}

console.log(sm);
