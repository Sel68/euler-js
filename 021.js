const N = 10000;

function sieveDiv(N) {
    let d = Array(N).fill(1);
    d[0] = 0;
    for (let i = 2; i < N; i++) {
        for (let j = i * 2; j < N; j += i) {
            d[j] += i;
        }
    }
    return d;
}

let d = sieveDiv(N);
let sm = 0;

for (let i = 1; i < N; i++) {
    if (d[i] !== i && d[i] < N && d[d[i]] === i) sm += i + d[i];
}

console.log(sm / 2);
