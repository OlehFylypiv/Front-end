/* Firs step */
function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Oleh User";
console.log(greeter(user));
 
 /* Second step */
interface Person {
    firstName: string;
    lastName: string;
}

function showPerson(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let userData = { firstName: "Oleh", lastName: "User" };
console.log(showPerson(userData))

/* Third step, add class */
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function showStudent(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let student = new Student("Oleh", "B.", "User");
console.log(showStudent(student))