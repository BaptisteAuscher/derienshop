const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    color: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Color',
        required: true
    },
    size: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Size',
        required: true
    }
});


module.exports = mongoose.model('Order', orderSchema)