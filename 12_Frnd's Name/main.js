// Q12: Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
//print a message to them. The text of each message should be the same, but each message should be
// personalized with the person’s name.
var frindsName = ["Kahkashan", "Sawera", "Ujala", "Emaan"];
frindsName.forEach(function (frindName) { return console.log("Hello ".concat(frindName, ", How are you?")); });
