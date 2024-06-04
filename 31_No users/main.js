var UserNames = ["benish", "usama", "Admin iqra", "kulsum"];
UserNames = [];
if (UserNames.length === 0) {
    console.log("Your array in Empty We need to find some users!");
}
else {
    UserNames.forEach(function (oneUser) {
        if (oneUser === "Admin iqra") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ",Thank you for loging in again."));
        }
    });
}
;
