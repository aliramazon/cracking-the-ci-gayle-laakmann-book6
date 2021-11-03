// Find a b c d number that satisfies a^3 + b^3 = c^3 + d^3, a,b,c,d > 1 && <= 1000
const findABCD = () => {
    let n = 50;
    let result;
    let hash = {};

    for (let c = 1; c <= n; c++) {
        for (let d = c + 1; d <= n; d++) {
            result = c ** 3 + d ** 3;
            if (hash[result]) {
                hash[result].push([c, d]);
            } else {
                hash[result] = [[c, d]];
            }
        }
    }

    // for (let a = 1; a <= n; a++) {
    //     for (let b = a + 1; b <= n; b++) {
    //         result = a ** 3 + b ** 3;
    //         for (let pair of hash[result]) {
    //             if (pair[0] !== a && pair[1] !== b) {
    //                 console.log(...pair, a, b);
    //             }
    //         }
    //     }
    // }

    for (let result in hash) {
        for (let pairAB of hash[result]) {
            for (let pairCD of hash[result]) {
                if (pairAB[0] !== pairCD[0]) {
                    console.log(...pairAB, ...pairCD);
                }
            }
        }
    }
};

findABCD();
