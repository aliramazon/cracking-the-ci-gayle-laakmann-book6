// O(b) as recursive call iterates through b calls
const aToTheBthPower = (a, b) => {
    if (b < 0) {
        return 0;
    } else if (b === 0) {
        return 1;
    } else {
        return a * aToTheBthPower(a, b - 1);
    }
};

console.log(aToTheBthPower(3, 5));
