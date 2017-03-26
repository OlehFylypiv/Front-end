let app = angular.module("myApp", []);
app.controller ("myCtrl", function ($scope) {
	$scope.names = ["Oleh", "Max", "Piter", "John", "Sem", "Keit"];
	$scope.cars = [
    	{ model : "Ford Mustang", color : "red" },
    	{ model : "Fiat 500", color : "white" },
    	{ model : "Volvo XC90", color : "black" }
	];
	$scope.cars2 = {
    	car1 : "Ford",
    	car2 : "Fiat",
    	car3 : "Volvo"
	};
	$scope.cars3 = {
		car1 : { brand : "Ford", model : "Mustang", color : "red" },
		car2 : { brand : "Fiat", model : "500", color : "white" },
		car3 : { brand : "Volvo", model : "XC90", color : "black" }
	};
});