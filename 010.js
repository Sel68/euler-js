
function sieve(n){
    let isPrime = Array(n).fill(1);
    isPrime[0]=isPrime[1] = 0;
    for (let i = 2; i<=Math.sqrt(n); i++){
        if (isPrime[i]) for (let j = 2*i; j<n; j+=i) isPrime[j] = 0;
    } return isPrime;
}

const N = 2*10**6;
let isPrime = sieve(N), sm  = 0;
for (let i = 2; i<N; i++) if (isPrime[i]) sm+=i;

console.log(sm);
