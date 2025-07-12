
function isLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const daysInMonth = (month, year) => {
    if (month === 1) return isLeap(year) ? 29 : 28;
    const thirty = [3, 5, 8, 10];
    return thirty.includes(month) ? 30 : 31;
};

let dayOfWeek = 1;
let sundayCount = 0;

for (let m = 0; m < 12; m++) {
    dayOfWeek = (dayOfWeek + daysInMonth(m, 1900)) % 7;
}

for (let year = 1901; year <= 2000; year++) {
    for (let month = 0; month < 12; month++) {
        if (dayOfWeek % 7 === 0) sundayCount++;
        dayOfWeek = (dayOfWeek + daysInMonth(month, year)) % 7;
    }
}

console.log(sundayCount);
