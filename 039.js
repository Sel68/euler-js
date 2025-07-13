
let mx = -1, mxp = -1;
for (let p = 6; p<=1000; p++){

    let cnt = 0;
    for (let a=1; a<p; a++){
        for (let b = a+1; b<p; b++){
            let c = p - a- b; if (c<=b) continue;
            if (a*a + b*b === c*c) cnt++;
        }
    }
    if (mx <cnt){mx = cnt; mxp = p;}
}

console.log(mxp, mx);