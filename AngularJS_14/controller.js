let app = angular.module("myApp", []);
app.directive("myDirective", function() {
    return {
        require : "ngModel",
        link : function($scope, element, attr, mCtrl) {
            function myValidation(value) {
                if (value.indexOf("A") > -1) {
                    mCtrl.$setValidity("charA", true);
                } 
                else {
                    mCtrl.$setValidity("charA", false);
                }
                return value;
            }
            mCtrl.$parsers.push(myValidation);
        }
    };
});