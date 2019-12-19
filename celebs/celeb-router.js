const router = require('express').Router();
const CelebCalls = require('./celeb-model')


router.get('/celeb', async (req, res) => {
    try {
        const celeb = await CelebCalls.getCeleb()
        res.status(200).json(celeb)
    } catch{
        res.status(200).json({ Message: "No celebrity was found" })
    }
})

module.exports = router