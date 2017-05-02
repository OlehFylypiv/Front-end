let helloMessage : string = "Hello, world";
console.log(helloMessage);

/* Create class Dog with one method */
class Dog {
   voice() : void {
      console.log("Gav gav gav !");
   }
}
let obj = new Dog();
obj.voice();

/* Variables in TypeScript */
class Variables {
	showResult() : void {
		let name : string = "Oleh";
		let age : any = 20;
		let score1 : number = 30;
		let score2 : number = 72.60;
		let sum = score1 + score2;
		console.log("name " + name);
		console.log("first score: " + score1);
		console.log("second score: " + score2);
		console.log("sum of the scores: " + sum);
	}
}

let obj2 = new Variables();
obj2.showResult();

/* Type Assertion in TypeScript */
var str = "1";
var str2 : number = <number> <any> str   //str is now of type number
console.log(str2)

let a : string = "hello";
let b : number = 10;
console.log(a + b); //Error