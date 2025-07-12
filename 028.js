
let sm = 0;
for (let i = 3; i <= 1001; i += 2) {
    sm += 4*i*i - 6*i + 6;
}
console.log(sm + 1);
