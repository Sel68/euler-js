
function divCount(n){
    let cnt = 0;
    for (let d = 1; d<=Math.sqrt(n); d++){
        if (n%d==0){
            if (d*d != n) cnt+=2; else cnt++;
        }
    } return cnt;
}

for (let i = 1; i; i++){
    if (divCount(i*(i+1)/2) > 500) {console.log(i*(i+1)/2); break;}
}