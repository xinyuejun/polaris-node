const createError = require('http-errors')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const errorHandler = require('errorhandler');

const articleRouter = require('./routes/article.route')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

const whitelist = ['http://localhost:8080']

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors())

require('./routes/article.route')(app);

if (process.env.NODE_ENV === 'development') {
  app.use(errorHandler());
}else{
	app.use(function (err, req, res, next) {
	  return res.status(500).send();
	});
}
module.exports = app
