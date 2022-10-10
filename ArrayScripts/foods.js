let myLunch = [
    { item: "Meatball sub", price: 9.95 },
    { item: "Chips", price: 1.25 },
    { item: "Cherry Coke", price: 2.79 }
];

function totalCost(lunch) { 
    costOfFood = 0;
    for (let i = 0; i < lunch.length; i++) {
        costOfFood += lunch[i].price;
    }
    return costOfFood;
}

let myMealCost = totalCost(myLunch);
let taxOfFood = 8.00;
let tipPercentage = 18;
let totalWithTaxAndTip = (myMealCost + 8) * 1.18;
console.log("Your total is " + myMealCost.toFixed(2));
console.log("Tax: " + taxOfFood.toFixed(2))
console.log("Tip: " + tipPercentage + "%");
console.log("Total Due: " + totalWithTaxAndTip.toFixed(2));

// Here we just assumed the tax to be 8 and tip on that total(assume 18%).