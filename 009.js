
for (let a = 1; a<1000; a++){
    for (let b = a+1; b<1000; b++){
        c = 1000-a-b;
        if (c>b && a**2 + b**2 === c**2 ) {console.log(a*b*c); break;}
    }
}