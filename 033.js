
function gcd(a, b) {
    while (b) {
        [a, b] = [b, a%b];
    }
    return a;
}

s = new Set();

let num=1, den =1, cnt = 0;
for (let i = 10; i<100; i++){
    for (let j = i+1; j<100; j++){
        
        if (i%10==0 || j%10==0) continue;
        let si = [...(i.toString())], sj = [...(j.toString())];
        if ([...si].sort() == [...sj].sort()) continue;

        for (let d of si){
            if (sj.includes(d)){
                si.splice(si.indexOf(d), 1); sj.splice(sj.indexOf(d), 1);

                if (i*parseInt(sj[0])===j*parseInt(si[0])){
                    cnt++; num*=i; den*=j; 
                   
                }

            }

        }
        
    }

}
console.log(cnt, num, den);
let g = gcd(num, den); console.log(den/g);
