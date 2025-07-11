const fs = require('fs');

const data = fs.readFileSync('011.txt', 'utf8');
const grid = data.trim().split('\n').map(line =>
    line.trim().split(/\s+/).map(Number)
);

function fn(i, j){
    let mx = -1;
    if(i<17){
        let tmp = 1; for (let c=i; c<i+4; c++) tmp*=grid[c][j];
        mx = Math.max(mx, tmp);
    }
    if(j<17){
        let tmp = 1; for (let c=j; c<j+4; c++) tmp*=grid[i][c];
        mx = Math.max(mx, tmp);
    }
    if (j<17 && i<17){
        let tmp = 1; for (let c=0; c<4; c++) tmp*=grid[i+c][j+c];
        mx = Math.max(tmp, mx);
    }
    if (j>=3 && i<17){
        let tmp = 1; for (let c = 0; c<4; c++) tmp*= grid[i+c][j-c];
        mx = Math.max(tmp, mx);
    }
    return mx;
}

let mx = -1;
for (let i = 0; i<20; i++){
    for (let j=0; j<20; j++) mx = Math.max(mx, fn(i, j));
}

console.log(mx);
