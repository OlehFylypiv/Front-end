let countryApp = angular.module ("countryApp", []);
countryApp.controller ("CountryCtrl", function ($scope, $http) {
	$http.get ("countries.json").success (function(data) {
		$scope.countries = data;
	});
});