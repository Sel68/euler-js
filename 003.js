const N = 600851475143;

function primeFactors(n){
    
    const fact = [];
    let d = 2;
    while (n){
        if (n%d===0){
            fact.push(d);
            while(n%d===0) n/=d;            
        }
        d+=1;
        if (d*d>n && n>1) {fact.push(n); return fact;}
    }
}

fact = primeFactors(N);

console.log(fact)