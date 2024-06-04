
// Q42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
// that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.?


// Define the function
function Show_magicians(magicians:string []){
    magicians.forEach(name => console.log(name));
}
// 
function make_great(magicians:string[]){
    return magicians.map(name => `The great ${name}`);
}

// Define array
let magician_names =["Harry Porter", "Genny", "David Blaine"];

// Call make great function
let great_magicians = make_great(magician_names);

// call show magicians 
Show_magicians(great_magicians)

