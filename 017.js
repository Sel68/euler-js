const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", 
    "eighteen", "nineteen"];

const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

function toWords(n) {
    if (n < 20) return ones[n];
    if (n < 100) return tens[Math.floor(n / 10)] + " " + ones[n % 10];
    if (n < 1000) {
    if (n % 100 === 0) return ones[Math.floor(n / 100)] + " hundred";
    return ones[Math.floor(n / 100)] + " hundred and " + toWords(n % 100);
    }
    if (n < 10000) return ones[Math.floor(n / 1000)] + " thousand " + toWords(n % 1000);
    if (n < 1e5) return toWords(Math.floor(n / 1000)) + " thousand " + toWords(n % 1000);
    if (n < 1e6) return ones[Math.floor(n / 100000)] + " hundred " + toWords(n % 100000);
    if (n < 1e7) return ones[Math.floor(n / 1e6)] + " million " + toWords(n % 1e6);
}

let sm = 0;
for (let i = 1; i <= 1000; i++) {
    let w = toWords(i).replace(/ /g, "");
    sm += w.length;
}
console.log(sm);
