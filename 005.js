
function gcd(a, b){
    while (b) [a, b] = [b, a%b]; return a;
}

function lcm(a, b){return a*b/gcd(a, b);}

function lcmTill(n){
    a = 1;
    for (let i = 2; i<=n; i++) a = lcm(a, i); return a;
}

console.log(lcmTill(20));