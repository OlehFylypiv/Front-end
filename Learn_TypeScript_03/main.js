function tryOperators(a, b) {
    // Don't use strict equality ===
    if (a == b) {
        return true;
    }
    else {
        return false;
    }
}
var result = tryOperators(1, 5);
console.log(result);
var x = 4;
var y = -x;
console.log("value of x : ", x); //outputs 4 
console.log("value of y : ", y); //outputs -4
// String Operators: Concatenation operator (+)
var msg = "Hello, " + "Oleh";
console.log(msg);
// typeof operator
var a;
console.log(typeof a); // number
// Rest Parameters
function sumOfArray() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(sumOfArray(1, 3, 5, 5)); // 14
console.log(sumOfArray(1, 1, 5, 6, 10, 40)); // 63
// Default parameters (rate)
function calculateDiscount(price, rate) {
    if (rate === void 0) { rate = 0.50; }
    var discount = price * rate;
    console.log("Discount Amount : ", discount);
}
calculateDiscount(1000); // 500
calculateDiscount(1000, 0.30); // 300
// Anonymous function with parameters
var res = function (a, b) {
    return a * b;
};
console.log(res(12, 2)); // 24 
// Recursion
function factorial(number) {
    if (number <= 0) {
        return 1;
    }
    else {
        return (number * factorial(number - 1)); // function invokes itself
    }
}
console.log(factorial(6)); // outputs 720 
// Lambda statement
var plusPlus = function (x) {
    x = 10 + x;
    console.log(x);
};
plusPlus(90);
var disp = function () {
    console.log("Function invoked");
};
disp();
// Optional parentheses for a single parameter
var display = function (x) {
    console.log("The function got " + x);
};
display(10);
function showOverload(x, y) {
    console.log(x);
    console.log(y);
}
showOverload("abc");
showOverload(1, "xyz");