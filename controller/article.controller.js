'use strict'

const mongooose = require('mongoose')
const Article = mongooose.model('Article')
const BaseController = require('./base.controller')

class ArticleController extends BaseController {
    constructor () {
        super()

        this.addArticle = this.addArticle.bind(this)
        this.getArticle = this.getArticle.bind(this)
    }
    addArticle (req, res, next) {
        const newArticle = new Article(addArticle(req))
        newArticle.save((err, result) => {
            if (err) {
                this.handleErr(res, err, 500)
            }
            this.handleRes(res, result, 200)
        })
    
    }
    getArticle (req, res, next) {
        Article.find().exec()
            .then(result => {
                if (result) this.handleRes(res, result, 200)
            })
    }
}

function addArticle(req) {
    return {
        nickname: req.body.nickname ? req.body.nickname : '',
        title: req.body.title ? req.body.title : '',
        description: req.body.description ? req.body.description : '',
        content: req.body.content ? req.body.content : '',
        skim: req.body.skim ? req.body.skim : 0,
        isAdmin: req.body.isAdmin ? req.body.isAdmin : true,
        status: req.body.status ? req.body.status : true
    }
}

module.exports = new ArticleController
