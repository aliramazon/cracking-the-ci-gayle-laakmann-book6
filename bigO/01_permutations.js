const permutations = (string) => {
    let collection = [];
    if (string.length === 0) return [string];
    let subStringPermutations = permutations(string.slice(1));

    for (let subStringPermutation of subStringPermutations) {
        for (let i = 0; i < string.length; i++) {
            let chars = subStringPermutation.split("");
            chars.splice(i, 0, string[0]);
            collection.push(chars.join(""));
        }
    }

    return collection;
};

const permutations1 = (string) => {
    let collection = [];

    const permutate = (string, prefix) => {
        if (string.length === 0) {
            collection.push(prefix);
        } else {
            for (let i = 0; i < string.length; i++) {
                let rem = string.slice(0, i) + string.slice(i + 1);
                permutate(rem, prefix + string[i]);
            }
        }
    };

    permutate(string, "");
    return collection;
};

let j = 0;
const printPermutations = (string, prefix) => {
    j += 1;
    if (string.length === 0) {
        console.log(prefix);
    } else {
        for (let i = 0; i < string.length; i++) {
            let rem = string.slice(0, i) + string.slice(i + 1);
            printPermutations(rem, prefix + string[i]);
        }
    }
};

printPermutations("abcd", "");
console.log(j);

console.log(permutations("abcd").length);
console.log(permutations("abcde").length);
