
// Q:44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
// using a different number of arguments each time.?


// define the function 

function make_sandwich(...items: string[]){
    console.log(`\nMaking a sandwitch with the following items\n`);

    items.forEach(singleitemes => console.log(singleitemes));

}

 make_sandwich("chicken","mayo", "salt and black paper");
 make_sandwich("cooked vegetables","ketchup","cheese");
 make_sandwich("potatoes mixer","pizza sauces","fazita mayo")






