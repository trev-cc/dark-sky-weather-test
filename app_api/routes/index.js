var express = require('express');
var router = express.Router();
var ctrlDarkSkyApi = require('../controllers/darkskyapi');

router.get('/darkskyapi/:lat/:lon', ctrlDarkSkyApi.getWeatherData);

module.exports = router;
