
function fn(k) {
    let digits = [1];
    for (let n=2; n<=k; n++){
        let c = 0;
        for (let i = 0; i < digits.length; i++) {
            let d = digits[i]*n + c;
            digits[i] = d%10; c = Math.floor(d / 10);
        }
        while (c) {
            digits.push(c % 10); c = Math.floor(c / 10);
        }
    }
    return digits.reduce((a, b) => a + b, 0);
}

console.log(fn(100))