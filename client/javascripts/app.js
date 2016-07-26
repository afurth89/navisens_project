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
          controllerAs: 'vm',
          resolve: {
            data: getAllData
          }
        })
        .otherwise({redirectTo: '/'})
      $locationProvider.html5Mode(true);
    }

    getAllData.$inject = ['DataService']

    function getAllData(DataService) {
      return DataService.getAllData();
    }

})();