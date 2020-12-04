const mongoose = require('mongoose')

const colorSchema = new mongoose.Schema({
    color: {
        type: String,
        required: true
    },
    hex: {
        type: String,
        required: true
    },
    images: [{
        type: String,
        required: true,
    }],
    sizes: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Size'}
    ]
});


module.exports = mongoose.model('Color', colorSchema)