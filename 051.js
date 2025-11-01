function sieve(n){
    let isPrime = Array(n).fill(1);
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            for (let j = 2*i; j < n; j += i) isPrime[j] = 0;
        }
    }
    return isPrime;
}

const n = 10**6;
const primes = sieve(n);

for (let p = 2; p<n; p+=1){
    if (!primes[p]) continue;

    const s = String(p); const l = s.length;
    const mxMask = 1<<l;
    let f = 0;
    for (let mask = 1; mask < mxMask; mask++){
        let cnt = 0, ans = 0;
        for (let d = 0; d <= 9; d++){
            if ((mask & 1) && d === 0) continue;

            const arr = s.split('');
            for (let i = 0; i < l; i++){
                if (mask & (1<<i)) arr[i] = String(d);
            }
            const cand = Number(arr.join(''));

            if (primes[cand]){
                cnt++;
                if (!ans) ans = cand;
            }
        }
        if (cnt >= 8){
            console.log(ans); f =1 ;
            break;
        }
    }
    if (f) break;
}



