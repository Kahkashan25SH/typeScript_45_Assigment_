
// Q31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.?



let UserNames = ["benish", "usama", "Admin iqra", "kulsum"]

UserNames = []

if(UserNames.length === 0){
    console.log("Your array in Empty We need to find some users!")
}else{

    UserNames.forEach (oneUser =>{
    if(oneUser === "Admin iqra"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser},Thank you for loging in again.`)
    }
})
};