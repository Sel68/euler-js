
let i = 1, N = 10**6-1;
let arr = Array.from({length: 10}, (_, i) => i);

console.log(arr);
let ans = [];

let fact = [1]; for(let i=1; i<10; i++) fact[i] = fact[i-1] * i;

while(N){

    let skips = fact[10-i];
    let num = Math.floor(N/skips);
    N-= (skips*num);
    ans.push(arr[num]); arr.splice(num, 1); i++;
}
if (arr.length > 0) ans.push(...arr);

console.log(ans.join(''));