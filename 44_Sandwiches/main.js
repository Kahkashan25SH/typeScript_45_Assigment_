// define the function that will be called
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwitch with the following items\n");
    items.forEach(function (singleitemes) { return console.log(singleitemes); });
}
make_sandwich("chicken", "mayo", "salt and black paper");
make_sandwich("cooked vegetables", "ketchup", "cheese");
make_sandwich("potatoes mixer", "pizza sauces", "fazita mayo");
// console.log("\nWELCOME TO HALAL SANDWICHES SHOP\n")
// function make_sandwich(...types: string[]){
//     console.log(`making a sandwitch with ${types.join(`,`)}`);
// } 
// make_sandwich("chicken","mayo");
// make_sandwich("potato","cheese","mayo");
