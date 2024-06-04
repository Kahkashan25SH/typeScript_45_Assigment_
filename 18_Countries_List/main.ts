// Q18: Seeing the World: Think of at least five places in the world you’d like to visit.

//• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed

                           //*****ANSWER*****//

//Making a array of countries and print its original order
let countriesToVisit: string[] = ["Argentina","Brazil","Canada","Dubai"];
console.log("Original Order:",countriesToVisit);

// print the array in Alphabetical order without modifying the actual array List
console.log("Alphabetical Order:",[...countriesToVisit].sort());

// show that the array is still in its Original order
console.log("Still in Original Order:", countriesToVisit);

// Print the array in Reversed order without modifying the Actuall array List
console.log("Reverse Order:", [...countriesToVisit].reverse());

// show that the array is still in its Original order
console.log("Still in Original Order:", countriesToVisit);

// We have changed the origial array order now
console.log("Original Array Reversed:", countriesToVisit.reverse());

// Print the array to show that the it's back to its original order
console.log("Back to Original Order:", countriesToVisit.reverse());

// Print the array to show that its order has been changed in Alphabatical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

// We have changed again the original array order now in reverse order again
console.log("Original Array Reversed Again:", countriesToVisit.reverse());
