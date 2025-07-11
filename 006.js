
sqSum = (n) => n*(n+1)*(2*n+1)/6;
sumOfSq = (n) => (n*(n+1)/2)**2;

n = 100;
console.log(sumOfSq(n)-sqSum(n));