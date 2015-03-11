//Routes
angular.module('48Laws', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
	.when('/laws', {
		templateUrl: 'templates/pages/laws/index.html',
		controller: 'LawsIndexController'
	})
	.when('/laws/:id', {
		templateUrl: 'templates/pages/laws/show.html',
		controller: 'LawsShowController'
	}).when('/random-law', {
		templateUrl: 'templates/pages/laws/show.html',
		controller: 'LawsRandomController'
	}).when('/about', {
		templateUrl: 'templates/pages/about.html'
	}).otherwise({
		templateUrl: 'templates/pages/laws/show.html',
		controller: 'LawsShowFirstController'
	});

}]);

//Controllers
angular.module('48Laws')
.controller('LawsIndexController', ['$http', '$scope', function($http, $scope) {
	
	$http({method: 'GET', url: './data/laws.json'}).success(function(data) {
		$scope.laws = data;
	});

}]).controller('LawsShowFirstController', ['$http', '$scope', function($http, $scope) {

	$http({method: 'GET', url: './data/law1.json'}).success(function(data) {
		$scope.law = data;
	});

}]).controller('LawsShowController', ['$http', '$routeParams', '$scope', function($http, $routeParams, $scope) {
	
	if($routeParams.id == undefined
		 || $routeParams.id <= 0 ||  $routeParams.id > 48){
		var id = 1;
	}else{
		var id = $routeParams.id;
	}

	$http({method: 'GET', url: './data/law' + id + '.json'}).success(function(data) {
		$scope.law = data;
		$scope.title = $scope.law.title;
	});

}]).controller('LawsRandomController', ['$http', '$location', function($http, $location) {

	var id = Math.floor((Math.random() * 48) + 1);
	$location.path('/laws/' + id);

}]);


//Directives
angular.module('48Laws').directive('feLaw', [function() {
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/fe-law.html'
	};
}]);
