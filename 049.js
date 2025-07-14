function sieve(limit) {
    const isPrime = Array(limit).fill(true);
    isPrime[0] = isPrime[1] = 0;
    const primes = new Set();
    for (let i = 2; i < limit; i++) {
        if (isPrime[i]) {
            primes.add(i);
            for (let j = i * 2; j < limit; j += i) isPrime[j] = 0;
        }
    }
    return primes;
}

function isValid(a, b, c, primes) {
    if (!primes.has(a) || !primes.has(b) || !primes.has(c)) return false;
    const sa = [...String(a)].sort().join('');
    const sb = [...String(b)].sort().join('');
    const sc = [...String(c)].sort().join('');
    return sa === sb && sb === sc;
}

const primes = sieve(10000);
let f = 0;

for (let a = 1000; a < 10000; a++) {
    for (let d = 1; d < 4500; d++) {
        const b = a + d;
        const c = a + 2 * d;
        if (c > 9999) break;
        if (isValid(a, b, c, primes)) {
            console.log(`${a}${b}${c}`);
            f++;
            break;
        }
    }
    if (f === 2) break;
}
