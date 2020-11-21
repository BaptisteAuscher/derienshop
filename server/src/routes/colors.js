const express =  require('express')
const router = express.Router()

const Color = require('../models/color')

router.get('/', async (req, res) => {
    const colors = await Color.find()
    res.json(colors)
})

router.get('/:id', getColor, (req, res) => {
    res.json(res.color)
})

router.post('/', (req, res) => {
    const color = new Color(req.body.color)
    try {
        color.save()
        res.status(201).json({ message: "Color added succesfully" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.patch('/:id', async (req, res) => {
    await Color.findByIdAndUpdate(
        req.params.id, 
        {
            ...req.body.color
        },
        {
            new:true,
            useFindAndModify: false
        },
        (err, color) => {
            if (err) {
                return res.status(500).json({ message: err.message })
            }
            return res.json(color)
        }
    )
})

router.delete('/:id', getColor, (req, res) => {
    try {
        res.color.remove()
        res.json({message: "color removed succesfully"})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})


async function getColor(req, res, next) {
    let color;
    try {
        color = Color.findById(req.params.id)
        if (color == null) {
            return res.status(404).json({ message : "Color not found" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.color = color
    next()

}

module.exports = router