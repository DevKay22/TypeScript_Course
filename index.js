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
person(student1);
