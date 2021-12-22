/* 
Given two strings. Check if one is permutation of another one. 
*/

const isAnagrams = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    const hash = {};

    for (let char of str1) {
        if (hash[char]) {
            hash[char]++;
        } else {
            hash[char] = 1;
        }
    }

    for (let char of str2) {
        if (!hash[char]) {
            return false;
        } else {
            hash[char]--;
        }
    }
    return true;
};

/* Time Complaxity O(c), Space Complexity O(c) where is number of chars of either strings */
