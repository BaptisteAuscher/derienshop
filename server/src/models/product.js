const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:  {
        type: String,
        required: true
    },
    colors: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'Color'}
    ],
    price: {
        type: Number,
        required: true
    }
});


module.exports = mongoose.model('Product', productSchema)