let ans = 0;

function isPali(n) {
    return n.toString() == n.toString().split('').reverse().join('');
}

for (let i = 1; i < 10**4; i++) {
    let n = i; let f = 0;
    for (let j = 0; j < 51; j++) {
        const rev = Number(n.toString().split('').reverse().join(''));
        n = n + rev;
        if (isPali(n)) { f=1; break; }
    }
    if (!f) ans++;
}

console.log(ans);
