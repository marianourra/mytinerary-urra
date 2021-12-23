const Router = require('express').Router();
const citiesControllers = require('../controllers/citiesControllers')
const {getCities, oneCity, newCity, deleteCity, modifiedCity} = citiesControllers
const itinerariesControllers = require('../controllers/itinerariesControllers')
const {getItineraries, oneItinerary, newItinerary, deleteItinerary, modifiyItinerary, getItinerariesByCity, likeItinerary, getAllComments, addNewComment, editComment, deleteComment } = itinerariesControllers
const userControllers = require ("../controllers/userControllers")
const {addNewUser, signUser } = userControllers 
const activitiesControllers = require ('../controllers/activitiesControllers')
const {addActivity, retrieveActivitiesOfOneItinerary} = activitiesControllers
const passport = require('passport')


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

Router.route('/user/signUp')
.post(addNewUser)

Router.route('/user/signIn')
.post(signUser)

Router.route("/tokenVerification")
.get(passport.authenticate("jwt", {session: false}),userControllers.tokenVerification)

Router.route("/activities")
.post(addActivity)

Router.route("/activities/:itineraryId")
.get(retrieveActivitiesOfOneItinerary)

Router.route("/itinerary/like/:id")
.put(passport.authenticate('jwt', {session:false}), likeItinerary)

Router.route('/itinerary/comments')
.post(addNewComment)
.delete(deleteComment)

Router.route('/itinerary/comments/:id')
.get(getAllComments)
.put(editComment)


module.exports = Router

