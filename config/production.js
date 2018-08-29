'use strict'

export default {
    express: {
        port: 9000
    },
    mongodb: {
        uri: 'mongodb://localhost/polaris-blog'
    },
    redis: {
        db: 0
    },
    seedDB: true,
    session: {
        cookie: {
            maxAge: 5 * 60 * 1000
        }
    }

}