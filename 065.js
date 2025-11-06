function gcd(a,b){
    a = a < 0n? -a : a;
    b = b < 0n? -b : b;
    while(b !== 0n){
        let t = a % b;
        a = b; b = t;
    }
    return a;
}

let d = [1n, 1n, 3n], n = [2n, 3n, 8n];

for (let i = 4; i<=100; i++){
    const k = (i%3 == 0) ? 2n * BigInt(i/3) : 1n;
    n.push(n[n.length-1]*k + n[n.length-2]);
    d.push(d[d.length-1]*k + d[d.length-2]);

    // let g = gcd(n[n.length-1], d[d.length-1]);
    // n[n.length-1]/=g; d[d.length-1]/=g;
}

let sm = 0n;

for (const ch of n[99].toString()) sm += BigInt(ch);

console.log(sm.toString());


