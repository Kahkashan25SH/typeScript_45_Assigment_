
// Q37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that 
//reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of
// any size with a different message.?




function make_shirt (size:string ="Large", message:string="I LOVE TYPESCRIPT"){
    console.log(`Make a ${size} shirt with the ${message} print on shirt`)
}
// default large and message
make_shirt();

// default mesage, medium size
make_shirt("Medium")

// custom message, small size
make_shirt("small","I LOVE NEXTJS")