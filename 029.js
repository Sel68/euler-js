
let s = new Set();

for (let a = 2; a <= 100; a++) {
    let A = BigInt(a);
    for (let b = 2; b <= 100; b++) {
        let result = A ** BigInt(b);
        s.add(result.toString());
    }
}

console.log(s.size);
