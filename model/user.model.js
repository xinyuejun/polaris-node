'use strict'

const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const UserSchema = new Schema({
    nickname: { type: String },
    email: { type: String },
    isAdmin: { type: Boolean, default: false },
    password: { type: String },
    status: { type: Boolean, default: false },
    create_at: { type: Date, default: Date.now },
    update_at: { type: Date, default: Date.now }
})

UserSchema.pre('save', (next) => {
    const now = new Date()
    this.update_at = now
    next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User
