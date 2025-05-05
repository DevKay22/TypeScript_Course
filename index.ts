// Student profile project

type Student = {
    name: string;
    age:  number;
    school: string;
    class: string;
    isEnrolled: boolean;
    courses: string[];
    scores: number[];
    summary: [string, number, boolean]
}

let student1: Student = {
    name: "Kay",
    age: 17,
    school: "RIS",
    class: "Grade 5",
    isEnrolled: false,
    courses: ["Maths", "Chemistry", "Physics"],
    scores: [96, 99, 95],
    summary: ["Kay", 17, false]
}

function person(student: Student) {
    console.log(`Hello everone!!! My name is ${student1.name}, of school ${student1.school}. I am ${student1.age} in ${student1.class} and my best subject is ${student1.courses[1]}. My courses are ${student1.courses.join(",")} and I have the following scores ${student1.scores.join(",")} in the entrance tests`)
}

// person(student1)


// Optional parameters
function greet( name: string, title? : string) {
    return title ? `Hello ${title} ${name}!` : `Hello ${name}!`;
}

// console.log(greet("Dele"));
// console.log(greet("Dayo", "Prof(Mrs)."));


// Default parameters
function hype(name: string = "Adam"): string {
    return `Hi ${name}`;
}

// console.log(hype());
// console.log(hype("Tolu"));


// Calculator project with typed functions 

const addCalc = (a: number, b: number): number => {
    return a + b
}

const subCalc = (a: number, b: number): number =>  a - b


const multCalc = (a: number, b: number): number =>  a * b


const divCalc = (a: number, b: number): number => {
    return a / b
}

const powerCalc = (a: number, n: number): number =>  a ** n

console.log(addCalc(9,7));
console.log(subCalc(76,7));
console.log(multCalc(39,7));
console.log(divCalc(35,7));
console.log(powerCalc(4,3));