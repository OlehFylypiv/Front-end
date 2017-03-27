let app = angular.module("myApp", []);
app.controller ("myCtrl", function ($scope) {
	$scope.count1 = 0;
	$scope.count2 = 0;
	$scope.count3 = 0;
	$scope.funcForClick = function() {
        $scope.count3--;
    };
    $scope.showMe = false;
    $scope.showMenu = function() {
        $scope.showMe = !$scope.showMe;
    };
	$scope.myXY = function(myE) {
        $scope.x = myE.clientX;
        $scope.y = myE.clientY;
    };
});