// Time Complexity: O(Math.sqrt(num))
const isPrime = (num) => {
    for (let i = 2; i ** 2 < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

console.log(isPrime(13));
console.log(isPrime(133));
console.log(isPrime(121));
