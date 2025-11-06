
function gcd(a,b){
    a = a < 0n? -a : a;
    b = b < 0n? -b : b;
    while(b !== 0n){
        let t = a % b;
        a = b; b = t;  
    }
    return a;
}


let cnt = 0;

let d = 1n, n = 0n;
for (let i = 0; i<1000; i++){
    let newn = d, newd = 2n*d + n;
    let g = gcd(newn, newd);
    newn/=g; newd/=g;
    if ((newn+newd).toString().length > newd.toString().length) cnt++;
    d = newd; n = newn;
}

console.log(cnt);