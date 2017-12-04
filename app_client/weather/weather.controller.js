(function() {

    angular
        .module('darkskyApp')
        .controller('weatherCtrl', weatherCtrl);

    weatherCtrl.$inject = ['$scope', 'DarkskyWeather'];

    function weatherCtrl($scope, SelectedData, DarkskyWeather) {

        var vm = this;
        console.log(window.location);

        vm.content = "Weather";

        vm.lat = "32.7356900";
        vm.lon = "-97.1080700";
        //vm.selectedArrivalICAO = "";
        //vm.selectedWeight = "";

        //check selected Departure
        if (vm.lat !== null) {
            vm.lat = DarkskyWeather.lat;
        }
        
        //check selected Arrival
        if (vm.lon !== null) {
            vm.lon = DarkskyWeather.lon;
        }
        /*
        //check selected weight
        if (SelectedData.selectedWeight !== null) {
            vm.selectedWeight = SelectedData.selectedWeight;
        }
        */

        //refactored for Angular 1.6 - removed success/error, used Promises...
        vm.getDepartureWeather = function() {
            
            var lat = vm.lat;
            console.log(lat);
            var lon = vm.lon;
            console.log(lon);            

            DarkskyWeather.getWeather(lat, lon)
                .then(function(response) {
                    vm.departureWeather = response.data;
                    console.log(vm.departureWeather);
                })
                .catch(function(e) {
                    console.log(e);
                });
        }
/*
        //refactored for Angular 1.6 - removed success/error, used Promises...        
        vm.getArrivalWeather = function() {
            
            var lat = 32.7356900;
            var lon = -97.1080700;

            //refactored for Angular 1.6 - removed success/error, used Promises...
            DarkskyWeather.getWeather(lat, lon)
                .then(function(response) {
                    vm.arrivalWeather = response.data;
                    console.log(vm.arrivalWeather);
                })
                .catch(function(e) {
                    console.log(e);
                });
        }
        */
        //call services
        vm.getDepartureWeather();
        //vm.getArrivalWeather();

    }

})();
