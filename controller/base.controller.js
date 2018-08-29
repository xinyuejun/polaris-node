'use strict'

class BaseController {
    handleErr (res, err, resultCode = 500) {
        if (err) {
            console.error(err)
            res.json({
                resultCode: resultCode,
                message: err
            })
        }
    }
    handleRes (res, result, resultCode = 200) {
        res.json({
            resultCode: resultCode,
            data: result
        })
    }
}

module.exports = BaseController
