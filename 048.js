
function binExp(a, b, mod){
    let res = 1n;
    a = BigInt(a); b = BigInt(b);
    while (b){
        if (b & 1n) res = res * a % mod;
        b>>=1n; a = a * a % mod;
    }
    return res;
}

const mod = 10n**10n;
let sm = 0n, n = 1000;
for (let i=1; i<=n; i++){
    sm = (sm+binExp(i,i, mod)) % mod;
}

console.log(sm);