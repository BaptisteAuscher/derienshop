const express = require("express")
const router = express.Router()
const stripe = require("stripe")('sk_test_51GbvMVIIGFeAd07oNNYpcrJWexSQLGVVS4FObqXhLYxUvY33nQHfHfqOg34UKNfQmRGGmnjgzZc1ejUSuNab4tOs005ATuB3Wl')


//creer le payment intent (fonction appelé côté client des que les frais de livraison sont ajoutés a la fin de l'étape 2 du checkout)
router.post('/create-payment-intent', async (req, res) => {
    let cart = req.body.cart

    const paymentIntent = await stripe.paymentIntents.create({
        amount: cart.total,
        currency: 'eur'
    })
    
    res.json({
        clientSecret: paymentIntent.client_secret
    })

})

module.exports = router