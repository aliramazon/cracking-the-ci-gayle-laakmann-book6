/* Given a string. Check if it is permutation of palindrome. */

const isPalindromePermutation = (string) => {
    let charCounter = {};

    for (let char of string) {
        let lowercaseChar = char.toLowerCase();
        let asciiCode = lowercaseChar.charCodeAt();

        if (asciiCode >= 97 && asciiCode <= 122) {
            if (charCounter[lowercaseChar]) {
                charCounter[lowercaseChar]++;
            } else {
                charCounter[lowercaseChar] = 1;
            }
        }
    }
    let oddLetterCounter = 0;
    for (let count of Object.values(charCounter)) {
        if (count % 2 === 1) oddLetterCounter++;
        if (oddLetterCounter === 2) return false;
    }

    return true;
};

const isPalindromePermutation1 = (string) => {
    let charCounter = {};
    let oddLetterCounter = 0;

    for (let char of string) {
        let lowercaseChar = char.toLowerCase();
        let asciiCode = lowercaseChar.charCodeAt();

        if (asciiCode >= 97 && asciiCode <= 122) {
            if (charCounter[lowercaseChar]) {
                charCounter[lowercaseChar]++;
            } else {
                charCounter[lowercaseChar] = 1;
            }

            if (charCounter[lowercaseChar] % 2 === 1) {
                oddLetterCounter++;
            } else {
                oddLetterCounter--;
            }
        }
    }

    return oddLetterCounter <= 1;
};
