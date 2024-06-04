
// Q38: Cities: Write a function called describe_city() that accepts the name of a city and its country.
// The function should print a simple sentence, such as Karachi is in Pakistan. 
//Give the parameter for the country a default value. Call your function for three different cities,
// at least one of which is not in the default country.?




function describe_ciy(nameofcity:string, country:string = "PAKISTAN"){
    console.log(`${nameofcity} is in ${country}`);
}

describe_ciy("KARACHI");

describe_ciy("DEHLI","INDIA");


describe_ciy("TORONTO","CANADA")
