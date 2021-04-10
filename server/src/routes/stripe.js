const express = require("express")
const router = express.Router()
const stripe = require("stripe")(process.env.STRIPE_SECRET)


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