Scenario
You are tasked with writing JavaScript code for a data processing tool. This tool will handle user input, perform mathematical calculations, manipulate strings, and provide dynamic feedback based on user actions. As the team’s JavaScript expert, you need to write efficient and reusable functions to ensure your code is scalable.

In this activity, you will solve more coding challenges that involve creating and manipulating variables, using functions with multiple parameters, and handling conditional logic. The tasks will focus on making your functions more flexible and reusable, a skill that will be crucial for larger projects.

Learning Objectives
By the end of this activity, you will have demonstrated your ability to:

Manipulate variables to perform mathematical operations and string manipulation.
Write and call functions that use parameters and return values.
Use conditional logic inside functions to create more dynamic behavior.
Refactor code to improve readability and reusability.

Task 1: Flexible String Manipulation with Functions
Create a function called formatFullName that takes two parameters: firstName and lastName. The function should return the full name in the format lastName, firstName.
Format the firstName and lastName so that the first letter of each is always capatilized.
Add a condition that checks if either the first or last name is missing. If so, return a string saying “Invalid name input.”
Task 2: Mathematical Operations with Multiple Parameters
Write a function called calculateTotalCost that takes three parameters: price, quantity, and taxRate.
The function should calculate the total cost of items, including tax. Use the formula: totalCost = (price * quantity) * (1 + taxRate).
Ensure that price, quantity, and taxRate are all valid numbers. If any are invalid, return a string: “Invalid input.”
Task 3: Functions with Conditional Logic
Write a function called checkEligibility that takes two parameters: age and isEmployed. The function should check if a person is eligible for a program based on the following rules:
If the person is over 18 and employed, they are eligible.
If the person is over 18 but unemployed, they are conditionally eligible.
If the person is 18 or younger, they are not eligible.
Return an appropriate string message for each scenario.
Task 4: Refactoring for Reusability
Refactor the calculateTotalCost function from Task 2 to include an optional discount parameter. If the discount is provided, the function should subtract the discount from the total cost before applying tax.
If no discount is provided, calculate the total cost as before.



How did you approach creating more flexible functions with parameters?

I approached creating more flexible functions by designing them to accept parameters instead of hard-coding values,
so the same function could handle different inputs and scenarios. I identified which parts of the logic were likely 
to need modification, such as prices, quantities, tax rates, or eligibility conditions, and used those as parameters.

What challenges did you face while incorporating conditional logic in your functions?

A challenge I faced while incorporating conditional logic is making sure all possible case scanrios were checked for without writing 
overly complicated or redundant code.

How does refactoring improve the readability and maintainability of your code?

Refactoring improves code readability and maintainbility by because it allows you to keep the functionality of the code while 
making improvements to or modifications to the code. When I refactor, I focus on using meaningful function and variable names,
and reducing duplicates so that changes only need to be made in one place.
