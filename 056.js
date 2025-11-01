
function f(n){
    let sm = 0n;
    for (let p of n.toString()){
        sm += BigInt(p);
    }
    return sm;
}

let mx = -1n;
for (let a = 2n; a < 100n; a++){
    for (let b = 2n; b < 100n; b++){
        mx = mx > f(a**b) ? mx : f(a ** b);
    }
}

console.log(mx);
