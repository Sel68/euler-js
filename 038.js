
let digits = [];
for (let i = 1; i <= 9; i++) digits.push(i.toString());

let mx = 0;
for (let i = 1; i < 1e5; i++) {
    let s = i.toString();
    let j = 2;
    while (s.length < 10) {
        s += (i * j).toString();
        j++;
        if (s.length === 9 && [...s].sort().join('') === digits.join('')) {
            mx = Math.max(mx, parseInt(s)); break;
            
        }
    }
}

console.log(mx);
