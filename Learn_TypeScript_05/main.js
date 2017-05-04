/*
*	TypeScript gives us a data type called tuple that helps
*	to store a collection of values of varied types
*/
let myTuple = [1, 5, "Oleh", true]; // create a  tuple
// Destructuring a Tuple
let a = [10, "Hello"];
let [b, c] = a;
console.log(b);
console.log(c);
/*
*	 TypeScript 1.4 gives programs the ability to combine one or two types.
*	Union types are a powerful way to express a value
*	that can be one of the several types
*/
// Union Type Variable
var val;
val = 12;
console.log("Numeric value of val " + val);
val = "This is a string";
console.log("String value of val " + val);
// Union Type and function parameter
function unionShow(name) {
    if (typeof name == "string") {
        console.log(name);
    }
    else {
        for (let i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
unionShow("Oleh");
unionShow(["Mark", "John", "Lili"]);
// Union Type and Array
function unionAndArray(array) {
    console.log(array);
}
unionAndArray([1, 2, 3]);
unionAndArray(["4", "5", "6"]);