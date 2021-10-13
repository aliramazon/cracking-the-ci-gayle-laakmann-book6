// O(logN)
const perfectSqrtOfN = (n) => {
    const calcSqrt = (min, max) => {
        if (min > max) return -1;
        let guess = Math.floor((min + max) / 2);

        if (guess * guess === n) {
            return guess;
        } else if (guess * guess < n) {
            return calcSqrt(guess + 1, max);
        } else {
            return calcSqrt(min, guess - 1);
        }
    };

    return calcSqrt(1, n);
};

console.log(perfectSqrtOfN(1000000));
console.log(perfectSqrtOfN(256));
console.log(perfectSqrtOfN(169));
