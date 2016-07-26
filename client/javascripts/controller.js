(function() {
  
  angular
    .module('navisensApp')
    .controller('HomeController', HomeController)

    HomeController.$inject = ['data']

    function HomeController(data) {
      let vm = this

      vm.data = data.data

    }
})();