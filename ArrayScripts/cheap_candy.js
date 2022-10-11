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





function costOfCandies(array) {
    let findCheapest = [];

    let lengthOfArray = array.length;
    for (let i = 0; i < lengthOfArray; i++) {
        if (array[i].price < 4.00) {
            findCheapest.push(array[i])
        }
    }
    return findCheapest;
}

let findCheaperCandy = costOfCandies(products)
let lengthOfThisArray = findCheaperCandy.length;
for (let i = 0; i < lengthOfThisArray; i++) {
    console.log(findCheaperCandy[i].product) // titles of the courses that cost 50 or less
}

let candyWithMAndM = [];
for (let i = 0; i < products.length; i++) {
    if (products[i].product.indexOf("M&Ms") == -1) {
        console.log("Items not found");
    } else {
        candyWithMAndM.push(products[i].product);
    }
}
 //candies that has "M&M" in its name
for (let i = 0; i < candyWithMAndM.length; i++) {
    console.log("Names that start with M&Ms: " + candyWithMAndM[i]); //candies that has "M&M" in its name
}

for (let i = 0; i < products.length; i++) {
    if (products[i].product == "Swedish Fish") {
        console.log("Yes We have " + products[i].product)
    }
}