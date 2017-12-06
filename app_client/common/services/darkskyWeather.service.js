(function() {

    angular
        .module('darkskyApp')
        .service('DarkskyWeather', darkskyWeather);

    darkskyWeather.$inject = ['$http'];

    function darkskyWeather($http) {
        
        /*if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showLocation);
        }else{
            console.log('Geolocation is not supported by this browser.');
        }
        });
            function showLocation(position){
                var latitude = position.coords.latitude;
                console.log("latitude: " + latitude);
                document.getElementById('<?php echo $this->get_field_id( 'darksky_api_lat' ); ?>')
                    .setAttribute('value', latitude);
                var longitude = position.coords.longitude;
                console.log("longitude: " + longitude);
                document.getElementById('<?php echo $this->get_field_id( 'darksky_api_lon' ); ?>')
                    .setAttribute('value', longitude);
            }*/
        
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
