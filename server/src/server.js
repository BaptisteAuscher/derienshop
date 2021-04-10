require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const helmet = require('helmet')
const jwt = require('jsonwebtoken')

let whitelist = process.env.ALLOWED_ORIGINS.split(",")
const corsOptions = {
    origin: whitelist,
    allowedHeaders: ['Content-Type', 'Authorization']
}


const app = express()
app.use(morgan('combined'))
app.use(helmet())
app.use(bodyParser.json())
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.set('useCreateIndex', true)

const db = mongoose.connection
db.on('error', err => console.error(err))
db.once('open', () => console.log('Connected to database'))


app.use('/api/products', cors(corsOptions), require('./routes/products'))
app.use('/api/orders', cors(corsOptions), require('./routes/orders'))
app.use('/api/messages', cors(corsOptions), require('./routes/messages'))
app.use('/api/users', cors(corsOptions), require('./routes/users'))

app.use('/api/stripe', cors(corsOptions), require('./routes/stripe'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})