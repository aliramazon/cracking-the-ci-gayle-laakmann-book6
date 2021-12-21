/*
 Implement an algorithm to determine if string has all unique characters. We assume it is ASCII chars. If it is extended ASCII - 256 chars, otherwise 126 chars.
 What if an additional data structure is not used? 
 */

/* Using Hash */
const isUnique = (string) => {
    if (string.length > 256) return false;
    let hash = {};
    for (let char of string) {
        if (hash[char]) {
            return false;
        } else {
            hash[char] = 1;
        }
    }
    return true;
};

/* If we do not an additional data structure, than O(n^2) and O(1) space comlplexity */
