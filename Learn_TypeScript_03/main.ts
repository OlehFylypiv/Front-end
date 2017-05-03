function tryOperators(a : number, b : number) : boolean {
	// Don't use strict equality ===
	if (a == b) {
		return true;
	}
	else {
		return false;
	}
}

let result : boolean = tryOperators(1, 5);
console.log(result);

let x : number = 4 
let y = -x; 
console.log("value of x : ", x);   //outputs 4 
console.log("value of y : ", y);   //outputs -4

// String Operators: Concatenation operator (+)
var msg : string = "Hello, " + "Oleh"; 
console.log(msg);

// typeof operator
let a : number;
console.log(typeof a); // number

// Rest Parameters
function sumOfArray(...array : number[]) : number {
	let sum : number = 0;
	for (let i : number = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}

console.log(sumOfArray(1, 3, 5, 5)); // 14
console.log(sumOfArray(1, 1, 5, 6, 10, 40)); // 63

// Default parameters (rate)
function calculateDiscount(price : number, rate : number = 0.50) { 
   let discount = price * rate; 
   console.log("Discount Amount : ", discount); 
} 
calculateDiscount(1000); // 500
calculateDiscount(1000, 0.30); // 300

// Anonymous function with parameters
let res = function (a : number, b : number) { 
   return a * b;  
} 

console.log(res(12, 2)); // 24 

// Recursion
function factorial(number) {
   if (number <= 0) {   // termination case
      return 1; 
   } else {     
      return (number * factorial(number - 1));  // function invokes itself
   } 
} 
console.log(factorial(6));  // outputs 720 

// Lambda statement
let plusPlus = (x : number) => {    
   x = 10 + x 
   console.log(x)  
} 

plusPlus(90);

let disp = () => { 
   console.log("Function invoked"); 
} 

disp();

// Optional parentheses for a single parameter
let display = x => { 
   console.log("The function got " + x); 
} 

display(10);

// Function Overloads
function showOverload(s1 : string) : void; 
function showOverload(n1 : number, s1 : string) : void; 

function showOverload(x : any, y ?: any) : void { 
   console.log(x); 
   console.log(y); 
} 
showOverload("abc"); 
showOverload(1, "xyz");