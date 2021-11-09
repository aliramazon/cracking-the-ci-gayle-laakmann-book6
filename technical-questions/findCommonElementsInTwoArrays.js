const findCommonElementsInTwoArrays = (arr1, arr2) => {
    let commons = [],
        i = 0,
        j = 0;

    while (i !== arr1.length && j !== arr2.length) {
        if (arr1[i] > arr2[j]) {
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr1[i] === arr2[j]) {
            commons.push(arr1[i]);
            i++;
            j++;
        }
    }
    return commons;
};

console.log(
    findCommonElementsInTwoArrays(
        [1, 4, 5, 9, 12, 18, 21, 24, 35, 56, 89, 400, 500, 600, 800],
        [-2, 1, 5, 18, 19, 20, 21, 89, 100, 101, 102, 200, 300, 400, 800]
    )
);
