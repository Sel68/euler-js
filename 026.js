

function getCycleLength(d) {
    let rem = 1, pos = 0, seen = new Map();

    while (rem) {
        if (seen.has(rem)) {
            return pos - seen.get(rem);
        }
        seen.set(rem, pos);
        rem = (rem * 10) % d; pos++;
    }

    return 0;
}

let maxLen = 0, result = 0;

for (let d = 2; d < 1000; d++) {
    let len = getCycleLength(d);
    if (len > maxLen) {
        maxLen = len;
        result = d;
    }
}

console.log(result);
