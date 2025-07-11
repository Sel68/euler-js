
function sieve(n){

    let isPrime = Array(n).fill(1);
    isPrime[0]=isPrime[1] = 0;
    for (let i = 2; i<=Math.sqrt(n); i++){
        if (isPrime[i]) for (let j = 2*i; j<n; j+=i) isPrime[j] = 0;
    } return isPrime;
}


let isPrime = sieve(10**6);
cnt = 0;
for (let i = 0; i<10**6; i++){
    if (isPrime[i] && ++cnt === 10001) { console.log(i); break;
    }
    
}