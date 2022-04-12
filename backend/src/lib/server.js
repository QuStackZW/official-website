'use strict'

import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
const router = express.Router()

// env vars
const {
    PORT,
    MONGO_URI,
    CORS_ORIGIN
} = process.env

mongoose.Promise = global.Promise
mongoose.connect(MONGO_URI, { useNewUrlParser: true })

app.use(bodyParser.json(), cors({ origin: CORS_ORIGIN }))

app.use(require('../route/auth-router'));

app.all('*', (req, res) => {
    res.status(404).send({
        message: 'Not Found'
    })
})

//error middleware
app.use(require('./error-middleware'));

export const start = () => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`)
    })
}

export const stop = () => {
    app.close(() => {
        console.log('Server stopped')
    })
}