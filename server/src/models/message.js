const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        required: true
    },
    contact: {
        mail: {
            type: String,
            required: true
        },
        object: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    },
    done: {
        type: Boolean,
        default: false
    }
});


module.exports = mongoose.model('Messages', messageSchema)