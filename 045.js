
function pent(n){
    let sq = Math.floor(Math.sqrt(1+24*n));
    return (sq%6===5 && sq*sq===1+24*n);
}

function hex(n){
    let sq = Math.floor(Math.sqrt(1+8*n));
    return (sq%4===3 && sq*sq===1+8*n);
}

for (let i = 286; i<1e6; i++){
    let t = i*(i+1)/2;
    if (hex(t) & pent(t)){console.log(t); return; }
}