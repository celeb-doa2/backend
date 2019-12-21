const jwt = require('jsonwebtoken')
const secret = require('../utils/secrets')


module.exports = (req, res, next) => {
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
};
