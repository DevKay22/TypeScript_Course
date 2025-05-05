// Student profile project
var student1 = {
    name: "Kay",
    age: 17,
    school: "RIS",
    class: "Grade 5",
    isEnrolled: false,
    courses: ["Maths", "Chemistry", "Physics"],
    scores: [96, 99, 95],
    summary: ["Kay", 17, false]
};
function person(student) {
    console.log("Hello everone!!! My name is ".concat(student1.name, ", of school ").concat(student1.school, ". I am ").concat(student1.age, " in ").concat(student1.class, " and my best subject is ").concat(student1.courses[1], ". My courses are ").concat(student1.courses.join(","), " and I have the following scores ").concat(student1.scores.join(","), " in the entrance tests"));
}
// person(student1)
// Optional parameters
function greet(name, title) {
    return title ? "Hello ".concat(title, " ").concat(name, "!") : "Hello ".concat(name, "!");
}
// console.log(greet("Dele"));
// console.log(greet("Dayo", "Prof(Mrs)."));
// Default parameters
function hype(name) {
    if (name === void 0) { name = "Adam"; }
    return "Hi ".concat(name);
}
// console.log(hype());
// console.log(hype("Tolu"));
// Calculator project with typed functions 
var addCalc = function (a, b) {
    return a + b;
};
var subCalc = function (a, b) { return a - b; };
var multCalc = function (a, b) { return a * b; };
var divCalc = function (a, b) {
    return a / b;
};
var powerCalc = function (a, n) { return Math.pow(a, n); };
console.log(addCalc(9, 7));
console.log(subCalc(76, 7));
console.log(multCalc(39, 7));
console.log(divCalc(35, 7));
console.log(powerCalc(4, 3));
