const express = require('express')
const router = express.Router()
const Messages = require('../models/message')
const checkJwt = require('../middleware/check-jwt')

router.get('/', checkJwt, async (req, res) => {
    let messages = await Messages.find()
    return res.json(messages)
})

router.post('/', async (req, res) => {
    let message = {
        contact: req.body.contact,
        createdAt: new Date()
    }
    let newMessage = new Messages(message)
    await newMessage.save()
    return res.sendStatus(201)
})

router.get('/:id', checkJwt, getMessage, (req, res) => {
    return res.json(res.message)
})

router.patch('/:id', async (req,res) => {
    await Messages.findByIdAndUpdate(req.params.id, req.body.message, {
        new: true,
        useFindAndModify: false
    }, (err, message) => {
        if (err) {
            return res.sendStatus(500).json(err)
        }
        return res.json(message)
    })
})

router.delete('/:id', checkJwt, getMessage, (req,res) => {
    try {
        res.message.remove()
        res.json({message: "message removed succesfully"})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})



async function getMessage (req, res, next) {
    let message
    try {
        message = await Messages.findById(req.params.id)
        if (!message) {
            return res.sendStatus(404)
        }
    } catch (err) {
        return res.sendStatus(500)
    }
    res.message = message
    next()
}

module.exports = router