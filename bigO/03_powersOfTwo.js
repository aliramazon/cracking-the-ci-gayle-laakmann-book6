/* O(logN) */

const powersOfTwo = (n) => {
    let powers = [];
    let power = 1;
    while (power <= n) {
        powers.push(power);
        power *= 2;
    }
    return powers;
};

const powersOfTwoRecursion = (n) => {
    let powers = [];

    const calculatePower = (n) => {
        if (n < 1) return 0;
        if (n === 1) {
            powers.push(n);
            return 1;
        } else {
            let prev = calculatePower(Math.floor(n / 2));
            let current = prev * 2;
            powers.push(current);
            return current;
        }
    };
    calculatePower(n);
    return powers;
};

console.log(powersOfTwoRecursion(50));
