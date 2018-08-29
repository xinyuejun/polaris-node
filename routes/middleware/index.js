'use strict'

const maxAge = 60 * 3

exports.setExpires = (req, res, next) => {
    res.setHeader('Cache-Control', `max-age=${maxAge}`)
}
