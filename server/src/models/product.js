const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:  {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    colors: [
        {
            color: {
                type: String,
                required: true
            },
            hex: {
                type: String,
                required: true
            },
            images: [{
                link: {
                    type: String,
                    required: true
                },
                alt: {
                    type: String,
                    required: true
                }
            }],
            sizes: [{
                size: {
                    type: String,
                    required: true
                },
                qty: {
                    type: Number,
                    default: 10
                }
            }]
        }
    ],
    price: {
        type: Number,
        required: true
    },
    isSoldOut: {
        type: Boolean,
        required: true,
        default: false
    }
});


module.exports = mongoose.model('Product', productSchema)