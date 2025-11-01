const fs = require("fs");

const lines = fs.readFileSync("054.txt", "utf8").trim().split("\n");

const valMap = { '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, T:10, J:11, Q:12, K:13, A:14 };

function fn(vals, suits) {
  const freq = new Map();
  for (let v of vals) freq.set(v, (freq.get(v) || 0) + 1);

  const counts = [...freq.values()].sort((a,b) => b - a);
  const sAsc = [...vals].sort((a,b) => a - b);
  const sDesc = [...vals].sort((a,b) => b - a);
  const uniqueSuits = new Set(suits);

  const isStraight = sAsc.every((v, i, arr) => i === 0 || v === arr[i - 1] + 1);
  const freqEntries = [...freq.entries()];

  if (uniqueSuits.size === 1 && sAsc.join() === [10,11,12,13,14].join()) return [10, sDesc];
  if (uniqueSuits.size === 1 && isStraight) return [9, [sAsc[4]]];
  if (counts.join() === "4,1") {
    const quad = freqEntries.find(([_, c]) => c === 4)[0];
    const kicker = sDesc.find(v => v !== quad);
    return [8, [quad, kicker]];
  }
  if (counts.join() === "3,2") {
    const three = freqEntries.find(([_, c]) => c === 3)[0];
    const pair = freqEntries.find(([_, c]) => c === 2)[0];
    return [7, [three, pair]];
  }
  if (uniqueSuits.size === 1) return [6, sDesc];
  if (isStraight) return [5, [sAsc[4]]];
  if (counts.join() === "3,1,1") {
    const three = freqEntries.find(([_, c]) => c === 3)[0];
    const kickers = sDesc.filter(v => v !== three);
    return [4, [three, ...kickers]];
  }
  if (counts.join() === "2,2,1") {
    const pairs = freqEntries.filter(([_, c]) => c === 2).map(([v]) => v).sort((a,b) => b - a);
    const kicker = sDesc.find(v => !pairs.includes(v));
    return [3, [...pairs, kicker]];
  }
  if (counts.join() === "2,1,1,1") {
    const pair = freqEntries.find(([_, c]) => c === 2)[0];
    const kickers = sDesc.filter(v => v !== pair);
    return [2, [pair, ...kickers]];
  }
  return [1, sDesc];
}

let cnt = 0;

for (let line of lines) {
  const cards = line.trim().split(" ");
  const h1 = cards.slice(0, 5), h2 = cards.slice(5);

  const v1 = h1.map(c => valMap[c[0]]), s1 = h1.map(c => c[1]);
  const v2 = h2.map(c => valMap[c[0]]), s2 = h2.map(c => c[1]);

  const [r1, k1] = fn(v1, s1);
  const [r2, k2] = fn(v2, s2);

  if (r1 > r2) cnt++;
  else if (r1 === r2) {
    for (let i = 0; i < k1.length; i++) {
      if (k1[i] > k2[i]) { cnt++; break; }
      else if (k1[i] < k2[i]) break;
    }
  }
}

console.log(cnt);
