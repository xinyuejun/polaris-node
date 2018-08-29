'use strict'
const express = require('express')
const router = express.Router()

const setExpires = require('./middleware').setExpires

const articleController = require('../controller/article.controller')

module.exports = (app) => {
    app.post('/article/add', articleController.addArticle)
    app.get('/article', articleController.getArticle)
}
