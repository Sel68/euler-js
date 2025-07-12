const N = 28123;

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

function abundantNumbers(N) {
    const d = sieveDiv(N);
    const abundant = [];
    for (let i = 1; i < N; i++) {
        if (d[i] > i) abundant.push(i);
    }
    return abundant;
}

let s = new Set(), a = abundantNumbers(N);

for (let i = 0; i<a.length; i++) {
    for (let j = i; j<a.length; j++) {
        if (a[i]+a[j] <= N) s.add(a[i]+a[j]);
        else break;
    }
}

let sm = (1+N)*N/2;
for (i of s) sm-=i;

console.log(sm);