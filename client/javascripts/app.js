(function() {
  angular
    .module('navisensApp', ['ngRoute'])
    .config(config)

    config.$inject = ['$routeProvider', '$locationProvider']

    function config($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '../views/home.html',
          controller: 'HomeController',
          controllerAs: 'vm'
        })
        .otherwise({redirectTo: '/'})
      $locationProvider.html5Mode(true);
    }

})();