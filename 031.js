
let c = [1, 2, 5, 10, 20, 50, 100, 200];

let dp  = Array(201).fill(0);
dp[0] = 1;

for (let i of c){
    for (let j = i; j <= 200; j++) dp[j] += dp[j - i];
}

console.log(dp[200]);