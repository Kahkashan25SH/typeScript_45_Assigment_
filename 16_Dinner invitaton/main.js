//Q16: More Guests: You just found a bigger dinner table, so now more space is available.
// Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing 
// people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.
// creating a Guest List Array
var guestList = ["Reyam", "Sami", "Herry",];
// Making variable for those guest who cant come
var dontCome = guestList[1];
// print the name of guest who cant come
console.log(dontCome, "can not come");
// Add or Remove values from Guest List Array
guestList.splice(1, 1, "ghothem");
// Message print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");
// Adding a new guest at starting index of array
guestList.unshift("Sharukh");
// Adding a new guest at ending index of array
guestList.push("Amir");
// Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Salman");
// print message of Updated List
console.log("Updated List of our guest");
// Sending a invitation message to our guest one by one with thier names
guestList.forEach(function (oneguest) { return console.log("Hello ".concat(oneguest, ", would you like to dinner with me")); });
