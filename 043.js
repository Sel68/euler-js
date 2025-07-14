
function* permute(arr, n = arr.length) {
    if (n<=1) yield arr.slice();
    else {
        for (let i = 0; i < n; i++) {
            yield* permute(arr, n - 1);
            const j = n%2 ? 0:i;
            [arr[n - 1], arr[j]] = [arr[j], arr[n - 1]];
        }
    }
}

const primes = [2, 3, 5, 7, 11, 13, 17];
let cnt = 0;

for (const p of permute([...Array(10).keys()])) {
    if (p[0] === 0) continue;

    let s = p.join('');
    let ok = true;

    for (let i=1; i <= 7; i++) {
        let sub = Number(s.slice(i, i + 3));
        if (sub % primes[i - 1] !== 0) {
            ok = false;
            break;
        }
    }
    if (ok) cnt += Number(s);
}

console.log(cnt);
