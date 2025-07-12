
function sieve(n){

    let isPrime = Array(n).fill(1);
    isPrime[0]=isPrime[1] = 0;
    for (let i = 2; i<=Math.sqrt(n); i++){
        if (isPrime[i]) for (let j = 2*i; j<n; j+=i) isPrime[j] = 0;
    } return isPrime;
}

primes = sieve(100000);
primes = new Set(primes.map((v, i) => v ? i : 0).filter(v => v !== 0));

let mx = -1, ans;
for (let i = -999; i<1000; i++){
    for (let j = -1000; j<=1000; j++){
        let n = 0;
        while (primes.has(n*n + i*n + j)) n++
        if (n>mx){mx = n; ans = i*j};
    }
}

console.log(ans);