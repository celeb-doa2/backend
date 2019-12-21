const router = require('express').Router();

const Scores = require('./score-model')

router.post('/', async (req, res) => {
    requestOptions = {
        headers: {
            accept: 'application/json',
            userID: req.decodedJwt.userID
        }
    }
    const score = { score: req.body.score, userID: req.decodedJwt.userID }
    try {
        const newScore = await Scores.uploadScore(score)
        res.status(201).json({ Message: "New score added" })
    } catch (err) {
        res.status(500).json({ Message: "The score could not be added" })
    }
})

router.get('/', async (req, res) => {
    requestOptions = {
        headers: {
            accept: 'application/json',
        }
    }
    const id = req.decodedJwt.userID
    try {
        console.log(id)
        const allScores = await Scores.getScores(id)
        res.status(200).json(allScores)
    } catch (err) {
        res.status(500).json({ Message: "The scores could not be found", err })
    }
})

module.exports = router