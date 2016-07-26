(function() {
  
  angular
    .module('navisensApp')
    .controller('HomeController', HomeController)
    .controller('ShowController', ShowController)

    HomeController.$inject = ['data']

    function HomeController(data) {
      let vm = this

      vm.data = data.data

    }

    ShowController.$inject = ['deviceData']

    function ShowController(deviceData) {
      let vm = this

      vm.data = deviceData.data
    }
})();