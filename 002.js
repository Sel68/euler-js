
let a=1, b=2, sm = 0;

while (b<= 4e6){
    if (!(b%2)) sm+= b;
    let tmp = b;
    b+=a;
    a=tmp;
}

console.log(sm)