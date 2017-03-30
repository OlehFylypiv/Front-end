let app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
    $scope.nameUp = "OLEH";
    $scope.nameLower = angular.lowercase($scope.nameUp);
    $scope.nameLowerToUp = angular.uppercase($scope.nameLower);
    $scope.isNameUpStr = angular.isString($scope.nameUp);
    $scope.isNameUpNumber = angular.isNumber($scope.nameUp);
});