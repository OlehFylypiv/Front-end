// In TypeScript, concrete objects should have a type template
let person = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHello: function () { } //Type template
};
person.sayHello = function () {
    console.log("Hello " + person.firstName);
};
person.sayHello();
// Class
class Person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    setID(id) { this.id = id; }
    getFullName() { return this.name + " " + this.lastName; }
}
Person.title = "Example";
console.log(Person.title + ":"); // Example:
let User = new Person("Oleh", "Fylypiv");
console.log(User.name); // Oleh
console.log(User.getFullName()); // Oleh Fylypiv
// Modules
var Say;
(function (Say) {
    function Hello(text) {
        return "Hello " + text;
    }
    Say.Hello = Hello;
})(Say || (Say = {}));
console.log(Say.Hello("Module"));
