const router = require('express').Router();

const Friends = require('./friend-model')

router.get('/search', async (req, res) => {
    let userSearch = { username: req.body.username }
    try {
        const foundFriend = await Friends.findFriendScores(userSearch)
        res.status(200).json(foundFriend)
    } catch (err) {
        res.status(404).json({ Message: "Friend could not be found", err })
    }
})

router.post('/add/:id', async (req, res) => {
    requestOptions = {
        headers: {
            accept: 'application/json',
            userID: req.decodedJwt.userID
        }
    }
    const addFriend = { friend_id: req.params.id, user_id: req.decodedJwt.userID }

    try {
        const addedFriend = await Friends.addFriend(addFriend)
        res.status(201).json(addedFriend)
    } catch (err) {
        res.status(404).json({ Message: "Friend could not be added", err })
    }
})

router.get('/', async (req, res) => {
    requestOptions = {
        headers: {
            accept: 'application/json',
            userID: req.decodedJwt.userID
        }
    }

    const userID = req.decodedJwt.userID
    try {
        const allFriends = await Friends.allFriends(userID)
        res.status(200).json(allFriends)
    } catch{
        res.status(404).json({ Message: "Friends could not be found" })
    }
})

module.exports = router