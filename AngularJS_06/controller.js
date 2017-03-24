let app = angular.module ("myApp", []);
app.controller ("controller", function($scope) {
    $scope.firstName = "Oleh";
    $scope.lastName = "Fylypiv";
    $scope.fullName = function () {
        return $scope.firstName + " " + $scope.lastName;
    };
     $scope.namesAndCountry = [
        {name : "Oleh", country : "Ukraine"},
        {name : "Mark", country : "USA"},
        {name : "John", country : "England"}
    ];
});
app.controller ("sayHi", function ($scope) {
    $scope.say = "Hi, my name is John";
});
	/* The rootScope is available in the entire application */
app.run (function ($rootScope) {
    $rootScope.myName = "Jacke";
});