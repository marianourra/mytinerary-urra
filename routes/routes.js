const Router = require('express').Router();
const citiesControllers = require('../controllers/citiesControllers')

Router.route('/cities')
.get(citiesControllers.getCities)

Router.route('/cities/:id')
.get(citiesControllers.getOneCity)

module.exports = Router
