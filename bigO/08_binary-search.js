const binarySearch = (array, target) => {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (array[mid] === target) {
            return mid;
        } else if (array[mid] > target) {
            end = mid - 1;
        } else if (array[mid] < target) {
            start = mid + 1;
        }
    }

    return -1;
};
console.log(binarySearch([1, 2], 1));
console.log(binarySearch([], 1));
console.log(binarySearch([1, 2, 3, 6, 8, 12, 34, 45, 56, 88], 12));
console.log(binarySearch([1, 2, 3, 6, 8, 12, 34, 45, 56, 88], 7));
console.log(binarySearch([1, 2, 3, 6, 8, 12, 34, 45, 56, 88], 1));
console.log(binarySearch([1, 2, 3, 6, 8, 12, 34, 45, 56, 88], 88));
console.log(binarySearch([1, 2, 3, 6, 8, 12, 34, 45, 56, 88], 34));
