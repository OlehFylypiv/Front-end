let app = angular.module("myApp", []);
app.controller ("myCtrl", function($scope) {
	$scope.master = { firstName : "Oleh", lastName : "Fylypiv" };
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
});