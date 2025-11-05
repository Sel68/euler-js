
function phi(n){
    const phi = Array.from({ length: n }, (_, i) => i);
    for (let i = 2; i < n; i++) {
        if (phi[i]==i) {
            phi[i]--;
            for (let j = 2*i; j < n; j += i){
                phi[j]/= i; phi[j]*= (i-1);
            } 
        }
    }
    return phi;
}

const n = 10**7;
let phis = phi(n), mn = 2;
let ans;

for (let i = 2; i<n; i++){
    let iSorted = i.toString().split('').sort().join('');
    let phiSorted = phis[i].toString().split('').sort().join('');
    if (iSorted == phiSorted){
        if (mn > i/phis[i]){
            mn = i/phis[i]; ans = i;
        }
    }
}
console.log(mn, ans);