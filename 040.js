
function fn(n) {
    let l = 1, cnt = 9, start = 1;

    while (n > l*cnt) {
        n -= l*cnt;
        l++; start *= 10;
        cnt *= 10;
        
    }

    let num = start + Math.floor((n - 1)/l);
    let digitIndex = (n - 1)%l;
    return parseInt(num.toString()[digitIndex]);
}

let ans = 1;
for (let i = 0; i < 7; i++) {
    ans *= fn(10 ** i);
}
console.log(ans);
