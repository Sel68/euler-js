
let n = 100, m = 100;
let dp = Array.from({ length: n + 1 }, () => Array(m).fill(0));

for (let i = 0; i<m; i++) dp[0][i] = 1;

for (let i = 1; i<=100; i++){
    for (let j = 1; j<m; j++){
        dp[i][j] += dp[i][j-1];
        if (i-j >= 0) dp[i][j]+=dp[i-j][j];
    }
}

console.log(dp[100][99]);


