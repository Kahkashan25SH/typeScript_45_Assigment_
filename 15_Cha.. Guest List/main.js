// Q15: Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guestList = ["Marie", "sharukh", "john"];
var dontCome = guestList[1];
console.log(dontCome, "can not come");
guestList.splice(1, 1, "Robert");
guestList.forEach(function (guest) { return console.log("Hello ".concat(guest, ", would u like to Dinner with me?")); });
