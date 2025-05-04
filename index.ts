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

person(student1)
