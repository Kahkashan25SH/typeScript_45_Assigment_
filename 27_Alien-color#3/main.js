// Define veribles
var alienColor = "Green";
// Using if and Else-if statement
// version 1
if (alienColor === "Green") {
    console.log("you shot down Green alien you have earned 5 points");
}
else if (alienColor === "Yellow") {
    console.log("you shot down Yellow alien you have earned 10 points");
}
else if (alienColor === "Red") {
    console.log("you shot down Red alien you have earned 15 point");
}
// version 2
var alienColor2 = "Yellow";
if (alienColor2 === "Green") {
    console.log("you shot down Green alien you have earned 5 points");
}
else if (alienColor2 === "Yellow") {
    console.log("\nyou shot down Yellow alien you have earned 10 points");
}
else if (alienColor2 === "Red") {
    console.log("you shot down Green alien you have earned 15 points");
}
// version 3
var alienColor3 = "Red";
if (alienColor3 === "Yellow") {
    console.log("you shot down Yellow alien you have 5 points.");
}
else if (alienColor3 === "Green") {
    console.log("you shot down Green alien you have earned 10 points.");
}
else if (alienColor3 === "Red") {
    console.log("\nyou shot down Red alien you have earned 15 points");
}
