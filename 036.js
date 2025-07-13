
console.log(Math.log2(1e6))

function pali(n, b) {
    let s = n.toString(b);
    return s === [...s].reverse().join('');
}

let sm = 0;
for (let i=1; i<1e6; i++) {
    if (pali(i, 10) && pali(i, 2)) sm+=i;
}

console.log(sm);


