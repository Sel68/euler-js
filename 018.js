const fs = require('fs');

const data = fs.readFileSync('018.txt', 'utf-8');

const tri = data.trim().split('\n').map(line =>
  line.trim().split(' ').map(Number)
);
let n = tri.length

const dp = Array.from({length : n}, ()=> Array(n).fill(0));

dp[0][0] = tri[0][0];
for (let i = 1; i<tri.length; i++){
    for (let j = 0; j<=i; j++){
        if (!j) dp[i][j] = tri[i][j]+dp[i-1][j];
        else if (j==i){dp[i][j] = tri[i][j] + dp[i-1][j-1];}
        else dp[i][j] = Math.max(dp[i-1][j-1], dp[i-1][j]) + tri[i][j];
    }
}

console.log(Math.max(...dp[n - 1]));