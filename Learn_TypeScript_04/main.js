(function () {
    let varNumber = new Number();
    console.log(varNumber);
    console.log("TypeScript Number Properties: ");
    console.log("Maximum value that a number variable can hold: " + Number.MAX_VALUE);
    console.log("The least value that a number variable can hold: " + Number.MIN_VALUE);
    console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY);
    console.log("Value of Negative Infinity:" + Number.POSITIVE_INFINITY);
})();
// Create Not-a-Number
let createNaN = () => console.log(Number.NaN);
createNaN();
// Array Destructuring
(function () {
    let array = [11, 25, 30];
    let [x, y, k] = array;
    console.log(x);
    console.log(y);
})();
// Array Traversal using for…in loop
(function () {
    let i;
    let array = [1, 2, 3, "Oleh", "User"];
    for (i in array) {
        console.log(array[i]);
    }
})();
// Two-Dimensional Array
(function () {
    let twoDimArray = [[1, 2, 3], [4, 5, 6]];
    console.log(typeof twoDimArray[0]); // object
})();
// Return Array from Function
function doReturnArray(array) {
    array[array.length] = 10;
    return array.reverse();
}
console.log(doReturnArray([1, 2, 3, 4])); // [10, 4, 3, 2, 1]