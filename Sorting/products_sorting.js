let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    // TODO: fill the array with 10 candies of various
    // price ranges
];

products[4] = { product: "Nerds", price: 2.54 };
products[5] = { product: "Milk Duds", price: 2.89 };
products[6] = { product: "Whoopers", price: 2.89 };
products[7] = { product: "Reeses", price: 3.34 };
products[8] = { product: "Hersheys", price: 3.46 };
products[9] = { product: "Snickers", price: 2.89 };

products.sort(function (a, b) {
    let aLower = a.product.toLowerCase();
    let bLower = b.product.toLowerCase();

    if (aLower < bLower) return -1; //// right order
    else if (aLower == bLower) return 0;
    else return 1; // swap, wrong order
})
let productNames = products.length;
for(let i = 0; i < productNames; i++) {
    console.log(products[i].product)
}
console.log("--------------------------------------------")
products.sort(function (a, b) {
    let aLower = a.product.toLowerCase();
    let bLower = b.product.toLowerCase();

    if (aLower > bLower) return -1; //// right order
    else if (aLower == bLower) return 0;
    else return 1; // swap, wrong order
})
let productNameseInDescendingOrder = products.length;
for(let i = 0; i < productNames; i++) {
    console.log(products[i].product)
}

