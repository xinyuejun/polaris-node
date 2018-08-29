'use strict'

// compression  https://github.com/expressjs/compression#readme
import compression from 'compression'
import bodyParser from 'body-parser'
import cors from 'cors'
import methodOverride from  'method-override'
import cookierParser from 'cookie-parser'
import passport from 'passport'
import session from 'express-session'
import RedisStore from 'connect-redis'
import config from './env'

RedisStore(session)

const serve = (app) => {
    app.enable('trust proxy')
    const options = {
        origin: true,
        credentials: true
    }
    app.use(cors(options))
    app.use(compression())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())
    app.use(methodOverride)
    app.use(cookierParser)
    app.use(session({
        secret: config.session.secret,
        resave: false,
        saveUninitialized: false,
        store: new RedisStore({
            host: config.redis.host,
            port: config.redis.port,
            password: config.redis.password || ''
        }),
        cookie: config.session.cookie
    }))
    app.use(passport.initialize())
}

export default serve
