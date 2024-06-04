var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making a array of countries and print its original order
var countriesToVisit = ["Argentina", "Brazil", "Canada", "Dubai"];
console.log("Original Order:", countriesToVisit);
// print the array in Alphabetical order without modifying the actual array List
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// show that the array is still in its Original order
console.log("Still in Original Order:", countriesToVisit);
// Print the array in Reversed order without modifying the Actuall array List
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
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
