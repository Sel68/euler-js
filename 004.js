
function isPalindrome(n){
    let n1 = String(n);
    let n2 = n1.split('').reverse().join('');
    return n1 === n2;
}

mx = -1;
for (let i = 100; i<1000; i++){
    for (let j = 100; j<1000; j++){
        if (isPalindrome(i*j)) mx = Math.max(mx, i*j);
    }
}

console.log(mx)

