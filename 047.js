
function sieve(n){

    let isPrime = Array(n).fill(0);
    for (let i = 2; i<=Math.sqrt(n); i++){
        if (!isPrime[i]) for (let j = 2*i; j<n; j+=i) isPrime[j]++;
    } return isPrime;
}

let f = sieve(1e6);

for (let i = 1; i<1e6-3; i++){
    if (f[i]===f[i+1] && f[i]===f[i+2] && f[i]===f[i+3] && f[i]===4) {console.log(i); break;}
}