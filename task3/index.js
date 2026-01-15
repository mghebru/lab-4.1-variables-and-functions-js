//function called checkEligibility that takes two parameters: age and isEmployed
function checkEligibility(age, isEmployed) {

    //check if a person is eligible for a program based on the following rules:
    //If the person is over 18 and employed, they are eligible.
    if (age > 18 && isEmployed) {
        return "You are eligible"

        //If the person is over 18 but unemployed, they are conditionally eligible.
    } else if (age > 18 && !isEmployed) {
        return "You are conditionally eligible"

        //If the person is 18 or younger, they are not eligible.
    } else {
        return "You are not eligible"
    }
}

// Example usage
console.log(checkEligibility(15,true));              // Output: You are not eligible
console.log(checkEligibility(20,true));              // Output: You are eligible
console.log(checkEligibility(35,false));             // Output: You are conditionally eligible
console.log(checkEligibility('twenty',true));        // Output: You are not eligible