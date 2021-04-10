const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    customer: {
        identity:{
            lastname: {
                type: String,
                required: true
            },
            firstname: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            }
        },
        delivery: {
            line1: {
                type: String,
                required: true
            },
            line2: {
                type: String
            },
            postal: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            country: {
                type: String,
                required: true
            }
        },
        payment: {
            method: {
                type: String,
                required: true,
            },
            orderID: {
                type: String,
                required: true
            }
        }
    },
    cart: {
        type: Object,
        required: true
    },
    createdAt : {
        type: Date,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
});


module.exports = mongoose.model('Order', orderSchema)