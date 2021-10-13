// O(logN) => base should be 10, but we drop for the sake of BigO
const sumUpDigits = (n) => {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }

    return sum;
};

console.log(sumUpDigits(1234));
console.log(sumUpDigits(104));
console.log(sumUpDigits(14));
console.log(sumUpDigits(0));
console.log(sumUpDigits(10));
console.log(sumUpDigits(3));
