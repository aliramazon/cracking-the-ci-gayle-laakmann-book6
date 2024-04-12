// When you have  a recursive function that makes multiple calls, the runtime will be often O(branches^depth), where branches  is the number of times each recursivetimes each recursive call branches.

// The space complexity of this algorithm will be O(N).
const recursive = (number) => {
    if (number <= 1) {
        return 1;
    }

    return recursive(number - 1) + recursive(number - 1);
};

console.log(recursive(5));
