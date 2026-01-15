function capFullName(firstName, lastName) {
    // Check if either firstName or lastName is missing
    if (!firstName || !lastName) {
        return "invalid name input.";
    } else {
        // Capitalize the first letter of firstName and lastName
        const capFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
        const capLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

        // Return the full name in the format lastName, firstName
        return `${capLastName}, ${capFirstName}`;
    }
}
// Example usage
console.log(capFullName("Melat", "Ghebru")); // Output: "Ghebru, Melat"
console.log(capFullName("Melat", ""));    // Output: "Invalid name input."
console.log(capFullName("", "Ghebru"));    // Output: "Invalid name input."
console.log(capFullName("MELAT", "GHEBRU")); // Output: "Ghebru, Melat"