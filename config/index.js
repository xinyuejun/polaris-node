'use strict'

const _ = require('lodash')
const baseConfig = {}

const config = _.merge(baseConfig, require(`./${process.env.NODE_ENV}.js`) || {})

module.exports = config