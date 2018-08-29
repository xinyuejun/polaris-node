/**
 * 初始化数据
 */

'use strict'

const mongoose = require('mongoose')
const User = mongoose.model('User')

User.countDocuments((err, count) => {
    if (err) process.exit(1)
    if (count === 0) {
        User.remove(err => {
            User.create({
                nickname: 'admin',
                email: 'polaris@long.com',
                isAdmin: true,
                password: 'admin',
                status: true
            })
        })
    }

})