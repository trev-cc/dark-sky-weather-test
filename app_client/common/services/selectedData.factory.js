(function() {

  angular
    .module('darkskyApp')
    .factory('SelectedData', selectedData);

  //selectedData.$inject = ['$http'];
  function selectedData () {
      return {
          selectedDepartureICAO : '',
          selectedArrivalICAO : '',
          selectedWeight : ''
      };
  }

})();