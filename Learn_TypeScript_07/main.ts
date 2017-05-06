// In TypeScript, concrete objects should have a type template
let person = {
   firstName : "Tom",
   lastName : "Hanks",
   sayHello : function() {  }  //Type template
};
person.sayHello = function() {
   console.log("Hello " + person.firstName);
};

person.sayHello();

// Class
class Person {
    name : string;
    lastName : string;
    private id : number;
    static title = "Example";

    constructor (name : string, lastName : string) {
        this.name = name;
        this.lastName = lastName;
    }

    setID (id) { this.id = id; }

    getFullName () { return this.name + " " + this.lastName; }
}

console.log(Person.title + ":"); // Example:
let User = new Person("Oleh", "Fylypiv");
console.log(User.name); // Oleh
console.log(User.getFullName()); // Oleh Fylypiv

// Modules
module Say {
    export function Hello(text : string) {
        return "Hello " + text;
    }
}
console.log(Say.Hello("Module"));