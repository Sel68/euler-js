function comb(n, k) {
    if (k > n) return 0;
    if (k === 0 || k === n) return 1;
    let res = 1;
    for (let i = 1; i <= k; i++) {
        res *= (n-i+1);
        res /= i;
    }
    return res;
}

let ans = 0;
for (let i = 1; i <= 100; i++) {
    for (let j = 0; j <= i; j++) 
        if (comb(i, j) > 1e6) ans++;
}

console.log(ans);
