'use strict'

const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const articleSchema = new Schema({
    nickname: { type: String },
    title: { type: String },
    description: { type: String },
    content: { type: String },
    comment: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }] ,
    skim: { type: Number },
    isAdmin: { type: Boolean, default: false },
    status: { type: Boolean, default: false },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now }
})

articleSchema.pre('save', (next) => {
    const now = new Date()
    this.update_at = now
    next()
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article