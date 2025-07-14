function sieve(n){
    let isPrime = Array(n).fill(0);
    let primes = [];
    for (let i = 2; i < n; i++) {
        if (!isPrime[i]) {
            primes.push(i);
            for (let j = 2*i; j < n; j += i) isPrime[j] = 1;
        }
    }
    return [primes, new Set(primes)];
}

const [primes, primeSet] = sieve(1e6);
const pref = primes.slice();

for (let i = 1; i < pref.length; i++) pref[i] += pref[i-1];

let mx = 0, mxp = 0;

for (let i = 0; i < pref.length; i++) {
    for (let j = i-mx-1; j >= 0; j--) {
        let sum = pref[i] - (j > 0 ? pref[j - 1] : 0);
        if (sum >= 1e6) break;
        if (primeSet.has(sum)) {
            mx = i - j + 1; mxp = sum;
        }
    }
}

console.log(mxp, mx);
