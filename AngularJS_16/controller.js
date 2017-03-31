let app = angular.module("checkForm", []);
app.controller("validationCtrl", function($scope) {
    $scope.validUsername = "Oleh Fylypiv";
    $scope.validEmail = "oleh.fylypiv@gmail.com";
    
    $scope.reset = function() {
        $scope.username = validUsername;
        $scope.email = validEmail;
    };   
   
    $scope.checkData = function() {
        if ($scope.username != validUsername || $scope.email != validEmail) {
            alert("Data do not match with data by default");
        } 
        else {
            alert("All is well");
        }
    };
});