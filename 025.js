
let a = 1n, b = 1n;
let idx = 2;

while (b.toString().length < 1000) {
    [a, b] = [b, a + b];
    idx++;
}

console.log(idx);
