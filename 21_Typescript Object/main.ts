
// Q21: They think of something you could store in a TypeScript Object. Write a program that creates 
// Objects containing these items.


interface itCourse {
    courseName: string;
    location: string;
    onsiteStudent: number;
}

let itCourse = {
    courseName : "Typescript and JavaScript",
    locationSt : "Governor House Sindh",
    onSiteStudent :50000
};

console.log(itCourse);