// Q17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.

//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
// only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name
// from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually 
//have an empty list at the end of your program.



// creating a Guest List Array
let guestList = ["Marwat","Murad","imran",];

// Making variable for those guest who cant come
let dontCome = guestList[1];

// print the name of guest who cant come
console.log(dontCome, "can not come");

// Add or Remove values from Guest List Array
guestList.splice(1, 1, "Zara Gull");

// Message print for Bigger Table
console.log("Good News ! We have Found a Bigger Table For Dinner.");

// Adding a new guest at starting index of array
guestList.unshift("Rahul");

// Adding a new guest at ending index of array
guestList.push("Rizwan");

// Get a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Ayesha");

// print message of Updated List
console.log("Updated List of our guest");

// Sending a invitation message to our guest one by one with thier names
guestList.forEach(oneguest => console.log(`Hello ${oneguest}, would you like to dinner with me`));

// Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so i can only invite two Guest to dinner with me");

// Using while-loop to removed guests from the array until only two names remain
while(guestList.length > 2) {
    let removedguest = guestList.pop();
    console.log(`Sorry, ${removedguest} I cant invite you to dinner`);
}
// Sending a invitations to the last two guest on the list
console.log("invitations to the last 2 Guests");
guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`))

// Removing last two Guest from the list
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);