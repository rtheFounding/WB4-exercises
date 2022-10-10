function parsePartCode(string) {
    let colonPos = string.indexOf(":"); // position of :
    let dashPos = string.indexOf("-"); // position of -
    let partNum = string.substring(0, colonPos); // XYZ
    let numbersOfCode = string.substring(colonPos + 1, dashPos) // 1234
    let afterDash = string.substring(dashPos + 1); // everything after "-" = L

    let randomCodes = {
        supplierCode: partNum,
        productNumber: numbersOfCode,
        size: afterDash
    }

    return randomCodes


}

let partCode1 = "XYZ:1234-L";
let part1 = parsePartCode(partCode1);
console.log("Supplier: " + part1.supplierCode)
console.log("Product Number: " + part1.productNumber)
console.log("Size: " + part1.size)
