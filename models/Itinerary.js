const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
    tourName: {type: String, required: true},
    duration: {type: Number, required: true},
    price: {type: Number, required: true},
    publisherImage: {type: String, required: true},
    publisherName: {type: String, required: true},
    city: {type:[{type: mongoose.Types.ObjectId, ref: 'city', required: true}], required: true},
    likes: {type: Array, required: true},
    hashtags: {type: Array, required: true},
})

const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports = Itinerary;