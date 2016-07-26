(function() {
  
  angular
    .module('navisensApp')
    .service('DataService', DataService)

    DataService.$inject = ['$http']

    function DataService($http) {
      const data_BASE_URL = '/api/data/';

      this.getAllData = () => {
        return $http.get(data_BASE_URL)
      }

      this.getDeviceById = (id) => {
        return $http.get(data_BASE_URL + id)
      }
    }
})();