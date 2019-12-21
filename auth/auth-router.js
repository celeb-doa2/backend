const router = require('express').Router();
const bcrypt = require('bcryptjs')
const secret = require('../utils/secrets')
const jwt = require('jsonwebtoken')
const Auth = require('./auth-model')


router.post('/register', async (req, res) => {
    let newUser = req.body
    const hashP = bcrypt.hashSync(newUser.password, 10)
    newUser.password = hashP

    try {
        const newU = await Auth.register(newUser)
        res.status(201).json({ Message: "User created", newU })
    } catch (err) {
        res.status(404).json({ Message: "User wasn't created", err })
    }

})


router.post('/login', (req, res) => {
    let { username, password } = req.body

    Auth.login({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = makeToken(user)

                res.status(200).json({ Message: `Welcome ${user.username}`, token: token })
            } else {
                res.status(401).json({ message: 'invalid login credentials provided' })
            }
        }).catch(err => {
            res.status(500).json({ message: 'server could not be reached' })
        })

})

function makeToken(user) {
    const payload = {
        username: user.username,
        userID: user.id
    }
    const options = {
        expiresIn: '5d'
    }
    const token = jwt.sign(payload, secret.jwtSecret, options)

    return token
}

module.exports = router