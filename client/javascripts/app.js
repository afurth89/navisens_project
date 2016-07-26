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
        .when('/:id', {
          templateUrl: '../views/show.html',
          controller: 'ShowController',
          controllerAs: 'vm',
          resolve: {
            deviceData: getDataById
          }
        })
        .otherwise({redirectTo: '/'})
      $locationProvider.html5Mode(true);
    }

    getAllData.$inject = ['DataService']

    function getAllData(DataService) {
      return DataService.getAllData();
    }

    getDataById.$inject = ['DataService', '$route']

    function getDataById(DataService, $route) {
      return DataService.getDeviceById($route.current.params.id);
    }

})();