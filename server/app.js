'use strict'
import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import fs from 'fs'

import config from './config'
import serve from './serve'
import route from 'route'


mongoose.connect(config.mongodb.host)

// mongoose promise
mongoose.Promise = global.Promise

const app = express()
serve(app)
route(app)

if(config === 'development') app.use(errorCallback())
else {
    app.use((err, req, res, next) => {
        return res.status(500).send
    })
}

app.listen(config.express.port, () => {
    console.log(`express run %d`, config.express.port)
})
