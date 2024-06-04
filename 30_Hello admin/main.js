var UserNames = ["Tahira", "Admin zainab", "Arisha", "Hira", "Ayeza"];
UserNames.forEach(function (oneUser) {
    if (oneUser === "Admin zainab") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report"));
    }
    else {
        console.log("Hello ".concat(oneUser, ",Thank you for loging in again."));
    }
});
