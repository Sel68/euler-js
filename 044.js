
function pent(n){
    let sq = Math.floor(Math.sqrt(1+24*n));
    return (sq%6===5 && sq*sq===1+24*n);
}

function fn(n){return n*(3*n-1)/2;}


for (let i = 2; i<1e6; i++){
    for (let j = 1; j<i; j++){
        let a = fn(i), b = fn(j);
        if (pent(Math.abs(a-b)) && pent(a+b)) {console.log(Math.abs(a-b)); return; }        
    }
}