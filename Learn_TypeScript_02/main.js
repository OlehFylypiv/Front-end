var helloMessage = "Hello, world";
console.log(helloMessage);
/* Create class Dog with one method */
var Dog = (function () {
    function Dog() {
    }
    Dog.prototype.voice = function () {
        console.log("Gav gav gav !");
    };
    return Dog;
}());
var obj = new Dog();
obj.voice();
/* Variables in TypeScript */
var Variables = (function () {
    function Variables() {
    }
    Variables.prototype.showResult = function () {
        var name = "Oleh";
        var age = 20;
        var score1 = 30;
        var score2 = 72.60;
        var sum = score1 + score2;
        console.log("name " + name);
        console.log("first score: " + score1);
        console.log("second score: " + score2);
        console.log("sum of the scores: " + sum);
    };
    return Variables;
}());
var obj2 = new Variables();
obj2.showResult();
/* Type Assertion in TypeScript */
var str = "1";
var str2 = str; //str is now of type number
console.log(str2);
var a = "hello";
var b = 10;
console.log(a + b); //Error