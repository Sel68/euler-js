
let cnt = 0n;

for (let n = 1n; n <= 21n; n++) {
    for (let d = 1n; d < 10n; d++) {
        if ((d ** n).toString().length == n) cnt++;
    }
}

console.log(cnt);
