// O(b)
const productOfAB = (a, b) => {
    let product = 0;

    for (let i = 0; i < b; i++) {
        product += a;
    }
    return product;
};

console.log(productOfAB(23, 2));
