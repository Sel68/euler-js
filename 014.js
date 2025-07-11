
const m = new Map();
m.set(1, 1);

// function collatz(n){
//     if (n==1) return 1;
//     if (m.has(n)) return m.get(n);

//     let res;
//     if (n&1) res = 1 + collatz(3*n + 1);
//     else res = 1+collatz(n>>1);

//     m.set(n, res); return res;
// }

let mx = 1, ans = 1;
for (let i = 2; i<1e6; i++){
    let curr = 0, n = i;
    while (n!==1){
        if (m.has(n)) {curr+=m.get(n); break;}
        curr++;
        if (n&1) n = 3*n+1;
        else n=n/2;
    }m.set(i, curr);
    if (curr > mx){ans = i; mx = curr;} 
}

console.log(ans, mx);
