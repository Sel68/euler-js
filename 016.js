
function fn(n) {
    let digits = [1];
    while (n--) {
        let c = 0;
        for (let i = 0; i < digits.length; i++) {
            let d = digits[i]*2 + c;
            digits[i] = d%10; c = Math.floor(d / 10);
        }
        while (c) {
            digits.push(c % 10); c = Math.floor(c / 10);
        }
    }
    return digits.reduce((a, b) => a + b, 0);
}

console.log(fn(1000))