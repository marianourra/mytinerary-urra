const Router = require('express').Router();
const citiesControllers = require('../controllers/citiesControllers')
const {getCities, oneCity, newCity, deleteCity, modifiedCity} = citiesControllers
const itinerariesControllers = require('../controllers/itinerariesControllers')
const {getItineraries, oneItinerary, newItinerary, deleteItinerary, modifiyItinerary, getItinerariesByCity } = itinerariesControllers

Router.route('/cities')
.get(getCities)
.post(newCity)

Router.route('/cities/:id')
.get(oneCity)
.delete(deleteCity)
.put(modifiedCity)

Router.route('/itineraries')
.get(getItineraries)
.post(newItinerary)

Router.route('/itineraries/:id')
.get(oneItinerary)
.delete(deleteItinerary)
.put(modifiyItinerary)

Router.route('/itineraries/city/:id')
.get(getItinerariesByCity)

module.exports = Router

