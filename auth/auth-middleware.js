const jwt = require('jsonwebtoken')
const secret = require('../utils/secrets')
const { check, validationResult } = require('express-validator')


function userAuthTest(req, res, next) {
    const token = req.headers.authorization

    if (token) {
        jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ Message: "you are not logged in" })
            } else {
                req.decodedJwt = decodedToken
                next()
            }
        })
    } else {
        res.status(401).json({ message: 'the token could not be found' })
    }
}

function validationRules() {
    return [
        check('username').not().isEmpty().withMessage('The username must have more than 3 characters'),
        check('password').isLength({ min: 5 }).withMessage('The password must contain 5 or more characters')
    ]
}

function userCharacters(req, res, next) {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        next()
    } else {
        const extractedErrors = []
        errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

        return res.status(422).json({
            errors: extractedErrors
        })
    }
}


module.exports = {
    userAuthTest,
    validationRules,
    userCharacters
}