/*
*   Interfaces are not to be converted to JavaScript.
*   It’s just part of TypeScript
*/
let customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: () => { return "Hi there"; }
};
console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
let employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: () => { return "Hello!!!"; }
};
console.log("Employee  Object ");
console.log(employee.firstName);
console.log(employee.lastName);
let drummer = {};
drummer.age = 19;
drummer.instrument = "Drums";
console.log("Age :  " + drummer.age);
console.log("Instrument :  " + drummer.instrument);
let Iobj = { v1: 12, v2: 23 };
console.log("value 1: " + this.v1 + " value 2: " + this.v2);
/*
*   Classes
*   JavaScript ES5 or earlier didn’t support classes.
*   Typescript gets this feature from ES6
*/
class Car {
    //constructor
    constructor(engine) {
        this.engine = engine;
    }
    //function
    disp() {
        console.log("Function displays Engine is  :   " + this.engine);
    }
}
//create an object
let obj = new Car("LPNU05");
//access the field
console.log("Reading attribute value Engine as :  " + obj.engine);
//access the function
obj.disp();
// Class Inheritance
class Shape {
    constructor(a) {
        this.Area = a;
    }
}
class Circle extends Shape {
    dispArea() {
        console.log("Area of the circle:  " + this.Area);
    }
}
var obj2 = new Circle(100);
obj2.dispArea();
/*
*   A class can inherit from multiple classes.
*   TypeScript doesn’t support multiple inheritance.
*   The following example shows how multi-level inheritance works
*/
class A {
    constructor(str) {
        this.str = str;
    }
}
class B extends A {
}
class C extends B {
} // indirectly inherits from A by virtue of inheritance
let myOdj = new C("Oleh");
console.log(myOdj.str);
/*
*   The super keyword is used to refer to the immediate parent of a class.
*   The keyword can be used to refer to the super class version
*   of a variable, property or method
*/
class PrinterClass {
    doPrint() {
        console.log("doPrint() from Parent called…");
    }
}
class StringPrinter extends PrinterClass {
    doPrint() {
        super.doPrint();
        console.log("doPrint() is printing a string…");
    }
}
var obj3 = new StringPrinter();
obj3.doPrint();
// The static Keyword
class StaticMem {
    static disp() {
        console.log("The value of num is " + StaticMem.num);
    }
}
StaticMem.num = 12; // initialize the static variable
StaticMem.disp(); // invoke the static method
// The instanceof operator
class Student {
}
let obj4 = new Student();
let isStudent = obj4 instanceof Student;
console.log(" obj is an instance of Person : " + isStudent);
// Data Hiding
class Encapsulate {
    constructor() {
        this.str = "Hello";
        this.str2 = "World";
    }
}
var obj5 = new Encapsulate();
console.log(obj5.str); // accessible
class AgriLoan {
    constructor(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
}
var obj6 = new AgriLoan(10, 1);
console.log("Interest is : " + obj6.interest + " Rebate is : " + obj6.rebate);