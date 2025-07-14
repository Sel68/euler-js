

function sieve(n){

    let isPrime = Array(n).fill(1);
    isPrime[0]=isPrime[1] = 0;
    for (let i = 2; i<=Math.sqrt(n); i++){
        if (isPrime[i]) for (let j = 2*i; j<n; j+=i) isPrime[j] = 0;
    } return isPrime;
}
const N = 1e6;
let primes = sieve(N);
let ans = 9;

while (true) {
    let flag = true;

    if (!primes[ans]) {
        flag = false;
        for (let j = 1; j * j * 2 < ans; j++) {
            if (primes[ans - 2 * j * j]) {
                flag = true; break;
           }
        }
    }

    if (!flag) {
        console.log(ans);break;
    }ans += 2;
}
