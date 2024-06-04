function Show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The great ".concat(name); });
}
var magician_names = ["Harry Porter", "Genny", "David Blaine"];
var great_magicians = make_great(magician_names);
Show_magicians(great_magicians);
