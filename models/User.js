const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true}, 
    email: {type: String, required: true},
    password: {type: String, required: true},
    image_url: {type: String},
    country: {type: String},
    google: {type: Boolean, default: false}
})

const User = mongoose.model('user', userSchema)

module.exports = User;