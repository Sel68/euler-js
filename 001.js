

const arith = (a, d, n) => n*(2*a + (n-1)*d)/2

const n3 = Math.floor(999/3);
const n5 = Math.floor(999/5);
const n15 = Math.floor(999/15);

const sm = arith(3, 3, n3) + arith(5, 5, n5) - arith(15, 15, n15);

console.log(sm)
