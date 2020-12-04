const express =  require('express')
const router = express.Router()

const Size = require('../models/size')

router.get('/', async (req, res) => {
    const sizes = await Size.find()
    res.json(sizes)
})

router.get('/:id', getSize, (req, res) => {
    res.json(res.size)
})

router.post('/', (req, res) => {
    const size = new Size(req.body.color)
    try {
        size.save()
        res.status(201).json({ message: "Size added succesfully" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.patch('/:id', async (req, res) => {
    await Size.findByIdAndUpdate(
        req.params.id, 
        {
            ...req.body.size
        },
        {
            new:true,
            useFindAndModify: false
        },
        (err, size) => {
            if (err) {
                return res.status(500).json({ message: err.message })
            }
            return res.json(size)
        }
    )
})

router.delete('/:id', getSize, (req, res) => {
    try {
        res.size.remove()
        res.json({message: "Size removed succesfully"})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})


async function getSize(req, res, next) {
    let size;
    try {
        size = Size.findById(req.params.id)
        if (size == null) {
            return res.status(404).json({ message : "Size not found" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.size = size
    next()

}

module.exports = router