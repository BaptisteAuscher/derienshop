const express = require('express')
const router = express.Router()
const Product = require('../models/product')

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (err) {
        res.status(500).json({message : err.message})
    }
})

// Get one product
router.get('/:id', getProduct, (req, res) => {
    res.json(res.product)
})

// Add one product
router.post('/', (req, res) => {
    const product = new Product({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        price: req.body.price
    })
    try {
        const newProduct = product.save()
        res.status(201).json(newProduct)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

// Update one product
router.patch('/:id', (req, res) => {
    res.send('update one product by id : ' + req.params.id)
})

// Delete one product
router.delete('/:id', (req, res) => {
    res.send('delete one product by id : ' + req.params.id)
})

async function getProduct(req, res, next) {
    let product
    try {
        product = await Product.findById(req.params.id)
        if (product == null) {
            return res.status(404).json({ message : "Product not found" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.product = product
    next()
}


module.exports = router