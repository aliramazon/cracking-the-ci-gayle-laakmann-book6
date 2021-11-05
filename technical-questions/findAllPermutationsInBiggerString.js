const countChars = (string) => {
    let counter = {};
    for (let i = 0; i < string.length; i++) {
        let ele = string[i];
        if (counter[ele]) {
            counter[ele]++;
        } else {
            counter[ele] = 1;
        }
    }
    return counter;
};

const isPermutation = (str1, str2) => {
    let str1CharsCounter = countChars(str1);
    for (let i = 0; i < str2.length; i++) {
        let ele = str2[i];
        if (!str1CharsCounter[ele]) {
            return false;
        }
        str1CharsCounter[ele]--;
    }

    return Object.values(str1CharsCounter).every((value) => value === 0);
};

// console.log(isPermutation("assbcdd", "dsdcbas"));

const findAllPermutationsInBiggerString = (smaller, larger) => {
    let smallerPermutations = {};
    let maybePermutation;

    for (let i = 0; i <= larger.length - smaller.length; i++) {
        maybePermutation = larger.slice(i, i + smaller.length);
        if (isPermutation(smaller, maybePermutation)) {
            smallerPermutations[i] = maybePermutation;
        }
    }
    return smallerPermutations;
};

console.log(findAllPermutationsInBiggerString("abba", "acdbababbaabbcdak"));
