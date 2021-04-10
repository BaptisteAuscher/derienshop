const express = require('express')
const router = express.Router()
const Orders = require('../models/order')
const checkJwt = require('../middleware/check-jwt')

router.get('/', checkJwt, async (req, res) => {
    let orders
    try {
        orders = await Orders.find()
        res.json(orders)
    } catch (err) {
        console.log(err)
    }
})

router.get('/:id', getOrder, (req,res) => {
    res.send(res.order)
})

router.post('/', (req, res) => {
    let order = {
        ...req.body.order,
        createdAt: new Date()
    }
    let newOrder = new Orders(order)
    newOrder.save()
    return res.json({id : newOrder._id})
})

router.patch('/:id', checkJwt, async (req, res) => {
    await Orders.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        useFindAndModify: false
    }, (err, order) => {
        if (err) {
            return res.sendStatus(500)
        }
        return res.json(order)
    })
})

async function getOrder (req, res, next) {
    let order
    try {
        order = await Orders.findById(req.params.id)
        if (order == null) {
            res.sendStatus(404).json({message: 'Order not found'})
        }
    } catch (err) {
        return res.sendStatus(500).json({message: err.message, type: 'error'})
    }
    res.order = order
    next()
}

module.exports = router