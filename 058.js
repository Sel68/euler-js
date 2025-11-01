// function sieve(n){
//     let isPrime = Array(n).fill(1);
//     isPrime[0] = isPrime[1] = 0;
//     for (let i = 2; i < n; i++) {
//         if (isPrime[i]) {
//             for (let j = 2*i; j < n; j += i) isPrime[j] = 0;
//         }
//     }
//     return isPrime;
// }

// n = 10**7;
// primes = sieve(n);
// checker = Array(n).fill(0);

function checker(n){
    if (n==2) return true;
    if (n%2 == 0) return false;

    for (let i = 3; i<=Math.sqrt(n); i+=1){
        if (n%i == 0) return false;
    }
    return true;
}

let k = 3;
let cnt = 0;

while (true){
    diagCnt =2*k -1;
    let ff = Math.floor(k/2);
    let bleft = k*k - ff*2;
    let tright = (2*ff-1)*(2*ff-1) + 2*ff;
    let tleft = tright+k-1;

    cnt = cnt + checker(bleft) + checker(tright) + checker(tleft);
    if (cnt/diagCnt < 0.1){
        console.log(k); break;
    }
    k+=2;
}

