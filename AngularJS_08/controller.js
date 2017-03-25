let app = angular.module ("myApp", []);
app.controller ("myCtrl", function ($scope, $location, $timeout, $interval, myService) {
    $scope.currentUrl = $location.absUrl();
    $scope.myGreeting = "Hello, World !";
  		/* Display a new message after two seconds */
  	$timeout (function () {
    	$scope.myGreeting = "My name is Oleh !";
  	}, 3000);
  		/* Display the time every second */
  	$scope.theTime = new Date().toLocaleTimeString();
  	$interval(function () {
    	$scope.theTime = new Date().toLocaleTimeString();
  	}, 1000);
  	 $scope.pow = myService.myPow(10);
  	 $scope.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];		
});
	/* Create my own Service */
app.service ("myService", function() {
    this.myPow = function (x) {
        return x * x;
    }
});
	/* Use own service inside a filter */
app.filter("myFilterPow", ["myService", function(myService) {
    return function (x) {
        return myService.myPow (x);
    };
}]);