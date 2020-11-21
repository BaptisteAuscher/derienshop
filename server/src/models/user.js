const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:  {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    adressOne: {
        type: String,
        required: true
    },
    adressTwo: {
        type: String
    },
    additionalAdress: {
        type: String
    },
    password: {
        type: String,
        required: true
    },

});


module.exports = mongoose.model('Customer', customerSchema)