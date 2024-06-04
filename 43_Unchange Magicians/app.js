function Show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// 
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
// Define array
var magician_names = ["Harry Porter", "Genny", "David Blaine"];
// making a copy of original array through . slice() funcyion
var copy_magicians_names = magician_names.slice();
// modify the copied array
var copy_great_magicians = make_great(copy_magicians_names);
// show both array 
//original
console.log("\norignial array\n");
Show_magicians(magician_names);
//copied
console.log("\ncopied array\n");
Show_magicians(copy_great_magicians);
