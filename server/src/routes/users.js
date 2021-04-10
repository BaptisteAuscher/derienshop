const express = require('express')
const router = express.Router()
const Users = require('../models/user')
const jwt = require('jsonwebtoken')
const checkJwt = require('../middleware/check-jwt')

router.get('/', checkJwt, async (req,res) => {
    let users = await Users.find()
    if (users) {
        return res.json(users)
    }
})

router.post('/', checkJwt, async (req, res) => {
    let user = {
        ...req.body.user
    }
    console.log(user)
    let newUser = new Users(user)
    newUser.save()
    return res.sendStatus(201)
})

//authenticate
router.post('/login-admin', async (req, res) => {

    let { email, password } = req.body.user
    let user = await Users.findOne({email})

    if (!user) { 
        return res.status(404).json({
            msg: "Cette adresse mail n'existe pas"
        })
    }

    if (user.password !== password) {
        return res.status(403).json({
            msg: "Identifiants invalides"
        })
    }

    const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET)


    return res.json({
        user,
        accessToken
    })

})


module.exports = router

