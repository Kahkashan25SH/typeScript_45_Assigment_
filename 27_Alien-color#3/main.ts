
//Q27:  Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.?


// Define veribles
let alienColor = "Green";

// Using if and Else-if statement
// version 1
if(alienColor === "Green"){
    console.log ("you shot down Green alien you have earned 5 points");
}
else if(alienColor === "Yellow"){
    console.log("you shot down Yellow alien you have earned 10 points");
}
else if(alienColor === "Red"){
    console.log("you shot down Red alien you have earned 15 point");
}

// version 2
let alienColor2 = "Yellow";

if(alienColor2 === "Green"){
    console.log("you shot down Green alien you have earned 5 points");
}
else if(alienColor2 === "Yellow"){
    console.log("\nyou shot down Yellow alien you have earned 10 points");
}
else if(alienColor2 === "Red"){
    console.log("you shot down Green alien you have earned 15 points");
}

// version 3
let alienColor3 = "Red";

if(alienColor3 === "Yellow"){
    console.log("you shot down Yellow alien you have 5 points.");
}
else if(alienColor3 === "Green"){
    console.log("you shot down Green alien you have earned 10 points.");
}
else if(alienColor3 === "Red"){
    console.log("\nyou shot down Red alien you have earned 15 points");
}
