//takes three parameters: price, quantity, and taxRate
//include an optional discount parameter
function calculateTotalCost(price, quantity, taxRate, discount) {
    //If any are invalid, return a string: “Invalid input.”
    if (typeof price !== 'number' || typeof quantity !== 'number'
        || typeof taxRate !== 'number' || typeof discount !== 'number' ||
        isNaN(price) || isNaN(quantity) || isNaN(taxRate) || isNaN(discount) ||
        price < 0 || quantity < 0 || taxRate < 0 || discount < 0) {
        return "invalid input";
    }
    // Calculate the total cost before tax
    let totalCost = (price * quantity);

    //subtract the discount from the total cost before applying tax.
    if (discount > 0) {
        const totalCost = ((price * quantity) - discount) * (1 + taxRate);
        return totalCost;
    }
}
// Example usage
console.log(calculateTotalCost(20,2,.5,10));              // Output: 45
console.log(calculateTotalCost(200,2,.5,10));             // Output: 585
console.log(calculateTotalCost(20,'two',.5,false));       // Output: invalid input
console.log(calculateTotalCost(2,.5,10));                 // Output: invalid input
console.log(calculateTotalCost(2000,2,.5,10));            // Output: 5985