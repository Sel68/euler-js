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

cnt = 0;
for (let i = 0; i<=10000; i++){
    exp = contFrac(i);
    if (exp.length && exp.length%2 ==0) cnt++;
}

console.log(cnt);