/* 
Write a method to raplace all spaces in string with %20
 * @param string str
 * @param number trueLength
*/

const urilify = (str, trueLength) => {
    let spaceCounter = 0;
    let chars = str.split("");
    for (let i = 0; i < trueLength; i++) {
        if (str[i] === " ") {
            spaceCounter++;
        }
    }
    let newIdx = trueLength - 1 + spaceCounter * 2;

    for (let oldIdx = trueLength - 1; oldIdx >= 0; oldIdx--) {
        if (str[oldIdx] === " ") {
            [chars[newIdx], chars[newIdx - 1], chars[newIdx - 2]] = [
                "0",
                "2",
                "%"
            ];
            newIdx -= 3;
        } else {
            chars[newIdx] = str[oldIdx];
            newIdx--;
        }
    }
    return chars.join("");
};
/*Time Complexity O(n), Space complexity O(n) */
console.log(urilify("abc  def      ", 8));
