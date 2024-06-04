
// Q24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more 
// comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators.

// • Test whether an item is in a array.

// • Test whether an item is not in a array.


// Define Variables
let apple = "Apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple","bnana","orange"];

// Test for equaltiy and inequality with strings
console.log("Is Apple is equal to apple?");
console.log(apple == "Apple");

console.log("\nIs Apple is not equal to apple?");
console.log(apple != "Apple");

// Tests using Lowercase Functions
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

// Numerical Testes
// Equal to
console.log("\n Is ten is equal to twenty?");
console.log(ten == twenty);

// Not Equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);

// Greater than
console.log("\n Is ten is greater than five");
console.log(ten > 5);

// Less than
console.log("\nIs twenty is less than ten");
console.log(twenty <10);

// Greater than or equal to
console.log("\nIs ten is greater than or equal to 6?")
console.log(ten >= 6);

// Less than equal to
console.log("\nIs twenty is Less than or equal to 9?");
console.log(twenty <= 9);
