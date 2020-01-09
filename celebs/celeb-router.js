const router = require('express').Router();
const CelebCalls = require('./celeb-model')


router.get('/', async (req, res) => {
    try {
        const celeb = await CelebCalls.getCeleb()
        res.status(200).json(celeb)
    } catch{
        res.status(400).json({ Message: "No celebrity was found" })
    }
})

router.get('/all', async (req, res) => {
    try {
        const celebs = await CelebCalls.allCelebs()
        res.status(200).json(celebs)
    } catch{
        res.status(400).json({ Message: "No celebrities were found" })
    }
})

router.post('/', async (req, res) => {
    const newCeleb = req.body
    try {
        const addedCeleb = await CelebCalls.addCeleb(newCeleb)
        res.status(201).json({ Message: "New Celebrity Added", addedCeleb })
    } catch (err) {
        res.status(400).json({ Message: "Celebrity could not be added", err })
    }
})

router.put('/', async (req, res) => {
    const celebChange = req.body
    try {
        const editedCeleb = await CelebCalls.editCeleb(celebChange)
        res.status(202).json({ Message: "Celebrity Edited", editedCeleb })
    } catch (err) {
        res.status(400).json({ Message: "Celebrity could not be edited", err })
    }
})

module.exports = router