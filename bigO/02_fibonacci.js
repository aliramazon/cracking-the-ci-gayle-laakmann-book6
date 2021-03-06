/* Exponential Runtime O(2^n). But in this case it is actually O(1.6^n)*/

const nthFib = (n) => {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    return nthFib(n - 1) + nthFib(n - 2);
};

/*From first sight it seams O(n * n^2). But n is not constant. So it is still O(n!) */

const generateNFib = (n) => {
    let fibs = [];

    for (let i = 0; i <= n; i++) {
        fibs.push(nthFib(i));
    }

    return fibs;
};

/* With memoization we can achieve O(n) run time*/

const nthFibMemo = (n) => {
    let memo = {};

    const calcFib = (n) => {
        if (memo[n]) return memo[n];
        if (n <= 0) return 0;
        if (n === 1) return 1;

        memo[n] = calcFib(n - 1) + calcFib(n - 2);
        return memo[n];
    };

    return calcFib(n);
};
console.log(nthFibMemo(40));
console.log(nthFib(40));
