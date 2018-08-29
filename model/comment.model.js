'use strict'

const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const commentSchema = new Schema({
    nickname: { type: String },
    content: { type: String },
    isAdmin: { type: Boolean, default: false },
    status: { type: Boolean, default: false },
    create_at: { type: Date, default: Date.now }
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment;
