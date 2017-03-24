let app = angular.module ("myApp", []);
app.controller("myCtrl", function ($scope) {
    $scope.firstName = "Oleh",
    $scope.lastName = "Fylypiv"
    $scope.people = [
        { name : "Jani", country : "Norway" },
        { name : "Carl", country : "Sweden" },
        { name : "Margareth", country : "England"},
        { name : "Hege", country : "Norway" },
        { name : "Joe", country : "Denmark" },
        { name : "Gustav", country : "Sweden" },
        { name : "Birgit", country : "Denmark" },
        { name : "Mary", country : "England" },
        { name : "Kai", country : "Norway" }
        ];
     $scope.price = 100;
     $scope.names = [
        "Jani",
        "Carl",
        "Margareth",
        "Hege",
        "Joe",
        "Gustav",
        "Birgit",
        "Mary",
        "Kai"
    ];
     $scope.orderByClick = function (k) {
        $scope.myOrderBy = k;
    }
});
	/* A custom filter called "myFormat" */
app.filter ("myFormat", function () {
    return function (j) {
        let buff; 
        let txt = "";
        for (let i = 0; i < j.length; i++) {
            buff = j[i];
            if (i % 2 == 0) {
                buff = buff.toUpperCase();
            }
            txt += buff;
        }
        return txt;
    };
});