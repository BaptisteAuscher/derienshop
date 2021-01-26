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
router.post('/', async (req, res) => {
    const product = new Product(req.body)
    console.log(product)
    await product.validate(err => {
        return res.json(err)
    })
    await product.save(err => console.log(err))
    res.status(201).json({ message: "Product added succesfully" })
})

// Update one product
router.patch('/:id', async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id,
        {
            ...req.body.product
        },
        {
            new:true,
            useFindAndModify: false
        },
        (err, product) => {
            if (err) {
                return res.status(500).json({message:err.message})
            }
            return res.json(product)
        }
    )
})

// Delete one product
router.delete('/:id', getProduct, async (req, res) => {
    try {
        res.product.remove()
        res.json({message: "product removed succesfully"})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
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