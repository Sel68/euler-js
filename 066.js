
function contFrac(n){
    let a0 = Math.floor(Math.sqrt(n));
    if (a0*a0 == n) return [];
    
    let m = 0, d = 1, a = a0;
    let expansion = [a0];
    while (1){
        m = d*a - m;
        d = (n - m*m) / d;
        a = Math.floor((a0 + m)/ d); expansion.push(a);
        if (a == 2*a0) break;
    }
    return expansion;
}

let mx = 0n;
let ans = 0;
for (let D = 1; D <= 1000; D++){
    let expansion = contFrac(D);
    if (!expansion.length) continue;

    let period = expansion.length - 1;
    let seq;
    if (period % 2 == 0) {
        seq = expansion.slice();
    } else {
        seq = expansion.slice(0, -1).concat(expansion.slice(1));
    }

    let p = [1n, BigInt(seq[0])];
    for (let i = 1; i < seq.length; i++){
        const a = BigInt(seq[i]);
        p.push(a * p[p.length-1] + p[p.length-2]);
    }

    let x = p[p.length-1];
    if (x>mx){
        mx = x; ans = D;
    }
}

console.log(ans);
