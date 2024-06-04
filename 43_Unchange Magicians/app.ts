
// Q43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of 
// the array of magicians’ names. Because the original array will be unchanged, return the new array and store it 
// in a separate array. Call show_magicians() with each array to show that you have one array of the original names 
// and one array with the Great added to each magician’s name.?




function Show_magicians(magicians:string []){
    magicians.forEach(name => console.log(name));
}
// 
function make_great(magicians:string[]){
    return magicians.map(name => `The great ${name}`);
}

// Define array
let magician_names =["Harry Porter", "Genny", "David Blaine"];

// making a copy of original array through . slice() funcyion
let copy_magicians_names = magician_names.slice()

// modify the copied array
let copy_great_magicians = make_great(copy_magicians_names);

// show both array 

//original
console.log("\norignial array\n")
Show_magicians(magician_names);

//copied
console.log("\ncopied array\n");
Show_magicians(copy_great_magicians);



