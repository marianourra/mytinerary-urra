const Router = require('express').Router();
const citiesControllers = require('../controllers/citiesControllers')
const {getCities, oneCity, newCity, deleteCity, modifiedCity} = citiesControllers

Router.route('/cities')
.get(getCities)
.post(newCity)

Router.route('/cities/:id')
.get(oneCity)
.delete(deleteCity)
.put(modifiedCity)
module.exports = Router

