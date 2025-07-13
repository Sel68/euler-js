
function fn() {
    const fact = Array(10).fill(1);
    for (let i=2; i<10; i++) fact[i] = i*fact[i-1];
    let total = 0;

    for (let i = 10; i < 1e6; i++) {
        let sum=0, x=i;
        while (x) {
            sum += fact[x % 10];
            x = Math.floor(x/10);
        }
        if (sum===i) total += i;
    }

    return total;
}

console.log(fn())
