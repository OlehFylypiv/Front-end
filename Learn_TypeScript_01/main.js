/* Firs step */
function greeter(person) {
    return "Hello, " + person;
}
var user = "Oleh User";
console.log(greeter(user));
function showPerson(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var userData = { firstName: "Oleh", lastName: "User" };
console.log(showPerson(userData));
/* Third step, add class */
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function showStudent(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var student = new Student("Oleh", "B.", "User");
console.log(showStudent(student));