const convertFromBase = (number, base) => {
    let hex = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15
    };
    let binary = { 0: 0, 1: 1 };
    if (base < 2 || (base > 10 && base !== 16)) return -1;
    let system = base === 2 ? binary : hex;
    let value = 0;
    let exp;

    for (let i = number.length - 1; i >= 0; i--) {
        exp = number.length - 1 - i;
        let ele = number[i];
        value += base ** exp * system[ele];
    }
    return value;
};

console.log(convertFromBase("000101011", 2));

const compareBinToHex = (binary, hex) => {
    let num1 = convertFromBase(binary, 2);
    let num2 = convertFromBase(hex, 16);

    if (num1 < 0 || num2 < 0) return false;

    return num1 === num2;
};

console.log(compareBinToHex("000101011", "2BB"));
