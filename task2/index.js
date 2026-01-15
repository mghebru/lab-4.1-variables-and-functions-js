//takes three parameters: price, quantity, and taxRate
function calculateTotalCost(price, quantity, taxRate) {
    //If any are invalid, return a string: “Invalid input.”
    if (typeof price !== 'number' || typeof quantity !== 'number' || typeof taxRate !== 'number' ||
        isNaN(price) || isNaN(quantity) || isNaN(taxRate) ||
        price < 0 || quantity < 0 || taxRate < 0) {
        return "invalid input";
    } else {

        // Calculate the total cost
        const totalCost = (price * quantity) * (1 + taxRate);
        return totalCost;
    }
}
// Example usage
console.log(calculateTotalCost(200, 2, 0.05));              // Output: 420
console.log(calculateTotalCost(50, 4, 0.1));                 // Output: 220
console.log(calculateTotalCost(-50, 5, 0.1));                // Output: "Invalid input."
console.log(calculateTotalCost(100, 'two thousand', 0.1));           // Output: "Invalid input."
console.log(calculateTotalCost(50, 2, -0.1));                 // Output: "Invalid input."