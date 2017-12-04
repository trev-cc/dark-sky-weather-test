(function() {

    angular
        .module('darkskyApp')
        .service('DarkskyWeather', darkskyWeather);

    darkskyWeather.$inject = ['$http'];

    function darkskyWeather($http) {
        var getWeather = function(lat, lon) {
            //darkskyapi/:lat/:lon
            lat = "32.7356900"
            lon = "-97.1080700"
            return $http.get('/api/darkskyapi' + '/' + lat + '/' + lon);
        };
        
        return {
            getWeather: getWeather,
        };
    }
})();
