
function fn() {
    const p5 = Array.from({ length: 10 }, (_, i) => i ** 5);
    let total = 0;

    for (let i = 10; i < 1e6; i++) {
        let sum=0, x=i;
        while (x) {
            sum += p5[x % 10];
            x = Math.floor(x/10);
        }
        if (sum===i) total += i;
    }

    return total;
}

console.log(fn())
