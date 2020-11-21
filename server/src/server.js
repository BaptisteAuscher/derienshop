require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection
db.on('error', err => console.error(err))
db.once('open', () => console.log('Connected to database'))


app.use('/api/products', cors(), require('./routes/products'))
app.use('/api/colors', cors(), require('./routes/colors'))


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})