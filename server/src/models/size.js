const mongoose = require('mongoose')

const sizeSchema = new mongoose.Schema({
    size:  {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    }
});


module.exports = mongoose.model('Size', sizeSchema)